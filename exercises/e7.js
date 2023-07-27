// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastPositiveBalance(array) {
  const leastBalance = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].balance > 0 && (leastBalance.length === 0 || array[i].balance < leastBalance[0].balance)) {
      leastBalance.length = 0; // Empty the array before adding the new account
      leastBalance.push(array[i]);
    }
  }

  // Return an array with the least balance account, or an empty array if none found
  return leastBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function