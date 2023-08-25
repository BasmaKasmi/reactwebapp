import React from 'react';
import './NavEmarg.css';

const NavEmarg = () => {
  return (
    <div className='app-container'>
      {/* Small navbar for small screens */}
      <nav className="navbar-small">
        <div className="navbar-small-title">
          <h2>Mes émargements</h2>
        </div>
      </nav>
    </div>
  )
}

export default NavEmarg;
