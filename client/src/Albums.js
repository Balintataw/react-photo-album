import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {getAlbumsAndImages} from './photoAction'
import {connect} from 'react-redux'
import './css/Albums.css'


export class Albums extends Component {
    componentDidMount() {
        getAlbumsAndImages()
    }

    render() {
        return (
            <div className="albums-container">
                <div className="albums-header">
                    <h1>My Photo Albums</h1>
                </div>
                <div className="albums">
                    {this.props.albumsData.map((album, i) => {
                        return  <Link to={"/album/" + album.id} key={"A" + i}>
                                <div className="album">
                                    <img src={album.images[0].imageURL}  alt=""/>
                                    <h3 className="album-name">{album.albumName}</h3>
                                </div>
                                </Link>
                    })}
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    console.log(state)
    return {
        albumsData: state.albumsAndImages
    }
}

export default connect(mapStateToProps)(Albums);
