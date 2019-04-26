import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  let Footer = {
    backgroundColor: '#292d2a',
    color: '#fff',
    height: '100px',
    width: '100vw',
    position: 'absolute',
    bottom: '0'
  };
  return (
    <div className="Footer">
      <footer style={Footer}>
        <Link to="/">Link</Link>
      </footer>
    </div>
  );
};

export default Footer;
