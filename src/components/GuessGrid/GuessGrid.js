import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import GuessRow from "../GuessRow";

function GuessGrid({ answer, guesses }) {
  console.log(`Current guesses:` + guesses);
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => {
        return <GuessRow key={index} guess={guesses[index]} answer={answer} />;
      })}
    </div>
  );
}

export default GuessGrid;
