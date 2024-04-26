import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers';

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(0, 5, 1).map((letterIndex) => {
        const value = guess[letterIndex];
        let classes = 'cell';
        if (value) {
          classes += ` ${value.status}`;
        }
        return (
          <span key={letterIndex} className={classes}>{value?.letter}</span>
        )
      })}
    </p>
  )
}

function GuessResults({ list, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED, 1).map(index => {
        let guess = list[index] ?? '';
        if (guess) {
          const letters = checkGuess(guess, answer);
          guess = letters;
        }
        return (
          <Guess key={index} guess={guess} />
        )
      })}
    </div>
  )
}

export default GuessResults;
