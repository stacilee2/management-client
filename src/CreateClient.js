import React, {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function CreateClient() {

  const { locationId } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    eligibility: "",
    minutes: ""
  });

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/locations/${locationId}/clients`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
    })
    .then((r) => r.json())
    .then((newClient) => console.log(newClient))
    // navigate("/caseload")
    };

    //MAKE A POST REQUEST HERE WITH NEW DATA
    function handleChange(e) {
      const name = e.target.name;
      let value = e.target.value;
  
      setFormData({
        ...formData,
        [name]: value,
      })
    }

  return (
    <div className="add-client-form">
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input 
        type="text" 
        required="required" 
        placeholder="Enter a name..." 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
      />
      <br/>
      <label>Age: </label>
      <input 
        type="text" 
        required="required" 
        placeholder="Enter an age..." 
        name="age" 
        value={formData.age} 
        onChange={handleChange}
        />
      <br/>
      <label>Eligibility: </label>
      <input 
        type="text" 
        required="required" 
        placeholder="Enter eligibility..." 
        name="eligibility" 
        value={formData.eligibility} 
        onChange={handleChange}
        />
      <br/>
      <label>Minutes: </label>
      <input 
        type="text" 
        required="required" 
        placeholder="Enter minutes..." 
        name="minutes"
        value={formData.minutes} 
        onChange={handleChange}
        />
        <button type="submit">Submit</button>
    </form>
    </div>
   
  )
}

export default CreateClient;
