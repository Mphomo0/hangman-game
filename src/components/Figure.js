import React from 'react';
import state1 from '../hangmandrawings/state1.GIF'; // import images for each state of the hanging figure
import state2 from '../hangmandrawings/state2.GIF';
import state3 from '../hangmandrawings/state3.GIF';
import state4 from '../hangmandrawings/state4.GIF';
import state5 from '../hangmandrawings/state5.GIF';
import state6 from '../hangmandrawings/state6.GIF';
import state7 from '../hangmandrawings/state7.GIF';
import state8 from '../hangmandrawings/state8.GIF';
import state9 from '../hangmandrawings/state9.GIF';
import state10 from '../hangmandrawings/state10.gif';
import state11 from '../hangmandrawings/state11.GIF';

// A functional component that displays the figure of the hanging man
const Figure = ({ wrongLetters }) => {
  const errors = wrongLetters.length; // the number of wrong letters guessed

  // A function that returns the source of the image file for the current state of the figure
  const getImageSource = (errorCount) => {
    switch (errorCount) {
      case 0:
        return state1;
      case 1:
        return state2;
      case 2:
        return state3;
      case 3:
        return state4;
      case 4:
        return state5;
      case 5:
        return state6;
      case 6:
        return state7;
      case 7:
        return state8;
      case 8:
        return state9;
      case 9:
        return state10;
      case 10:
        return state11;
      default:
        return null;
    }
  };

  // Render the figure with the appropriate image file based on the number of wrong letters guessed
  return (
    <div className='figure-container'>
      <img src={getImageSource(errors)} alt={`state${errors}`} />
    </div>
  );
};

export default Figure;