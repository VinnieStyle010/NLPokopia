function normalizePokemon(pokemon) {
    return {
        number: pokemon.number,
        name: pokemon.name,
        type: pokemon.type || [],

        game: pokemon.game ?? "",
        dlc: pokemon.dlc ?? null,

        location: pokemon.location ?? "",
        area: pokemon.area ?? "",
        habitat: pokemon.habitat ?? "",

        obtainMethod: pokemon.obtainMethod ?? "",
        requirements: pokemon.requirements ?? "",

        evolvesFrom: pokemon.evolvesFrom ?? "",
        evolvesInto: pokemon.evolvesInto ?? "",
        evolutionMethod: pokemon.evolutionMethod ?? "",

        tip: pokemon.tip ?? ""
    };
}

const pokemonData = [
    ...pokemonKanto,
    ...pokemonExtra,
    ...pokemonDLC
]
.map(normalizePokemon)
.sort((a, b) => a.number - b.number);
function checkDuplicatePokemonNumbers() {
    const seenNumbers = new Set();

    pokemonData.forEach((pokemon) => {
        if (seenNumbers.has(pokemon.number)) {
            console.warn(
                `Dubbel Pokémon-nummer gevonden: #${pokemon.number} ${pokemon.name}`
            );
        }

        seenNumbers.add(pokemon.number);
    });
}

checkDuplicatePokemonNumbers();
