import { useState } from "react";
import ListBox from "./ListBox.jsx";
import WatchedBox from './WatchedBox.jsx';

const Main = ({movies}) => {

  return (
    <main className="main">
      <ListBox movies={movies}/>
      
      <WatchedBox />
    </main>
  );
};

export default Main;