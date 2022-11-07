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

/********************************SPESA VERSIONE 2****************************************************/

const spesa2 = [];


let pippo = spesa2

while( spesa2.length < 3){
    const spesaUtente = prompt("Inserisci cosa comprare");

    spesa2.push(spesaUtente);

}

const thing1El =document.querySelector(".thing1");
thing1El.innerHTML = pippo;

