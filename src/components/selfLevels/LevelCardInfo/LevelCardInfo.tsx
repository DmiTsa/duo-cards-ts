import { gameSet } from "../../../types";
import { AiFillDelete } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";
import style from "./LevelCardInfo.module.css";

interface I_levelCardInfo {
  gameSet: gameSet;
  addClick: (gameSet: gameSet) => void;
  delClick: (id: string) => void;
}

const LevelCardInfo = (props: I_levelCardInfo) => {
  const { id, name, dif, sets, imgLib } = props.gameSet;

  return (
    <div className={style.levelCardInfo}>
      <div
        className={style.buttonAdd}
        onClick={() => props.addClick(props.gameSet)}
      >
        <MdPlaylistAdd className={style.img} />
      </div>
      <div className={style.buttonDel} onClick={() => props.delClick(id)}>
        <AiFillDelete className={style.img} />
      </div>

      <div
        className={`${style.levelCard} ${
          dif === 2
            ? style.easy
            : dif === 3 || dif === 4
            ? style.normal
            : dif >= 5
            ? style.hard
            : ""
        }`}
      >
        <div className={style.name}>{name}</div>
        <div>
          <div className={style.p}>Сложность: {dif}</div>
          <div className={style.p}>Групп: {sets}</div>
          <div className={style.p}>Набор: {imgLib}</div>
        </div>
      </div>
    </div>
  );
};

export default LevelCardInfo;
