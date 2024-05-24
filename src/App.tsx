import { useAppSelector } from "./hooks";
import { selectorActivePage } from "./store/gameSlice";
import Greeting from "./components/Greeting/Greeting";
import SelfLevels from "./components/SelfLevels/SelfLevels";
import CurrentGame from "./components/currentGame/CurrentGame/CurrentGame";
import { pages } from "./constants";
import "./App.css";

function App() {
  const activePage = useAppSelector(selectorActivePage);

  return (
    <div className="App">
      <div className="container">
        {activePage === pages.greeting ? (
          <Greeting />
        ) : activePage === pages.selfLevels ? (
          <SelfLevels />
        ) : activePage === pages.currentGame ? (
          <CurrentGame />
        ) : activePage === pages.gameOver ? (
          // <GameOver />
          <p> gameover </p>
        ) : (
          <span> no page</span>
        )}
      </div>
    </div>
  );
}

export default App;

// import CurrentGame from './pages/CurrentGame/CurrentGame';
// import GameOver from './pages/GameOver/GameOver';

// function App() {
