import React from 'react';
import './NavSt.css';

const NavSt = () => {
  return (
    <div className='app-container'>
      {/* Small navbar for small screens */}
      <nav className="navbar-small">
        <div className="navbar-small-title">
          <h1>Liste étudiants</h1>
        </div>
      </nav>
    </div>
  )
}

export default NavSt;
