import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export class Photo extends Component {
    state = {
        image: ''
    }
  
    componentDidMount(props) {
        console.log(this.props.match.params)
        // console.log(this.props.match)
        const id = this.props.match.params.id
        axios.get('http://localhost:3001/images/' + id).then(resp => {
            console.log(resp.data)
            this.setState({
                image: resp.data
            })
        })
    }

    render() {
        return (
            <div className="foto-container">
                <div className="photo-nav-bar">
                    <Link to={'/album/' + this.state.image.albumId}>Previous</Link> 
                    <Link to={'/album/' + this.state.image.albumId}>Go back</Link> 
                    <Link to={'/album/' + this.state.image.albumId}>Next</Link> 
                </div>
                <div className="img-and-caption">
                    <img src={this.state.image.imageURL} id="single-foto-img" alt=""/>
                    <p id="image-caption">{this.state.image.imageName}</p>
                </div>
            </div>
        )
    }
};

export default Photo;
