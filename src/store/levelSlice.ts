import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'
import { level } from '../types'
import { imgLibs } from '../constants'

const initialState: level = {
    id: '',
    name: '',
    dif: -1,
    sets: 0,
    tiles: [],
    imgLib: imgLibs.default,
    lives: 0,
}

export const levelSlice = createSlice({
    name: 'level',
    initialState: initialState,
    reducers: {
        setCurrentLevel: (_state, action: PayloadAction<level>) => {
            return action.payload
        },

        setIsOpenedTrue: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                tiles: state.tiles.map((tile) => {

                    if (tile.id === action.payload) {
                        return { ...tile, isOpened: true }
                    } else { return tile }
                })
            }
        },

        setIsOpenedFalse: (state, action: PayloadAction<number[]>) => {
            return {
                ...state,
                tiles: state.tiles.map((tile) => {
                    return action.payload.includes(tile.id) ? { ...tile, isOpened: false } : tile
                })
            }
        },

        setIsEnabledFalse: (state, action: PayloadAction<number[]>) => {
            return {
                ...state,
                tiles: state.tiles.map((tile) => {
                    return action.payload.includes(tile.id) ? { ...tile, isEnabled: false } : tile
                })
            }
        },
    }
})

export const { setCurrentLevel, setIsOpenedTrue, setIsOpenedFalse, setIsEnabledFalse } = levelSlice.actions

export const selectTiles = (state: RootState) => ( state.level.tiles )
export const selectDif = (state: RootState) => ( state.level.dif )
export const selectImgLib = (state: RootState) => { return state.level.imgLib }

export default levelSlice.reducer