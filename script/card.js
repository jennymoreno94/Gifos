import MaxCard from "./maxCard.js";

function Card(element) {
    let elementComplete = JSON.stringify(element)
    const cardView = ` 
        <div class="image-content">
            <img src=${element.images.fixed_height_downsampled.url}></img>
            <div class="card">
                <div class="group-icons">
                <button onClick='addFavoriteGif(${elementComplete})' class="option-button"><i id="add-${element.id}" class="far fa-heart"></i>
                </button>
                <button onClick='downLoadGif(${elementComplete})' class="option-button download-icon"></button>
                <button onClick='maxgif(${elementComplete})' class="option-button max-icon"></button>
                </div>
            <div class="group-text">
            <h4 class="user-name">${element.username}</h4>
            <h4>${element.title}</h4>
            </div>
        </div> 
    `;
    return cardView
}


window.addFavoriteGif = function (element) {
    let heart = document.getElementById(`add-${element.id}`)
    if (heart.className == "far fa-heart") {
        heart.className = "fas fa-heart";
    } else {
        heart.className = "far fa-heart";
    }
    addLocalStorage("favorites", element)
}

window.downLoadGif = async function (element) {
    let blob = await fetch(element.images.downsized.url).then(img => img.blob());
    invokeSaveAsDialog(blob, element.slug + ".gif");
}

window.maxgif = async function (element) {
    MaxCard(element);
    
}

function addLocalStorage(name, gif) {
    let data = localStorage.getItem(name);
    data = data ? JSON.parse(data) : [];
    data.push(gif)
    localStorage.setItem(name, JSON.stringify(data));
}


export default Card