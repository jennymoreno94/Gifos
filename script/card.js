import MaxCard from "./maxCard.js";

var dataComplete;
var dataSliderComplete;
var isGif;
var nameLocal;

function Card(datagif, elementId) {
    datagif.forEach((element, index) => {
                if (element != null) {
                    elementId.innerHTML +=
                        ` <div class="image-content">
                            <img src=${element.images.fixed_height_downsampled.url}></img>
                            <div class="card">
                                <div class="group-icons">
                                ${!isGif ? `<button onClick="addFavoriteGif(${index})" class="option-button"><i id="add-${index}" class="far fa-heart"></i>` :
                                    `<button onClick="removeFavoriteGif(${index})" class="option-button"><i id="add-${index}" class="far fa-trash-alt"></i>`}
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
        }

    })
}


function CardSlider(datagif, elementId) {
    datagif.forEach((element, index) => {
        if (element != null) {
            elementId.innerHTML +=
                ` <div class="image-content">
            <img src=${element.images.fixed_height_downsampled.url}></img>
              <div class="card">
                <div class="group-icons">
                  <button onClick="addSliderFavoriteGif(${index})" class="option-button"><i id="add-slider-${index}" class="far fa-heart"></i>
                  </button>
                  <button onClick="downLoadGif(${index})" class="option-button download-icon"></button>
                  <button onClick="maxgifSlider(${index})" class="option-button max-icon"></button>
                  </div>
            <div class="group-text">
            <h4 class="user-name">${element.username}</h4>
            <h4>${element.title}</h4>
            </div>
          </div> 
        `
        }

    })
}

function DataCard(data,dataSlider,gif, name) {
    dataComplete = data;
    isGif = gif;
    nameLocal = name;
    dataSliderComplete = dataSlider;
}

window.addFavoriteGif = function (element) {
    let heart = document.getElementById(`add-${element}`)
    if (heart.className == "far fa-heart") {
        heart.className = "fas fa-heart";
    } else {
        heart.className = "far fa-heart";
    }
    addLocalStorage("favorites", dataComplete[element])
}


window.addSliderFavoriteGif = function (element) {
    let heart = document.getElementById(`add-slider-${element}`)
    if (heart.className == "far fa-heart") {
        heart.className = "fas fa-heart";
    } else {
        heart.className = "far fa-heart";
    }
    addLocalStorage("favorites", dataSliderComplete[element])
}


window.removeFavoriteGif = function (element) {
    let data = JSON.parse(localStorage.getItem(nameLocal))
    data.splice(element, 1);
    localStorage.setItem(nameLocal, JSON.stringify(data))
    location.reload();
}

window.downLoadGif = async function (element) {
    let blob = await fetch(dataComplete[element].images.downsized.url).then(img => img.blob());
    invokeSaveAsDialog(blob, dataComplete[element].slug + ".gif");
}

window.maxgif = async function (element) {
    let data = dataComplete[element]
    MaxCard(data);
}

window.maxgifSlider = async function (element) {
    let data = dataSliderComplete[element]
    MaxCard(data);
}

function addLocalStorage(name, gif) {
    let data = localStorage.getItem(name);
    data = data ? JSON.parse(data) : [];
    data.push(gif)
    localStorage.setItem(name, JSON.stringify(data));
}


export default {
    Card,
    CardSlider,
    DataCard
}