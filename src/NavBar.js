import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';

function NavBar( {GiConversation} ) {
  return (
    <div className="nav-bar">
    <Navbar>
      <div className="logo">
        <div className="logo-icon"><GiConversation /></div>
        <p className="company-name">Specialty Therapy Services, LLC.</p>
      </div>
      <NavLink 
        exact to="/" 
        className="nav-link"
        style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "white" : "white"
            };
          }}>
      Home
      </NavLink>
      <NavLink 
        exact to="/caseload"
        className="nav-link"
        style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "white" : "white"
            };
          }}>
      Caseload
      </NavLink>
      <NavLink 
      exact to="/locations"
      className="nav-link"
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? "bold" : "",
          color: isActive ? "white" : "white"
        };
      }}>
      Locations
      </NavLink>
    </Navbar>
  </div>
)
}

export default NavBar;
