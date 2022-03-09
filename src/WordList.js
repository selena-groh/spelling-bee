import "./WordList.scss";

const WordList = ({ words }) => (
  <div className="WordList">
    <p className="WordList-wordCount">
      You have found {words.length} words. (But no guarantees they're real words
      -- yet!)
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
