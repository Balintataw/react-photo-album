import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {getImageById} from './photoAction'
import {connect} from 'react-redux'

export class Photo extends Component {
  
    componentDidMount(props) {
        const id = this.props.match.params.id
        getImageById(id)
    }

    next = () => {
        getImageById(this.props.imageId + 1)
    }
    previous = () => {
        getImageById(this.props.imageId - 1)
    }
    componentWillReceiveProps(nextProps) {
        console.log(this.props.albumId)
        console.log(nextProps.albumId)
        if(nextProps.albumId !== this.props.albumId) {
            console.log('good')
        }
    }

    render() {
        return (
            <div className="foto-container">
                <div className="photo-nav-bar">
                    <Link onClick={this.previous} to={'/photo/' + this.props.imageId}>Previous</Link> 
                    <Link to={'/album/' + this.props.albumId}>Go back</Link> 
                    <Link onClick={this.next} to={'/photo/' + this.props.imageId}>Next</Link> 
                </div>
                {/* {console.log(this.props)} */}
                <div className="img-and-caption">
                    <img src={this.props.imageURL} id="single-foto-img" alt=""/>
                    <p id="image-caption">{this.props.imageName}</p>
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    console.log(state)
    return {
        image: state.currentImage.image,
        imageId: state.currentImage.id,
        albumId: state.currentImage.albumId,
        imageURL: state.currentImage.imageURL,
        imageName: state.currentImage.imageName
    }
}

export default connect(mapStateToProps)(Photo);
