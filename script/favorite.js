import Slider from './slider.js'
import Card from './card.js'
Slider();

const favorites = JSON.parse(localStorage.getItem("favorites"))
let containerResult = document.getElementById("container-results");
if (favorites == null) {
    debugger;
    let favoriteEmpty = document.getElementById("favorite-empty");
    favoriteEmpty.style.visibility = 'visible'
    containerResult.style.visibility = 'hidden'
} else {
    let imagesSearch = document.querySelector(".images-search");
    Card.DataCard(favorites)
    Card.Card(favorites, imagesSearch)
}