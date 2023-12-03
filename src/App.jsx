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

const key = 'af38a845'

const App = () => {
  
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true)
      const res = await fetch(`http://www.omdbapi.com/?apikey=${key}&s=interstellar`)
      const data = await res.json();
      setMovies(data.Search)
      setIsLoading(false)
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
          {isLoading ? <Loader /> : <MovieList movies={movies}/>}
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

