
import React from 'react';
import './App.css';
import Api from './components/Api';
import SimpleAppBar from './components/navbar.js';
import SearchAppBar from './components/searchNavbar.js';
import EnhancedTableHead from './components/candidate'

function App() {

  return (
    <div className="App">

      <header className="App-header">

       

        <SimpleAppBar />
        <SearchAppBar />

      </header>

    
      <section>
        <EnhancedTableHead >
       
        </EnhancedTableHead>
      </section>
    </div>
  );
}

export default App;
