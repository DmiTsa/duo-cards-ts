import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from './store'
import type { level, gameState } from '../types'
import { pages } from '../constants'

const initialState: gameState = {
    activePage: pages.greeting,
    levels: [],
    currentLevel: 0,
    lives: 5,
}

export const gameSlice = createSlice({
name: 'game',
initialState: initialState,
reducers: {
            setActivePage: (state, action: PayloadAction<pages>) => {
            return { ...state, activePage: action.payload }
        },

        // setGameSet: (state, action: PayloadAction<string>) => ( { ...state, gameSet: action.payload } ),

        setLevels: (state, action: PayloadAction<level[]>) => {
            return { ...state, levels: action.payload }
        },

        decrementLive: (state) => {
            return { ...state, lives: state.lives === 0 ? 0 : state.lives - 1 }
        },

        incrementCurrentLevel: (state) => {
            return { ...state, currentLevel: state.currentLevel + 1 }
        },

        setLivesFromState: (state) => {
            return { ...state, lives: state.lives + state.levels[state.currentLevel].lives }
        }
}
})
//setGameSet,
export const {  setLevels, incrementCurrentLevel, setActivePage, decrementLive, setLivesFromState
 } = gameSlice.actions

export const selectorActivePage = (state: RootState) => ( state.game.activePage )
export const selectNumberCurrentLevel = (state: RootState) => ( state.game.currentLevel )
export const selectLives = (state: RootState) => ( state.game.lives )
export const selectCurrentLevel = (state: RootState) => ( state.game.levels[state.game.currentLevel] )
export const selectLevels = (state: RootState) => ( state.game.levels )

export default gameSlice.reducer

