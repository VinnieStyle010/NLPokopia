const detailContainer = document.getElementById("pokemonDetail");

function getPokemonImage(name) {

    const imageNames = {
        "Paldean Wooper": "wooper-paldean",

        "Heat Rotom": "rotom-heat",
        "Wash Rotom": "rotom-wash",
        "Frost Rotom": "rotom-frost",
        "Fan Rotom": "rotom-fan",
        "Mow Rotom": "rotom-mow",

        // Pokopia-naam: voorlopig normale Rotom-afbeelding gebruiken
        "Stereo Rotom": "rotom"
    };

    const imageName =
        imageNames[name] ||
        name
            .toLowerCase()
            .replaceAll(" ", "-")
            .replaceAll("'", "")
            .replaceAll(".", "");

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
    ${pokemon.name}
</h1>

<p class="pokemon-number">
    Nr: ${String(pokemon.number).padStart(3, "0")}
</p>

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

    <h2>🗺️ Op zoek naar ${pokemon.name}!</h2>

    <p class="location-intro">
        Hier zie je precies waar, wanneer en hoe je ${pokemon.name} kunt vinden.
    </p>

    <div class="location-grid">

        <div class="location-card location-search">
            <span class="location-icon">📍</span>

            <div>
                <strong>Waar moet je zoeken?</strong>
                <small>Locatie (Location)</small>
                <span>${formatEnglishText(formatListText(pokemon.location))}</span>
            </div>
        </div>

        <div class="location-card location-time">
            <span class="location-icon">☀️</span>

            <div>
                <strong>Wanneer kun je ${pokemon.name} vinden?</strong>
                <small>Tijd & weer (Time & Weather)</small>
               <span class="area-info">${formatAreaText(pokemon.area)}</span>
            </div>
        </div>

        <div class="location-card location-habitat">
            <span class="location-icon">🌱</span>

            <div>
               <strong>Hoe moet je het bouwen?</strong>
                <small>Habitat</small>
                <span>${formatEnglishText(formatListText(pokemon.habitat))}</span>
            </div>
        </div>

        <div class="location-card location-skills">
            <span class="location-icon">⭐</span>

            <div>
                <strong>Wat kan ${pokemon.name}?</strong>
                <small>Pokopia-vaardigheden (Specialties)</small>
                <span>
                    ${
                    pokemon.specialties.length
    ? formatEnglishText(
        pokemon.specialties.join("<br>")
      )
    : "Geen vaardigheid bekend"
                    }
                </span>
            </div>
        </div>

    </div>

</section>

<section class="detail-block obtain-block">

    <h2>🎯 Zo krijg je ${pokemon.name}!</h2>

    <p class="obtain-intro">
        Gevonden? Mooi! Nu gaan we kijken wat je moet doen om ${pokemon.name} te krijgen.
    </p>

    <div class="obtain-grid">

        <div class="obtain-card">
            <span class="obtain-icon">👣</span>

            <div>
                <strong>Wat moet je doen?</strong>
                <small>Hoe te verkrijgen (How to obtain)</small>
                <span>
                    ${formatEnglishText(formatListText(pokemon.obtainMethod))}
                </span>
            </div>
        </div>

        <div class="obtain-card">
            <span class="obtain-icon">🎒</span>

            <div>
                <strong>Wat heb je nodig?</strong>
                <small>Benodigdheden (Requirements)</small>
                <span>
                   ${formatEnglishText(formatRequirements(pokemon.requirements))}
                </span>
            </div>
        </div>

    </div>

</section>


${
    pokemon.evolvesFrom || pokemon.evolvesInto
        ? `
            <section class="detail-block family-block">
                <h2>🔗 Pokémon-familie</h2>

                <div class="evolution-family">
                    ${getPokemonFamily(pokemon)
                        .map((familyPokemon, index, family) => `
                        <a
    class="evolution-member ${
        familyPokemon.name === pokemon.name
            ? "current-pokemon"
            : ""
    }"
    href="pokemon.html?section=${getSection(familyPokemon)}&number=${familyPokemon.number}"
>
    <img
        src="${getPokemonImage(familyPokemon.name)}"
        alt="${familyPokemon.name}"
    >
    <strong>${familyPokemon.name}</strong>
<span class="family-number">
    Nr: ${String(familyPokemon.number).padStart(3, "0")}
</span>
</a>

                            ${
                                index < family.length - 1
                                    ? `<span class="evolution-arrow">→</span>`
                                    : ""
                            }
                        `)
                       .join("")}
</div>
<div class="evolution-dots">
    ${getPokemonFamily(pokemon)
        .map((familyPokemon, index) => `
            <button
                class="evolution-dot ${
                    familyPokemon.name === pokemon.name
                        ? "active"
                        : ""
                }"
                type="button"
                data-index="${index}"
                aria-label="Ga naar ${familyPokemon.name}"
            ></button>
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
<section class="detail-block game-info-block">

    <h2>🎮 Spelinformatie</h2>

    <p class="game-info-intro">
        Hier zie je in welk spel en in welk onderdeel je ${pokemon.name} kunt vinden.
    </p>

    <div class="game-info-grid">

        <div class="game-info-card game-card">
            <span class="game-info-icon">🎮</span>

            <div>
                <strong>Waar speel je?</strong>
                <small>Spel (Game)</small>
                <span>${pokemon.game || "Pokémon Pokopia"}</span>
            </div>
        </div>

        <div class="game-info-card edition-card">
            <span class="game-info-icon">
                ${pokemon.event === true ? "🎉" : pokemon.dlc === true ? "🫧" : "📘"}
            </span>

            <div>
                <strong>Waar hoort ${pokemon.name} bij?</strong>
                <small>Onderdeel (Section)</small>
                <span>${getStatus(pokemon)}</span>
            </div>
        </div>

    </div>

</section>

            <section class="detail-block">

                <section class="detail-block social-block">

    <div class="social-heading">
        <div>
            <h2>🎥 Video's & Social</h2>
            <p>
                Bekijk video's, tips en berichten over ${pokemon.name}.
            </p>
        </div>

        <span class="social-pokemon-name">
            ${pokemon.name}
        </span>
    </div>

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
function formatListText(value) {
    if (!value) return "Nog onbekend";

    return value
        .replace(/\s+\/\s+/g, "<br>")
        .replace(/\s+OF\s+/g, '<br><br><strong class="or-divider">OF</strong><br><br>')
        .replace(/;\s*/g, "<br>");
}
function formatRequirements(value) {
    if (!value) return "Niets bijzonders nodig";

    return value
        .replace(
            /\s+OF\s+/g,
            '<br><br><strong class="or-divider">OF</strong><br><br>'
        )
        .replace(/\s+\/\s+/g, "<br>")
        .replace(
            /(^|<br><br>|<br>)([^<]+?):\s*/g,
            '$1<strong class="requirement-title">$2:</strong><br>'
        )
        .replace(/;\s*/g, "<br>");
}
function formatEnglishText(value) {
    if (!value) return "Nog onbekend";

    return value.replace(
        /\(([^)]+)\)/g,
        '<span class="english-text">($1)</span>'
    );
}
function formatAreaText(value) {
    if (!value) return "Nog onbekend";

    return formatEnglishText(value)
        .replace(/\s*\|\s*/g, '<div class="area-space"></div>');
}
renderPokemonPage();
function setupEvolutionSwipe() {
    const slider = document.querySelector(".evolution-family");
    const cards = document.querySelectorAll(".evolution-member");
    const dots = document.querySelectorAll(".evolution-dot");

    if (!slider || cards.length === 0 || dots.length === 0) return;

    function setActiveDot(index) {
        dots.forEach((dot, dotIndex) => {
            dot.classList.toggle("active", dotIndex === index);
        });
    }

    // Tik op een bolletje
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            cards[index].scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });

            setActiveDot(index);
        });
    });

    // Bolletje veranderen tijdens swipen
    slider.addEventListener("scroll", () => {
        const sliderCenter =
            slider.scrollLeft + slider.clientWidth / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        cards.forEach((card, index) => {
            const cardCenter =
                card.offsetLeft + card.offsetWidth / 2;

            const distance =
                Math.abs(sliderCenter - cardCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        setActiveDot(closestIndex);
    });
}

setupEvolutionSwipe();
