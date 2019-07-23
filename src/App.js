
import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleAppBar from './components/navbar.js';
import SearchAppBar from './components/searchNavbar.js';


function App() {
  return (
    <div className="App">

      <header className="App-header">
      <SimpleAppBar/>
      <SearchAppBar/>
        
      </header>
    </div>
  );
}

export default App;
