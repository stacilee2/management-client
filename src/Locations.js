import React from 'react'

function Locations( {therapists}) {

  let therapistList = therapists
  console.log(therapistList)

  let locationsList = [ 
    {name: "Southern Hills", phone: "523-444-5252", address: "320 Southern Hills Rd., Tallulah, TX 77809"}, 
    {name: "Northern Oaks", phone: "435-970-5578", address: "545 Northern Oaks Blvd., Bridgerton, TX 73245"},
    {name: "Eastern Glades", phone: "446-908-0897", address: "112 Eastern Glades St., Stuckey, TX 72234"},
    {name: "Western Fields", phone: "322-998-0025", address: "645 Western Fields Way, Harrison, TX 76688"}
  ]

  return (
    <div className="location-container">
      {locationsList.map((location) => {
        return(
            <div key={location.name} className="location-card">
              <h2 key={location.name}>{location.name}</h2>
            <br/>
            <br/>
              <a href="https://fw.escapps.net/Display_Portal?destination=/">Organization Handbook</a>
              <h4 key={location.phone}>Phone: {location.phone}</h4>
              <p key={location.address}>Address: {location.address} </p>
            </div>
          )
      })}
    </div>
  )
}

export default Locations;
