//IIFE containing pokemon list and basic functionality
let pokemonRepository = (function () {
    // Array of Pokemon and their attributes as objects
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }
    //Load API info, construct and show modal
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function showModal(title, text) {

            let modalContainer = document.querySelector('#modal-container');
            modalContainer.innerHTML = '';

            let modal = document.createElement('div');
            modal.classList.add('modal');

            let closeButtonElement = document.createElement('button');
            closeButtonElement.classList.add('modal-close');
            closeButtonElement.innerText = "X";
            closeButtonElement.addEventListener('click', () => {
                pokeList.classList.toggle('invisible');
                hideModal();
            });

            let imageElement = document.createElement('img');
            imageElement.src = pokemon.imageUrl;
            imageElement.classList.add('modal-pokemon-image');

            let titleElement = document.createElement('h1');
            titleElement.innerText = pokemon.name.toUpperCase();

            let contentElement = document.createElement('p');
            contentElement.innerText = 'Height: ' + pokemon.height;

            modal.appendChild(closeButtonElement);
            modal.appendChild(imageElement);
            modal.appendChild(titleElement);
            modal.appendChild(contentElement);
            modalContainer.appendChild(modal);

            modalContainer.classList.add('is-visible');

            modalContainer.addEventListener('click', (e) => {
                let target = e.target;
                if (target === modalContainer) {
                    hideModal();
                }
            });
        });

        document.querySelector('.pokemonbutton').addEventListener('click', () => {
            showModal(title, text);
        });

        function hideModal() {
            let modalContainer = document.querySelector('#modal-container');
            modalContainer.classList.remove('is-visible');
            button.classList.remove('invisible');
        }

        window.addEventListener('keydown', (e) => {
            let modalContainer = document.querySelector('#modal-container');
            if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
                pokeList.classList.toggle('invisible');
                hideModal();
            }
        })
    }
    // Creates button for every pokemon
    function addListItem(pokemon) {
        let pokeList = document.querySelector('ul');
        let listItem = document.createElement('li');
        let button = document.createElement('button');

        button.innerText = pokemon.name.toUpperCase();
        button.classList.add('pokemonbutton');
        button.addEventListener('click', function (event) {
            showDetails(pokemon);
            pokeList.classList.toggle('invisible');
        })
        listItem.appendChild(button);
        pokeList.appendChild(listItem);
    }
    // Fetch api data and convert to json, then assign data and add pokemon
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }
    // Fetch api data and convert to json, then assign data to item
    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        })
    }

    return {
        add: add,
        getAll: getAll,
        showDetails: showDetails,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails
    };

})();

pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});