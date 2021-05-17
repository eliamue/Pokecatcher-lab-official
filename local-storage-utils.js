import { findById } from './utils.js';

const POKEDEX = 'pokedex';

//set
export function setPokedex(personalPokedex) {
    const stringyPokedex = JSON.stringify(personalPokedex);
    localStorage.setItem(POKEDEX, stringyPokedex);
}

//get
export function getPokedex() {
    const stringyPokedex = localStorage.getItem(POKEDEX);
    const ogPokedex = JSON.parse(stringyPokedex);

    return ogPokedex;
}

//encounter
export function encounterPokemon(iChooseYouId) {
    const ogPokedex = getPokedex();

    const pokeMatch = findById(ogPokedex, iChooseYouId);
    if (pokeMatch) {
        pokeMatch.encountered++;
    } else {
        const newItem = {
            captures: 0,
            encounters: 1,
            id: iChooseYouId
        };
        ogPokedex.push(newItem);
    }
    setPokedex(ogPokedex);
}

//capture
export function capturePokemon(iChooseYouId) {
    const ogPokedex = encounterPokemon(iChooseYouId);
    const pokeMatch = findById(ogPokedex, iChooseYouId);
    pokeMatch.captured++;
    setPokedex(ogPokedex);
}