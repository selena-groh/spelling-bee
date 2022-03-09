import "./Board.scss";
import Letter from "./Letter";
import Button from "./Button";
import { useEffect, useState } from "react";
import cx from "classnames";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return [...array];
};

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const NUM_LETTERS = 7;

const generateRandomCharacter = () =>
  ALPHABET[Math.floor(Math.random() * ALPHABET.length)];

const Board = () => {
  const [input, setInput] = useState("");
  const [letterOptions, setLetterOptions] = useState([]);

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
  }, []); // Run once on initial page load

  const deleteLetter = () => setInput(input.slice(0, -1));

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      deleteLetter();
    } else if (String.fromCharCode(e.keyCode).match(/([A-Z]|[a-z])/g)) {
      setInput(`${input}${e.key}`);
    }
  };

  const shuffleLetters = () => {
    setLetterOptions([
      letterOptions[0],
      ...shuffleArray(letterOptions.slice(1))
    ]);
  };

  return (
    <div className="Board" onKeyDown={handleKeyDown} tabIndex="-1">
      <div className="Board-inputWrapper">
        <span className="Board-input">
          {[...input].map((inputtedLetter, index) => (
            <span
              key={`${inputtedLetter}-${index}`}
              className={cx("Board-inputLetter", {
                "Board-inputLetter--invalid": !letterOptions.includes(
                  inputtedLetter.toLowerCase()
                ),
                "Board-inputLetter--required":
                  inputtedLetter === letterOptions[0]
              })}
            >
              {inputtedLetter}
            </span>
          ))}
        </span>
      </div>
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
