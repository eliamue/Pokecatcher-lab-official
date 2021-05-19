import { capturePokemon, setPokedex, encounterPokemon } from '../local-storage-utils.js';

const test = QUnit.test;

test('test capturePokemon', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const newPokedex = [{ id: 1, captures: 0, encounters: 1 }, { id: 2, captures: 0, encounters: 1 }];
    const expected = [{ id: 1, captures: 1, encounters: 1 }, { id: 2, captures: 0, encounters: 1 }];
    
    //Act 
    // Call the function you're testing and set the result to a const
    setPokedex(newPokedex);
    capturePokemon(1);
    const stringyPokedex = localStorage.getItem('pokedex');
    const actual = JSON.parse(stringyPokedex);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('test encounterPokemon', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const newPokedex = [{ id: 1, captures: 0, encounters: 1 }, { id: 2, captures: 0, encounters: 1 }];
    const expected = [{ id: 1, captures: 0, encounters: 1 }, { id: 2, captures: 0, encounters: 2 }];
    
    //Act 
    // Call the function you're testing and set the result to a const
    setPokedex(newPokedex);
    encounterPokemon(2);
    const stringyPokedex = localStorage.getItem('pokedex');
    const actual = JSON.parse(stringyPokedex);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

