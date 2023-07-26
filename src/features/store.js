import { configureStore } from '@reduxjs/toolkit'
import { movieSlice } from './slices/movieSlices'

export const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
  },
})
