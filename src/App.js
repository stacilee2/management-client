import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Caseload from './Caseload';
import Locations from './Locations';
import CreateLocation from './CreateLocation';
import NavBar from './NavBar';
import CreateClient from './CreateClient';
import EditClient from './EditClient';
import {GiConversation} from "react-icons/gi";
import {AiOutlineMail} from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";

function App() {

  return (
    <div className="App">
      <NavBar GiConversation={GiConversation} />
      <Routes>
        <Route exact path='/' element={<Home VscAccount={VscAccount} AiOutlineMail={AiOutlineMail} />} />
        <Route path='/caseload' element={<Caseload />} />
        <Route path='/locations' element={<Locations />} />
        <Route exact path='/locations/:locationId/clients/new' element={<CreateClient />} />
        <Route exact path='/clients/:clientId/client/edit' element={<EditClient />} />
        <Route exact path='/locations/new' element={<CreateLocation />} />
      </Routes>
    </div>
  );
}

export default App;
