// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  const letterInName = [];

  for (let i = 0; i < array.length; i++) {
    const name = array[i].name.toLowerCase();
    const targetLetter = letter.toLowerCase();
    let letterFound = false;

    for (let j = 0; j < name.length; j++) {
      if (name[j] === targetLetter) {
        letterFound = true;
        break; 
      }
    }

    if (letterFound) {
      letterInName.push(array[i].name);
    }
  }

  return letterInName;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
