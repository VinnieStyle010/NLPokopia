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
   HABITAT FAVORIETEN
   ========================================================= */

function getHabitatFavoriteId(
    habitatName,
    section = "base"
) {
    return `habitat-${section}-${habitatName}`;
}


function isHabitatFavorite(
    habitatName,
    section = "base"
) {

    const favorites = getFavorites();

    const favoriteId =
        getHabitatFavoriteId(
            habitatName,
            section
        );


    return favorites.some(
        (favorite) =>
            favorite.id === favoriteId
    );
}


function addHabitatFavorite(
    habitatName,
    section = "base"
) {

    const favorites = getFavorites();

    const favoriteId =
        getHabitatFavoriteId(
            habitatName,
            section
        );


    if (
        favorites.some(
            (favorite) =>
                favorite.id === favoriteId
        )
    ) {
        return;
    }


    favorites.push({

        id: favoriteId,

        favoriteType: "habitat",

        name: habitatName,

        section: section

    });


    saveFavorites(favorites);
}


function removeHabitatFavorite(
    habitatName,
    section = "base"
) {

    const favoriteId =
        getHabitatFavoriteId(
            habitatName,
            section
        );


    const favorites =
        getFavorites().filter(
            (favorite) =>
                favorite.id !== favoriteId
        );


    saveFavorites(favorites);
}


function toggleHabitatFavorite(
    habitatName,
    section = "base"
) {

    if (
        isHabitatFavorite(
            habitatName,
            section
        )
    ) {

        removeHabitatFavorite(
            habitatName,
            section
        );

        return false;
    }


    addHabitatFavorite(
        habitatName,
        section
    );

    return true;
}


/* =========================================================
   HABITAT HARTJE
   ========================================================= */

function createHabitatFavoriteButton(
    habitatName,
    section = "base"
) {

    const active =
        isHabitatFavorite(
            habitatName,
            section
        );


    return `
        <button
            type="button"
            class="habitat-favorite-button ${active ? "is-favorite" : ""}"
            data-habitat-name="${habitatName}"
            data-habitat-section="${section}"
            aria-label="${
                active
                    ? "Verwijder habitat uit favorieten"
                    : "Voeg habitat toe aan favorieten"
            }"
            title="${
                active
                    ? "Verwijder uit favorieten"
                    : "Voeg toe aan favorieten"
            }"
        >
            ${active ? "❤️" : "🤍"}
        </button>
    `;
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
        getFavorites();


    count.textContent =
        favorites.length;


    const filtered =
        favorites.filter((favorite) => {

            if (!searchValue) {
                return true;
            }

            return favorite.name
                .toLowerCase()
                .includes(searchValue);
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


    const pokemonFavorites =
        filtered.filter(
            (favorite) =>
                favorite.favoriteType !== "habitat"
        );


    const habitatFavorites =
        filtered.filter(
            (favorite) =>
                favorite.favoriteType === "habitat"
        );


    let html = "";


    /* =====================================================
       POKEMON
       ===================================================== */

    if (pokemonFavorites.length) {

        html += `
            <div class="floating-favorites-group">

                <h4 class="floating-favorites-group-title">
                    🔴 Pokémon
                </h4>
        `;


        html += pokemonFavorites
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


        html += `
            </div>
        `;
    }


    /* =====================================================
       HABITATS
       ===================================================== */

    if (habitatFavorites.length) {

        html += `
            <div class="floating-favorites-group">

                <h4 class="floating-favorites-group-title">
                    🌿 Habitats
                </h4>
        `;


        html += habitatFavorites
            .map((favorite) => {

                const sectionLabel =
                    favorite.section === "dlc"
                        ? "🫧 DLC"
                        : "🌿 Hoofdspel";


                return `
                    <div class="floating-favorite-item">

                        <a
                            href="habitats.html"
                            class="floating-favorite-link"
                        >

                            <span class="floating-favorite-number">
                                ${sectionLabel}
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


        html += `
            </div>
        `;
    }


    list.innerHTML = html;


    /* =====================================================
       VERWIJDERKNOPPEN
       ===================================================== */

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


                    /* Pokémon-hartjes bijwerken */

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


                    /* Habitat-hartjes bijwerken */

                    document
                        .querySelectorAll(".habitat-favorite-button")
                        .forEach((favoriteButton) => {

                            const id =
                                `habitat-${favoriteButton.dataset.habitatSection}-${favoriteButton.dataset.habitatName}`;


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
   ZWEVEND HARTJE VERSLEEPBAAR MAKEN
   ========================================================= */

function makeFloatingFavoritesDraggable() {

    const wrapper =
        document.getElementById("floatingFavoritesPanel");

    const button =
        document.getElementById("floatingFavoritesToggle");


    if (!wrapper || !button) {
        return;
    }


    /* Eerder gekozen positie terugzetten */

    const savedPosition =
        localStorage.getItem(
            "nlpokopia-favorites-position"
        );


    if (savedPosition) {

        try {

            const position =
                JSON.parse(savedPosition);


            wrapper.style.left =
                `${position.x}px`;

            wrapper.style.top =
                `${position.y}px`;

            wrapper.style.right =
                "auto";

            wrapper.style.bottom =
                "auto";

            wrapper.style.transform =
                "none";

        } catch (error) {

            console.error(
                "Favorietenpositie kon niet worden geladen.",
                error
            );

        }

    }


    let dragging = false;

    let moved = false;

    let offsetX = 0;
    let offsetY = 0;


    button.addEventListener(
        "pointerdown",
        (event) => {

            /*
             * Alleen primaire muisknop.
             */

            if (
                event.pointerType === "mouse" &&
                event.button !== 0
            ) {
                return;
            }


            const rect =
                wrapper.getBoundingClientRect();


            dragging = true;
            moved = false;


            offsetX =
                event.clientX - rect.left;

            offsetY =
                event.clientY - rect.top;


            button.setPointerCapture(
                event.pointerId
            );

        }
    );


    button.addEventListener(
        "pointermove",
        (event) => {

            if (!dragging) {
                return;
            }


            let x =
                event.clientX - offsetX;

            let y =
                event.clientY - offsetY;


            /*
             * Binnen het scherm houden.
             */

            const maxX =
                window.innerWidth -
                button.offsetWidth;

            const maxY =
                window.innerHeight -
                button.offsetHeight;


            x = Math.max(
                0,
                Math.min(x, maxX)
            );


            y = Math.max(
                0,
                Math.min(y, maxY)
            );


            /*
             * Pas na een kleine beweging
             * behandelen als slepen.
             */

            if (
                Math.abs(
                    event.movementX
                ) > 1 ||
                Math.abs(
                    event.movementY
                ) > 1
            ) {
                moved = true;
            }


            wrapper.style.left =
                `${x}px`;

            wrapper.style.top =
                `${y}px`;

            wrapper.style.right =
                "auto";

            wrapper.style.bottom =
                "auto";

            wrapper.style.transform =
                "none";

        }
    );


    button.addEventListener(
        "pointerup",
        (event) => {

            if (!dragging) {
                return;
            }


            dragging = false;


            button.releasePointerCapture(
                event.pointerId
            );


            const rect =
                wrapper.getBoundingClientRect();


            localStorage.setItem(
                "nlpokopia-favorites-position",
                JSON.stringify({
                    x: rect.left,
                    y: rect.top
                })
            );


            /*
             * Voorkomen dat het paneel opent
             * wanneer iemand alleen het hartje
             * heeft versleept.
             */

            if (moved) {

                const stopClick =
                    (clickEvent) => {

                        clickEvent.preventDefault();
                        clickEvent.stopImmediatePropagation();

                    };


                button.addEventListener(
                    "click",
                    stopClick,
                    {
                        once: true,
                        capture: true
                    }
                );

            }

        }
    );

}


/* =========================================================
   START
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        createFloatingFavoritesPanel();

        makeFloatingFavoritesDraggable();

    }
);
