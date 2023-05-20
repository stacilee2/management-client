import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="nav-bar">
        <Link className="nav-link" to='/'>Home</Link>
        <Link className="nav-link" to='/caseload'>Caseload</Link>
        <Link className="nav-link" to='/locations'>Locations</Link>
    </nav>
  )
}

export default NavBar;
