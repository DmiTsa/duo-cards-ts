import ProgressPart from "../../currentGame/ProgressPart/ProgressPart";
import { level } from "../../../types";
import style from "./GameProgress.module.css";

interface I_gameProgress {
  levels: level[];
  numberCurrentLevel: number;
}

const GameProgress = (props: I_gameProgress) => {
  const { levels, numberCurrentLevel } = props;

  return (
    <div className={style.GameProgress}>
      {levels.map((lev, i) => {
        return (
          <ProgressPart
            key={lev.id}
            lives={lev.lives}
            dif={lev.dif}
            sets={lev.sets}
            isActive={i === numberCurrentLevel}
            isEnded={i < numberCurrentLevel}
          />
        );
      })}
    </div>
  );
};

export default GameProgress;
