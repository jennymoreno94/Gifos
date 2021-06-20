import Slider from './slider.js'
import Card from './card.js'
Slider();

const myGifos = JSON.parse(localStorage.getItem("favorites"))
let containerResult = document.getElementById("container-results");
let gifosEmpty = document.getElementById("gifos-empty");
if (myGifos == null) {
    gifosEmpty.style.visibility = 'visible'
    containerResult.style.visibility = 'hidden'
} else {
    let gifosData = myGifos.slice(0, 12)
    getFavoritesGif(gifosData)
}


let moreResults = document.getElementById('more-results')
moreResults.addEventListener('click', searchMoreResults)

let pag = 24;
let pagCurrent = 12

function searchMoreResults() {
    let paginatedItems = myGifos.slice(pagCurrent, pag)
    getFavoritesGif(paginatedItems);
    pagCurrent = pag
    pag = pag + 12;
}

function getFavoritesGif(gifosData) {
    let imagesSearch = document.querySelector(".images-search");
    Card.DataCard(gifosData)
    Card.Card(gifosData, imagesSearch)
    gifosEmpty.style.display = 'none';
}