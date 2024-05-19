import type { gameSet, level } from "../types"

type fullLevelCreator = (gs: gameSet) => level

const fullLevelCreator = (gs: gameSet) => {
    const { dif, sets } = gs
    const typesTile: number[] = []

    for (let i = 0; i < sets; i++) {
        for (let j = 0; j < dif; j++) {
            typesTile.push(i)
        }
    }

    for (let i = typesTile.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [typesTile[i], typesTile[j]] = [typesTile[j], typesTile[i]];
    }

    return {
      ...gs,
        tiles: typesTile.map((tileType, i) => {
            return { id: i, type: tileType, isOpened: false, isEnabled: true }
        })
    }
}

export default fullLevelCreator
