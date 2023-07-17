import React from 'react';

// A functional component that displays the word to guess
const Word = ({ selectedWord, correctLetters }) => {
  // If selectedWord is undefined, return null instead of rendering the component
  if (!selectedWord) {
    return null; 
  }

  // Render the word with each letter replaced by an underscore, except for those letters that have been correctly guessed
  return (
    <div className="word">
      {selectedWord.split('').map((letter, index) => (
        <span className="letter" key={index}>
          {correctLetters.includes(letter) ? letter : ''}
        </span>
      ))}
    </div>
  );
};

export default Word;