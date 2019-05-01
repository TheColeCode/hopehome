import React, { Component } from 'react';

class Children extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      content: [],
      singleItem: false
    });
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callApi();
  };

  callApi = async (id) => {
    return await fetch('/api/children/')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let contentAsArray = Array.from(data.express);
      this.setState({
        content: contentAsArray,
        singleItem: data.singleItem,
      })

    })
    .catch(err => {
      this.setState({
        content: '<p>no data fetched</p>'
      })
      console.error(err);
    })
  }
  render() {
    let list = this.state.content.map((child, index) => {
      return (
        <div key={child.id}>
          <h1>{child.title.rendered }</h1>
          <p dangerouslySetInnerHTML={{ __html: child.excerpt.rendered }} />
          <div className="full">
            <p dangerouslySetInnerHTML={{ __html: child.content.rendered }} />
          </div>

        </div>
      )
    });

    return (
      <div className="page">
        <h1>Children</h1>
        <div>{list}</div>
      </div>
    );
  }
}

export default Children;
