import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditClient(){

    const[minutes, setMinutes] = useState("")
    const { clientId } = useParams();
    const navigate = useNavigate();

    function handleChange(e){
        setMinutes(e.target.value)
    };

    function handleSubmit(e){
        e.preventDefault()
        console.log("submitted!")
        setMinutes("")

        fetch(`http://localhost:9292/clients/${clientId}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({minutes}),
            })
            .then((r) => r.json())
            .then((updatedClient) => onUpdateClient(updatedClient))
            navigate('/locations')
            };

    return (
        <div className="client-form-container">
        <div className="add-client-form">
            <h3>Edit Minutes for Client</h3>
                <form onSubmit={handleSubmit}>
                    <label>Minutes Owed: </label>
                    <input 
                        type="text"
                        onChange={handleChange}
                        value={minutes}
                    >
                    </input>
                    <button type="submit">Submit</button>
                </form>
        </div>
        </div>
    )
}

export default EditClient;