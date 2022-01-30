import axios from "axios";

import baseURL, {urls} from "../configs/user.urls";

const axiosService = axios.create({
    baseURL
});

const postsService= {
    getAll:()=>axiosService.get(urls.posts).then(value => value.data)
}
export default postsService