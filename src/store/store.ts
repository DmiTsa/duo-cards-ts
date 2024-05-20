import { configureStore } from '@reduxjs/toolkit'
import gameSlice from './gameSlice'
import levelSlice from './levelSlice'

const store = configureStore({
    reducer: {
        game: gameSlice,
        level: levelSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store