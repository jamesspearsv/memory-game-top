// ** STATIC IMPORTS **//
import './App.css';
import { Gameboard } from './components/Gameboard/Gameboard';
import { data } from './js/testData';

// ** COMPONENT & REACT IMPORTS **//
import { useState } from 'react';

function App() {
  return (
    <div id='app'>
      <Gameboard cardInfo={data} />
    </div>
  );
}

export default App;
