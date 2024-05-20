import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from './store'
import type { level, gameState } from '../types'
import { pages } from '../constants'

const initialState: gameState = {
    activePage: pages.greeting,
    gameSet: '',
    levels: [],
    currentLevel: -1,
    lives: 5,
}

export const gameSlice = createSlice({
name: 'game',
initialState: initialState,
reducers: {
            setActivePage: (state, action: PayloadAction<pages>) => {
            return { ...state, activePage: action.payload }
        },

        setGameSet: (state, action: PayloadAction<string>) => ( { ...state, gameSet: action.payload } ),

        setLevels: (state, action: PayloadAction<level[]>) => {
            return { ...state, levels: action.payload }
        },

//         decrementLive: (state) => {
//             return { ...state, lives: state.lives === 0 ? 0 : state.lives - 1 }
//         },

        incrementCurrentLevel: (state) => {
            return { ...state, currentLevel: state.currentLevel + 1 }
        },

//         setLivesFromState: (state) => {
//             return { ...state, lives: state.lives + state.levels[state.currentLevel].lives }
//         }
}
})

export const { setGameSet, setLevels, incrementCurrentLevel, setActivePage
    // setLivesFromState, decrementLive, 
 } = gameSlice.actions

export const selectorActivePage = (state: RootState) => { return state.game.activePage }
export const selectNumberCurrentLevel = (state: RootState) => { return state.game.currentLevel }

export default gameSlice.reducer


// export const { incrementCurrentLevel, setLivesFromState, decrementLive, setGameSet, setActivePage, setLevels } = gameSlice.actions

// export const selectLives = (state) => { return state.game.lives }
// export const selectLevels = (state) => { return state.game.levels }
// export const selectCurrentLevel = (state) => { return state.game.levels[state.game.currentLevel] }
