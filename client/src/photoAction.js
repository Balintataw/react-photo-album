import store from './store'
import axios from 'axios'

export function getAlbumsAndImages() {
    axios.get('http://localhost:3001/albums?_embed=images').then(resp => {
        store.dispatch({
            type: 'GET_ALBUMS_IMAGES',
            payload: resp.data
        })
    }).catch(e => {
        console.log('Error', e)
    })
}

export function sortAlbums() {
    axios.get('http://localhost:3001/albums?_embed=images&_sort=albumName').then(resp => {
        store.dispatch({
            type: 'SORT_ALBUMS',
            payload: resp.data
        })
    })
}

//localhost:3001/images/id?_expand=albums
//localhost:3001/albums/id?_embed=images
//localhost:3001/images/3/?_expand=album&albumId=1&_page=1&
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
    axios.get(`http://localhost:3001/images/${id}?_expand=album`).then(resp => {
        store.dispatch({
            type: 'GET_IMAGE_BY_ID',
            payload: resp.data
        })
    })
}

// export function getAdjacent(id) {
//     let p = Number(id)-2
//     const n = Number(id)+1
//     // if (p < 0) {return p = p+2}
//         axios.get(`http://localhost:3001/images/?_start=${p}&_end=${n}`).then(resp => {
//             console.log(resp.data)

//             store.dispatch({
//                 type: 'GET_ADJACENT',
//                 // payload: resp.data
//                 payload: {
//                     prev: resp.data[0],
//                     curr: resp.data[1],
//                     next: resp.data[2]
//                 }
//             })
//             // console.log(resp.data)
//         })
    
// }

export function getAdjacent(id) {
    axios.get(`http://localhost:3001/images/${id}?_expand=album`).then(resp => {
        const image = resp.data

        axios.get(`http://localhost:3001/albums/${image.albumId}?_embed=images`).then(resp2 => {
            const images = resp2.data.images

            const rep = {
                prev: images.find((im, i, arr) => {
                    if(arr[i + 1] && arr[i + 1].id === image.id) {
                        return true
                    } else {
                        return false
                    }
                }) || images[images.length - 1],
                curr: image,
                next: images.find((im, i, arr) => {
                    if (arr[i - 1] && arr[i - 1].id === image.id){
                        return true
                    } else {
                        return false
                    }
                }) || images[0]
            }

            store.dispatch({
                type: 'GET_ADJACENT',
                payload: rep
            })
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
