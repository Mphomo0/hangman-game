import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers'; // import the helper function for checking if the game has been won

// A functional component that displays a popup when the game ends
const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = ''; // the final message to display
  let finalMessageRevealWord = ''; // the message to reveal the word if the player loses
  let playable = true; // whether the game is still playable

  // Check if the game has been won or lost
  if (checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Congratulations! You won! 😃';
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'Unfortunately you lost. 😕';
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  }

  // Update the state of whether the game is still playable using the useEffect hook
  useEffect(() => {
    setPlayable(playable);
  }, [setPlayable, playable]);

  // Render the popup if there is a final message to display
  return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
};

export default Popup;