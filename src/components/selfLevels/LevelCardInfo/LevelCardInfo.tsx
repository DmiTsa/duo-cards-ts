import { imgLibs } from "../../../constants";
import style from "./LevelCardInfo.module.css";

interface I_levelCardInfo {
  name: string;
  dif: number;
  sets: number;
  imgLib: imgLibs;
}

const LevelCardInfo = (props: I_levelCardInfo) => {
  const { name, dif, sets, imgLib } = props;

  return (
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
  );
};

export default LevelCardInfo;
