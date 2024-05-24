import type { tile } from "../../../types";
import { imgLibs } from "../../../constants";
import imgClosed from "../../../lib/svg/n.svg";
import imgLibController from "../../../lib/tileImages";
import style from "./Tile.module.css";

interface I_tile {
  tile: tile;
  imgLib: imgLibs;
  click: (id: number) => void;
}

const Tile = ({ tile, imgLib, click }: I_tile) => {
  const { id, type, isOpened, isEnabled } = tile;

  const imgSet = imgLibController(imgLib);

  if (isEnabled) {
    if (imgSet[type] && isOpened) {
      return (
        <div className={style.card + " " + style.opened}>
          <img src={imgSet[type]} className={style.img} alt={imgLib} />
        </div>
      );
    } else {
      return (
        <div className={style.card} onClick={() => click(id)}>
          <img src={imgClosed} className={style.img} alt="heart" />
        </div>
      );
    }
  } else {
    return (
      <div className={style.card + " " + style.disabled}>
        <img src={imgSet[type]} className={style.img} alt="heart" />
      </div>
    );
  }
};

export default Tile;
