import React from 'react';

function ReadRow ({ id, name, age, location, eligibility, minutes, setRowId }) {

    // const {id, name, age, location, eligibility, minutes} = props

    function handleEdit(event, id){
        event.preventDefault();
        setRowId(id)
    }

    function handleRemove(){
        fetch(`http://localhost:9292/client/${id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then((data) => console.log("removed", data));
    }
        return (
            <tr>
                <td>{name}</td>
                <td>{age}</td>
                <td>{location}</td>
                <td>{eligibility}</td>
                <td>{minutes}</td>
                <td>
                    <button id={id} onClick={(event)=>{handleEdit(event, id)}}>Edit</button>
                    <button id={id} onClick={handleRemove}>Remove</button></td>
            </tr>
        )
}

export default ReadRow;
