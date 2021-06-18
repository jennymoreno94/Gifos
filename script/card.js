import MaxCard from "./maxCard.js";

var dataComplete;

function Card(datagif, elementId) {
    debugger;
    //let imagesSearch = document.querySelector(".images-search");
    datagif.forEach((element, index) => {
        elementId.innerHTML +=
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

function DataCard(data) {
    dataComplete = data;
}

window.addFavoriteGif = function(element) {
    debugger;
    let heart = document.getElementById(`add-${element}`)
    if (heart.className == "far fa-heart") {
        heart.className = "fas fa-heart";
    } else {
        heart.className = "far fa-heart";
    }
    addLocalStorage("favorites", dataComplete[element])
}

window.downLoadGif = async function(element) {
    debugger;
    let blob = await fetch(dataComplete[element].images.downsized.url).then(img => img.blob());
    invokeSaveAsDialog(blob, dataComplete[element].slug + ".gif");
}

window.maxgif = async function(element) {
    let data = dataComplete[element]
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
    DataCard
}