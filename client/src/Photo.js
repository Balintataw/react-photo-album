import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {getImageById} from './photoAction'
import {connect} from 'react-redux'
import axios from 'axios'
import './css/Photo.css'

export class Photo extends Component {
  
    componentDidMount(props) {
        const id = this.props.match.params.id
        getImageById(id)
    }
    handleClick = (e) => {
        const id = this.props.imageId
        axios.delete('http://localhost:3001/images/' + id).then(resp => {
            // render deleted message instead of alert
        })
        alert('Deleted');
        this.props.history.goBack()
    }

    render() {
        return (
            <div className="foto-container">
                <div className="photo-nav-bar">
                    <Link onClick={this.previous} to={'/photo/' + this.props.imageId}>Previous</Link> 
                    <Link to={'/album/' + this.props.albumId}>Go back</Link> 
                    <Link onClick={this.next} to={'/photo/' + this.props.imageId}>Next</Link> 
                </div>
                <div className="img-and-caption">
                    <img src={this.props.imageURL} value={this.props.imageId} id="single-foto-img" alt=""/>
                    <p id="image-caption">{this.props.imageName}</p>
                    <button onClick={this.handleClick} className="delete-image-button">Delete image</button>
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    // console.log(state)
    return {
        image: state.currentImage.image,
        imageId: state.currentImage.id,
        albumId: state.currentImage.albumId,
        imageURL: state.currentImage.imageURL,
        imageName: state.currentImage.imageName
    }
}

export default connect(mapStateToProps)(Photo);
