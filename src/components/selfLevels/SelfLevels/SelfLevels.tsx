import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import GameProgress from "../../parts/GameProgress/GameProgress";
import {
  addSelfLevel,
  setActivePage,
  selectLevels,
  selectNumberCurrentLevel,
  setNumberCurrentLevelByZero,
} from "../../../store/gameSlice";
import { delGameSet, selectFullGameSet } from "../../../store/selfGameSlice";
import LevelCardInfo from "../LevelCardInfo/LevelCardInfo";
import fullLevelCreator from "../../../utils/fullLevelCreator";
import { gameSet } from "../../../types";
import { pages } from "../../../constants";
import style from "./SelfLevels.module.css";

const SelfLevels: React.FC = () => {
  const dispatch = useAppDispatch();
  const allGameSets = useAppSelector(selectFullGameSet);
  const levels = useAppSelector(selectLevels);
  const numberCurrentLevel = useAppSelector(selectNumberCurrentLevel);

  const addButtonHandler = (gameSet: gameSet) => {
    dispatch(addSelfLevel(fullLevelCreator(gameSet)));
  };

  const delButtonHandler = (id: string) => {
    dispatch(delGameSet(id));
  };

  useEffect(() => {
    if (levels.length === 10) {
      dispatch(setNumberCurrentLevelByZero());
      dispatch(setActivePage(pages.currentGame));
    }
  }, [levels]);

  return (
    <div className={style.levels}>
      <div className={style.createGame}>
        <GameProgress levels={levels} numberCurrentLevel={numberCurrentLevel} />
      </div>
      <div className={style.levelsSet}>
        {allGameSets.length !== 0 ? (
          allGameSets.map((gameSet) => {
            return (
              <LevelCardInfo
                key={gameSet.id}
                gameSet={gameSet}
                addClick={addButtonHandler}
                delClick={delButtonHandler}
              />
            );
          })
        ) : (
          <p>no level</p>
        )}
      </div>
    </div>
  );
};

export default SelfLevels;

// const initialState = {
//     id: 1,
//     name: 'template',
//     dif: 2,
//     sets: 4,
//     tiles: [
//         { id: "1", type: 0, isOpened: false, isEnabled: true },
//         { id: "2", type: 0, isOpened: false, isEnabled: true },
//         { id: "3", type: 1, isOpened: false, isEnabled: true },
//         { id: "4", type: 1, isOpened: false, isEnabled: true },
//         { id: "5", type: 2, isOpened: false, isEnabled: true },
//         { id: "6", type: 2, isOpened: false, isEnabled: true },
//         { id: "7", type: 3, isOpened: false, isEnabled: true },
//         { id: "8", type: 3, isOpened: false, isEnabled: true },
//     ],
//     status: 'playing' // 'ended'
// }
