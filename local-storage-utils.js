import { findById } from './utils.js';

const POKEDEX = 'pokedex';

//grabs the personal pokedex and parses it to then be set
export function getPokedex() {
    const stringyPokedex = localStorage.getItem(POKEDEX);
    if (!stringyPokedex) {
        return [];
    }
    const ogPokedex = JSON.parse(stringyPokedex);
    return ogPokedex;
}

//stringifies the personal pokedex that it got from get, returns it to locStor
export function setPokedex(personalPokedex) {
    const stringyPokedex = JSON.stringify(personalPokedex);
    localStorage.setItem(POKEDEX, stringyPokedex);
}

//encounter
export function encounterPokemon(iChooseYouId) {
    const ogPokedex = getPokedex();

    const pokeMatch = findById(ogPokedex, iChooseYouId);
    if (pokeMatch) {
        pokeMatch.encounters++;
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
    const ogPokedex = getPokedex();
    const pokeMatch = findById(ogPokedex, iChooseYouId);
    pokeMatch.captures++;

    setPokedex(ogPokedex);
}

export function myPersonalPokedex() {
    let total = 0;
    const myPokedex = getPokedex();
    for (let poke of myPokedex) {
        total += poke.captures;
    }
    return total;
}