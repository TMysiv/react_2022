const getPhotosById = (albumId) => {
    return fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
        .then(value => value.json())
}
export default getPhotosById