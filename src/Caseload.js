import React, { useState, useEffect } from 'react'

function Caseload( {therapists} ) {

    const [clients, setClients] = useState([])
    //Set state to data object
    const [rows, setRows] = useState(clients)
   
        //Make GET request to backend for caseload information
        useEffect(() => {
            fetch("http://localhost:9292/client")
            .then(r => r.json())
            .then(data => setRows(data))
        }, [])

    const Row = (props) => {
        const {name, age, location, eligibility, minutes} = props
        return (
            <tr>
                <td>{name}</td>
                <td>{age}</td>
                <td>{location}</td>
                <td>{eligibility}</td>
                <td>{minutes}</td>
                <td>
                    <button>Edit</button>
                    <button>Remove</button></td>
            </tr>
        )
    }

    //Create a component and hand in props and store props value into data variable
    //Return table with table headers
    //Map over data and iterate through each row and return Row component with values
    const Table = (props) => {
        const {data} = props
        return (<table>
            <tbody>
                <tr>
                    <th>Student Name</th>
                    <th>DOB</th>
                    <th>Location</th>
                    <th>Eligibility</th>
                    <th>Minutes Owed:</th>
                    <th>Edit / Remove Client: </th>
                </tr>
                {data.map((row, index) => 
                    <Row 
                    key = {index}
                    name = {row.name}
                    age = {row.age}
                    location = {row.location}
                    eligibility = {row.eligibility}
                    minutes = {row.minutes} /> )}
            </tbody>
        </table>)
    }

    //Return Table component handing in rows
    return (
        <div>
            <h1 className="page-header">Caseload: Region 4</h1>
            <Table data = {rows} />
            </div>
    )
}


export default Caseload;
