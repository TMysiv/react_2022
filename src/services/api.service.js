const baseUrl = 'https://loremflickr.com/320/240';

const newPhoto = {
    getCat: ()=> fetch(`${baseUrl}/cat`),
    getMountain: ()=> fetch(`${baseUrl}/mountain`),
    getDog: ()=> fetch(`${baseUrl}/dog`),
    getGirl: ()=> fetch(`${baseUrl}/girl`),
    getCity: ()=> fetch(`${baseUrl}/city`),
}
export default newPhoto