import { useAppDispatch } from "../../hooks";
import {
  //   setLivesFromState,
  //   incrementCurrentLevel,
  setLevels,
  setGameSet,
  //   setActivePage,
} from "../../store/gameSlice";
// import { setCurrentUser } from "../../redux/userSlice";
import {
  EASY_GAMESET,
  NORMAL_GAMESET,
  HARD_GAMESET,
} from "../../data/gameSets";
import allLevelsCreator from "../../utils/allLevelsCreator";
import style from "./Greeting.module.css";
// import { useState } from "react";

const Greeting: React.FC = () => {
  //   const [userName, setUserName] = useState("user");
  const dispatch = useAppDispatch();

  const gameClickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    const id: string = e.currentTarget.id;

    switch (id) {
      case "easy":
        dispatch(setGameSet("easy"));
        dispatch(setLevels(allLevelsCreator(EASY_GAMESET)));
        break;
      case "normal":
        dispatch(setGameSet("normal"));
        dispatch(setLevels(allLevelsCreator(NORMAL_GAMESET)));
        break;
      case "hard":
        dispatch(setGameSet("hard"));
        dispatch(setLevels(allLevelsCreator(HARD_GAMESET)));
        break;
      // case 'custom':
      //   dispatch(setGameSet('custom'))
      //   break;
      default:
        console.log("Error");
        break;
    }
  };

  //     dispatch(setCurrentUser(userName));
  //     dispatch(incrementCurrentLevel());
  //     dispatch(setLivesFromState());
  //     dispatch(setActivePage("currentGame"));
  //   };
  return (
    <>
      <div className={style.greeting}>
        <div className={style.user}>
          <span>Добро пожаловать,</span>
          {/* <input
              className={style.userInput}
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></input> */}
        </div>
        <span className={style.bigText + " " + style.firstLetter}>D</span>
        <span className={style.bigText}>uo</span>
        <span className={style.bigText + " " + style.firstLetter}>C</span>
        <span className={style.bigText}>ards</span>
        <div className={style.buttons}>
          <input
            id="easy"
            className={style.button + " " + style.easy}
            type="button"
            value={"Легкая игра"}
            onClick={(e) => gameClickHandler(e)}
          />
          <input
            id="normal"
            className={style.button + " " + style.normal}
            type="button"
            value={"Обычная игра"}
            onClick={(e) => gameClickHandler(e)}
          />
          <input
            id="hard"
            className={style.button + " " + style.hard}
            type="button"
            value={"Сложная игра"}
            onClick={(e) => gameClickHandler(e)}
          />
          {/* <input
              disabled
              id="custom"
              className={style.button + " " + style.custom}
              type="button"
              value={"Создать игру"}
              onClick={(e) => gameClickHandler(e.currentTarget)}
            /> */}
        </div>
      </div>
    </>
  );
};

export default Greeting;
