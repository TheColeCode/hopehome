import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import '../App.css';

const Navbar = () => {
  const Navbar = {
    padding: '1.5em 20px',
    border: '0',
    height: '85px',
    position: 'absolute',
    width: '100vw',
    backgroundColor: '#292d2a'
  };

  const Nav = {
    float: 'right'
  };

  const NavLink = {
    display: 'inline-block',
    margin: '10px 1em'
  };

  return (
    <div className="Navbar" style={Navbar}>
      <Logo />
      <nav style={Nav}>
        <ul style={{ listStyleType: 'none' }}>
          <li style={NavLink}><Link to="/" title="Volunteer">Volunteer</Link></li>
          <li style={NavLink}><Link to="/" title="Children">Children</Link></li>
          <li style={NavLink}><Link to="/" title="About">About</Link></li>
          <Button />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
