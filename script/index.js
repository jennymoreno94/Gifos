/*HEADER*/
import datagif from '../mocks/dataGif.js'
import Card from './card.js';
import Slider from './slider.js';

/*const theme = document.querySelector('#mode')
let mode = document.getElementById("mode");
theme.addEventListener("click", () => {
  const dark = document.documentElement.getAttribute('data-theme')
  if (dark === null) {
    mode.innerText = "Modo Diurno"
    document.documentElement.setAttribute('data-theme', 'dark')
    localStorage.setItem('data-theme', 'dark')
  } else {
    mode.innerText = "Modo Nocturno"
    document.documentElement.removeAttribute('data-theme')
    localStorage.removeItem('data-theme')
  }

})

function Menu() {
  var element = document.querySelector("#header");
  element.classList.toggle("visible_menu");
}

window.Menu = Menu;*/
/*HEADER*/

/*BUSQUEDA*/
const data = [{
  name: "joy",
  analytics_response_payload: "e=ZXZlbnRfdHlwZT1UQUdfU0VBUkNIJmNpZD1mNjYzY2VhNTRk…WU3ZTdmMWU1M2E2MzM2YjkzZTRjZTgmbmFtZT1qb3kmcT1qbw"
},
{
  name: "joy joy",
  analytics_response_payload: "e=ZXZlbnRfdHlwZT1UQUdfU0VBUkNIJmNpZD1mNjYzY2VhNTRk…dmMWU1M2E2MzM2YjkzZTRjZTgmbmFtZT1qb3kram95JnE9am8"
},
{
  name: "joy joy joy",
  analytics_response_payload: "e=ZXZlbnRfdHlwZT1UQUdfU0VBUkNIJmNpZD1mNjYzY2VhNTRk…1M2E2MzM2YjkzZTRjZTgmbmFtZT1qb3kram95K2pveSZxPWpv"
},
{
  name: "joyeux",
  analytics_response_payload: "e=ZXZlbnRfdHlwZT1UQUdfU0VBUkNIJmNpZD1mNjYzY2VhNTRk…TdmMWU1M2E2MzM2YjkzZTRjZTgmbmFtZT1qb3lldXgmcT1qbw"
},
{
  name: "joker",
  analytics_response_payload: "e=ZXZlbnRfdHlwZT1UQUdfU0VBUkNIJmNpZD1mNjYzY2VhNTRk…3ZTdmMWU1M2E2MzM2YjkzZTRjZTgmbmFtZT1qb2tlciZxPWpv"
}
]

let search = document.getElementById("search");
search.addEventListener("input", (e) => {
  const suggestionsList = document.getElementById(`suggestions-list`);
  if (e.target.value) {
    let FilterData = [];
    if (data.length > 0) {
      FilterData = data.filter((da) => da.name.includes(e.target.value));
      const searchAutocomplete =
        `<ul class="list">
            ${FilterData.map(item => `
              <li class="option-list"><i class="fa fa-search"></i>${item.name}</li>
            `).join('')}
        </ul>`;

      if (FilterData.length !== 0) {
        suggestionsList.innerHTML = searchAutocomplete
        search.style.borderBottomRightRadius = '0em'
        search.style.borderBottomLeftRadius = '0em'
      } else {
        suggestionsList.innerHTML = ''
        search.style.borderBottomRightRadius = '2em'
        search.style.borderBottomLeftRadius = '2em'
      }
    }
  } else {
    search.style.borderBottomRightRadius = '2em'
    search.style.borderBottomLeftRadius = '2em'
    suggestionsList.innerHTML = ''
  }

  const optionList = document.querySelectorAll(".option-list");
  optionList.forEach(li => li.addEventListener("click", event => {
    suggestionsList.innerHTML = ''
    search.style.borderBottomRightRadius = '2em'
    search.style.borderBottomLeftRadius = '2em'
    search.value = event.currentTarget.textContent
  }))

})

const navSearch = document.getElementById('nav-search');
const shadow = document.getElementById('header');
document.addEventListener("scroll", () => {
  let scroll = window.scrollY
  if (scroll > 20) {
    navSearch.style.visibility = "visible"
    shadow.classList.add('shadow');
  }
  else {
    navSearch.style.visibility = "hidden"
    shadow.classList.remove('shadow');
  }

})

navSearch.addEventListener("keyup", function (e) {
  if (e.key === 'Enter') {
    alert(e.key)
  }

})
/*BUSQUEDAs*/

/*TRENDING*/
getTrening();

function getTrening() {
  const dataTrending = ["big head", "share", "washington wizards", "hide", "whats up"];
  let trendingTopics = document.querySelector(".trending-content");
  dataTrending.forEach((element) => {
    trendingTopics.innerHTML += `<span class="trending-topic">${element}, </span>`
  })
  const trendingTopic = document.querySelectorAll(".trending-topic");
  trendingTopic.forEach(span => span.addEventListener("click", event => {
    alert(event.currentTarget.textContent)
  }))
}
/*TRENDING*/

/*CARD TRENDING*/

getResultSearch(datagif);

function getResultSearch(datagif) {
  let imagesSearch = document.querySelector(".images-search");
  /*datagif.forEach((element, index) => {
    imagesSearch.innerHTML +=
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

  datagif.forEach((element, index) => {
    imagesSearch.innerHTML += Card(element) 
  });

}


/*window.addFavoriteGif = function (index) {
  let heart = document.getElementById(`add-${index}`)
  if (heart.className == "far fa-heart") {
    heart.className = "fas fa-heart";
  } else {
    heart.className = "far fa-heart";
  }
  addLocalStorage("favorites", datagif[index])
}*/

/*window.addFavoriteModalGif = function (index) {
  let heartmodal = document.getElementById(`add-modal-${index}`)
  if (heartmodal.className == "far fa-heart") {
    heartmodal.className = "fas fa-heart";
  } else {
    heartmodal.className = "far fa-heart";
  }
  addLocalStorage("favorites", datagif[index])
}*/


/*window.downLoadGif = async function (index) {
  let blob = await fetch(datagif[index].images.downsized.url).then(img => img.blob());
  invokeSaveAsDialog(blob, datagif[index].slug + ".gif");
}*/

/*window.maxgif = async function (index) {
  addMaxGif(datagif[index], index)
}*/


/*window.closegif = async function (index) {
  let max = document.getElementById(`gif-${index}`)
  max.remove("active")
}*/

/*function addMaxGif(gif, index) {
  let modalDesktop = document.createElement("div");
  modalDesktop.id = `gif-${index}`
  modalDesktop.className = "modal-container active"

  modalDesktop.innerHTML +=
    `<button class="modal-btn-close option-button close-icon " onclick="closegif(${index})"></button>
      <img src=${gif.images.fixed_height_downsampled.url}></img>
      <div class="group-modal">
        <div class="group-text-modal">
            <h4 class="user-name">${gif.username}</h4>
            <h4>${gif.title}</h4>
        </div>
        <div class="group-icons-modal">
          <button onClick="addFavoriteModalGif(${index})" class="option-button"><i id="add-modal-${index}" class="far fa-heart"></i></button>
          <button onClick="downLoadGif(${index})" class="option-button download-icon"></button>
        </div>
        
      </div>
      `
  document.body.appendChild(modalDesktop);
}*/


/*function addLocalStorage(name, gif) {
  let data = localStorage.getItem(name);
  data = data ? JSON.parse(data) : [];
  data.push(gif)
  localStorage.setItem(name, JSON.stringify(data));
}*/


let moreResults = document.getElementById('more-results')
moreResults.addEventListener('click', searchMoreResults)

let pag = 12;
function searchMoreResults() {
  console.log(pag)
  let searchResults = datagif;
  pag = pag + 12;
  getResultSearch(searchResults)
}


/*function carrusel() {
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
    })
}


window.toggleLeft = function () {
  let carrousel =  document.getElementById("slider_container");
  carrousel.scrollBy(-300, 0);
  
}

window.toggleRight = function () {
  let carrousel =  document.getElementById("slider_container");
  carrousel.scrollBy(300, 0);
}*/


Slider();

//carrusel();
