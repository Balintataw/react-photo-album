import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {getImageById} from './photoAction'
import store from './store'

export class Photo extends Component {
    state = {
        image: '',
        imageId: '',
        albumId: ''
    }
  
    componentDidMount(props) {
        const id = this.props.match.params.id
        
        getImageById(id)
        this.unsubscribe = store.subscribe(() => {
            const state = store.getState()
            this.setState({
                image: state.currentImage,
                imageId: state.currentImage.id,
                albumId: state.currentImage.albumId
            })
            // console.log(this.state)
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    next = () => {
        getImageById(this.state.imageId + 1)
        console.log(this.state.albumId)
    }
    previous = () => {
        getImageById(this.state.imageId - 1)
        console.log(this.state)
    }

    render() {
        return (
            <div className="foto-container">
                <div className="photo-nav-bar">
                    <Link onClick={this.previous} to={'/photo/' + this.state.imageId}>Previous</Link> 
                    <Link to={'/album/' + this.state.image.albumId}>Go back</Link> 
                    <Link onClick={this.next} to={'/photo/' + this.state.imageId}>Next</Link> 
                    {/* <Link onClick={this.next()}>Next</Link>  */}
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
