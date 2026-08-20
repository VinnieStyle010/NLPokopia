// NLPokopia - gecorrigeerde hoofd-Pokédex #001 t/m #300
// Geen lege kaartvelden: waar data nog niet betrouwbaar bevestigd is staat dit expliciet vermeld.
// Pokopia-nummering #297 Lugia, #298 Ho-Oh, #299 Mewtwo, #300 Mew gecontroleerd.

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
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tall Grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Bench with greenery (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tall Grass / Bench with greenery | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tall Grass / Bench with greenery.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Ivysaur",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Tall Grass. Controleer daarna tijd en weer voordat je voor Bulbasaur wacht."
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
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Field of Flowers (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Bench with greenery (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Field of Flowers / Bench with greenery | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Field of Flowers / Bench with greenery.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "Bulbasaur",
    "evolvesInto": "Venusaur",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Field of Flowers. Controleer daarna tijd en weer voordat je voor Ivysaur wacht."
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
    "location": "Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Field of Flowers (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Garden Terrace (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Field of Flowers / Garden Terrace | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Field of Flowers / Garden Terrace.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "Ivysaur",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Field of Flowers. Controleer daarna tijd en weer voordat je voor Venusaur wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Tall Grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Charmeleon",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Tall Grass. Controleer daarna tijd en weer voordat je voor Charmander wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Campsite.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Charmander",
    "evolvesInto": "Charizard",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Campsite. Controleer daarna tijd en weer voordat je voor Charmeleon wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Tall Grass / Berry-feast Campsite.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn",
      "Fly"
    ],
    "evolvesFrom": "Charmeleon",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Tall Grass. Controleer daarna tijd en weer voordat je voor Charizard wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Tall Grass / Hydrated tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Wartortle",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Tall Grass. Controleer daarna tijd en weer voordat je voor Squirtle wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Hydrated tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Squirtle",
    "evolvesInto": "Blastoise",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Hydrated tall grass. Controleer daarna tijd en weer voordat je voor Wartortle wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Hydrated tall grass / Floating in the shade.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water",
      "Trade"
    ],
    "evolvesFrom": "Wartortle",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Hydrated tall grass. Controleer daarna tijd en weer voordat je voor Blastoise wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Elevated tall grass / Pretty flower bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Fly",
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Pidgeotto",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Elevated tall grass. Controleer daarna tijd en weer voordat je voor Pidgey wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Elevated tall grass / Pretty flower bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Fly",
      "Search"
    ],
    "evolvesFrom": "Pidgey",
    "evolvesInto": "Pidgeot",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Elevated tall grass. Controleer daarna tijd en weer voordat je voor Pidgeotto wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Luxury chirp-chirp meal.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Fly",
      "Chop"
    ],
    "evolvesFrom": "Pidgeotto",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Luxury chirp-chirp meal. Controleer daarna tijd en weer voordat je voor Pidgeot wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Tall Grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Gloom",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Tall Grass. Controleer daarna tijd en weer voordat je voor Oddish wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tropical vibes (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tropical vibes | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tropical vibes.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "Oddish",
    "evolvesInto": "Vileplume / Bellossom",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Tropical vibes. Controleer daarna tijd en weer voordat je voor Gloom wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Chansey Resting area.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "Gloom",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Chansey Resting area. Controleer daarna tijd en weer voordat je voor Vileplume wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Chansey Resting area.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow",
      "Hype"
    ],
    "evolvesFrom": "Gloom",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Chansey Resting area. Controleer daarna tijd en weer voordat je voor Bellossom wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Elevated flower bed / Flower garden.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Parasect",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Elevated flower bed. Controleer daarna tijd en weer voordat je voor Paras wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Elevated flower bed / Flower garden.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "Paras",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Elevated flower bed. Controleer daarna tijd en weer voordat je voor Parasect wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Illuminated tall grass / Illuminated bench.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Venomoth",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Illuminated tall grass. Controleer daarna tijd en weer voordat je voor Venonat wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Illuminated tall grass / Illuminated bench.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "Venonat",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Illuminated tall grass. Controleer daarna tijd en weer voordat je voor Venomoth wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded  tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Weepinbell",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Tree-shaded  tall grass. Controleer daarna tijd en weer voordat je voor Bellsprout wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Flowery table / Irresistible scent and glow.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "Bellsprout",
    "evolvesInto": "Victreebel",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Flowery table. Controleer daarna tijd en weer voordat je voor Weepinbell wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Flowery table / Irresistible scent and glow.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow",
      "Chop"
    ],
    "evolvesFrom": "Weepinbell",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Flowery table. Controleer daarna tijd en weer voordat je voor Victreebel wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Seaside Tall Grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water",
      "Yawn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Slowbro / Slowking",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Seaside Tall Grass. Controleer daarna tijd en weer voordat je voor Slowpoke wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Seaside Tall Grass / Bed with a plush.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water",
      "Trade"
    ],
    "evolvesFrom": "Slowpoke",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Seaside Tall Grass. Controleer daarna tijd en weer voordat je voor Slowbro wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Seaside Tall Grass / Bed with a plush / Fishing pond.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water",
      "Teleport"
    ],
    "evolvesFrom": "Slowpoke",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Seaside Tall Grass. Controleer daarna tijd en weer voordat je voor Slowking wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Factory Storage.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Magneton",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Factory Storage. Controleer daarna tijd en weer voordat je voor Magnemite wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Trash can central (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Mini Game Corner (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Trash can central / Mini Game Corner | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Trash can central / Mini Game Corner.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "Magnemite",
    "evolvesInto": "Magnezone",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Trash can central. Controleer daarna tijd en weer voordat je voor Magneton wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Trash can central (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Mini Game Corner (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Trash can central / Mini Game Corner | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Trash can central / Mini Game Corner.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate",
      "Recycle"
    ],
    "evolvesFrom": "Magneton",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Trash can central. Controleer daarna tijd en weer voordat je voor Magnezone wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Smooth tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Crush",
      "Bulldoze"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Steelix",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Smooth tall grass. Controleer daarna tijd en weer voordat je voor Onix wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Clink-clang iron construction (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Clink-clang iron construction | Ideale omgeving: Dry",
    "obtainMethod": "Bouw één van deze geschikte habitats: Clink-clang iron construction.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Crush",
      "Bulldoze"
    ],
    "evolvesFrom": "Onix",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Clink-clang iron construction. Controleer daarna tijd en weer voordat je voor Steelix wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Grave with flowers.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Marowak",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Grave with flowers. Controleer daarna tijd en weer voordat je voor Cubone wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Grave with flowers.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "Cubone",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Grave with flowers. Controleer daarna tijd en weer voordat je voor Marowak wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Training waterfall.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Hitmonlee / Hitmonchan / Hitmontop",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Training waterfall. Controleer daarna tijd en weer voordat je voor Tyrogue wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Urgent Care.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "Tyrogue",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Urgent Care. Controleer daarna tijd en weer voordat je voor Hitmonlee wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Exercise resting spot.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "Tyrogue",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Exercise resting spot. Controleer daarna tijd en weer voordat je voor Hitmonchan wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Gym first aid.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "Tyrogue",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Gym first aid. Controleer daarna tijd en weer voordat je voor Hitmontop wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Trash collection site.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Recycle"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Weezing",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Trash collection site. Controleer daarna tijd en weer voordat je voor Koffing wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Good old-fashioned antiques / Trash collection site.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Recyvle"
    ],
    "evolvesFrom": "Koffing",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Good old-fashioned antiques. Controleer daarna tijd en weer voordat je voor Weezing wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Nothin' but Poke Balls.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Tangrowth",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Nothin' but Poke Balls. Controleer daarna tijd en weer voordat je voor Tangela wacht."
  },
  {
    "number": 41,
    "name": "Tangrowth",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Bench with greenery (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Bench with greenery | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Bench with greenery.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "Tangela",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Bench with greenery. Controleer daarna tijd en weer voordat je voor Tangrowth wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded  tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Scizor",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Tree-shaded  tall grass. Controleer daarna tijd en weer voordat je voor Scyther wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded  tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "Scyther",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Tree-shaded  tall grass. Controleer daarna tijd en weer voordat je voor Scizor wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded  tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Chop",
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Tree-shaded  tall grass. Controleer daarna tijd en weer voordat je voor Pinsir wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Ocean fishing spot.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "???"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Gyarados",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Ocean fishing spot. Controleer daarna tijd en weer voordat je voor Magikarp wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Illuminated waterfall (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Illuminated waterfall | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Illuminated waterfall.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Magikarp",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Illuminated waterfall. Controleer daarna tijd en weer voordat je voor Gyarados wacht."
  },
  {
    "number": 47,
    "name": "Ditto",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Dream Island",
    "area": "Nog niet bevestigd",
    "habitat": "Geen normaal habitat bevestigd | Ideale omgeving: Bright",
    "obtainMethod": "Nog niet bevestigd",
    "requirements": "Nog niet bevestigd",
    "specialties": [
      "Transform"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin je zoektocht naar Ditto in Dream Island en controleer eerst of er een speciale ontgrendelvoorwaarde geldt."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Elevated tall grass / Pretty flower bed / Gently lit bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade",
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Noctowl",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Elevated tall grass. Controleer daarna tijd en weer voordat je voor Hoothoot wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Elevated tall grass / Gently lit bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade",
      "Fly"
    ],
    "evolvesFrom": "Hoothoot",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Elevated tall grass. Controleer daarna tijd en weer voordat je voor Noctowl wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded  tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Chop",
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Tree-shaded  tall grass. Controleer daarna tijd en weer voordat je voor Heracross wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Hydrated flower bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Hydrated flower bed. Controleer daarna tijd en weer voordat je voor Volbeat wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Hydrated flower bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Hydrated flower bed. Controleer daarna tijd en weer voordat je voor Illumise wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Tantalizing dining set.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Storage"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Swalot",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Tantalizing dining set. Controleer daarna tijd en weer voordat je voor Gulpin wacht."
  },
  {
    "number": 54,
    "name": "Swalot",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Dinner table surprise (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Dinner table surprise | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Dinner table surprise.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Storage"
    ],
    "evolvesFrom": "Gulpin",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Dinner table surprise. Controleer daarna tijd en weer voordat je voor Swalot wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Sunny Day site.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Cacturne",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Sunny Day site. Controleer daarna tijd en weer voordat je voor Cacnea wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded flower bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "Cacnea",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Tree-shaded flower bed. Controleer daarna tijd en weer voordat je voor Cacturne wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Pretty flower bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Vespiquen",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Pretty flower bed. Controleer daarna tijd en weer voordat je voor Combee wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Field of Flowers.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Gather Honey",
      "Search"
    ],
    "evolvesFrom": "Combee",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Field of Flowers. Controleer daarna tijd en weer voordat je voor Vespiquen wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Road Sign.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Gastrodon",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Road Sign. Controleer daarna tijd en weer voordat je voor Shellos wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Ocean fishing spot.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water",
      "Trade"
    ],
    "evolvesFrom": "Shellos",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Ocean fishing spot. Controleer daarna tijd en weer voordat je voor Gastrodon wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Riding warm updrafts / Bed with a plush / Plush central.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Dream Island"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Drifblim",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Riding warm updrafts. Controleer daarna tijd en weer voordat je voor Drifloon wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Plush central (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Plush central | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Plush central.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Fly",
      "Gather"
    ],
    "evolvesFrom": "Drifloon",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Plush central. Controleer daarna tijd en weer voordat je voor Drifblim wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Fresh Veggie Field.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Excadrill",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Fresh Veggie Field. Controleer daarna tijd en weer voordat je voor Drilbur wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Fresh Veggie Field.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Search",
      "Chop"
    ],
    "evolvesFrom": "Drilbur",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Fresh Veggie Field. Controleer daarna tijd en weer voordat je voor Excadrill wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Boulder-shaded Tall Grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Gurdurr",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Boulder-shaded Tall Grass. Controleer daarna tijd en weer voordat je voor Timburr wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Boulder-shaded Tall Grass / Large luggage carrier.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "Timburr",
    "evolvesInto": "Conkeldurr",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Boulder-shaded Tall Grass. Controleer daarna tijd en weer voordat je voor Gurdurr wacht."
  },
  {
    "number": 67,
    "name": "Conkeldurr",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Construction-site generator (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Construction-site generator | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Construction-site generator.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Build",
      "Crush"
    ],
    "evolvesFrom": "Gurdurr",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Construction-site generator. Controleer daarna tijd en weer voordat je voor Conkeldurr wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Grave offering / Creepy grave offering.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Lampent",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Grave offering. Controleer daarna tijd en weer voordat je voor Litwick wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Grave offering / Creepy grave offering.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Litwick",
    "evolvesInto": "Chandelure",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Grave offering. Controleer daarna tijd en weer voordat je voor Lampent wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Creepy grave offering.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Lampent",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Creepy grave offering. Controleer daarna tijd en weer voordat je voor Chandelure wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Lumberjack's workplace / Crazy log handicrafts.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Fraxure",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Lumberjack's workplace. Controleer daarna tijd en weer voordat je voor Axew wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Lumberjack's workplace / Crazy log handicrafts.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "Axew",
    "evolvesInto": "Haxorus",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Lumberjack's workplace. Controleer daarna tijd en weer voordat je voor Fraxure wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Lumberjack's workplace / Crazy log handicrafts.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Chop",
      "Litter"
    ],
    "evolvesFrom": "Fraxure",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Lumberjack's workplace. Controleer daarna tijd en weer voordat je voor Haxorus wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded flower bed / Rain Dance site.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Sliggoo",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Tree-shaded flower bed. Controleer daarna tijd en weer voordat je voor Goomy wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Hydrated tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Goomy",
    "evolvesInto": "Goodra",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Hydrated tall grass. Controleer daarna tijd en weer voordat je voor Sliggoo wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Very-berry space.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water",
      "Trade"
    ],
    "evolvesFrom": "Sliggoo",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Very-berry space. Controleer daarna tijd en weer voordat je voor Goodra wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Hydrated tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Fly",
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Hydrated tall grass. Controleer daarna tijd en weer voordat je voor Cramorant wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Picnic Set.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Pikachu",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Picnic Set. Controleer daarna tijd en weer voordat je voor Pichu wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Picnic Set.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "Pichu",
    "evolvesInto": "Raichu",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Picnic Set. Controleer daarna tijd en weer voordat je voor Pikachu wacht."
  },
  {
    "number": 80,
    "name": "Raichu",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Nature's market (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Nature's market | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Nature's market.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate",
      "Hype"
    ],
    "evolvesFrom": "Pikachu",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Nature's market. Controleer daarna tijd en weer voordat je voor Raichu wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded Yellow tall grass (Tijd: Night | Weer: Sun, Cloud, Rain) ; Park bench (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded Yellow tall grass / Park bench | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded Yellow tall grass / Park bench.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Golbat",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Tree-shaded Yellow tall grass. Controleer daarna tijd en weer voordat je voor Zubat wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded Yellow tall grass (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded Yellow tall grass | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded Yellow tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "Zubat",
    "evolvesInto": "Crobat",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Tree-shaded Yellow tall grass. Controleer daarna tijd en weer voordat je voor Golbat wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Elevated yellow tall grass (Tijd: Night | Weer: Sun, Cloud, Rain) ; Trash disposal site (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated yellow tall grass / Trash disposal site | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Elevated yellow tall grass / Trash disposal site.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Search",
      "Chop"
    ],
    "evolvesFrom": "Golbat",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Elevated yellow tall grass. Controleer daarna tijd en weer voordat je voor Crobat wacht."
  },
  {
    "number": 84,
    "name": "Meowth",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Resting spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Working the register (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Resting spot / Working the register | Ideale omgeving: Cool",
    "obtainMethod": "Bouw één van deze geschikte habitats: Resting spot / Working the register.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Persian",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Resting spot. Controleer daarna tijd en weer voordat je voor Meowth wacht."
  },
  {
    "number": 85,
    "name": "Persian",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Evil organization HQ (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Evil organization HQ | Ideale omgeving: Cool",
    "obtainMethod": "Bouw één van deze geschikte habitats: Evil organization HQ.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade",
      "Search"
    ],
    "evolvesFrom": "Meowth",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Evil organization HQ. Controleer daarna tijd en weer voordat je voor Persian wacht."
  },
  {
    "number": 86,
    "name": "Psyduck",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hot-spring shower (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hot-spring shower | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Hot-spring shower.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Golduck",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Hot-spring shower. Controleer daarna tijd en weer voordat je voor Psyduck wacht."
  },
  {
    "number": 87,
    "name": "Golduck",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hot-spring shower (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hot-spring shower | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Hot-spring shower.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "Psyduck",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Hot-spring shower. Controleer daarna tijd en weer voordat je voor Golduck wacht."
  },
  {
    "number": 88,
    "name": "Growlithe",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Perpetual mess (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Resort meal prep (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Perpetual mess / Resort meal prep | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Perpetual mess / Resort meal prep.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn",
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Arcanine",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Perpetual mess. Controleer daarna tijd en weer voordat je voor Growlithe wacht."
  },
  {
    "number": 89,
    "name": "Arcanine",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Mini museum (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Magma fishing spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Mini museum / Magma fishing spot | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Mini museum / Magma fishing spot.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn",
      "Search"
    ],
    "evolvesFrom": "Growlithe",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Mini museum. Controleer daarna tijd en weer voordat je voor Arcanine wacht."
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
    "location": "Nog niet bevestigd",
    "area": "Nog niet bevestigd",
    "habitat": "Nog niet bevestigd",
    "obtainMethod": "Nog niet bevestigd",
    "requirements": "Nog niet bevestigd",
    "specialties": [
      "Chop",
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: controleer eerst de habitat- en locatievoorwaarden voor Farfetch'd voordat je materialen uitgeeft."
  },
  {
    "number": 91,
    "name": "Grimer",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Marsh fishing spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Marsh fishing spot | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Marsh fishing spot.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Muk",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Marsh fishing spot. Controleer daarna tijd en weer voordat je voor Grimer wacht."
  },
  {
    "number": 92,
    "name": "Muk",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Marsh fishing spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Marsh fishing spot | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Marsh fishing spot.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "Grimer",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Marsh fishing spot. Controleer daarna tijd en weer voordat je voor Muk wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Spooky study (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Spooky study | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Spooky study.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Gather",
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Haunter",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Spooky study. Controleer daarna tijd en weer voordat je voor Gastly wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Surprise in store (Tijd: Night | Weer: Sun, Cloud, Rain) ; Spooky study (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Surprise in store / Spooky study | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Surprise in store / Spooky study.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Gather",
      "Trade"
    ],
    "evolvesFrom": "Gastly",
    "evolvesInto": "Gengar",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Surprise in store. Controleer daarna tijd en weer voordat je voor Haunter wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Surprise in store (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Surprise in store | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Surprise in store.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Gather",
      "Trade"
    ],
    "evolvesFrom": "Haunter",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Surprise in store. Controleer daarna tijd en weer voordat je voor Gengar wacht."
  },
  {
    "number": 96,
    "name": "Voltorb",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Park bench (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Playing pirate (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Park bench / Playing pirate | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Park bench / Playing pirate.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate",
      "Explode"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Electrode",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Park bench. Controleer daarna tijd en weer voordat je voor Voltorb wacht."
  },
  {
    "number": 97,
    "name": "Electrode",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Park bench (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Playing pirate (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Park bench / Playing pirate | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Park bench / Playing pirate.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate",
      "Explode"
    ],
    "evolvesFrom": "Voltorb",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Park bench. Controleer daarna tijd en weer voordat je voor Electrode wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tropical vibes (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Shaded beach (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tropical vibes / Shaded beach / Red tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tropical vibes / Shaded beach / Red tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow",
      "Teleport"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Exeggutor",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Tropical vibes. Controleer daarna tijd en weer voordat je voor Exeggcute wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tropical vibes (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Shaded beach (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tropical vibes / Shaded beach | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tropical vibes / Shaded beach.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow",
      "Teleport"
    ],
    "evolvesFrom": "Exeggcute",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Tropical vibes. Controleer daarna tijd en weer voordat je voor Exeggutor wacht."
  },
  {
    "number": 100,
    "name": "Happiny",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Alarm clock sleep zone (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Working the register (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Alarm clock sleep zone / Working the register | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Alarm clock sleep zone / Working the register.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Chansey",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Alarm clock sleep zone. Controleer daarna tijd en weer voordat je voor Happiny wacht."
  },
  {
    "number": 101,
    "name": "Chansey",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Full recovery (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Full recovery | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Full recovery.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "Happiny",
    "evolvesInto": "Blissey",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Full recovery. Controleer daarna tijd en weer voordat je voor Chansey wacht."
  },
  {
    "number": 102,
    "name": "Blissey",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Cuteness overload (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Cuteness overload | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Cuteness overload.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade",
      "Litter"
    ],
    "evolvesFrom": "Chansey",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Cuteness overload. Controleer daarna tijd en weer voordat je voor Blissey wacht."
  },
  {
    "number": 103,
    "name": "Elekid",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Vending machine set (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Vending machine set | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Vending machine set.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Electabuzz",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Vending machine set. Controleer daarna tijd en weer voordat je voor Elekid wacht."
  },
  {
    "number": 104,
    "name": "Electabuzz",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Trash can central (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Light-up stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Trash can central / Light-up stage | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Trash can central / Light-up stage.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "Elekid",
    "evolvesInto": "Electivire",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Trash can central. Controleer daarna tijd en weer voordat je voor Electabuzz wacht."
  },
  {
    "number": 105,
    "name": "Electivire",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Light-up stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Vending machine set (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Light-up stage / Vending machine set | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Light-up stage / Vending machine set.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate",
      "Crush"
    ],
    "evolvesFrom": "Electabuzz",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Light-up stage. Controleer daarna tijd en weer voordat je voor Electivire wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tropical seaside (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tropical seaside | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tropical seaside.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Tropical seaside. Controleer daarna tijd en weer voordat je voor Lapras wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Bed with a plush / Tree-shaded snoozing Snorlax.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Bulldoze"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Snorlax",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Bed with a plush. Controleer daarna tijd en weer voordat je voor Munchlax wacht."
  },
  {
    "number": 108,
    "name": "Snorlax",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Gourmet's altar (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Gourmet's altar | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Gourmet's altar.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Eat"
    ],
    "evolvesFrom": "Munchlax",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Gourmet's altar. Controleer daarna tijd en weer voordat je voor Snorlax wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Yellow tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Yellow tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Ariados",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Yellow tall grass. Controleer daarna tijd en weer voordat je voor Spinarak wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Yellow tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Yellow tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "Spinarak",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Yellow tall grass. Controleer daarna tijd en weer voordat je voor Ariados wacht."
  },
  {
    "number": 111,
    "name": "Mareep",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Overgrowth vending machine (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Knitting station (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Overgrowth vending machine / Knitting station | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Overgrowth vending machine / Knitting station.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate",
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Flaaffy",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Overgrowth vending machine. Controleer daarna tijd en weer voordat je voor Mareep wacht."
  },
  {
    "number": 112,
    "name": "Flaaffy",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Night festival venue (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Knitting station (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Night festival venue / Knitting station | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Night festival venue / Knitting station.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate",
      "Litter"
    ],
    "evolvesFrom": "Mareep",
    "evolvesInto": "Ampharos",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Night festival venue. Controleer daarna tijd en weer voordat je voor Flaaffy wacht."
  },
  {
    "number": 113,
    "name": "Ampharos",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Plain life (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Plain life | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Plain life.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate",
      "Trade"
    ],
    "evolvesFrom": "Flaaffy",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Plain life. Controleer daarna tijd en weer voordat je voor Ampharos wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Perpetual mess (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated yellow tall grass / Perpetual mess | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Hydrated yellow tall grass / Perpetual mess.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water",
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Marill",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Hydrated yellow tall grass. Controleer daarna tijd en weer voordat je voor Azurill wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Dock (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated yellow tall grass / Dock | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Hydrated yellow tall grass / Dock.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water",
      "Hype"
    ],
    "evolvesFrom": "Azurill",
    "evolvesInto": "Azumarill",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Hydrated yellow tall grass. Controleer daarna tijd en weer voordat je voor Marill wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Dock (Tijd: Morning, Day, Evening, Night | Weer: Rain)",
    "habitat": "Dock | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Dock.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water",
      "Build"
    ],
    "evolvesFrom": "Marill",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Dock. Controleer daarna tijd en weer voordat je voor Azumarill wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Marshy tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Clodsire",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Marshy tall grass. Controleer daarna tijd en weer voordat je voor Paldean Wooper wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Marshy tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Marsh fishing spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Marshy tall grass / Marsh fishing spot | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Marshy tall grass / Marsh fishing spot.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Litter",
      "Bulldoze"
    ],
    "evolvesFrom": "Paldean Wooper",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Marshy tall grass. Controleer daarna tijd en weer voordat je voor Clodsire wacht."
  },
  {
    "number": 119,
    "name": "Smeargle",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tiny Atelier (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tiny Atelier | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tiny Atelier.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Paint"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Tiny Atelier. Controleer daarna tijd en weer voordat je voor Smeargle wacht."
  },
  {
    "number": 120,
    "name": "Torchic",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Chirp-chirp meal (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Resort meal prep (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Chirp-chirp meal / Resort meal prep | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Chirp-chirp meal / Resort meal prep.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Combusken",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Chirp-chirp meal. Controleer daarna tijd en weer voordat je voor Torchic wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Resort meal prep (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Furnace Spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Resort meal prep / Furnace Spot | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Resort meal prep / Furnace Spot.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn",
      "Build"
    ],
    "evolvesFrom": "Torchic",
    "evolvesInto": "Blaziken",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Resort meal prep. Controleer daarna tijd en weer voordat je voor Combusken wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Chirp-chirp meal (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Furnace Spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Chirp-chirp meal / Furnace Spot | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Chirp-chirp meal / Furnace Spot.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn",
      "Build"
    ],
    "evolvesFrom": "Combusken",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Chirp-chirp meal. Controleer daarna tijd en weer voordat je voor Blaziken wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Elevated yellow tall grass (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain) ; Windy Flower Bed (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated yellow tall grass / Windy Flower Bed | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Elevated yellow tall grass / Windy Flower Bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water",
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Pelipper",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Elevated yellow tall grass. Controleer daarna tijd en weer voordat je voor Wingull wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Elevated yellow tall grass (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain) ; Windy Flower Bed (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated yellow tall grass / Windy Flower Bed | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Elevated yellow tall grass / Windy Flower Bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water",
      "Fly"
    ],
    "evolvesFrom": "Wingull",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Elevated yellow tall grass. Controleer daarna tijd en weer voordat je voor Pelipper wacht."
  },
  {
    "number": 125,
    "name": "Makuhita",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded Yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; All packed up (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded Yellow tall grass / All packed up | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded Yellow tall grass / All packed up.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Build",
      "Bulldoze"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Hariyama",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Tree-shaded Yellow tall grass. Controleer daarna tijd en weer voordat je voor Makuhita wacht."
  },
  {
    "number": 126,
    "name": "Hariyama",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded Yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; All packed up (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded Yellow tall grass / All packed up | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded Yellow tall grass / All packed up.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Build",
      "Bulldoze"
    ],
    "evolvesFrom": "Makuhita",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Tree-shaded Yellow tall grass. Controleer daarna tijd en weer voordat je voor Hariyama wacht."
  },
  {
    "number": 127,
    "name": "Absol",
    "type": [
      "Dark"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Welcoming resort (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Welcoming resort | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Welcoming resort.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Welcoming resort. Controleer daarna tijd en weer voordat je voor Absol wacht."
  },
  {
    "number": 128,
    "name": "Piplup",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated yellow tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Hydrated yellow tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Prinplup",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Hydrated yellow tall grass. Controleer daarna tijd en weer voordat je voor Piplup wacht."
  },
  {
    "number": 129,
    "name": "Prinplup",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Hydrated yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Waterwheel Spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated yellow tall grass / Waterwheel Spot | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Hydrated yellow tall grass / Waterwheel Spot.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water",
      "Trade"
    ],
    "evolvesFrom": "Piplup",
    "evolvesInto": "Empoleon",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Hydrated yellow tall grass. Controleer daarna tijd en weer voordat je voor Prinplup wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tableside delivery cart (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Waterwheel Spot (Tijd: Morning, Day, Evening, Night | Weer: Rain)",
    "habitat": "Tableside delivery cart / Waterwheel Spot | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tableside delivery cart / Waterwheel Spot.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water",
      "Trade"
    ],
    "evolvesFrom": "Prinplup",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Tableside delivery cart. Controleer daarna tijd en weer voordat je voor Empoleon wacht."
  },
  {
    "number": 131,
    "name": "Audino",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Working the register (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Working the register | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Working the register.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Working the register. Controleer daarna tijd en weer voordat je voor Audino wacht."
  },
  {
    "number": 132,
    "name": "Trubbish",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Trash collection site (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Trash collection site | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Trash collection site.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Recycle"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Garbodor",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Trash collection site. Controleer daarna tijd en weer voordat je voor Trubbish wacht."
  },
  {
    "number": 133,
    "name": "Garbodor",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Trash collection site (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Trash collection site | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Trash collection site.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Recycle",
      "Litter"
    ],
    "evolvesFrom": "Trubbish",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Trash collection site. Controleer daarna tijd en weer voordat je voor Garbodor wacht."
  },
  {
    "number": 134,
    "name": "Zorua",
    "type": [
      "Dark"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Breezy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Breezy flower bed | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Breezy flower bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Zoroark",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Breezy flower bed. Controleer daarna tijd en weer voordat je voor Zorua wacht."
  },
  {
    "number": 135,
    "name": "Zoroark",
    "type": [
      "Dark"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Breezy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Surprise in store (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Breezy flower bed / Surprise in store | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Breezy flower bed / Surprise in store.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade",
      "Chop"
    ],
    "evolvesFrom": "Zorua",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Breezy flower bed. Controleer daarna tijd en weer voordat je voor Zoroark wacht."
  },
  {
    "number": 136,
    "name": "Minccino",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Changing area (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Private makeup stand (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Changing area / Private makeup stand | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Changing area / Private makeup stand.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Gather"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Cinccino",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Changing area. Controleer daarna tijd en weer voordat je voor Minccino wacht."
  },
  {
    "number": 137,
    "name": "Cinccino",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Private makeup stand (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Private makeup stand | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Private makeup stand.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Gather",
      "Recycle"
    ],
    "evolvesFrom": "Minccino",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Private makeup stand. Controleer daarna tijd en weer voordat je voor Cinccino wacht."
  },
  {
    "number": 138,
    "name": "Grubbin",
    "type": [
      "Bug"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Vending machine break area (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Yellow tall grass / Vending machine break area | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Yellow tall grass / Vending machine break area.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Charjabug",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Yellow tall grass. Controleer daarna tijd en weer voordat je voor Grubbin wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Vending machine break area (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Vending machine break area | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Vending machine break area.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate",
      "Chop"
    ],
    "evolvesFrom": "Grubbin",
    "evolvesInto": "Vikavolt",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Vending machine break area. Controleer daarna tijd en weer voordat je voor Charjabug wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded flower bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate",
      "Chop"
    ],
    "evolvesFrom": "Charjabug",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Tree-shaded flower bed. Controleer daarna tijd en weer voordat je voor Vikavolt wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Pikachu space (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Pikachu space | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Pikachu space.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Pikachu space. Controleer daarna tijd en weer voordat je voor Mimikyu wacht."
  },
  {
    "number": 142,
    "name": "Pawmi",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Breezy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Tantalizing restaurant (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Breezy flower bed / Tantalizing restaurant | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Breezy flower bed / Tantalizing restaurant.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Pawmo",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Breezy flower bed. Controleer daarna tijd en weer voordat je voor Pawmi wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Tantalizing restaurant (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Café space (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tantalizing restaurant / Café space | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tantalizing restaurant / Café space.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate",
      "Crush"
    ],
    "evolvesFrom": "Pawmi",
    "evolvesInto": "Pawmot",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Tantalizing restaurant. Controleer daarna tijd en weer voordat je voor Pawmo wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Café space (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Café space | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Café space.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate",
      "Crush"
    ],
    "evolvesFrom": "Pawmo",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Café space. Controleer daarna tijd en weer voordat je voor Pawmot wacht."
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
    "location": "Bleak Beach / Withered Wastelands / Rocky Ridges / Sparkling Skylands / Palette Town",
    "area": "Beach Set (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Beach Set | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Beach Set.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Bleak Beach en maak eerst Beach Set. Controleer daarna tijd en weer voordat je voor Tatsugiri wacht."
  },
  {
    "number": 146,
    "name": "Ekans",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Hydrated graceful flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated graceful flower bed | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Hydrated graceful flower bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Arbok",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Hydrated graceful flower bed. Controleer daarna tijd en weer voordat je voor Ekans wacht."
  },
  {
    "number": 147,
    "name": "Arbok",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Hydrated graceful flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated graceful flower bed | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Hydrated graceful flower bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "Ekans",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Hydrated graceful flower bed. Controleer daarna tijd en weer voordat je voor Arbok wacht."
  },
  {
    "number": 148,
    "name": "Cleffa",
    "type": [
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Graceful flower bed (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Graceful flower bed | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Graceful flower bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Clefairy",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Graceful flower bed. Controleer daarna tijd en weer voordat je voor Cleffa wacht."
  },
  {
    "number": 149,
    "name": "Clefairy",
    "type": [
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Graceful flower bed (Tijd: Night | Weer: Sun, Cloud, Rain) ; Bronze landmark (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Graceful flower bed / Bronze landmark | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Graceful flower bed / Bronze landmark.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "Cleffa",
    "evolvesInto": "Clefable",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Graceful flower bed. Controleer daarna tijd en weer voordat je voor Clefairy wacht."
  },
  {
    "number": 150,
    "name": "Clefable",
    "type": [
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Graceful flower bed (Tijd: Night | Weer: Sun, Cloud, Rain) ; Bronze landmark (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Graceful flower bed / Bronze landmark | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Graceful flower bed / Bronze landmark.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Hype",
      "Trade"
    ],
    "evolvesFrom": "Clefairy",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Graceful flower bed. Controleer daarna tijd en weer voordat je voor Clefable wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Flower garden stump stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Flower garden stump stage | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Flower garden stump stage.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Jigglypuff",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Flower garden stump stage. Controleer daarna tijd en weer voordat je voor Igglybuff wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Flower garden stump stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Recital stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Flower garden stump stage / Recital stage | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Flower garden stump stage / Recital stage.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "Igglybuff",
    "evolvesInto": "Wigglytuff",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Flower garden stump stage. Controleer daarna tijd en weer voordat je voor Jigglypuff wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Recital stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Recital stage | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Recital stage.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Hype",
      "Trade"
    ],
    "evolvesFrom": "Jigglypuff",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Recital stage. Controleer daarna tijd en weer voordat je voor Wigglytuff wacht."
  },
  {
    "number": 154,
    "name": "Diglett",
    "type": [
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Container snacking (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded red tall grass / Container snacking | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded red tall grass / Container snacking.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Dugtrio",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Tree-shaded red tall grass. Controleer daarna tijd en weer voordat je voor Diglett wacht."
  },
  {
    "number": 155,
    "name": "Dugtrio",
    "type": [
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; House party (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded red tall grass / House party | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded red tall grass / House party.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Hype",
      "Crush"
    ],
    "evolvesFrom": "Diglett",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Tree-shaded red tall grass. Controleer daarna tijd en weer voordat je voor Dugtrio wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Boulder-shaded Tall Grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Build",
      "Gather"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Machoke",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Boulder-shaded Tall Grass. Controleer daarna tijd en weer voordat je voor Machop wacht."
  },
  {
    "number": 157,
    "name": "Machoke",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Grassy training field (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Box to the rhythm (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Grassy training field / Box to the rhythm | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Grassy training field / Box to the rhythm.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Build",
      "Gather"
    ],
    "evolvesFrom": "Machop",
    "evolvesInto": "Machamp",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Grassy training field. Controleer daarna tijd en weer voordat je voor Machoke wacht."
  },
  {
    "number": 158,
    "name": "Machamp",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Grassy training field (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Clink-clang iron construction (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Grassy training field / Clink-clang iron construction | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Grassy training field / Clink-clang iron construction.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Build",
      "Gather"
    ],
    "evolvesFrom": "Machoke",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Grassy training field. Controleer daarna tijd en weer voordat je voor Machamp wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Tall Grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Crush"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Graveler",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Tall Grass. Controleer daarna tijd en weer voordat je voor Geodude wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Mossy boulder (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Mossy boulder | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Mossy boulder.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Crush"
    ],
    "evolvesFrom": "Geodude",
    "evolvesInto": "Golem",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Mossy boulder. Controleer daarna tijd en weer voordat je voor Graveler wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Mossy boulder (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Mossy boulder | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Mossy boulder.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Crush",
      "Trade"
    ],
    "evolvesFrom": "Graveler",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Mossy boulder. Controleer daarna tijd en weer voordat je voor Golem wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Pretty flower bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Magmar",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Withered Wastelands en maak eerst Pretty flower bed. Controleer daarna tijd en weer voordat je voor Magby wacht."
  },
  {
    "number": 163,
    "name": "Magmar",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Digging and burning (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Digging and burning | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Digging and burning.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Magby",
    "evolvesInto": "Magmortar",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Digging and burning. Controleer daarna tijd en weer voordat je voor Magmar wacht."
  },
  {
    "number": 164,
    "name": "Magmortar",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Mini kitchen (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Mini kitchen | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Mini kitchen.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn",
      "Crush"
    ],
    "evolvesFrom": "Magmar",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Mini kitchen. Controleer daarna tijd en weer voordat je voor Magmortar wacht."
  },
  {
    "number": 165,
    "name": "Bonsly",
    "type": [
      "Rock"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded red tall grass | Ideale omgeving: Dry",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded red tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Bulldoze"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Sudowoodo",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Tree-shaded red tall grass. Controleer daarna tijd en weer voordat je voor Bonsly wacht."
  },
  {
    "number": 166,
    "name": "Sudowoodo",
    "type": [
      "Rock"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; House party (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded red tall grass / House party | Ideale omgeving: Dry",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded red tall grass / House party.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "Bonsly",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Tree-shaded red tall grass. Controleer daarna tijd en weer voordat je voor Sudowoodo wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Elevated red tall grass (Tijd: Night | Weer: Sun, Cloud, Rain) ; Tree-shaded graceful flower bed (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated red tall grass / Tree-shaded graceful flower bed | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Elevated red tall grass / Tree-shaded graceful flower bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade",
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Honchkrow",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Elevated red tall grass. Controleer daarna tijd en weer voordat je voor Murkrow wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Chirping recital (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Chirping recital | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Chirping recital.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade",
      "Fly"
    ],
    "evolvesFrom": "Murkrow",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Chirping recital. Controleer daarna tijd en weer voordat je voor Honchkrow wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Mossy rest spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Mossy rest spot | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Mossy rest spot.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Crush",
      "Bulldoze"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Pupitar",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Mossy rest spot. Controleer daarna tijd en weer voordat je voor Larvitar wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Tree-shaded pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded pink tall grass | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded pink tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Crush",
      "Bulldoze"
    ],
    "evolvesFrom": "Larvitar",
    "evolvesInto": "Tyranitar",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Tree-shaded pink tall grass. Controleer daarna tijd en weer voordat je voor Pupitar wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Toil in the soil (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Mossy rest spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Toil in the soil / Mossy rest spot | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Toil in the soil / Mossy rest spot.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Crush",
      "Bulldoze"
    ],
    "evolvesFrom": "Pupitar",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Toil in the soil. Controleer daarna tijd en weer voordat je voor Tyranitar wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Hydrated red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Uplifting duckweed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Hot-spring Fishing Spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated red tall grass / Uplifting duckweed / Hot-spring Fishing Spot | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Hydrated red tall grass / Uplifting duckweed / Hot-spring Fishing Spot.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Lombre",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Hydrated red tall grass. Controleer daarna tijd en weer voordat je voor Lotad wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Hydrated red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Hot-spring Fishing Spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated red tall grass / Hot-spring Fishing Spot | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Hydrated red tall grass / Hot-spring Fishing Spot.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Lotad",
    "evolvesInto": "Ludicolo",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Hydrated red tall grass. Controleer daarna tijd en weer voordat je voor Lombre wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Uplifting duckweed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Uplifting duckweed | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Uplifting duckweed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water",
      "Hype"
    ],
    "evolvesFrom": "Lombre",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Uplifting duckweed. Controleer daarna tijd en weer voordat je voor Ludicolo wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Working the register.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade",
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Working the register. Controleer daarna tijd en weer voordat je voor Mawile wacht."
  },
  {
    "number": 176,
    "name": "Torkoal",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Mossy hot spring (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Mossy hot spring | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Mossy hot spring.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Mossy hot spring. Controleer daarna tijd en weer voordat je voor Torkoal wacht."
  },
  {
    "number": 177,
    "name": "Kricketot",
    "type": [
      "Bug"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Music and magazines (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Red tall grass / Music and magazines | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Red tall grass / Music and magazines.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Kricketune",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Red tall grass. Controleer daarna tijd en weer voordat je voor Kricketot wacht."
  },
  {
    "number": 178,
    "name": "Kricketune",
    "type": [
      "Bug"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Music and magazines (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Music and magazines | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Music and magazines.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "Kricketot",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Music and magazines. Controleer daarna tijd en weer voordat je voor Kricketune wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Elevated red tall grass (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain) ; Elevated red tall grass (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain) ; Chirping recital (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated red tall grass / Chirping recital | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Elevated red tall grass / Chirping recital.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Hype",
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Elevated red tall grass. Controleer daarna tijd en weer voordat je voor Chatot wacht."
  },
  {
    "number": 180,
    "name": "Riolu",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Box to the rhythm (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Red tall grass / Box to the rhythm | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Red tall grass / Box to the rhythm.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Lucario",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Red tall grass. Controleer daarna tijd en weer voordat je voor Riolu wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Box to the rhythm (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Box to the rhythm | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Box to the rhythm.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "Riolu",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Box to the rhythm. Controleer daarna tijd en weer voordat je voor Lucario wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Music and magazines (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Music and magazines | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Music and magazines.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "DJ"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Music and magazines. Controleer daarna tijd en weer voordat je voor Stereo Rotom wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded graceful flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded graceful flower bed | Ideale omgeving: Dry",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded graceful flower bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Volcarona",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Tree-shaded graceful flower bed. Controleer daarna tijd en weer voordat je voor Larvesta wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Tree-shaded graceful flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Piping-hot lava (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded graceful flower bed / Piping-hot lava | Ideale omgeving: Dry",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded graceful flower bed / Piping-hot lava.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn",
      "Litter"
    ],
    "evolvesFrom": "Larvesta",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Tree-shaded graceful flower bed. Controleer daarna tijd en weer voordat je voor Volcarona wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Fresh Veggie Field.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Dartrix",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Fresh Veggie Field. Controleer daarna tijd en weer voordat je voor Rowlet wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Pointy tree-shaded rocky tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Pointy tree-shaded rocky tall grass | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Pointy tree-shaded rocky tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow",
      "Chop"
    ],
    "evolvesFrom": "Rowlet",
    "evolvesInto": "Decidueye",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Pointy tree-shaded rocky tall grass. Controleer daarna tijd en weer voordat je voor Dartrix wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Pointy tree-shaded rocky tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Modern living (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Pointy tree-shaded rocky tall grass / Modern living | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Pointy tree-shaded rocky tall grass / Modern living.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow",
      "Chop"
    ],
    "evolvesFrom": "Dartrix",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Pointy tree-shaded rocky tall grass. Controleer daarna tijd en weer voordat je voor Decidueye wacht."
  },
  {
    "number": 188,
    "name": "Scorbunny",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Red tall grass | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Red tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Raboot",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Red tall grass. Controleer daarna tijd en weer voordat je voor Scorbunny wacht."
  },
  {
    "number": 189,
    "name": "Raboot",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Open-air bath (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Refreshing locker room (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Open-air bath / Refreshing locker room | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Open-air bath / Refreshing locker room.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Scorbunny",
    "evolvesInto": "Cinderace",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Open-air bath. Controleer daarna tijd en weer voordat je voor Raboot wacht."
  },
  {
    "number": 190,
    "name": "Cinderace",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Refreshing locker room (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Red tall grass / Refreshing locker room | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Red tall grass / Refreshing locker room.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn",
      "Hype"
    ],
    "evolvesFrom": "Raboot",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Red tall grass. Controleer daarna tijd en weer voordat je voor Cinderace wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded  tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Search",
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Greedent",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Tree-shaded  tall grass. Controleer daarna tijd en weer voordat je voor Skwovet wacht."
  },
  {
    "number": 192,
    "name": "Greedent",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Chef's kitchen (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Chef's kitchen | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Chef's kitchen.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Party"
    ],
    "evolvesFrom": "Skwovet",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Chef's kitchen. Controleer daarna tijd en weer voordat je voor Greedent wacht."
  },
  {
    "number": 193,
    "name": "Rolycoly",
    "type": [
      "Rock"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Railroad crossing (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Railroad crossing | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Railroad crossing.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn",
      "Gather"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Carkol",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Railroad crossing. Controleer daarna tijd en weer voordat je voor Rolycoly wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Railroad crossing (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Railroad crossing | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Railroad crossing.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn",
      "Gather"
    ],
    "evolvesFrom": "Rolycoly",
    "evolvesInto": "Coalossal",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Railroad crossing. Controleer daarna tijd en weer voordat je voor Carkol wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Railroad crossing (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Heavy iron (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Railroad crossing / Heavy iron | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Railroad crossing / Heavy iron.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn",
      "Gather"
    ],
    "evolvesFrom": "Carkol",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Railroad crossing. Controleer daarna tijd en weer voordat je voor Coalossal wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Lazy-photo album scrolling (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Lazy-photo album scrolling | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Lazy-photo album scrolling.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Toxtricity",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Lazy-photo album scrolling. Controleer daarna tijd en weer voordat je voor Toxel wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Amped rock stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Amped rock stage | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Amped rock stage.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate",
      "Hype"
    ],
    "evolvesFrom": "Toxel",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Amped rock stage. Controleer daarna tijd en weer voordat je voor Toxtricity wacht."
  },
  {
    "number": 198,
    "name": "Fidough",
    "type": [
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Graceful flower bed (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain) ; Best bread bakery (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain)",
    "habitat": "Graceful flower bed / Best bread bakery | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Graceful flower bed / Best bread bakery.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Dachsbun",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Graceful flower bed. Controleer daarna tijd en weer voordat je voor Fidough wacht."
  },
  {
    "number": 199,
    "name": "Dachsbun",
    "type": [
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Graceful flower bed (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain) ; Best bread bakery (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain)",
    "habitat": "Graceful flower bed / Best bread bakery | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Graceful flower bed / Best bread bakery.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Search",
      "Trade"
    ],
    "evolvesFrom": "Fidough",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Graceful flower bed. Controleer daarna tijd en weer voordat je voor Dachsbun wacht."
  },
  {
    "number": 200,
    "name": "Charcadet",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Piping-hot lava (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Piping-hot lava | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Piping-hot lava.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Armarouge / Ceruledge",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Piping-hot lava. Controleer daarna tijd en weer voordat je voor Charcadet wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Auspicious knight's shrine (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Auspicious knight's shrine | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Auspicious knight's shrine.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Charcadet",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Auspicious knight's shrine. Controleer daarna tijd en weer voordat je voor Armarouge wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Malicious knight's shrine (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Malicious knight's shrine | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Malicious knight's shrine.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Charcadet",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Malicious knight's shrine. Controleer daarna tijd en weer voordat je voor Ceruledge wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Creepy white rocks (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Container snacking (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Creepy white rocks / Container snacking | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Creepy white rocks / Container snacking.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Glimmora",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Creepy white rocks. Controleer daarna tijd en weer voordat je voor Glimmet wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Creepy white rocks (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Container snacking (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Creepy white rocks / Container snacking | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Creepy white rocks / Container snacking.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "Glimmet",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Creepy white rocks. Controleer daarna tijd en weer voordat je voor Glimmora wacht."
  },
  {
    "number": 205,
    "name": "Gimmighoul",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Mini museum (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Mini museum | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Mini museum.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Collect"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Gholdengo",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Mini museum. Controleer daarna tijd en weer voordat je voor Gimmighoul wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Absolute luxury (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Absolute luxury | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Absolute luxury.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Collect"
    ],
    "evolvesFrom": "Gimmighoul",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Absolute luxury. Controleer daarna tijd en weer voordat je voor Gholdengo wacht."
  },
  {
    "number": 207,
    "name": "Vulpix",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Fluffy flower bed | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Fluffy flower bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Ninetales",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Fluffy flower bed. Controleer daarna tijd en weer voordat je voor Vulpix wacht."
  },
  {
    "number": 208,
    "name": "Ninetales",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Nine flames (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Fluffy flower bed / Nine flames | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Fluffy flower bed / Nine flames.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Vulpix",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Fluffy flower bed. Controleer daarna tijd en weer voordat je voor Ninetales wacht."
  },
  {
    "number": 209,
    "name": "Poliwag",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Squeaky clean (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Squeaky clean | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Squeaky clean.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Poliwhirl",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Squeaky clean. Controleer daarna tijd en weer voordat je voor Poliwag wacht."
  },
  {
    "number": 210,
    "name": "Poliwhirl",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Hydrated fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated fluffy flower bed | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Hydrated fluffy flower bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Poliwag",
    "evolvesInto": "Poliwrath / Politoed",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Hydrated fluffy flower bed. Controleer daarna tijd en weer voordat je voor Poliwhirl wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Sewer hole inspection (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Dojo training (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Sewer hole inspection / Dojo training | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Sewer hole inspection / Dojo training.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water",
      "Build"
    ],
    "evolvesFrom": "Poliwhirl",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Sewer hole inspection. Controleer daarna tijd en weer voordat je voor Poliwrath wacht."
  },
  {
    "number": 212,
    "name": "Politoed",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Hydrated graceful flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Flower garden stump stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Harmonious hot spring (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated graceful flower bed / Flower garden stump stage / Harmonious hot spring | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Hydrated graceful flower bed / Flower garden stump stage / Harmonious hot spring.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water",
      "Hype"
    ],
    "evolvesFrom": "Poliwhirl",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Hydrated graceful flower bed. Controleer daarna tijd en weer voordat je voor Politoed wacht."
  },
  {
    "number": 213,
    "name": "Abra",
    "type": [
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Surging psychic power (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Fortune-teller's table (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Surging psychic power / Fortune-teller's table | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Surging psychic power / Fortune-teller's table.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Teleport"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Kadabra",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Surging psychic power. Controleer daarna tijd en weer voordat je voor Abra wacht."
  },
  {
    "number": 214,
    "name": "Kadabra",
    "type": [
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Fortune-teller's table (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Fortune-teller's table | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Fortune-teller's table.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Teleport"
    ],
    "evolvesFrom": "Abra",
    "evolvesInto": "Alakazam",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Fortune-teller's table. Controleer daarna tijd en weer voordat je voor Kadabra wacht."
  },
  {
    "number": 215,
    "name": "Alakazam",
    "type": [
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Surging psychic power (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Experiment Space (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Surging psychic power / Experiment Space | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Surging psychic power / Experiment Space.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Teleport",
      "Trade"
    ],
    "evolvesFrom": "Kadabra",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Surging psychic power. Controleer daarna tijd en weer voordat je voor Alakazam wacht."
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
    "location": "Nog niet bevestigd",
    "area": "Nog niet bevestigd",
    "habitat": "Nog niet bevestigd",
    "obtainMethod": "Nog niet bevestigd",
    "requirements": "Nog niet bevestigd",
    "specialties": [
      "Gather"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Mr. Mime",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: controleer eerst de habitat- en locatievoorwaarden voor Mime Jr. voordat je materialen uitgeeft."
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
    "location": "Nog niet bevestigd",
    "area": "Nog niet bevestigd",
    "habitat": "Nog niet bevestigd",
    "obtainMethod": "Nog niet bevestigd",
    "requirements": "Nog niet bevestigd",
    "specialties": [
      "Gather",
      "Build"
    ],
    "evolvesFrom": "Mime Jr.",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: controleer eerst de habitat- en locatievoorwaarden voor Mr. Mime voordat je materialen uitgeeft."
  },
  {
    "number": 218,
    "name": "Porygon",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Researcher's desk (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Researcher's desk | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Researcher's desk.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Recycle"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Porygon2",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Researcher's desk. Controleer daarna tijd en weer voordat je voor Porygon wacht."
  },
  {
    "number": 219,
    "name": "Porygon2",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Work desk (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Work desk | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Work desk.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Recycle"
    ],
    "evolvesFrom": "Porygon",
    "evolvesInto": "Porygon-Z",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Work desk. Controleer daarna tijd en weer voordat je voor Porygon2 wacht."
  },
  {
    "number": 220,
    "name": "Porygon-Z",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Game Corner battle zone (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Game Corner battle zone | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Game Corner battle zone.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Rarify"
    ],
    "evolvesFrom": "Porygon2",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Game Corner battle zone. Controleer daarna tijd en weer voordat je voor Porygon-Z wacht."
  },
  {
    "number": 221,
    "name": "Dratini",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Hydrated fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Simple bathroom (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated fluffy flower bed / Simple bathroom | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Hydrated fluffy flower bed / Simple bathroom.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Dragonair",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Hydrated fluffy flower bed. Controleer daarna tijd en weer voordat je voor Dratini wacht."
  },
  {
    "number": 222,
    "name": "Dragonair",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Hydrated fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Simple bathroom (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated fluffy flower bed / Simple bathroom | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Hydrated fluffy flower bed / Simple bathroom.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Dratini",
    "evolvesInto": "Dragonite",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Hydrated fluffy flower bed. Controleer daarna tijd en weer voordat je voor Dragonair wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Waterside dinghy (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Waterside dinghy | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Waterside dinghy.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water",
      "Fly"
    ],
    "evolvesFrom": "Dragonair",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Waterside dinghy. Controleer daarna tijd en weer voordat je voor Dragonite wacht."
  },
  {
    "number": 224,
    "name": "Cyndaquil",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Concrete pipe secret base (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Concrete pipe secret base | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Concrete pipe secret base.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Quilava",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Concrete pipe secret base. Controleer daarna tijd en weer voordat je voor Cyndaquil wacht."
  },
  {
    "number": 225,
    "name": "Quilava",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Concrete pipe secret base (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Fireplace nap spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Concrete pipe secret base / Fireplace nap spot | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Concrete pipe secret base / Fireplace nap spot.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Cyndaquil",
    "evolvesInto": "Typhlosion",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Concrete pipe secret base. Controleer daarna tijd en weer voordat je voor Quilava wacht."
  },
  {
    "number": 226,
    "name": "Typhlosion",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Fireplace nap spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Top pop (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Fireplace nap spot / Top pop | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Fireplace nap spot / Top pop.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn",
      "Trade"
    ],
    "evolvesFrom": "Quilava",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Fireplace nap spot. Controleer daarna tijd en weer voordat je voor Typhlosion wacht."
  },
  {
    "number": 227,
    "name": "Misdreavus",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Fluffy flower bed (Tijd: Night | Weer: Sun, Cloud, Rain) ; Office storeroom (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Fluffy flower bed / Office storeroom | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Fluffy flower bed / Office storeroom.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Mismagius",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Fluffy flower bed. Controleer daarna tijd en weer voordat je voor Misdreavus wacht."
  },
  {
    "number": 228,
    "name": "Mismagius",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Fluffy flower bed (Tijd: Night | Weer: Sun, Cloud, Rain) ; Home theater (Tijd: Night | Weer: Sun, Cloud, Rain) ; Office storeroom (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Fluffy flower bed / Home theater / Office storeroom | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Fluffy flower bed / Home theater / Office storeroom.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Gather",
      "Trade"
    ],
    "evolvesFrom": "Misdreavus",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Fluffy flower bed. Controleer daarna tijd en weer voordat je voor Mismagius wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Tree-shaded fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded fluffy flower bed | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded fluffy flower bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Gather"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Farigiraf",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Tree-shaded fluffy flower bed. Controleer daarna tijd en weer voordat je voor Girafarig wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Tree-shaded fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded fluffy flower bed | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded fluffy flower bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Gather",
      "Search"
    ],
    "evolvesFrom": "Girafarig",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Tree-shaded fluffy flower bed. Controleer daarna tijd en weer voordat je voor Farigiraf wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Study Area (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Study Area | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Study Area.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Teleport"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Kirlia",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Study Area. Controleer daarna tijd en weer voordat je voor Ralts wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Study Area (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Moisturizing makeup stand (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Study Area / Moisturizing makeup stand | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Study Area / Moisturizing makeup stand.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Teleport"
    ],
    "evolvesFrom": "Ralts",
    "evolvesInto": "Gardevoir / Gallade",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Study Area. Controleer daarna tijd en weer voordat je voor Kirlia wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Moisturizing makeup stand (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Mini library (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Moisturizing makeup stand / Mini library | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Moisturizing makeup stand / Mini library.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Teleport",
      "Trade"
    ],
    "evolvesFrom": "Kirlia",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Moisturizing makeup stand. Controleer daarna tijd en weer voordat je voor Gardevoir wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Dojo training (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Dojo training | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Dojo training.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Teleport",
      "Build"
    ],
    "evolvesFrom": "Kirlia",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Dojo training. Controleer daarna tijd en weer voordat je voor Gallade wacht."
  },
  {
    "number": 235,
    "name": "Plusle",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Picturesque photo cutout board (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Picturesque photo cutout board | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Picturesque photo cutout board.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Picturesque photo cutout board. Controleer daarna tijd en weer voordat je voor Plusle wacht."
  },
  {
    "number": 236,
    "name": "Minun",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Picturesque photo cutout board (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Picturesque photo cutout board | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Picturesque photo cutout board.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Picturesque photo cutout board. Controleer daarna tijd en weer voordat je voor Minun wacht."
  },
  {
    "number": 237,
    "name": "Trapinch",
    "type": [
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Pink tall grass | Ideale omgeving: Dry",
    "obtainMethod": "Bouw één van deze geschikte habitats: Pink tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Bulldoze",
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Vibrava",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Pink tall grass. Controleer daarna tijd en weer voordat je voor Trapinch wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Pink tall grass | Ideale omgeving: Dry",
    "obtainMethod": "Bouw één van deze geschikte habitats: Pink tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Bulldoze",
      "Fly"
    ],
    "evolvesFrom": "Trapinch",
    "evolvesInto": "Flygon",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Pink tall grass. Controleer daarna tijd en weer voordat je voor Vibrava wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Pink tall grass | Ideale omgeving: Dry",
    "obtainMethod": "Bouw één van deze geschikte habitats: Pink tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Bulldoze",
      "Fly"
    ],
    "evolvesFrom": "Vibrava",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Pink tall grass. Controleer daarna tijd en weer voordat je voor Flygon wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Pink tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Pink tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Altaria",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Pink tall grass. Controleer daarna tijd en weer voordat je voor Swablu wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Birdsong garden (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Birdsong garden | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Birdsong garden.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Litter",
      "Fly"
    ],
    "evolvesFrom": "Swablu",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Birdsong garden. Controleer daarna tijd en weer voordat je voor Altaria wacht."
  },
  {
    "number": 242,
    "name": "Duskull",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Pink tall grass (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Pink tall grass | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Pink tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Gather"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Dusclops",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Pink tall grass. Controleer daarna tijd en weer voordat je voor Duskull wacht."
  },
  {
    "number": 243,
    "name": "Dusclops",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Trash site TV (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Trash site TV | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Trash site TV.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Gather"
    ],
    "evolvesFrom": "Duskull",
    "evolvesInto": "Dusknoir",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Trash site TV. Controleer daarna tijd en weer voordat je voor Dusclops wacht."
  },
  {
    "number": 244,
    "name": "Dusknoir",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Trash site TV (Tijd: Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Trash site TV | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Trash site TV.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Gather",
      "Trade"
    ],
    "evolvesFrom": "Dusclops",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Trash site TV. Controleer daarna tijd en weer voordat je voor Dusknoir wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Cycling rest stop (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Cycling rest stop | Ideale omgeving: Cool",
    "obtainMethod": "Bouw één van deze geschikte habitats: Cycling rest stop.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Recycle"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Metang",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Cycling rest stop. Controleer daarna tijd en weer voordat je voor Beldum wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Professor's apprentice program (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Professor's apprentice program | Ideale omgeving: Cool",
    "obtainMethod": "Bouw één van deze geschikte habitats: Professor's apprentice program.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Recycle"
    ],
    "evolvesFrom": "Beldum",
    "evolvesInto": "Metagross",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Professor's apprentice program. Controleer daarna tijd en weer voordat je voor Metang wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Gamer's paradise (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Gamer's paradise | Ideale omgeving: Cool",
    "obtainMethod": "Bouw één van deze geschikte habitats: Gamer's paradise.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Recycle",
      "Crush"
    ],
    "evolvesFrom": "Metang",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Gamer's paradise. Controleer daarna tijd en weer voordat je voor Metagross wacht."
  },
  {
    "number": 248,
    "name": "Snivy",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Playland (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Playland | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Playland.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Servine",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Playland. Controleer daarna tijd en weer voordat je voor Snivy wacht."
  },
  {
    "number": 249,
    "name": "Servine",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Tree-shaded fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded fluffy flower bed | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded fluffy flower bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "Snivy",
    "evolvesInto": "Serperior",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Tree-shaded fluffy flower bed. Controleer daarna tijd en weer voordat je voor Servine wacht."
  },
  {
    "number": 250,
    "name": "Serperior",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Tree-shaded fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Public reading material (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded fluffy flower bed / Public reading material | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded fluffy flower bed / Public reading material.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "Servine",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Tree-shaded fluffy flower bed. Controleer daarna tijd en weer voordat je voor Serperior wacht."
  },
  {
    "number": 251,
    "name": "Froakie",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Hydrated pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated pink tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Hydrated pink tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Frogadier",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Hydrated pink tall grass. Controleer daarna tijd en weer voordat je voor Froakie wacht."
  },
  {
    "number": 252,
    "name": "Frogadier",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Hydrated pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Prank button (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated pink tall grass / Prank button | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Hydrated pink tall grass / Prank button.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Froakie",
    "evolvesInto": "Greninja",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Hydrated pink tall grass. Controleer daarna tijd en weer voordat je voor Frogadier wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Hydrated pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Prank button (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Hydrated pink tall grass / Prank button | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Hydrated pink tall grass / Prank button.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water",
      "Chop"
    ],
    "evolvesFrom": "Frogadier",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Hydrated pink tall grass. Controleer daarna tijd en weer voordat je voor Greninja wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Tire Park (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tire Park | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tire Park.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Tire Park. Controleer daarna tijd en weer voordat je voor Dedenne wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Rhythmic Living room (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Rhythmic Living room | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Rhythmic Living room.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Noivern",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Rhythmic Living room. Controleer daarna tijd en weer voordat je voor Noibat wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Rhythmic Living room (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Rhythmic Living room | Ideale omgeving: Dark",
    "obtainMethod": "Bouw één van deze geschikte habitats: Rhythmic Living room.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Search",
      "Fly"
    ],
    "evolvesFrom": "Noibat",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Rhythmic Living room. Controleer daarna tijd en weer voordat je voor Noivern wacht."
  },
  {
    "number": 257,
    "name": "Rookidee",
    "type": [
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Fluffy flower bed | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Fluffy flower bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Corvisquire",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Fluffy flower bed. Controleer daarna tijd en weer voordat je voor Rookidee wacht."
  },
  {
    "number": 258,
    "name": "Corvisquire",
    "type": [
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Elevated pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated pink tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Elevated pink tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "Rookidee",
    "evolvesInto": "Corviknight",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Elevated pink tall grass. Controleer daarna tijd en weer voordat je voor Corvisquire wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Elevated pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Sewer hole inspection (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated pink tall grass / Sewer hole inspection | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Elevated pink tall grass / Sewer hole inspection.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Chop",
      "Fly"
    ],
    "evolvesFrom": "Corvisquire",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Elevated pink tall grass. Controleer daarna tijd en weer voordat je voor Corviknight wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Tree-shaded pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded pink tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded pink tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Gather",
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Drakloak",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Tree-shaded pink tall grass. Controleer daarna tijd en weer voordat je voor Dreepy wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Tree-shaded pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Office storeroom (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded pink tall grass / Office storeroom | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded pink tall grass / Office storeroom.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Gather",
      "Search"
    ],
    "evolvesFrom": "Dreepy",
    "evolvesInto": "Dragapult",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Tree-shaded pink tall grass. Controleer daarna tijd en weer voordat je voor Drakloak wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Office storeroom (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Office storeroom | Ideale omgeving: Humid",
    "obtainMethod": "Bouw één van deze geschikte habitats: Office storeroom.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Gather",
      "Trade"
    ],
    "evolvesFrom": "Drakloak",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Office storeroom. Controleer daarna tijd en weer voordat je voor Dragapult wacht."
  },
  {
    "number": 263,
    "name": "Sprigatito",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Tree-shaded pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Interrogation desk (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tree-shaded pink tall grass / Interrogation desk | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tree-shaded pink tall grass / Interrogation desk.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Floragato",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Tree-shaded pink tall grass. Controleer daarna tijd en weer voordat je voor Sprigatito wacht."
  },
  {
    "number": 264,
    "name": "Floragato",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Interrogation desk (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Interrogation desk | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Interrogation desk.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "Sprigatito",
    "evolvesInto": "Meowscarada",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Interrogation desk. Controleer daarna tijd en weer voordat je voor Floragato wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Heart-pounding surprise box (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Heart-pounding surprise box | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Heart-pounding surprise box.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow",
      "Hype"
    ],
    "evolvesFrom": "Floragato",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Heart-pounding surprise box. Controleer daarna tijd en weer voordat je voor Meowscarada wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Elevated pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated pink tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Elevated pink tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Kilowattrel",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Elevated pink tall grass. Controleer daarna tijd en weer voordat je voor Wattrel wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Elevated pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated pink tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Elevated pink tall grass.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate",
      "Fly"
    ],
    "evolvesFrom": "Wattrel",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Elevated pink tall grass. Controleer daarna tijd en weer voordat je voor Kilowattrel wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Large luggage carrier / Oversized dumping ground / Sewer hole inspection.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Tinkatuff",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Large luggage carrier. Controleer daarna tijd en weer voordat je voor Tinkatink wacht."
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
    "location": "Palette Town / Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands",
    "area": "Large luggage carrier (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Large luggage carrier | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Large luggage carrier.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "Tinkatink",
    "evolvesInto": "Tinkaton",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Large luggage carrier. Controleer daarna tijd en weer voordat je voor Tinkatuff wacht."
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
    "location": "Sparkling Skylands / Withered Wastelands / Bleak Beach / Rocky Ridges / Palette Town",
    "area": "Oversized dumping ground (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Oversized dumping ground | Ideale omgeving: Bright",
    "obtainMethod": "Bouw één van deze geschikte habitats: Oversized dumping ground.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Engineer"
    ],
    "evolvesFrom": "Tinkatuff",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Sparkling Skylands en maak eerst Oversized dumping ground. Controleer daarna tijd en weer voordat je voor Tinkaton wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Wing Fossil Display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Wing Fossil Display | Ideale omgeving: Dry",
    "obtainMethod": "Bouw één van deze geschikte habitats: Wing Fossil Display.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Wing Fossil Display. Controleer daarna tijd en weer voordat je voor Aerodactyl wacht."
  },
  {
    "number": 272,
    "name": "Cranidos",
    "type": [
      "Rock"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Skull Fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Skull Fossil display | Ideale omgeving: Dry",
    "obtainMethod": "Bouw één van deze geschikte habitats: Skull Fossil display.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Crush"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Rampardos",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Skull Fossil display. Controleer daarna tijd en weer voordat je voor Cranidos wacht."
  },
  {
    "number": 273,
    "name": "Rampardos",
    "type": [
      "Rock"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Headbutt Fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Headbutt Fossil display | Ideale omgeving: Dry",
    "obtainMethod": "Bouw één van deze geschikte habitats: Headbutt Fossil display.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Crush",
      "Litter"
    ],
    "evolvesFrom": "Cranidos",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Headbutt Fossil display. Controleer daarna tijd en weer voordat je voor Rampardos wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Armor Fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Armor Fossil display | Ideale omgeving: Dry",
    "obtainMethod": "Bouw één van deze geschikte habitats: Armor Fossil display.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Crush"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Bastiodon",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Armor Fossil display. Controleer daarna tijd en weer voordat je voor Shieldon wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Shield Fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Shield Fossil display | Ideale omgeving: Dry",
    "obtainMethod": "Bouw één van deze geschikte habitats: Shield Fossil display.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Crush",
      "Litter"
    ],
    "evolvesFrom": "Shieldon",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Shield Fossil display. Controleer daarna tijd en weer voordat je voor Bastiodon wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Jaw Fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Jaw Fossil display | Ideale omgeving: Dry",
    "obtainMethod": "Bouw één van deze geschikte habitats: Jaw Fossil display.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Crush"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Tyrantrum",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Jaw Fossil display. Controleer daarna tijd en weer voordat je voor Tyrunt wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Despot fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Despot fossil display | Ideale omgeving: Dry",
    "obtainMethod": "Bouw één van deze geschikte habitats: Despot fossil display.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Crush",
      "Litter"
    ],
    "evolvesFrom": "Tyrunt",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Despot fossil display. Controleer daarna tijd en weer voordat je voor Tyrantrum wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Sail Fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Sail Fossil display | Ideale omgeving: Cool",
    "obtainMethod": "Bouw één van deze geschikte habitats: Sail Fossil display.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Crush"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Aurorus",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Sail Fossil display. Controleer daarna tijd en weer voordat je voor Amaura wacht."
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
    "location": "Rocky Ridges / Withered Wastelands / Bleak Beach / Sparkling Skylands / Palette Town",
    "area": "Tundra fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Tundra fossil display | Ideale omgeving: Cool",
    "obtainMethod": "Bouw één van deze geschikte habitats: Tundra fossil display.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Crush",
      "Litter"
    ],
    "evolvesFrom": "Amaura",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Rocky Ridges en maak eerst Tundra fossil display. Controleer daarna tijd en weer voordat je voor Aurorus wacht."
  },
  {
    "number": 280,
    "name": "Eevee",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town / Withered Wastelands / Bleak Beach / Rocky Ridges / Sparkling Skylands",
    "area": "Pretty flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Pretty flower bed | Ideale omgeving: Warm",
    "obtainMethod": "Bouw één van deze geschikte habitats: Pretty flower bed.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Vaporeon / Jolteon / Flareon / Espeon / Umbreon / Leafeon / Glaceon / Sylveon",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Pretty flower bed. Controleer daarna tijd en weer voordat je voor Eevee wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Boundless blue beverage.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Boundless blue beverage. Controleer daarna tijd en weer voordat je voor Vaporeon wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Electrifying potatoes.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Electrifying potatoes. Controleer daarna tijd en weer voordat je voor Jolteon wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Burning-hot spice.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Burning-hot spice. Controleer daarna tijd en weer voordat je voor Flareon wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Elegant daytime treats.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Gather"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Elegant daytime treats. Controleer daarna tijd en weer voordat je voor Espeon wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Dark-chocolate cookies.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Dark-chocolate cookies. Controleer daarna tijd en weer voordat je voor Umbreon wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Leafy greens sandwich.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Leafy greens sandwich. Controleer daarna tijd en weer voordat je voor Leafeon wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Chilly shaved ice.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Chilly shaved ice. Controleer daarna tijd en weer voordat je voor Glaceon wacht."
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
    "obtainMethod": "Bouw één van deze geschikte habitats: Lovely ribbon cake.",
    "requirements": "Benodigd: bouw één van de vermelde habitats. Controleer de Habitat Dex voor de exacte materialen per habitat.",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: begin in Palette Town en maak eerst Lovely ribbon cake. Controleer daarna tijd en weer voordat je voor Sylveon wacht."
  },
  {
    "number": 289,
    "name": "Kyogre",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Verhaalontmoeting; geen normaal habitat/tijd/weertype nodig.",
    "habitat": "Geen normaal habitat | Ideale omgeving: Humid",
    "obtainMethod": "Volg de Withered Wastelands-verhaallijn. Nadat de regen is opgeroepen, verschijnt Kyogre in het zuiden bij de oceaan.",
    "requirements": "Volg de hoofdverhaallijn in Withered Wastelands en roep de regen op.",
    "specialties": [
      "???"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: behandel Kyogre als een verhaalontmoeting, niet als een gewone habitat-spawn."
  },
  {
    "number": 290,
    "name": "Raikou",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Dream Island",
    "area": "Speciale Dream Island-ontmoeting; normale tijd/weervoorwaarden zijn niet van toepassing.",
    "habitat": "Geen normaal habitat | Ideale omgeving: Bright",
    "obtainMethod": "Gebruik de Pikachu Doll op Dream Island om Raikou te vinden.",
    "requirements": "Pikachu Doll.",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: zorg dat je de Pikachu Doll bij je hebt voordat je specifiek voor Raikou naar Dream Island gaat."
  },
  {
    "number": 291,
    "name": "Entei",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Dream Island",
    "area": "Speciale Dream Island-ontmoeting; normale tijd/weervoorwaarden zijn niet van toepassing.",
    "habitat": "Geen normaal habitat | Ideale omgeving: Warm",
    "obtainMethod": "Gebruik de Arcanine Doll op Dream Island om Entei te vinden.",
    "requirements": "Arcanine Doll.",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: neem de Arcanine Doll mee als Entei je doel is; zonder die speciale methode is dit geen normale habitat-spawn."
  },
  {
    "number": 292,
    "name": "Suicune",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Dream Island",
    "area": "Speciale Dream Island-ontmoeting; normale tijd/weervoorwaarden zijn niet van toepassing.",
    "habitat": "Geen normaal habitat | Ideale omgeving: Humid",
    "obtainMethod": "Gebruik de Eevee Doll op Dream Island om Suicune te vinden.",
    "requirements": "Eevee Doll.",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: ga pas gericht voor Suicune zodra je de Eevee Doll hebt."
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
    "location": "Rocky Ridges",
    "area": "Speciale ontmoeting; normale habitatvoorwaarden zijn niet van toepassing.",
    "habitat": "Geen normaal habitat | Ideale omgeving: Warm",
    "obtainMethod": "Organiseer de vereiste Party in Rocky Ridges om Volcanion te laten verschijnen.",
    "requirements": "Voltooi de benodigde Party-voorwaarde in Rocky Ridges.",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: zoek Volcanion niet via gewone habitats; richt je op de speciale Party-voorwaarde in Rocky Ridges."
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
    "location": "Palette Town",
    "area": "Speciale Legendary-ontmoeting; normale tijd/weervoorwaarden zijn niet van toepassing.",
    "habitat": "Freezing Chambers | Ideale omgeving: Cool",
    "obtainMethod": "Bouw de Freezing Chambers om Articuno te kunnen ontmoeten.",
    "requirements": "Freezing Chambers-kit uit Palette Town.",
    "specialties": [
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: haal eerst de Freezing Chambers-kit; Articuno is geen normale habitat-spawn."
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
    "location": "Palette Town",
    "area": "Speciale Legendary-ontmoeting; normale tijd/weervoorwaarden zijn niet van toepassing.",
    "habitat": "Abandoned Power Plant | Ideale omgeving: Bright",
    "obtainMethod": "Bouw de Abandoned Power Plant om Zapdos te kunnen ontmoeten.",
    "requirements": "Abandoned Power Plant-kit uit Palette Town.",
    "specialties": [
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: bouw eerst de Abandoned Power Plant voordat je tijd steekt in het zoeken naar Zapdos."
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
    "location": "Palette Town",
    "area": "Speciale Legendary-ontmoeting; normale tijd/weervoorwaarden zijn niet van toepassing.",
    "habitat": "Altar of Flame | Ideale omgeving: Warm",
    "obtainMethod": "Bouw de Altar of Flame om Moltres te kunnen ontmoeten.",
    "requirements": "Altar of Flame-kit uit Palette Town.",
    "specialties": [
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: Moltres vraagt om de Altar of Flame; behandel hem dus niet als een gewone habitat-Pokémon."
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
    "location": "Speciale Legendary-ontmoeting",
    "area": "Normale tijd/weervoorwaarden zijn niet van toepassing.",
    "habitat": "Geen normaal habitat | Ideale omgeving: Humid",
    "obtainMethod": "Gebruik de Tidal Bell om Lugia te ontmoeten.",
    "requirements": "Tidal Bell.",
    "specialties": [
      "???"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: bewaar de Tidal Bell voor Lugia; #297 is Lugia in de Pokopia-Pokédex."
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
    "location": "Speciale Legendary-ontmoeting",
    "area": "Normale tijd/weervoorwaarden zijn niet van toepassing.",
    "habitat": "Geen normaal habitat | Ideale omgeving: Warm",
    "obtainMethod": "Gebruik de Clear Bell om Ho-Oh te ontmoeten.",
    "requirements": "Clear Bell.",
    "specialties": [
      "???"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: gebruik de Clear Bell voor Ho-Oh; #298 is Ho-Oh in de Pokopia-Pokédex."
  },
  {
    "number": 299,
    "name": "Mewtwo",
    "type": [
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Dream Island",
    "area": "Speciale Dream Island-ontmoeting; normale tijd/weervoorwaarden zijn niet van toepassing.",
    "habitat": "Geen normaal habitat | Ideale omgeving: Dark",
    "obtainMethod": "Gebruik de Dragonite Doll op Dream Island om Mewtwo te vinden.",
    "requirements": "Dragonite Doll.",
    "specialties": [
      "Teleport"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: neem de Dragonite Doll mee als je specifiek voor Mewtwo naar Dream Island gaat."
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
    "area": "Mysterious Slate Puzzle; normale habitatvoorwaarden zijn niet van toepassing.",
    "habitat": "Geen normaal habitat | Ideale omgeving: Warm",
    "obtainMethod": "Los de Mysterious Slate Puzzle op om Mew te ontmoeten.",
    "requirements": "Verzamel de Mysterious Slates en voltooi de bijbehorende puzzel.",
    "specialties": [
      "Teleport"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Mijn tip: zoek eerst alle Mysterious Slates. Mew is een puzzelbeloning en geen gewone habitat-spawn."
  }
];
