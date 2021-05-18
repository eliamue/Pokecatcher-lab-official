import { findById } from './utils.js';
import pokemon from './pokemon.js';

export function mungeCaptured(pokemonArray) {
    //initialize and empty array 
    const results = [];
    // loop through each item in pokemonArray
    for (let poke of pokemonArray) {

        results.push(poke.captures);
    }
    // push the captured key on the pokemon array
    // [4, 2, 0] is the goal
    return results;
}

export function mungeEncountered(pokemonArray) {
    //initialize and empty array 
    const results = [];
    // loop through each item in pokemonArray
    for (let poke of pokemonArray) {

        results.push(poke.encounters);
    }
    // push the captured key on the pokemon array
    // [4, 2, 0] is the goal
    return results;
}

export function mungeNames(pokemonArray) {
    const results = [];
    for (let poke of pokemonArray) {
        const data = findById(pokemon, poke.id);
        results.push(data.name);
    }
        //inport findById, master pokemon list
    // initialize an empty array
    // loop through each item in pokemonArray
        //get data from pokemon list using findById
        //push data.pokemon onto results
    // expected output: ['charmander', 'squirtle', 'pidgey']
    return results;
}

export function mungeColors(pokemonArray) {
    const results = [];
    for (let poke of pokemonArray) {
        const data = findById(pokemon, poke.id);
        results.push(data.color);
    }
    return results;
}