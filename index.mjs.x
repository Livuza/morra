import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno, done } from '@reach-sh/stdlib/ask.mjs';
const stdlib = loadStdlib(process.env);

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (who) => fmt(await stdib.balanceOf(who));

(async () => {
  const startingBalance = stdlib.parseCurrency(100);

  const accCharles = await stdlib.newTestAccount(startingBalance);
  const accCollins = await stdlib.newTestAccount(startingBalance);

  const beforeCharles = await getBalance(accCharles);
  console.log(`Charles Starting Balance: ${beforeCharles}`);
  const beforeCollins = await getBalance(accCollins);
  console.log(`Collins Starting Balance: ${beforeCollins}`);

  const ctcCharles = accCharles.contract(backend);
  const ctcCollins = accCollins.contract(backend, ctcCharles.getInfo());

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
                console.log(`${who} sees Charles Wins`);
                break;
            case 2:
                console.log(`${who} sees Collins Wins`);
                break;
        }
    },
  });

  await Promise.all([
    backend.Charles(ctcCharles, {
      ...Player('Charles'),
      setWager: async () => {
        const wager = await ask(
          `How much do you want to wager?`,
          parseInt
        );
        return stdlib.parseCurrency(wager);
      },
    }),
    backend.Collins(ctcCollins, {
      ...Player('Collins'),
      acceptWager: (amt) => {      
        console.log(`Collins accepts wager: ${fmt(amt)}`);
      },
    }),
  ]);
  const afterCharles = await getBalance(accCharles);
  const afterCollins = await getBalance(accCollins);

  console.log(`Charles ending balance: ${afterCharles}`);
  console.log(`Collins ending balance: ${afterCollins}`);

})();