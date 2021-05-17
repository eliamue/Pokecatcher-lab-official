HTML
3 radio buttons
1 catch button
3 images

JS
1) Create list of objects for the pokedex, have it in an array
    
2)Loads page
        -renderThreePokemon function
        -going into our pokedex to randomly pick 3 pokemon using math.random 
        -storing these 3 randomly chosen pokemon in 'let' variables upon rendering the page
        -puts into 3 different lets
        -getPokedex function
        -Pokedex is set by stringifying what's in the cart 
        -encounterPokemon function
        -While loop to prevent the 3 pokemon from any of them being equal (poke1 === poke2 || === poke3 ||), if any are equal, math.random again, reshuffle the deck

3) On click
    -Sending their choice to local storage
    -matching the one they selected with the id of object in master pokedex
    -Remembering in LS(personal pokedex) what pokemon they've already encountered and/or caught
    -tracks how many times each pokemon has been encountered
    -capturePokemon

    *Functions Needed*
----------------------------
    -findById
        -Takes in item id and full array of master pokedex
        -Loops through master pokedex to find matching id
        -matches the item id with whatever id it is in the master pokedex
        -returns that selected pokemon
        -otherwise returns null in case of naughtiness

    -capturePokemon
        -grabs pokedex and selection
        -matches them with findById
        -increases the capture counter by 1
        -calls setpokedex to put that capture into local storage

    -encounterPokemon
        -grab pokedex and 3 rendered pokemon
        -matches them with findById
        -if else statement to determine if encountered before, and if so, encounter counter is increased by 1
        -If newly encountered, item is pushed with pokedex.push(newPokemonYay), encounter counter and capture counter created on that item's id
        -Updates the pokedex with setPokedex

    -setPokedex
        -Putting cart in locstor
        -stringifying what's in the cart

    -getPokedex
        -Getting the stringified item from setPokedex
        -parses it
        -returns the pokedex

