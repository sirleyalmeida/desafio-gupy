
import React from 'react';
import './App.css';
import Api from './components/Api';
import SimpleAppBar from './components/navbar.js';
import SearchAppBar from './components/searchNavbar.js';


function App() {

  return (
    <div className="App">

      <header className="App-header">

        <Api />

        <SimpleAppBar />
        <SearchAppBar />

      </header>
    </div>
  );
}

export default App;
