import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from 'api/movieApi'
import { MovieApiKey } from 'api/movieApiKey'

const initialState = {
  movies: {},
  selectedMovie: {},
}

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await movieApi.get(`?apiKey=${MovieApiKey}&s=Harry&type=movie`)
  return response.data
})

export const fetchMovieDetails = createAsyncThunk('movie/fetchMovieDetails', async (id) => {
  const response = await movieApi.get(`?apiKey=${MovieApiKey}&i=${id}&type=movie`)
  return response.data
})

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    removeSelectedMovie: (state) => {
      state.selectedMovie = {}
    },
  },
  extraReducers: {
    [fetchMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload }
    },
    [fetchMovieDetails.fulfilled]: (state, { payload }) => {
      return { ...state, selectedMovie: payload }
    },
  },
})

export const { removeSelectedMovie } = movieSlice.actions
