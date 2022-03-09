import { useCallback, useEffect, useState } from "react";
import "./Game.scss";
import Letter from "./Letter";
import Button from "./Button";
import InputtedLetters from "./InputtedLetters";
import {
  shuffleArray,
  generateNUnique,
  generateRandomVowel,
  generateRandomCommonConsonant
} from "./utils";
import WordList from "./WordList";

const NUM_VOWELS = 3;
const NUM_CONSONANTS = 4;
const REQUIRED_LETTER_INDEX = 0;

const Game = () => {
  const [currentInput, setCurrentInput] = useState("");
  const [words, setWords] = useState([]);
  const [letterOptions, setLetterOptions] = useState([]);

  // Runs once on initial page load to determine the letter options
  useEffect(() => {
    const uniqueVowels = generateNUnique(generateRandomVowel, NUM_VOWELS);
    const uniqueConsonants = generateNUnique(
      generateRandomCommonConsonant,
      NUM_CONSONANTS
    );
    setLetterOptions(shuffleArray([...uniqueVowels, ...uniqueConsonants]));
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
    const containsRequiredLetter = currentInput.includes(
      letterOptions[REQUIRED_LETTER_INDEX]
    );
    const areLettersValid = [...currentInput].every((inputtedLetter) =>
      letterOptions.includes(inputtedLetter.toLowerCase())
    );
    const isWordLongEnough = currentInput.length > 3;
    const isUnique = !words.includes(currentInput);
    if (
      containsRequiredLetter &&
      areLettersValid &&
      isWordLongEnough &&
      isUnique
    ) {
      setWords((words) => [...words, currentInput]);
      setCurrentInput("");
    }
  }, [currentInput, letterOptions, words]);

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
    <div className="Game">
      <InputtedLetters input={currentInput} letterOptions={letterOptions} />
      <div className="Game-cells">
        {letterOptions.map((letter, index) => (
          <Letter
            key={`${letter}-${index}`}
            isRequired={index === REQUIRED_LETTER_INDEX}
            letter={letter}
            onClick={() => setCurrentInput(`${currentInput}${letter}`)}
          />
        ))}
      </div>
      <div className="Game-actions">
        <Button onClick={shuffleLetters}>Shuffle</Button>
        <Button onClick={deleteLetter}>Delete</Button>
        <Button onClick={() => setCurrentInput("")}>Clear</Button>
        <Button onClick={submitWord}>Enter</Button>
      </div>
      <WordList words={words} />
    </div>
  );
};

export default Game;
