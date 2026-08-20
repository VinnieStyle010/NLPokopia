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
        specialties: pokemon.specialties ?? [],

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
function checkPokemonDexComplete() {
    const numbers = pokemonData.map((pokemon) => pokemon.number);

    const missingNumbers = [];

    for (let number = 1; number <= 300; number++) {
        if (!numbers.includes(number)) {
            missingNumbers.push(number);
        }
    }

    if (missingNumbers.length === 0) {
        console.log("✅ Pokopia Pokédex compleet: #001 t/m #300 aanwezig.");
    } else {
        console.warn(
            "⚠️ Ontbrekende Pokopia-nummers:",
            missingNumbers.map((number) =>
                `#${String(number).padStart(3, "0")}`
            )
        );
    }

    console.log(`Totaal aantal Pokémon-entries: ${pokemonData.length}`);
}

checkPokemonDexComplete();
