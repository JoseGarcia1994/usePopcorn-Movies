import { useState } from "react";
import ListBox from "./ListBox.jsx";
import WatchedBox from './WatchedBox.jsx';

const Main = () => {

  return (
    <main className="main">
      <ListBox />
      
      <WatchedBox />
    </main>
  );
};

export default Main;