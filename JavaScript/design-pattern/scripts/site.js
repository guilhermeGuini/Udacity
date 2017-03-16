'use strict';

var contador = 0;

document.getElementById('imgCat')
        .addEventListener('click', incrementarClick, false);

document.getElementById('imgCat2')
        .addEventListener('click', incrementarClick, false);

function incrementarClick() {
    console.log("OK");
    contador++;
    document.getElementById('figCap')
            .innerText = contador.toString();

    document.getElementById('figCap2')
        .innerText = contador.toString();
}