const BTN_BACK = document.getElementById("back");
const BTN_NEXT = document.getElementById("next");
const alterImg = document.getElementById("img");
let x = 0;
console.log(x);
const ARRAY_IMG =  ["./images/cocacola1.png",
                    "./images/cocacola2.png",
                    "./images/cocacola3.png",
                    "./images/cocacola4.png",
                    "./images/cocacola5.png",
                    "./images/cocacola6.png"];
let cont = 0;
  
function passarImg() {
        cont++;
        if (cont >= ARRAY_IMG.length) {
            cont = 0;
            alterImg.src = ARRAY_IMG[cont];
        }else{
            alterImg.src = ARRAY_IMG[cont]; 
        }
}

function voltarImg() {
        cont--;
        if (cont < 0) {
            cont = ARRAY_IMG.length - 1;
            alterImg.src = ARRAY_IMG[cont];       
        }else{
            alterImg.src = ARRAY_IMG[cont];               
        }
}

BTN_NEXT.addEventListener('click', passarImg);
BTN_BACK.addEventListener('click', voltarImg);

