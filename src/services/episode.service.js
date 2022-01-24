const baseURL = "https://rickandmortyapi.com/api/episode?page="

const apiServise = {
    getEpisodes: (page) => fetch(`${baseURL}${page}`)
        .then(value => value.json()),

}

export default apiServise