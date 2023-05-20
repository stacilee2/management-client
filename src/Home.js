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
            <a href="https://accounts.google.com/signin/v2/challenge/pwd?elo=1&ifkv=Af_xneG9TGl771_rD-GJZ4yhw3_at8BZKa8fumdhkt7YdgksK0I5McuITFi_C90Q6TCkOoBCvLQWNg&flowName=GlifWebSignIn&flowEntry=ServiceLogin&cid=1&navigationDirection=forward&TL=AG7eRGDNNRW8s1pKFtn8qPpJ6k7Ys47S1r5qo11wIW6igT4Da0-fauattqmIBwRi">Specialty Therapy Email</a>
            </div>
           
            <h3>Help Center</h3>
            <p>Contact us if you experience any technical difficulties at the number below:</p>
            <a href="3349200087">334-920-0087</a>
          </div>
        </div>
      )
    }

export default Home;
