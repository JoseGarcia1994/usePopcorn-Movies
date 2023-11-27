import './App.css'
import { useState } from "react";
import { tempMovieData, tempWatchedData } from './data';
import Navbar from './components/Navbar.jsx';
import Search from './components/Search.jsx';
import NumResults from './components/NumResults.jsx';
import Main from './components/Main.jsx';
import Box from './components/Box.jsx';
import MovieList from './components/MovieList.jsx';
import WatchedSummary from './components/WatchedSummary.jsx';
import WatchedList from './components/WatchedList.jsx';

const App = () => {
  
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <Navbar>
        <Search />      
        <NumResults movies={movies}/>
      </Navbar>

      <Main>
        <Box>
          <MovieList movies={movies}/>
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

