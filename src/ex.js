import axios from "axios";

const baseUrl = 'https://api.themoviedb.org/3'
const axiosService = axios.create({
    baseURL: baseUrl,
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2NjYWIzN2U2ZTNlNzI3MDhiNjdjZWE2YjE3YWZiNSIsInN1YiI6IjYxZmZmMzhkNDdjOWZiMDBlMjY0NTJjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BdfYuP8I3Pn8_CtNYHPLD9h2Rjg6wWpoUDupozB48DE'
    }
});

const urls={
    discover:'/discover/movie'
}

export const getDiscover ={
    getAll:() => axiosService.get(urls.discover)
}

