import React from 'react';
import './App.scss';

import Nav from '../components/Nav/Nav';
import Filter from '../components/Filter/Filter';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Filter />
      <Footer />
    </div>
  );
}

export default App;
