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
   function createHabitatFavoriteCard(habitat) {

    const sectionLabel =
        habitat.section === "dlc"
            ? "🫧 Bubbly Basin DLC"
            : "🌿 Hoofdspel";


    return `
        <article class="habitat-overview-card favorite-habitat-card">

            <button
                type="button"
                class="habitat-favorite-page-button"
                data-favorite-id="${habitat.id}"
                aria-label="Verwijder ${habitat.name} uit favorieten"
                title="Verwijder uit favorieten"
            >
                ❤️
            </button>


            <div class="habitat-card-heading">

                <span class="habitat-card-icon">
                    ${habitat.section === "dlc" ? "🫧" : "🌿"}
                </span>

                <div>

                    <h3>
                        ${habitat.name}
                    </h3>

                    <small>
                        ${sectionLabel}
                    </small>

                </div>

            </div>


            <a
                href="habitats.html"
                class="pokemon-detail-link"
            >
                Bekijk habitat →
            </a>

        </article>
    `;
}


function activateHabitatFavoriteButtons() {

    document
        .querySelectorAll(
            ".habitat-favorite-page-button"
        )
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    const favoriteId =
                        button.dataset.favoriteId;


                    const favorites =
                        getFavorites().filter(
                            (favorite) =>
                                favorite.id !== favoriteId
                        );


                    saveFavorites(favorites);

                    renderFavorites();

                    renderFloatingFavorites();
                }
            );

        });
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


    const habitatList =
        getFavoriteHabitats();


    /* =====================================================
       POKEMON FILTEREN
       ===================================================== */

    const filteredPokemon =
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
                pokemon.section === selectedSection;


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


    /* =====================================================
       HABITATS FILTEREN
       ===================================================== */

    const filteredHabitats =
        habitatList.filter((habitat) => {

            const matchesSearch =
                !searchValue ||
                habitat.name
                    .toLowerCase()
                    .includes(searchValue);


            const matchesSection =
                selectedSection === "all" ||
                habitat.section === selectedSection;


            const matchesType =
                selectedType === "all";


            return (
                matchesSearch &&
                matchesSection &&
                matchesType
            );
        });


    /* GEEN FAVORIETEN */

    if (
        !pokemonList.length &&
        !habitatList.length
    ) {

        app.innerHTML = `
            <section class="detail-block">

                <h2>
                    ❤️ Nog geen favorieten
                </h2>

                <p>
                    Je hebt nog geen Pokémon of habitats
                    als favoriet opgeslagen.
                </p>

            </section>
        `;

        return;
    }


    /* FILTER GEEFT GEEN RESULTATEN */

    if (
        !filteredPokemon.length &&
        !filteredHabitats.length
    ) {

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


    let html = "";


    /* POKEMON */

    if (filteredPokemon.length) {

        html += `
            <section class="favorites-category">

                <h2 class="favorites-category-title">
                    🔴 Pokémon
                </h2>

                <div class="favorites-category-grid">

                    ${filteredPokemon
                        .map(createPokemonCard)
                        .join("")}

                </div>

            </section>
        `;
    }


    /* HABITATS */

    if (filteredHabitats.length) {

        html += `
            <section class="favorites-category">

                <h2 class="favorites-category-title">
                    🌿 Habitats
                </h2>

                <div class="favorites-category-grid">

                    ${filteredHabitats
                        .map(createHabitatFavoriteCard)
                        .join("")}

                </div>

            </section>
        `;
    }


    app.innerHTML = html;


    activateFavoriteButtons(
        filteredPokemon
    );


    activateHabitatFavoriteButtons();
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
