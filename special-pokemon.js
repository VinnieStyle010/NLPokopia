const app = document.getElementById("app");
const searchInput = document.getElementById("searchInput");
const typeFilter = document.getElementById("typeFilter");


function getPokemonImage(name) {
    const specialImages = {
        "Paldean Wooper": "wooper-paldea",
        "Stereo Rotom": "rotom"
    };

    const imageName =
        specialImages[name] ||
        name
            .toLowerCase()
            .replaceAll(" ", "-")
            .replaceAll("'", "")
            .replaceAll(".", "");

    return `https://img.pokemondb.net/artwork/large/${imageName}.jpg`;
}


function getPokemonDetailUrl(pokemon) {
    return `pokemon.html?section=event&number=${pokemon.number}`;
}


/* =========================================================
   ALLEEN SPECIAL / EVENT POKEMON
   ========================================================= */

const specialPokemon = pokemonData
    .filter((pokemon) => pokemon.event === true)
    .sort((a, b) => a.number - b.number);


/* =========================================================
   TYPEFILTER VULLEN
   ========================================================= */

function fillTypeFilter() {
    const types = new Set();

    specialPokemon.forEach((pokemon) => {
        pokemon.type.forEach((type) => {
            types.add(type);
        });
    });

    [...types]
        .sort((a, b) => a.localeCompare(b, "nl"))
        .forEach((type) => {
            const option = document.createElement("option");

            option.value = type;
            option.textContent = type;

            typeFilter.appendChild(option);
        });
}


/* =========================================================
   POKEMON KAART
   ========================================================= */

function createPokemonCard(pokemon) {
    const number = String(pokemon.number).padStart(3, "0");

    return `
        <article class="pokemon-card">

        ${createFavoriteButton(pokemon, "event")}

            <a
                class="pokemon-detail-link"
                href="${getPokemonDetailUrl(pokemon)}"
            >

                <img
                    class="pokemon-image"
                    src="${getPokemonImage(pokemon.name)}"
                    alt="${pokemon.name}"
                    loading="lazy"
                >

                <h2>
                    ${pokemon.name}
                </h2>

            </a>


            <p>
                <strong>Nr:</strong>
                ${number}
            </p>


            <div class="pokemon-types">

                ${pokemon.type
                    .map((type) => {

                        const typeClass = type
                            .split(" ")[0]
                            .toLowerCase();

                        return `
                            <span class="type-badge type-badge-${typeClass}">
                                ${type}
                            </span>
                        `;

                    })
                    .join("")}

            </div>


            <p>
                <strong>
                    ⭐ Special Pokémon (Event Pokémon)
                </strong>
            </p>


            <a
                class="pokemon-detail-link"
                href="${getPokemonDetailUrl(pokemon)}"
            >
                Bekijk alle informatie →
            </a>

        </article>
    `;
}


/* =========================================================
   FILTEREN + TONEN
   ========================================================= */

function renderPokemon() {
    const searchValue = searchInput.value
        .trim()
        .toLowerCase();

    const selectedType = typeFilter.value;

    const filtered = specialPokemon.filter((pokemon) => {
        const number = String(pokemon.number).padStart(3, "0");

        const matchesSearch =
            !searchValue ||
            pokemon.name.toLowerCase().includes(searchValue) ||
            number.includes(searchValue) ||
            String(pokemon.number).includes(searchValue);

        const matchesType =
            selectedType === "all" ||
            pokemon.type.includes(selectedType);

        return matchesSearch && matchesType;
    });


    if (!filtered.length) {
        app.innerHTML = `
            <section class="detail-block">
                <h2>
                    Geen Special Pokémon gevonden
                    (No Special Pokémon Found)
                </h2>

                <p>
                    Probeer een andere naam, nummer of type.
                    (Try another name, number or type.)
                </p>
            </section>
        `;

        return;
    }


    app.innerHTML = filtered
        .map(createPokemonCard)
        .join("");
    document
    .querySelectorAll(".favorite-button")
    .forEach((button) => {

        button.addEventListener("click", (event) => {

            const number = Number(
                button.dataset.favoriteNumber
            );

            const name =
                button.dataset.favoriteName;

            const pokemon =
                specialPokemon.find(
                    (item) =>
                        item.number === number &&
                        item.name === name
                );

            if (!pokemon) {
                return;
            }

            handleFavoriteButtonClick(
                event,
                pokemon,
                "event"
            );

        });

    });
}


/* =========================================================
   EVENTS
   ========================================================= */

searchInput.addEventListener(
    "input",
    renderPokemon
);

typeFilter.addEventListener(
    "change",
    renderPokemon
);


/* =========================================================
   START
   ========================================================= */

fillTypeFilter();
renderPokemon();
