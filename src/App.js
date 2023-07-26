import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MovieDetail from './components/MovieDetail'
import PageNotFound from './components/PageNotFound'
import MovieListing from 'components/MovieListing'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route index element={<MovieListing />} />
          <Route path="movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
