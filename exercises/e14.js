// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

import { bankAccounts } from "../data/data";

export function getClientsWithWrongBalance(array) {
  var wrongBalance = [];

  for (let i = 0; i < array.length; i++) {
    var bankAccount = array[i];
    var totalDeposits = 0;
    var totalWithdrawals = 0;

    if (bankAccount.deposits) {
      for (let j = 0; j < bankAccount.deposits.length; j++) {
        totalDeposits += bankAccount.deposits[j];
      }
    }

    if (bankAccount.withdrawals) {
      for (let k = 0; k < bankAccount.withdrawals.length; k++) {
        totalWithdrawals += bankAccount.withdrawals[k];
      }
    }

    if (totalDeposits - totalWithdrawals !== bankAccount.balance) {
      wrongBalance.push(bankAccount);
    }
  }

  return wrongBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
