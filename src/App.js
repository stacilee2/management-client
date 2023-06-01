import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Home';
import ClientCard from './ClientCard';
import Locations from './Locations';
import CreateLocation from './CreateLocation';
import NavBar from './NavBar';
import CreateClient from './CreateClient';
import EditClient from './EditClient';
import {GiConversation} from "react-icons/gi";
import {AiOutlineMail} from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";

function App() {

  //Set state to data object
  const [locations, setLocations] = useState([])
  const [clients, setClients] = useState([])
  
      useEffect(() => {
          fetch(`http://localhost:9292/locations`)
          .then(r => r.json())
          .then(data => setLocations(data))
      }, [clients]);

      useEffect(() => {
        fetch(`http://localhost:9292/clients`)
        .then(r => r.json())
        .then(data => setClients(data))
    }, []);

      function onAddClient(newClient) {
        setClients([...clients, newClient])
      }

      function onUpdateClient(updatedClient) {
        setClients([...clients, updatedClient])
      }

      function handleDeleteClient(deletedClient) {
        const updatedClients = locations.filter((client) => client.id !== deletedClient)
        setClients([...clients, updatedClients])
      };

      function onAddLocation(newLocation) {
        setLocations([...locations, newLocation])
      }

      // function handleDeleteLocation(deletedLocation) {
      //   const updatedLocations = locations.filter((location) => location.id !== deletedLocation)
      //   setLocations([...locations, updatedLocations])
      // };
      

  return (
    <div className="App">
      <NavBar GiConversation={GiConversation} />
      <Routes>
        <Route exact path='/' element={<Home VscAccount={VscAccount} AiOutlineMail={AiOutlineMail} />} />
        <Route path='/clients/:clientId' element={<ClientCard handleDeleteClient={handleDeleteClient}/>} />
        <Route path='/locations' element={<Locations locations={locations}  />} />
        <Route path='/locations/location/new' element={<CreateLocation onAddLocation={onAddLocation}/>} />
        <Route exact path='/locations/:locationId/clients/new' element={<CreateClient handleDeleteClient={handleDeleteClient} onAddClient={onAddClient}/>} />
        <Route exact path='/clients/:clientId/client/edit' element={<EditClient onUpdateClient={onUpdateClient}/>} />
        <Route exact path='/locations/new' element={<CreateLocation />} />
      </Routes>
    </div>
  );
}

export default App;
