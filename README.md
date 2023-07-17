# Hangman Game

Hangman is a classic word-guessing game where the player tries to guess a hidden word by suggesting letters within a certain number of attempts. This README provides an overview of the game rules and instructions for installing and running the Hangman app on your local machine.

## Game Rules

1. The game randomly selects a word from a predefined list.
2. The player's goal is to guess the word by suggesting letters one at a time.
3. The player has a limited number of attempts (represented by a hanging figure).
4. If the player suggests a correct letter, it will be displayed in the correct position(s) of the word.
5. If the player suggests an incorrect letter, it will be added to the wrong letters list and the hanging figure will start to appear.
6. The game ends in two ways:
   - **Win**: The player correctly guesses the entire word before running out of attempts.
   - **Lose**: The player runs out of attempts before guessing the word correctly.

## Installation

To install and run the Hangman app on your local machine, follow these steps:

use npm install to install all the dependecies
after that launch the game by using npm start

This will launch the Hangman app in your default web browser.

## How to Play

1. After launching the Hangman app, you will see the game interface with a series of underscores representing the hidden word, the hanging figure, and a list of wrong letters.
2. To guess a letter, simply type it on your keyboard.
3. If the letter is part of the hidden word and hasn't been guessed before, it will appear in the correct position(s) of the word.
4. If the letter is not part of the hidden word or has been guessed before, it will be added to the wrong letters list, and the hanging figure will start to appear.
5. Continue guessing letters until you either guess the word correctly (win) or run out of attempts (lose).
6. After the game ends, a popup will appear with the result (win/lose) and an option to play again.

Enjoy playing Hangman!
