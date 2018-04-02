import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {getImageById, getAdjacent} from './photoAction'
import {connect} from 'react-redux'
import axios from 'axios'
import './css/Photo.css'

export class Photo extends Component {
  
    static defaultProps = {

    }

    componentDidMount() {
        const id = this.props.match.params.id
        getAdjacent(id)
        
    }
    componentWillReceiveProps(newprops) {
        if (this.props.match.params.id !== newprops.match.params.id) {
            const id = newprops.match.params.id
            getAdjacent(id)
        }

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
                    {/* <Link to={'/photo/' + this.props.curr.id}>Previous</Link>  */}
                    <Link to={'/album/' + this.props.curr.albumId}>Go back</Link> 
                    {/* <Link to={'/photo/' + this.props.curr.id}>Next</Link>  */}
                </div>
                <div className="img-and-caption">
                    <Link to={'/photo/' + this.props.prev.id}><img src={this.props.prev.imageURL} value={this.props.prev.imageId} className="single-foto-img" id="left" alt=""/></Link>
                    <img src={this.props.curr.imageURL} value={this.props.curr.imageId} className="single-foto-img" id="center" alt=""/>
                    <Link to={'/photo/' + this.props.next.id}><img src={this.props.next.imageURL} value={this.props.next.imageId} className="single-foto-img" id="right" alt=""/></Link>
                </div>
                    <p id="image-caption">{this.props.curr.imageName}</p>
                    <button onClick={this.handleClick} className="delete-image-button">Delete image</button>
            </div>
        )
    }
};

function mapStateToProps(state) {
    console.log(state.adjacent.curr)
    return {
        // image: state.currentImage.image,
        // imageId: state.currentImage.id,
        // albumId: state.adjacent.albumId,
        // imageURL: state.currentImage.imageURL,
        // imageURL: state.adjacent.curr.imageURL,
        // imageName: state.currentImage.imageName,
        next: state.adjacent.next,
        curr: state.adjacent.curr,
        prev: state.adjacent.prev
    }
}

export default connect(mapStateToProps)(Photo);
