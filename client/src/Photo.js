import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {getImageById} from './photoAction'
import {connect} from 'react-redux'

export class Photo extends Component {
    // state = {
    //     image: '',
    //     imageId: '',
    //     albumId: ''
    // }
  
    componentDidMount(props) {
        const id = this.props.match.params.id
        
        getImageById(id)
        // this.unsubscribe = store.subscribe(() => {
        //     const state = store.getState()
        //     this.setState({
        //         image: state.currentImage,
        //         imageId: state.currentImage.id,
        //         albumId: state.currentImage.albumId
        //     })
        //     // console.log(this.state)
        // })
    }
    // componentWillUnmount() {
    //     this.unsubscribe()
    // }
    // next = () => {
    //     getImageById(this.props.imageId)
    //     // console.log(this.state.albumId)
    // }
    // previous = () => {
    //     getImageById(this.props.imageId)
    //     // console.log(this.state)
    // }

    render() {
        return (
            <div className="foto-container">
                <div className="photo-nav-bar">
                    <Link onClick={this.previous} to={'/photo/' + this.props.imageId}>Previous</Link> 
                    <Link to={'/album/' + this.props.albumId}>Go back</Link> 
                    <Link onClick={this.next} to={'/photo/' + this.props.imageId}>Next</Link> 
                </div>{console.log(this.props)}
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
        imageId: state.currentImage.imageId,
        albumId: state.currentImage.albumId,
        imageURL: state.currentImage.imageURL,
        imageName: state.currentImage.imageName
    }
}

export default connect(mapStateToProps)(Photo);
