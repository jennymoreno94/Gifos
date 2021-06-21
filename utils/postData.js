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

/*const postGif = async (file) => {
    const url = `https://upload.giphy.com/v1/gifs?api_key=${apikey}`;
    try {
        const OtherParam = {
            method: "POST",
            body: file
        }
        const response = await fetch(url,OtherParam);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Fetch Error',error);
    };
};*/

/*const postGif = (form) => {
    fetch(`https://upload.giphy.com/v1/gifs`, {
        method: 'POST',
        body: form,
    })
    .then(response => {
        return response.json();
    })
    .then(objeto => {
        return objeto.json();
    })
    .catch(error => console.log("error al subir gif a GIPHY" + error))

}*/
export default {
    postGif
}