// NLPokopia - gecontroleerde hoofd-Pokédex #001 t/m #300
// Geen 'Mijn tip:' prefix. Onbevestigde habitat-recepten blijven bewust leeg.
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
    "location": "Withered Wastelands",
    "area": "Tall Grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Bench with greenery (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tall Grass / Bench with greenery | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Tall Grass: 4x Tall Grass",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Ivysaur",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tall Grass; dat is de eerste habitat die je voor Bulbasaur kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Field of Flowers (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Bench with greenery (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Field of Flowers / Bench with greenery | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "Bulbasaur",
    "evolvesInto": "Venusaur",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Field of Flowers; dat is de eerste habitat die je voor Ivysaur kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Field of Flowers (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Garden Terrace (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Field of Flowers / Garden Terrace | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "Ivysaur",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Field of Flowers; dat is de eerste habitat die je voor Venusaur kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 4,
    "name": "Charmander",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Tall Grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tall Grass | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Tall Grass: 4x Tall Grass",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Charmeleon",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tall Grass; dat is de eerste habitat die je voor Charmander kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 5,
    "name": "Charmeleon",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Campsite (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Campsite | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Charmander",
    "evolvesInto": "Charizard",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Campsite; dat is de eerste habitat die je voor Charmeleon kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Tall Grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud | Zeldzaamheid: Very Rare) ; Berry-feast Campsite (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud | Zeldzaamheid: Rare)",
    "habitat": "Tall Grass / Berry-feast Campsite | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Tall Grass: 4x Tall Grass",
    "specialties": [
      "Burn",
      "Fly"
    ],
    "evolvesFrom": "Charmeleon",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tall Grass; dat is de eerste habitat die je voor Charizard kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud."
  },
  {
    "number": 7,
    "name": "Squirtle",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Tall Grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Hydrated tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tall Grass / Hydrated tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Tall Grass: 4x Tall Grass",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Wartortle",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tall Grass; dat is de eerste habitat die je voor Squirtle kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 8,
    "name": "Wartortle",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Hydrated tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Hydrated tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Squirtle",
    "evolvesInto": "Blastoise",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Hydrated tall grass; dat is de eerste habitat die je voor Wartortle kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 9,
    "name": "Blastoise",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Hydrated tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Very Rare) ; Floating in the shade (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Hydrated tall grass / Floating in the shade | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water",
      "Trade"
    ],
    "evolvesFrom": "Wartortle",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Hydrated tall grass; dat is de eerste habitat die je voor Blastoise kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Elevated tall grass (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Pretty flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Elevated tall grass / Pretty flower bed | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Fly",
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Pidgeotto",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Elevated tall grass; dat is de eerste habitat die je voor Pidgey kunt proberen. Let op: Morning, Day, Evening, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Elevated tall grass (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Pretty flower bed (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Elevated tall grass / Pretty flower bed | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Fly",
      "Search"
    ],
    "evolvesFrom": "Pidgey",
    "evolvesInto": "Pidgeot",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Elevated tall grass; dat is de eerste habitat die je voor Pidgeotto kunt proberen. Let op: Morning, Day, Evening, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Luxury chirp-chirp meal (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Luxury chirp-chirp meal | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Fly",
      "Chop"
    ],
    "evolvesFrom": "Pidgeotto",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Luxury chirp-chirp meal; dat is de eerste habitat die je voor Pidgeot kunt proberen. Let op: Morning, Day, Evening, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Tall Grass (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tall Grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Tall Grass: 4x Tall Grass",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Gloom",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tall Grass; dat is de eerste habitat die je voor Oddish kunt proberen. Let op: Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Tropical vibes (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tropical vibes | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "Oddish",
    "evolvesInto": "Vileplume / Bellossom",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tropical vibes; dat is de eerste habitat die je voor Gloom kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Chansey Resting area (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Chansey Resting area | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "Gloom",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Chansey Resting area; dat is de eerste habitat die je voor Vileplume kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 16,
    "name": "Bellossom",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Chansey Resting area (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Chansey Resting area | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Hype"
    ],
    "evolvesFrom": "Gloom",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Chansey Resting area; dat is de eerste habitat die je voor Bellossom kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Elevated flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Flower garden (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Elevated flower bed / Flower garden | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Parasect",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Elevated flower bed; dat is de eerste habitat die je voor Paras kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Elevated flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Flower garden (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Elevated flower bed / Flower garden | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "Paras",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Elevated flower bed; dat is de eerste habitat die je voor Parasect kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Illuminated tall grass (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Illuminated bench (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Illuminated tall grass / Illuminated bench | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Venomoth",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Illuminated tall grass; dat is de eerste habitat die je voor Venonat kunt proberen. Let op: Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Illuminated tall grass (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Illuminated bench (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Illuminated tall grass / Illuminated bench | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "Venonat",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Illuminated tall grass; dat is de eerste habitat die je voor Venomoth kunt proberen. Let op: Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Tree-shaded  tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tree-shaded  tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Weepinbell",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded  tall grass; dat is de eerste habitat die je voor Bellsprout kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Flowery table (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Irresistible scent and glow (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Flowery table / Irresistible scent and glow | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "Bellsprout",
    "evolvesInto": "Victreebel",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Flowery table; dat is de eerste habitat die je voor Weepinbell kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Flowery table (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Very Rare) ; Irresistible scent and glow (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Flowery table / Irresistible scent and glow | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Chop"
    ],
    "evolvesFrom": "Weepinbell",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Flowery table; dat is de eerste habitat die je voor Victreebel kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Seaside Tall Grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Seaside Tall Grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Seaside Tall Grass: 4x Tall Grass + 2x Ocean Water",
    "specialties": [
      "Water",
      "Yawn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Slowbro / Slowking",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Seaside Tall Grass; dat is de eerste habitat die je voor Slowpoke kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Seaside Tall Grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Very Rare) ; Bed with a plush (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Seaside Tall Grass / Bed with a plush | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Seaside Tall Grass: 4x Tall Grass + 2x Ocean Water",
    "specialties": [
      "Water",
      "Trade"
    ],
    "evolvesFrom": "Slowpoke",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Seaside Tall Grass; dat is de eerste habitat die je voor Slowbro kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Seaside Tall Grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Very Rare) ; Bed with a plush (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Fishing pond ()",
    "habitat": "Seaside Tall Grass / Bed with a plush / Fishing pond | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Seaside Tall Grass: 4x Tall Grass + 2x Ocean Water",
    "specialties": [
      "Water",
      "Teleport"
    ],
    "evolvesFrom": "Slowpoke",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Seaside Tall Grass; dat is de eerste habitat die je voor Slowking kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Factory Storage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Factory Storage | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Magneton",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Factory Storage; dat is de eerste habitat die je voor Magnemite kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Trash can central (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Mini Game Corner (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Trash can central / Mini Game Corner | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "Magnemite",
    "evolvesInto": "Magnezone",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Trash can central; dat is de eerste habitat die je voor Magneton kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Trash can central (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Very Rare) ; Mini Game Corner (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Trash can central / Mini Game Corner | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Recycle"
    ],
    "evolvesFrom": "Magneton",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Trash can central; dat is de eerste habitat die je voor Magnezone kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Smooth tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Smooth tall grass | Ideale omgeving: Dry",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Crush",
      "Bulldoze"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Steelix",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Smooth tall grass; dat is de eerste habitat die je voor Onix kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Clink-clang iron construction (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Clink-clang iron construction | Ideale omgeving: Dry",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Crush",
      "Bulldoze"
    ],
    "evolvesFrom": "Onix",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Clink-clang iron construction; dat is de eerste habitat die je voor Steelix kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 32,
    "name": "Cubone",
    "type": [
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Grave with flowers (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Grave with flowers | Ideale omgeving: Dry",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Marowak",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Grave with flowers; dat is de eerste habitat die je voor Cubone kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 33,
    "name": "Marowak",
    "type": [
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Grave with flowers (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Grave with flowers | Ideale omgeving: Dry",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "Cubone",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Grave with flowers; dat is de eerste habitat die je voor Marowak kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 34,
    "name": "Tyrogue",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Training waterfall (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: CommonCommon)",
    "habitat": "Training waterfall | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Hitmonlee / Hitmonchan / Hitmontop",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Training waterfall; dat is de eerste habitat die je voor Tyrogue kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 35,
    "name": "Hitmonlee",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Urgent Care (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Urgent Care | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "Tyrogue",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Urgent Care; dat is de eerste habitat die je voor Hitmonlee kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 36,
    "name": "Hitmonchan",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Exercise resting spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Exercise resting spot | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "Tyrogue",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Exercise resting spot; dat is de eerste habitat die je voor Hitmonchan kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 37,
    "name": "Hitmontop",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Gym first aid (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Gym first aid | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "Tyrogue",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Gym first aid; dat is de eerste habitat die je voor Hitmontop kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "area": "Trash collection site (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Trash collection site | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Recycle"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Weezing",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Trash collection site; dat is de eerste habitat die je voor Koffing kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "area": "Good old-fashioned antiques (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Trash collection site (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Good old-fashioned antiques / Trash collection site | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Recyvle"
    ],
    "evolvesFrom": "Koffing",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Good old-fashioned antiques; dat is de eerste habitat die je voor Weezing kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "area": "Nothin' but Poke Balls (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Nothin' but Poke Balls | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Tangrowth",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Nothin' but Poke Balls; dat is de eerste habitat die je voor Tangela kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "obtainMethod": "Maak een geschikt habitat: Bench with greenery.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "Tangela",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "begin in Withered Wastelands en bouw eerst Bench with greenery. Dat is de duidelijkste plek om voor Tangrowth te werken."
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
    "location": "Withered Wastelands",
    "area": "Tree-shaded  tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tree-shaded  tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Scizor",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded  tall grass; dat is de eerste habitat die je voor Scyther kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "area": "Tree-shaded  tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tree-shaded  tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "Scyther",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded  tall grass; dat is de eerste habitat die je voor Scizor kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 44,
    "name": "Pinsir",
    "type": [
      "Bug"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Tree-shaded  tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Tree-shaded  tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Chop",
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Begin met Tree-shaded  tall grass; dat is de eerste habitat die je voor Pinsir kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 45,
    "name": "Magikarp",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Ocean fishing spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Ocean fishing spot | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "???"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Gyarados",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Ocean fishing spot; dat is de eerste habitat die je voor Magikarp kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Illuminated waterfall (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Illuminated waterfall | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Magikarp",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Illuminated waterfall; dat is de eerste habitat die je voor Gyarados kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "area": "",
    "habitat": "Ideale omgeving: Bright",
    "obtainMethod": "Deze Pokémon is gekoppeld aan Dream Island.",
    "requirements": "",
    "specialties": [
      "Transform"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Richt je eerst op Dream Island en controleer daar de Pokédex-aanwijzingen voor Ditto."
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
    "location": "Withered Wastelands",
    "area": "Elevated tall grass (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Pretty flower bed (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Gently lit bed ()",
    "habitat": "Elevated tall grass / Pretty flower bed / Gently lit bed | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Trade",
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Noctowl",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Elevated tall grass; dat is de eerste habitat die je voor Hoothoot kunt proberen. Let op: Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Elevated tall grass (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Gently lit bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Elevated tall grass / Gently lit bed | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Trade",
      "Fly"
    ],
    "evolvesFrom": "Hoothoot",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Elevated tall grass; dat is de eerste habitat die je voor Noctowl kunt proberen. Let op: Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Tree-shaded  tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Tree-shaded  tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Chop",
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Begin met Tree-shaded  tall grass; dat is de eerste habitat die je voor Heracross kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 51,
    "name": "Volbeat",
    "type": [
      "Bug"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Hydrated flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Hydrated flower bed | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Begin met Hydrated flower bed; dat is de eerste habitat die je voor Volbeat kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 52,
    "name": "Illumise",
    "type": [
      "Bug"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Hydrated flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Hydrated flower bed | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Begin met Hydrated flower bed; dat is de eerste habitat die je voor Illumise kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Storage"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Swalot",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tantalizing dining set; dat is de eerste habitat die je voor Gulpin kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 54,
    "name": "Swalot",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Dinner table surprise (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Dinner table surprise | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Storage"
    ],
    "evolvesFrom": "Gulpin",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Dinner table surprise; dat is de eerste habitat die je voor Swalot kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 55,
    "name": "Cacnea",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Sunny Day site (Tijd: Morning, Day, Evening, Night | Weer: Sun | Zeldzaamheid: Common)",
    "habitat": "Sunny Day site | Ideale omgeving: Dry",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Cacturne",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Sunny Day site; dat is de eerste habitat die je voor Cacnea kunt proberen. Let op: Morning, Day, Evening, Night, Sun."
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
    "location": "Withered Wastelands",
    "area": "Tree-shaded flower bed (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Tree-shaded flower bed | Ideale omgeving: Dry",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "Cacnea",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded flower bed; dat is de eerste habitat die je voor Cacturne kunt proberen. Let op: Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Pretty flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Pretty flower bed | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Vespiquen",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Pretty flower bed; dat is de eerste habitat die je voor Combee kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Field of Flowers (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Field of Flowers | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Gather Honey",
      "Search"
    ],
    "evolvesFrom": "Combee",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Field of Flowers; dat is de eerste habitat die je voor Vespiquen kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "begin in Withered Wastelands en bouw eerst Road Sign. Dat is de duidelijkste plek om voor Shellos te werken."
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
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "begin in Withered Wastelands en bouw eerst Ocean fishing spot. Dat is de duidelijkste plek om voor Gastrodon te werken."
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
    "location": "Withered Wastelands",
    "area": "Riding warm updrafts (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Bed with a plush (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Plush central ()",
    "habitat": "Riding warm updrafts / Bed with a plush / Plush central | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Dream Island"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Drifblim",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Riding warm updrafts; dat is de eerste habitat die je voor Drifloon kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Plush central (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Plush central | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Fly",
      "Gather"
    ],
    "evolvesFrom": "Drifloon",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Plush central; dat is de eerste habitat die je voor Drifblim kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 63,
    "name": "Drilbur",
    "type": [
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Fresh Veggie Field (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Fresh Veggie Field | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Excadrill",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Fresh Veggie Field; dat is de eerste habitat die je voor Drilbur kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Fresh Veggie Field (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Fresh Veggie Field | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Search",
      "Chop"
    ],
    "evolvesFrom": "Drilbur",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Fresh Veggie Field; dat is de eerste habitat die je voor Excadrill kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 65,
    "name": "Timburr",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Boulder-shaded Tall Grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Boulder-shaded Tall Grass | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Gurdurr",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Boulder-shaded Tall Grass; dat is de eerste habitat die je voor Timburr kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 66,
    "name": "Gurdurr",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Boulder-shaded Tall Grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Large luggage carrier (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Boulder-shaded Tall Grass / Large luggage carrier | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "Timburr",
    "evolvesInto": "Conkeldurr",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Boulder-shaded Tall Grass; dat is de eerste habitat die je voor Gurdurr kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 67,
    "name": "Conkeldurr",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Construction-site generator (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Construction-site generator | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Build",
      "Crush"
    ],
    "evolvesFrom": "Gurdurr",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Construction-site generator; dat is de eerste habitat die je voor Conkeldurr kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Grave offering (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Creepy grave offering (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Grave offering / Creepy grave offering | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Lampent",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Grave offering; dat is de eerste habitat die je voor Litwick kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Grave offering (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Creepy grave offering (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Grave offering / Creepy grave offering | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Litwick",
    "evolvesInto": "Chandelure",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Grave offering; dat is de eerste habitat die je voor Lampent kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Creepy grave offering (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Creepy grave offering | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Lampent",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Creepy grave offering; dat is de eerste habitat die je voor Chandelure kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 71,
    "name": "Axew",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Lumberjack's workplace (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Crazy log handicrafts (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Lumberjack's workplace / Crazy log handicrafts | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Fraxure",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Lumberjack's workplace; dat is de eerste habitat die je voor Axew kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 72,
    "name": "Fraxure",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Lumberjack's workplace (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Crazy log handicrafts (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Lumberjack's workplace / Crazy log handicrafts | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "Axew",
    "evolvesInto": "Haxorus",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Lumberjack's workplace; dat is de eerste habitat die je voor Fraxure kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 73,
    "name": "Haxorus",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Lumberjack's workplace (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Crazy log handicrafts (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Very Rare)",
    "habitat": "Lumberjack's workplace / Crazy log handicrafts | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Chop",
      "Litter"
    ],
    "evolvesFrom": "Fraxure",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Lumberjack's workplace; dat is de eerste habitat die je voor Haxorus kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 74,
    "name": "Goomy",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Tree-shaded flower bed (Tijd: Morning, Day, Evening, Night | Weer: Rain | Zeldzaamheid: Common) ; Rain Dance site (Tijd: Morning, Day, Evening, Night | Weer: Rain)",
    "habitat": "Tree-shaded flower bed / Rain Dance site | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Sliggoo",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded flower bed; dat is de eerste habitat die je voor Goomy kunt proberen. Let op: Morning, Day, Evening, Night, Rain."
  },
  {
    "number": 75,
    "name": "Sliggoo",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Hydrated tall grass (Tijd: Morning, Day, Evening, Night | Weer: Rain | Zeldzaamheid: Common)",
    "habitat": "Hydrated tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Goomy",
    "evolvesInto": "Goodra",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Hydrated tall grass; dat is de eerste habitat die je voor Sliggoo kunt proberen. Let op: Morning, Day, Evening, Night, Rain."
  },
  {
    "number": 76,
    "name": "Goodra",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Very-berry space (Tijd: Morning, Day, Evening, Night | Weer: Rain | Zeldzaamheid: Rare)",
    "habitat": "Very-berry space | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water",
      "Trade"
    ],
    "evolvesFrom": "Sliggoo",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Very-berry space; dat is de eerste habitat die je voor Goodra kunt proberen. Let op: Morning, Day, Evening, Night, Rain."
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
    "area": "Hydrated tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Hydrated tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Fly",
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Begin met Hydrated tall grass; dat is de eerste habitat die je voor Cramorant kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 78,
    "name": "Pichu",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Picnic Set (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Picnic Set | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Pikachu",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Picnic Set; dat is de eerste habitat die je voor Pichu kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "area": "Picnic Set (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Picnic Set | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "Pichu",
    "evolvesInto": "Raichu",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Picnic Set; dat is de eerste habitat die je voor Pikachu kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 80,
    "name": "Raichu",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Nature's market (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Nature's market | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Hype"
    ],
    "evolvesFrom": "Pikachu",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Nature's market; dat is de eerste habitat die je voor Raichu kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Tree-shaded Yellow tall grass (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Park bench (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tree-shaded Yellow tall grass / Park bench | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Golbat",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded Yellow tall grass; dat is de eerste habitat die je voor Zubat kunt proberen. Let op: Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Tree-shaded Yellow tall grass (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Tree-shaded Yellow tall grass | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "Zubat",
    "evolvesInto": "Crobat",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded Yellow tall grass; dat is de eerste habitat die je voor Golbat kunt proberen. Let op: Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Elevated yellow tall grass (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Very Rare) ; Trash disposal site (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Elevated yellow tall grass / Trash disposal site | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Search",
      "Chop"
    ],
    "evolvesFrom": "Golbat",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Elevated yellow tall grass; dat is de eerste habitat die je voor Crobat kunt proberen. Let op: Night, Sun, Cloud, Rain."
  },
  {
    "number": 84,
    "name": "Meowth",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Resting spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Working the register (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Resting spot / Working the register | Ideale omgeving: Cool",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Persian",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Resting spot; dat is de eerste habitat die je voor Meowth kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 85,
    "name": "Persian",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Evil organization HQ (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Evil organization HQ | Ideale omgeving: Cool",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Trade",
      "Search"
    ],
    "evolvesFrom": "Meowth",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Evil organization HQ; dat is de eerste habitat die je voor Persian kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 86,
    "name": "Psyduck",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Hot-spring shower (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Hot-spring shower | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Golduck",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Hot-spring shower; dat is de eerste habitat die je voor Psyduck kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 87,
    "name": "Golduck",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Hot-spring shower (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Hot-spring shower | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "Psyduck",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Hot-spring shower; dat is de eerste habitat die je voor Golduck kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 88,
    "name": "Growlithe",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Perpetual mess (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Resort meal prep (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Perpetual mess / Resort meal prep | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Arcanine",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Perpetual mess; dat is de eerste habitat die je voor Growlithe kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 89,
    "name": "Arcanine",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Mini museum (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Magma fishing spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Mini museum / Magma fishing spot | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Search"
    ],
    "evolvesFrom": "Growlithe",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Mini museum; dat is de eerste habitat die je voor Arcanine kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Marsh fishing spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Marsh fishing spot | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Muk",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Marsh fishing spot; dat is de eerste habitat die je voor Grimer kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 92,
    "name": "Muk",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Marsh fishing spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Marsh fishing spot | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "Grimer",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Marsh fishing spot; dat is de eerste habitat die je voor Muk kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Spooky study (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Spooky study | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Gather",
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Haunter",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Spooky study; dat is de eerste habitat die je voor Gastly kunt proberen. Let op: Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Surprise in store (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Spooky study (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Surprise in store / Spooky study | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Gather",
      "Trade"
    ],
    "evolvesFrom": "Gastly",
    "evolvesInto": "Gengar",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Surprise in store; dat is de eerste habitat die je voor Haunter kunt proberen. Let op: Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Surprise in store (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Surprise in store | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Gather",
      "Trade"
    ],
    "evolvesFrom": "Haunter",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Surprise in store; dat is de eerste habitat die je voor Gengar kunt proberen. Let op: Night, Sun, Cloud, Rain."
  },
  {
    "number": 96,
    "name": "Voltorb",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Park bench (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Playing pirate (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Park bench / Playing pirate | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Explode"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Electrode",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Park bench; dat is de eerste habitat die je voor Voltorb kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 97,
    "name": "Electrode",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Park bench (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Very Rare) ; Playing pirate (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Park bench / Playing pirate | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Explode"
    ],
    "evolvesFrom": "Voltorb",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Park bench; dat is de eerste habitat die je voor Electrode kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Tropical vibes (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Shaded beach (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Tropical vibes / Shaded beach / Red tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Teleport"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Exeggutor",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tropical vibes; dat is de eerste habitat die je voor Exeggcute kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Tropical vibes (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Very Rare) ; Shaded beach (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Tropical vibes / Shaded beach | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Teleport"
    ],
    "evolvesFrom": "Exeggcute",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tropical vibes; dat is de eerste habitat die je voor Exeggutor kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 100,
    "name": "Happiny",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Alarm clock sleep zone (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Working the register (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Alarm clock sleep zone / Working the register | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Chansey",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Alarm clock sleep zone; dat is de eerste habitat die je voor Happiny kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 101,
    "name": "Chansey",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Full recovery (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Full recovery | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "Happiny",
    "evolvesInto": "Blissey",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Full recovery; dat is de eerste habitat die je voor Chansey kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 102,
    "name": "Blissey",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Cuteness overload (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Cuteness overload | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Trade",
      "Litter"
    ],
    "evolvesFrom": "Chansey",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Cuteness overload; dat is de eerste habitat die je voor Blissey kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 103,
    "name": "Elekid",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Vending machine set (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Vending machine set | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Electabuzz",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Vending machine set; dat is de eerste habitat die je voor Elekid kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 104,
    "name": "Electabuzz",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Trash can central (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Light-up stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Trash can central / Light-up stage | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "Elekid",
    "evolvesInto": "Electivire",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Trash can central; dat is de eerste habitat die je voor Electabuzz kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 105,
    "name": "Electivire",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Light-up stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Vending machine set (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Light-up stage / Vending machine set | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Crush"
    ],
    "evolvesFrom": "Electabuzz",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Light-up stage; dat is de eerste habitat die je voor Electivire kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Tropical seaside (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tropical seaside | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Begin met Tropical seaside; dat is de eerste habitat die je voor Lapras kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "area": "Bed with a plush (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Tree-shaded snoozing Snorlax (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Bed with a plush / Tree-shaded snoozing Snorlax | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Bulldoze"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Snorlax",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Bed with a plush; dat is de eerste habitat die je voor Munchlax kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
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
    "location": "Bleak Beach",
    "area": "Yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Yellow tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Ariados",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Yellow tall grass; dat is de eerste habitat die je voor Spinarak kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Yellow tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "Spinarak",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Yellow tall grass; dat is de eerste habitat die je voor Ariados kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 111,
    "name": "Mareep",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Overgrowth vending machine (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Knitting station (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Overgrowth vending machine / Knitting station | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Flaaffy",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Overgrowth vending machine; dat is de eerste habitat die je voor Mareep kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 112,
    "name": "Flaaffy",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Night festival venue (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Knitting station (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Night festival venue / Knitting station | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Litter"
    ],
    "evolvesFrom": "Mareep",
    "evolvesInto": "Ampharos",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Night festival venue; dat is de eerste habitat die je voor Flaaffy kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 113,
    "name": "Ampharos",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Plain life (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Plain life | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Trade"
    ],
    "evolvesFrom": "Flaaffy",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Plain life; dat is de eerste habitat die je voor Ampharos kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Hydrated yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Perpetual mess (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Hydrated yellow tall grass / Perpetual mess | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water",
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Marill",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Hydrated yellow tall grass; dat is de eerste habitat die je voor Azurill kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Hydrated yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Dock (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Hydrated yellow tall grass / Dock | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water",
      "Hype"
    ],
    "evolvesFrom": "Azurill",
    "evolvesInto": "Azumarill",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Hydrated yellow tall grass; dat is de eerste habitat die je voor Marill kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Dock (Tijd: Morning, Day, Evening, Night | Weer: Rain | Zeldzaamheid: Rare)",
    "habitat": "Dock | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water",
      "Build"
    ],
    "evolvesFrom": "Marill",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Dock; dat is de eerste habitat die je voor Azumarill kunt proberen. Let op: Morning, Day, Evening, Night, Rain."
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
    "area": "Marshy tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Marshy tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Clodsire",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Marshy tall grass; dat is de eerste habitat die je voor Paldean Wooper kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Marshy tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Marsh fishing spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Marshy tall grass / Marsh fishing spot | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Litter",
      "Bulldoze"
    ],
    "evolvesFrom": "Paldean Wooper",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Marshy tall grass; dat is de eerste habitat die je voor Clodsire kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 119,
    "name": "Smeargle",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Tiny Atelier (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tiny Atelier | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Paint"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Begin met Tiny Atelier; dat is de eerste habitat die je voor Smeargle kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 120,
    "name": "Torchic",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Chirp-chirp meal (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Resort meal prep (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Chirp-chirp meal / Resort meal prep | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Combusken",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Chirp-chirp meal; dat is de eerste habitat die je voor Torchic kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Resort meal prep (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Furnace Spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Resort meal prep / Furnace Spot | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Build"
    ],
    "evolvesFrom": "Torchic",
    "evolvesInto": "Blaziken",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Resort meal prep; dat is de eerste habitat die je voor Combusken kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Chirp-chirp meal (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Very Rare) ; Furnace Spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Chirp-chirp meal / Furnace Spot | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Build"
    ],
    "evolvesFrom": "Combusken",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Chirp-chirp meal; dat is de eerste habitat die je voor Blaziken kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Elevated yellow tall grass (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Windy Flower Bed (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Elevated yellow tall grass / Windy Flower Bed | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water",
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Pelipper",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Elevated yellow tall grass; dat is de eerste habitat die je voor Wingull kunt proberen. Let op: Morning, Day, Evening, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Elevated yellow tall grass (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Windy Flower Bed (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Elevated yellow tall grass / Windy Flower Bed | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water",
      "Fly"
    ],
    "evolvesFrom": "Wingull",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Elevated yellow tall grass; dat is de eerste habitat die je voor Pelipper kunt proberen. Let op: Morning, Day, Evening, Sun, Cloud, Rain."
  },
  {
    "number": 125,
    "name": "Makuhita",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Tree-shaded Yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; All packed up (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tree-shaded Yellow tall grass / All packed up | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Build",
      "Bulldoze"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Hariyama",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded Yellow tall grass; dat is de eerste habitat die je voor Makuhita kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 126,
    "name": "Hariyama",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Tree-shaded Yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; All packed up (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Tree-shaded Yellow tall grass / All packed up | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Build",
      "Bulldoze"
    ],
    "evolvesFrom": "Makuhita",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded Yellow tall grass; dat is de eerste habitat die je voor Hariyama kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 127,
    "name": "Absol",
    "type": [
      "Dark"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Welcoming resort (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Welcoming resort | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Begin met Welcoming resort; dat is de eerste habitat die je voor Absol kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 128,
    "name": "Piplup",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Hydrated yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Hydrated yellow tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Prinplup",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Hydrated yellow tall grass; dat is de eerste habitat die je voor Piplup kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 129,
    "name": "Prinplup",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Hydrated yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Waterwheel Spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Hydrated yellow tall grass / Waterwheel Spot | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water",
      "Trade"
    ],
    "evolvesFrom": "Piplup",
    "evolvesInto": "Empoleon",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Hydrated yellow tall grass; dat is de eerste habitat die je voor Prinplup kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Tableside delivery cart (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Waterwheel Spot (Tijd: Morning, Day, Evening, Night | Weer: Rain | Zeldzaamheid: Very Rare)",
    "habitat": "Tableside delivery cart / Waterwheel Spot | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water",
      "Trade"
    ],
    "evolvesFrom": "Prinplup",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tableside delivery cart; dat is de eerste habitat die je voor Empoleon kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 131,
    "name": "Audino",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Working the register (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Working the register | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Begin met Working the register; dat is de eerste habitat die je voor Audino kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 132,
    "name": "Trubbish",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Trash collection site (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Trash collection site | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Recycle"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Garbodor",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Trash collection site; dat is de eerste habitat die je voor Trubbish kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 133,
    "name": "Garbodor",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Trash collection site (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Trash collection site | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Recycle",
      "Litter"
    ],
    "evolvesFrom": "Trubbish",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Trash collection site; dat is de eerste habitat die je voor Garbodor kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 134,
    "name": "Zorua",
    "type": [
      "Dark"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Breezy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Breezy flower bed | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Zoroark",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Breezy flower bed; dat is de eerste habitat die je voor Zorua kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 135,
    "name": "Zoroark",
    "type": [
      "Dark"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Breezy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Surprise in store (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Breezy flower bed / Surprise in store | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Trade",
      "Chop"
    ],
    "evolvesFrom": "Zorua",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Breezy flower bed; dat is de eerste habitat die je voor Zoroark kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 136,
    "name": "Minccino",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Changing area (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Private makeup stand (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Changing area / Private makeup stand | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Gather"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Cinccino",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Changing area; dat is de eerste habitat die je voor Minccino kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 137,
    "name": "Cinccino",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Private makeup stand (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Private makeup stand | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Gather",
      "Recycle"
    ],
    "evolvesFrom": "Minccino",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Private makeup stand; dat is de eerste habitat die je voor Cinccino kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 138,
    "name": "Grubbin",
    "type": [
      "Bug"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Yellow tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Vending machine break area (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Yellow tall grass / Vending machine break area | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Charjabug",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Yellow tall grass; dat is de eerste habitat die je voor Grubbin kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Vending machine break area (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Vending machine break area | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Chop"
    ],
    "evolvesFrom": "Grubbin",
    "evolvesInto": "Vikavolt",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Vending machine break area; dat is de eerste habitat die je voor Charjabug kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Withered Wastelands",
    "area": "Tree-shaded flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Tree-shaded flower bed | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Chop"
    ],
    "evolvesFrom": "Charjabug",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded flower bed; dat is de eerste habitat die je voor Vikavolt kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Pikachu space (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Pikachu space | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Begin met Pikachu space; dat is de eerste habitat die je voor Mimikyu kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 142,
    "name": "Pawmi",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Bleak Beach",
    "area": "Breezy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Tantalizing restaurant (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Breezy flower bed / Tantalizing restaurant | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Pawmo",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Breezy flower bed; dat is de eerste habitat die je voor Pawmi kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Tantalizing restaurant (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Café space (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tantalizing restaurant / Café space | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Crush"
    ],
    "evolvesFrom": "Pawmi",
    "evolvesInto": "Pawmot",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tantalizing restaurant; dat is de eerste habitat die je voor Pawmo kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Bleak Beach",
    "area": "Café space (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Café space | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Crush"
    ],
    "evolvesFrom": "Pawmo",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Café space; dat is de eerste habitat die je voor Pawmot kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "tip": "begin in Bleak Beach en bouw eerst Beach Set. Dat is de duidelijkste plek om voor Tatsugiri te werken."
  },
  {
    "number": 146,
    "name": "Ekans",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Hydrated graceful flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Hydrated graceful flower bed | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Arbok",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Hydrated graceful flower bed; dat is de eerste habitat die je voor Ekans kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 147,
    "name": "Arbok",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Hydrated graceful flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Hydrated graceful flower bed | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "Ekans",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Hydrated graceful flower bed; dat is de eerste habitat die je voor Arbok kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 148,
    "name": "Cleffa",
    "type": [
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Graceful flower bed (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Graceful flower bed | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Clefairy",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Graceful flower bed; dat is de eerste habitat die je voor Cleffa kunt proberen. Let op: Night, Sun, Cloud, Rain."
  },
  {
    "number": 149,
    "name": "Clefairy",
    "type": [
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Graceful flower bed (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Bronze landmark (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Graceful flower bed / Bronze landmark | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "Cleffa",
    "evolvesInto": "Clefable",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Graceful flower bed; dat is de eerste habitat die je voor Clefairy kunt proberen. Let op: Night, Sun, Cloud, Rain."
  },
  {
    "number": 150,
    "name": "Clefable",
    "type": [
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Graceful flower bed (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Very Rare) ; Bronze landmark (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Graceful flower bed / Bronze landmark | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Hype",
      "Trade"
    ],
    "evolvesFrom": "Clefairy",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Graceful flower bed; dat is de eerste habitat die je voor Clefable kunt proberen. Let op: Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Flower garden stump stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Flower garden stump stage | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Jigglypuff",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Flower garden stump stage; dat is de eerste habitat die je voor Igglybuff kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Flower garden stump stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Recital stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Flower garden stump stage / Recital stage | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "Igglybuff",
    "evolvesInto": "Wigglytuff",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Flower garden stump stage; dat is de eerste habitat die je voor Jigglypuff kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Recital stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Recital stage | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Hype",
      "Trade"
    ],
    "evolvesFrom": "Jigglypuff",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Recital stage; dat is de eerste habitat die je voor Wigglytuff kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 154,
    "name": "Diglett",
    "type": [
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Tree-shaded red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Container snacking (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tree-shaded red tall grass / Container snacking | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Dugtrio",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded red tall grass; dat is de eerste habitat die je voor Diglett kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 155,
    "name": "Dugtrio",
    "type": [
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Tree-shaded red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; House party (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tree-shaded red tall grass / House party | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Hype",
      "Crush"
    ],
    "evolvesFrom": "Diglett",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded red tall grass; dat is de eerste habitat die je voor Dugtrio kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "area": "Boulder-shaded Tall Grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Boulder-shaded Tall Grass | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Build",
      "Gather"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Machoke",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Boulder-shaded Tall Grass; dat is de eerste habitat die je voor Machop kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 157,
    "name": "Machoke",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Grassy training field (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Box to the rhythm (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Grassy training field / Box to the rhythm | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Build",
      "Gather"
    ],
    "evolvesFrom": "Machop",
    "evolvesInto": "Machamp",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Grassy training field; dat is de eerste habitat die je voor Machoke kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 158,
    "name": "Machamp",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Grassy training field (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Clink-clang iron construction (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Grassy training field / Clink-clang iron construction | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Build",
      "Gather"
    ],
    "evolvesFrom": "Machoke",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Grassy training field; dat is de eerste habitat die je voor Machamp kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "area": "Tall Grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tall Grass | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Tall Grass: 4x Tall Grass",
    "specialties": [
      "Crush"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Graveler",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tall Grass; dat is de eerste habitat die je voor Geodude kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Mossy boulder (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Mossy boulder | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Crush"
    ],
    "evolvesFrom": "Geodude",
    "evolvesInto": "Golem",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Mossy boulder; dat is de eerste habitat die je voor Graveler kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Mossy boulder (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Mossy boulder | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Crush",
      "Trade"
    ],
    "evolvesFrom": "Graveler",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Mossy boulder; dat is de eerste habitat die je voor Golem kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 162,
    "name": "Magby",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Withered Wastelands",
    "area": "Pretty flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Pretty flower bed | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Magmar",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Pretty flower bed; dat is de eerste habitat die je voor Magby kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 163,
    "name": "Magmar",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Digging and burning (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Digging and burning | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Magby",
    "evolvesInto": "Magmortar",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Digging and burning; dat is de eerste habitat die je voor Magmar kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 164,
    "name": "Magmortar",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Mini kitchen (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Mini kitchen | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Crush"
    ],
    "evolvesFrom": "Magmar",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Mini kitchen; dat is de eerste habitat die je voor Magmortar kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 165,
    "name": "Bonsly",
    "type": [
      "Rock"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Tree-shaded red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tree-shaded red tall grass | Ideale omgeving: Dry",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Bulldoze"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Sudowoodo",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded red tall grass; dat is de eerste habitat die je voor Bonsly kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 166,
    "name": "Sudowoodo",
    "type": [
      "Rock"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Tree-shaded red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; House party (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tree-shaded red tall grass / House party | Ideale omgeving: Dry",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "Bonsly",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded red tall grass; dat is de eerste habitat die je voor Sudowoodo kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Elevated red tall grass (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Tree-shaded graceful flower bed (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Elevated red tall grass / Tree-shaded graceful flower bed | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Trade",
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Honchkrow",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Elevated red tall grass; dat is de eerste habitat die je voor Murkrow kunt proberen. Let op: Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Chirping recital (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Chirping recital | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Trade",
      "Fly"
    ],
    "evolvesFrom": "Murkrow",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Chirping recital; dat is de eerste habitat die je voor Honchkrow kunt proberen. Let op: Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Mossy rest spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Mossy rest spot | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Crush",
      "Bulldoze"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Pupitar",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Mossy rest spot; dat is de eerste habitat die je voor Larvitar kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Tree-shaded pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tree-shaded pink tall grass | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Crush",
      "Bulldoze"
    ],
    "evolvesFrom": "Larvitar",
    "evolvesInto": "Tyranitar",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded pink tall grass; dat is de eerste habitat die je voor Pupitar kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Toil in the soil (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Mossy rest spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Very Rare)",
    "habitat": "Toil in the soil / Mossy rest spot | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Crush",
      "Bulldoze"
    ],
    "evolvesFrom": "Pupitar",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Toil in the soil; dat is de eerste habitat die je voor Tyranitar kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Hydrated red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Uplifting duckweed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Hot-spring Fishing Spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Hydrated red tall grass / Uplifting duckweed / Hot-spring Fishing Spot | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Lombre",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Hydrated red tall grass; dat is de eerste habitat die je voor Lotad kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Hydrated red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Hot-spring Fishing Spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Hydrated red tall grass / Hot-spring Fishing Spot | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Lotad",
    "evolvesInto": "Ludicolo",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Hydrated red tall grass; dat is de eerste habitat die je voor Lombre kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Uplifting duckweed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Uplifting duckweed | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water",
      "Hype"
    ],
    "evolvesFrom": "Lombre",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Uplifting duckweed; dat is de eerste habitat die je voor Ludicolo kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "area": "Working the register (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Working the register | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Trade",
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Begin met Working the register; dat is de eerste habitat die je voor Mawile kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 176,
    "name": "Torkoal",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Mossy hot spring (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Mossy hot spring | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Begin met Mossy hot spring; dat is de eerste habitat die je voor Torkoal kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 177,
    "name": "Kricketot",
    "type": [
      "Bug"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Music and magazines (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Red tall grass / Music and magazines | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Kricketune",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Red tall grass; dat is de eerste habitat die je voor Kricketot kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 178,
    "name": "Kricketune",
    "type": [
      "Bug"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Music and magazines (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Music and magazines | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "Kricketot",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Music and magazines; dat is de eerste habitat die je voor Kricketune kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Elevated red tall grass (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Elevated red tall grass (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Chirping recital (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Elevated red tall grass / Elevated red tall grass / Chirping recital | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Hype",
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Begin met Elevated red tall grass; dat is de eerste habitat die je voor Chatot kunt proberen. Let op: Morning, Day, Evening, Sun, Cloud, Rain."
  },
  {
    "number": 180,
    "name": "Riolu",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Box to the rhythm (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Red tall grass / Box to the rhythm | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Lucario",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Red tall grass; dat is de eerste habitat die je voor Riolu kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Box to the rhythm (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Box to the rhythm | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "Riolu",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Box to the rhythm; dat is de eerste habitat die je voor Lucario kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Music and magazines (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Music and magazines | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "DJ"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Begin met Music and magazines; dat is de eerste habitat die je voor Stereo Rotom kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Tree-shaded graceful flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tree-shaded graceful flower bed | Ideale omgeving: Dry",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Volcarona",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded graceful flower bed; dat is de eerste habitat die je voor Larvesta kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Tree-shaded graceful flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Very Rare) ; Piping-hot lava (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Tree-shaded graceful flower bed / Piping-hot lava | Ideale omgeving: Dry",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Litter"
    ],
    "evolvesFrom": "Larvesta",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded graceful flower bed; dat is de eerste habitat die je voor Volcarona kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "area": "Fresh Veggie Field (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Fresh Veggie Field | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Dartrix",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Fresh Veggie Field; dat is de eerste habitat die je voor Rowlet kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Pointy tree-shaded rocky tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Pointy tree-shaded rocky tall grass | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Chop"
    ],
    "evolvesFrom": "Rowlet",
    "evolvesInto": "Decidueye",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Pointy tree-shaded rocky tall grass; dat is de eerste habitat die je voor Dartrix kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Pointy tree-shaded rocky tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Very Rare) ; Modern living (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Pointy tree-shaded rocky tall grass / Modern living | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Chop"
    ],
    "evolvesFrom": "Dartrix",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Pointy tree-shaded rocky tall grass; dat is de eerste habitat die je voor Decidueye kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 188,
    "name": "Scorbunny",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Red tall grass | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Raboot",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Red tall grass; dat is de eerste habitat die je voor Scorbunny kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 189,
    "name": "Raboot",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Open-air bath (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Refreshing locker room (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Open-air bath / Refreshing locker room | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Scorbunny",
    "evolvesInto": "Cinderace",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Open-air bath; dat is de eerste habitat die je voor Raboot kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 190,
    "name": "Cinderace",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Red tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Very Rare) ; Refreshing locker room (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Red tall grass / Refreshing locker room | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Hype"
    ],
    "evolvesFrom": "Raboot",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Red tall grass; dat is de eerste habitat die je voor Cinderace kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "area": "Tree-shaded  tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tree-shaded  tall grass | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Search",
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Greedent",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded  tall grass; dat is de eerste habitat die je voor Skwovet kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 192,
    "name": "Greedent",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Chef's kitchen (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Chef's kitchen | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Party"
    ],
    "evolvesFrom": "Skwovet",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Chef's kitchen; dat is de eerste habitat die je voor Greedent kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 193,
    "name": "Rolycoly",
    "type": [
      "Rock"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Railroad crossing (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Railroad crossing | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Gather"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Carkol",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Railroad crossing; dat is de eerste habitat die je voor Rolycoly kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Railroad crossing (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Railroad crossing | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Gather"
    ],
    "evolvesFrom": "Rolycoly",
    "evolvesInto": "Coalossal",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Railroad crossing; dat is de eerste habitat die je voor Carkol kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Railroad crossing (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Very Rare) ; Heavy iron (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Railroad crossing / Heavy iron | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Gather"
    ],
    "evolvesFrom": "Carkol",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Railroad crossing; dat is de eerste habitat die je voor Coalossal kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Lazy-photo album scrolling (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Lazy-photo album scrolling | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Toxtricity",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Lazy-photo album scrolling; dat is de eerste habitat die je voor Toxel kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "begin in Rocky Ridges en bouw eerst Amped rock stage. Dat is de duidelijkste plek om voor Toxtricity te werken."
  },
  {
    "number": 198,
    "name": "Fidough",
    "type": [
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Graceful flower bed (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Best bread bakery (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Graceful flower bed / Best bread bakery | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Dachsbun",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Graceful flower bed; dat is de eerste habitat die je voor Fidough kunt proberen. Let op: Morning, Day, Evening, Sun, Cloud, Rain."
  },
  {
    "number": 199,
    "name": "Dachsbun",
    "type": [
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Graceful flower bed (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Best bread bakery (Tijd: Morning, Day, Evening | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Graceful flower bed / Best bread bakery | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Search",
      "Trade"
    ],
    "evolvesFrom": "Fidough",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Graceful flower bed; dat is de eerste habitat die je voor Dachsbun kunt proberen. Let op: Morning, Day, Evening, Sun, Cloud, Rain."
  },
  {
    "number": 200,
    "name": "Charcadet",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Piping-hot lava (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Piping-hot lava | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Armarouge / Ceruledge",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Piping-hot lava; dat is de eerste habitat die je voor Charcadet kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Auspicious knight's shrine (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Auspicious knight's shrine | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Charcadet",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Auspicious knight's shrine; dat is de eerste habitat die je voor Armarouge kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Malicious knight's shrine (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Malicious knight's shrine | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Charcadet",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Malicious knight's shrine; dat is de eerste habitat die je voor Ceruledge kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Creepy white rocks (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Container snacking (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Creepy white rocks / Container snacking | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Glimmora",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Creepy white rocks; dat is de eerste habitat die je voor Glimmet kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Creepy white rocks (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Container snacking (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Creepy white rocks / Container snacking | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "Glimmet",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Creepy white rocks; dat is de eerste habitat die je voor Glimmora kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 205,
    "name": "Gimmighoul",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Mini museum (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Mini museum | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Collect"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Gholdengo",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Mini museum; dat is de eerste habitat die je voor Gimmighoul kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Absolute luxury (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Absolute luxury | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Collect"
    ],
    "evolvesFrom": "Gimmighoul",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Absolute luxury; dat is de eerste habitat die je voor Gholdengo kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 207,
    "name": "Vulpix",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Fluffy flower bed | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Ninetales",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Fluffy flower bed; dat is de eerste habitat die je voor Vulpix kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 208,
    "name": "Ninetales",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Nine flames (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Fluffy flower bed / Nine flames | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Vulpix",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Fluffy flower bed; dat is de eerste habitat die je voor Ninetales kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 209,
    "name": "Poliwag",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Squeaky clean (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Squeaky clean | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Poliwhirl",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Squeaky clean; dat is de eerste habitat die je voor Poliwag kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 210,
    "name": "Poliwhirl",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Hydrated fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Hydrated fluffy flower bed | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Poliwag",
    "evolvesInto": "Poliwrath / Politoed",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Hydrated fluffy flower bed; dat is de eerste habitat die je voor Poliwhirl kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Sewer hole inspection (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain) ; Dojo training (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Sewer hole inspection / Dojo training | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water",
      "Build"
    ],
    "evolvesFrom": "Poliwhirl",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Sewer hole inspection; dat is de eerste habitat die je voor Poliwrath kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 212,
    "name": "Politoed",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Hydrated graceful flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Flower garden stump stage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Harmonious hot spring (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Hydrated graceful flower bed / Flower garden stump stage / Harmonious hot spring | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water",
      "Hype"
    ],
    "evolvesFrom": "Poliwhirl",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Hydrated graceful flower bed; dat is de eerste habitat die je voor Politoed kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 213,
    "name": "Abra",
    "type": [
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Surging psychic power (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Fortune-teller's table (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Surging psychic power / Fortune-teller's table | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Teleport"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Kadabra",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Surging psychic power; dat is de eerste habitat die je voor Abra kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 214,
    "name": "Kadabra",
    "type": [
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Fortune-teller's table (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Fortune-teller's table | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Teleport"
    ],
    "evolvesFrom": "Abra",
    "evolvesInto": "Alakazam",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Fortune-teller's table; dat is de eerste habitat die je voor Kadabra kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 215,
    "name": "Alakazam",
    "type": [
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Surging psychic power (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Experiment Space (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Surging psychic power / Experiment Space | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Teleport",
      "Trade"
    ],
    "evolvesFrom": "Kadabra",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Surging psychic power; dat is de eerste habitat die je voor Alakazam kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
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
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
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
    "location": "Sparkling Skylands",
    "area": "Researcher's desk (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Researcher's desk | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Recycle"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Porygon2",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Researcher's desk; dat is de eerste habitat die je voor Porygon kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 219,
    "name": "Porygon2",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Work desk (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Work desk | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Recycle"
    ],
    "evolvesFrom": "Porygon",
    "evolvesInto": "Porygon-Z",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Work desk; dat is de eerste habitat die je voor Porygon2 kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 220,
    "name": "Porygon-Z",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Game Corner battle zone (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Game Corner battle zone | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Rarify"
    ],
    "evolvesFrom": "Porygon2",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Game Corner battle zone; dat is de eerste habitat die je voor Porygon-Z kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 221,
    "name": "Dratini",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Hydrated fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Simple bathroom (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Hydrated fluffy flower bed / Simple bathroom | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Dragonair",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Hydrated fluffy flower bed; dat is de eerste habitat die je voor Dratini kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 222,
    "name": "Dragonair",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Hydrated fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Very Rare) ; Simple bathroom (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Hydrated fluffy flower bed / Simple bathroom | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Dratini",
    "evolvesInto": "Dragonite",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Hydrated fluffy flower bed; dat is de eerste habitat die je voor Dragonair kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Waterside dinghy (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Waterside dinghy | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water",
      "Fly"
    ],
    "evolvesFrom": "Dragonair",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Waterside dinghy; dat is de eerste habitat die je voor Dragonite kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 224,
    "name": "Cyndaquil",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Concrete pipe secret base (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Concrete pipe secret base | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Quilava",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Concrete pipe secret base; dat is de eerste habitat die je voor Cyndaquil kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 225,
    "name": "Quilava",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Concrete pipe secret base (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Fireplace nap spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Concrete pipe secret base / Fireplace nap spot | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Cyndaquil",
    "evolvesInto": "Typhlosion",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Concrete pipe secret base; dat is de eerste habitat die je voor Quilava kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 226,
    "name": "Typhlosion",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Fireplace nap spot (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Top pop (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Fireplace nap spot / Top pop | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn",
      "Trade"
    ],
    "evolvesFrom": "Quilava",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Fireplace nap spot; dat is de eerste habitat die je voor Typhlosion kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 227,
    "name": "Misdreavus",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Fluffy flower bed (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Office storeroom (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Fluffy flower bed / Office storeroom | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Mismagius",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Fluffy flower bed; dat is de eerste habitat die je voor Misdreavus kunt proberen. Let op: Night, Sun, Cloud, Rain."
  },
  {
    "number": 228,
    "name": "Mismagius",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Fluffy flower bed (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Very Rare) ; Home theater (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Office storeroom (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Fluffy flower bed / Home theater / Office storeroom | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Gather",
      "Trade"
    ],
    "evolvesFrom": "Misdreavus",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Fluffy flower bed; dat is de eerste habitat die je voor Mismagius kunt proberen. Let op: Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Tree-shaded fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tree-shaded fluffy flower bed | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Gather"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Farigiraf",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded fluffy flower bed; dat is de eerste habitat die je voor Girafarig kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Tree-shaded fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Tree-shaded fluffy flower bed | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Gather",
      "Search"
    ],
    "evolvesFrom": "Girafarig",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded fluffy flower bed; dat is de eerste habitat die je voor Farigiraf kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Study Area (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Study Area | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Teleport"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Kirlia",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Study Area; dat is de eerste habitat die je voor Ralts kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Study Area (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Moisturizing makeup stand (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Study Area / Moisturizing makeup stand | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Teleport"
    ],
    "evolvesFrom": "Ralts",
    "evolvesInto": "Gardevoir / Gallade",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Study Area; dat is de eerste habitat die je voor Kirlia kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Moisturizing makeup stand (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Mini library (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Moisturizing makeup stand / Mini library | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Teleport",
      "Trade"
    ],
    "evolvesFrom": "Kirlia",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Moisturizing makeup stand; dat is de eerste habitat die je voor Gardevoir kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Dojo training (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Dojo training | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Teleport",
      "Build"
    ],
    "evolvesFrom": "Kirlia",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Dojo training; dat is de eerste habitat die je voor Gallade kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 235,
    "name": "Plusle",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Picturesque photo cutout board (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Picturesque photo cutout board | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Begin met Picturesque photo cutout board; dat is de eerste habitat die je voor Plusle kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 236,
    "name": "Minun",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Picturesque photo cutout board (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Picturesque photo cutout board | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Begin met Picturesque photo cutout board; dat is de eerste habitat die je voor Minun kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 237,
    "name": "Trapinch",
    "type": [
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Pink tall grass | Ideale omgeving: Dry",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Bulldoze",
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Vibrava",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Pink tall grass; dat is de eerste habitat die je voor Trapinch kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Pink tall grass | Ideale omgeving: Dry",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Bulldoze",
      "Fly"
    ],
    "evolvesFrom": "Trapinch",
    "evolvesInto": "Flygon",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Pink tall grass; dat is de eerste habitat die je voor Vibrava kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Pink tall grass | Ideale omgeving: Dry",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Bulldoze",
      "Fly"
    ],
    "evolvesFrom": "Vibrava",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Pink tall grass; dat is de eerste habitat die je voor Flygon kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Pink tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Altaria",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Pink tall grass; dat is de eerste habitat die je voor Swablu kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Birdsong garden (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Birdsong garden | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Litter",
      "Fly"
    ],
    "evolvesFrom": "Swablu",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Birdsong garden; dat is de eerste habitat die je voor Altaria kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 242,
    "name": "Duskull",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Pink tall grass (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Pink tall grass | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Gather"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Dusclops",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Pink tall grass; dat is de eerste habitat die je voor Duskull kunt proberen. Let op: Night, Sun, Cloud, Rain."
  },
  {
    "number": 243,
    "name": "Dusclops",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Trash site TV (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Trash site TV | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Gather"
    ],
    "evolvesFrom": "Duskull",
    "evolvesInto": "Dusknoir",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Trash site TV; dat is de eerste habitat die je voor Dusclops kunt proberen. Let op: Night, Sun, Cloud, Rain."
  },
  {
    "number": 244,
    "name": "Dusknoir",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Trash site TV (Tijd: Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Trash site TV | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Gather",
      "Trade"
    ],
    "evolvesFrom": "Dusclops",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Trash site TV; dat is de eerste habitat die je voor Dusknoir kunt proberen. Let op: Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Cycling rest stop (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Cycling rest stop | Ideale omgeving: Cool",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Recycle"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Metang",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Cycling rest stop; dat is de eerste habitat die je voor Beldum kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Professor's apprentice program (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Professor's apprentice program | Ideale omgeving: Cool",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Recycle"
    ],
    "evolvesFrom": "Beldum",
    "evolvesInto": "Metagross",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Professor's apprentice program; dat is de eerste habitat die je voor Metang kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Gamer's paradise (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Gamer's paradise | Ideale omgeving: Cool",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Recycle",
      "Crush"
    ],
    "evolvesFrom": "Metang",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Gamer's paradise; dat is de eerste habitat die je voor Metagross kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 248,
    "name": "Snivy",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Playland (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Playland | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Servine",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Playland; dat is de eerste habitat die je voor Snivy kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 249,
    "name": "Servine",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Tree-shaded fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Tree-shaded fluffy flower bed | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "Snivy",
    "evolvesInto": "Serperior",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded fluffy flower bed; dat is de eerste habitat die je voor Servine kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 250,
    "name": "Serperior",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Tree-shaded fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Very Rare) ; Public reading material (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Tree-shaded fluffy flower bed / Public reading material | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "Servine",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded fluffy flower bed; dat is de eerste habitat die je voor Serperior kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 251,
    "name": "Froakie",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Hydrated pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Hydrated pink tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Frogadier",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Hydrated pink tall grass; dat is de eerste habitat die je voor Froakie kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 252,
    "name": "Frogadier",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Hydrated pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Prank button (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Hydrated pink tall grass / Prank button | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Froakie",
    "evolvesInto": "Greninja",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Hydrated pink tall grass; dat is de eerste habitat die je voor Frogadier kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Hydrated pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Prank button (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Hydrated pink tall grass / Prank button | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water",
      "Chop"
    ],
    "evolvesFrom": "Frogadier",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Hydrated pink tall grass; dat is de eerste habitat die je voor Greninja kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Tire Park (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tire Park | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Begin met Tire Park; dat is de eerste habitat die je voor Dedenne kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Rhythmic Living room (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Rhythmic Living room | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Noivern",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Rhythmic Living room; dat is de eerste habitat die je voor Noibat kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Rhythmic Living room (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Rhythmic Living room | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Search",
      "Fly"
    ],
    "evolvesFrom": "Noibat",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Rhythmic Living room; dat is de eerste habitat die je voor Noivern kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 257,
    "name": "Rookidee",
    "type": [
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Fluffy flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Fluffy flower bed | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Corvisquire",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Fluffy flower bed; dat is de eerste habitat die je voor Rookidee kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 258,
    "name": "Corvisquire",
    "type": [
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Elevated pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Elevated pink tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "Rookidee",
    "evolvesInto": "Corviknight",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Elevated pink tall grass; dat is de eerste habitat die je voor Corvisquire kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Elevated pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Very Rare) ; Sewer hole inspection (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Elevated pink tall grass / Sewer hole inspection | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Chop",
      "Fly"
    ],
    "evolvesFrom": "Corvisquire",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Elevated pink tall grass; dat is de eerste habitat die je voor Corviknight kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Tree-shaded pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tree-shaded pink tall grass | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Gather",
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Drakloak",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded pink tall grass; dat is de eerste habitat die je voor Dreepy kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Tree-shaded pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare) ; Office storeroom (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tree-shaded pink tall grass / Office storeroom | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Gather",
      "Search"
    ],
    "evolvesFrom": "Dreepy",
    "evolvesInto": "Dragapult",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded pink tall grass; dat is de eerste habitat die je voor Drakloak kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Office storeroom (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Office storeroom | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Gather",
      "Trade"
    ],
    "evolvesFrom": "Drakloak",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Office storeroom; dat is de eerste habitat die je voor Dragapult kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 263,
    "name": "Sprigatito",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Tree-shaded pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Interrogation desk (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tree-shaded pink tall grass / Interrogation desk | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Floragato",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tree-shaded pink tall grass; dat is de eerste habitat die je voor Sprigatito kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 264,
    "name": "Floragato",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Sparkling Skylands",
    "area": "Interrogation desk (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Interrogation desk | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "Sprigatito",
    "evolvesInto": "Meowscarada",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Interrogation desk; dat is de eerste habitat die je voor Floragato kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Heart-pounding surprise box (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Heart-pounding surprise box | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow",
      "Hype"
    ],
    "evolvesFrom": "Floragato",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Heart-pounding surprise box; dat is de eerste habitat die je voor Meowscarada kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Elevated pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Elevated pink tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Kilowattrel",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Elevated pink tall grass; dat is de eerste habitat die je voor Wattrel kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Elevated pink tall grass (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Elevated pink tall grass | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate",
      "Fly"
    ],
    "evolvesFrom": "Wattrel",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Elevated pink tall grass; dat is de eerste habitat die je voor Kilowattrel kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Palette Town",
    "area": "Large luggage carrier (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Oversized dumping ground (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common) ; Sewer hole inspection (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain)",
    "habitat": "Large luggage carrier / Oversized dumping ground / Sewer hole inspection | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Tinkatuff",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Large luggage carrier; dat is de eerste habitat die je voor Tinkatink kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Palette Town",
    "area": "Large luggage carrier (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Rare)",
    "habitat": "Large luggage carrier | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "Tinkatink",
    "evolvesInto": "Tinkaton",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Large luggage carrier; dat is de eerste habitat die je voor Tinkatuff kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Sparkling Skylands",
    "area": "Oversized dumping ground (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Oversized dumping ground | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Engineer"
    ],
    "evolvesFrom": "Tinkatuff",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Oversized dumping ground; dat is de eerste habitat die je voor Tinkaton kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Wing Fossil Display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Wing Fossil Display | Ideale omgeving: Dry",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Begin met Wing Fossil Display; dat is de eerste habitat die je voor Aerodactyl kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 272,
    "name": "Cranidos",
    "type": [
      "Rock"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Skull Fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Skull Fossil display | Ideale omgeving: Dry",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Crush"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Rampardos",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Skull Fossil display; dat is de eerste habitat die je voor Cranidos kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 273,
    "name": "Rampardos",
    "type": [
      "Rock"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rocky Ridges",
    "area": "Headbutt Fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Headbutt Fossil display | Ideale omgeving: Dry",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Crush",
      "Litter"
    ],
    "evolvesFrom": "Cranidos",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Headbutt Fossil display; dat is de eerste habitat die je voor Rampardos kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Armor Fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Armor Fossil display | Ideale omgeving: Dry",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Crush"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Bastiodon",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Armor Fossil display; dat is de eerste habitat die je voor Shieldon kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Shield Fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Shield Fossil display | Ideale omgeving: Dry",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Crush",
      "Litter"
    ],
    "evolvesFrom": "Shieldon",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Shield Fossil display; dat is de eerste habitat die je voor Bastiodon kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Jaw Fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Jaw Fossil display | Ideale omgeving: Dry",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Crush"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Tyrantrum",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Jaw Fossil display; dat is de eerste habitat die je voor Tyrunt kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Despot fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Despot fossil display | Ideale omgeving: Dry",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Crush",
      "Litter"
    ],
    "evolvesFrom": "Tyrunt",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Despot fossil display; dat is de eerste habitat die je voor Tyrantrum kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Sail Fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Sail Fossil display | Ideale omgeving: Cool",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Crush"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Aurorus",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Sail Fossil display; dat is de eerste habitat die je voor Amaura kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "location": "Rocky Ridges",
    "area": "Tundra fossil display (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Tundra fossil display | Ideale omgeving: Cool",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Crush",
      "Litter"
    ],
    "evolvesFrom": "Amaura",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Tundra fossil display; dat is de eerste habitat die je voor Aurorus kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 280,
    "name": "Eevee",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town",
    "area": "Pretty flower bed (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Pretty flower bed | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Vaporeon / Jolteon / Flareon / Espeon / Umbreon / Leafeon / Glaceon / Sylveon",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Pretty flower bed; dat is de eerste habitat die je voor Eevee kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "area": "Boundless blue beverage (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Boundless blue beverage | Ideale omgeving: Humid",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Boundless blue beverage; dat is de eerste habitat die je voor Vaporeon kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "area": "Electrifying potatoes (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Electrifying potatoes | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Electrifying potatoes; dat is de eerste habitat die je voor Jolteon kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "area": "Burning-hot spice (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Burning-hot spice | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Burning-hot spice; dat is de eerste habitat die je voor Flareon kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "area": "Elegant daytime treats (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Elegant daytime treats | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Gather"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Elegant daytime treats; dat is de eerste habitat die je voor Espeon kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "area": "Dark-chocolate cookies (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Dark-chocolate cookies | Ideale omgeving: Dark",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Dark-chocolate cookies; dat is de eerste habitat die je voor Umbreon kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "area": "Leafy greens sandwich (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Leafy greens sandwich | Ideale omgeving: Bright",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Leafy greens sandwich; dat is de eerste habitat die je voor Leafeon kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "area": "Chilly shaved ice (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Chilly shaved ice | Ideale omgeving: Cool",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Chilly shaved ice; dat is de eerste habitat die je voor Glaceon kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
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
    "area": "Lovely ribbon cake (Tijd: Morning, Day, Evening, Night | Weer: Sun, Cloud, Rain | Zeldzaamheid: Common)",
    "habitat": "Lovely ribbon cake | Ideale omgeving: Warm",
    "obtainMethod": "Maak één van de genoemde habitats en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "Pokémon evolueren niet in Pokopia; bevriend elke soort afzonderlijk.",
    "tip": "Begin met Lovely ribbon cake; dat is de eerste habitat die je voor Sylveon kunt proberen. Let op: Morning, Day, Evening, Night, Sun, Cloud, Rain."
  },
  {
    "number": 289,
    "name": "Kyogre",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Dream Island",
    "area": "",
    "habitat": "Ideale omgeving: Humid",
    "obtainMethod": "Deze Pokémon is gekoppeld aan Dream Island.",
    "requirements": "",
    "specialties": [
      "???"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Richt je eerst op Dream Island en controleer daar de Pokédex-aanwijzingen voor Kyogre."
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
    "area": "",
    "habitat": "Ideale omgeving: Bright",
    "obtainMethod": "Deze Pokémon is gekoppeld aan Dream Island.",
    "requirements": "",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Richt je eerst op Dream Island en controleer daar de Pokédex-aanwijzingen voor Raikou."
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
    "area": "",
    "habitat": "Ideale omgeving: Warm",
    "obtainMethod": "Deze Pokémon is gekoppeld aan Dream Island.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Richt je eerst op Dream Island en controleer daar de Pokédex-aanwijzingen voor Entei."
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
    "area": "",
    "habitat": "Ideale omgeving: Humid",
    "obtainMethod": "Deze Pokémon is gekoppeld aan Dream Island.",
    "requirements": "",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Richt je eerst op Dream Island en controleer daar de Pokédex-aanwijzingen voor Suicune."
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
    "location": "Dream Island",
    "area": "",
    "habitat": "Ideale omgeving: Warm",
    "obtainMethod": "Deze Pokémon is gekoppeld aan Dream Island.",
    "requirements": "",
    "specialties": [
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Richt je eerst op Dream Island en controleer daar de Pokédex-aanwijzingen voor Volcanion."
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
    "location": "Dream Island",
    "area": "",
    "habitat": "Ideale omgeving: Cool",
    "obtainMethod": "Deze Pokémon is gekoppeld aan Dream Island.",
    "requirements": "",
    "specialties": [
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Richt je eerst op Dream Island en controleer daar de Pokédex-aanwijzingen voor Articuno."
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
    "location": "Dream Island",
    "area": "",
    "habitat": "Ideale omgeving: Bright",
    "obtainMethod": "Deze Pokémon is gekoppeld aan Dream Island.",
    "requirements": "",
    "specialties": [
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Richt je eerst op Dream Island en controleer daar de Pokédex-aanwijzingen voor Zapdos."
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
    "location": "Dream Island",
    "area": "",
    "habitat": "Ideale omgeving: Warm",
    "obtainMethod": "Deze Pokémon is gekoppeld aan Dream Island.",
    "requirements": "",
    "specialties": [
      "Fly"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Richt je eerst op Dream Island en controleer daar de Pokédex-aanwijzingen voor Moltres."
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
    "location": "Dream Island",
    "area": "",
    "habitat": "Ideale omgeving: Humid",
    "obtainMethod": "Deze Pokémon is gekoppeld aan Dream Island.",
    "requirements": "",
    "specialties": [
      "???"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Richt je eerst op Dream Island en controleer daar de Pokédex-aanwijzingen voor Lugia."
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
    "location": "Dream Island",
    "area": "",
    "habitat": "Ideale omgeving: Warm",
    "obtainMethod": "Deze Pokémon is gekoppeld aan Dream Island.",
    "requirements": "",
    "specialties": [
      "???"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Richt je eerst op Dream Island en controleer daar de Pokédex-aanwijzingen voor Ho-Oh."
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
    "area": "",
    "habitat": "Ideale omgeving: Dark",
    "obtainMethod": "Deze Pokémon is gekoppeld aan Dream Island.",
    "requirements": "",
    "specialties": [
      "Teleport"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Richt je eerst op Dream Island en controleer daar de Pokédex-aanwijzingen voor Mewtwo."
  },
  {
    "number": 300,
    "name": "Mew",
    "type": [
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Mysterious Mural",
    "area": "",
    "habitat": "Ideale omgeving: Warm",
    "obtainMethod": "Verzamel alle 27 Mysterious Slates en plaats ze op de Mysterious Mural om Mew te krijgen.",
    "requirements": "Alle 27 Mysterious Slates verzamelen.",
    "specialties": [
      "Teleport"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Werk gericht aan de 27 Mysterious Slates; zodra de Mysterious Mural compleet is, kun je Mew krijgen."
  }
];
