import React from 'react';
import './App.scss';

import Nav from '../components/Nav/Nav';
import Filter from '../components/Filter/Filter';
import Users from '../components/Users/Users';


function App() {
  return (
    <div className="App">
      <Nav />
      <div className="main-content">
      <Filter/>
      <Users/>
    </div>
    </div>
  );
}

export default App;
