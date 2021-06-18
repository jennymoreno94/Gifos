const localStorage =  function addLocalStorage(name, gif) {
    let data = localStorage.getItem(name);
    data = data ? JSON.parse(data) : [];
    data.push(gif)
    return localStorage.setItem(name, JSON.stringify(data));
}
  

const downLoadGif =  window.downLoadGif = async function (element) {
    debugger;
    let blob = await fetch(element.images.downsized.url).then(img => img.blob());
    return invokeSaveAsDialog(blob, element.slug + ".gif");
}


export default {
    localStorage,
    downLoadGif
}