import { pages, imgLibs } from './constants'
 
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
    imgLib: imgLibs,
    lives: number,
}

export type user = {
    id: string,
    name: string,
    maxPoints: number
}

export type gameState = {
    activePage: pages,
    levels: level[],
    currentLevel: number,
    user: user,
    lives: number,
    points: number
}

export type gameSet = {
    id: string,
    name: string,
    dif: number,
    sets: number, //maximum sets = 10
    imgLib: imgLibs,
    lives: number
}