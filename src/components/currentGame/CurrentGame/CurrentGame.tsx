import { useAppSelector } from "../../../hooks";
import {
  selectLevels,
  selectNumberCurrentLevel,
} from "../../../store/gameSlice";
import GameProgress from "../GameProgress/GameProgress";
import Field from "../Field/Field";
import GameInfo from "../GameInfo/GameInfo";
import style from "./CurrentGame.module.css";

const CurrentGame: React.FC = () => {
  const levels = useAppSelector(selectLevels);
  const numberCurrentLevel = useAppSelector(selectNumberCurrentLevel);

  return (
    <>
      <div className={style.leftSide}>
        <GameInfo />
        <GameProgress levels={levels} numberCurrentLevel={numberCurrentLevel} />
      </div>
      <div className={style.rightSide}>
        <Field />
      </div>
    </>
  );
};

export default CurrentGame;
