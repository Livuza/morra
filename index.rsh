'reach 0.1';
'use strict';

const deadline = 30;

//  0 = draw, 1 = charles, 2 = collins
const getOutcome = (charlesFingers, collinsFingers, charlesGuess, collinsGuess) => {
    if (charlesGuess == collinsGuess) {
        return 0;
    }
    else {
        if ((charlesFingers + collinsFingers) == charlesGuess) {
            return 1; // charles wins
        } 
        else {
            if ((charlesFingers + collinsFingers) == collinsGuess) {
                return 2; // collins wins
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
    const Charles = Participant('Charles', {
        ...Player,
        setWager: Fun([], UInt),
    });
    const Collins = Participant('Collins', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    });
    init();

    const notifyTimeout = () => {
        each([Charles, Collins], () => {
          interact.notifyTimeout();
        });
    };

    Charles.only(() => {
        const wagerAmt = declassify(interact.setWager());
    });
    Charles.publish(wagerAmt).pay(wagerAmt);
    commit();

    Collins.only(() => {
        interact.acceptWager(wagerAmt);
    });
    Collins.publish().pay(wagerAmt);

    var outcome = 0;
    invariant(balance() == 2 * wagerAmt);
    while(outcome == 0) {
        commit();

        Charles.only(() => {
            const [ _charlesFingers, _charlesGuess ] = interact.getFingersAndGuess();

            const [ _commitA, _saltA ] = makeCommitment(interact, _charlesFingers);
            const commitA = declassify(_commitA);

            const [ _guessCommitA, _guessSaltA ] = makeCommitment(interact, _charlesGuess);
            const guessCommitA = declassify(_guessCommitA);
        });
        Charles.publish(commitA, guessCommitA).timeout(relativeTime(deadline), () => closeTo(Collins,notifyTimeout));
        commit();

        Collins.only(() => {
            const [ collinsFingers, collinsGuess ] = declassify(interact.getFingersAndGuess());
        });
        Collins.publish(collinsFingers, collinsGuess).timeout(relativeTime(deadline), () => closeTo(Charles,notifyTimeout));
        commit();

        Charles.only(() => {
            const [ saltA, charlesFingers ] = declassify([ _saltA, _charlesFingers ]);
            const [ guessSaltA, charlesGuess ] = declassify([ _guessSaltA, _charlesGuess ]);
        });
        Charles.publish(saltA, charlesFingers, guessSaltA, charlesGuess).timeout(relativeTime(deadline), () => closeTo(Collins,notifyTimeout));
        checkCommitment(commitA, saltA, charlesFingers);
        checkCommitment(guessCommitA, guessSaltA, charlesGuess);
        commit();

        Charles.publish();

        outcome = getOutcome(charlesFingers, collinsFingers, charlesGuess, collinsGuess);
        continue;
    }

    transfer(balance()).to(outcome == 1 ? Charles : Collins);
    commit();

    each([Charles, Collins], () => {
        interact.seeOutcome(outcome);
    });

    exit();
});