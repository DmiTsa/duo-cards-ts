import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import { level } from '../types'
import { imgLibs } from '../constants'

const initialState: level = {
    id: '',
    name: '',
    dif: 0,
    sets: 0,
    tiles: [],
    imgLib: imgLibs.default,
    lives: 0,
}

export const levelSlice = createSlice({
    name: 'level',
    initialState: initialState,
    reducers: {
//         setCurrentLevel: (_state, action) => {
//             return action.payload
//         },

//         setIsOpenedTrue: (state, action) => {
//             return {
//                 ...state,
//                 tiles: state.tiles.map((tile) => {

//                     if (tile.id === action.payload) {
//                         return { ...tile, isOpened: true }
//                     } else { return tile }
//                 })
//             }
//         },

//         setIsOpenedFalse: (state, action) => {
//             return {
//                 ...state,
//                 tiles: state.tiles.map((tile) => {
//                     return action.payload.includes(tile.id) ? { ...tile, isOpened: false } : tile
//                 })
//             }
//         },

//         setIsEnabledFalse: (state, action) => {
//             return {
//                 ...state,
//                 tiles: state.tiles.map((tile) => {
//                     return action.payload.includes(tile.id) ? { ...tile, isEnabled: false } : tile
//                 })
//             }
//         },
    }
})

// export const { setCurrentLevel, setIsOpenedTrue, setIsOpenedFalse, setIsEnabledFalse } = levelSlice.actions

export const selectTiles = (state: RootState) => ( state.level.tiles )
// export const selectDif = (state) => { return state.level.dif }
export const selectImgLib = (state: RootState) => { return state.level.imgLib }

export default levelSlice.reducer

// // id: 1,
// // name: 'template',
// // dif: 2,
// // sets: 4,
// // tiles: [
// //     { id: "1", type: 0, isOpened: false, isEnabled: true },
// //     { id: "2", type: 0, isOpened: false, isEnabled: true },
// //     { id: "3", type: 1, isOpened: false, isEnabled: true },
// //     { id: "4", type: 1, isOpened: false, isEnabled: true },
// //     { id: "5", type: 2, isOpened: false, isEnabled: true },
// //     { id: "6", type: 2, isOpened: false, isEnabled: true },
// //     { id: "7", type: 3, isOpened: false, isEnabled: true },
// //     { id: "8", type: 3, isOpened: false, isEnabled: true },
// // ],
// // imgLib: 'Hearts'