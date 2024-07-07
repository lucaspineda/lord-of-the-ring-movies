import { ChangeEvent, useEffect, useState } from "react";
import MovieCard from './../MovieCard/index'
import './index.scss';

import {getMovies, MovieData} from '../api';

const MovieList = () => {
const [filteredMovies, setFilteredMovies] = useState<MovieData[]>();
const [allMovies, setAllMovies] = useState<MovieData[]>();


const [movieName, setMovieName] = useState<string>();

// const allMovies: MovieData[] = movies ? [...movies] : [];
  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log('onInput', e.target.value)
    const movieNameTarget = e.target.value
    const newMovies = allMovies?.filter((movie) => {
      if(movie.name.includes(movieNameTarget)) {
        return movie
      }
    })
    setFilteredMovies(newMovies)
  };

  const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log('onSelect',  e)
  }

  useEffect(() => {
    getMovies()
    .then((moviesRes) => {
      setFilteredMovies(moviesRes)
      setAllMovies(moviesRes)
  })
  }, []);

	return (
		<div className="movieList">
      <header className="movieList__header">
        <h1>Lord of the Rings Movies</h1>
        <div className="movieList__header__metrics">
          <div>Avg. movie runtime: xxx min</div>
          <div>Avg. movie budget: $xx M</div>
        </div>
        <input onChange={onInput} value={movieName} className="movieList__header__filter" placeholder="Filter movies by name"/>
        <select className="movieList__header__sort" placeholder="Filter movies by name"/>
      </header>
      <main className="movieList__items">
      {filteredMovies?.map((movie) => (
        <MovieCard data={movie} />
      ))}
      </main>
    </div>
	);
}

export default MovieList