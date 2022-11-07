const spesa = ["pane", "verdura", "frutta"];

let i = 0;

while(spesa.length < 3){
    
    i++;

}

console.log( spesa);

const listaEl =document.querySelector(".listaspesa");
listaEl.innerHTML = spesa

const firstEl = document.querySelector(".first");
firstEl.innerHTML = spesa[0];

const secondEl = document.querySelector(".second");
secondEl.innerHTML = spesa[1];

const thirdEl = document.querySelector(".third");
thirdEl.innerHTML = spesa[2];