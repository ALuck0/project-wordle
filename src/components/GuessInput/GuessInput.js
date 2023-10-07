import React from "react";

function GuessInput({ makeGuess, isOver}) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        makeGuess(guess);
        setGuess("");
      }}
    >
      <fieldset>
        <legend>Enter your guess:</legend>
        <input
          id="guess-input"
          type="text"
          title="Guesses must be 5 letters long"
          pattern="[A-Z]{5}"
          value={guess}
          disabled={isOver}
          required
          onChange={(event) => setGuess(event.target.value.toUpperCase())}
        />
      </fieldset>
    </form>
  );
}

export default GuessInput;
