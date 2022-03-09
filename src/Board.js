import { useCallback, useEffect, useState } from "react";
import "./Board.scss";
import Letter from "./Letter";
import Button from "./Button";
import InputtedLetters from "./InputtedLetters";
import { shuffleArray, generateRandomCharacter } from "./utils";

const NUM_LETTERS = 7;

const Board = () => {
  const [currentInput, setCurrentInput] = useState("");
  const [words, setWords] = useState([]);
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
    setCurrentInput((currentInput) => currentInput.slice(0, -1));
  }, []);

  const shuffleLetters = useCallback(
    () =>
      setLetterOptions((letterOptions) => [
        letterOptions[0],
        ...shuffleArray(letterOptions.slice(1))
      ]),
    []
  );

  const submitWord = useCallback(() => {
    const areLettersValid = [...currentInput].every((inputtedLetter) =>
      letterOptions.includes(inputtedLetter.toLowerCase())
    );
    const isWordLongEnough = currentInput.length > 3;
    if (areLettersValid && isWordLongEnough) {
      setWords((words) => [...words, currentInput]);
      setCurrentInput("");
    }
  }, [currentInput, letterOptions]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Backspace") {
        deleteLetter();
      } else if (e.key === " ") {
        shuffleLetters();
      } else if (e.key === "Enter") {
        submitWord();
      } else if (String.fromCharCode(e.keyCode).match(/([A-Z]|[a-z])/g)) {
        setCurrentInput((currentInput) => `${currentInput}${e.key}`);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [deleteLetter, shuffleLetters, submitWord]);

  return (
    <div className="Board">
      <InputtedLetters input={currentInput} letterOptions={letterOptions} />
      <div className="Board-cells">
        {letterOptions.map((letter, index) => (
          <Letter
            key={`${letter}-${index}`}
            isRequired={index === 0}
            letter={letter}
            onClick={() => setCurrentInput(`${currentInput}${letter}`)}
          />
        ))}
      </div>
      <div className="Board-actions">
        <Button onClick={shuffleLetters}>Shuffle</Button>
        <Button onClick={deleteLetter}>Delete</Button>
        <Button onClick={() => setCurrentInput("")}>Clear</Button>
        <Button onClick={submitWord}>Enter</Button>
      </div>
      <p>
        You have found {words.length} words. (But no guarantees they're real
        words -- yet!)
      </p>
      <ul>
        {words.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default Board;
