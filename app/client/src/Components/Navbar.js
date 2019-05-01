import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import '../Styles/Navbar.css';

const Navbar = () => {

  return (
    <div className="Navbar">
      <nav>
        <ul>
          <li><Link to="/about" title="About">About</Link></li>
          <li><Link to="/volunteer" title="Volunteer">Volunteer</Link></li>
          <li><Link to="/children" title="Children">Children</Link></li>
          <Button />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
