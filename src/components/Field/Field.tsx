// import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  //   setIsOpenedTrue,
  //   setIsOpenedFalse,
  //   setIsEnabledFalse,
  //   setCurrentLevel,
  //   selectDif,
  selectTiles,
  selectImgLib,
} from "../../store/levelSlice";
import {
  //   decrementLive,
  //   setLivesFromState,
  //   incrementCurrentLevel,
  //   setActivePage,
  selectNumberCurrentLevel,
  //   selectCurrentLevel,
  //   selectLives,
} from "../../store/gameSlice";
import Tile from "../Tile/Tile";
// import fullLevelCreator from "../../utils/fullLevelCreator";
import style from "./Field.module.css";

// const DELAY_MS = 700;

const Field: React.FC = () => {
  //   const [currentClick, setCurrentClick] = useState(0);
  //   const [currentTileId, setCurrentTileId] = useState([]);

  //   const lives = useSelector(selectLives);
  //   const currentLevel = useSelector(selectCurrentLevel);
  const tiles = useAppSelector(selectTiles);
  //   const dif = useSelector(selectDif);
  const imgLib = useAppSelector(selectImgLib);
  const numberCurrentLevel = useAppSelector(selectNumberCurrentLevel);
  const dispatch = useAppDispatch();

  //   useEffect(() => {
  //     console.log("render field");

  //     lives === 0
  //       ? dispatch(setActivePage("gameOver"))
  //       : dispatch(decrementLive());

  //     if (currentClick === dif) {
  //       const matchedTiles = tiles.filter((tile) =>
  //         currentTileId.includes(tile.id)
  //       );
  //       const isAllTypeMached = matchedTiles
  //         .map((tile) => tile.type)
  //         .every((el) => el === matchedTiles[0].type);

  //       setTimeout(() => {
  //         isAllTypeMached
  //           ? dispatch(setIsEnabledFalse(currentTileId))
  //           : dispatch(setIsOpenedFalse(currentTileId));
  //       }, DELAY_MS);

  //       setCurrentClick(0);
  //       setCurrentTileId([]);
  //     }
  //     // eslint-disable-next-line
  //   }, [currentClick]);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       if (tiles) {
  //         const isEndLevel = tiles
  //           .map((tile) => tile.isEnabled)
  //           .every((el) => el === false);
  //         if (isEndLevel) {
  //           dispatch(incrementCurrentLevel());
  //           dispatch(setLivesFromState());
  //         }
  //       }
  //     }, DELAY_MS);
  //     // eslint-disable-next-line
  //   }, [tiles]);

  //   useEffect(() => {
  //     if (numberCurrentLevel < 10) {
  //       dispatch(setCurrentLevel(fullLevelCreator(currentLevel)));
  //     } else {
  //       dispatch(setActivePage("gameOver"));
  //     }
  //     // eslint-disable-next-line
  //   }, [numberCurrentLevel]);

  const tileClickHandler = (id: number) => {
    //     dispatch(setIsOpenedTrue(id));
    //     setCurrentTileId([...currentTileId, id]);
    //     setCurrentClick(currentClick + 1);
  };

  if (numberCurrentLevel >= 0 && numberCurrentLevel < 10) {
    return (
      <div className={style.field}>
        {tiles?.map((tile) => (
          <Tile
            key={tile.id}
            tile={tile}
            imgLib={imgLib}
            click={tileClickHandler}
          />
        ))}
      </div>
    );
  } else {
    return <p>no level</p>;
  }
};

export default Field;
