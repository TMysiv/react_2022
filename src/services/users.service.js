import {baseUrl} from "../configs/urls";

const getUsers = () => {
    return fetch(`${baseUrl}/users`)
        .then(value => value.json())

}

export {
    getUsers
}