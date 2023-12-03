import { useState, useEffect } from "react";
import StarRating from "./StarRating.jsx";
import Loader from "./Loader.jsx";

const key = 'af38a845'

const SelectedMovie = ({ selectedId, onCloseMovie }) => {

  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Director: director,
    Actors: actors,
    Genre: genre
  } = movie

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true)
      const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&i=${selectedId}`)
      const data = await res.json();
      setMovie(data)
      setIsLoading(false)
    }
    getMovieDetails();
  }, [selectedId])

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} iMDb rating
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              <StarRating maxRating={10} size={24} />
            </div>
            <p><em>{plot}</em></p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default SelectedMovie;