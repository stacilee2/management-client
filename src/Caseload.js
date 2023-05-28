import React, { useState, useEffect } from 'react';

function Caseload() {

    //Set state to data object
    const [clients, setClients] = useState([])

       // Make GET request to backend for caseload information
        useEffect(() => {
            fetch("http://localhost:9292/clients")
            .then(r => r.json())
            .then(data => setClients(data))
        }, [])

        function handleEditClick (e) {
            console.log("I've been clicked!", e)
        };

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
          };

    return (
        
        <div>
          {clients.map(client => {
        return (
          <div key={client.id}>
            <hr />
            <p>Name: {client.name}</p>
            <p>Age: {client.age}</p>
            <p>Eligibility: {client.eligibility}</p>
            <p>Minutes: {client.minutes}</p>
            <button onClick={handleEditClick}>Edit</button>
            <button id={client.id} onClick={handleDeleteClick}>Delete</button>
            <hr />
          </div>
        );
      })}
        </div>
    )
}

export default Caseload;
