const app = document.getElementById("app");
const searchInput = document.getElementById("searchInput");
const gameFilter = document.getElementById("gameFilter");
const typeFilter = document.getElementById("typeFilter");
function createSearchUrl(platform, pokemonName) {
    const query = encodeURIComponent(`${pokemonName} Pokemon Pokopia`);

    const urls = {
        youtube: `https://www.youtube.com/results?search_query=${query}`,
        tiktok: `https://www.tiktok.com/search?q=${query}`,
        instagram: `https://www.instagram.com/explore/search/keyword/?q=${query}`,
        facebook: `https://www.facebook.com/search/top?q=${query}`,
        twitter: `https://x.com/search?q=${query}`
    };

    return urls[platform];
}

function getPokemonImage(name) {
    const imageName = name
        .toLowerCase()
        .replace(/♀/g, "-f")
        .replace(/♂/g, "-m")
        .replace(/['’.]/g, "")
        .replace(/\s+/g, "-");

    return `https://img.pokemondb.net/artwork/large/${imageName}.jpg`;
}

function infoRow(label, value) {
    if (!value) return "";

    return `
        <p>
            <strong>${label}:</strong> ${value}
        </p>
    `;
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
        app.innerHTML = "<p>Geen Pokémon gevonden.</p>";
        return;
    }

    list.forEach((pokemon) => {
        const card = document.createElement("section");
        card.className = "pokemon-card";

        const section =
    pokemon.event === true
        ? "event"
        : pokemon.dlc === true
        ? "dlc"
        : "base";

card.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;

    window.location.href =
        `pokemon.html?section=${section}&number=${pokemon.number}`;
});

card.style.cursor = "pointer";

        card.innerHTML = `
            <img
                class="pokemon-image"
                src="${getPokemonImage(pokemon.name)}"
                alt="${pokemon.name}"
                loading="lazy"
            >

<h2>
    <a
        class="pokemon-detail-link"
        href="pokemon.html?section=${
            pokemon.event === true
                ? "event"
                : pokemon.dlc === true
                ? "dlc"
                : "base"
        }&number=${pokemon.number}"
    >
        #${String(pokemon.number).padStart(3, "0")}
        ${pokemon.name}
    </a>
</h2>

${infoRow("Type", pokemon.type.join(" / "))}
${infoRow("Spel (Game)", pokemon.game)}

${infoRow("Locatie (Location)", pokemon.location)}
${infoRow("Gebied (Area)", pokemon.area)}
${infoRow("Habitat", pokemon.habitat)}

${infoRow("Hoe te verkrijgen (How to obtain)", pokemon.obtainMethod)}
${infoRow("Benodigdheden (Requirements)", pokemon.requirements)}

${infoRow(
  "Pokopia-vaardigheden (Specialties)",
  pokemon.specialties.length
    ? pokemon.specialties.join(" / ")
    : ""
)}

${infoRow("Evolueert van (Evolves from)", pokemon.evolvesFrom)}
${infoRow("Evolueert naar (Evolves into)", pokemon.evolvesInto)}

<p>
    <strong>Status:</strong>
    ${
        pokemon.event === true
            ? "Event"
            : pokemon.dlc === true
            ? "DLC"
            : pokemon.dlc === false
            ? "Base Game"
            : "Nog onbekend"
    }
</p>

            ${infoRow("Persoonlijke Tip", pokemon.tip)}

            <div class="video-links">
                <h3>Zoek video's</h3>

                <a href="${createSearchUrl("youtube", pokemon.name)}" target="_blank" rel="noopener noreferrer">
                    YouTube
                </a>

                <a href="${createSearchUrl("tiktok", pokemon.name)}" target="_blank" rel="noopener noreferrer">
                    TikTok
                </a>

                <a href="${createSearchUrl("instagram", pokemon.name)}" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>

                <a href="${createSearchUrl("facebook", pokemon.name)}" target="_blank" rel="noopener noreferrer">
                    Facebook
                </a>

                <a href="${createSearchUrl("twitter", pokemon.name)}" target="_blank" rel="noopener noreferrer">
                    X
                </a>
            </div>
        `;

        app.appendChild(card);
    });
}

function filterPokemon() {
    const search = searchInput.value.trim().toLowerCase();
    const selectedGame = gameFilter.value;
    const selectedType = typeFilter.value;

    const filteredPokemon = pokemonData.filter((pokemon) => {
        const number = String(pokemon.number);
        const paddedNumber = number.padStart(3, "0");
        const name = pokemon.name.toLowerCase();

        const matchesSearch =
            name.includes(search) ||
            number.includes(search) ||
            paddedNumber.includes(search);

const matchesGame =
    selectedGame === "all" ||
    (selectedGame === "base" && pokemon.dlc === false && pokemon.event !== true) ||
    (selectedGame === "dlc" && pokemon.dlc === true) ||
    (selectedGame === "event" && pokemon.event === true) ||
    (selectedGame === "unknown" && pokemon.dlc === null && pokemon.event !== true);

        const matchesType =
            selectedType === "all" ||
            pokemon.type.includes(selectedType);

        return matchesSearch && matchesGame && matchesType;
    });

    renderPokemon(filteredPokemon);
}
searchInput.addEventListener("input", filterPokemon);
gameFilter.addEventListener("change", filterPokemon);
typeFilter.addEventListener("change", filterPokemon);
fillTypeFilter();

renderPokemon(pokemonData);
