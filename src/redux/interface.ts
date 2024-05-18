interface tile {
    id: string,
    type: number,
    isOpened: boolean,
    isEnabled: boolean, 
}

interface level {
    id: number,
    name: string,
    dif: number,
    sets: number,
    tiles: tile[],
}

export interface gameState {
    activePage: string,
    gameSet: string,
    levels: level[],
    currentLevel: number,
    lives: number,
}