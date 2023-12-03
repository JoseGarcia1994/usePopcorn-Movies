import './App.css'
import { useState, useEffect } from "react";
import { tempMovieData, tempWatchedData } from './data';
import Navbar from './components/Navbar.jsx';
import Search from './components/Search.jsx';
import NumResults from './components/NumResults.jsx';
import Main from './components/Main.jsx';
import Box from './components/Box.jsx';
import MovieList from './components/MovieList.jsx';
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

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true)
        const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=interstellar`);
        
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
    fetchMovies();
  }, [])

  return (
    <>
      <Navbar>
        <Search />      
        <NumResults movies={movies}/>
      </Navbar>

      <Main>
        <Box>
          {/* isLoading ? <Loader /> : <MovieList movies={movies}/> */}
          {isLoading && <Loader />}
          {!isLoading && !error && <MovieList movies={movies} />}
          {error && <ErrorMessage message={error}/>}
        </Box>

        <Box>
          <WatchedSummary watched={watched}/>
          <WatchedList watched={watched}/>
        </Box>
      </Main>
    </>
  );
};

export default App;

