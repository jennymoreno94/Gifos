var apikey = "qa23tQVbFwzG28TqAZM9noHBeG8jV8DK&";
var api = "https://api.giphy.com/v1/gifs"


const getSearch = (searchValue, endPoint, limit, pag) => {
    const url = `${api}/${endPoint}?api_key=${apikey}&q=${searchValue}&limit=${limit}&offset=${pag}&rating=g&lang=en`
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => resolve(response.json()))
            .catch(error => {
                console.log(`Error petición ${url.getUser}:` + error.message);
                reject(error)
            })
    })
}

const getRadom = () => {
    let url = `https://api.giphy.com/v1/trending/searches?api_key=${apikey}`;
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => resolve(response.json()))
            .catch(error => {
                console.log(`Error petición ${url.getUser}:` + error.message);
                reject(error)
            })
    })
}

const getAutocomplete = (tag) => {
    let url = `${api}/search/tags?api_key=${apikey}&q=${tag}`;
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => resolve(response.json()))
            .catch(error => {
                console.log(`Error petición ${url.getUser}:` + error.message);
                reject(error)
            })
    })
}

export default {
    getSearch,
    getRadom,
    getAutocomplete
}