import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno, done } from '@reach-sh/stdlib/ask.mjs';
const stdlib = loadStdlib(process.env);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdlib.balanceOf(who));

(async () => {
  const startingBalance = stdlib.parseCurrency(100);

  const accAlice = await stdlib.newTestAccount(startingBalance);
  const accBob = await stdlib.newTestAccount(startingBalance);

  const beforeAlice = await getBalance(accAlice);
  console.log(`Alice Starting Balance: ${beforeAlice}`);
  const beforeBob = await getBalance(accBob);
  console.log(`Bob Starting Balance: ${beforeBob}`);

  const ctcAlice = accAlice.contract(backend);
  const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

  const Player = (who) => ({
    ...stdlib.hasRandom,
    getFingersAndGuess: async () => {
      const fingers = Math.floor(Math.random() * 6);
      console.log(`${who} fingers: ${fingers}`);
      const guess = Math.floor(Math.random() * 6) + parseInt(fingers);
      console.log(`${who} guess: ${guess}`);   
      return [ fingers, guess ];
    },
    notifyTimeout: () => {
      console.log(`${who} has observed a timeout`);
    },
    seeOutcome: (outcome) => {
        switch(outcome) {
            case 0:
                console.log(`${who} see Tie`);
                break;
            case 1:
                console.log(`${who} sees Alice Wins`);
                break;
            case 2:
                console.log(`${who} sees Bob Wins`);
                break;
        }
    },
  });

  await Promise.all([
    backend.Alice(ctcAlice, {
      ...Player('Alice'),
      setWager: async () => {
        const wager = await ask(
          `How much do you want to wager?`,
          parseInt
        );
        return stdlib.parseCurrency(wager);
      },
    }),
    backend.Bob(ctcBob, {
      ...Player('Bob'),
      acceptWager: (amt) => {      
        console.log(`Bob accepts wager: ${fmt(amt)}`);
      },
    }),
  ]);
  const afterAlice = await getBalance(accAlice);
  const afterBob = await getBalance(accBob);

  console.log(`Alice ending balance: ${afterAlice}`);
  console.log(`Bob ending balance: ${afterBob}`);

})();