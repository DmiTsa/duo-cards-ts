import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from './store'
import type { level, gameState, user } from '../types'
import { pages } from '../constants'

const MAX_LEVELS = 10

const initialState: gameState = {
    activePage: pages.greeting,
    levels: [],
    currentLevel: 0,
    user: { id: 'usr', name: 'user', maxPoints: 0},
    lives: 20,
    points: 0
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

        incrementCurrentLevel: (state) => {
            return { ...state, currentLevel: state.currentLevel + 1 }
        },
        
        setLivesFromState: (state) => {
            return { ...state, lives: state.lives + state.levels[state.currentLevel].lives }
        },

        setUser: (state, action: PayloadAction<user>) => {
            return {...state, user: action.payload}
        },

        decrementLive: (state) => {
            return { ...state, lives: state.lives === 0 ? 0 : state.lives - 1 }
        },

        addPoints: (state) => {
            return {...state, points: state.points + state.levels[state.currentLevel].dif * state.levels[state.currentLevel].dif}
        },

        addSelfLevel: (state, action: PayloadAction<level>) => {
            return {...state,
                levels: state.currentLevel < MAX_LEVELS ? [...state.levels, action.payload] : state.levels,
                currentLevel: state.currentLevel < MAX_LEVELS ? state.currentLevel + 1 : state.currentLevel
            }
        },

        setNumberCurrentLevelByZero: (state) => {
            return {...state, currentLevel: 0}
        }

    }
})
//setGameSet,
export const {
    setLevels,
    incrementCurrentLevel,
    setActivePage,
    decrementLive,
    setLivesFromState,
    addPoints,
    setUser,
    addSelfLevel,
    setNumberCurrentLevelByZero
 } = gameSlice.actions

export const selectorActivePage = (state: RootState) => ( state.game.activePage )
export const selectNumberCurrentLevel = (state: RootState) => ( state.game.currentLevel )
export const selectCurrentLevel = (state: RootState) => ( state.game.levels[state.game.currentLevel] )
export const selectLevels = (state: RootState) => ( state.game.levels )
export const selectUser = (state: RootState) => ( state.game.user )
export const selectLives = (state: RootState) => ( state.game.lives )
export const selectPoints = (state: RootState) => ( state.game.points )

export default gameSlice.reducer

