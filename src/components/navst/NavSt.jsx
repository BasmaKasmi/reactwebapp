import React from 'react';
import './NavSt.css';

const NavSt = () => {
  return (
    <div className='app-container'>
      {/* Small navbar for small screens */}
      <nav className="navbar-small">
        <div className="navbar-small-title">
          <h2>Liste étudiants</h2>
        </div>
      </nav>
    </div>
  )
}

export default NavSt;
