import './App.css';
import { Wordle } from './Wordle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wordle numberOfTiles={5} word="bench" />
      </header>
    </div>
  );
}

export default App;
