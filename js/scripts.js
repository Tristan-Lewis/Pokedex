//IIFE containing pokemon list and basic functionality
let pokemonRepository = (function () {
    // Array of Pokemon and their attributes as objects
    let pokemonList = [
        { name: 'Bulbasaur', height: 0.7, weight: 6.9, types: ['grass', 'poison'] },
        { name: 'Charmander', height: 0.6, weight: 8.5, types: ['fire'] },
        { name: 'Squirtle', height: 0.5, weight: 9, types: ['water'] }];

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
