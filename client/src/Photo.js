import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {getAdjacent} from './photoAction'
import axios from 'axios'
import './css/Photo.css'

export class Photo extends Component {
  
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
        const id = this.props.curr.id
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
                    {this.props.prev ? <Link to={'/photo/' + this.props.prev.id}>Previous</Link> : 'X'}
                    <Link to={'/album/' + this.props.curr.albumId}>Go back</Link> 
                    {this.props.next ? <Link to={'/photo/' + this.props.next.id}>Next</Link> : 'X'}
                </div>
                <div className="img-and-caption">
                    {this.props.prev ? <Link to={'/photo/' + this.props.prev.id}><img src={this.props.prev.imageURL} value={this.props.prev.imageId} className="single-foto-img" id="left" alt=""/></Link> : 'X'}
                    <img src={this.props.curr.imageURL} value={this.props.curr.imageId} className="single-foto-img" id="center" alt=""/>
                    {this.props.next ? <Link to={'/photo/' + this.props.next.id}><img src={this.props.next.imageURL} value={this.props.next.imageId} className="single-foto-img" id="right" alt=""/></Link> : 'X'}
                </div>
                    <p id="image-caption">{this.props.curr.imageName}</p>
                    <button onClick={this.handleClick} className="delete-image-button">Delete image</button>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        next: state.adjacent.next,
        curr: state.adjacent.curr,
        prev: state.adjacent.prev
    }
}

export default connect(mapStateToProps)(Photo);
