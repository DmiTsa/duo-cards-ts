export type tile = {
    id: number,
    type: number,
    isOpened: boolean,
    isEnabled: boolean, 
}

export type level = {
    id: string,
    name: string,
    dif: number,
    sets: number,
    tiles: tile[],
    imgLib: string,
    lives: number,
}

export type gameState = {
    activePage: string,
    gameSet: string,
    levels: level[],
    currentLevel: number,
    lives: number,
}

export type gameSet = {
    id: string,
    name: string,
    dif: number,
    sets: number, //maximum sets = 10
    imgLib: string,
    lives: number
}