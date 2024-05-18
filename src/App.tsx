import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container"></div>
    </div>
  );
}

export default App;

// import { selectorActivePage } from './redux/gameSlice'
// import { useSelector } from 'react-redux';
// import Greeting from './pages/Greeting/Greeting';
// import CurrentGame from './pages/CurrentGame/CurrentGame';
// import Levels from './pages/Levels/Levels';
// import GameOver from './pages/GameOver/GameOver';

// function App() {
//   const activePage = useSelector(selectorActivePage)

//         {activePage === 'greeting' ? <Greeting /> :
//           activePage === 'levels' ? <Levels /> :
//             activePage === 'currentGame' ? <CurrentGame /> :
//               activePage === 'gameOver' ? <GameOver /> :
//                 < span > no page</span>
//         }
