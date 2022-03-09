import "./Letter.scss";
import cx from "classnames";

const Letter = ({ letter, onClick, isRequired }) => {
  return (
    <button className="Letter" onClick={onClick}>
      <div
        className={cx("Letter-hex", { "Letter-hex--isRequired": isRequired })}
      >
        <span className="Letter-letter">{letter}</span>
      </div>
    </button>
  );
};

export default Letter;
