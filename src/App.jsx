import './App.css'
import { useState, useEffect } from "react";
import Navbar from './components/Navbar.jsx';
import Search from './components/Search.jsx';
import NumResults from './components/NumResults.jsx';
import Main from './components/Main.jsx';
import Box from './components/Box.jsx';
import MovieList from './components/MovieList.jsx';
import SelectedMovie from './components/SelectedMovie.jsx';
import WatchedSummary from './components/WatchedSummary.jsx';
import WatchedList from './components/WatchedList.jsx';
import Loader from './components/Loader.jsx';
import ErrorMessage from './components/ErrorMessage.jsx';
import { useMovies } from './hooks/useMovies.js';

const App = () => {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const {movies, error, isLoading} = useMovies(query)

  const [watched, setWatched] = useState(() => {
    const storedValue = localStorage.getItem('watched');
    return JSON.parse(storedValue);
  });

  const handleSelectedMovie = (id) => {
    setSelectedId(selectedId => id === selectedId ? null : id)
  }

  function handleCloseMovie() {
    setSelectedId(null)
  }

  const handleAddWatched = movie => {
    setWatched(watched => [...watched, movie])
    // This can be done in a use Effect to be reusable
    // localStorage.setItem('watched', JSON.stringify([...watched, movie]));
  }

  const handleDeleteWatched = id => {
    setWatched(watched => watched.filter(movie => movie.imdbID !== id))
  }

  useEffect(() => {
    localStorage.setItem('watched', JSON.stringify(watched));
  }, [watched])
  

  
  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />      
        <NumResults movies={movies}/>
      </Navbar>

      <Main>
        <Box>
          {/* isLoading ? <Loader /> : <MovieList movies={movies}/> */}
          {isLoading && <Loader />}
          {!isLoading && !error && 
          <MovieList 
            movies={movies}
            handleSelectedMovie={handleSelectedMovie}
          /> }
          {error && <ErrorMessage message={error}/>}
        </Box>

        <Box>
          { selectedId ? (
            <SelectedMovie
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            /> 
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList watched={watched} onDeleteWatched={handleDeleteWatched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
};

export default App;

