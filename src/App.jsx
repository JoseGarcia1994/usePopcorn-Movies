import './App.css'
import { useState } from "react";
import { tempMovieData } from './data';
import Navbar from './components/Navbar.jsx';
import Search from './components/Search.jsx';
import NumResults from './components/NumResults.jsx';
import Main from './components/Main.jsx';
import ListBox from './components/ListBox.jsx';
import MovieList from './components/MovieList.jsx';
import WatchedBox from './components/WatchedBox.jsx';

const App = () => {
  
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <Navbar>
        <Search />      
        <NumResults movies={movies}/>
      </Navbar>

      <Main>
        <ListBox>
          <MovieList movies={movies}/>
        </ListBox>
        <WatchedBox />
      </Main>
    </>
  );
};

export default App;

