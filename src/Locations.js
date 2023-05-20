import React from 'react'

function Locations() {

  let locationsList = [ 
    {name: "Southern Hills", phone: "523-444-5252", address: "320 Southern Hills Rd., Tallulah, TX 77809"}, 
    {name: "Northern Oaks", phone: "435-970-5578", address: "545 Northern Oaks Blvd., Bridgerton, TX 73245"},
    {name: "Eastern Glades", phone: "446-908-0897", address: "112 Eastern Glades St., Stuckey, TX 72234"},
    {name: "Western Fields", phone: "322-998-0025", address: "645 Western Fields Way, Harrison, TX 76688"}
  ]

  return (
    <div>
      <h3>Locations: </h3>
      {locationsList.map(location => {
        return(
          <div className="location-card" key={location.name}>{location.name}
          <br/>
          <br/>
            <a href="https://fw.escapps.net/Display_Portal?destination=/">Organization Handbook</a>
            <h4>Phone: {location.phone}</h4>
            <h4>Address: {location.address} </h4>
          </div>
        )
      })}
     

    </div>
  )
}

export default Locations;
