import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Sidebar from './Sidebar'
import { getAlbumImagesById } from './photoAction';

export class Album extends Component {
    // state = {
    //     images: [],
    //     albumName: ''
    // }

    
    componentDidMount(props) {
        const id = this.props.match.params.id

        getAlbumImagesById(id)
        // this.unsubscribe = store.subscribe(() => {
        //     const state = store.getState()
        //     this.setState({
        //         images: state.imagesByAlbumId.images,
        //         albumName: state.imagesByAlbumId.albumName
        //     })
        // })
    }
    // componentWillUnmount() {
    //     this.unsubscribe()
    // }
    componentWillReceiveProps(newprops) {  
        const id = newprops.match.params.id
        if( id !== this.props.match.params.id) {
            getAlbumImagesById(id)
        }
    }

    render() {
        return (
            <div className="album-container">
                <Sidebar />
                <div className="album-container-right">
                    <header className="header">
                        <h3>{this.props.albumName}</h3>
                    </header>
                    <div className="album-images">
                        {this.props.images.map((image, i) => {
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

function mapStateToProps(state) {
    return {
        images: state.imagesByAlbumId.images,
        albumName: state.imagesByAlbumId.albumName
    }
}

export default connect(mapStateToProps)(Album);
