import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Memory Game</h1>
      </header>
      <div className="content-container">
        <Board />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
