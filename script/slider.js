import datagif from '../mocks/dataGif.js'
import Card from './card.js';

function Slider() {
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
    Card.DataCard(datagif)
    Card.Card(datagif, sliderContainer)
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