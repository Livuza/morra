'reach 0.1';
'use strict';

const deadline = 30;

// 0 = draw, 1 = alice, 2 = bob
const getOutcome = (aliceFingers, bobFingers, aliceGuess, bobGuess) => {
    if (aliceGuess == bobGuess) {
        return 0;
    }
    else {
        if ((aliceFingers + bobFingers) == aliceGuess) {
            return 1; // alice wins
        } 
        else {
            if ((aliceFingers + bobFingers) == bobGuess) {
                return 2; // bob wins
            } 
            else {
                return 0; // draw
            }
        }
    }
}

const Player = {
    ...hasRandom,
    getFingersAndGuess: Fun([], Tuple(UInt, UInt)),
    seeOutcome: Fun([UInt], Null),
    notifyTimeout: Fun([], Null),
}

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...Player,
        setWager: Fun([], UInt),
    });
    const Bob = Participant('Bob', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    });
    init();

    const notifyTimeout = () => {
        each([Alice, Bob], () => {
          interact.notifyTimeout();
        });
    };

    Alice.only(() => {
        const wagerAmt = declassify(interact.setWager());
    });
    Alice.publish(wagerAmt).pay(wagerAmt);
    commit();

    Bob.only(() => {
        interact.acceptWager(wagerAmt);
    });
    Bob.publish().pay(wagerAmt);

    var outcome = 0;
    invariant(balance() == 2 * wagerAmt);
    while(outcome == 0) {
        commit();

        Alice.only(() => {
            const [ _aliceFingers, _aliceGuess ] = interact.getFingersAndGuess();

            const [ _commitA, _saltA ] = makeCommitment(interact, _aliceFingers);
            const commitA = declassify(_commitA);

            const [ _guessCommitA, _guessSaltA ] = makeCommitment(interact, _aliceGuess);
            const guessCommitA = declassify(_guessCommitA);
        });
        Alice.publish(commitA, guessCommitA).timeout(relativeTime(deadline), () => closeTo(Bob,notifyTimeout));
        commit();

        Bob.only(() => {
            const [ bobFingers, bobGuess ] = declassify(interact.getFingersAndGuess());
        });
        Bob.publish(bobFingers, bobGuess).timeout(relativeTime(deadline), () => closeTo(Alice,notifyTimeout));
        commit();

        Alice.only(() => {
            const [ saltA, aliceFingers ] = declassify([ _saltA, _aliceFingers ]);
            const [ guessSaltA, aliceGuess ] = declassify([ _guessSaltA, _aliceGuess ]);
        });
        Alice.publish(saltA, aliceFingers, guessSaltA, aliceGuess).timeout(relativeTime(deadline), () => closeTo(Bob,notifyTimeout));
        checkCommitment(commitA, saltA, aliceFingers);
        checkCommitment(guessCommitA, guessSaltA, aliceGuess);
        commit();

        Alice.publish();

        outcome = getOutcome(aliceFingers, bobFingers, aliceGuess, bobGuess);
        continue;
    }

    transfer(balance()).to(outcome == 1 ? Alice : Bob);
    commit();

    each([Alice, Bob], () => {
        interact.seeOutcome(outcome);
    });

    exit();
});
