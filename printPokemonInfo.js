let info = document.getElementById("info");

export default function printPokemonInfo(pokemon) {
    console.log(pokemon);

    fetch(pokemon)
    .then(res => res.json())
    .then(data => {
        console.log("pokemon info", data);

        let pokemonInfoDiv = document.createElement("div");
        let pokemonName = document.createElement("h2");
        pokemonName.innerText = data.name.toUpperCase();

        let pokemonImage = document.createElement("img");
        pokemonImage.src = data.sprites.front_default;

        let abilities = document.createElement("p");
        abilities.style.backgroundColor = "pink";
        abilities.innerText = "";
        //console.log(data.abilities);
        data.abilities.map(ab => {
            console.log("ab", ab.ability.name);
            abilities.innerText += " | " + ab.ability.name;
        })

        pokemonInfoDiv.append(pokemonName, pokemonImage, abilities);
        
        info.innerHTML = "";
        info.appendChild(pokemonInfoDiv);
    })

}