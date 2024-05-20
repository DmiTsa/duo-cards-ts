// import { useSelector } from "react-redux";
// import { selectLevels, selectNumberCurrentLevel } from "../../redux/gameSlice";
// import GameProgress from "../../components/GameProgress/GameProgress";
import Field from "../../components/Field/Field";
// import GameInfo from "../../components/GameInfo/GameInfo";
import style from "./CurrentGame.module.css";

export default function CurrentGame() {
  // const levels = useSelector(selectLevels);
  // const numberCurrentLevel = useSelector(selectNumberCurrentLevel);

  return (
    <>
      <div className={style.leftSide}>
        <p>current game</p>
        {/* <GameInfo /> */}
        {/* <GameProgress levels={levels} numberCurrentLevel={numberCurrentLevel} /> */}
      </div>
      <div className={style.rightSide}>
        <Field />
      </div>
    </>
  );
}

// id: 1,
// name: 'template',
// dif: 2,
// sets: 4,
// tiles: [
//     { id: "1", type: 0, isOpened: false, isEnabled: true },
//     { id: "2", type: 0, isOpened: false, isEnabled: true },
//     { id: "3", type: 1, isOpened: false, isEnabled: true },
//     { id: "4", type: 1, isOpened: false, isEnabled: true },
//     { id: "5", type: 2, isOpened: false, isEnabled: true },
//     { id: "6", type: 2, isOpened: false, isEnabled: true },
//     { id: "7", type: 3, isOpened: false, isEnabled: true },
//     { id: "8", type: 3, isOpened: false, isEnabled: true },
// ],
// // status: 'playing', // 'ended'
// imgLib: 'Hearts'
