import React, {useState, useEffect} from 'react';
import {Routes, Route } from 'react-router-dom';
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

  const [locations, setLocations] = useState([])

      useEffect(() => {
        fetch(`http://localhost:9292/locations`)
        .then(r => r.json())
        .then(data => setLocations(data))
    }, []);

  function onAddClient(newClient) {
          const currentLocation = locations.find(location => location.id === newClient.location_id)
          const newClientList = [...currentLocation.clients, newClient] //new client array
          const updatedLocation = {...currentLocation, clients: newClientList}
          const updatedLocations = locations.map(location => location.id === newClient.location_id ? updatedLocation : location)
          setLocations(updatedLocations)
      }
      
      function onUpdateClient(updatedClient) {
          const currentLocation = locations.find(location => location.id === updatedClient.location_id)
          const newClientsArray = [...currentLocation.clients.filter(client => client.id === updatedClient.id )]
          const updatedLocation = {...currentLocation, clients: newClientsArray}
          console.log(updatedLocation)
      }

      function handleDeleteClient(deletedClient) {
          const currentLocation = locations.find(location => location.id === deletedClient.location_id)
          const newClientsArray = [...currentLocation.clients.filter(client => client.id !== deletedClient.id )]
          const updatedLocation = {...currentLocation, clients: newClientsArray}
          const updatedLocations = locations.map(location => location.id === deletedClient.location_id ? updatedLocation : location)
          setLocations(updatedLocations);
      };

  return (
    <div className="App">
      <NavBar GiConversation={GiConversation} />
      <Routes>
        <Route exact path='/' element={<Home VscAccount={VscAccount} AiOutlineMail={AiOutlineMail} />} />
        <Route path='/clients/:clientId' element={<ClientCard handleDeleteClient={handleDeleteClient}/>} />
        <Route path='/locations' element={<Locations locations = {locations} />} />
        <Route path='/locations/:locationId/clients/new' element={<CreateClient onAddClient={onAddClient}/>} />
        <Route path='/clients/:clientId/client/edit' element={<EditClient onUpdateClient={onUpdateClient}/>} />
        <Route path='/locations/new' element={<CreateLocation locations={locations} setLocations={setLocations}/>} />
      </Routes>
    </div>
  );
}

export default App;
