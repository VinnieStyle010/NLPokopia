/* =========================================================
   NLPokopia FAVORIETEN PAGINA
   ========================================================= */

const app = document.getElementById("app");

const searchInput =
    document.getElementById("searchInput");

const sectionFilter =
    document.getElementById("sectionFilter");

const typeFilter =
    document.getElementById("typeFilter");


/* =========================================================
   AFBEELDING
   ========================================================= */

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


/* =========================================================
   DETAILPAGINA
   ========================================================= */

function getPokemonDetailUrl(pokemon) {

    return `pokemon.html?section=${pokemon.section}&number=${pokemon.number}`;
}


/* =========================================================
   FAVORIETEN MET POKEMON DATA COMBINEREN
   ========================================================= */

function getFavoritePokemon() {

    const favorites = getFavorites();


    /*
     * Alleen Pokémon pakken.
     * Habitatfavorieten worden apart verwerkt.
     */

    const pokemonFavorites =
        favorites.filter(
            (favorite) =>
                favorite.favoriteType !== "habitat"
        );


    return pokemonFavorites
        .map((favorite) => {

            let pokemon = null;


            /* Hoofd-Pokédex */

            if (favorite.section === "base") {

                pokemon = pokemonData.find(
                    (item) =>
                        item.number === favorite.number &&
                        item.name === favorite.name &&
                        item.dlc !== true &&
                        item.event !== true
                );

            }


            /* Special Pokémon */

            if (favorite.section === "event") {

                pokemon = pokemonData.find(
                    (item) =>
                        item.number === favorite.number &&
                        item.name === favorite.name &&
                        item.event === true
                );

            }


            /* Bubbly Basin */

            if (favorite.section === "dlc") {

                pokemon = pokemonDLC.find(
                    (item) =>
                        item.number === favorite.number &&
                        item.name === favorite.name
                );

            }


            if (!pokemon) {
                return null;
            }


            return {
                ...pokemon,
                favoriteType: "pokemon",
                section: favorite.section
            };

        })
        .filter(Boolean);
}


/* =========================================================
   FAVORIETE HABITATS
   ========================================================= */

function getFavoriteHabitats() {

    return getFavorites()
        .filter(
            (favorite) =>
                favorite.favoriteType === "habitat"
        )
        .sort(
            (a, b) =>
                a.name.localeCompare(
                    b.name,
                    "nl"
                )
        );
}


            /* Special Pokémon */

            if (favorite.section === "event") {

                pokemon = pokemonData.find(
                    (item) =>
                        item.number === favorite.number &&
                        item.name === favorite.name &&
                        item.event === true
                );

            }


            /* Bubbly Basin */

            if (favorite.section === "dlc") {

                pokemon = pokemonDLC.find(
                    (item) =>
                        item.number === favorite.number &&
                        item.name === favorite.name
                );

            }


            if (!pokemon) {

                return {
                    ...favorite,
                    section: favorite.section
                };

            }


            return {
                ...pokemon,
                section: favorite.section
            };

        })
        .filter(Boolean);
}


/* =========================================================
   TYPEFILTER VULLEN
   ========================================================= */

function fillTypeFilter() {

    const pokemon =
        getFavoritePokemon();


    const types = new Set();


    pokemon.forEach((item) => {

        if (!Array.isArray(item.type)) {
            return;
        }


        item.type.forEach((type) => {
            types.add(type);
        });

    });


    [...types]
        .sort((a, b) =>
            a.localeCompare(b, "nl")
        )
        .forEach((type) => {

            const option =
                document.createElement("option");


            option.value = type;
            option.textContent = type;


            typeFilter.appendChild(option);

        });
}


/* =========================================================
   SECTIENAAM
   ========================================================= */

function getSectionLabel(section) {

    if (section === "event") {
        return "⭐ Special Pokémon";
    }


    if (section === "dlc") {
        return "🫧 Bubbly Basin DLC";
    }


    return "🔴 Hoofd-Pokédex";
}


/* =========================================================
   POKEMON KAART
   ========================================================= */

function createPokemonCard(pokemon) {

    const number =
        String(pokemon.number).padStart(3, "0");


    const types =
        Array.isArray(pokemon.type)
            ? pokemon.type
            : [];


    return `
        <article class="pokemon-card">

            ${createFavoriteButton(
                pokemon,
                pokemon.section
            )}


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

                ${types
                    .map((type) => {

                        const typeClass =
                            type
                                .split(" ")[0]
                                .toLowerCase();


                        return `
                            <span
                                class="type-badge type-badge-${typeClass}"
                            >
                                ${type}
                            </span>
                        `;

                    })
                    .join("")}

            </div>


            <p>
                <strong>
                    ${getSectionLabel(pokemon.section)}
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
   FAVORIETEN KNOPPEN ACTIVEREN
   ========================================================= */

function activateFavoriteButtons(
    pokemonList
) {

    document
        .querySelectorAll(".favorite-button")
        .forEach((button) => {

            button.addEventListener(
                "click",
                (event) => {

                    const number =
                        Number(
                            button.dataset.favoriteNumber
                        );


                    const name =
                        button.dataset.favoriteName;


                    const section =
                        button.dataset.favoriteSection;


                    const pokemon =
                        pokemonList.find(
                            (item) =>
                                item.number === number &&
                                item.name === name &&
                                item.section === section
                        );


                    if (!pokemon) {
                        return;
                    }


                    toggleFavorite(
                        pokemon,
                        section
                    );


                    /*
                     * Op de Favorieten-pagina
                     * verdwijnt de kaart meteen nadat
                     * het hartje wordt verwijderd.
                     */

                    renderFavorites();

                }
            );

        });
}


/* =========================================================
   FAVORIETEN TONEN
   ========================================================= */

function renderFavorites() {

    const searchValue =
        searchInput.value
            .trim()
            .toLowerCase();


    const selectedSection =
        sectionFilter.value;


    const selectedType =
        typeFilter.value;


    const pokemonList =
        getFavoritePokemon();


    const filtered =
        pokemonList.filter((pokemon) => {

            const number =
                String(pokemon.number)
                    .padStart(3, "0");


            const matchesSearch =
                !searchValue ||
                pokemon.name
                    .toLowerCase()
                    .includes(searchValue) ||
                number.includes(searchValue) ||
                String(pokemon.number)
                    .includes(searchValue);


            const matchesSection =
                selectedSection === "all" ||
                pokemon.section ===
                    selectedSection;


            const types =
                Array.isArray(pokemon.type)
                    ? pokemon.type
                    : [];


            const matchesType =
                selectedType === "all" ||
                types.includes(selectedType);


            return (
                matchesSearch &&
                matchesSection &&
                matchesType
            );

        });


    /* Nog helemaal geen favorieten */

    if (!pokemonList.length) {

        app.innerHTML = `
            <section class="detail-block">

                <h2>
                    ❤️ Nog geen favorieten
                </h2>

                <p>
                    Je hebt nog geen Pokémon als
                    favoriet opgeslagen.
                </p>

                <p>
                    Ga naar de Hoofd-Pokédex,
                    Special Pokémon of Bubbly Basin
                    en klik op 🤍 bij een Pokémon.
                </p>

                <a
                    href="hoofdpokedex.html"
                    class="back-button"
                >
                    Bekijk de Hoofd-Pokédex →
                </a>

            </section>
        `;

        return;
    }


    /* Filters leveren niets op */

    if (!filtered.length) {

        app.innerHTML = `
            <section class="detail-block">

                <h2>
                    Geen favorieten gevonden
                </h2>

                <p>
                    Probeer een andere naam,
                    Pokédex of type.
                </p>

            </section>
        `;

        return;
    }


    /* Kaarten tonen */

    app.innerHTML =
        filtered
            .map(createPokemonCard)
            .join("");


    activateFavoriteButtons(filtered);
}


/* =========================================================
   EVENTS
   ========================================================= */

searchInput.addEventListener(
    "input",
    renderFavorites
);


sectionFilter.addEventListener(
    "change",
    renderFavorites
);


typeFilter.addEventListener(
    "change",
    renderFavorites
);


/* =========================================================
   START
   ========================================================= */

fillTypeFilter();

renderFavorites();
