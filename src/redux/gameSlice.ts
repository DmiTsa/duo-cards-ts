import { createSlice } from "@reduxjs/toolkit";
import {gameState} from './interface'


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
reducers: {}
})

export default gameSlice.reducer

//     reducers: {

//         setActivePage: (state, action) => {
//             return { ...state, activePage: action.payload }
//         },

//         setGameSet: (state, action) => { return { ...state, gameSet: action.payload } },

//         setLevels: (state, action) => {
//             return { ...state, levels: action.payload }
//         },

//         decrementLive: (state) => {
//             return { ...state, lives: state.lives === 0 ? 0 : state.lives - 1 }
//         },

//         incrementCurrentLevel: (state) => {
//             return { ...state, currentLevel: state.currentLevel + 1 }
//         },

//         setLivesFromState: (state) => {
//             return { ...state, lives: state.lives + state.levels[state.currentLevel].lives }
//         }
//     }
// })

// export const { incrementCurrentLevel, setLivesFromState, decrementLive, setGameSet, setActivePage, setLevels } = gameSlice.actions

// export const selectorActivePage = (state) => { return state.game.activePage }
// export const selectLives = (state) => { return state.game.lives }
// export const selectNumberCurrentLevel = (state) => { return state.game.currentLevel }
// export const selectLevels = (state) => { return state.game.levels }
// export const selectCurrentLevel = (state) => { return state.game.levels[state.game.currentLevel] }
