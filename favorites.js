/* =========================================================
   NLPokopia FAVORIETEN
   Opslag via localStorage
   ========================================================= */

const FAVORITES_KEY = "nlpokopia-favorites";


/* =========================================================
   FAVORIETEN OPHALEN
   ========================================================= */

function getFavorites() {
    try {
        const stored = localStorage.getItem(FAVORITES_KEY);

        if (!stored) {
            return [];
        }

        const parsed = JSON.parse(stored);

        if (!Array.isArray(parsed)) {
            return [];
        }

        return parsed;
    } catch (error) {
        console.error("Kon favorieten niet laden:", error);

        return [];
    }
}


/* =========================================================
   FAVORIETEN OPSLAAN
   ========================================================= */

function saveFavorites(favorites) {
    localStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify(favorites)
    );
}


/* =========================================================
   UNIEKE ID VOOR EEN POKEMON
   ========================================================= */

function getFavoriteId(pokemon, section = "base") {
    return `${section}-${pokemon.number}-${pokemon.name}`;
}


/* =========================================================
   CONTROLEREN OF POKEMON FAVORIET IS
   ========================================================= */

function isFavorite(pokemon, section = "base") {
    const favorites = getFavorites();

    const favoriteId = getFavoriteId(
        pokemon,
        section
    );

    return favorites.some(
        (favorite) => favorite.id === favoriteId
    );
}


/* =========================================================
   FAVORIET TOEVOEGEN
   ========================================================= */

function addFavorite(pokemon, section = "base") {
    const favorites = getFavorites();

    const favoriteId = getFavoriteId(
        pokemon,
        section
    );


    const alreadyExists = favorites.some(
        (favorite) => favorite.id === favoriteId
    );


    if (alreadyExists) {
        return;
    }


    favorites.push({
        id: favoriteId,
        number: pokemon.number,
        name: pokemon.name,
        type: pokemon.type,
        section: section
    });


    saveFavorites(favorites);
}


/* =========================================================
   FAVORIET VERWIJDEREN
   ========================================================= */

function removeFavorite(pokemon, section = "base") {
    const favorites = getFavorites();

    const favoriteId = getFavoriteId(
        pokemon,
        section
    );


    const updatedFavorites = favorites.filter(
        (favorite) => favorite.id !== favoriteId
    );


    saveFavorites(updatedFavorites);
}


/* =========================================================
   FAVORIET AAN / UIT
   ========================================================= */

function toggleFavorite(pokemon, section = "base") {
    if (isFavorite(pokemon, section)) {
        removeFavorite(
            pokemon,
            section
        );

        return false;
    }


    addFavorite(
        pokemon,
        section
    );

    return true;
}


/* =========================================================
   HARTJE HTML MAKEN
   ========================================================= */

function createFavoriteButton(pokemon, section = "base") {
    const active = isFavorite(
        pokemon,
        section
    );


    return `
        <button
            type="button"
            class="favorite-button ${active ? "is-favorite" : ""}"
            data-favorite-number="${pokemon.number}"
            data-favorite-name="${pokemon.name}"
            data-favorite-section="${section}"
            aria-label="${active ? "Verwijder uit favorieten" : "Voeg toe aan favorieten"}"
            title="${active ? "Verwijder uit favorieten" : "Voeg toe aan favorieten"}"
        >
            ${active ? "❤️" : "🤍"}
        </button>
    `;
}


/* =========================================================
   KNOP ACTIVEREN
   ========================================================= */

function handleFavoriteButtonClick(event, pokemon, section = "base") {
    event.preventDefault();
    event.stopPropagation();


    const active = toggleFavorite(
        pokemon,
        section
    );


    const button = event.currentTarget;


    button.classList.toggle(
        "is-favorite",
        active
    );


    button.textContent =
        active
            ? "❤️"
            : "🤍";


    button.setAttribute(
        "aria-label",
        active
            ? "Verwijder uit favorieten"
            : "Voeg toe aan favorieten"
    );


    button.setAttribute(
        "title",
        active
            ? "Verwijder uit favorieten"
            : "Voeg toe aan favorieten"
    );
}
/* =========================================================
   ZWEVEND FAVORIETENPANEEL
   ========================================================= */

function getFavoritePanelPokemon() {
    return getFavorites();
}


function getFavoriteDetailUrl(favorite) {
    return `pokemon.html?section=${favorite.section}&number=${favorite.number}`;
}


function renderFloatingFavorites() {

    const panel =
        document.getElementById("floatingFavoritesPanel");

    if (!panel) {
        return;
    }


    const searchInput =
        panel.querySelector("#floatingFavoritesSearch");

    const list =
        panel.querySelector("#floatingFavoritesList");

    const count =
        panel.querySelector("#floatingFavoritesCount");


    const searchValue =
        searchInput
            ? searchInput.value.trim().toLowerCase()
            : "";


    const favorites =
        getFavoritePanelPokemon();


    count.textContent =
        favorites.length;


    const filtered =
        favorites.filter((favorite) => {

            if (!searchValue) {
                return true;
            }

            return (
                favorite.name
                    .toLowerCase()
                    .includes(searchValue) ||

                String(favorite.number)
                    .includes(searchValue)
            );

        });


    if (!favorites.length) {

        list.innerHTML = `
            <div class="floating-favorites-empty">
                Nog geen favorieten
            </div>
        `;

        return;
    }


    if (!filtered.length) {

        list.innerHTML = `
            <div class="floating-favorites-empty">
                Geen favorieten gevonden
            </div>
        `;

        return;
    }


    list.innerHTML =
        filtered
            .map((favorite) => {

                const number =
                    String(favorite.number)
                        .padStart(3, "0");


                return `
                    <div class="floating-favorite-item">

                        <a
                            href="${getFavoriteDetailUrl(favorite)}"
                            class="floating-favorite-link"
                        >
                            <span class="floating-favorite-number">
                                #${number}
                            </span>

                            <span class="floating-favorite-name">
                                ${favorite.name}
                            </span>
                        </a>


                        <button
                            type="button"
                            class="floating-favorite-remove"
                            data-favorite-id="${favorite.id}"
                            aria-label="Verwijder ${favorite.name} uit favorieten"
                            title="Verwijder uit favorieten"
                        >
                            ❤️
                        </button>

                    </div>
                `;

            })
            .join("");


    panel
        .querySelectorAll(".floating-favorite-remove")
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    const favoriteId =
                        button.dataset.favoriteId;


                    const updatedFavorites =
                        getFavorites().filter(
                            (favorite) =>
                                favorite.id !== favoriteId
                        );


                    saveFavorites(updatedFavorites);


                    renderFloatingFavorites();


                    /*
                     * Als er hartjes zichtbaar zijn op
                     * de huidige pagina, die ook bijwerken.
                     */

                    document
                        .querySelectorAll(".favorite-button")
                        .forEach((favoriteButton) => {

                            const id =
                                `${favoriteButton.dataset.favoriteSection}-${favoriteButton.dataset.favoriteNumber}-${favoriteButton.dataset.favoriteName}`;


                            if (id === favoriteId) {

                                favoriteButton.classList.remove(
                                    "is-favorite"
                                );

                                favoriteButton.textContent =
                                    "🤍";

                            }

                        });

                }
            );

        });
}


function createFloatingFavoritesPanel() {

    if (
        document.getElementById(
            "floatingFavoritesPanel"
        )
    ) {
        return;
    }


    const wrapper =
        document.createElement("div");


    wrapper.id =
        "floatingFavoritesPanel";


    wrapper.className =
        "floating-favorites";


    wrapper.innerHTML = `

        <button
            type="button"
            class="floating-favorites-toggle"
            id="floatingFavoritesToggle"
            aria-label="Open favorieten"
            title="Favorieten"
        >
            ❤️

            <span
                class="floating-favorites-count"
                id="floatingFavoritesCount"
            >
                0
            </span>
        </button>


        <aside
            class="floating-favorites-panel"
            id="floatingFavoritesContent"
        >

            <div class="floating-favorites-header">

                <div>

                    <strong>
                        ❤️ Favorieten
                    </strong>

                    <small>
                        Jouw gekozen Pokémon
                    </small>

                </div>


                <button
                    type="button"
                    id="floatingFavoritesClose"
                    class="floating-favorites-close"
                    aria-label="Sluit favorieten"
                >
                    ×
                </button>

            </div>


            <div class="floating-favorites-search">

                <input
                    type="search"
                    id="floatingFavoritesSearch"
                    placeholder="Zoek favoriet..."
                    aria-label="Zoek in favorieten"
                >

            </div>


            <div
                class="floating-favorites-list"
                id="floatingFavoritesList"
            >
            </div>


            <a
                href="favorieten.html"
                class="floating-favorites-page-link"
            >
                Bekijk alle favorieten →
            </a>

        </aside>
    `;


    document.body.appendChild(wrapper);


    const toggle =
        document.getElementById(
            "floatingFavoritesToggle"
        );


    const content =
        document.getElementById(
            "floatingFavoritesContent"
        );


    const close =
        document.getElementById(
            "floatingFavoritesClose"
        );


    const search =
        document.getElementById(
            "floatingFavoritesSearch"
        );


    toggle.addEventListener(
        "click",
        () => {

            wrapper.classList.toggle(
                "is-open"
            );


            if (
                wrapper.classList.contains(
                    "is-open"
                )
            ) {

                renderFloatingFavorites();

                setTimeout(
                    () => search.focus(),
                    150
                );

            }

        }
    );


    close.addEventListener(
        "click",
        () => {

            wrapper.classList.remove(
                "is-open"
            );

        }
    );


    search.addEventListener(
        "input",
        renderFloatingFavorites
    );


    renderFloatingFavorites();
}


/* =========================================================
   FAVORIETENPANEEL STARTEN
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    createFloatingFavoritesPanel
);
