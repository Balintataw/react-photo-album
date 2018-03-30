const initialState = {
    albums: [],
    images: [],
    currentImage: {
        image: '',
        imageId: '',
        albumId: '',
        imageURL: '',
        imageName: ''
    },
    albumsAndImages: [],
    imagesByAlbumId: {
        albumName:'',
        images:[]
    }
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALBUMS':
            return {...state, albums: action.payload}
        case 'GET_IMAGES':
            return {...state, images: action.payload}
        case 'GET_ALBUMS_IMAGES':
            return {...state, albumsAndImages: action.payload}
        case 'GET_IMAGES_BY_ALBUM_ID':
            return {...state, imagesByAlbumId: action.payload}
        case 'GET_IMAGE_BY_ID':
            return {...state, currentImage: action.payload}
        case 'ADD_ALBUM':
            return {photos: [...state.albums, action.payload]}
        default:
            return state
    }
}