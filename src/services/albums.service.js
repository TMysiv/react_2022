const getAlbumsById = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
        .then(value => value.json())

}
export default getAlbumsById