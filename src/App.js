import React from 'react';
import './App.css';
import SimpleAppBar from './components/navbar.js';
import SearchAppBar from './components/searchNavbar.js';
import EnhancedTableHead from './components/applicate'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <SimpleAppBar />
      <SearchAppBar />
      {/* </header> */}
      {/* <section> */}
      <EnhancedTableHead >
      </EnhancedTableHead>
      {/* </section> */}
    </div>
  );
}

export default App;