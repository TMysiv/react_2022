function ApiService(endpoint) {
    this.getAll = () => fetch(`https://jsonplaceholder.typicode.com/${endpoint}`)
        .then(value => value.json())
    this.getById = (id) => fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${id}`)
        .then(value => value.json())

}

export default ApiService