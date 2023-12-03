import './App.css'
import { useState, useEffect } from "react";
import { tempMovieData, tempWatchedData } from './data';
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

const key = 'af38a845'

const App = () => {
  
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const handleSelectedMovie = (id) => {
    setSelectedId(selectedId => id === selectedId ? null : id)
  }

  const handleCloseMovie = () => {
    setSelectedId(null)
  }

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true)
        setError('');
        const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=${query}`);
        
        if (!res.ok) throw new Error("Something went wrong with fetching movies") 
      
        const data = await res.json();

        if (data.Response === 'False') throw new Error("Movie not found");

        setMovies(data.Search)
      } catch (err) {
          setError(err.message);
      } finally {
        setIsLoading(false)
      }
    }

    // If query has less than 3 letters dont run fetchMovies();
    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    fetchMovies();
  }, [query])

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
            /> 
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList watched={watched} />
            </>
          )}
        </Box>
      </Main>
    </>
  );
};

export default App;

