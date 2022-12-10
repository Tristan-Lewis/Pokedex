// Array of Pokemon and their attributes as objects
let pokemonList = [
    { name: 'Bulbasaur', height: 0.7, weight: 6.9, types: ['grass', 'poison'] },
    { name: 'Charmander', height: 0.6, weight: 8.5, types: ['fire'] },
    { name: 'Squirtle', height: 0.5, weight: 9, types: ['water'] }];
// Looping through Pokemon list array
for (i = 0; i < pokemonList.length; i++) {
    // Conditional for adding text to Pokemon height
    if (pokemonList[i].height > 0.6) {
        pokemonList[i].height = pokemonList[i].height + "-Wow, that's big!"
    };
    // Output Pokemon list to web page as block elements
    document.write('<p>' + pokemonList[i].name + " " + 'height: ' + pokemonList[i].height + '</p>');
}