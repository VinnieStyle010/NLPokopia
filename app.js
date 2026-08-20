const app = document.getElementById("app");
const searchInput = document.getElementById("searchInput");

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
