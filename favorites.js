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
