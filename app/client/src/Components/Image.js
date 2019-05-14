import React, { Component } from 'react'

class Image extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            src: '',
            alt: ''   
        });
    }

    componentDidMount() {
    // Call our fetch function below once the component mounts
        if (this.props.id > 0) {
            this.loadImage(this.props.id);
        } 
    };

    loadImage = async (id) => {
        return await fetch('/api/media/' + id)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    src: data.src,
                    alt: data.alt,
                })
            })
            .catch(err => {
                console.error(err);
            })
    }

  
  render() {
    const src = this.state.src;
    const alt = this.state.alt;
    
    return (
      <div>
        <img src={src} alt={alt} />
      </div>
    )
  }
}

export default Image;
