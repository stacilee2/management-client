import React, { useState, useEffect } from 'react'
import ReadRow from './ReadRow';
import EditRow from './EditRow';

function Caseload( {therapists} ) {

    //Set state to data object
    const [rows, setRows] = useState([])
    const [editRowId, setRowId] = useState(null)
   
        //Make GET request to backend for caseload information
        useEffect(() => {
            fetch("http://localhost:9292/client")
            .then(r => r.json())
            .then(data => setRows(data))
        }, [])

    //Create a component and hand in props and store props value into data variable
    //Return table with table headers
    //Map over data and iterate through each row and return Row component with values
    const Table = (props) => {
        const {data} = props
        return (
        <form>
        <table>
            <tbody>
                <tr>
                    <th>Student Name</th>
                    <th>DOB</th>
                    <th>Location</th>
                    <th>Eligibility</th>
                    <th>Minutes Owed:</th>
                    <th>Edit / Remove Client: </th>
                </tr>
               
                {data.map((row) => 
                    <>
                        {editRowId === row.id ? (
                            <EditRow key = {row.id} />
                        ) : (
                            <ReadRow 
                            setRowId={setRowId}
                            key = {row.name}
                            id = {row.id}
                            name = {row.name}
                            age = {row.age}
                            location = {row.location}
                            eligibility = {row.eligibility}
                            minutes = {row.minutes} /> 
                        )}
                </>)}
            </tbody>
        </table>
        </form>
    )
    }

    //Return Table component handing in rows
    return (
        <div>
            <h1 className="page-header">Caseload: Region 4</h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <form className="add-client-form">
            <label align="center">Add Client:</label>
                <input type="text" name="name" required="required" placeholder="Enter full name..."></input>
                <input type="text" name="age" required="required" placeholder="Enter DOB..."></input>
                <input type="text" name="location" required="required" placeholder="Enter location..."></input>
                <input type="text" name="eligibility" required="required" placeholder="Enter eligibility..."></input>
                <input type="text" name="minutes" required="required" placeholder="Enter minutes..."></input>
                <button type="submit">Add Client</button>
            </form>
            <br/>
            <Table key={rows} data = {rows}/>
        </div>
    )
}

export default Caseload;
