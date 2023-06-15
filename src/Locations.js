import React, {useState, useEffect} from 'react';
import { NavLink, useParams } from 'react-router-dom';

function Locations( {locations} ){

  return(

    <div>
      {locations.map(location => {
        return(
          <div key={location.name} className="location-card">
            <h3>{location.name}</h3>
            <h4><NavLink to={`/locations/${location.id}/clients/new`}>Add Client</NavLink></h4>
            {location.clients.map((client)=>{
                    return(
                      <ul key={client.id} className="clients-list">
                    <NavLink to={`/clients/${client.id}`} key={client.name}>{client.name}</NavLink>
                    </ul>)
                  })}
                  <br />
                <br />
                  <a href="https://fw.escapps.net/Display_Portal?destination=/">Organization Handbook</a>
                <br />
            </div>
          )
      })}

    </div>
  )
}

export default Locations;