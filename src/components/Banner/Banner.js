import React from 'react';

function Banner({ isCorrect, guessCount, answer }) {
  const classes = `${isCorrect ? 'happy' : 'sad'} banner`;

  return (
    <div className={classes}>
      {!isCorrect ? (
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      ) : (
        <p>
          <strong>Congratulations!</strong> Got it in 
          <strong>{guessCount} guesses</strong>
        </p>
      )}
    </div>
  )
}

export default Banner;
