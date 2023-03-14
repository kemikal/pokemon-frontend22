import printPokemonInfo from "./printPokemonInfo.js";

let list = document.getElementById("list");

export default function printPokemonList(pokemons, offset) {
    //console.log("data", pokemons);

    let pokemonList = document.createElement("ul")
    pokemonList.style.listStyle = "none";

    pokemons.map(pokemon => {
        //console.log("pokemon", pokemon);

        let pokeLi = document.createElement("li");
        pokeLi.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

        pokeLi.addEventListener("click", () => {
            console.log("click på pokemon", pokemon.name);
            printPokemonInfo(pokemon.url);
        })

        pokemonList.appendChild(pokeLi);
    })

    let nextLink = document.createElement("a");
    nextLink.innerText = "Nästa";
    let newOffset = Number(offset) + 20;
    console.log("newOff", newOffset);
    nextLink.href = "?offset=" + newOffset;

    list.appendChild(pokemonList);
    list.appendChild(nextLink);
}