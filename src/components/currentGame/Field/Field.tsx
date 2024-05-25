import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  setIsOpenedTrue,
  setIsOpenedFalse,
  setIsEnabledFalse,
  setCurrentLevel,
  selectDif,
  selectTiles,
  selectImgLib,
} from "../../../store/levelSlice";
import {
  decrementLive,
  setLivesFromState,
  incrementCurrentLevel,
  setActivePage,
  selectNumberCurrentLevel,
  selectCurrentLevel,
  selectLives,
  addPoints,
} from "../../../store/gameSlice";
import Tile from "../Tile/Tile";
import { imgLibs, pages } from "../../../constants";
import { level, tile } from "../../../types";
import style from "./Field.module.css";

const DELAY_MS = 700;

const Field: React.FC = () => {
  const [currentTileId, setCurrentTileId] = useState<number[]>([]);
  const [currentClick, setCurrentClick] = useState<number>(0);

  const lives: number = useAppSelector(selectLives);
  const currentLevel: level = useAppSelector(selectCurrentLevel);
  const tiles: tile[] = useAppSelector(selectTiles);
  const dif: number = useAppSelector(selectDif);
  const imgLib: imgLibs = useAppSelector(selectImgLib);
  const numberCurrentLevel: number = useAppSelector(selectNumberCurrentLevel);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentLevel(currentLevel));
  }, [currentLevel]);

  useEffect(() => {
    if (currentClick === dif) {
      lives === 0
        ? dispatch(setActivePage(pages.gameOver))
        : dispatch(decrementLive());

      const matchedTiles = tiles.filter((tile) =>
        currentTileId.includes(tile.id)
      );

      const isAllTypeMached: boolean = matchedTiles
        .map((tile) => tile.type)
        .every((el) => el === matchedTiles[0].type);

      setTimeout(() => {
        if (isAllTypeMached) {
          dispatch(setIsEnabledFalse(currentTileId));
          dispatch(addPoints());
        } else {
          dispatch(setIsOpenedFalse(currentTileId));
        }
      }, DELAY_MS);

      setCurrentClick(0);
      setCurrentTileId([]);
    }
    // eslint-disable-next-line
  }, [currentClick]);

  useEffect(() => {
    setTimeout(() => {
      if (tiles.length !== 0) {
        const isEndLevel = tiles
          .map((tile) => tile.isEnabled)
          .every((el) => el === false);

        if (isEndLevel) {
          if (numberCurrentLevel < 10) {
            dispatch(incrementCurrentLevel());
            dispatch(setCurrentLevel(currentLevel));
            dispatch(setLivesFromState());
          } else {
            dispatch(setActivePage(pages.gameOver));
          }
        }
      }
    }, DELAY_MS);
  }, [tiles]);

  const tileClickHandler = (id: number) => {
    dispatch(setIsOpenedTrue(id));
    setCurrentTileId([...currentTileId, id]);
    setCurrentClick(currentClick + 1);
  };

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
};

export default Field;
