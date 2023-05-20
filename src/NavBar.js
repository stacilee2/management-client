import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/caseload'>Caseload</Link>
        <Link to='/locations'>Locations</Link>
    </nav>
  )
}

export default NavBar;
