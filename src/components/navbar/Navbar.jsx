import React from 'react'

import './Navbar.css';

const Navbar = () => {
  return (
    <div className="Navbar">
      <h1>Sparks</h1>
      <div className="Navbar_links">
        <a href="/">Popular</a>
        <a href="/">Top rated</a>
        <a href="/">Upcoming</a>
      </div>
    </div>
  )
}

export default Navbar;

