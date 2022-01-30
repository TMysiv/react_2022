import axios from "axios";

import baseURL, {urls} from "../configs/user.urls";

const axiosService = axios.create({
    baseURL
});

const commentsService= {
    getAll:()=>axiosService.get(urls.comments).then(value => value.data)
}
export default commentsService