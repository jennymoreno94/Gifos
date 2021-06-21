import Slider from './slider.js'
import Card from './card.js'

const myGifos = JSON.parse(localStorage.getItem("myGifData"))
let containerResult = document.getElementById("container-results");
let gifosEmpty = document.getElementById("gifos-empty");
if (myGifos == null || myGifos.length === 0) {
    gifosEmpty.style.visibility = 'visible'
    containerResult.style.visibility = 'hidden'
} else {
    const buttonView = document.getElementById("more-results");
    buttonView.style.visibility = 'visible'
    let gifosData = myGifos.slice(0, 12)
    getMyGifs(gifosData)
}


let moreResults = document.getElementById('more-results')
moreResults.addEventListener('click', searchMoreResults)

let pag = 24;
let pagCurrent = 12

function searchMoreResults() {
    let paginatedItems = myGifos.slice(pagCurrent, pag)
    getMyGifs(paginatedItems);
    pagCurrent = pag
    pag = pag + 12;
}

function getMyGifs(gifosData) {
    let imagesSearch = document.querySelector(".images-search");
    Card.DataCard(gifosData,null, true, 'myGifData')
    Card.Card(gifosData, imagesSearch)
    gifosEmpty.style.display = 'none';
}

Slider('myGifData',myGifos);
