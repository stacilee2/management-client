import React, {useState, useEffect} from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

function ClientCard( {handleDeleteClient} ) {

    const navigate = useNavigate()
    const {clientId} = useParams();
    const [client, setClient] = useState([])

    //Using params to get specific client information
    useEffect(() => {
      fetch(`http://localhost:9292/clients/${clientId}`)
      .then((r) => r.json())
      .then((client) => setClient(client))
    }, [clientId]);
    
        function handleDeleteClick() {
            fetch(`http://localhost:9292/clients/${clientId}`, {
              method: "DELETE",
            })
              .then((r) => r.json())
              .then((deletedClient) => handleDeleteClient(deletedClient));
              navigate('/locations')
          };

    return (
        
        <div>
            <h3 className="home-header">Client</h3>
            <hr/>
            <div className="client-card">
              <p>Name: {client.name}</p>
              <p>Age: {client.age}</p>
              <p>Eligibility: {client.eligibility}</p>
              <p>Minutes Owed: {client.minutes}  <NavLink to={`/clients/${clientId}/client/edit`}> Edit Minutes</NavLink></p>
              <br/>
              <button id={clientId} onClick={handleDeleteClick}>Delete Client</button>
            </div>
        </div>
    )
}

export default ClientCard;
