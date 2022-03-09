import { useCallback, useEffect, useState } from "react";
import "./Board.scss";
import Letter from "./Letter";
import Button from "./Button";
import InputtedLetters from "./InputtedLetters";
import { shuffleArray, generateRandomCharacter } from "./utils";

const NUM_LETTERS = 7;

const Board = () => {
  const [input, setInput] = useState("");
  const [letterOptions, setLetterOptions] = useState([]);

  // Runs once on initial page load to determine the letter options
  useEffect(() => {
    const tempLetterOptions = [];
    for (var i = 1; i <= NUM_LETTERS; i++) {
      let randomLetter = "";
      do {
        randomLetter = generateRandomCharacter();
      } while (tempLetterOptions.includes(randomLetter));
      tempLetterOptions.push(randomLetter);
    }
    setLetterOptions(tempLetterOptions);
  }, []);

  const deleteLetter = useCallback(() => {
    setInput((input) => input.slice(0, -1));
  }, []);

  const shuffleLetters = useCallback(
    () =>
      setLetterOptions((letterOptions) => [
        letterOptions[0],
        ...shuffleArray(letterOptions.slice(1))
      ]),
    []
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Backspace") {
        deleteLetter();
      } else if (e.key === " ") {
        shuffleLetters();
      } else if (String.fromCharCode(e.keyCode).match(/([A-Z]|[a-z])/g)) {
        setInput((input) => `${input}${e.key}`);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [deleteLetter, shuffleLetters]);

  return (
    <div className="Board">
      <InputtedLetters input={input} letterOptions={letterOptions} />
      <div className="Board-cells">
        {letterOptions.map((letter, index) => (
          <Letter
            key={`${letter}-${index}`}
            isRequired={index === 0}
            letter={letter}
            onClick={() => setInput(`${input}${letter}`)}
          />
        ))}
      </div>
      <div className="Board-actions">
        <Button onClick={shuffleLetters}>Shuffle</Button>
        <Button onClick={deleteLetter}>Delete</Button>
        <Button onClick={() => setInput("")}>Clear</Button>
      </div>
    </div>
  );
};

export default Board;
