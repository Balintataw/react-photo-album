import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import store from './store'
import { getAlbumImagesById } from './photoAction';

export class Album extends Component {
    state = {
        images: [],
        albumName: ''
    }

    componentDidMount(props) {
        const id = this.props.match.params.id

        getAlbumImagesById(id)
        this.unsubscribe = store.subscribe(() => {
            const state = store.getState()
            this.setState({
                images: state.imagesByAlbumId.images,
                albumName: state.imagesByAlbumId.albumName
            })
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
    }
    componentWillReceiveProps(newprops) {
        const id = newprops.match.params.id
        axios.get(`http://localhost:3001/albums/${id}?_embed=images`).then(resp => {
            this.setState({
                images: resp.data.images,
                albumName: resp.data.albumName
            })
        })
    }

    render() {
        return (
            <div className="album-container">
                <div className="sidebar">
                    <Link to={"/"}>Go Back</Link>
                    <Link to={"/album/1"}>Album 1</Link>
                    <Link to={"/album/2"}>Album 2</Link>
                    <Link to={"/album/3"}>Album 3</Link>
                    <Link to={"/album/4"}>Album 4</Link>
                    <Link to={"/album/5"}>Album 5</Link>
                    <Link to={"/album/6"}>Album 6</Link>
                </div>
                <div className="album-container-right">
                    <header className="header">
                        <h3>{this.state.albumName}</h3>
                    </header>
                    <div className="album-images">
                        {this.state.images.map((image, i) => {
                            return  <Link to={"/photo/" + image.id} key={"image" + i}><div className="images-container">
                                        <img src={image.imageURL}  alt=""/>
                                        <h3 className="image-name">{image.imageName}</h3>
                                    </div></Link>
                        })}
                    </div>
                </div>
            </div>
        )
    }
};

export default Album;
