const app = document.getElementById("app");
const searchInput = document.getElementById("searchInput");

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

function renderPokemon(list) {
    app.innerHTML = "";

    if (list.length === 0) {
        app.innerHTML = "<p>Geen Pokémon gevonden.</p>";
        return;
    }

    list.forEach((pokemon) => {
        const card = document.createElement("section");

        card.innerHTML = `
            <h2>#${String(pokemon.number).padStart(3, "0")} ${pokemon.name}</h2>

            <p><strong>Type:</strong> ${pokemon.type.join(" / ")}</p>
            <p><strong>Game:</strong> ${pokemon.game}</p>
            <p><strong>Locatie:</strong> ${pokemon.location || "Nog niet ingevuld"}</p>
            <p><strong>Habitat:</strong> ${pokemon.habitat || "Nog niet ingevuld"}</p>
            <p><strong>Benodigdheden:</strong> ${pokemon.requirements || "Geen"}</p>
            <p><strong>DLC:</strong> ${pokemon.dlc ? "Ja" : "Nee"}</p>
            <p><strong>NLPokopia-tip:</strong> ${pokemon.tip || "Nog niet ingevuld"}</p>

            <div class="video-links">
                <h3>Zoek video's</h3>

                <a
                    href="${createSearchUrl("youtube", pokemon.name)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    YouTube
                </a>

                <a
                    href="${createSearchUrl("tiktok", pokemon.name)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    TikTok
                </a>

                <a
                    href="${createSearchUrl("instagram", pokemon.name)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </a>

                <a
                    href="${createSearchUrl("facebook", pokemon.name)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Facebook
                </a>

                <a
                    href="${createSearchUrl("twitter", pokemon.name)}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
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
.video-links {
    margin-top: 18px;
    padding-top: 14px;
    border-top: 1px solid #ddd;
}

.video-links h3 {
    margin: 0 0 10px;
    font-size: 16px;
}

.video-links a {
    display: inline-block;
    margin: 4px 6px 4px 0;
    padding: 8px 12px;
    background: #222;
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-size: 14px;
}

.video-links a:hover {
    opacity: 0.8;
}
renderPokemon(pokemonData);
