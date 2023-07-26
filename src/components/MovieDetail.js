import { fetchMovieDetails, removeSelectedMovie } from 'features/slices/movieSlices'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const MovieDetail = () => {
  const { imdbID } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const selectedMovie = useSelector((state) => state.movie.selectedMovie)

  useEffect(() => {
    dispatch(fetchMovieDetails(imdbID))
  }, [dispatch, imdbID])

  return (
    <div className="flex flex-col mt-3 ml-3">
      <div className="flex">
        <span className="w-64 font-bold flex-none">Title</span>
        <span>{selectedMovie.Title}</span>
      </div>
      <div className="flex">
        <span className="w-64 font-bold flex-none">Year</span>
        <span>{selectedMovie.Year}</span>
      </div>
      <div className="flex">
        <span className="w-64 font-bold flex-none">Rated</span>
        <span>{selectedMovie.Rated}</span>
      </div>
      <div className="flex">
        <span className="w-64 font-bold flex-none">Released</span>
        <span>{selectedMovie.Released}</span>
      </div>
      <div className="flex">
        <span className="w-64 font-bold flex-none">Plot</span>
        <span className="">{selectedMovie.Plot}</span>
      </div>
      <div className="flex">
        <span className="w-64 font-bold flex-none">Awards</span>
        <span>{selectedMovie.Awards}</span>
      </div>

      <button
        className="px-3 py-2 font-medium text-center text-white bg-blue-700 rounded-lg flex-none w-24 mt-10"
        onClick={() => {
          dispatch(removeSelectedMovie())
          navigate('/')
        }}>
        Go Back
      </button>
    </div>
  )
}

export default MovieDetail
