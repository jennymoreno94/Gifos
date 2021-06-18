
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
  
      datagif.forEach((element, index) => {
        sliderContainer.innerHTML += Card(element) 
      });

      /*datagif.forEach((element, index) => {
        sliderContainer.innerHTML +=
          ` <div class="image-content">
              <img src=${element.images.fixed_height_downsampled.url}></img>
                <div class="card">
                  <div class="group-icons">
                    <button onClick="addFavoriteGif(${index})" class="option-button"><i id="add-${index}" class="far fa-heart"></i>
                    </button>
                    <button onClick="downLoadGif(${index})" class="option-button download-icon"></button>
                    <button onClick="maxgif(${index})" class="option-button max-icon"></button>
                    </div>
              <div class="group-text">
              <h4 class="user-name">${element.username}</h4>
              <h4>${element.title}</h4>
              </div>
            </div> 
          `
      })*/
  }
  
  
  window.toggleLeft = function () {
    let carrousel =  document.getElementById("slider_container");
    carrousel.scrollBy(-300, 0);
    
  }
  
  window.toggleRight = function () {
    let carrousel =  document.getElementById("slider_container");
    carrousel.scrollBy(300, 0);
  }


export default Slider 