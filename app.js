"use strict";
let button = document.getElementById("button");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
function adicionarNumero(numero1, numero2) {
    return numero1 + numero2;
}
button.addEventListener('click', () => {
    console.log(adicionarNumero(Number(input1.value), Number(input2.value)));
});
