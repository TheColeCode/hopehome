import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      id: null,
      title: null,
      content: null
    });
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callApi();
  };

  callApi = async (id) => {
    return await fetch('/api/page/' + id)
    .then(res => res.json())
    .then(data => {
      console.log(data.express);
      if(data.express.status === 'publish') {
        this.setState({
          id: data.express.id,
          title: data.express.title,
          content: data.express.content,
        })
      }

    })
    .catch(err => {
      this.setState({
        content: '<p>no data fetched</p>'
      })
      console.error(err);
    })
  }


  render() {
  let Content = (
      <div key={this.state.id}>
        <h1>{this.state.title}</h1>
        <div>{this.state.content}</div>
      </div>
  );
    return (
      <div className="page">
        <div>{Content}</div>
      </div>
    );
  }
}

export default Page;
