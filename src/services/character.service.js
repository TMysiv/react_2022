const apiServise = {
    getCharacter: (value) => fetch(`${value}`)
        .then(value => value.json()),

}
export default apiServise