import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessInput({ guessCount, onSubmit }) {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
      setValue(event.target.value.toUpperCase());
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      if (value.length === 5 && guessCount < NUM_OF_GUESSES_ALLOWED) {
        onSubmit(value);
        setValue('')
      }
  }

  return (
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
          <label htmlFor="guess-input">Enter guess:</label>
          <input id="guess-input" type="text" value={value} onChange={handleChange} />
      </form>
  )
}

export default GuessInput;
