import React, { Component } from 'react';

class Posts extends Component {
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
    this.callApi(this.props.id);
  };

  callApi = async (id) => {
    return await fetch('/api/post/' + id )
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.express.status === 'publish') {
        this.setState({
          id: data.express.id,
          title: data.express.title.rendered,
          content: data.express.content.rendered,
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
        <div dangerouslySetInnerHTML={{ __html: this.state.content }} />
      </div>
  );
    return (
      <div className="posts">
        <div>{Content}</div>
      </div>
    );
  }
}

export default Posts;
