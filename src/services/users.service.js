import axios from "axios";

import baseURL, {urls} from "../configs/user.urls";

const axiosService = axios.create({
    baseURL
});

const usersService= {
    getAll:()=>axiosService.get(urls.users).then(value => value.data)
}
export default usersService