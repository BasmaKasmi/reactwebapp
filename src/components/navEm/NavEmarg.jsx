import React from 'react';
import './NavEmarg.css';

const navEmarg = () => {
  return (
    <div className='app-container'>
      {/* Small navbar for small screens */}
      <nav className="navbar-small">
        <div className="navbar-small-title">
          <h1>Mes émargements</h1>
        </div>
      </nav>
    </div>
  )
}

export default navEmarg
