import { getLista, limpaLista } from "./lista.js";

const itens = document.querySelector("#itens");
const entrada = document.querySelector("#entrada");
const adicionar = document.querySelector("#adicionar");
const limpar = document.querySelector("#limpar");

atualizarLista();

function atualizarLista(){
    itens.innerHTML = "";
    let lista = getLista();
    for (let i = 0; i < lista.length; i++) {
        const li = document.createElement("li");
        li.textContent = lista[i];
        itens.appendChild(li);
    }
}

limpar.addEventListener("click", limpaItensDaLista);

function limpaItensDaLista(){
    limpaLista();
    atualizarLista();
}
