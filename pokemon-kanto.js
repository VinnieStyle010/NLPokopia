// NLPokopia - Hoofd-Pokédex #001 t/m #300
// Correctieronde 1: Pokopia-volgorde, types, habitats, tijden/weerscondities en specialties.
// Speciale Pokémon zonder gewone habitat blijven leeg waar verkrijgmethode nog niet individueel is geverifieerd.

const pokemonKanto = [
  {
    "number": 1,
    "name": "Bulbasaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town / Cloud Island",
    "area": "Alle tijden van de dag - zon, bewolking of regen",
    "habitat": "Tall Grass / Bench with greenery | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat om Bulbasaur te laten verschijnen.",
    "requirements": "Tall Grass: 4x Tall Grass. Bench with greenery: 2x Hedge + 1x brede zitplaats.",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Ivysaur",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin met 4 stukken Tall Grass. Dat is een eenvoudige manier om Bulbasaur naar je gebied te lokken."
  },
  {
    "number": 2,
    "name": "Ivysaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town / Cloud Island",
    "area": "Alle tijden van de dag - zon, bewolking of regen",
    "habitat": "Field of Flowers / Bench with greenery | Ideale omgeving: Bright",
    "obtainMethod": "Maak een Field of Flowers of een Bench with greenery om Ivysaur te laten verschijnen.",
    "requirements": "Field of Flowers: 8x Wildflowers.",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "Bulbasaur",
    "evolvesInto": "Venusaur",
    "evolutionMethod": "",
    "tip": "Mijn tip: bouw eerst een Field of Flowers met 8 Wildflowers als je gericht voor Ivysaur wilt gaan."
  },
  {
    "number": 3,
    "name": "Venusaur",
    "type": [
      "Grass",
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town / Cloud Island",
    "area": "Ochtend / Dag / Avond / Nacht - zon, bewolking of regen",
    "habitat": "Field of Flowers / Garden Terrace | Ideale omgeving: Bright",
    "obtainMethod": "Maak een Field of Flowers of Garden Terrace om Venusaur te laten verschijnen.",
    "requirements": "Field of Flowers: 8x Wildflowers. Garden Terrace: 4x Wildflowers + 1x Garden chair + 1x Garden light + 1x Garden table.",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "Ivysaur",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: bouw meteen een volledige Field of Flowers of Garden Terrace als je specifiek voor Venusaur gaat."
  },
  {
    "number": 4,
    "name": "Charmander",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tall Grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tall Grass | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Tall Grass.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Charmeleon",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tall Grass. Zo werk je gericht aan Charmander."
  },
  {
    "number": 5,
    "name": "Charmeleon",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Campsite (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Campsite | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Campsite.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Charmander",
    "evolvesInto": "Charizard",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Campsite. Zo werk je gericht aan Charmeleon."
  },
  {
    "number": 6,
    "name": "Charizard",
    "type": [
      "Fire",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tall Grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud) ; Berry-feast Campsite (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud)",
    "habitat": "Tall Grass / Berry-feast Campsite | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Tall Grass / Berry-feast Campsite.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Fly"
    ],
    "evolvesFrom": "Charmeleon",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tall Grass. Zo werk je gericht aan Charizard."
  },
  {
    "number": 7,
    "name": "Squirtle",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tall Grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Hydrated tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tall Grass / Hydrated tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Tall Grass / Hydrated tall grass.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Wartortle",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tall Grass. Zo werk je gericht aan Squirtle."
  },
  {
    "number": 8,
    "name": "Wartortle",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Hydrated tall grass.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Squirtle",
    "evolvesInto": "Blastoise",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Hydrated tall grass. Zo werk je gericht aan Wartortle."
  },
  {
    "number": 9,
    "name": "Blastoise",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Floating in the shade (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated tall grass / Floating in the shade | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Hydrated tall grass / Floating in the shade.",
    "requirements": "",
    "specialties": [
      "Water",
      "Trade"
    ],
    "evolvesFrom": "Wartortle",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Hydrated tall grass. Zo werk je gericht aan Blastoise."
  },
  {
    "number": 10,
    "name": "Pidgey",
    "type": [
      "Normal",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Elevated tall grass (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain) ; Pretty flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated tall grass / Pretty flower bed | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Elevated tall grass / Pretty flower bed.",
    "requirements": "",
    "specialties": [
      "Fly",
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Pidgeotto",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Elevated tall grass. Zo werk je gericht aan Pidgey."
  },
  {
    "number": 11,
    "name": "Pidgeotto",
    "type": [
      "Normal",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Elevated tall grass (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain) ; Pretty flower bed (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated tall grass / Pretty flower bed | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Elevated tall grass / Pretty flower bed.",
    "requirements": "",
    "specialties": [
      "Fly",
      "Search"
    ],
    "evolvesFrom": "Pidgey",
    "evolvesInto": "Pidgeot",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Elevated tall grass. Zo werk je gericht aan Pidgeotto."
  },
  {
    "number": 12,
    "name": "Pidgeot",
    "type": [
      "Normal",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Luxury chirp-chirp meal (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain)",
    "habitat": "Luxury chirp-chirp meal | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Luxury chirp-chirp meal.",
    "requirements": "",
    "specialties": [
      "Fly",
      "Chop"
    ],
    "evolvesFrom": "Pidgeotto",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Luxury chirp-chirp meal. Zo werk je gericht aan Pidgeot."
  },
  {
    "number": 13,
    "name": "Oddish",
    "type": [
      "Grass",
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tall Grass (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tall Grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Tall Grass.",
    "requirements": "",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Gloom",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tall Grass. Zo werk je gericht aan Oddish."
  },
  {
    "number": 14,
    "name": "Gloom",
    "type": [
      "Grass",
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tropical vibes (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tropical vibes | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Tropical vibes.",
    "requirements": "",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "Oddish",
    "evolvesInto": "Vileplume / Bellossom",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tropical vibes. Zo werk je gericht aan Gloom."
  },
  {
    "number": 15,
    "name": "Vileplume",
    "type": [
      "Grass",
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Chansey Resting area (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Chansey Resting area | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Chansey Resting area.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "Gloom",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Chansey Resting area. Zo werk je gericht aan Vileplume."
  },
  {
    "number": 16,
    "name": "Bellossom",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Chansey Resting area (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Chansey Resting area | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Chansey Resting area.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Hype"
    ],
    "evolvesFrom": "Gloom",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Chansey Resting area. Zo werk je gericht aan Bellossom."
  },
  {
    "number": 17,
    "name": "Paras",
    "type": [
      "Bug",
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Elevated flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Flower garden (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated flower bed / Flower garden | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Elevated flower bed / Flower garden.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Parasect",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Elevated flower bed. Zo werk je gericht aan Paras."
  },
  {
    "number": 18,
    "name": "Parasect",
    "type": [
      "Bug",
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Elevated flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Flower garden (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated flower bed / Flower garden | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Elevated flower bed / Flower garden.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "Paras",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Elevated flower bed. Zo werk je gericht aan Parasect."
  },
  {
    "number": 19,
    "name": "Venonat",
    "type": [
      "Bug",
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Illuminated tall grass (Tijd: Night | Weer: Sun, Cloud, Rain) ; Illuminated bench (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Illuminated tall grass / Illuminated bench | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Illuminated tall grass / Illuminated bench.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Venomoth",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Illuminated tall grass. Zo werk je gericht aan Venonat."
  },
  {
    "number": 20,
    "name": "Venomoth",
    "type": [
      "Bug",
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Illuminated tall grass (Tijd: Night | Weer: Sun, Cloud, Rain) ; Illuminated bench (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Illuminated tall grass / Illuminated bench | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Illuminated tall grass / Illuminated bench.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "Venonat",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Illuminated tall grass. Zo werk je gericht aan Venomoth."
  },
  {
    "number": 21,
    "name": "Bellsprout",
    "type": [
      "Grass",
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded  tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded  tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded  tall grass.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Weepinbell",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded  tall grass. Zo werk je gericht aan Bellsprout."
  },
  {
    "number": 22,
    "name": "Weepinbell",
    "type": [
      "Grass",
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Flowery table (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Irresistible scent and glow (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Flowery table / Irresistible scent and glow | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Flowery table / Irresistible scent and glow.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "Bellsprout",
    "evolvesInto": "Victreebel",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Flowery table. Zo werk je gericht aan Weepinbell."
  },
  {
    "number": 23,
    "name": "Victreebel",
    "type": [
      "Grass",
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Flowery table (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Irresistible scent and glow (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Flowery table / Irresistible scent and glow | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Flowery table / Irresistible scent and glow.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Chop"
    ],
    "evolvesFrom": "Weepinbell",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Flowery table. Zo werk je gericht aan Victreebel."
  },
  {
    "number": 24,
    "name": "Slowpoke",
    "type": [
      "Water",
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Seaside Tall Grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Seaside Tall Grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Seaside Tall Grass.",
    "requirements": "",
    "specialties": [
      "Water",
      "Yawn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Slowbro / Slowking",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Seaside Tall Grass. Zo werk je gericht aan Slowpoke."
  },
  {
    "number": 25,
    "name": "Slowbro",
    "type": [
      "Water",
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Seaside Tall Grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Bed with a plush (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Seaside Tall Grass / Bed with a plush | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Seaside Tall Grass / Bed with a plush.",
    "requirements": "",
    "specialties": [
      "Water",
      "Trade"
    ],
    "evolvesFrom": "Slowpoke",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Seaside Tall Grass. Zo werk je gericht aan Slowbro."
  },
  {
    "number": 26,
    "name": "Slowking",
    "type": [
      "Water",
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Seaside Tall Grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Bed with a plush (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Seaside Tall Grass / Bed with a plush / Fishing pond | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Seaside Tall Grass / Bed with a plush / Fishing pond.",
    "requirements": "",
    "specialties": [
      "Water",
      "Teleport"
    ],
    "evolvesFrom": "Slowpoke",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Seaside Tall Grass. Zo werk je gericht aan Slowking."
  },
  {
    "number": 27,
    "name": "Magnemite",
    "type": [
      "Electric",
      "Steel"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Factory Storage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Factory Storage | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Factory Storage.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Magneton",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Factory Storage. Zo werk je gericht aan Magnemite."
  },
  {
    "number": 28,
    "name": "Magneton",
    "type": [
      "Electric",
      "Steel"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Trash can central (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Mini Game Corner (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Trash can central / Mini Game Corner | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Trash can central / Mini Game Corner.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "Magnemite",
    "evolvesInto": "Magnezone",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Trash can central. Zo werk je gericht aan Magneton."
  },
  {
    "number": 29,
    "name": "Magnezone",
    "type": [
      "Electric",
      "Steel"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Trash can central (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Mini Game Corner (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Trash can central / Mini Game Corner | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Trash can central / Mini Game Corner.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Recycle"
    ],
    "evolvesFrom": "Magneton",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Trash can central. Zo werk je gericht aan Magnezone."
  },
  {
    "number": 30,
    "name": "Onix",
    "type": [
      "Rock",
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Smooth tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Smooth tall grass | Ideale omgeving: Dry",
    "obtainMethod": "Maak een geschikt habitat: Smooth tall grass.",
    "requirements": "",
    "specialties": [
      "Crush",
      "Bulldoze"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Steelix",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Smooth tall grass. Zo werk je gericht aan Onix."
  },
  {
    "number": 31,
    "name": "Steelix",
    "type": [
      "Steel",
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Clink-clang iron construction (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Clink-clang iron construction | Ideale omgeving: Dry",
    "obtainMethod": "Maak een geschikt habitat: Clink-clang iron construction.",
    "requirements": "",
    "specialties": [
      "Crush",
      "Bulldoze"
    ],
    "evolvesFrom": "Onix",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Clink-clang iron construction. Zo werk je gericht aan Steelix."
  },
  {
    "number": 32,
    "name": "Cubone",
    "type": [
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Grave with flowers (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Grave with flowers | Ideale omgeving: Dry",
    "obtainMethod": "Maak een geschikt habitat: Grave with flowers.",
    "requirements": "",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Marowak",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Grave with flowers. Zo werk je gericht aan Cubone."
  },
  {
    "number": 33,
    "name": "Marowak",
    "type": [
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Grave with flowers (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Grave with flowers | Ideale omgeving: Dry",
    "obtainMethod": "Maak een geschikt habitat: Grave with flowers.",
    "requirements": "",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "Cubone",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Grave with flowers. Zo werk je gericht aan Marowak."
  },
  {
    "number": 34,
    "name": "Tyrogue",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Training waterfall (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Training waterfall | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Training waterfall.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Hitmonlee / Hitmonchan / Hitmontop",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Training waterfall. Zo werk je gericht aan Tyrogue."
  },
  {
    "number": 35,
    "name": "Hitmonlee",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Urgent Care (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Urgent Care | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Urgent Care.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "Tyrogue",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Urgent Care. Zo werk je gericht aan Hitmonlee."
  },
  {
    "number": 36,
    "name": "Hitmonchan",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Exercise resting spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Exercise resting spot | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Exercise resting spot.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "Tyrogue",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Exercise resting spot. Zo werk je gericht aan Hitmonchan."
  },
  {
    "number": 37,
    "name": "Hitmontop",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Gym first aid (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Gym first aid | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Gym first aid.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "Tyrogue",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Gym first aid. Zo werk je gericht aan Hitmontop."
  },
  {
    "number": 38,
    "name": "Koffing",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town",
    "area": "Trash collection site (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Trash collection site | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Trash collection site.",
    "requirements": "",
    "specialties": [
      "Recycle"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Weezing",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Palette Town en bouw eerst Trash collection site. Zo werk je gericht aan Koffing."
  },
  {
    "number": 39,
    "name": "Weezing",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town",
    "area": "Good old-fashioned antiques (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Trash collection site (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Good old-fashioned antiques / Trash collection site | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Good old-fashioned antiques / Trash collection site.",
    "requirements": "",
    "specialties": [
      "Recyvle"
    ],
    "evolvesFrom": "Koffing",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Palette Town en bouw eerst Good old-fashioned antiques. Zo werk je gericht aan Weezing."
  },
  {
    "number": 40,
    "name": "Tangela",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town",
    "area": "Nothin' but Poke Balls (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Nothin' but Poke Balls | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Nothin' but Poke Balls.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Tangrowth",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Palette Town en bouw eerst Nothin' but Poke Balls. Zo werk je gericht aan Tangela."
  },
  {
    "number": 41,
    "name": "Tangrowth",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "",
    "area": "Bench with greenery (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Bench with greenery | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Bench with greenery.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "Tangela",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: bouw eerst Bench with greenery. Zo werk je gericht aan Tangrowth."
  },
  {
    "number": 42,
    "name": "Scyther",
    "type": [
      "Bug",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded  tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded  tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded  tall grass.",
    "requirements": "",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Scizor",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded  tall grass. Zo werk je gericht aan Scyther."
  },
  {
    "number": 43,
    "name": "Scizor",
    "type": [
      "Bug",
      "Steel"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town",
    "area": "Tree-shaded  tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded  tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded  tall grass.",
    "requirements": "",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "Scyther",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Palette Town en bouw eerst Tree-shaded  tall grass. Zo werk je gericht aan Scizor."
  },
  {
    "number": 44,
    "name": "Pinsir",
    "type": [
      "Bug"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded  tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded  tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded  tall grass.",
    "requirements": "",
    "specialties": [
      "Chop",
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded  tall grass. Zo werk je gericht aan Pinsir."
  },
  {
    "number": 45,
    "name": "Magikarp",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Ocean fishing spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Ocean fishing spot | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Ocean fishing spot.",
    "requirements": "",
    "specialties": [],
    "evolvesFrom": "",
    "evolvesInto": "Gyarados",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Ocean fishing spot. Zo werk je gericht aan Magikarp."
  },
  {
    "number": 46,
    "name": "Gyarados",
    "type": [
      "Water",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Illuminated waterfall (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Illuminated waterfall | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Illuminated waterfall.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Magikarp",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Illuminated waterfall. Zo werk je gericht aan Gyarados."
  },
  {
    "number": 47,
    "name": "Ditto",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "",
    "area": "",
    "habitat": "Ideale omgeving: Bright",
    "obtainMethod": "",
    "requirements": "",
    "specialties": [
      "Transform"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": ""
  },
  {
    "number": 48,
    "name": "Hoothoot",
    "type": [
      "Normal",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Elevated tall grass (Tijd: Night | Weer: Sun, Cloud, Rain) ; Pretty flower bed (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated tall grass / Pretty flower bed / Gently lit bed | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Elevated tall grass / Pretty flower bed / Gently lit bed.",
    "requirements": "",
    "specialties": [
      "Trade",
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Noctowl",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Elevated tall grass. Zo werk je gericht aan Hoothoot."
  },
  {
    "number": 49,
    "name": "Noctowl",
    "type": [
      "Normal",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Elevated tall grass (Tijd: Night | Weer: Sun, Cloud, Rain) ; Gently lit bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated tall grass / Gently lit bed | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Elevated tall grass / Gently lit bed.",
    "requirements": "",
    "specialties": [
      "Trade",
      "Fly"
    ],
    "evolvesFrom": "Hoothoot",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Elevated tall grass. Zo werk je gericht aan Noctowl."
  },
  {
    "number": 50,
    "name": "Heracross",
    "type": [
      "Bug",
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded  tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded  tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded  tall grass.",
    "requirements": "",
    "specialties": [
      "Chop",
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded  tall grass. Zo werk je gericht aan Heracross."
  },
  {
    "number": 51,
    "name": "Volbeat",
    "type": [
      "Bug"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated flower bed | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Hydrated flower bed.",
    "requirements": "",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Hydrated flower bed. Zo werk je gericht aan Volbeat."
  },
  {
    "number": 52,
    "name": "Illumise",
    "type": [
      "Bug"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated flower bed | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Hydrated flower bed.",
    "requirements": "",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Hydrated flower bed. Zo werk je gericht aan Illumise."
  },
  {
    "number": 53,
    "name": "Gulpin",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Tantalizing dining set (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tantalizing dining set | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Tantalizing dining set.",
    "requirements": "",
    "specialties": [
      "Storage"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Swalot",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tantalizing dining set. Zo werk je gericht aan Gulpin."
  },
  {
    "number": 54,
    "name": "Swalot",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Dinner table surprise (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Dinner table surprise | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Dinner table surprise.",
    "requirements": "",
    "specialties": [
      "Storage"
    ],
    "evolvesFrom": "Gulpin",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Dinner table surprise. Zo werk je gericht aan Swalot."
  },
  {
    "number": 55,
    "name": "Cacnea",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Sunny Day site (Tijd: Morning, Day, Evening, Night | Weer: Sun)",
    "habitat": "Sunny Day site | Ideale omgeving: Dry",
    "obtainMethod": "Maak een geschikt habitat: Sunny Day site.",
    "requirements": "",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Cacturne",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Sunny Day site. Zo werk je gericht aan Cacnea."
  },
  {
    "number": 56,
    "name": "Cacturne",
    "type": [
      "Grass",
      "Dark"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded flower bed (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded flower bed | Ideale omgeving: Dry",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded flower bed.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "Cacnea",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded flower bed. Zo werk je gericht aan Cacturne."
  },
  {
    "number": 57,
    "name": "Combee",
    "type": [
      "Bug",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Pretty flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Pretty flower bed | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Pretty flower bed.",
    "requirements": "",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Vespiquen",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Pretty flower bed. Zo werk je gericht aan Combee."
  },
  {
    "number": 58,
    "name": "Vespiquen",
    "type": [
      "Bug",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Field of Flowers (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Field of Flowers | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Field of Flowers.",
    "requirements": "",
    "specialties": [
      "Gather Honey",
      "Search"
    ],
    "evolvesFrom": "Combee",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Field of Flowers. Zo werk je gericht aan Vespiquen."
  },
  {
    "number": 59,
    "name": "Shellos",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Road Sign (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Road Sign | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Road Sign.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Gastrodon",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Road Sign. Zo werk je gericht aan Shellos."
  },
  {
    "number": 60,
    "name": "Gastrodon",
    "type": [
      "Water",
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Ocean fishing spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Ocean fishing spot | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Ocean fishing spot.",
    "requirements": "",
    "specialties": [
      "Water",
      "Trade"
    ],
    "evolvesFrom": "Shellos",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Ocean fishing spot. Zo werk je gericht aan Gastrodon."
  },
  {
    "number": 61,
    "name": "Drifloon",
    "type": [
      "Ghost",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Riding warm updrafts (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Bed with a plush (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Riding warm updrafts / Bed with a plush / Plush central | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Riding warm updrafts / Bed with a plush / Plush central.",
    "requirements": "",
    "specialties": [
      "Dream Island"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Drifblim",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Riding warm updrafts. Zo werk je gericht aan Drifloon."
  },
  {
    "number": 62,
    "name": "Drifblim",
    "type": [
      "Ghost",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Plush central (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Plush central | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Plush central.",
    "requirements": "",
    "specialties": [
      "Fly",
      "Gather"
    ],
    "evolvesFrom": "Drifloon",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Plush central. Zo werk je gericht aan Drifblim."
  },
  {
    "number": 63,
    "name": "Drilbur",
    "type": [
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Fresh Veggie Field (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Fresh Veggie Field | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Fresh Veggie Field.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Excadrill",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Fresh Veggie Field. Zo werk je gericht aan Drilbur."
  },
  {
    "number": 64,
    "name": "Excadrill",
    "type": [
      "Ground",
      "Steel"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Fresh Veggie Field (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Fresh Veggie Field | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Fresh Veggie Field.",
    "requirements": "",
    "specialties": [
      "Search",
      "Chop"
    ],
    "evolvesFrom": "Drilbur",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Fresh Veggie Field. Zo werk je gericht aan Excadrill."
  },
  {
    "number": 65,
    "name": "Timburr",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Boulder-shaded Tall Grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Boulder-shaded Tall Grass | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Boulder-shaded Tall Grass.",
    "requirements": "",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Gurdurr",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Boulder-shaded Tall Grass. Zo werk je gericht aan Timburr."
  },
  {
    "number": 66,
    "name": "Gurdurr",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Boulder-shaded Tall Grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Large luggage carrier (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Boulder-shaded Tall Grass / Large luggage carrier | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Boulder-shaded Tall Grass / Large luggage carrier.",
    "requirements": "",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "Timburr",
    "evolvesInto": "Conkeldurr",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Boulder-shaded Tall Grass. Zo werk je gericht aan Gurdurr."
  },
  {
    "number": 67,
    "name": "Conkeldurr",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Construction-site generator (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Construction-site generator | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Construction-site generator.",
    "requirements": "",
    "specialties": [
      "Build",
      "Crush"
    ],
    "evolvesFrom": "Gurdurr",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Construction-site generator. Zo werk je gericht aan Conkeldurr."
  },
  {
    "number": 68,
    "name": "Litwick",
    "type": [
      "Ghost",
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Grave offering (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Creepy grave offering (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Grave offering / Creepy grave offering | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Grave offering / Creepy grave offering.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Lampent",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Grave offering. Zo werk je gericht aan Litwick."
  },
  {
    "number": 69,
    "name": "Lampent",
    "type": [
      "Ghost",
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Grave offering (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Creepy grave offering (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Grave offering / Creepy grave offering | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Grave offering / Creepy grave offering.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Litwick",
    "evolvesInto": "Chandelure",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Grave offering. Zo werk je gericht aan Lampent."
  },
  {
    "number": 70,
    "name": "Chandelure",
    "type": [
      "Ghost",
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Creepy grave offering (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Creepy grave offering | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Creepy grave offering.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Lampent",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Creepy grave offering. Zo werk je gericht aan Chandelure."
  },
  {
    "number": 71,
    "name": "Axew",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Lumberjack's workplace (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Crazy log handicrafts (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Lumberjack's workplace / Crazy log handicrafts | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Lumberjack's workplace / Crazy log handicrafts.",
    "requirements": "",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Fraxure",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Lumberjack's workplace. Zo werk je gericht aan Axew."
  },
  {
    "number": 72,
    "name": "Fraxure",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Lumberjack's workplace (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Crazy log handicrafts (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Lumberjack's workplace / Crazy log handicrafts | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Lumberjack's workplace / Crazy log handicrafts.",
    "requirements": "",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "Axew",
    "evolvesInto": "Haxorus",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Lumberjack's workplace. Zo werk je gericht aan Fraxure."
  },
  {
    "number": 73,
    "name": "Haxorus",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Lumberjack's workplace (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Crazy log handicrafts (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Lumberjack's workplace / Crazy log handicrafts | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Lumberjack's workplace / Crazy log handicrafts.",
    "requirements": "",
    "specialties": [
      "Chop",
      "Litter"
    ],
    "evolvesFrom": "Fraxure",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Lumberjack's workplace. Zo werk je gericht aan Haxorus."
  },
  {
    "number": 74,
    "name": "Goomy",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded flower bed (Tijd: Morning, Day, Evening, Night | Weer: Rain) ; Rain Dance site (Tijd: Morning, Day, Evening, Night | Weer: Rain)",
    "habitat": "Tree-shaded flower bed / Rain Dance site | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded flower bed / Rain Dance site.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Sliggoo",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded flower bed. Zo werk je gericht aan Goomy."
  },
  {
    "number": 75,
    "name": "Sliggoo",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated tall grass (Tijd: Morning, Day, Evening, Night | Weer: Rain)",
    "habitat": "Hydrated tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Hydrated tall grass.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Goomy",
    "evolvesInto": "Goodra",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Hydrated tall grass. Zo werk je gericht aan Sliggoo."
  },
  {
    "number": 76,
    "name": "Goodra",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Very-berry space (Tijd: Morning, Day, Evening, Night | Weer: Rain)",
    "habitat": "Very-berry space | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Very-berry space.",
    "requirements": "",
    "specialties": [
      "Water",
      "Trade"
    ],
    "evolvesFrom": "Sliggoo",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Very-berry space. Zo werk je gericht aan Goodra."
  },
  {
    "number": 77,
    "name": "Cramorant",
    "type": [
      "Flying",
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town",
    "area": "Hydrated tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Hydrated tall grass.",
    "requirements": "",
    "specialties": [
      "Fly",
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Palette Town en bouw eerst Hydrated tall grass. Zo werk je gericht aan Cramorant."
  },
  {
    "number": 78,
    "name": "Pichu",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Picnic Set (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Picnic Set | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Picnic Set.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Pikachu",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Picnic Set. Zo werk je gericht aan Pichu."
  },
  {
    "number": 79,
    "name": "Pikachu",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town",
    "area": "Picnic Set (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Picnic Set | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Picnic Set.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "Pichu",
    "evolvesInto": "Raichu",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Palette Town en bouw eerst Picnic Set. Zo werk je gericht aan Pikachu."
  },
  {
    "number": 80,
    "name": "Raichu",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Nature's market (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Nature's market | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Nature's market.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Hype"
    ],
    "evolvesFrom": "Pikachu",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Nature's market. Zo werk je gericht aan Raichu."
  },
  {
    "number": 81,
    "name": "Zubat",
    "type": [
      "Poison",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded Yellow tall grass (Tijd: Night | Weer: Sun, Cloud, Rain) ; Park bench (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded Yellow tall grass / Park bench | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded Yellow tall grass / Park bench.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Golbat",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded Yellow tall grass. Zo werk je gericht aan Zubat."
  },
  {
    "number": 82,
    "name": "Golbat",
    "type": [
      "Poison",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded Yellow tall grass (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded Yellow tall grass | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded Yellow tall grass.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "Zubat",
    "evolvesInto": "Crobat",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded Yellow tall grass. Zo werk je gericht aan Golbat."
  },
  {
    "number": 83,
    "name": "Crobat",
    "type": [
      "Poison",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Elevated yellow tall grass (Tijd: Night | Weer: Sun, Cloud, Rain) ; Trash disposal site (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated yellow tall grass / Trash disposal site | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Elevated yellow tall grass / Trash disposal site.",
    "requirements": "",
    "specialties": [
      "Search",
      "Chop"
    ],
    "evolvesFrom": "Golbat",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Elevated yellow tall grass. Zo werk je gericht aan Crobat."
  },
  {
    "number": 84,
    "name": "Meowth",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Resting spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Working the register (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Resting spot / Working the register | Ideale omgeving: Cool",
    "obtainMethod": "Maak een geschikt habitat: Resting spot / Working the register.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Persian",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Resting spot. Zo werk je gericht aan Meowth."
  },
  {
    "number": 85,
    "name": "Persian",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Evil organization HQ (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Evil organization HQ | Ideale omgeving: Cool",
    "obtainMethod": "Maak een geschikt habitat: Evil organization HQ.",
    "requirements": "",
    "specialties": [
      "Trade",
      "Search"
    ],
    "evolvesFrom": "Meowth",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Evil organization HQ. Zo werk je gericht aan Persian."
  },
  {
    "number": 86,
    "name": "Psyduck",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hot-spring shower (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hot-spring shower | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Hot-spring shower.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Golduck",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Hot-spring shower. Zo werk je gericht aan Psyduck."
  },
  {
    "number": 87,
    "name": "Golduck",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hot-spring shower (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hot-spring shower | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Hot-spring shower.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "Psyduck",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Hot-spring shower. Zo werk je gericht aan Golduck."
  },
  {
    "number": 88,
    "name": "Growlithe",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Perpetual mess (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Resort meal prep (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Perpetual mess / Resort meal prep | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Perpetual mess / Resort meal prep.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Arcanine",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Perpetual mess. Zo werk je gericht aan Growlithe."
  },
  {
    "number": 89,
    "name": "Arcanine",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Mini museum (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Magma fishing spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Mini museum / Magma fishing spot | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Mini museum / Magma fishing spot.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Search"
    ],
    "evolvesFrom": "Growlithe",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Mini museum. Zo werk je gericht aan Arcanine."
  },
  {
    "number": 90,
    "name": "Farfetch'd",
    "type": [
      "Normal",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "",
    "area": "",
    "habitat": "",
    "obtainMethod": "",
    "requirements": "",
    "specialties": [
      "Chop",
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": ""
  },
  {
    "number": 91,
    "name": "Grimer",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Marsh fishing spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Marsh fishing spot | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Marsh fishing spot.",
    "requirements": "",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Muk",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Marsh fishing spot. Zo werk je gericht aan Grimer."
  },
  {
    "number": 92,
    "name": "Muk",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Marsh fishing spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Marsh fishing spot | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Marsh fishing spot.",
    "requirements": "",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "Grimer",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Marsh fishing spot. Zo werk je gericht aan Muk."
  },
  {
    "number": 93,
    "name": "Gastly",
    "type": [
      "Ghost",
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Spooky study (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Spooky study | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Spooky study.",
    "requirements": "",
    "specialties": [
      "Gather",
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Haunter",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Spooky study. Zo werk je gericht aan Gastly."
  },
  {
    "number": 94,
    "name": "Haunter",
    "type": [
      "Ghost",
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Surprise in store (Tijd: Night | Weer: Sun, Cloud, Rain) ; Spooky study (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Surprise in store / Spooky study | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Surprise in store / Spooky study.",
    "requirements": "",
    "specialties": [
      "Gather",
      "Trade"
    ],
    "evolvesFrom": "Gastly",
    "evolvesInto": "Gengar",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Surprise in store. Zo werk je gericht aan Haunter."
  },
  {
    "number": 95,
    "name": "Gengar",
    "type": [
      "Ghost",
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Surprise in store (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Surprise in store | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Surprise in store.",
    "requirements": "",
    "specialties": [
      "Gather",
      "Trade"
    ],
    "evolvesFrom": "Haunter",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Surprise in store. Zo werk je gericht aan Gengar."
  },
  {
    "number": 96,
    "name": "Voltorb",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Park bench (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Playing pirate (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Park bench / Playing pirate | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Park bench / Playing pirate.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Explode"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Electrode",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Park bench. Zo werk je gericht aan Voltorb."
  },
  {
    "number": 97,
    "name": "Electrode",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Park bench (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Playing pirate (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Park bench / Playing pirate | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Park bench / Playing pirate.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Explode"
    ],
    "evolvesFrom": "Voltorb",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Park bench. Zo werk je gericht aan Electrode."
  },
  {
    "number": 98,
    "name": "Exeggcute",
    "type": [
      "Grass",
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tropical vibes (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Shaded beach (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tropical vibes / Shaded beach / Red tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Tropical vibes / Shaded beach / Red tall grass.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Teleport"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Exeggutor",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tropical vibes. Zo werk je gericht aan Exeggcute."
  },
  {
    "number": 99,
    "name": "Exeggutor",
    "type": [
      "Grass",
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tropical vibes (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Shaded beach (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tropical vibes / Shaded beach | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Tropical vibes / Shaded beach.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Teleport"
    ],
    "evolvesFrom": "Exeggcute",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tropical vibes. Zo werk je gericht aan Exeggutor."
  },
  {
    "number": 100,
    "name": "Happiny",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Alarm clock sleep zone (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Working the register (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Alarm clock sleep zone / Working the register | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Alarm clock sleep zone / Working the register.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Chansey",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Alarm clock sleep zone. Zo werk je gericht aan Happiny."
  },
  {
    "number": 101,
    "name": "Chansey",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Full recovery (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Full recovery | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Full recovery.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "Happiny",
    "evolvesInto": "Blissey",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Full recovery. Zo werk je gericht aan Chansey."
  },
  {
    "number": 102,
    "name": "Blissey",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Cuteness overload (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Cuteness overload | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Cuteness overload.",
    "requirements": "",
    "specialties": [
      "Trade",
      "Litter"
    ],
    "evolvesFrom": "Chansey",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Cuteness overload. Zo werk je gericht aan Blissey."
  },
  {
    "number": 103,
    "name": "Elekid",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Vending machine set (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Vending machine set | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Vending machine set.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Electabuzz",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Vending machine set. Zo werk je gericht aan Elekid."
  },
  {
    "number": 104,
    "name": "Electabuzz",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Trash can central (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Light-up stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Trash can central / Light-up stage | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Trash can central / Light-up stage.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "Elekid",
    "evolvesInto": "Electivire",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Trash can central. Zo werk je gericht aan Electabuzz."
  },
  {
    "number": 105,
    "name": "Electivire",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Light-up stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Vending machine set (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Light-up stage / Vending machine set | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Light-up stage / Vending machine set.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Crush"
    ],
    "evolvesFrom": "Electabuzz",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Light-up stage. Zo werk je gericht aan Electivire."
  },
  {
    "number": 106,
    "name": "Lapras",
    "type": [
      "Water",
      "Ice"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tropical seaside (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tropical seaside | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Tropical seaside.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tropical seaside. Zo werk je gericht aan Lapras."
  },
  {
    "number": 107,
    "name": "Munchlax",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town",
    "area": "Bed with a plush (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Tree-shaded snoozing Snorlax (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Bed with a plush / Tree-shaded snoozing Snorlax | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Bed with a plush / Tree-shaded snoozing Snorlax.",
    "requirements": "",
    "specialties": [
      "Bulldoze"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Snorlax",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Palette Town en bouw eerst Bed with a plush. Zo werk je gericht aan Munchlax."
  },
  {
    "number": 108,
    "name": "Snorlax",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "",
    "area": "",
    "habitat": "",
    "obtainMethod": "",
    "requirements": "",
    "specialties": [
      "Trade",
      "Bulldoze"
    ],
    "evolvesFrom": "Munchlax",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": ""
  },
  {
    "number": 109,
    "name": "Spinarak",
    "type": [
      "Bug",
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Yellow tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Yellow tall grass.",
    "requirements": "",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Ariados",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Yellow tall grass. Zo werk je gericht aan Spinarak."
  },
  {
    "number": 110,
    "name": "Ariados",
    "type": [
      "Bug",
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Yellow tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Yellow tall grass.",
    "requirements": "",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "Spinarak",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Yellow tall grass. Zo werk je gericht aan Ariados."
  },
  {
    "number": 111,
    "name": "Mareep",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Overgrowth vending machine (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Knitting station (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Overgrowth vending machine / Knitting station | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Overgrowth vending machine / Knitting station.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Flaaffy",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Overgrowth vending machine. Zo werk je gericht aan Mareep."
  },
  {
    "number": 112,
    "name": "Flaaffy",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Night festival venue (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Knitting station (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Night festival venue / Knitting station | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Night festival venue / Knitting station.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Litter"
    ],
    "evolvesFrom": "Mareep",
    "evolvesInto": "Ampharos",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Night festival venue. Zo werk je gericht aan Flaaffy."
  },
  {
    "number": 113,
    "name": "Ampharos",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Plain life (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Plain life | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Plain life.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Trade"
    ],
    "evolvesFrom": "Flaaffy",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Plain life. Zo werk je gericht aan Ampharos."
  },
  {
    "number": 114,
    "name": "Azurill",
    "type": [
      "Normal",
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Perpetual mess (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated yellow tall grass / Perpetual mess | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Hydrated yellow tall grass / Perpetual mess.",
    "requirements": "",
    "specialties": [
      "Water",
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Marill",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Hydrated yellow tall grass. Zo werk je gericht aan Azurill."
  },
  {
    "number": 115,
    "name": "Marill",
    "type": [
      "Water",
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Dock (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated yellow tall grass / Dock | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Hydrated yellow tall grass / Dock.",
    "requirements": "",
    "specialties": [
      "Water",
      "Hype"
    ],
    "evolvesFrom": "Azurill",
    "evolvesInto": "Azumarill",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Hydrated yellow tall grass. Zo werk je gericht aan Marill."
  },
  {
    "number": 116,
    "name": "Azumarill",
    "type": [
      "Water",
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Dock (Tijd: Morning, Day, Evening, Night | Weer: Rain)",
    "habitat": "Dock | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Dock.",
    "requirements": "",
    "specialties": [
      "Water",
      "Build"
    ],
    "evolvesFrom": "Marill",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Dock. Zo werk je gericht aan Azumarill."
  },
  {
    "number": 117,
    "name": "Paldean Wooper",
    "type": [
      "Poison",
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Marshy tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Marshy tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Marshy tall grass.",
    "requirements": "",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Clodsire",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Bleak Beach en bouw eerst Marshy tall grass. Zo werk je gericht aan Paldean Wooper."
  },
  {
    "number": 118,
    "name": "Clodsire",
    "type": [
      "Poison",
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Marshy tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Marsh fishing spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Marshy tall grass / Marsh fishing spot | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Marshy tall grass / Marsh fishing spot.",
    "requirements": "",
    "specialties": [
      "Litter",
      "Bulldoze"
    ],
    "evolvesFrom": "Paldean Wooper",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Marshy tall grass. Zo werk je gericht aan Clodsire."
  },
  {
    "number": 119,
    "name": "Smeargle",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tiny Atelier (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tiny Atelier | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Tiny Atelier.",
    "requirements": "",
    "specialties": [
      "Paint"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tiny Atelier. Zo werk je gericht aan Smeargle."
  },
  {
    "number": 120,
    "name": "Torchic",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Chirp-chirp meal (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Resort meal prep (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Chirp-chirp meal / Resort meal prep | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Chirp-chirp meal / Resort meal prep.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Combusken",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Chirp-chirp meal. Zo werk je gericht aan Torchic."
  },
  {
    "number": 121,
    "name": "Combusken",
    "type": [
      "Fire",
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Resort meal prep (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Furnace Spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Resort meal prep / Furnace Spot | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Resort meal prep / Furnace Spot.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Build"
    ],
    "evolvesFrom": "Torchic",
    "evolvesInto": "Blaziken",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Resort meal prep. Zo werk je gericht aan Combusken."
  },
  {
    "number": 122,
    "name": "Blaziken",
    "type": [
      "Fire",
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Chirp-chirp meal (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Furnace Spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Chirp-chirp meal / Furnace Spot | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Chirp-chirp meal / Furnace Spot.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Build"
    ],
    "evolvesFrom": "Combusken",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Chirp-chirp meal. Zo werk je gericht aan Blaziken."
  },
  {
    "number": 123,
    "name": "Wingull",
    "type": [
      "Water",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Elevated yellow tall grass (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain) ; Windy Flower Bed (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated yellow tall grass / Windy Flower Bed | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Elevated yellow tall grass / Windy Flower Bed.",
    "requirements": "",
    "specialties": [
      "Water",
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Pelipper",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Elevated yellow tall grass. Zo werk je gericht aan Wingull."
  },
  {
    "number": 124,
    "name": "Pelipper",
    "type": [
      "Water",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Elevated yellow tall grass (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain) ; Windy Flower Bed (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated yellow tall grass / Windy Flower Bed | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Elevated yellow tall grass / Windy Flower Bed.",
    "requirements": "",
    "specialties": [
      "Water",
      "Fly"
    ],
    "evolvesFrom": "Wingull",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Elevated yellow tall grass. Zo werk je gericht aan Pelipper."
  },
  {
    "number": 125,
    "name": "Makuhita",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded Yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; All packed up (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded Yellow tall grass / All packed up | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded Yellow tall grass / All packed up.",
    "requirements": "",
    "specialties": [
      "Build",
      "Bulldoze"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Hariyama",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded Yellow tall grass. Zo werk je gericht aan Makuhita."
  },
  {
    "number": 126,
    "name": "Hariyama",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded Yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; All packed up (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded Yellow tall grass / All packed up | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded Yellow tall grass / All packed up.",
    "requirements": "",
    "specialties": [
      "Build",
      "Bulldoze"
    ],
    "evolvesFrom": "Makuhita",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded Yellow tall grass. Zo werk je gericht aan Hariyama."
  },
  {
    "number": 127,
    "name": "Absol",
    "type": [
      "Dark"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Welcoming resort (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Welcoming resort | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Welcoming resort.",
    "requirements": "",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Welcoming resort. Zo werk je gericht aan Absol."
  },
  {
    "number": 128,
    "name": "Piplup",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated yellow tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Hydrated yellow tall grass.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Prinplup",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Hydrated yellow tall grass. Zo werk je gericht aan Piplup."
  },
  {
    "number": 129,
    "name": "Prinplup",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Waterwheel Spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated yellow tall grass / Waterwheel Spot | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Hydrated yellow tall grass / Waterwheel Spot.",
    "requirements": "",
    "specialties": [
      "Water",
      "Trade"
    ],
    "evolvesFrom": "Piplup",
    "evolvesInto": "Empoleon",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Hydrated yellow tall grass. Zo werk je gericht aan Prinplup."
  },
  {
    "number": 130,
    "name": "Empoleon",
    "type": [
      "Water",
      "Steel"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tableside delivery cart (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Waterwheel Spot (Tijd: Morning, Day, Evening, Night | Weer: Rain)",
    "habitat": "Tableside delivery cart / Waterwheel Spot | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Tableside delivery cart / Waterwheel Spot.",
    "requirements": "",
    "specialties": [
      "Water",
      "Trade"
    ],
    "evolvesFrom": "Prinplup",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tableside delivery cart. Zo werk je gericht aan Empoleon."
  },
  {
    "number": 131,
    "name": "Audino",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Working the register (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Working the register | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Working the register.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Working the register. Zo werk je gericht aan Audino."
  },
  {
    "number": 132,
    "name": "Trubbish",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Trash collection site (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Trash collection site | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Trash collection site.",
    "requirements": "",
    "specialties": [
      "Recycle"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Garbodor",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Trash collection site. Zo werk je gericht aan Trubbish."
  },
  {
    "number": 133,
    "name": "Garbodor",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Trash collection site (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Trash collection site | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Trash collection site.",
    "requirements": "",
    "specialties": [
      "Recycle",
      "Litter"
    ],
    "evolvesFrom": "Trubbish",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Trash collection site. Zo werk je gericht aan Garbodor."
  },
  {
    "number": 134,
    "name": "Zorua",
    "type": [
      "Dark"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Breezy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Breezy flower bed | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Breezy flower bed.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Zoroark",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Breezy flower bed. Zo werk je gericht aan Zorua."
  },
  {
    "number": 135,
    "name": "Zoroark",
    "type": [
      "Dark"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Breezy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Surprise in store (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Breezy flower bed / Surprise in store | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Breezy flower bed / Surprise in store.",
    "requirements": "",
    "specialties": [
      "Trade",
      "Chop"
    ],
    "evolvesFrom": "Zorua",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Breezy flower bed. Zo werk je gericht aan Zoroark."
  },
  {
    "number": 136,
    "name": "Minccino",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Changing area (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Private makeup stand (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Changing area / Private makeup stand | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Changing area / Private makeup stand.",
    "requirements": "",
    "specialties": [
      "Gather"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Cinccino",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Changing area. Zo werk je gericht aan Minccino."
  },
  {
    "number": 137,
    "name": "Cinccino",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Private makeup stand (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Private makeup stand | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Private makeup stand.",
    "requirements": "",
    "specialties": [
      "Gather",
      "Recycle"
    ],
    "evolvesFrom": "Minccino",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Private makeup stand. Zo werk je gericht aan Cinccino."
  },
  {
    "number": 138,
    "name": "Grubbin",
    "type": [
      "Bug"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Vending machine break area (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Yellow tall grass / Vending machine break area | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Yellow tall grass / Vending machine break area.",
    "requirements": "",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Charjabug",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Yellow tall grass. Zo werk je gericht aan Grubbin."
  },
  {
    "number": 139,
    "name": "Charjabug",
    "type": [
      "Bug",
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Vending machine break area (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Vending machine break area | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Vending machine break area.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Chop"
    ],
    "evolvesFrom": "Grubbin",
    "evolvesInto": "Vikavolt",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Vending machine break area. Zo werk je gericht aan Charjabug."
  },
  {
    "number": 140,
    "name": "Vikavolt",
    "type": [
      "Bug",
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded flower bed | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded flower bed.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Chop"
    ],
    "evolvesFrom": "Charjabug",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded flower bed. Zo werk je gericht aan Vikavolt."
  },
  {
    "number": 141,
    "name": "Mimikyu",
    "type": [
      "Ghost",
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Pikachu space (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Pikachu space | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Pikachu space.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Pikachu space. Zo werk je gericht aan Mimikyu."
  },
  {
    "number": 142,
    "name": "Pawmi",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Breezy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Tantalizing restaurant (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Breezy flower bed / Tantalizing restaurant | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Breezy flower bed / Tantalizing restaurant.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Pawmo",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Breezy flower bed. Zo werk je gericht aan Pawmi."
  },
  {
    "number": 143,
    "name": "Pawmo",
    "type": [
      "Electric",
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tantalizing restaurant (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Café space (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tantalizing restaurant / Café space | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Tantalizing restaurant / Café space.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Crush"
    ],
    "evolvesFrom": "Pawmi",
    "evolvesInto": "Pawmot",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tantalizing restaurant. Zo werk je gericht aan Pawmo."
  },
  {
    "number": 144,
    "name": "Pawmot",
    "type": [
      "Electric",
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Café space (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Café space | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Café space.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Crush"
    ],
    "evolvesFrom": "Pawmo",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Café space. Zo werk je gericht aan Pawmot."
  },
  {
    "number": 145,
    "name": "Tatsugiri",
    "type": [
      "Dragon",
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Beach Set (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Beach Set | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Beach Set.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Beach Set. Zo werk je gericht aan Tatsugiri."
  },
  {
    "number": 146,
    "name": "Ekans",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated graceful flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated graceful flower bed | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Hydrated graceful flower bed.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Arbok",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Hydrated graceful flower bed. Zo werk je gericht aan Ekans."
  },
  {
    "number": 147,
    "name": "Arbok",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated graceful flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated graceful flower bed | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Hydrated graceful flower bed.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "Ekans",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Hydrated graceful flower bed. Zo werk je gericht aan Arbok."
  },
  {
    "number": 148,
    "name": "Cleffa",
    "type": [
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Graceful flower bed (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Graceful flower bed | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Graceful flower bed.",
    "requirements": "",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Clefairy",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Graceful flower bed. Zo werk je gericht aan Cleffa."
  },
  {
    "number": 149,
    "name": "Clefairy",
    "type": [
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Graceful flower bed (Tijd: Night | Weer: Sun, Cloud, Rain) ; Bronze landmark (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Graceful flower bed / Bronze landmark | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Graceful flower bed / Bronze landmark.",
    "requirements": "",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "Cleffa",
    "evolvesInto": "Clefable",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Graceful flower bed. Zo werk je gericht aan Clefairy."
  },
  {
    "number": 150,
    "name": "Clefable",
    "type": [
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Graceful flower bed (Tijd: Night | Weer: Sun, Cloud, Rain) ; Bronze landmark (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Graceful flower bed / Bronze landmark | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Graceful flower bed / Bronze landmark.",
    "requirements": "",
    "specialties": [
      "Hype",
      "Trade"
    ],
    "evolvesFrom": "Clefairy",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Graceful flower bed. Zo werk je gericht aan Clefable."
  },
  {
    "number": 151,
    "name": "Igglybuff",
    "type": [
      "Normal",
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Flower garden stump stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Flower garden stump stage | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Flower garden stump stage.",
    "requirements": "",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Jigglypuff",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Flower garden stump stage. Zo werk je gericht aan Igglybuff."
  },
  {
    "number": 152,
    "name": "Jigglypuff",
    "type": [
      "Normal",
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Flower garden stump stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Recital stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Flower garden stump stage / Recital stage | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Flower garden stump stage / Recital stage.",
    "requirements": "",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "Igglybuff",
    "evolvesInto": "Wigglytuff",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Flower garden stump stage. Zo werk je gericht aan Jigglypuff."
  },
  {
    "number": 153,
    "name": "Wigglytuff",
    "type": [
      "Normal",
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Recital stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Recital stage | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Recital stage.",
    "requirements": "",
    "specialties": [
      "Hype",
      "Trade"
    ],
    "evolvesFrom": "Jigglypuff",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Recital stage. Zo werk je gericht aan Wigglytuff."
  },
  {
    "number": 154,
    "name": "Diglett",
    "type": [
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Container snacking (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded red tall grass / Container snacking | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded red tall grass / Container snacking.",
    "requirements": "",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Dugtrio",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded red tall grass. Zo werk je gericht aan Diglett."
  },
  {
    "number": 155,
    "name": "Dugtrio",
    "type": [
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; House party (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded red tall grass / House party | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded red tall grass / House party.",
    "requirements": "",
    "specialties": [
      "Hype",
      "Crush"
    ],
    "evolvesFrom": "Diglett",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded red tall grass. Zo werk je gericht aan Dugtrio."
  },
  {
    "number": 156,
    "name": "Machop",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town",
    "area": "Boulder-shaded Tall Grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Boulder-shaded Tall Grass | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Boulder-shaded Tall Grass.",
    "requirements": "",
    "specialties": [
      "Build",
      "Gather"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Machoke",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Palette Town en bouw eerst Boulder-shaded Tall Grass. Zo werk je gericht aan Machop."
  },
  {
    "number": 157,
    "name": "Machoke",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Grassy training field (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Box to the rhythm (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Grassy training field / Box to the rhythm | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Grassy training field / Box to the rhythm.",
    "requirements": "",
    "specialties": [
      "Build",
      "Gather"
    ],
    "evolvesFrom": "Machop",
    "evolvesInto": "Machamp",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Grassy training field. Zo werk je gericht aan Machoke."
  },
  {
    "number": 158,
    "name": "Machamp",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Grassy training field (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Clink-clang iron construction (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Grassy training field / Clink-clang iron construction | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Grassy training field / Clink-clang iron construction.",
    "requirements": "",
    "specialties": [
      "Build",
      "Gather"
    ],
    "evolvesFrom": "Machoke",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Grassy training field. Zo werk je gericht aan Machamp."
  },
  {
    "number": 159,
    "name": "Geodude",
    "type": [
      "Rock",
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town",
    "area": "Tall Grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tall Grass | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Tall Grass.",
    "requirements": "",
    "specialties": [
      "Crush"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Graveler",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Palette Town en bouw eerst Tall Grass. Zo werk je gericht aan Geodude."
  },
  {
    "number": 160,
    "name": "Graveler",
    "type": [
      "Rock",
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Mossy boulder (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Mossy boulder | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Mossy boulder.",
    "requirements": "",
    "specialties": [
      "Crush"
    ],
    "evolvesFrom": "Geodude",
    "evolvesInto": "Golem",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Mossy boulder. Zo werk je gericht aan Graveler."
  },
  {
    "number": 161,
    "name": "Golem",
    "type": [
      "Rock",
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Mossy boulder (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Mossy boulder | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Mossy boulder.",
    "requirements": "",
    "specialties": [
      "Crush",
      "Trade"
    ],
    "evolvesFrom": "Graveler",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Mossy boulder. Zo werk je gericht aan Golem."
  },
  {
    "number": 162,
    "name": "Magby",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Pretty flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Pretty flower bed | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Pretty flower bed.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Magmar",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Pretty flower bed. Zo werk je gericht aan Magby."
  },
  {
    "number": 163,
    "name": "Magmar",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Digging and burning (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Digging and burning | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Digging and burning.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Magby",
    "evolvesInto": "Magmortar",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Digging and burning. Zo werk je gericht aan Magmar."
  },
  {
    "number": 164,
    "name": "Magmortar",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Mini kitchen (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Mini kitchen | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Mini kitchen.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Crush"
    ],
    "evolvesFrom": "Magmar",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Mini kitchen. Zo werk je gericht aan Magmortar."
  },
  {
    "number": 165,
    "name": "Bonsly",
    "type": [
      "Rock"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded red tall grass | Ideale omgeving: Dry",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded red tall grass.",
    "requirements": "",
    "specialties": [
      "Bulldoze"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Sudowoodo",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded red tall grass. Zo werk je gericht aan Bonsly."
  },
  {
    "number": 166,
    "name": "Sudowoodo",
    "type": [
      "Rock"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; House party (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded red tall grass / House party | Ideale omgeving: Dry",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded red tall grass / House party.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "Bonsly",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded red tall grass. Zo werk je gericht aan Sudowoodo."
  },
  {
    "number": 167,
    "name": "Murkrow",
    "type": [
      "Dark",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Elevated red tall grass (Tijd: Night | Weer: Sun, Cloud, Rain) ; Tree-shaded graceful flower bed (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated red tall grass / Tree-shaded graceful flower bed | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Elevated red tall grass / Tree-shaded graceful flower bed.",
    "requirements": "",
    "specialties": [
      "Trade",
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Honchkrow",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Elevated red tall grass. Zo werk je gericht aan Murkrow."
  },
  {
    "number": 168,
    "name": "Honchkrow",
    "type": [
      "Dark",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Chirping recital (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Chirping recital | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Chirping recital.",
    "requirements": "",
    "specialties": [
      "Trade",
      "Fly"
    ],
    "evolvesFrom": "Murkrow",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Chirping recital. Zo werk je gericht aan Honchkrow."
  },
  {
    "number": 169,
    "name": "Larvitar",
    "type": [
      "Rock",
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Mossy rest spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Mossy rest spot | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Mossy rest spot.",
    "requirements": "",
    "specialties": [
      "Crush",
      "Bulldoze"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Pupitar",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Mossy rest spot. Zo werk je gericht aan Larvitar."
  },
  {
    "number": 170,
    "name": "Pupitar",
    "type": [
      "Rock",
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded pink tall grass | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded pink tall grass.",
    "requirements": "",
    "specialties": [
      "Crush",
      "Bulldoze"
    ],
    "evolvesFrom": "Larvitar",
    "evolvesInto": "Tyranitar",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded pink tall grass. Zo werk je gericht aan Pupitar."
  },
  {
    "number": 171,
    "name": "Tyranitar",
    "type": [
      "Rock",
      "Dark"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Toil in the soil (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Mossy rest spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Toil in the soil / Mossy rest spot | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Toil in the soil / Mossy rest spot.",
    "requirements": "",
    "specialties": [
      "Crush",
      "Bulldoze"
    ],
    "evolvesFrom": "Pupitar",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Toil in the soil. Zo werk je gericht aan Tyranitar."
  },
  {
    "number": 172,
    "name": "Lotad",
    "type": [
      "Water",
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Uplifting duckweed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Hot-spring Fishing Spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated red tall grass / Uplifting duckweed / Hot-spring Fishing Spot | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Hydrated red tall grass / Uplifting duckweed / Hot-spring Fishing Spot.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Lombre",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Hydrated red tall grass. Zo werk je gericht aan Lotad."
  },
  {
    "number": 173,
    "name": "Lombre",
    "type": [
      "Water",
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Hot-spring Fishing Spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated red tall grass / Hot-spring Fishing Spot | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Hydrated red tall grass / Hot-spring Fishing Spot.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Lotad",
    "evolvesInto": "Ludicolo",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Hydrated red tall grass. Zo werk je gericht aan Lombre."
  },
  {
    "number": 174,
    "name": "Ludicolo",
    "type": [
      "Water",
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Uplifting duckweed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Uplifting duckweed | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Uplifting duckweed.",
    "requirements": "",
    "specialties": [
      "Water",
      "Hype"
    ],
    "evolvesFrom": "Lombre",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Uplifting duckweed. Zo werk je gericht aan Ludicolo."
  },
  {
    "number": 175,
    "name": "Mawile",
    "type": [
      "Steel",
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town",
    "area": "Working the register (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Working the register | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Working the register.",
    "requirements": "",
    "specialties": [
      "Trade",
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Palette Town en bouw eerst Working the register. Zo werk je gericht aan Mawile."
  },
  {
    "number": 176,
    "name": "Torkoal",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Mossy hot spring (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Mossy hot spring | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Mossy hot spring.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Mossy hot spring. Zo werk je gericht aan Torkoal."
  },
  {
    "number": 177,
    "name": "Kricketot",
    "type": [
      "Bug"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Music and magazines (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Red tall grass / Music and magazines | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Red tall grass / Music and magazines.",
    "requirements": "",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Kricketune",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Red tall grass. Zo werk je gericht aan Kricketot."
  },
  {
    "number": 178,
    "name": "Kricketune",
    "type": [
      "Bug"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Music and magazines (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Music and magazines | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Music and magazines.",
    "requirements": "",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "Kricketot",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Music and magazines. Zo werk je gericht aan Kricketune."
  },
  {
    "number": 179,
    "name": "Chatot",
    "type": [
      "Normal",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Elevated red tall grass (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain) ; Elevated red tall grass (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain) ; Chirping recital (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated red tall grass / Elevated red tall grass / Chirping recital | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Elevated red tall grass / Elevated red tall grass / Chirping recital.",
    "requirements": "",
    "specialties": [
      "Hype",
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Elevated red tall grass. Zo werk je gericht aan Chatot."
  },
  {
    "number": 180,
    "name": "Riolu",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Box to the rhythm (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Red tall grass / Box to the rhythm | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Red tall grass / Box to the rhythm.",
    "requirements": "",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Lucario",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Red tall grass. Zo werk je gericht aan Riolu."
  },
  {
    "number": 181,
    "name": "Lucario",
    "type": [
      "Fighting",
      "Steel"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Box to the rhythm (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Box to the rhythm | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Box to the rhythm.",
    "requirements": "",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "Riolu",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Box to the rhythm. Zo werk je gericht aan Lucario."
  },
  {
    "number": 182,
    "name": "Stereo Rotom",
    "type": [
      "Electric",
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Music and magazines (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Music and magazines | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Music and magazines.",
    "requirements": "",
    "specialties": [
      "DJ"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Music and magazines. Zo werk je gericht aan Stereo Rotom."
  },
  {
    "number": 183,
    "name": "Larvesta",
    "type": [
      "Bug",
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded graceful flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded graceful flower bed | Ideale omgeving: Dry",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded graceful flower bed.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Volcarona",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded graceful flower bed. Zo werk je gericht aan Larvesta."
  },
  {
    "number": 184,
    "name": "Volcarona",
    "type": [
      "Bug",
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded graceful flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Piping-hot lava (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded graceful flower bed / Piping-hot lava | Ideale omgeving: Dry",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded graceful flower bed / Piping-hot lava.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Litter"
    ],
    "evolvesFrom": "Larvesta",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded graceful flower bed. Zo werk je gericht aan Volcarona."
  },
  {
    "number": 185,
    "name": "Rowlet",
    "type": [
      "Grass",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town",
    "area": "Fresh Veggie Field (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Fresh Veggie Field | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Fresh Veggie Field.",
    "requirements": "",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Dartrix",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Palette Town en bouw eerst Fresh Veggie Field. Zo werk je gericht aan Rowlet."
  },
  {
    "number": 186,
    "name": "Dartrix",
    "type": [
      "Grass",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Pointy tree-shaded rocky tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Pointy tree-shaded rocky tall grass | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Pointy tree-shaded rocky tall grass.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Chop"
    ],
    "evolvesFrom": "Rowlet",
    "evolvesInto": "Decidueye",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Pointy tree-shaded rocky tall grass. Zo werk je gericht aan Dartrix."
  },
  {
    "number": 187,
    "name": "Decidueye",
    "type": [
      "Grass",
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Pointy tree-shaded rocky tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Modern living (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Pointy tree-shaded rocky tall grass / Modern living | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Pointy tree-shaded rocky tall grass / Modern living.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Chop"
    ],
    "evolvesFrom": "Dartrix",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Pointy tree-shaded rocky tall grass. Zo werk je gericht aan Decidueye."
  },
  {
    "number": 188,
    "name": "Scorbunny",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Red tall grass | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Red tall grass.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Raboot",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Red tall grass. Zo werk je gericht aan Scorbunny."
  },
  {
    "number": 189,
    "name": "Raboot",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Open-air bath (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Refreshing locker room (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Open-air bath / Refreshing locker room | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Open-air bath / Refreshing locker room.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Scorbunny",
    "evolvesInto": "Cinderace",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Open-air bath. Zo werk je gericht aan Raboot."
  },
  {
    "number": 190,
    "name": "Cinderace",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Refreshing locker room (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Red tall grass / Refreshing locker room | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Red tall grass / Refreshing locker room.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Hype"
    ],
    "evolvesFrom": "Raboot",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Red tall grass. Zo werk je gericht aan Cinderace."
  },
  {
    "number": 191,
    "name": "Skwovet",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town",
    "area": "Tree-shaded  tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded  tall grass | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded  tall grass.",
    "requirements": "",
    "specialties": [
      "Search",
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Greedent",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Palette Town en bouw eerst Tree-shaded  tall grass. Zo werk je gericht aan Skwovet."
  },
  {
    "number": 192,
    "name": "Greedent",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Chef's kitchen (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Chef's kitchen | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Chef's kitchen.",
    "requirements": "",
    "specialties": [
      "Party"
    ],
    "evolvesFrom": "Skwovet",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Chef's kitchen. Zo werk je gericht aan Greedent."
  },
  {
    "number": 193,
    "name": "Rolycoly",
    "type": [
      "Rock"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Railroad crossing (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Railroad crossing | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Railroad crossing.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Gather"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Carkol",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Railroad crossing. Zo werk je gericht aan Rolycoly."
  },
  {
    "number": 194,
    "name": "Carkol",
    "type": [
      "Rock",
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Railroad crossing (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Railroad crossing | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Railroad crossing.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Gather"
    ],
    "evolvesFrom": "Rolycoly",
    "evolvesInto": "Coalossal",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Railroad crossing. Zo werk je gericht aan Carkol."
  },
  {
    "number": 195,
    "name": "Coalossal",
    "type": [
      "Rock",
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Railroad crossing (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Heavy iron (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Railroad crossing / Heavy iron | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Railroad crossing / Heavy iron.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Gather"
    ],
    "evolvesFrom": "Carkol",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Railroad crossing. Zo werk je gericht aan Coalossal."
  },
  {
    "number": 196,
    "name": "Toxel",
    "type": [
      "Electric",
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Lazy-photo album scrolling (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Lazy-photo album scrolling | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Lazy-photo album scrolling.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Toxtricity",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Lazy-photo album scrolling. Zo werk je gericht aan Toxel."
  },
  {
    "number": 197,
    "name": "Toxtricity",
    "type": [
      "Electric",
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Amped rock stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Amped rock stage | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Amped rock stage.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Hype"
    ],
    "evolvesFrom": "Toxel",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Amped rock stage. Zo werk je gericht aan Toxtricity."
  },
  {
    "number": 198,
    "name": "Fidough",
    "type": [
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Graceful flower bed (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain) ; Best bread bakery (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain)",
    "habitat": "Graceful flower bed / Best bread bakery | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Graceful flower bed / Best bread bakery.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Dachsbun",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Graceful flower bed. Zo werk je gericht aan Fidough."
  },
  {
    "number": 199,
    "name": "Dachsbun",
    "type": [
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Graceful flower bed (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain) ; Best bread bakery (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain)",
    "habitat": "Graceful flower bed / Best bread bakery | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Graceful flower bed / Best bread bakery.",
    "requirements": "",
    "specialties": [
      "Search",
      "Trade"
    ],
    "evolvesFrom": "Fidough",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Graceful flower bed. Zo werk je gericht aan Dachsbun."
  },
  {
    "number": 200,
    "name": "Charcadet",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Piping-hot lava (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Piping-hot lava | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Piping-hot lava.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Armarouge / Ceruledge",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Piping-hot lava. Zo werk je gericht aan Charcadet."
  },
  {
    "number": 201,
    "name": "Armarouge",
    "type": [
      "Fire",
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Auspicious knight's shrine (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Auspicious knight's shrine | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Auspicious knight's shrine.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Charcadet",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Auspicious knight's shrine. Zo werk je gericht aan Armarouge."
  },
  {
    "number": 202,
    "name": "Ceruledge",
    "type": [
      "Fire",
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Malicious knight's shrine (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Malicious knight's shrine | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Malicious knight's shrine.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Charcadet",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Malicious knight's shrine. Zo werk je gericht aan Ceruledge."
  },
  {
    "number": 203,
    "name": "Glimmet",
    "type": [
      "Rock",
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Creepy white rocks (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Container snacking (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Creepy white rocks / Container snacking | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Creepy white rocks / Container snacking.",
    "requirements": "",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Glimmora",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Creepy white rocks. Zo werk je gericht aan Glimmet."
  },
  {
    "number": 204,
    "name": "Glimmora",
    "type": [
      "Rock",
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Creepy white rocks (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Container snacking (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Creepy white rocks / Container snacking | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Creepy white rocks / Container snacking.",
    "requirements": "",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "Glimmet",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Creepy white rocks. Zo werk je gericht aan Glimmora."
  },
  {
    "number": 205,
    "name": "Gimmighoul",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Mini museum (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Mini museum | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Mini museum.",
    "requirements": "",
    "specialties": [
      "Collect"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Gholdengo",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Mini museum. Zo werk je gericht aan Gimmighoul."
  },
  {
    "number": 206,
    "name": "Gholdengo",
    "type": [
      "Steel",
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Absolute luxury (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Absolute luxury | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Absolute luxury.",
    "requirements": "",
    "specialties": [
      "Collect"
    ],
    "evolvesFrom": "Gimmighoul",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Absolute luxury. Zo werk je gericht aan Gholdengo."
  },
  {
    "number": 207,
    "name": "Vulpix",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Fluffy flower bed | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Fluffy flower bed.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Ninetales",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Fluffy flower bed. Zo werk je gericht aan Vulpix."
  },
  {
    "number": 208,
    "name": "Ninetales",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Nine flames (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Fluffy flower bed / Nine flames | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Fluffy flower bed / Nine flames.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Vulpix",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Fluffy flower bed. Zo werk je gericht aan Ninetales."
  },
  {
    "number": 209,
    "name": "Poliwag",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Squeaky clean (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Squeaky clean | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Squeaky clean.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Poliwhirl",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Squeaky clean. Zo werk je gericht aan Poliwag."
  },
  {
    "number": 210,
    "name": "Poliwhirl",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated fluffy flower bed | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Hydrated fluffy flower bed.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Poliwag",
    "evolvesInto": "Poliwrath / Politoed",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Hydrated fluffy flower bed. Zo werk je gericht aan Poliwhirl."
  },
  {
    "number": 211,
    "name": "Poliwrath",
    "type": [
      "Water",
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Sewer hole inspection (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Dojo training (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Sewer hole inspection / Dojo training | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Sewer hole inspection / Dojo training.",
    "requirements": "",
    "specialties": [
      "Water",
      "Build"
    ],
    "evolvesFrom": "Poliwhirl",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Sewer hole inspection. Zo werk je gericht aan Poliwrath."
  },
  {
    "number": 212,
    "name": "Politoed",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated graceful flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Flower garden stump stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Harmonious hot spring (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated graceful flower bed / Flower garden stump stage / Harmonious hot spring | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Hydrated graceful flower bed / Flower garden stump stage / Harmonious hot spring.",
    "requirements": "",
    "specialties": [
      "Water",
      "Hype"
    ],
    "evolvesFrom": "Poliwhirl",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Hydrated graceful flower bed. Zo werk je gericht aan Politoed."
  },
  {
    "number": 213,
    "name": "Abra",
    "type": [
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Surging psychic power (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Fortune-teller's table (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Surging psychic power / Fortune-teller's table | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Surging psychic power / Fortune-teller's table.",
    "requirements": "",
    "specialties": [
      "Teleport"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Kadabra",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Surging psychic power. Zo werk je gericht aan Abra."
  },
  {
    "number": 214,
    "name": "Kadabra",
    "type": [
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Fortune-teller's table (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Fortune-teller's table | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Fortune-teller's table.",
    "requirements": "",
    "specialties": [
      "Teleport"
    ],
    "evolvesFrom": "Abra",
    "evolvesInto": "Alakazam",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Fortune-teller's table. Zo werk je gericht aan Kadabra."
  },
  {
    "number": 215,
    "name": "Alakazam",
    "type": [
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Surging psychic power (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Experiment Space (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Surging psychic power / Experiment Space | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Surging psychic power / Experiment Space.",
    "requirements": "",
    "specialties": [
      "Teleport",
      "Trade"
    ],
    "evolvesFrom": "Kadabra",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Surging psychic power. Zo werk je gericht aan Alakazam."
  },
  {
    "number": 216,
    "name": "Mime Jr.",
    "type": [
      "Psychic",
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "",
    "area": "",
    "habitat": "",
    "obtainMethod": "",
    "requirements": "",
    "specialties": [
      "Gather"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Mr. Mime",
    "evolutionMethod": "",
    "tip": ""
  },
  {
    "number": 217,
    "name": "Mr. Mime",
    "type": [
      "Psychic",
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "",
    "area": "",
    "habitat": "",
    "obtainMethod": "",
    "requirements": "",
    "specialties": [
      "Gather",
      "Build"
    ],
    "evolvesFrom": "Mime Jr.",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": ""
  },
  {
    "number": 218,
    "name": "Porygon",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Researcher's desk (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Researcher's desk | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Researcher's desk.",
    "requirements": "",
    "specialties": [
      "Recycle"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Porygon2",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Researcher's desk. Zo werk je gericht aan Porygon."
  },
  {
    "number": 219,
    "name": "Porygon2",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Work desk (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Work desk | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Work desk.",
    "requirements": "",
    "specialties": [
      "Recycle"
    ],
    "evolvesFrom": "Porygon",
    "evolvesInto": "Porygon-Z",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Work desk. Zo werk je gericht aan Porygon2."
  },
  {
    "number": 220,
    "name": "Porygon-Z",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Game Corner battle zone (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Game Corner battle zone | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Game Corner battle zone.",
    "requirements": "",
    "specialties": [
      "Rarify"
    ],
    "evolvesFrom": "Porygon2",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Game Corner battle zone. Zo werk je gericht aan Porygon-Z."
  },
  {
    "number": 221,
    "name": "Dratini",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Simple bathroom (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated fluffy flower bed / Simple bathroom | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Hydrated fluffy flower bed / Simple bathroom.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Dragonair",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Hydrated fluffy flower bed. Zo werk je gericht aan Dratini."
  },
  {
    "number": 222,
    "name": "Dragonair",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Simple bathroom (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated fluffy flower bed / Simple bathroom | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Hydrated fluffy flower bed / Simple bathroom.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Dratini",
    "evolvesInto": "Dragonite",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Hydrated fluffy flower bed. Zo werk je gericht aan Dragonair."
  },
  {
    "number": 223,
    "name": "Dragonite",
    "type": [
      "Dragon",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Waterside dinghy (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Waterside dinghy | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Waterside dinghy.",
    "requirements": "",
    "specialties": [
      "Water",
      "Fly"
    ],
    "evolvesFrom": "Dragonair",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Waterside dinghy. Zo werk je gericht aan Dragonite."
  },
  {
    "number": 224,
    "name": "Cyndaquil",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Concrete pipe secret base (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Concrete pipe secret base | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Concrete pipe secret base.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Quilava",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Concrete pipe secret base. Zo werk je gericht aan Cyndaquil."
  },
  {
    "number": 225,
    "name": "Quilava",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Concrete pipe secret base (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Fireplace nap spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Concrete pipe secret base / Fireplace nap spot | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Concrete pipe secret base / Fireplace nap spot.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Cyndaquil",
    "evolvesInto": "Typhlosion",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Concrete pipe secret base. Zo werk je gericht aan Quilava."
  },
  {
    "number": 226,
    "name": "Typhlosion",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Fireplace nap spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Top pop (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Fireplace nap spot / Top pop | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Fireplace nap spot / Top pop.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Trade"
    ],
    "evolvesFrom": "Quilava",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Fireplace nap spot. Zo werk je gericht aan Typhlosion."
  },
  {
    "number": 227,
    "name": "Misdreavus",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Fluffy flower bed (Tijd: Night | Weer: Sun, Cloud, Rain) ; Office storeroom (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Fluffy flower bed / Office storeroom | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Fluffy flower bed / Office storeroom.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Mismagius",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Fluffy flower bed. Zo werk je gericht aan Misdreavus."
  },
  {
    "number": 228,
    "name": "Mismagius",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Fluffy flower bed (Tijd: Night | Weer: Sun, Cloud, Rain) ; Home theater (Tijd: Night | Weer: Sun, Cloud, Rain) ; Office storeroom (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Fluffy flower bed / Home theater / Office storeroom | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Fluffy flower bed / Home theater / Office storeroom.",
    "requirements": "",
    "specialties": [
      "Gather",
      "Trade"
    ],
    "evolvesFrom": "Misdreavus",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Fluffy flower bed. Zo werk je gericht aan Mismagius."
  },
  {
    "number": 229,
    "name": "Girafarig",
    "type": [
      "Normal",
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded fluffy flower bed | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded fluffy flower bed.",
    "requirements": "",
    "specialties": [
      "Gather"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Farigiraf",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded fluffy flower bed. Zo werk je gericht aan Girafarig."
  },
  {
    "number": 230,
    "name": "Farigiraf",
    "type": [
      "Normal",
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded fluffy flower bed | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded fluffy flower bed.",
    "requirements": "",
    "specialties": [
      "Gather",
      "Search"
    ],
    "evolvesFrom": "Girafarig",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded fluffy flower bed. Zo werk je gericht aan Farigiraf."
  },
  {
    "number": 231,
    "name": "Ralts",
    "type": [
      "Psychic",
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Study Area (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Study Area | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Study Area.",
    "requirements": "",
    "specialties": [
      "Teleport"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Kirlia",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Study Area. Zo werk je gericht aan Ralts."
  },
  {
    "number": 232,
    "name": "Kirlia",
    "type": [
      "Psychic",
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Study Area (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Moisturizing makeup stand (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Study Area / Moisturizing makeup stand | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Study Area / Moisturizing makeup stand.",
    "requirements": "",
    "specialties": [
      "Teleport"
    ],
    "evolvesFrom": "Ralts",
    "evolvesInto": "Gardevoir / Gallade",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Study Area. Zo werk je gericht aan Kirlia."
  },
  {
    "number": 233,
    "name": "Gardevoir",
    "type": [
      "Psychic",
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Moisturizing makeup stand (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Mini library (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Moisturizing makeup stand / Mini library | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Moisturizing makeup stand / Mini library.",
    "requirements": "",
    "specialties": [
      "Teleport",
      "Trade"
    ],
    "evolvesFrom": "Kirlia",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Moisturizing makeup stand. Zo werk je gericht aan Gardevoir."
  },
  {
    "number": 234,
    "name": "Gallade",
    "type": [
      "Psychic",
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Dojo training (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Dojo training | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Dojo training.",
    "requirements": "",
    "specialties": [
      "Teleport",
      "Build"
    ],
    "evolvesFrom": "Kirlia",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Dojo training. Zo werk je gericht aan Gallade."
  },
  {
    "number": 235,
    "name": "Plusle",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Picturesque photo cutout board (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Picturesque photo cutout board | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Picturesque photo cutout board.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Picturesque photo cutout board. Zo werk je gericht aan Plusle."
  },
  {
    "number": 236,
    "name": "Minun",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Picturesque photo cutout board (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Picturesque photo cutout board | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Picturesque photo cutout board.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Picturesque photo cutout board. Zo werk je gericht aan Minun."
  },
  {
    "number": 237,
    "name": "Trapinch",
    "type": [
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Pink tall grass | Ideale omgeving: Dry",
    "obtainMethod": "Maak een geschikt habitat: Pink tall grass.",
    "requirements": "",
    "specialties": [
      "Bulldoze",
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Vibrava",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Pink tall grass. Zo werk je gericht aan Trapinch."
  },
  {
    "number": 238,
    "name": "Vibrava",
    "type": [
      "Ground",
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Pink tall grass | Ideale omgeving: Dry",
    "obtainMethod": "Maak een geschikt habitat: Pink tall grass.",
    "requirements": "",
    "specialties": [
      "Bulldoze",
      "Fly"
    ],
    "evolvesFrom": "Trapinch",
    "evolvesInto": "Flygon",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Pink tall grass. Zo werk je gericht aan Vibrava."
  },
  {
    "number": 239,
    "name": "Flygon",
    "type": [
      "Ground",
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Pink tall grass | Ideale omgeving: Dry",
    "obtainMethod": "Maak een geschikt habitat: Pink tall grass.",
    "requirements": "",
    "specialties": [
      "Bulldoze",
      "Fly"
    ],
    "evolvesFrom": "Vibrava",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Pink tall grass. Zo werk je gericht aan Flygon."
  },
  {
    "number": 240,
    "name": "Swablu",
    "type": [
      "Normal",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Pink tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Pink tall grass.",
    "requirements": "",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Altaria",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Pink tall grass. Zo werk je gericht aan Swablu."
  },
  {
    "number": 241,
    "name": "Altaria",
    "type": [
      "Dragon",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Birdsong garden (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Birdsong garden | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Birdsong garden.",
    "requirements": "",
    "specialties": [
      "Litter",
      "Fly"
    ],
    "evolvesFrom": "Swablu",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Birdsong garden. Zo werk je gericht aan Altaria."
  },
  {
    "number": 242,
    "name": "Duskull",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Pink tall grass (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Pink tall grass | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Pink tall grass.",
    "requirements": "",
    "specialties": [
      "Gather"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Dusclops",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Pink tall grass. Zo werk je gericht aan Duskull."
  },
  {
    "number": 243,
    "name": "Dusclops",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Trash site TV (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Trash site TV | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Trash site TV.",
    "requirements": "",
    "specialties": [
      "Gather"
    ],
    "evolvesFrom": "Duskull",
    "evolvesInto": "Dusknoir",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Trash site TV. Zo werk je gericht aan Dusclops."
  },
  {
    "number": 244,
    "name": "Dusknoir",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Trash site TV (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Trash site TV | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Trash site TV.",
    "requirements": "",
    "specialties": [
      "Gather",
      "Trade"
    ],
    "evolvesFrom": "Dusclops",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Trash site TV. Zo werk je gericht aan Dusknoir."
  },
  {
    "number": 245,
    "name": "Beldum",
    "type": [
      "Steel",
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Cycling rest stop (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Cycling rest stop | Ideale omgeving: Cool",
    "obtainMethod": "Maak een geschikt habitat: Cycling rest stop.",
    "requirements": "",
    "specialties": [
      "Recycle"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Metang",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Cycling rest stop. Zo werk je gericht aan Beldum."
  },
  {
    "number": 246,
    "name": "Metang",
    "type": [
      "Steel",
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Professor's apprentice program (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Professor's apprentice program | Ideale omgeving: Cool",
    "obtainMethod": "Maak een geschikt habitat: Professor's apprentice program.",
    "requirements": "",
    "specialties": [
      "Recycle"
    ],
    "evolvesFrom": "Beldum",
    "evolvesInto": "Metagross",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Professor's apprentice program. Zo werk je gericht aan Metang."
  },
  {
    "number": 247,
    "name": "Metagross",
    "type": [
      "Steel",
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Gamer's paradise (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Gamer's paradise | Ideale omgeving: Cool",
    "obtainMethod": "Maak een geschikt habitat: Gamer's paradise.",
    "requirements": "",
    "specialties": [
      "Recycle",
      "Crush"
    ],
    "evolvesFrom": "Metang",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Gamer's paradise. Zo werk je gericht aan Metagross."
  },
  {
    "number": 248,
    "name": "Snivy",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Playland (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Playland | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Playland.",
    "requirements": "",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Servine",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Playland. Zo werk je gericht aan Snivy."
  },
  {
    "number": 249,
    "name": "Servine",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded fluffy flower bed | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded fluffy flower bed.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "Snivy",
    "evolvesInto": "Serperior",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded fluffy flower bed. Zo werk je gericht aan Servine."
  },
  {
    "number": 250,
    "name": "Serperior",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Public reading material (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded fluffy flower bed / Public reading material | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded fluffy flower bed / Public reading material.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "Servine",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded fluffy flower bed. Zo werk je gericht aan Serperior."
  },
  {
    "number": 251,
    "name": "Froakie",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated pink tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Hydrated pink tall grass.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Frogadier",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Hydrated pink tall grass. Zo werk je gericht aan Froakie."
  },
  {
    "number": 252,
    "name": "Frogadier",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Prank button (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated pink tall grass / Prank button | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Hydrated pink tall grass / Prank button.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Froakie",
    "evolvesInto": "Greninja",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Hydrated pink tall grass. Zo werk je gericht aan Frogadier."
  },
  {
    "number": 253,
    "name": "Greninja",
    "type": [
      "Water",
      "Dark"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Prank button (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated pink tall grass / Prank button | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Hydrated pink tall grass / Prank button.",
    "requirements": "",
    "specialties": [
      "Water",
      "Chop"
    ],
    "evolvesFrom": "Frogadier",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Hydrated pink tall grass. Zo werk je gericht aan Greninja."
  },
  {
    "number": 254,
    "name": "Dedenne",
    "type": [
      "Electric",
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tire Park (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tire Park | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Tire Park.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tire Park. Zo werk je gericht aan Dedenne."
  },
  {
    "number": 255,
    "name": "Noibat",
    "type": [
      "Flying",
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Rhythmic Living room (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Rhythmic Living room | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Rhythmic Living room.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Noivern",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Rhythmic Living room. Zo werk je gericht aan Noibat."
  },
  {
    "number": 256,
    "name": "Noivern",
    "type": [
      "Flying",
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Rhythmic Living room (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Rhythmic Living room | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Rhythmic Living room.",
    "requirements": "",
    "specialties": [
      "Search",
      "Fly"
    ],
    "evolvesFrom": "Noibat",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Rhythmic Living room. Zo werk je gericht aan Noivern."
  },
  {
    "number": 257,
    "name": "Rookidee",
    "type": [
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Fluffy flower bed | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Fluffy flower bed.",
    "requirements": "",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Corvisquire",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Fluffy flower bed. Zo werk je gericht aan Rookidee."
  },
  {
    "number": 258,
    "name": "Corvisquire",
    "type": [
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Elevated pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated pink tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Elevated pink tall grass.",
    "requirements": "",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "Rookidee",
    "evolvesInto": "Corviknight",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Elevated pink tall grass. Zo werk je gericht aan Corvisquire."
  },
  {
    "number": 259,
    "name": "Corviknight",
    "type": [
      "Flying",
      "Steel"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Elevated pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Sewer hole inspection (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated pink tall grass / Sewer hole inspection | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Elevated pink tall grass / Sewer hole inspection.",
    "requirements": "",
    "specialties": [
      "Chop",
      "Fly"
    ],
    "evolvesFrom": "Corvisquire",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Elevated pink tall grass. Zo werk je gericht aan Corviknight."
  },
  {
    "number": 260,
    "name": "Dreepy",
    "type": [
      "Dragon",
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded pink tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded pink tall grass.",
    "requirements": "",
    "specialties": [
      "Gather",
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Drakloak",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded pink tall grass. Zo werk je gericht aan Dreepy."
  },
  {
    "number": 261,
    "name": "Drakloak",
    "type": [
      "Dragon",
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Office storeroom (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded pink tall grass / Office storeroom | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded pink tall grass / Office storeroom.",
    "requirements": "",
    "specialties": [
      "Gather",
      "Search"
    ],
    "evolvesFrom": "Dreepy",
    "evolvesInto": "Dragapult",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded pink tall grass. Zo werk je gericht aan Drakloak."
  },
  {
    "number": 262,
    "name": "Dragapult",
    "type": [
      "Dragon",
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Office storeroom (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Office storeroom | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Office storeroom.",
    "requirements": "",
    "specialties": [
      "Gather",
      "Trade"
    ],
    "evolvesFrom": "Drakloak",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Office storeroom. Zo werk je gericht aan Dragapult."
  },
  {
    "number": 263,
    "name": "Sprigatito",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Interrogation desk (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded pink tall grass / Interrogation desk | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Tree-shaded pink tall grass / Interrogation desk.",
    "requirements": "",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Floragato",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tree-shaded pink tall grass. Zo werk je gericht aan Sprigatito."
  },
  {
    "number": 264,
    "name": "Floragato",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Interrogation desk (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Interrogation desk | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Interrogation desk.",
    "requirements": "",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "Sprigatito",
    "evolvesInto": "Meowscarada",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Interrogation desk. Zo werk je gericht aan Floragato."
  },
  {
    "number": 265,
    "name": "Meowscarada",
    "type": [
      "Grass",
      "Dark"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Heart-pounding surprise box (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Heart-pounding surprise box | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Heart-pounding surprise box.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Hype"
    ],
    "evolvesFrom": "Floragato",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Heart-pounding surprise box. Zo werk je gericht aan Meowscarada."
  },
  {
    "number": 266,
    "name": "Wattrel",
    "type": [
      "Electric",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Elevated pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated pink tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Elevated pink tall grass.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Kilowattrel",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Elevated pink tall grass. Zo werk je gericht aan Wattrel."
  },
  {
    "number": 267,
    "name": "Kilowattrel",
    "type": [
      "Electric",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Elevated pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated pink tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Elevated pink tall grass.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Fly"
    ],
    "evolvesFrom": "Wattrel",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Elevated pink tall grass. Zo werk je gericht aan Kilowattrel."
  },
  {
    "number": 268,
    "name": "Tinkatink",
    "type": [
      "Fairy",
      "Steel"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town / Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands",
    "area": "Large luggage carrier (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Oversized dumping ground (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Sewer hole inspection (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Large luggage carrier / Oversized dumping ground / Sewer hole inspection | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Large luggage carrier / Oversized dumping ground / Sewer hole inspection.",
    "requirements": "",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Tinkatuff",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Palette Town en bouw eerst Large luggage carrier. Zo werk je gericht aan Tinkatink."
  },
  {
    "number": 269,
    "name": "Tinkatuff",
    "type": [
      "Fairy",
      "Steel"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Large luggage carrier (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Large luggage carrier | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Large luggage carrier.",
    "requirements": "",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "Tinkatink",
    "evolvesInto": "Tinkaton",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Large luggage carrier. Zo werk je gericht aan Tinkatuff."
  },
  {
    "number": 270,
    "name": "Tinkaton",
    "type": [
      "Fairy",
      "Steel"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Oversized dumping ground (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Oversized dumping ground | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Oversized dumping ground.",
    "requirements": "",
    "specialties": [
      "Engineer"
    ],
    "evolvesFrom": "Tinkatuff",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Oversized dumping ground. Zo werk je gericht aan Tinkaton."
  },
  {
    "number": 271,
    "name": "Aerodactyl",
    "type": [
      "Rock",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Wing Fossil Display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Wing Fossil Display | Ideale omgeving: Dry",
    "obtainMethod": "Maak een geschikt habitat: Wing Fossil Display.",
    "requirements": "",
    "specialties": [
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Wing Fossil Display. Zo werk je gericht aan Aerodactyl."
  },
  {
    "number": 272,
    "name": "Cranidos",
    "type": [
      "Rock"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Skull Fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Skull Fossil display | Ideale omgeving: Dry",
    "obtainMethod": "Maak een geschikt habitat: Skull Fossil display.",
    "requirements": "",
    "specialties": [
      "Crush"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Rampardos",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Skull Fossil display. Zo werk je gericht aan Cranidos."
  },
  {
    "number": 273,
    "name": "Rampardos",
    "type": [
      "Rock"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Headbutt Fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Headbutt Fossil display | Ideale omgeving: Dry",
    "obtainMethod": "Maak een geschikt habitat: Headbutt Fossil display.",
    "requirements": "",
    "specialties": [
      "Crush",
      "Litter"
    ],
    "evolvesFrom": "Cranidos",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Headbutt Fossil display. Zo werk je gericht aan Rampardos."
  },
  {
    "number": 274,
    "name": "Shieldon",
    "type": [
      "Rock",
      "Steel"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Armor Fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Armor Fossil display | Ideale omgeving: Dry",
    "obtainMethod": "Maak een geschikt habitat: Armor Fossil display.",
    "requirements": "",
    "specialties": [
      "Crush"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Bastiodon",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Armor Fossil display. Zo werk je gericht aan Shieldon."
  },
  {
    "number": 275,
    "name": "Bastiodon",
    "type": [
      "Rock",
      "Steel"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Shield Fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Shield Fossil display | Ideale omgeving: Dry",
    "obtainMethod": "Maak een geschikt habitat: Shield Fossil display.",
    "requirements": "",
    "specialties": [
      "Crush",
      "Litter"
    ],
    "evolvesFrom": "Shieldon",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Shield Fossil display. Zo werk je gericht aan Bastiodon."
  },
  {
    "number": 276,
    "name": "Tyrunt",
    "type": [
      "Rock",
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Jaw Fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Jaw Fossil display | Ideale omgeving: Dry",
    "obtainMethod": "Maak een geschikt habitat: Jaw Fossil display.",
    "requirements": "",
    "specialties": [
      "Crush"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Tyrantrum",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Jaw Fossil display. Zo werk je gericht aan Tyrunt."
  },
  {
    "number": 277,
    "name": "Tyrantrum",
    "type": [
      "Rock",
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Despot fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Despot fossil display | Ideale omgeving: Dry",
    "obtainMethod": "Maak een geschikt habitat: Despot fossil display.",
    "requirements": "",
    "specialties": [
      "Crush",
      "Litter"
    ],
    "evolvesFrom": "Tyrunt",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Despot fossil display. Zo werk je gericht aan Tyrantrum."
  },
  {
    "number": 278,
    "name": "Amaura",
    "type": [
      "Rock",
      "Ice"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Sail Fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Sail Fossil display | Ideale omgeving: Cool",
    "obtainMethod": "Maak een geschikt habitat: Sail Fossil display.",
    "requirements": "",
    "specialties": [
      "Crush"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Aurorus",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Sail Fossil display. Zo werk je gericht aan Amaura."
  },
  {
    "number": 279,
    "name": "Aurorus",
    "type": [
      "Rock",
      "Ice"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tundra fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tundra fossil display | Ideale omgeving: Cool",
    "obtainMethod": "Maak een geschikt habitat: Tundra fossil display.",
    "requirements": "",
    "specialties": [
      "Crush",
      "Litter"
    ],
    "evolvesFrom": "Amaura",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Tundra fossil display. Zo werk je gericht aan Aurorus."
  },
  {
    "number": 280,
    "name": "Eevee",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Pretty flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Pretty flower bed | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Pretty flower bed.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Vaporeon / Jolteon / Flareon / Espeon / Umbreon / Leafeon / Glaceon / Sylveon",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Withered Wastelands en bouw eerst Pretty flower bed. Zo werk je gericht aan Eevee."
  },
  {
    "number": 281,
    "name": "Vaporeon",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town",
    "area": "Boundless blue beverage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Boundless blue beverage | Ideale omgeving: Humid",
    "obtainMethod": "Maak een geschikt habitat: Boundless blue beverage.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Palette Town en bouw eerst Boundless blue beverage. Zo werk je gericht aan Vaporeon."
  },
  {
    "number": 282,
    "name": "Jolteon",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town",
    "area": "Electrifying potatoes (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Electrifying potatoes | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Electrifying potatoes.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Palette Town en bouw eerst Electrifying potatoes. Zo werk je gericht aan Jolteon."
  },
  {
    "number": 283,
    "name": "Flareon",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town",
    "area": "Burning-hot spice (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Burning-hot spice | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Burning-hot spice.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Palette Town en bouw eerst Burning-hot spice. Zo werk je gericht aan Flareon."
  },
  {
    "number": 284,
    "name": "Espeon",
    "type": [
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town",
    "area": "Elegant daytime treats (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Elegant daytime treats | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Elegant daytime treats.",
    "requirements": "",
    "specialties": [
      "Gather"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Palette Town en bouw eerst Elegant daytime treats. Zo werk je gericht aan Espeon."
  },
  {
    "number": 285,
    "name": "Umbreon",
    "type": [
      "Dark"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town",
    "area": "Dark-chocolate cookies (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Dark-chocolate cookies | Ideale omgeving: Dark",
    "obtainMethod": "Maak een geschikt habitat: Dark-chocolate cookies.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Palette Town en bouw eerst Dark-chocolate cookies. Zo werk je gericht aan Umbreon."
  },
  {
    "number": 286,
    "name": "Leafeon",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town",
    "area": "Leafy greens sandwich (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Leafy greens sandwich | Ideale omgeving: Bright",
    "obtainMethod": "Maak een geschikt habitat: Leafy greens sandwich.",
    "requirements": "",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Palette Town en bouw eerst Leafy greens sandwich. Zo werk je gericht aan Leafeon."
  },
  {
    "number": 287,
    "name": "Glaceon",
    "type": [
      "Ice"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town",
    "area": "Chilly shaved ice (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Chilly shaved ice | Ideale omgeving: Cool",
    "obtainMethod": "Maak een geschikt habitat: Chilly shaved ice.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Palette Town en bouw eerst Chilly shaved ice. Zo werk je gericht aan Glaceon."
  },
  {
    "number": 288,
    "name": "Sylveon",
    "type": [
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town",
    "area": "Lovely ribbon cake (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Lovely ribbon cake | Ideale omgeving: Warm",
    "obtainMethod": "Maak een geschikt habitat: Lovely ribbon cake.",
    "requirements": "",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: begin in Palette Town en bouw eerst Lovely ribbon cake. Zo werk je gericht aan Sylveon."
  },
  {
    "number": 289,
    "name": "Kyogre",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "",
    "area": "",
    "habitat": "Ideale omgeving: Humid",
    "obtainMethod": "",
    "requirements": "",
    "specialties": [],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": ""
  },
  {
    "number": 290,
    "name": "Raikou",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "",
    "area": "",
    "habitat": "Ideale omgeving: Bright",
    "obtainMethod": "",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": ""
  },
  {
    "number": 291,
    "name": "Entei",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "",
    "area": "",
    "habitat": "Ideale omgeving: Warm",
    "obtainMethod": "",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": ""
  },
  {
    "number": 292,
    "name": "Suicune",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "",
    "area": "",
    "habitat": "Ideale omgeving: Humid",
    "obtainMethod": "",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": ""
  },
  {
    "number": 293,
    "name": "Volcanion",
    "type": [
      "Fire",
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "",
    "area": "",
    "habitat": "Ideale omgeving: Warm",
    "obtainMethod": "",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": ""
  },
  {
    "number": 294,
    "name": "Articuno",
    "type": [
      "Ice",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "",
    "area": "",
    "habitat": "Ideale omgeving: Cool",
    "obtainMethod": "",
    "requirements": "",
    "specialties": [
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": ""
  },
  {
    "number": 295,
    "name": "Zapdos",
    "type": [
      "Electric",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "",
    "area": "",
    "habitat": "Ideale omgeving: Bright",
    "obtainMethod": "",
    "requirements": "",
    "specialties": [
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": ""
  },
  {
    "number": 296,
    "name": "Moltres",
    "type": [
      "Fire",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "",
    "area": "",
    "habitat": "Ideale omgeving: Warm",
    "obtainMethod": "",
    "requirements": "",
    "specialties": [
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": ""
  },
  {
    "number": 297,
    "name": "Lugia",
    "type": [
      "Psychic",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "",
    "area": "",
    "habitat": "Ideale omgeving: Humid",
    "obtainMethod": "",
    "requirements": "",
    "specialties": [],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": ""
  },
  {
    "number": 298,
    "name": "Ho-Oh",
    "type": [
      "Fire",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "",
    "area": "",
    "habitat": "Ideale omgeving: Warm",
    "obtainMethod": "",
    "requirements": "",
    "specialties": [],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": ""
  },
  {
    "number": 299,
    "name": "Mewtwo",
    "type": [
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "",
    "area": "",
    "habitat": "Ideale omgeving: Dark",
    "obtainMethod": "",
    "requirements": "",
    "specialties": [
      "Teleport"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": ""
  },
  {
    "number": 300,
    "name": "Mew",
    "type": [
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Ondergrondse shrine / Mysterious Mural",
    "habitat": "Ideale omgeving: Warm",
    "obtainMethod": "Verzamel alle Mysterious Slates en plaats ze bij de ondergrondse shrine in Withered Wastelands.",
    "requirements": "Alle Mysterious Slates.",
    "specialties": [
      "Teleport"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Mijn tip: behandel Mew niet als een gewone habitat-spawn. Verzamel eerst alle Mysterious Slates en ga daarna naar de ondergrondse shrine in Withered Wastelands."
  }
];
