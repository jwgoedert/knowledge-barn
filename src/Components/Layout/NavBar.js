import React from 'react';
// import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div id="navbar-icon" className="navbar-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="30.5" viewBox="0 0 38 30.5">
            <g transform="rotate(-89.999903 19 15.25)">
              <text font-size="0" style={{"white-space":"pre"}}>
                <tspan x="3.75" y="26.25" fill="rgb(51,51,51)" font-family="Nasalization" font-size="32" font-weight="400" style={{"white-space":"pre","text-transform":"none"}}>K</tspan>
              </text>
              <text font-size="0" style={{"white-space":"pre"}}>
                <tspan x="10.25" y="26.25" fill="rgb(51,51,51)" font-family="Nasalization" font-size="32" font-weight="400" style={{ "white-space": "pre", "text-transform": "none"}}>B</tspan>
              </text>
            </g>
          </svg>
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