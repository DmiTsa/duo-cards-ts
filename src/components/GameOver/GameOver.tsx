// import { useSelector } from "react-redux";
// import { selectIsWinner } from "../../redux/userSlice";
import style from "./GameOver.module.css";

export default function GameOver() {
  // const isWinner = useSelector(selectIsWinner);
  return (
    <div className={style.gameOver}>
      <h1 className={style.h1}>Game over</h1>
      {/* <div className={style.h1}>{isWinner ? "Winner !!!" : "Game over"}</div> */}
      {/* LeaderBoard */}
      <div className={style.text}>Еще раз? Обнови страницу)</div>
    </div>
  );
}
