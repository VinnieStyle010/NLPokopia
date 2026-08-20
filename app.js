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

function getPokemonImage(number) {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`;
}

function infoRow(label, value) {
    if (!value) return "";

    return `
        <p>
            <strong>${label}:</strong> ${value}
        </p>
    `;
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

        card.innerHTML = `
            <img
                class="pokemon-image"
                src="${getPokemonImage(pokemon.number)}"
                alt="${pokemon.name}"
                loading="lazy"
            >

            <h2>
                #${String(pokemon.number).padStart(3, "0")}
                ${pokemon.name}
            </h2>

            ${infoRow("Type", pokemon.type.join(" / "))}
            ${infoRow("Game", pokemon.game)}
            ${infoRow("Locatie", pokemon.location)}
            ${infoRow("Habitat", pokemon.habitat)}
            ${infoRow("Benodigdheden", pokemon.requirements)}

            ${
                pokemon.dlc
                    ? `<p><strong>DLC:</strong> Ja</p>`
                    : ""
            }

            ${infoRow("NLPokopia-tip", pokemon.tip)}

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

function searchPokemon() {
    const search = searchInput.value.trim().toLowerCase();

    const filteredPokemon = pokemonData.filter((pokemon) => {
        const number = String(pokemon.number);
        const paddedNumber = number.padStart(3, "0");
        const name = pokemon.name.toLowerCase();

        return (
            name.includes(search) ||
            number.includes(search) ||
            paddedNumber.includes(search)
        );
    });

    renderPokemon(filteredPokemon);
}

searchInput.addEventListener("input", searchPokemon);

renderPokemon(pokemonData);
