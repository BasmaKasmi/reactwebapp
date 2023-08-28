import React from 'react';
import './NavAgenda.css';

const NavAgenda = () => {
  return (
    <div className='app-container'>
      {/* Small navbar for small screens */}
      <nav className="navbar-small">
        <div className="navbar-small-title">
          <h2>Mon agenda</h2>
        </div>
      </nav>
    </div>
  )
}

export default NavAgenda;
