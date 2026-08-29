const habitatApp = document.getElementById("habitatApp");
const habitatSearch = document.getElementById("habitatSearch");

const habitatTabs = document.querySelectorAll(".habitat-tab");

const habitatSectionBadge =
    document.getElementById("habitatSectionBadge");

const habitatSectionTitle =
    document.getElementById("habitatSectionTitle");

const habitatSectionText =
    document.getElementById("habitatSectionText");


/* =========================================================
   HUIDIGE SECTIE
   ========================================================= */

let currentSection = "base";


/* =========================================================
   HULPFUNCTIE - HABITAT OPSPLITSEN
   ========================================================= */

function splitHabitats(habitatText) {
    if (!habitatText) return [];

    return habitatText
        // Alleen splitsen tussen twee volledige habitats.
        // Dus WEL:
        // Hoog gras (Tall Grass) / Bloemenveld (Field of Flowers)
        //
        // Maar NIET:
        // Amped / Low Key-rockpodium (Amped / Low Key Rock Stage)
        .split(/(?<=\))\s*\/\s*(?=[^()]+\()/)

        .map((habitat) => habitat.trim())

        // Eventuele losse rommel zoals A) of B) niet tonen
        .filter((habitat) =>
            habitat &&
            !/^[A-Z]\)$/i.test(habitat)
        );
}
/* =========================================================
   BENODIGDHEDEN VAN EEN HABITAT
   ========================================================= */

function getHabitatRequirements(pokemonList, habitatName) {

    for (const pokemon of pokemonList) {

        if (!pokemon.requirements) continue;

        const habitats = splitHabitats(pokemon.habitat);

        if (!habitats.includes(habitatName)) continue;

        const requirementsText = pokemon.requirements;

        /*
           Zoek het gedeelte dat bij deze habitat hoort.

           Voorbeeld:
           Hoog gras (Tall Grass): Hoog gras (Tall Grass) ×4
        */

        const startText = `${habitatName}:`;
        const startIndex = requirementsText.indexOf(startText);

        if (startIndex === -1) continue;

        let result =
            requirementsText.substring(
                startIndex + startText.length
            );

        /*
           Als daarna nog een andere habitat komt met "OF",
           pakken we alleen het eerste gedeelte.
        */

        if (result.includes(" OF ")) {
            result = result.split(" OF ")[0];
        }

        return result
            .split(";")
            .map((item) => item.trim())
            .filter(Boolean);
    }

    return [];
}

/* =========================================================
   HOOFD-POKEDEX DATA
   ========================================================= */

function getBasePokemon() {
    return pokemonData.filter((pokemon) => {
        return pokemon.dlc === false &&
               pokemon.event !== true;
    });
}


/* =========================================================
   BUBBLY BASIN DATA
   ========================================================= */

function getDlcPokemon() {
    return pokemonDLC.filter((pokemon) => {
        return pokemon.dlc === true;
    });
}


/* =========================================================
   HABITATS VERZAMELEN
   ========================================================= */

function buildHabitatList(pokemonList) {
    const habitatMap = new Map();

    pokemonList.forEach((pokemon) => {

        const habitats = splitHabitats(pokemon.habitat);

        habitats.forEach((habitat) => {

            if (!habitatMap.has(habitat)) {
                habitatMap.set(habitat, []);
            }

            habitatMap.get(habitat).push(pokemon);
        });

    });

    return [...habitatMap.entries()]
        .map(([name, pokemon]) => {
            return {
                name,
                pokemon
            };
        })
        .sort((a, b) =>
            a.name.localeCompare(b.name, "nl")
        );
}


/* =========================================================
   POKEMON NUMMER
   ========================================================= */

function formatPokemonNumber(pokemon) {
    return String(pokemon.number).padStart(3, "0");
}


/* =========================================================
   DETAIL URL
   ========================================================= */

function getPokemonUrl(pokemon) {
    const section =
        pokemon.dlc === true
            ? "dlc"
            : pokemon.event === true
                ? "event"
                : "base";

    return `pokemon.html?section=${section}&number=${pokemon.number}`;
}


/* =========================================================
   HABITAT KAART
   ========================================================= */

function createHabitatCard(habitat) {

    const pokemonList =
        currentSection === "dlc"
            ? getDlcPokemon()
            : getBasePokemon();


    const requirements =
        getHabitatRequirements(
            pokemonList,
            habitat.name
        );


    const requirementsHtml = requirements.length
        ? requirements
            .map((item) => {

                return `
                    <div class="habitat-requirement-item">

                        <span class="requirement-icon">
                            🧱
                        </span>

                        <span>
                            ${item}
                        </span>

                    </div>
                `;

            })
            .join("")
        : `
            <div class="habitat-requirement-item">
                <span class="requirement-icon">ℹ️</span>

                <span>
                    Geen benodigdheden vermeld
                    (No requirements listed)
                </span>
            </div>
        `;


    const pokemonLinks = habitat.pokemon
        .map((pokemon) => {

            return `
                <a
                    class="habitat-pokemon-link"
                    href="${getPokemonUrl(pokemon)}"
                >

                    <span class="habitat-pokemon-number">
                        #${formatPokemonNumber(pokemon)}
                    </span>

                    <span>
                        ${pokemon.name}
                    </span>

                </a>
            `;

        })
        .join("");


    return `
        <article class="habitat-overview-card">

        ${createHabitatFavoriteButton(habitat.name, currentSection)}


            <!-- HABITAT -->

            <div class="habitat-card-heading">

                <span class="habitat-card-icon">
                    ${currentSection === "dlc" ? "🫧" : "🌿"}
                </span>

                <div>

                    <h3>
                        ${habitat.name}
                    </h3>

                    <small>
                        ${habitat.pokemon.length} Pokémon
                    </small>

                </div>

            </div>


            <!-- BENODIGD -->

            <div class="habitat-requirements">

                <h4>
                    🧰 Benodigdheden (Requirements)
                </h4>

                <div class="habitat-requirements-list">

                    ${requirementsHtml}

                </div>

            </div>


            <!-- POKEMON -->

            <div class="habitat-pokemon-section">

                <h4>
                    🔴 Pokémon die je hier kunt vinden
                    (Pokémon Found Here)
                </h4>

                <div class="habitat-pokemon-list">

                    ${pokemonLinks}

                </div>

            </div>


        </article>
    `;
}


/* =========================================================
   PAGINATITEL AANPASSEN
   ========================================================= */

function updateSectionText() {

    if (currentSection === "dlc") {

        habitatSectionBadge.textContent =
            "🫧 Bubbly Basin DLC";

        habitatSectionTitle.textContent =
            "Habitats uit Bubbly Basin";

        habitatSectionText.textContent =
            "Bekijk de leefgebieden die onderdeel zijn van de Bubbly Basin DLC.";

        return;
    }


    habitatSectionBadge.textContent =
        "🔴 Hoofd-Pokédex";

    habitatSectionTitle.textContent =
        "Habitats uit het hoofdspel";

    habitatSectionText.textContent =
        "Bekijk alle leefgebieden die bij de Hoofd-Pokédex horen.";
}


/* =========================================================
   HABITATS TONEN
   ========================================================= */

function renderHabitats() {

    const pokemonList =
        currentSection === "dlc"
            ? getDlcPokemon()
            : getBasePokemon();

    const habitats =
        buildHabitatList(pokemonList);


    const searchValue =
        habitatSearch.value
            .trim()
            .toLowerCase();


    const filtered = habitats.filter((habitat) => {

        if (!searchValue) return true;


        const habitatMatch =
            habitat.name
                .toLowerCase()
                .includes(searchValue);


        const pokemonMatch =
            habitat.pokemon.some((pokemon) =>
                pokemon.name
                    .toLowerCase()
                    .includes(searchValue)
            );


        return habitatMatch || pokemonMatch;
    });


    if (!filtered.length) {

        habitatApp.innerHTML = `
            <section class="detail-block">

                <h2>
                    Geen habitats gevonden
                </h2>

                <p>
                    Probeer een andere habitatnaam of Pokémon.
                </p>

            </section>
        `;

        return;
    }


    habitatApp.innerHTML =
        filtered
            .map(createHabitatCard)
            .join("");
}


/* =========================================================
   TABBLADEN
   ========================================================= */

habitatTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        habitatTabs.forEach((button) => {
            button.classList.remove("active");
        });


        tab.classList.add("active");


        currentSection =
            tab.dataset.section;


        habitatSearch.value = "";


        updateSectionText();

        renderHabitats();

    });

});


/* =========================================================
   ZOEKEN
   ========================================================= */

habitatSearch.addEventListener(
    "input",
    renderHabitats
);


/* =========================================================
   START
   ========================================================= */

updateSectionText();

renderHabitats();
