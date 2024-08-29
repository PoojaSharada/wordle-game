import './App.css';
import { Wordle } from './Wordle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wordle numberOfTiles={5} word="bench" totalTrials={5} />
      </header>
    </div>
  );
}

export default App;
