import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

function Locations() {

  const [locations, setLocations] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9292/locations`)
    .then(r => r.json())
    .then(data => setLocations(data))
}, []);


  return (
    <div className="location-container">
      {locations.map((location) => {
        let clientsArray = location.clients
        return(
            <div key={location.name} className="location-card">
              <h3 key={location.name}>{location.name}</h3>
              <br/>
              <NavLink to={`/locations/${location.id}/clients/new`}>Add Client</NavLink>
              {clientsArray.map((client)=>{
                return(
                <p key={client.name}>{client.name}</p>
                )
              })}
              <br />
            <br/>
              <a href="https://fw.escapps.net/Display_Portal?destination=/">Organization Handbook</a>
              <br/>
            </div>
          )
      })}
    </div>
  )
}

export default Locations;
