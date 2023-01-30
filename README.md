# Pokedex web app

This retro themed javascript web app allows you navigate a list of the original 151 pokemon and view modals containing information dynamically pulled from an API.

This project is currently deployed on [GitHub Pages](https://majestysfiend.github.io/Pokedex/)

## Dependencies

- jQuery 3.3.1
- Popper 1.16.1
- Bootstrap 4.3.1 (Both CSS and JS)

## How it works

### Buttons

1. API data is fetched, parsed, and looped through.
2. Data is assigned to multiple object keys.
3. Each object is pushed into an array.
4. Buttons are created, assigned data, and appended to the document.

### Modal

1. Parsed data from API is assigned to various modal content.
2. Created buttons open a modal on click.
3. Content within the modal is dynamically added based on which button is clicked.

### Search Funcionality

1. When the search button is clicked, the input value is converted to uppercase and stored in a variable.
2. All buttons are looped through.
3. If the input value variable matches the button text, the button is clicked in the list and opens a modal.

## Credits

Big shout-out to [Career Foundry](https://careerfoundry.com/) for teaching me the technologies I needed to make this happen!

This project wouldn't have been possible without [PokeAPI](https://pokeapi.co/)!

The font was created by [Jackster Productions](https://www.fontspace.com/jackster-productions) from [fontspace](https://www.fontspace.com/)







 
