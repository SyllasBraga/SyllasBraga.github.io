const IMG = document.getElementsByClassName("img");
const IMG_STYLE = document.getElementById("img");
const BTN_NEXT = document.getElementById("next");
const BTN_BACK = document.getElementById("back");

let atualImg = 0;
let proxImg = 1;


function nextImg() {
    if (proxImg>IMG.length-1) {
        IMG[atualImg].classList.remove("imgVisivel");
        atualImg = 0;
        IMG[atualImg].classList.add("imgVisivel");
        proxImg=1;
        console.log("ProxImg: "+proxImg+". AtualImg: "+atualImg+" if nextImg")
    }else{
        IMG[atualImg].classList.remove("imgVisivel");
        IMG[proxImg].classList.add("imgVisivel");
        atualImg++;
        proxImg++;
        console.log("ProxImg: "+proxImg+". AtualImg: "+atualImg+" nextImg");
    }
    IMG_STYLE.style.transform = "translateX(-50px)";

}
function backImg() {
    if (atualImg<=0) {
        IMG[atualImg].classList.remove("imgVisivel");
        atualImg = IMG.length-1;
        IMG[atualImg].classList.add("imgVisivel");
        proxImg = IMG.length-2;
        console.log("ProxImg: "+proxImg+". AtualImg: "+atualImg+" if backImg")
    }else{
        IMG[atualImg].classList.remove("imgVisivel");
        atualImg--;
        IMG[proxImg].classList.add("imgVisivel");
        proxImg--;
        console.log("ProxImg: "+proxImg+". AtualImg: "+atualImg+" backImg")
    }

}

BTN_NEXT.addEventListener("click", nextImg);
BTN_BACK.addEventListener("click", backImg);