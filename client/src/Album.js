import React, { Component } from 'react';
import axios from 'axios';

export class Album extends Component {
    state = {
        images: [],
        albumName: ''
    }

    componentDidMount(props) {
        const id = this.props.match.params.id
        axios.get(`http://localhost:3001/albums/${id}?_embed=images`).then(resp => {
            console.log(resp.data)
            this.setState({
                images: resp.data.images,
                albumName: resp.data.albumName
            })
        })
    }

    render() {
        return (
            <div className="album-container">
                <header className="header">
                    <h3>{this.state.albumName}</h3>
                </header>
                <div className="album-images">
                    {this.state.images.map((image, i) => {
                        return  <div className="images-container" key={"image" + i}>
                                    <img src={image.imageURL}  alt=""/>
                                    <h3 className="image-name">{image.imageName}</h3>
                                </div>
                    })}
                </div>
            </div>
        )
    }
};

export default Album;
