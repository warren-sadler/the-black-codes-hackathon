import React from 'react';
import './App.scss';

import Nav from '../components/Nav/Nav';
import Header from '../components/Header/Header';
import Filter from '../components/Filter/Filter';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Filter />
    </div>
  );
}

export default App;
