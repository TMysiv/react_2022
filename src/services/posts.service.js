import {baseUrl} from "../configs/urls";

const getPostsById = (id) => {
    return fetch(`${baseUrl}/users/${id}/posts`)
        .then(value => value.json())

}


export {
    getPostsById
}