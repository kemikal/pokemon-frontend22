import printPokemonList from "./printPokemonList.js";

let queryString = window.location.search;
console.log("qs", queryString);
let urlParams = new URLSearchParams(queryString);
let offsetParam = urlParams.get("offset");
console.log("offsetParam", offsetParam);

fetch("https://pokeapi.co/api/v2/pokemon/?offset=" + offsetParam)
.then(res => res.json())
.then(data => {
    printPokemonList(data.results, offsetParam);
})
.catch(err => console.log("err", err));