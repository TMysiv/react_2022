import {urls} from "../confings/urls";

const getPosts = () => {
    return fetch(urls.posts)
            .then(value => value.json())

}

export {
    getPosts
}