import { ChangeEvent } from "react";
import './index.scss';

import {getMovies, MovieData} from '../api';

const MovieList = () => {
  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('onInput', e)
  };

  const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log('onSelect',  e)
  }

	return (
		<div className="movieList">
      <header className="movieList__header">
        <h1>Lord of the Rings Movies</h1>
        <div className="movieList__header__metrics">
          <div>Avg. movie runtime: xxx min</div>
          <div>Avg. movie budget: $xx M</div>
        </div>
        <input className="movieList__header__filter" placeholder="Filter movies by name"/>
        <select className="movieList__header__sort" placeholder="Filter movies by name"/>
      </header>
      <main className="movieList__items">
      Good luck &#128540;!
      </main>
    </div>
	);
}

export default MovieList