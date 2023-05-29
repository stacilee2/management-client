import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';


function Caseload() {

    //Set state to data object
    const [clients, setClients] = useState([])
    const navigate = useNavigate()

       // Make GET request to backend for caseload information
        useEffect(() => {
            fetch("http://localhost:9292/clients")
            .then(r => r.json())
            .then(data => setClients(data))
        }, [])

        function handleDeleteClient(deletedClient) {
            const updatedClients = clients.filter((client) => client.id !== deletedClient)
            setClients(updatedClients);
          };

        function handleDeleteClick(e) {
            let client = e.target.id
            fetch(`http://localhost:9292/clients/${client}`, {
              method: "DELETE",
            })
              .then((r) => r.json())
              .then(() => handleDeleteClient(client));
              navigate('/locations')
          };

    return (
        
        <div>
            <h3 className="home-header">Caseload</h3>
          {clients.map(client => {
        return (
          <ul key={client.id} className="caseload">
            <hr />
           
            <p>Name: {client.name}</p>
            <p>Age: {client.age}</p>
            <p>Eligibility: {client.eligibility}</p>
            <p>Minutes: {client.minutes} <NavLink to={`/clients/${client.id}/client/edit`}> Edit Minutes</NavLink></p>
            <br/>
            <button id={client.id} onClick={handleDeleteClick}>Delete Client</button>
            <hr />
          </ul>
        );
      })}
        </div>
    )
}

export default Caseload;
