import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Notification from './components/Notification';
import Popup from './components/Popup';
import Word from './components/Word';
import { showNotification as show } from './helpers/helpers';

const words = ['application', 'programming', 'interface', 'wizard', 'Hyperiondev'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

const App = () => {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;

      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    setPlayable(true);

    // Empty the arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  function toggleHelp() {
    setShowHelp(!showHelp);
  }

  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} selectedWord={selectedWord} wrongLetters={wrongLetters} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
      <button className="help-button" onClick={toggleHelp}>
        Help
      </button>
      {showHelp && (
        <div className="help-container">
          <h2>Game Rules</h2>
          <p>
            Hangman is a classic word-guessing game where the player tries to guess a hidden word by suggesting letters within a certain number of attempts.
            ...

            <h3>How to Play</h3>
            <ol>
              <li>You will see the game interface with a series of underscores representing the hidden word, the hanging figure, and a list of wrong letters.</li>
              <li>To guess a letter, simply type it on your keyboard.</li>
              <li>If the letter is part of the hidden word and hasn't been guessed before, it will appear in the correct position(s) of the word.</li>
              <li>If the letter is not part of the hidden word or has been guessed before, it will be added to the wrong letters list, and the hanging figure will start to appear.</li>
              <li>Continue guessing letters until you either guess the word correctly (win) or run out of attempts (lose).</li>
              <li>After the game ends, a popup will appear with the result (win/lose) and an option to play again.</li>
            </ol>

            Enjoy playing Hangman!
          </p>
        </div>
      )}
    </>
  );
}

export default App;