import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  const Logo = {
    textDecoration: 'none',
    color: '#42f46e',
    fontFamily: 'Lilita One, cursive',
    fontSize: '24pt',
    float: 'left',
  };

  return (
    <h1 className="Logo">
      <Link to="/" style={Logo}>Hope Home</Link>
    </h1>
  );
};

export default Logo;
