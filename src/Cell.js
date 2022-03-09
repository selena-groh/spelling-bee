import "./Cell.scss";

const Cell = ({ letter, onClick }) => {
  return (
    <button className="Cell plain" onClick={onClick}>
      <div className="Cell-hex">
        <span className="Cell-letter">{letter}</span>
      </div>
    </button>
  );
};

export default Cell;
