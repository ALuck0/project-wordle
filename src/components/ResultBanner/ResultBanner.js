import React from "react";

function WinMessage({ nGuesses }) {
  return (
    <>
      <strong>Congratulations!</strong> Got it in
      <strong> {nGuesses} guesses</strong>.
    </>
  );
}

function LoseMessage({ correctGuess }) {
  return (
    <>
      Sorry, the correct answer is <strong>{correctGuess}</strong>.
    </>
  );
}

function ResultBanner({ isWon, nGuesses, answer }) {
  return (
    <div className={isWon ? "happy banner" : "sad banner"}>
      <p>
        {isWon ? (
          <WinMessage nGuesses={nGuesses} />
        ) : (
          <LoseMessage correctGuess={answer} />
        )}
      </p>
    </div>
  );
}

export default ResultBanner;
