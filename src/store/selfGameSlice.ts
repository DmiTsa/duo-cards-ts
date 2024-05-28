import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from './store'
import type { selfGameState } from '../types'
import { selfGameset } from "../data/selfGameSets";

const initialState: selfGameState = {
    fullGameSet: selfGameset,
    gameSet: [],
    //levels
    //currentLevel
}

export const selfGameSlice = createSlice({
    name: 'selfGame',
    initialState: initialState,
    reducers: {
        delGameSet: (state, action: PayloadAction<string>) => {
            return {...state, fullGameSet: state.fullGameSet.filter((gameSet) =>  gameSet.id !== action.payload)}
        }
    }
})

export const { delGameSet } = selfGameSlice.actions

export const selectFullGameSet = (state: RootState) => ( state.selfGame.fullGameSet )


export default selfGameSlice.reducer

// import { 
//     // PayloadAction, 
//     createSlice } from '@reduxjs/toolkit'
// // import { RootState } from './store'
// import { selfGameset } from "../data/selfGameSets";
// import { selfGameState } from '../types'



// export const selfGameSlice = createSlice({
//     name: 'selfGame',
//     initialState: initialState,
//     reducers: {
//         clearGame: (state) => {
//             return {...state, gameSet: []}
//         }
//     }
// })

// export const{ clearGame } = selfGameSlice.actions

// // export const selectGameSet = (state: RootState) => ( state.selfGame.gameSet )

// export default selfGameSlice.reducer






