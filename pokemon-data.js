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
.sort((a, b) => {

    // Hoofd-Pokédex eerst, DLC daarna
    if (a.dlc !== b.dlc) {
        return a.dlc ? 1 : -1;
    }

    return a.number - b.number;
});


function checkDuplicatePokemonNumbers() {
    const seenNumbers = new Set();

    pokemonData.forEach((pokemon) => {

        const section =
            pokemon.dlc === true
                ? "dlc"
                : "base";

        const key =
            `${section}-${pokemon.number}`;

        if (seenNumbers.has(key)) {
            console.warn(
                `Dubbel Pokémon-nummer gevonden: ${section.toUpperCase()} #${String(pokemon.number).padStart(3, "0")} ${pokemon.name}`
            );
        }

        seenNumbers.add(key);
    });
}


function checkMainDexComplete() {
    const mainNumbers = pokemonData
        .filter((pokemon) => pokemon.dlc === false)
        .map((pokemon) => pokemon.number);

    const missingNumbers = [];

    for (let number = 1; number <= 300; number++) {
        if (!mainNumbers.includes(number)) {
            missingNumbers.push(number);
        }
    }

    if (missingNumbers.length === 0) {
        console.log(
            "✅ Hoofd-Pokédex compleet: #001 t/m #300 aanwezig."
        );
    } else {
        console.warn(
            "⚠️ Ontbrekende Hoofd-Pokédex nummers:",
            missingNumbers
        );
    }
}


function checkDlcDexComplete() {
    const dlcNumbers = pokemonData
        .filter((pokemon) => pokemon.dlc === true)
        .map((pokemon) => pokemon.number);

    const missingNumbers = [];

    for (let number = 1; number <= 50; number++) {
        if (!dlcNumbers.includes(number)) {
            missingNumbers.push(number);
        }
    }

    if (missingNumbers.length === 0) {
        console.log(
            "✅ Bubbly Basin Pokédex compleet: DLC #001 t/m #050 aanwezig."
        );
    } else {
        console.warn(
            "⚠️ Ontbrekende Bubbly Basin nummers:",
            missingNumbers
        );
    }
}


checkDuplicatePokemonNumbers();
checkMainDexComplete();
checkDlcDexComplete();

console.log(
    `✅ Totaal geladen Pokémon: ${pokemonData.length}`
);
