import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {getAlbums} from './photoAction'
import {connect} from 'react-redux'

export class Sidebar extends Component {
    componentDidMount() {
        getAlbums()
    } 

    render() {
        return (
            <div>
                <div className="sidebar">
                <Link to={"/"}>Go Back</Link>
                <Link to={"/addimage"}>Add an Image</Link>
                    {this.props.albums.map((album, i) => {
                        return <Link to={"/album/" + album.id} key={"alp" + i}>{album.albumName}</Link>
                        
                    })}
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        albums: state.albums
    }
}

export default connect(mapStateToProps)(Sidebar);
