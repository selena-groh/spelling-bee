import "./InputtedLetters.scss";
import cx from "classnames";

const InputtedLetters = ({ input, letterOptions }) => (
  <div className="InputtedLetters">
    <span className="InputtedLetters-input">
      {[...input].map((inputtedLetter, index) => (
        <span
          key={`${inputtedLetter}-${index}`}
          className={cx("InputtedLetters-inputLetter", {
            "InputtedLetters-inputLetter--invalid": !letterOptions.includes(
              inputtedLetter.toLowerCase()
            ),
            "InputtedLetters-inputLetter--required":
              inputtedLetter === letterOptions[0]
          })}
        >
          {inputtedLetter}
        </span>
      ))}
    </span>
  </div>
);

export default InputtedLetters;
