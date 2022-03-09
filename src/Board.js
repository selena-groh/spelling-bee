import "./Board.scss";
import Cell from "./Cell";
import Button from "./Button";
import { useState } from "react";
import cx from "classnames";

const initialLetterOptions = ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return [...array];
};

const Board = () => {
  const [input, setInput] = useState("");
  const [letterOptions, setLetterOptions] = useState(initialLetterOptions);

  const deleteLetter = () => setInput(input.slice(0, -1));

  const handleKeyDown = (e) => {
    if (e.key === "Backspace") {
      deleteLetter();
    } else if (String.fromCharCode(e.keyCode).match(/([A-Z]|[a-z])/g)) {
      setInput(`${input}${e.key}`);
    }
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
                )
              })}
            >
              {inputtedLetter}
            </span>
          ))}
        </span>
      </div>
      <div className="Board-cells">
        {letterOptions.map((letter, index) => (
          <Cell
            key={`${letter}-${index}`}
            letter={letter}
            onClick={() => setInput(`${input}${letter}`)}
          />
        ))}
      </div>
      <div className="Board-actions">
        <Button onClick={() => setLetterOptions(shuffleArray(letterOptions))}>
          Shuffle
        </Button>
        <Button onClick={deleteLetter}>Delete</Button>
        <Button onClick={() => setInput("")}>Clear</Button>
      </div>
    </div>
  );
};

export default Board;
