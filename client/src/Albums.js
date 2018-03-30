import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {getAlbumsAndImages} from './photoAction';
import store from './store';


export class Albums extends Component {
    state = {
        albumsData: [],
        albumId: '',
        images: []
    }
    componentDidMount() {
        getAlbumsAndImages()
        this.unsubscribe = store.subscribe(() => {
            const state = store.getState()
            this.setState({
                albumsData: state.albumsAndImages,
            })
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        return (
            <div className="albums-container">
                <div className="header">
                    <h1>My Photo Albums</h1>
                </div>
                <div className="albums">
                    {this.state.albumsData.map((album, i) => {
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

export default Albums;
