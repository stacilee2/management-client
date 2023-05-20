import React from 'react';
import './App.css';
import Home from './Home';
import Caseload from './Caseload';
import Locations from './Locations';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Caseload />
      <Locations />
    </div>
  );
}

export default App;
