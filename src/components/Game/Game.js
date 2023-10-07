import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput";
import GuessGrid from "../GuessGrid";
import ResultBanner from "../ResultBanner/ResultBanner";
import react from "react";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isWon, setIsWon] = React.useState(false);
  const [outOfGuesses, setOutOfGUesses] = react.useState(false);

  function makeGuess(guess) {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
    console.log({ guessesSoFar: newGuesses });
    if (guess === answer) {
      setIsWon(true);
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setOutOfGUesses(true);
    }
  }

  return (
    <>
      <GuessGrid guesses={guesses} answer={answer} />
      <GuessInput makeGuess={makeGuess} isOver={isWon || outOfGuesses} />
      {(isWon || outOfGuesses) && (
        <ResultBanner isWon={isWon} nGuesses={guesses.length} answer={answer} />
      )}
    </>
  );
}

export default Game;
