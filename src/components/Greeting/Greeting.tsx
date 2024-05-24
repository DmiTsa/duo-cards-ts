import { useAppDispatch } from "../../hooks";
import { setLevels, setActivePage } from "../../store/gameSlice";
import {
  EASY_GAMESET,
  NORMAL_GAMESET,
  HARD_GAMESET,
} from "../../data/gameSets";
import allLevelsCreator from "../../utils/allLevelsCreator";
import { pages } from "../../constants";
import style from "./Greeting.module.css";
import { gameType } from "../../constants";

const Greeting: React.FC = () => {
  const dispatch = useAppDispatch();

  const gameClickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    const id: string = e.currentTarget.id;

    switch (id) {
      case gameType.easy:
        dispatch(setLevels(allLevelsCreator(EASY_GAMESET)));
        break;

      case gameType.normal:
        dispatch(setLevels(allLevelsCreator(NORMAL_GAMESET)));
        break;

      case gameType.hard:
        dispatch(setLevels(allLevelsCreator(HARD_GAMESET)));
        break;

      case gameType.custom:
        dispatch(setActivePage(pages.selfLevels));
        break;
    }

    dispatch(setActivePage(pages.currentGame));
  };

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
          <input
            disabled
            id="custom"
            className={style.button + " " + style.custom}
            type="button"
            value={"Создать игру"}
            onClick={(e) => gameClickHandler(e)}
          />
        </div>
      </div>
    </>
  );
};

export default Greeting;
