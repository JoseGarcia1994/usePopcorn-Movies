import Movie from './Movie.jsx';

const MovieList = ({ movies, handleSelectedMovie }) => {

  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie 
          key={movie.imdbID} 
          movie={movie}
          handleSelectedMovie={handleSelectedMovie}
        />
      ))}
    </ul>
  );
};

export default MovieList;