import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {getAlbums} from './photoAction'
import {connect} from 'react-redux'
import './css/Sidebar.css'

export class Sidebar extends Component {
    componentDidMount() {
        getAlbums()
    } 

    render() {
        return (
            <div className="sidebar-container">
                <div className="sidebar">
                    <div className="pbuttons-wrapper">
                        <Link to={"/"} className="permanent-buttons">Home</Link>
                        <Link to={"/addimage"} className="permanent-buttons">Add an Image</Link>
                    </div>
                    <div className="buttons-wrapper">
                        {this.props.albums.map((album, i) => {
                            return <Link to={"/album/" + album.id} key={"alp" + i}>{album.albumName}</Link>
                            
                        })}
                    </div>
                    <div className="add-button-container">
                        <Link to={"/addalbum"} className="add-album">Add Album</Link>
                    </div>
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    // console.log(state)
    return {
        albums: state.albums
    }
}

export default connect(mapStateToProps)(Sidebar);
