import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../logo.svg';
import '../App.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      content: null
    });
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    fetch('/')
      .then(res => res.json())
      .then(data => this.setState({ content: data }))
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="App-intro">{this.props.content}</p>
        </header>
      </div>
    );
  }
}

export default Home;
