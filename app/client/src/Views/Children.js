import React, { Component } from 'react';
import ChildExcerpt from '../Components/ChildExcerpt';

class Children extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      content: [],
      singleItem: false
    });
  }

  componentDidMount() {
    this.callApi();
  };

  callApi = async (id) => {
    return await fetch('/api/children/')
    .then(res => res.json())
    .then(data => {
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
        <ChildExcerpt 
          key={child.id} 
          title={child.title.rendered} 
          excerpt={child.excerpt.rendered} 
          thumb={ child.featured_media } 
        />
      )
    });

    return (
      <div className="children">
        <h1>Children</h1>
        <div>{list}</div>
      </div>
    );
  }
}

export default Children;
