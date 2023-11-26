import './App.css'
import { useState } from "react";
import { tempMovieData } from './data';
import Navbar from './components/Navbar.jsx';
import Main from './components/Main.jsx';

const App = () => {
  
  const [movies, setMovies] = useState(tempMovieData);
  return (
    <>
      <Navbar movies={movies}/>
      <Main movies={movies}/>
    </>
  );
};

export default App;

