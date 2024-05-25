import { useAppSelector } from "../../../hooks";
import { BsChatSquareHeart } from "react-icons/bs";
import { SiSecurityscorecard } from "react-icons/si";
import { selectLives, selectPoints } from "../../../store/gameSlice";
import style from "./GameInfo.module.css";

const GameInfo: React.FC = () => {
  const gameLives = useAppSelector(selectLives);
  const gamePoint = useAppSelector(selectPoints);

  return (
    <div className={style.gameInfo}>
      <div className={style.user}>Dmitry</div>
      <div className={style.info}>
        <div>
          <BsChatSquareHeart /> {gameLives}
        </div>
        <div className={style.divider}></div>
        <div>
          <SiSecurityscorecard /> {gamePoint}
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
