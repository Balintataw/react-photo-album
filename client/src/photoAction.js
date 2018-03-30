import store from './store'
import axios from 'axios'

// export function addAlbum() {
//     axios.post('http://localhost:3001/albums', objgoeshere).then(resp => {
//     // axios.get('http://localhost:3001/albums?_embed=images').then(resp => {
//         console.log(resp.data)
//         this.setState({
//             albumsData: resp.data
//         })
//         store.dispatch({
//             type: 'ADD_ALBUM',
//             payload: objgoeshere
//         })
//     })
// }
export function getAlbumsAndImages() {
    axios.get('http://localhost:3001/albums?_embed=images').then(resp => {
        store.dispatch({
            type: 'GET_ALBUMS_IMAGES',
            payload: resp.data
        })
    })
}

export function getAlbums() {
    axios.get('http://localhost:3001/albums').then(resp => {
        store.dispatch({
            type: 'GET_ALBUMS',
            payload: resp.data
        })  
    })  
}

export function getAlbumImagesById(id) {
    axios.get(`http://localhost:3001/albums/${id}?_embed=images`).then(resp => {
        store.dispatch({
            type: 'GET_IMAGES_BY_ALBUM_ID',
            payload: resp.data
        })
    })
}

export function getImageById(id) {
    axios.get(`http://localhost:3001/images/${id}`).then(resp => {
        store.dispatch({
            type: 'GET_IMAGE_BY_ID',
            payload: resp.data
        })
    })
}

export function getImages() {
    axios.get('http://localhost:3001/images').then(resp => {
        store.dispatch({
            type: 'GET_IMAGES',
            payload: resp.data
        })
    })
}