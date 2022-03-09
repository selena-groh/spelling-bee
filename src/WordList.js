import "./WordList.scss";

const WordList = ({ words }) => (
  <div className="WordList">
    <p className="WordList-wordCount">
      You have found {words.length} word{words.length === 1 ? "" : "s"}.
      {words.length > 0 && (
        <span> (But no guarantees they're real words -- yet!)</span>
      )}
    </p>
    <ul>
      {words.map((word) => (
        <li key={word} className="WordList-word">
          {word}
        </li>
      ))}
    </ul>
  </div>
);

export default WordList;
