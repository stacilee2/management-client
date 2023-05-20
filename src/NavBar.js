import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav-bar">
         <NavLink 
            exact to='/'
            style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "pink" : "white"
                };
              }}>
            Home
        </NavLink>
         <NavLink 
            exact to='/caseload'
            style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "pink" : "white"
                };
              }}>
            Caseload
        </NavLink>
        <NavLink 
            exact to='/locations'
            style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "pink" : "white"
                };
              }}>
            Locations
        </NavLink>
    </nav>
  )
}

export default NavBar;
