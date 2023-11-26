import Movie from './Movie.jsx';

const MovieList = ({movies}) => {

  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie}/>
      ))}
    </ul>
  );
};

export default MovieList;