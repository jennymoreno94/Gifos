import Slider from './slider.js'
import Card from './card.js'
Slider();

const favorites = JSON.parse(localStorage.getItem("favorites"))
let containerResult = document.getElementById("container-results");
let favoriteEmpty = document.getElementById("favorite-empty");
if (favorites == null) {
    debugger;
    favoriteEmpty.style.visibility = 'visible'
    containerResult.style.visibility = 'hidden'
} else {
    let favoritesData = favorites.slice(0, 12)
    getFavoritesGif(favoritesData)
}


let moreResults = document.getElementById('more-results')
moreResults.addEventListener('click', searchMoreResults)

let pag = 24;
let pagCurrent = 12

function searchMoreResults() {
    let paginatedItems = favorites.slice(pagCurrent, pag)
    getFavoritesGif(paginatedItems);
    pagCurrent = pag
    pag = pag + 12;
}

function getFavoritesGif(favoritesData) {
    let imagesSearch = document.querySelector(".images-search");
    Card.DataCard(favorites)
    Card.Card(favoritesData, imagesSearch)
    favoriteEmpty.style.display = 'none';
}