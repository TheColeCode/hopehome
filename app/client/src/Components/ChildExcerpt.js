import React, { Component } from 'react';
import Image from '../Components/Image';

class ChildExcerpt extends Component {
    render() {
      const title = this.props.title;
      const excerpt = this.props.excerpt.rendered;
      const thumb = this.props.thumb;
  
      return(
        <article>
          <aside><Image id={thumb}/></aside>
          <div>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html:excerpt}} />
          </div>
        </article>
      )
    }
  }

  export default ChildExcerpt;