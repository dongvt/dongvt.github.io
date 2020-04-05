'use strict';
const defUrl = `https://pokeapi.co/api/v2/pokemon/`;
let next = "";
let prev = "";

const left = document.getElementById("leftLink");
const right = document.getElementById("rightLink");


window.addEventListener('load',() => {
    displayList();
});

async function getList(url) {
    if (typeof url === "undefined")
        url = defUrl;

    const response = await fetch(url);
    return response.json();
}

async function displayList(url) {
    const pokemonList = await getList(url);
    const content = document.getElementById("content");
    let completeTable = "";
    //Assign prev and next values
    next = pokemonList.next;
    prev = pokemonList.previous;

    //Store all the HTML code in memory
    completeTable= `<table>`;
    for (const item of pokemonList.results) {
        completeTable += `<tr><td>${item.name}</td><td>${item.url}</td></tr>`;
    }
    completeTable += `</table>`
    content.innerHTML = completeTable;
}

left.addEventListener('click',(evt) => {
    evt.preventDefault();
    if(prev !== null)
        displayList(prev);
    else
        alert("No more pages");
});

right.addEventListener('click',(evt) => {
    evt.preventDefault();
    if(next !== null)
        displayList(next);
    else
        alert("No more pages");
});





