// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Your code goes here...
  const accountsWithSumsLess2000 = [];

  for (let i = 0; i < array.length; i++) {
    const account = array[i];
    const deposits = account.deposits;

    let sumOfDeposits = 0;
    if (deposits) {
      for (let j = 0; j < deposits.length; j++) {
        sumOfDeposits += deposits[j];
      }
    }

    if (!deposits || sumOfDeposits < 2000) {
      accountsWithSumsLess2000.push(account);
    }
  }

  return accountsWithSumsLess2000;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
