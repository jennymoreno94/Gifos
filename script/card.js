import MaxCard from "./maxCard.js";

var dataComplete;

function Card(datagif) {
    let imagesSearch = document.querySelector(".images-search");
    datagif.forEach((element, index) => {
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
    })
}
/*function Card(element, index) {
    let elementComplete = JSON.stringify(element)
    const cardView = ` 
        <div class="image-content">
            <img src=${element.images.fixed_height_downsampled.url}></img>
            <div class="card">
                <div class="group-icons">
                <button id="addFavorite-${index}" class="option-button"><i id="add-${element.id}" class="far fa-heart"></i>
                </button>
                <button id="downFavorite-${index}" class="option-button download-icon"></button>
                <button id="maxFavorite-${index}"  class="option-button max-icon"></button>
                </div>
            <div class="group-text">
            <h4 class="user-name">${element.username}</h4>
            <h4>${element.title}</h4>
            </div>
        </div> 
    `;

    const handlerEventIcons = document.querySelectorAll(".option-button");
    handlerEventIcons.forEach(btn => {
        btn.addEventListener("click", function(event) {
            let index = Number(String(event.currentTarget.id).slice(-2).replace('-', ''))
            if (event.currentTarget.id == `addFavorite-${index}`) {
                debugger;
                addFavoriteGif(miData[index])
            }
            if (event.currentTarget.id == `downFavorite-${index}`) {
                downLoadGif(miData[index])
            }
            if (event.currentTarget.id == `maxFavorite-${index}`) {
                maxgif(miData[index])
            }

        })
    })

    return cardView
}*/

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