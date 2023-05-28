import React, {useState} from 'react';

function CreateLocation () {

    const[newLocation, setNewLocation] = useState([])

    function handleSubmit(e) {
        e.preventDefault();
        setNewLocation("")

        fetch("http://localhost:9292/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newLocation),
            })
            .then((r) => r.json())
            .then((newLocation) => console.log(newLocation))
            }

        function handleChange(e){
            setNewLocation(e.target.value)
        }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                onChange={handleChange}
                value={newLocation}>
                </input>
                <button>Click Me!</button>
            </form>
            <p>{newLocation}</p>
        </div>
    )
}


//     const [newLocation, setNewLocation] = useState("");

//     function handleChange(e) {
//         setNewLocation(e.target.value)
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         fetch("http://localhost:9292/locations", {
//         method: "POST",
//         mode: 'cors',
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newLocation),
//         })
//         .then((r) => r.json())
//         .then((data) => console.log(data))
//         };

//   return (
//     <div className="add-location-form">
//         <form onSubmit={handleSubmit}>
//             <label>Create Location</label>
//             <input 
//                 type="text" 
//                 value={ newLocation } 
//                 onChange={handleChange} >
//             </input>
//             <button type="submit">Submit</button>
//         </form>
//     </div>
//   )
// }

export default CreateLocation;