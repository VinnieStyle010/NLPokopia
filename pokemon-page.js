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

function getPokemonFamily(pokemon) {
    const family = [];
    let current = pokemon;

    while (current.evolvesFrom) {
        const previous = pokemonData.find(
            (p) =>
                p.name === current.evolvesFrom &&
                getSection(p) === getSection(pokemon)
        );

        if (!previous) break;

        current = previous;
    }

    while (current) {
        family.push(current);

        if (!current.evolvesInto) break;

        const next = pokemonData.find(
            (p) =>
                p.name === current.evolvesInto &&
                getSection(p) === getSection(pokemon)
        );

        if (!next) break;

        current = next;
    }

    return family;
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

const primaryType = pokemon.type[0]
    .split(" ")[0]
    .toLowerCase();

const secondaryType = pokemon.type[1]
    ? pokemon.type[1].split(" ")[0].toLowerCase()
    : primaryType;

detailContainer.className =
    `type-${primaryType} secondary-${secondaryType}`;

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

<div class="pokemon-types">
    ${pokemon.type
        .map(type => {
            const typeClass = type
                .split(" ")[0]
                .toLowerCase();

            return `<span class="type-badge type-badge-${typeClass}">${type}</span>`;
        })
        .join("")}
</div>

                            </div>

            </div>


            <section class="detail-block personal-tip tip-with-trainer">

                <div class="tip-trainer">
                    <img
                        src="tip-trainer.png"
                        alt="NLPokopia tipgever"
                    >
                </div>

                <div class="tip-content">
                    <h2>💡 Persoonlijke tip</h2>

                    <p>
                        ${pokemon.tip || "Nog geen persoonlijke tip beschikbaar."}
                    </p>
                </div>

            </section>

            <section class="detail-block location-block">

                <h2>📍 Waar vind je ${pokemon.name}?</h2>

                ${infoRow("Spel (Game)", pokemon.game)}
                ${infoRow("Locatie (Location)", pokemon.location)}
                ${infoRow("Gebied (Area)", pokemon.area)}
                ${infoRow("Habitat", pokemon.habitat)}

            </section>


            <section class="detail-block obtain-block">

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


            <section class="detail-block skills-block">

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
            <section class="detail-block family-block">
                <h2>🔗 Pokémon-familie</h2>

                <div class="evolution-family">
                    ${getPokemonFamily(pokemon)
                        .map((familyPokemon, index, family) => `
                            <div class="evolution-member ${
                                familyPokemon.name === pokemon.name
                                    ? "current-pokemon"
                                    : ""
                            }">
                                <img
                                    src="${getPokemonImage(familyPokemon.name)}"
                                    alt="${familyPokemon.name}"
                                >
                                <strong>${familyPokemon.name}</strong>
                            </div>

                            ${
                                index < family.length - 1
                                    ? `<span class="evolution-arrow">→</span>`
                                    : ""
                            }
                        `)
                        .join("")}
                </div>

                <p class="small-note">
                    Pokémon evolueren niet op de gewone manier binnen Pokémon Pokopia.
                    Deze rij laat zien bij welke Pokémon-familie deze Pokémon hoort.
                </p>
            </section>
        `
        : ""
}


            <section class="detail-block">

                <h2>🎥 Zoek video's over ${pokemon.name}</h2>

<div class="video-links">

    <a
        class="video-button youtube"
        href="${createSearchUrl("youtube", pokemon.name)}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Zoek ${pokemon.name} op YouTube"
    >
        <span class="video-icon">
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#FF0000" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8Z"/>
        <path fill="#FFFFFF" d="m9.6 15.6 6.3-3.6-6.3-3.6v7.2Z"/>
    </svg>
</span>
        <span>YouTube</span>
    </a>

    <a
        class="video-button tiktok"
        href="${createSearchUrl("tiktok", pokemon.name)}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Zoek ${pokemon.name} op TikTok"
    >
<span class="video-icon">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#25F4EE" d="M12.5 2h3.2c.3 2.2 1.6 3.8 4.3 4.3v3.2c-1.7-.1-3.2-.6-4.3-1.4v6.5a6.1 6.1 0 1 1-5.3-6v3.3a2.9 2.9 0 1 0 2.1 2.7V2z"/>
    <path fill="#FE2C55" d="M11.7 2h2.1c.2 2.8 1.8 5 5.4 5.7v2.1c-1.7-.1-3.2-.6-4.3-1.4v6.5a6.1 6.1 0 0 1-6.1 6.1c-1.2 0-2.3-.3-3.2-.9a6.1 6.1 0 0 0 9.3-5.2V8.4c1.1.8 2.6 1.3 4.3 1.4V8.5c-4.5-.7-7.1-3.2-7.5-6.5z"/>
    <path fill="#000000" d="M12.5 7.9v6.7a2.9 2.9 0 1 1-2.1-2.7V8.6a6.1 6.1 0 1 0 5.3 6V8.1c-1.3-.9-2.4-2.3-3.2-4.1v3.9z"/>
  </svg>
</span>
<span>TikTok</span>>
    </a>

    <a
        class="video-button instagram"
        href="${createSearchUrl("instagram", pokemon.name)}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Zoek ${pokemon.name} op Instagram"
    >
<span class="video-icon">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <linearGradient id="instagram-gradient" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stop-color="#FFDC80"/>
        <stop offset="35%" stop-color="#F77737"/>
        <stop offset="65%" stop-color="#E1306C"/>
        <stop offset="100%" stop-color="#833AB4"/>
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5"
          fill="url(#instagram-gradient)"/>
    <circle cx="12" cy="12" r="4.5"
            fill="none" stroke="white" stroke-width="2"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
  </svg>
</span>
<span>Instagram</span>
    </a>

    <a
        class="video-button facebook"
        href="${createSearchUrl("facebook", pokemon.name)}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Zoek ${pokemon.name} op Facebook"
    >
<span class="video-icon">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="#1877F2"/>
    <path fill="#FFFFFF"
      d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.3v3h2.8v8h3.4z"/>
  </svg>
</span>
<span>Facebook</span>
    </a>

    <a
        class="video-button twitter"
        href="${createSearchUrl("twitter", pokemon.name)}"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Zoek ${pokemon.name} op X"
    >
<span class="video-icon">
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#000000"
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
</span>
<span>X</span>
    </a>

</div>

            </section>

        </section>
    `;
}

renderPokemonPage();
