const app = document.getElementById("app");

function renderPokemon() {
  app.innerHTML = "";

  pokemonData.forEach((pokemon) => {
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

renderPokemon();
