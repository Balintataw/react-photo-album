import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {getAlbumsAndImages, sortAlbums} from './photoAction'
import {connect} from 'react-redux'
import './css/Albums.css'


export class Albums extends Component {
    state = {
        isSorted: false
    }
    static defaultProps = {
        albumsData: [],
        sortedAlbumsData: [],
    }
    componentDidMount() {
        console.log(this.state)
        if(this.state.isSorted === true) {
            sortAlbums()
        } else {
            getAlbumsAndImages()
        }
        
    }
    componentWillReceiveProps = (newprops) => {
        // console.log(this.props)
        // console.log(newprops)
            // sortAlbums()
    }
    handleClick = (e) => {
        // e.preventDefault()
        console.log('clicked')
        this.setState({
            isSorted: !this.state.isSorted
        })
        console.log(this.state)
        // window.location.reload()
        sortAlbums()
    }
    render() {
        return (
            <div className="albums-container">
                <div className="albums-header">
                    <h1>My Photo Albums</h1>
                </div>
                <Link to={"/"} onClick={this.handleClick}>Sort</Link>
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
    // console.log(state)
    return {
        sortedAlbumsData: state.sortedAlbums,
        albumsData: state.albumsAndImages
    }
}

export default connect(mapStateToProps)(Albums);
