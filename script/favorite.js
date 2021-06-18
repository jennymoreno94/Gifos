import Slider from './slider.js'
import Card from './card.js'
Slider();
debugger;
const favorites = JSON.parse(localStorage.getItem("favorites"))
let containerResult = document.getElementById("container-results");
if (favorites == null) {
    let favoriteEmpty = document.getElementById("favorite-empty");
    favoriteEmpty.style.visibility = 'visible'
    containerResult.style.visibility = 'hidden'
} else {
    let imagesSearch = document.querySelector(".images-search");
    favorites.forEach((element, index) => {
        imagesSearch.innerHTML += Card(element)
    });
}