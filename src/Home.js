import React from 'react'

function Home({VscAccount, AiOutlineMail}) {

    function handleClick() {
        console.log("I've been clicked!")
      }
    
      return (
        <div>
          <h3 className="home-header">Management Landing Page</h3>
          <hr />
          <div className="home-body">
          <h3 className="profile-text">Profile Info</h3>
            <button className="profile-icon" onClick={handleClick}><VscAccount /> 
            </button>
            <h3>Check Your Email Here:</h3>
            <div className="email"> <AiOutlineMail />
            <a href="email.com">Specialty Therapy Email</a>
            </div>
           
            <h3>Help Center</h3>
            <p>Contact us if you experience any technical difficulties at the number below:</p>
            <a href="3349200087">334-920-0087</a>
          </div>
        </div>
      )
    }

export default Home;
