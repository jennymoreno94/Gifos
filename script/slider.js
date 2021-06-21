import Card from './card.js';
import Data from '../utils/getData.js'

function Slider(nameLocal,data) {
    let carruselContainer = document.getElementById("carrusel-container")
    carruselContainer.innerHTML += `
        <h2 class="trending-title">Trending GIFOS</h2>
        <p class="trending-description">Mira los últimos </p>
        <p class="trending-description">GIFOS de nuestra comunidad</p>
        <div class="carrousel">
            <button onClick="toggleLeft()"  class="carrousel-button"><i class="fa fa-chevron-left"></i></button>
            <div id="slider_container" class="slider-container">
            </div>
            <button onClick="toggleRight()" class="carrousel-button"><i class="fa fa-chevron-right"></i></button>
        </div>
      `;

    let sliderContainer = document.getElementById("slider_container")
    Data.getTrending('trending',12)
    .then(response => {
        Card.DataCard(data,response.data,false,nameLocal)
        Card.CardSlider(response.data,sliderContainer)
    });
}


window.toggleLeft = function() {
    let carrousel = document.getElementById("slider_container");
    carrousel.scrollBy(-300, 0);

}

window.toggleRight = function() {
    let carrousel = document.getElementById("slider_container");
    carrousel.scrollBy(300, 0);
}


export default Slider