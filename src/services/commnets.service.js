const getCommentsById = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(value => value.json())

}
export default getCommentsById