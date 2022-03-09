import "./App.scss";
import Board from "./Board";

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Spelling Bee</h1>
      <p className="App-subtitle">A NYT Spelling Bee remake, just for fun!</p>
      <Board />
    </div>
  );
}

export default App;
