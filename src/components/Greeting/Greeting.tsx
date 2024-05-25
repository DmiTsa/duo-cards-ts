import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  setLevels,
  setActivePage,
  selectUser,
  setUser,
} from "../../store/gameSlice";
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
  const user = useAppSelector(selectUser);
  const [currentUserName, setCurrentUserName] = useState(user.name);
  const dispatch = useAppDispatch();

  const NAME_LENGTH = 15;

  const userHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userName = e.currentTarget.value;

    if (userName.length < NAME_LENGTH) {
      setCurrentUserName(userName);
    } else {
      setCurrentUserName(userName.slice(0, NAME_LENGTH));
    }
  };

  const gameClickHandler = (e: React.MouseEvent<HTMLInputElement>) => {
    const id: string = e.currentTarget.id;

    switch (id) {
      case gameType.easy:
        dispatch(setLevels(allLevelsCreator(EASY_GAMESET)));
        dispatch(
          setUser({
            id: "ew",
            name: currentUserName !== "" ? currentUserName : user.name,
            maxPoints: 0,
          })
        );
        dispatch(setActivePage(pages.currentGame));
        break;

      case gameType.normal:
        dispatch(setLevels(allLevelsCreator(NORMAL_GAMESET)));
        dispatch(
          setUser({
            id: "ew",
            name: currentUserName !== "" ? currentUserName : user.name,
            maxPoints: 0,
          })
        );
        dispatch(setActivePage(pages.currentGame));
        break;

      case gameType.hard:
        dispatch(setLevels(allLevelsCreator(HARD_GAMESET)));
        dispatch(
          setUser({
            id: "ew",
            name: currentUserName !== "" ? currentUserName : user.name,
            maxPoints: 0,
          })
        );
        dispatch(setActivePage(pages.currentGame));
        break;

      case gameType.custom:
        dispatch(
          setUser({
            id: "ew",
            name: currentUserName !== "" ? currentUserName : user.name,
            maxPoints: 0,
          })
        );
        dispatch(setActivePage(pages.selfLevels));
        break;
    }
  };

  return (
    <>
      <div className={style.greeting}>
        <div className={style.user}>
          <span>Добро пожаловать,</span>
          <input
            className={style.userInput}
            type="text"
            value={currentUserName}
            onChange={(e) => userHandler(e)}
          ></input>
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
