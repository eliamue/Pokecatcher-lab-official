// import functions
import { capturePokemon, encounterPokemon } from './local-storage-utils.js';
import lookAtAllTheseChickens from './pokemon.js';
// grab DOM elements
const button = document.querySelector('#catch');
const radio1 = document.querySelector('#pokemon1');
const radio2 = document.querySelector('#pokemon2');
const radio3 = document.querySelector('#pokemon3');
const img1 = document.querySelector('#poke-img1');
const img2 = document.querySelector('#poke-img2');
const img3 = document.querySelector('#poke-img3');
// initialize state
renderThreePokemon();
// add event listeners and the COOL ZONE4
button.addEventListener('click', () => {
    const caughtPokemon = document.querySelector(':checked');
    const chosenPokemonId = caughtPokemon.value;
    capturePokemon(chosenPokemonId);

    renderThreePokemon();
});

function grabRandomPokemon() {
    const pokedexOptions = Math.floor(Math.random() * lookAtAllTheseChickens.length);
    const randomPokemon = lookAtAllTheseChickens[pokedexOptions];

    return randomPokemon;
}

function renderThreePokemon() {
    let pokemon1 = grabRandomPokemon();
    let pokemon2 = grabRandomPokemon();
    let pokemon3 = grabRandomPokemon();

    while (
        pokemon1.id === pokemon2.id ||
        pokemon1.id === pokemon3.id ||
        pokemon3.id === pokemon2.id
    ) {
        pokemon1 = grabRandomPokemon();
        pokemon2 = grabRandomPokemon();
        pokemon3 = grabRandomPokemon();
    }
    encounterPokemon(pokemon1.id);
    encounterPokemon(pokemon2.id);
    encounterPokemon(pokemon3.id);

    img1.src = pokemon1.url_image;
    img2.src = pokemon2.url_image;
    img3.src = pokemon3.url_image;

    radio1.value = pokemon1.id;
    radio2.value = pokemon2.id;
    radio3.value = pokemon3.id;
}