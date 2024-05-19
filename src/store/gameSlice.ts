import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { level, gameState } from '../types'
import { RootState } from './store'


const initialState: gameState = {
    activePage: 'greeting',
    gameSet: '',
    levels: [],
    currentLevel: -1,
    lives: 5,
}

export const gameSlice = createSlice({
name: 'game',
initialState: initialState,
reducers: {
    //         setActivePage: (state, action) => {
//             return { ...state, activePage: action.payload }
//         },

        setGameSet: (state, action: PayloadAction<string>) => ( { ...state, gameSet: action.payload } ),

        setLevels: (state, action: PayloadAction<level[]>) => {
            return { ...state, levels: action.payload }
        },

//         decrementLive: (state) => {
//             return { ...state, lives: state.lives === 0 ? 0 : state.lives - 1 }
//         },

//         incrementCurrentLevel: (state) => {
//             return { ...state, currentLevel: state.currentLevel + 1 }
//         },

//         setLivesFromState: (state) => {
//             return { ...state, lives: state.lives + state.levels[state.currentLevel].lives }
//         }
}
})

export const { setGameSet, setLevels
    // incrementCurrentLevel, setLivesFromState, decrementLive, setActivePage
 } = gameSlice.actions

export const selectorActivePage = (state: RootState) => { return state.game.activePage }

export default gameSlice.reducer


// export const { incrementCurrentLevel, setLivesFromState, decrementLive, setGameSet, setActivePage, setLevels } = gameSlice.actions

// export const selectLives = (state) => { return state.game.lives }
// export const selectNumberCurrentLevel = (state) => { return state.game.currentLevel }
// export const selectLevels = (state) => { return state.game.levels }
// export const selectCurrentLevel = (state) => { return state.game.levels[state.game.currentLevel] }
