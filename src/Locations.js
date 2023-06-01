import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

function Locations( {locations } ){

  // function handleDeleteClick() {
  //   fetch(`http://localhost:9292/locations/${location.id}`, {
  //     method: "DELETE",
  //   })
  //     .then((r) => r.json())
  //     .then((deletedLocation) => handleDeleteLocation(deletedLocation));
  //     navigate('/locations')
  // };


  return (
    <div>
      <h3 className="home-header">Locations</h3>
      <hr/>
    <div className="location-container">
     
      {locations.map((location) => {
        return(
            <div key={location.name} className="location-card">
              <h2 key={location.name}>{location.name} </h2>
              <h4><NavLink to={`/locations/${location.id}/clients/new`}>Add Client</NavLink></h4>
              {location.clients.map((client)=>{
                return(
                  <ul key={client.id} className="clients-list">
                <NavLink to={`/clients/${client.id}`} key={client.name}>{client.name}</NavLink>
                </ul>)
              })}
              <br />
            <br/>
              <a href="https://fw.escapps.net/Display_Portal?destination=/">Organization Handbook</a>
              <br/>
              {/* <button id={location.id} onClick={handleDeleteClick}>Delete Location</button> */}
              <br/>
            </div>
          )
      })}
    </div>
    </div>
  )
}

export default Locations;
