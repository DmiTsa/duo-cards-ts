import { FaLayerGroup } from "react-icons/fa";
import { MdOutlineStackedBarChart } from "react-icons/md";
import { BsChatSquareHeart } from "react-icons/bs";
import style from "./ProgressPart.module.css";

interface I_progressPart {
  dif: number;
  sets: number;
  lives: number;
  isActive: boolean;
  isEnded: boolean;
}

const ProgressPart = (props: I_progressPart) => {
  const { dif, sets, lives, isActive, isEnded } = props;

  return (
    <div
      className={`${style.progressPart} ${
        dif === 2
          ? style.easy
          : dif === 3 || dif === 4
          ? style.normal
          : style.hard
      } ${isActive ? style.active : ""} ${isEnded ? style.ended : ""}`}
    >
      <MdOutlineStackedBarChart />
      <strong>{dif}</strong>
      <div className={style.delimeter}></div>
      <FaLayerGroup />
      <strong>{sets}</strong>
      <div className={style.delimeter}></div>
      <BsChatSquareHeart />
      <strong>{lives}</strong>
    </div>
  );
};

export default ProgressPart;
