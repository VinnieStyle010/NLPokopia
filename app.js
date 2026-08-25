const app = document.getElementById("app");
const searchInput = document.getElementById("searchInput");
const gameFilter = document.getElementById("gameFilter");
const typeFilter = document.getElementById("typeFilter");


function getPokemonImage(name) {
    const imageName = name
        .toLowerCase()
        .replace(/♀/g, "-f")
        .replace(/♂/g, "-m")
        .replace(/['’.]/g, "")
        .replace(/\s+/g, "-");

    return `https://img.pokemondb.net/artwork/large/${imageName}.jpg`;
}


function getPokemonSection(pokemon) {
    if (pokemon.event === true) {
        return "event";
    }

    if (pokemon.dlc === true) {
        return "dlc";
    }

    return "base";
}


function getPokemonStatus(pokemon) {
    if (pokemon.event === true) {
        return "Event Pokémon";
    }

    if (pokemon.dlc === true) {
        return "Bubbly Basin DLC";
    }

    if (pokemon.dlc === false) {
        return "Hoofd-Pokédex";
    }

    return "Nog onbekend";
}


function fillTypeFilter() {
    const types = new Set();

    pokemonData.forEach((pokemon) => {
        pokemon.type.forEach((type) => {
            types.add(type);
        });
    });

    const sortedTypes = Array.from(types).sort();

    sortedTypes.forEach((type) => {
        const option = document.createElement("option");

        option.value = type;
        option.textContent = type;

        typeFilter.appendChild(option);
    });
}


function renderPokemon(list) {
    app.innerHTML = "";

    if (list.length === 0) {
        app.innerHTML = `
            <p class="no-results">
                Geen Pokémon gevonden.
            </p>
        `;

        return;
    }

    list.forEach((pokemon) => {
        const card = document.createElement("section");

        card.className = "pokemon-card";

        const section = getPokemonSection(pokemon);

        const pokemonUrl =
            `pokemon.html?section=${section}&number=${pokemon.number}`;


        card.addEventListener("click", () => {
            window.location.href = pokemonUrl;
        });

        card.style.cursor = "pointer";


        card.innerHTML = `
            <img
                class="pokemon-image"
                src="${getPokemonImage(pokemon.name)}"
                alt="${pokemon.name}"
                loading="lazy"
            >


            <p class="pokemon-card-types">
                <strong>Type:</strong>
                ${pokemon.type.join(" / ")}
            </p>

            <p class="pokemon-card-status">
                ${getPokemonStatus(pokemon)}
            </p>

            <p class="pokemon-more-info">
                Bekijk alle informatie →
            </p>
        `;


        app.appendChild(card);
    });
}


function filterPokemon() {
    const search =
        searchInput.value.trim().toLowerCase();

    const selectedGame =
        gameFilter.value;

    const selectedType =
        typeFilter.value;


    const filteredPokemon = pokemonData.filter((pokemon) => {
        const number =
            String(pokemon.number);

        const paddedNumber =
            number.padStart(3, "0");

        const name =
            pokemon.name.toLowerCase();


        const matchesSearch =
            name.includes(search) ||
            number.includes(search) ||
            paddedNumber.includes(search);


        const matchesGame =
            selectedGame === "all" ||

            (
                selectedGame === "base" &&
                pokemon.dlc === false &&
                pokemon.event !== true
            ) ||

            (
                selectedGame === "dlc" &&
                pokemon.dlc === true
            ) ||

            (
                selectedGame === "event" &&
                pokemon.event === true
            ) ||

            (
                selectedGame === "unknown" &&
                pokemon.dlc === null &&
                pokemon.event !== true
            );


        const matchesType =
            selectedType === "all" ||
            pokemon.type.includes(selectedType);


        return (
            matchesSearch &&
            matchesGame &&
            matchesType
        );
    });


    renderPokemon(filteredPokemon);
}


searchInput.addEventListener(
    "input",
    filterPokemon
);

gameFilter.addEventListener(
    "change",
    filterPokemon
);

typeFilter.addEventListener(
    "change",
    filterPokemon
);


fillTypeFilter();

renderPokemon(pokemonData);
