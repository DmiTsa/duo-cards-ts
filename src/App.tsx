import { useAppSelector } from "./hooks";
import { selectorActivePage } from "./store/gameSlice";
import Greeting from "./components/Greeting/Greeting";
import SelfLevels from "./components/selfLevels/SelfLevels/SelfLevels";
import CurrentGame from "./components/currentGame/CurrentGame/CurrentGame";
import GameOver from "./components/GameOver/GameOver";
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
          <GameOver />
        ) : (
          <span>Error! no page</span>
        )}
      </div>
    </div>
  );
}

export default App;
