import React, { Component } from 'react';
import axios from 'axios';


export class Albums extends Component {
    state = {
        albumsData: []
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
                        {console.log(this.state.albumsData)}
                        return  <div className="album" key={"A" + i}>
                                    <img src={album.albumImage} alt=""/>
                                    <h3 className="album-name">{album.albumName}</h3>
                                </div>

                    })}
                </div>
            </div>
        )
    }
};

export default Albums;
