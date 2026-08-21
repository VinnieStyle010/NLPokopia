function normalizePokemon(pokemon) {
    return {
        number: pokemon.number,
        name: pokemon.name,
        type: pokemon.type || [],

        game: pokemon.game ?? "",
        dlc: pokemon.dlc ?? null,
        event: pokemon.event ?? false,

        location: pokemon.location ?? "",
        area: pokemon.area ?? "",
        habitat: pokemon.habitat ?? "",

        obtainMethod: pokemon.obtainMethod ?? "",
        requirements: pokemon.requirements ?? "",
        specialties: pokemon.specialties ?? [],

        evolvesFrom: pokemon.evolvesFrom ?? "",
        evolvesInto: pokemon.evolvesInto ?? "",

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

    function sectionOrder(pokemon) {
        if (pokemon.event === true) return 1;
        if (pokemon.dlc === true) return 2;
        if (pokemon.dlc === false) return 0;

        return 3;
    }

    const sectionA = sectionOrder(a);
    const sectionB = sectionOrder(b);

    if (sectionA !== sectionB) {
        return sectionA - sectionB;
    }

    return a.number - b.number;
});


function checkDuplicatePokemonNumbers() {
    const seenNumbers = new Set();

    pokemonData.forEach((pokemon) => {

        let section = "unknown";

        if (pokemon.event === true) {
            section = "event";
        }
        else if (pokemon.dlc === true) {
            section = "dlc";
        }
        else if (pokemon.dlc === false) {
            section = "base";
        }

        const key = `${section}-${pokemon.number}`;

        if (seenNumbers.has(key)) {
            console.warn(
                `Dubbel Pokémon-nummer gevonden: ${section.toUpperCase()} #${String(
                    pokemon.number
                ).padStart(3, "0")} ${pokemon.name}`
            );
        }

        seenNumbers.add(key);
    });
}


checkDuplicatePokemonNumbers();
