import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
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
    return await fetch('/api/home')
    .then(res => res.json())
    .then(data => {
      console.log(data.express);
      if(data.express.status === 'publish') {
        this.setState({
          id: data.express.id,
          title: data.express.title.rendered,
          content: data.express.content.rendered
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

  let Page = (
      <div key={this.state.id}>
        <h1>{this.state.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
      </div>
  );
    return (
      <div className="page">
        <div>{Page}</div>
      </div>
    );
  }
}

export default Home;
