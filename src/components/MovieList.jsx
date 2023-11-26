import { tempMovieData } from '../data';
import { useState } from 'react';
import Movie from './Movie.jsx';

const MovieList = () => {

  const [movies, setMovies] = useState(tempMovieData);

  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie}/>
      ))}
    </ul>
  );
};

export default MovieList;