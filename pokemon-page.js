const detailContainer = document.getElementById("pokemonDetail");

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
        <div class="detail-row">
            <strong>${label}</strong>
            <span>${value}</span>
        </div>
    `;
}

function getSection(pokemon) {
    if (pokemon.event === true) return "event";
    if (pokemon.dlc === true) return "dlc";
    return "base";
}

function getStatus(pokemon) {
    if (pokemon.event === true) return "Event Pokémon";
    if (pokemon.dlc === true) return "Bubbly Basin DLC";
    if (pokemon.dlc === false) return "Hoofd-Pokédex";
    return "Nog onbekend";
}

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

function findPokemon() {
    const params = new URLSearchParams(window.location.search);

    const wantedSection = params.get("section");
    const wantedNumber = Number(params.get("number"));

    if (!wantedSection || !wantedNumber) {
        return null;
    }

    return pokemonData.find((pokemon) => {
        return (
            getSection(pokemon) === wantedSection &&
            pokemon.number === wantedNumber
        );
    });
}

function renderPokemonPage() {
    const pokemon = findPokemon();

    if (!pokemon) {
        detailContainer.innerHTML = `
            <section class="pokemon-detail-page">
                <h2>Pokémon niet gevonden</h2>

                <p>
                    Deze Pokémon kon niet worden gevonden.
                </p>

                <a class="back-button" href="index.html">
                    ← Terug naar NLPokopia
                </a>
            </section>
        `;

        return;
    }

    document.title = `${pokemon.name} | NLPokopia`;

    detailContainer.innerHTML = `
        <section class="pokemon-detail-page">

            <a class="back-button" href="index.html">
                ← Terug naar alle Pokémon
            </a>

            <div class="pokemon-detail-hero">

                <img
                    class="pokemon-detail-image"
                    src="${getPokemonImage(pokemon.name)}"
                    alt="${pokemon.name}"
                >

                <div class="pokemon-detail-title">

                    <p class="pokemon-status">
                        ${getStatus(pokemon)}
                    </p>

                    <h1>
                        Nr: ${String(pokemon.number).padStart(3, "0")}
                        ${pokemon.name}
                    </h1>

                    <p class="pokemon-types">
                        ${pokemon.type.join(" / ")}
                    </p>

                </div>

            </div>


            <section class="detail-block">

                <h2>📍 Waar vind je ${pokemon.name}?</h2>

                ${infoRow("Spel (Game)", pokemon.game)}
                ${infoRow("Locatie (Location)", pokemon.location)}
                ${infoRow("Gebied (Area)", pokemon.area)}
                ${infoRow("Habitat", pokemon.habitat)}

            </section>


            <section class="detail-block">

                <h2>🛠️ Hoe krijg je ${pokemon.name}?</h2>

                ${infoRow(
                    "Hoe te verkrijgen (How to obtain)",
                    pokemon.obtainMethod
                )}

                ${infoRow(
                    "Benodigdheden (Requirements)",
                    pokemon.requirements
                )}

            </section>


            <section class="detail-block">

                <h2>⭐ Pokopia-vaardigheden</h2>

                ${infoRow(
                    "Pokopia-vaardigheden (Specialties)",
                    pokemon.specialties.length
                        ? pokemon.specialties.join(" / ")
                        : "Geen vaardigheid bekend"
                )}

            </section>


            ${
                pokemon.evolvesFrom || pokemon.evolvesInto
                    ? `
                    <section class="detail-block">

                        <h2>🔄 Pokémon-familie</h2>

                        ${infoRow(
                            "Evolueert van (Evolves from)",
                            pokemon.evolvesFrom
                        )}

                        ${infoRow(
                            "Evolueert naar (Evolves into)",
                            pokemon.evolvesInto
                        )}

                        <p class="small-note">
                            Pokémon evolueren niet op de gewone manier
                            binnen Pokémon Pokopia. Deze informatie laat
                            vooral zien bij welke Pokémon-familie deze
                            Pokémon hoort.
                        </p>

                    </section>
                    `
                    : ""
            }


            <section class="detail-block personal-tip">

                <h2>💡 Persoonlijke tip</h2>

                <p>
                    ${pokemon.tip || "Nog geen persoonlijke tip beschikbaar."}
                </p>

            </section>


            <section class="detail-block">

                <h2>🎥 Zoek video's over ${pokemon.name}</h2>

                <div class="video-links">

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

            </section>

        </section>
    `;
}

renderPokemonPage();
