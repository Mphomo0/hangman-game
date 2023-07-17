import React from 'react';

// A functional component that displays the wrong letters guessed by the player
const WrongLetters = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
      <div>
        {/* Render the "Wrong" header only if there are wrong letters */}
        {wrongLetters.length > 0 && <p>Wrong</p>}
        {/* Map over each wrong letter and render it as a span */}
        {wrongLetters.map((letter, index) => <span key={index}>{letter}</span>)
          /* Use reduce to add commas between the wrong letters */
          .reduce((prev, curr) => prev == null ? [curr] : [prev, ',', curr], null)}
      </div>
    </div>
  );
};

export default WrongLetters;