import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Caseload from './Caseload';
import Locations from './Locations';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/caseload' element={<Caseload />} />
        <Route path='/locations' element={<Locations />} />
      </Routes>
    </div>
  );
}

export default App;
