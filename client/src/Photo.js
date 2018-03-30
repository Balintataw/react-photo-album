import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {getImageById} from './photoAction'
import store from './store'

export class Photo extends Component {
    state = {
        image: ''
    }
  
    componentDidMount(props) {
        const id = this.props.match.params.id

        getImageById(id)
        this.unsubscribe = store.subscribe(() => {
            const state = store.getState()
            this.setState({
                image: state.currentImage
            })
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
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
