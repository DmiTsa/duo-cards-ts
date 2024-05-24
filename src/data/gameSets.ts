import type { gameSet } from '../types'
import { imgLibs } from '../constants'

export const EASY_GAMESET: gameSet[] = [
    { id: '11', name: 'easy game 1', dif: 2, sets: 2, imgLib: imgLibs.hearts, lives: 4 },
    { id: '12', name: 'easy game 2', dif: 2, sets: 3, imgLib: imgLibs.hearts, lives: 6 },
    { id: '13', name: 'easy game 3', dif: 2, sets: 4, imgLib: imgLibs.hearts, lives: 8 },
    { id: '14', name: 'easy game 4', dif: 2, sets: 5, imgLib: imgLibs.hearts, lives: 10 },
    { id: '15', name: 'easy game 5', dif: 2, sets: 6, imgLib: imgLibs.hearts, lives: 12 },
    { id: '16', name: 'easy game 6', dif: 3, sets: 2, imgLib: imgLibs.hearts, lives: 14 },
    { id: '17', name: 'easy game 7', dif: 3, sets: 3, imgLib: imgLibs.hearts, lives: 16 },
    { id: '18', name: 'easy game 8', dif: 3, sets: 4, imgLib: imgLibs.hearts, lives: 18 },
    { id: '19', name: 'easy game 9', dif: 3, sets: 5, imgLib: imgLibs.hearts, lives: 20 },
    { id: '110', name: 'easy game 10', dif: 3, sets: 6, imgLib: imgLibs.hearts, lives: 22 },
]

export const NORMAL_GAMESET: gameSet[] = [
    { id: '21', name: 'normal game 1', dif: 3, sets: 6, imgLib: imgLibs.hearts, lives: 24 },
    { id: '22', name: 'normal game 2', dif: 3, sets: 7, imgLib: imgLibs.hearts, lives: 26 },
    { id: '23', name: 'normal game 3', dif: 3, sets: 8, imgLib: imgLibs.hearts, lives: 28 },
    { id: '24', name: 'normal game 4', dif: 3, sets: 9, imgLib: imgLibs.hearts, lives: 30 },
    { id: '25', name: 'normal game 5', dif: 3, sets: 10, imgLib: imgLibs.hearts, lives: 32 },
    { id: '26', name: 'normal game 6', dif: 4, sets: 2, imgLib: imgLibs.default, lives: 34 },
    { id: '27', name: 'normal game 7', dif: 4, sets: 3, imgLib: imgLibs.hearts, lives: 36 },
    { id: '28', name: 'normal game 8', dif: 4, sets: 4, imgLib: imgLibs.hearts, lives: 38 },
    { id: '29', name: 'normal game 9', dif: 4, sets: 5, imgLib: imgLibs.hearts, lives: 40 },
    { id: '210', name: 'normal game 10', dif: 4, sets: 6, imgLib: imgLibs.hearts, lives: 42 }
]

export const HARD_GAMESET: gameSet[] = [
    { id: '31', name: 'hard game 1', dif: 4, sets: 6, imgLib: imgLibs.hearts, lives: 44 },
    { id: '32', name: 'hard game 2', dif: 4, sets: 7, imgLib: imgLibs.hearts, lives: 46 },
    { id: '33', name: 'hard game 3', dif: 4, sets: 8, imgLib: imgLibs.hearts, lives: 48 },
    { id: '34', name: 'hard game 4', dif: 4, sets: 9, imgLib: imgLibs.hearts, lives: 50 },
    { id: '35', name: 'hard game 5', dif: 4, sets: 10, imgLib: imgLibs.hearts, lives: 52 },
    { id: '36', name: 'hard game 6', dif: 5, sets: 6, imgLib: imgLibs.hearts, lives: 54 },
    { id: '37', name: 'hard game 7', dif: 5, sets: 7, imgLib: imgLibs.hearts, lives: 56 },
    { id: '38', name: 'hard game 8', dif: 5, sets: 8, imgLib: imgLibs.hearts, lives: 58 },
    { id: '39', name: 'hard game 9', dif: 5, sets: 9, imgLib: imgLibs.hearts, lives: 60 },
    { id: '310', name: 'hard game 10', dif: 5, sets: 10, imgLib: imgLibs.hearts, lives: 60 }
]