//IIFE containing pokemon list and basic functionality
let pokemonRepository = (function () {
    // Array of Pokemon and their attributes as objects
    let pokemonList = [
        { name: 'Bulbasaur', height: 0.7, weight: 6.9, types: ['grass', 'poison'] },
        { name: 'Ivysaur', height: 1.0, weight: 13.0, types: ['grass', 'poison'] },
        { name: 'Venusaur', height: 2.0, weight: 100.0, types: ['grass', 'poison'] },
        { name: 'Charmander', height: 0.6, weight: 8.5, types: ['fire'] },
        { name: 'Charmeleon', height: 1.1, weight: 19.0, types: ['fire'] },
        { name: 'Charizard', height: 1.7, weight: 90.5, types: ['fire', 'flying'] },
        { name: 'Squirtle', height: 0.5, weight: 9, types: ['water'] },
        { name: 'Wartortle', height: 1.0, weight: 22.5, types: ['water'] },
        { name: 'Blastoise', height: 1.6, weight: 85.5, types: ['water'] },
        { name: 'Caterpie', height: 0.3, weight: 2.9, types: ['bug'] },
        { name: 'Metapod', height: 0.7, weight: 9.9, types: ['bug'] },
        { name: 'Butterfree', height: 1.1, weight: 32.0, types: ['bug', 'flying'] }];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }

    return {
        add: add,
        getAll: getAll
    }

})();
// Looping through Pokemon list array
pokemonRepository.getAll().forEach(function (pokemon) {
    // Conditional for adding text to Pokemon height
    if (pokemon.height > 0.6) {
        pokemon.height = pokemon.height + "-Wow, that's big!";
    }
    // Output Pokemon list to web page as block elements
    document.write('<p>' + pokemon.name + " " + 'height: ' + pokemon.height + '</p>');
});
