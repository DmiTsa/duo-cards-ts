import { useAppSelector } from "./hooks";
import { selectorActivePage } from "./store/gameSlice";
import Greeting from "./pages/Greeting/Greeting";
import "./App.css";

function App() {
  const activePage = useAppSelector(selectorActivePage);

  return (
    <div className="App">
      <div className="container">
        {activePage === "greeting" ? <Greeting /> : <p> no page</p>}
      </div>
    </div>
  );
}

export default App;

// import CurrentGame from './pages/CurrentGame/CurrentGame';
// import Levels from './pages/Levels/Levels';
// import GameOver from './pages/GameOver/GameOver';

// function App() {

//         {activePage === 'greeting' ? <Greeting /> :
//           activePage === 'levels' ? <Levels /> :
//             activePage === 'currentGame' ? <CurrentGame /> :
//               activePage === 'gameOver' ? <GameOver /> :
//                 < span > no page</span>
//         }
