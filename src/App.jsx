// ** STATIC IMPORTS **//
import './App.css';
import { Gameboard } from './components/Gameboard/Gameboard';
import { Scoreboard } from './components/Scoreboard/Scoreboard';
import { data } from './js/testData';

// ** COMPONENT & REACT IMPORTS **//
import { useState } from 'react';

function App() {
  return (
    <div id='app'>
      <Scoreboard />
      <Gameboard cardInfo={data} />
    </div>
  );
}

export default App;
