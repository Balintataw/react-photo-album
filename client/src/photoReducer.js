const initialState = {
    albums: [],
    images: [],
    currentImage: [],
    albumsAndImages: [],
    imagesByAlbumId: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'GET_ALBUMS':
            return {albums: action.payload}
        case 'GET_IMAGES':
            return {images: action.payload}
        case 'GET_ALBUMS_IMAGES':
            return {albumsAndImages: action.payload}
        case 'GET_IMAGES_BY_ALBUM_ID':
            return {imagesByAlbumId: action.payload}
        case 'GET_IMAGE_BY_ID':
            return {currentImage: action.payload}
        case 'ADD_ALBUM':
            return {photos: [...state.albums, action.payload]}
        default:
            return state
    }
}