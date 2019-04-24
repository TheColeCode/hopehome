import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import '../Styles/Navbar.css';

const Navbar = () => {
  
  return (
    <div className="Navbar">
      <nav>
        <ul>
          <li><Link to="/" title="Volunteer">Volunteer</Link></li>
          <li><Link to="/" title="Children">Children</Link></li>
          <li><Link to="/" title="About">About</Link></li>
          <Button />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
