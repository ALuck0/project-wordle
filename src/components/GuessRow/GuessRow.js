import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GuessRow({ answer, guess = "" }) {
  const isGuess = guess.length === 5;
  const guessLetters = isGuess ? guess : "     ";

  const classNames = checkGuess(guessLetters, answer).map((guessStatus) => {
    return { ...guessStatus, className: `cell` };
  });

  console.log(isGuess);

  return (
    <p className="guess">
      {range(5).map((index) => {
        return (
          <span
            className={!isGuess ? "cell" : `cell ${classNames[index].status}`}
            key={index}
          >
            {guessLetters.charAt(index)}
          </span>
        );
      })}
    </p>
  );
}

export default GuessRow;
