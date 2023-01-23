//IIFE containing pokemon list and basic functionality
let pokemonRepository = (function () {
    // Array of Pokemon and their attributes as objects
    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    let numberCounter = 1;

    function add(pokemon) {
        pokemonList.push(pokemon);
    }

    function getAll() {
        return pokemonList;
    }
    //Load API info, construct and show modal
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function showModal(item) {
            let modalHeader = $('.modal-header');
            let modalTitle = $('.modal-title');
            let modalBody = $('.modal-body');
            modalTitle.empty();
            modalBody.empty();

            let pokemonImage = $('<img class="modal-img pokemonImage">');
            pokemonImage.attr('src', pokemon.imageUrl);
            let pokemonName = $('<h1 class="pokemonName">' + pokemon.name.toUpperCase() + '</h1>');
            let pokemonHeight = $('<p class="pokemonHeight">HT ' + pokemon.height + 'm</p>');
            let pokemonWeight = $('<p class="pokemonWeight">WT' + pokemon.weight + 'lbs</p>');

            modalTitle.append(pokemonImage);
            modalTitle.append(pokemonName);
            modalBody.append(pokemonHeight);
            modalBody.append(pokemonWeight);
        });


    }
    // Creates button for every pokemon
    function addListItem(pokemon) {
        let pokeList = document.querySelector('ul');
        let listItem = document.createElement('li');
        let pokemonNumber = document.createElement('p');
        let button = document.createElement('button');

        if (numberCounter < 10) {
            pokemonNumber.innerText = "00" + numberCounter;
        }
        else if (numberCounter < 100) {
            pokemonNumber.innerText = "0" + numberCounter;
        }
        else {
            pokemonNumber.innerText = numberCounter;
        }
        numberCounter++;

        listItem.classList.add('group-list-item');

        button.setAttribute('data-target', '#pokemonModal');
        button.setAttribute('data-toggle', 'modal');
        button.innerText = pokemon.name.toUpperCase();
        button.classList.add('pokemonbutton', 'btn', 'btn-primary');
        button.addEventListener('click', function () {
            showDetails(pokemon);
        })
        listItem.appendChild(button);
        pokeList.appendChild(pokemonNumber);
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
                    detailsUrl: item.url,
                    number: item.id
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
            item.imageUrl = details.sprites.versions["generation-i"]["red-blue"].front_default
            item.height = details.height;
            item.weight = details.weight;
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