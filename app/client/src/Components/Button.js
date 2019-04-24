import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {
  render() {
    const Button = {
      borderRadius: '5px',
      border: '1px solid black',
      backgroundColor: '#42f46e',
      padding: '.5em 1em',
      color: '#292d2a'
    };

    return (
      <Link style={Button}>Donate</Link>
    );
  }
}

export default Button;
