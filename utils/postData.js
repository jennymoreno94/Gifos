var apikey = "qa23tQVbFwzG28TqAZM9noHBeG8jV8DK&";

const postGif = (file) => {
    const url = `https://upload.giphy.com/v1/gifs?api_key=${apikey}`;
    return new Promise((resolve,reject)=> {
        fetch(url,{
            method : "POST",
            body: file
        })
        .then(response => {
            debugger;
            resolve(response.json())
            })
        .catch(error => {
            console.log(`Error petición ${url}:` + error.message);
            reject(error)
        })
    })
}

export default {
    postGif
}