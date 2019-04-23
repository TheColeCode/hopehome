import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Logo = () => {
  const Logo = {
    textDecoration: 'none',
    color: '#42f46e',
    fontFamily: 'Lilita One, cursive',
    fontSize: '24pt',
    float: 'left',
  };

  return (
    <h1>
      <Link to="/" style={Logo}>Hope Home</Link>
    </h1>
  );
};

export default Logo;
