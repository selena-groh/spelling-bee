import "./App.scss";
import Game from "./Game";

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Spelling Bee</h1>
      <p className="App-subtitle">A NYT Spelling Bee remake, just for fun!</p>
      <Game />
    </div>
  );
}

export default App;
