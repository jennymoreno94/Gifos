//import transversal from "./transversal";

function MaxCard(gif) {
    let modalDesktop = document.createElement("div");
    modalDesktop.id = `gif-${gif.id}`
    modalDesktop.className = "modal-container active"
    let gifComplete = JSON.stringify(gif)

    modalDesktop.innerHTML +=
      `<button class="modal-btn-close option-button close-icon " onclick="closegif('${gif.id}')"></button>
        <img src=${gif.images.fixed_height_downsampled.url}></img>
        <div class="group-modal">
          <div class="group-text-modal">
              <h4 class="user-name">${gif.username}</h4>
              <h4>${gif.title}</h4>
          </div>
          <div class="group-icons-modal">
            <button onClick= 'addFavoriteModalGif(${gifComplete})' class="option-button"><i id="add-modal-${gif.id}" class="far fa-heart"></i></button>
            <button onClick= 'downLoadGif(${gifComplete})' class="option-button download-icon"></button>
          </div>
          
        </div>
        `
    

    return document.body.appendChild(modalDesktop);
}


window.addFavoriteModalGif = function (element) {
    let heartmodal = document.getElementById(`add-modal-${element.id}`)
    if (heartmodal.className == "far fa-heart") {
      heartmodal.className = "fas fa-heart";
    } else {
      heartmodal.className = "far fa-heart";
    }
    addLocalStorage("favorites", element);
    //transversal.localStorage("favorites", element)
}

window.closegif = async function (id) {
    let max = document.getElementById(`gif-${id}`)
    max.remove("active")
  }
  
  function addLocalStorage(name, gif) {
    let data = localStorage.getItem(name);
    data = data ? JSON.parse(data) : [];
    data.push(gif)
    localStorage.setItem(name, JSON.stringify(data));
}

export default MaxCard