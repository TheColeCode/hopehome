import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo';

const Header = () => {
  return (
      <header className="Header">
        <Logo />
        <Navbar className="Navigation" />
      </header>
  );
};

export default Header;
