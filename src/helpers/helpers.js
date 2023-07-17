export function showNotification(setter) {
  setter(true); // Set the notification to be displayed

  setTimeout(() => {
      setter(false); // Remove the notification after 2000 milliseconds (2 seconds)
  }, 2000);
}

export function checkWin(correct, wrong, word) {
  if (!word || word.trim() === '') {
      return ''; // Return an empty string if the word is empty or contains only whitespace
      // You can handle this case according to your requirements
  }

  let status = 'win'; // Assume the initial status is 'win'

  // Check for win
  word.split('').forEach(letter => {
      if (!correct.includes(letter)) {
          status = ''; // If any letter in the word is not in the 'correct' array, set status to an empty string
      }
  });

  // Check for lose
  if (wrong.length === 10) {
      status = 'lose'; // If the number of wrong guesses is equal to 10, set status to 'lose'
  }

  return status; // Return the final status
}
