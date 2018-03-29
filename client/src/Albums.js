import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


export class Albums extends Component {
    state = {
        albumsData: [],
        albumId: ''
    }
    componentDidMount() {
        axios.get('http://localhost:3001/albums').then(resp => {
            this.setState({
                albumsData: resp.data
            })
        })
    }

    render() {
        return (
            <div className="albums-container">
                <div className="header">
                    <h1>My Photo Albums</h1>
                </div>
                <div className="albums">
                    {this.state.albumsData.map((album, i) => {
                        return  <Link to={"/Album/" + album.id} key={"A" + i}>
                                <div className="album">
                                    <img src={album.albumImage}  alt=""/>
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
