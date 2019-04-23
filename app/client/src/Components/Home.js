import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
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
      <div className="Container">
        <Header />
        <Banner />
      </div>
    );
  }
}

export default Home;
