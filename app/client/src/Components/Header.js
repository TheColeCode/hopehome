import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import '../App.css';

const Header = () => {
  return (
      <header className="Header">
        <Navbar className="Navigation" />
      </header>
  );
};

export default Header;
