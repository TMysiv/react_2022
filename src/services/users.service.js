import {urls} from "../confings/urls";

const getUsers = () =>{
    return fetch(urls.users)
            .then(value => value.json())

}

const getUserById = (id) =>{
    return fetch(`${urls.users}/${id}`)
            .then(value => value.json())

}
export {
    getUsers,
    getUserById
}
