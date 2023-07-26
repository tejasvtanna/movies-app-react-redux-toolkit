import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { fetchMovies } from 'features/slices/movieSlices'

const MovieListing = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const movies = useSelector((state) => state.movie.movies)

  useEffect(() => {
    console.log('useEffect()', dispatch)
    dispatch(fetchMovies())
  }, [dispatch])

  return (
    <div className="ml-3">
      {movies?.Response === 'True' && (
        <>
          <div className="text-blue-500 font-bold">Total Movies: {movies.totalResults}</div>

          <div className="flex flex-wrap">
            {movies.Search.map((movie) => (
              <div
                key={movie.imdbID}
                onClick={() => navigate(`movie/${movie.imdbID}`)}
                className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700 mt-1 mr-2 cursor-pointer">
                <img className="rounded-t-lg w-full p-1" src={movie.Poster} alt="" />
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
                    order.
                  </p>
                  <Link
                    to={`/movie/${movie.imdbID}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View Details
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default MovieListing
