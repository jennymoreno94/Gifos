import datagif from '../utils/dataGif.js'
import Card from './card.js';
import Slider from './slider.js';
import Data from '../utils/getData.js'
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


getTrening();

function getTrening() {
  Data.getRadom()
    .then(response => {
      let trendingTopics = document.querySelector(".trending-content");
      for (let i = 0; i < 5; i++) {
        trendingTopics.innerHTML += `<span class="trending-topic">${response.data[i]}, </span>`
      }
      const trendingTopic = document.querySelectorAll(".trending-topic");
      trendingTopic.forEach(span => span.addEventListener("click", event => {

        if (response.data.length > 0) {
          const buttonView = document.getElementById("more-results");
          buttonView.style.visibility = 'visible'
        }
        getResultSearch(event.currentTarget.textContent)
      }))
    });
}

function getResultSearch(search) {
  let imagesSearch = document.querySelector(".images-search");
  imagesSearch.innerHTML = null
  Data.getSearch(search, "search", 12, 0)
    .then(response => {
      Card.DataCard(response.data, false)
      Card.Card(response.data, imagesSearch)
      if (response.data.length > 0) {
        const buttonView = document.getElementById("more-results");
        buttonView.style.visibility = 'visible'
      }

      let moreResults = document.getElementById('more-results')
      moreResults.addEventListener("click", function(){
        searchMoreResults(search);
      })
    });
}

let pag = 12;
function searchMoreResults(search) {
  let imagesSearch = document.querySelector(".images-search");
  Data.getSearch(search, "search", 12,pag)
    .then(response => {
      Card.DataCard(response.data, false)
      Card.Card(response.data, imagesSearch)
    });
    pag = pag + 12;
}

Slider();