import React from 'react';
// import { Link } from 'react-router-dom';
import knobaIcon from '../../Icon-KNOBA.svg';

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div id="navbar-icon" className="navbar-item">
          <img src={knobaIcon} alt="knoba-icon"></img>
        </div>
        <a href="/">
          <p id="navbar-title" className="navbar-item">knoba</p>
        </a>
        <p id="navbar-subtitle" className="navbar-item">every thought a seed, every subject a crop </p>
      </div>
    </div>
  )
}

export default Navbar;