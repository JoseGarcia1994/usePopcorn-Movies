import WatchedMovie from "./WatchedMovie.jsx";

const WatchedList = ({watched, onDeleteWatched}) => {

  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie 
          key={movie.imdbID} 
          movie={movie} 
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
};

export default WatchedList;