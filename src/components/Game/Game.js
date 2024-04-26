import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessResults from '../GuessResults'
import GuessInput from '../GuessInput'
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [list, setList] = React.useState([])
  const lastGuess = list.slice(-1, list.length + 1).pop();
  const isCorrect = lastGuess === answer;

  const handleSubmit = (nextGuess) => {
    const nextList = [...list, nextGuess];
    setList(nextList);
  }

  return (
    <>
    <GuessResults list={list} answer={answer} />
    <GuessInput guessCount={list.length} onSubmit={handleSubmit} />
    {
      (isCorrect || list.length === NUM_OF_GUESSES_ALLOWED) && (
        <Banner isCorrect={isCorrect} guessCount={list.length} answer={answer} />
      )
    }
    </>
  )
}

export default Game;
