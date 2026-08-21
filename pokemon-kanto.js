// NLPokopia - Hoofd-Pokédex #001 t/m #300
// DEFINITIEVE DATASET
// - exacte habitat-benodigdheden staan direct op iedere Pokémonkaart
// - Nederlands eerst; Engelse speltermen tussen haakjes
// - tijd en weer volledig NL (EN)
// - geen verwijzing naar de Habitat Dex voor materialen
// - geen "Mijn tip:" prefix
// - evolutiemethode niet gebruikt
// Bron voor habitats/materialen/tijd/weer/specialties: Nintendo Life complete Pokopia Pokédex (13 augustus 2026).

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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Hoog gras (Tall Grass) / Bankje met groen (Bench with Greenery)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Hoog gras (Tall Grass): Hoog gras (Tall Grass) ×4 OF Bankje met groen (Bench with Greenery): Haag, willekeurig (Hedge (any)) ×2; Zitplaats, willekeurig (Seat (any)) ×1",
    "specialties": [
      "Groeien (Grow)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Ivysaur",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Tall Grass. Controleer daarna tijd en weer voordat je voor Bulbasaur wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bankje met groen (Bench with Greenery) / Bloemenveld (Field of Flowers)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bankje met groen (Bench with Greenery): Haag, willekeurig (Hedge (any)) ×2; Zitplaats, willekeurig (Seat (any)) ×1 OF Bloemenveld (Field of Flowers): Wilde bloemen (Wildflowers) ×8",
    "specialties": [
      "Groeien (Grow)"
    ],
    "evolvesFrom": "Bulbasaur",
    "evolvesInto": "Venusaur",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Field of Flowers. Controleer daarna tijd en weer voordat je voor Ivysaur wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Tuint terras (Garden Terrace) / Bloemenveld (Field of Flowers)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Tuint terras (Garden Terrace): Wilde bloemen (Wildflowers) ×4; Tuinstoel (Garden Chair) ×1; Tuintafel (Garden Table) ×1; Tuinlamp (Garden Light) ×1 OF Bloemenveld (Field of Flowers): Wilde bloemen (Wildflowers) ×8",
    "specialties": [
      "Groeien (Grow)",
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "Ivysaur",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Field of Flowers. Controleer daarna tijd en weer voordat je voor Venusaur wacht."
  },
  {
    "number": 4,
    "name": "Charmander",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Zonnig (Sunny), bewolkt (Cloudy)",
    "habitat": "Hoog gras (Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Hoog gras (Tall Grass): Hoog gras (Tall Grass) ×4",
    "specialties": [
      "Branden (Burn)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Charmeleon",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Tall Grass. Controleer daarna tijd en weer voordat je voor Charmander wacht."
  },
  {
    "number": 5,
    "name": "Charmeleon",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Zonnig (Sunny), bewolkt (Cloudy)",
    "habitat": "Kampeerplek (Campsite)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Kampeerplek (Campsite): Kampvuur (Campfire) ×1; Stro-tafel (Straw Table) ×1; Stro-kruk (Straw Stool) ×1",
    "specialties": [
      "Branden (Burn)"
    ],
    "evolvesFrom": "Charmander",
    "evolvesInto": "Charizard",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Campsite. Controleer daarna tijd en weer voordat je voor Charmeleon wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Zonnig (Sunny), bewolkt (Cloudy)",
    "habitat": "Bessenfeest-kampeerplek (Berry-fest Campsite) / Hoog gras (Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bessenfeest-kampeerplek (Berry-fest Campsite): Castform-weeramulet (zon) (Castform Weather Charm (Sun)) ×2; Bunfire (Bunfire) ×1; Bessenmand (Berry Basket) ×1; Hoge locatie (High-up Location) ×1 OF Hoog gras (Tall Grass): Hoog gras (Tall Grass) ×4",
    "specialties": [
      "Branden (Burn)",
      "Vliegen (Fly)"
    ],
    "evolvesFrom": "Charmeleon",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Tall Grass. Controleer daarna tijd en weer voordat je voor Charizard wacht."
  },
  {
    "number": 7,
    "name": "Squirtle",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Hoog gras (Tall Grass) / Bevochtigd hoog gras (Hydrated Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Hoog gras (Tall Grass): Hoog gras (Tall Grass) ×4 OF Bevochtigd hoog gras (Hydrated Tall Grass): Hoog gras (Tall Grass) ×4; Water (Water) ×2",
    "specialties": [
      "Water geven (Water)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Wartortle",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Tall Grass. Controleer daarna tijd en weer voordat je voor Squirtle wacht."
  },
  {
    "number": 8,
    "name": "Wartortle",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bevochtigd hoog gras (Hydrated Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bevochtigd hoog gras (Hydrated Tall Grass): Hoog gras (Tall Grass) ×4; Water (Water) ×2",
    "specialties": [
      "Water geven (Water)"
    ],
    "evolvesFrom": "Squirtle",
    "evolvesInto": "Blastoise",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Hydrated tall grass. Controleer daarna tijd en weer voordat je voor Wartortle wacht."
  },
  {
    "number": 9,
    "name": "Blastoise",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Drijven in de schaduw (Floating in the Shade) / Bevochtigd hoog gras (Hydrated Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Drijven in de schaduw (Floating in the Shade): Opblaasboot (Inflatable Boat) ×1; Strandparasol (Beach Parasol) ×1; Water (Water) ×2 OF Bevochtigd hoog gras (Hydrated Tall Grass): Hoog gras (Tall Grass) ×4; Water (Water) ×2",
    "specialties": [
      "Water geven (Water)",
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Wartortle",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Hydrated tall grass. Controleer daarna tijd en weer voordat je voor Blastoise wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Ochtend (Morning), overdag (Daytime), avond (Evening) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Mooi bloemenbed (Pretty Flower Bed) / Verhoogd hoog gras (Elevated Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Mooi bloemenbed (Pretty Flower Bed): Wilde bloemen (Wildflowers) ×4 OF Verhoogd hoog gras (Elevated Tall Grass): Hoog gras (Tall Grass) ×4; Hoge locatie (High-up Location) ×1",
    "specialties": [
      "Vliegen (Fly)",
      "Zoeken (Search)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Pidgeotto",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Elevated tall grass. Controleer daarna tijd en weer voordat je voor Pidgey wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Ochtend (Morning), overdag (Daytime), avond (Evening) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Verhoogd hoog gras (Elevated Tall Grass) / Mooi bloemenbed (Pretty Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Verhoogd hoog gras (Elevated Tall Grass): Hoog gras (Tall Grass) ×4; Hoge locatie (High-up Location) ×1 OF Mooi bloemenbed (Pretty Flower Bed): Wilde bloemen (Wildflowers) ×4",
    "specialties": [
      "Vliegen (Fly)",
      "Zoeken (Search)"
    ],
    "evolvesFrom": "Pidgey",
    "evolvesInto": "Pidgeot",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Elevated tall grass. Controleer daarna tijd en weer voordat je voor Pidgeotto wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Ochtend (Morning), overdag (Daytime), avond (Evening) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Luxe vogelmaaltijd (Luxury Chirp-chirp Meal)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Luxe vogelmaaltijd (Luxury Chirp-chirp Meal): Houten vogelhuisje (Wooden Birdhouse) ×1; Bessenmand (Berry Basket) ×1",
    "specialties": [
      "Vliegen (Fly)",
      "Zoeken (Search)"
    ],
    "evolvesFrom": "Pidgeotto",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Luxury chirp-chirp meal. Controleer daarna tijd en weer voordat je voor Pidgeot wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Hoog gras (Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Hoog gras (Tall Grass): Hoog gras (Tall Grass) ×4",
    "specialties": [
      "Groeien (Grow)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Gloom",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Tall Grass. Controleer daarna tijd en weer voordat je voor Oddish wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Tropische sfeer (Tropical Vibes)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Tropische sfeer (Tropical Vibes): Grote palmboom (Large Palm Tree) ×1; Kustbloemen (Seashore Flowers) ×4",
    "specialties": [
      "Groeien (Grow)"
    ],
    "evolvesFrom": "Oddish",
    "evolvesInto": "Vileplume / Bellossom",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Tropical vibes. Controleer daarna tijd en weer voordat je voor Gloom wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Chansey-rustplek (Chansey Resting Area)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Chansey-rustplek (Chansey Resting Area): Haag, willekeurig (Hedge (any)) ×6; Brede zitplaats (Seat (wide)) ×1; Chansey-plant (Chansey Plant) ×1",
    "specialties": [
      "Groeien (Grow)",
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "Gloom",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Chansey Resting area. Controleer daarna tijd en weer voordat je voor Vileplume wacht."
  },
  {
    "number": 16,
    "name": "Bellossom",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Chansey-rustplek (Chansey Resting Area)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Chansey-rustplek (Chansey Resting Area): Haag, willekeurig (Hedge (any)) ×6; Brede zitplaats (Seat (wide)) ×1; Chansey-plant (Chansey Plant) ×1",
    "specialties": [
      "Groeien (Grow)",
      "Enthousiasmeren (Hype)"
    ],
    "evolvesFrom": "Gloom",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Chansey Resting area. Controleer daarna tijd en weer voordat je voor Bellossom wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Verhoogd bloemenbed (Elevated Flower Bed) / Bloementuin (Flower Garden)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Verhoogd bloemenbed (Elevated Flower Bed): Wilde bloemen (Wildflowers) ×4; Hoge locatie (High-up Location) ×1 OF Bloementuin (Flower Garden): Haag, willekeurig (Hedge (any)) ×4; Wilde bloemen (Wildflowers) ×4",
    "specialties": [
      "Zoeken (Search)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Parasect",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Elevated flower bed. Controleer daarna tijd en weer voordat je voor Paras wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bloementuin (Flower Garden) / Verhoogd bloemenbed (Elevated Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bloementuin (Flower Garden): Haag, willekeurig (Hedge (any)) ×4; Wilde bloemen (Wildflowers) ×4 OF Verhoogd bloemenbed (Elevated Flower Bed): Wilde bloemen (Wildflowers) ×4; Hoge locatie (High-up Location) ×1",
    "specialties": [
      "Zoeken (Search)"
    ],
    "evolvesFrom": "Paras",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Elevated flower bed. Controleer daarna tijd en weer voordat je voor Parasect wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Verlicht hoog gras (Illuminated Tall Grass) / Verlicht bankje (Illuminated Bench)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Verlicht hoog gras (Illuminated Tall Grass): Tall Grass (any) (Tall Grass (any)) ×4; Verlichting, willekeurig (Lighting (any)) ×1 OF Verlicht bankje (Illuminated Bench): Brede zitplaats (Seat (wide)) ×1; Straatlantaarn, willekeurig (Streetlight (any)) ×1",
    "specialties": [
      "Zoeken (Search)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Venomoth",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Illuminated tall grass. Controleer daarna tijd en weer voordat je voor Venonat wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Verlicht bankje (Illuminated Bench) / Verlicht hoog gras (Illuminated Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Verlicht bankje (Illuminated Bench): Brede zitplaats (Seat (wide)) ×1; Straatlantaarn, willekeurig (Streetlight (any)) ×1 OF Verlicht hoog gras (Illuminated Tall Grass): Tall Grass (any) (Tall Grass (any)) ×4; Verlichting, willekeurig (Lighting (any)) ×1",
    "specialties": [
      "Zoeken (Search)"
    ],
    "evolvesFrom": "Venonat",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Illuminated tall grass. Controleer daarna tijd en weer voordat je voor Venomoth wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Hoog gras in boomschaduw (Tree-shaded Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Hoog gras in boomschaduw (Tree-shaded Tall Grass): Grote boom, willekeurig (Large Tree (any)) ×1; Hoog gras (Tall Grass) ×4",
    "specialties": [
      "Groeien (Grow)",
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Weepinbell",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Tree-shaded  tall grass. Controleer daarna tijd en weer voordat je voor Bellsprout wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Onweerstaanbare geur en gloed (Irresistable Scent and Glow) / Bloementafel (Flowery Table)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Onweerstaanbare geur en gloed (Irresistable Scent and Glow): Bekerplantpot (Pitcher-plant pot) ×1; Eten op bord (Plated Food) ×1; Paddenstoellamp (Mushroom Lamp) ×1 OF Bloementafel (Flowery Table): Zitplaats, willekeurig (Seat (any)) ×1; Tafel, willekeurig (Table (any)) ×1; Kleine vaas (Small Vase) ×1",
    "specialties": [
      "Groeien (Grow)",
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "Bellsprout",
    "evolvesInto": "Victreebel",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Flowery table. Controleer daarna tijd en weer voordat je voor Weepinbell wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Onweerstaanbare geur en gloed (Irresistable Scent and Glow) / Bloementafel (Flowery Table)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Onweerstaanbare geur en gloed (Irresistable Scent and Glow): Bekerplantpot (Pitcher-plant pot) ×1; Eten op bord (Plated Food) ×1; Paddenstoellamp (Mushroom Lamp) ×1 OF Bloementafel (Flowery Table): Zitplaats, willekeurig (Seat (any)) ×1; Tafel, willekeurig (Table (any)) ×1; Kleine vaas (Small Vase) ×1",
    "specialties": [
      "Groeien (Grow)",
      "Hakken (Chop)"
    ],
    "evolvesFrom": "Weepinbell",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Flowery table. Controleer daarna tijd en weer voordat je voor Victreebel wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Hoog gras aan zee (Seaside Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Hoog gras aan zee (Seaside Tall Grass): Hoog gras (Tall Grass) ×4; Oceaanwater (Ocean Water) ×2",
    "specialties": [
      "Water geven (Water)",
      "Geeuwen (Yawn)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Slowbro / Slowking",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Seaside Tall Grass. Controleer daarna tijd en weer voordat je voor Slowpoke wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Visvijver (Fishing Pond) / Bed met knuffel (Bed With a Plush) / Hoog gras aan zee (Seaside Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Visvijver (Fishing Pond): Hengel (Fishing Rod) ×1; Zitplaats, willekeurig (Seat (any)) ×1; Water (Water) ×1 OF Bed met knuffel (Bed With a Plush): Bed, willekeurig (Bed (any)) ×1; Pop, willekeurig (Doll (any)) ×1 OF Hoog gras aan zee (Seaside Tall Grass): Hoog gras (Tall Grass) ×4; Oceaanwater (Ocean Water) ×2",
    "specialties": [
      "Water geven (Water)",
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Slowpoke",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Seaside Tall Grass. Controleer daarna tijd en weer voordat je voor Slowbro wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Visvijver (Fishing Pond) / Bed met knuffel (Bed With a Plush) / Hoog gras aan zee (Seaside Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Visvijver (Fishing Pond): Hengel (Fishing Rod) ×1; Zitplaats, willekeurig (Seat (any)) ×1; Water (Water) ×1 OF Bed met knuffel (Bed With a Plush): Bed, willekeurig (Bed (any)) ×1; Pop, willekeurig (Doll (any)) ×1 OF Hoog gras aan zee (Seaside Tall Grass): Hoog gras (Tall Grass) ×4; Oceaanwater (Ocean Water) ×2",
    "specialties": [
      "Water geven (Water)",
      "Teleporteren (Teleport)"
    ],
    "evolvesFrom": "Slowpoke",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Seaside Tall Grass. Controleer daarna tijd en weer voordat je voor Slowking wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Fabrieksopslag (Factory Storage)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Fabrieksopslag (Factory Storage): Straatlantaarn, willekeurig (Streetlight (any)) ×1; Besturingseenheid (Control Unit) ×1; Metalen vat (Metal Drum) ×1; Verwarde kabels (Jumbled Cords) ×1",
    "specialties": [
      "Energie opwekken (Generate)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Magneton",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Factory Storage. Controleer daarna tijd en weer voordat je voor Magnemite wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Mini-speelhoek (Mini Game Corner) / Afvalbakcentrale (Trash Can Central)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Mini-speelhoek (Mini Game Corner): Arcadekast (Arcade Machine) ×1; Zitplaats, willekeurig (Seat (any)) ×1; Boksspel (Punching Game) ×1 OF Afvalbakcentrale (Trash Can Central): Afvalbak (Garbage Bin) ×4",
    "specialties": [
      "Energie opwekken (Generate)"
    ],
    "evolvesFrom": "Magnemite",
    "evolvesInto": "Magnezone",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Trash can central. Controleer daarna tijd en weer voordat je voor Magneton wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Mini-speelhoek (Mini Game Corner) / Afvalbakcentrale (Trash Can Central)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Mini-speelhoek (Mini Game Corner): Arcadekast (Arcade Machine) ×1; Zitplaats, willekeurig (Seat (any)) ×1; Boksspel (Punching Game) ×1 OF Afvalbakcentrale (Trash Can Central): Afvalbak (Garbage Bin) ×4",
    "specialties": [
      "Energie opwekken (Generate)",
      "Recyclen (Recycle)"
    ],
    "evolvesFrom": "Magneton",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Trash can central. Controleer daarna tijd en weer voordat je voor Magnezone wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Glad hoog gras (Smooth Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Glad hoog gras (Smooth Tall Grass): Droog hoog gras (Dry Tall Grass) ×4; Gladde rots (Smooth Rock) ×1",
    "specialties": [
      "Verpletteren (Crush)",
      "Bulldozeren (Bulldoze)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Steelix",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Smooth tall grass. Controleer daarna tijd en weer voordat je voor Onix wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Rinkelende ijzerconstructie (Clink-clang Iron Construction)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Rinkelende ijzerconstructie (Clink-clang Iron Construction): IJzeren balk of kolom (Iron beam or column) ×3; Kruiwagen (Wheelbarrow) ×1; Zandzakken (Sandbags) ×1; Graafgereedschap (Excavation Tools) ×1",
    "specialties": [
      "Verpletteren (Crush)",
      "Bulldozeren (Bulldoze)"
    ],
    "evolvesFrom": "Onix",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Clink-clang iron construction. Controleer daarna tijd en weer voordat je voor Steelix wacht."
  },
  {
    "number": 32,
    "name": "Cubone",
    "type": [
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Graf met bloemen (Grave with Flowers)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Graf met bloemen (Grave with Flowers): Wilde bloemen (Wildflowers) ×1; Grafsteen (Gravestone) ×1",
    "specialties": [
      "Bouwen (Build)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Marowak",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Grave with flowers. Controleer daarna tijd en weer voordat je voor Cubone wacht."
  },
  {
    "number": 33,
    "name": "Marowak",
    "type": [
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Graf met bloemen (Grave with Flowers)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Graf met bloemen (Grave with Flowers): Wilde bloemen (Wildflowers) ×1; Grafsteen (Gravestone) ×2",
    "specialties": [
      "Bouwen (Build)"
    ],
    "evolvesFrom": "Cubone",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Grave with flowers. Controleer daarna tijd en weer voordat je voor Marowak wacht."
  },
  {
    "number": 34,
    "name": "Tyrogue",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Trainingswaterval (Training Waterfall)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Trainingswaterval (Training Waterfall): Zitplaats, willekeurig (Seat (any)) ×1; Water (Water) ×2; Waterval (Waterfall) ×1",
    "specialties": [
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Hitmonlee / Hitmonchan / Hitmontop",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Training waterfall. Controleer daarna tijd en weer voordat je voor Tyrogue wacht."
  },
  {
    "number": 35,
    "name": "Hitmonlee",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Eerstehulpplek (Urgent Care)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Eerstehulpplek (Urgent Care): Zitplaats, willekeurig (Seat (any)) ×1; Tafel, willekeurig (Table (any)) ×1; EHBO-set (First Aid Kit) ×1",
    "specialties": [
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Tyrogue",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Urgent Care. Controleer daarna tijd en weer voordat je voor Hitmonlee wacht."
  },
  {
    "number": 36,
    "name": "Hitmonchan",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Rustplek na training (Exercise Resting Spot)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Rustplek na training (Exercise Resting Spot): Bokszak (Punching Bag) ×1; Zitplaats, willekeurig (Seat (any)) ×1",
    "specialties": [
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Tyrogue",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Exercise resting spot. Controleer daarna tijd en weer voordat je voor Hitmonchan wacht."
  },
  {
    "number": 37,
    "name": "Hitmontop",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "EHBO bij de gym (Gym First Aid)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "EHBO bij de gym (Gym First Aid): Tafel, willekeurig (Table (any)) ×1; Bokszak (Punching Bag) ×1; EHBO-set (First Aid Kit) ×1",
    "specialties": [
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Tyrogue",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Gym first aid. Controleer daarna tijd en weer voordat je voor Hitmontop wacht."
  },
  {
    "number": 38,
    "name": "Koffing",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Afvalverzamelplek (Trash Collection Site)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Afvalverzamelplek (Trash Collection Site): Afvalbak, willekeurig (Waste Bin (any)) ×1; Bord, willekeurig (Sign (any)) ×1; Vuilniszakken (Garbage Bags) ×1; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Recyclen (Recycle)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Weezing",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Trash collection site. Controleer daarna tijd en weer voordat je voor Koffing wacht."
  },
  {
    "number": 39,
    "name": "Weezing",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Ouderwetse antiekhoek (Good Old-fashioned Antiques) / Afvalverzamelplek (Trash Collection Site)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Ouderwetse antiekhoek (Good Old-fashioned Antiques): Antieke kast (Antique Closet) ×1; Antiek bed (Antique Bed) ×1; Antieke ladekast (Antique Dresser) ×1; Antieke stoel (Antique Chair) ×1; alleen Palette Town (Palette Town Only) OF Afvalverzamelplek (Trash Collection Site): Afvalbak, willekeurig (Waste Bin (any)) ×1; Bord, willekeurig (Sign (any)) ×1; Vuilniszakken (Garbage Bags) ×1",
    "specialties": [
      "Recyclen (Recycle)"
    ],
    "evolvesFrom": "Koffing",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Good old-fashioned antiques. Controleer daarna tijd en weer voordat je voor Weezing wacht."
  },
  {
    "number": 40,
    "name": "Tangela",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Alleen maar Poké Balls (Nothin' but Poké Balls)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Alleen maar Poké Balls (Nothin' but Poké Balls): Poké Ball-bank (Poké Ball Sofa) ×1; Poké Ball-bed (Poké Ball Bed) ×1; Poké Ball-tafel (Poké Ball Table) ×1; Poké Ball-lamp (Poké Ball Light) ×1; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Groeien (Grow)",
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Tangrowth",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Nothin' but Poke Balls. Controleer daarna tijd en weer voordat je voor Tangela wacht."
  },
  {
    "number": 41,
    "name": "Tangrowth",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bankje met groen (Bench with Greenery)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bankje met groen (Bench with Greenery): Haag, willekeurig (Hedge (any)) ×2; Zitplaats, willekeurig (Seat (any)) ×1; alleen Cloud Island (Cloud Island Only)",
    "specialties": [
      "Groeien (Grow)",
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "Tangela",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Bench with greenery. Controleer daarna tijd en weer voordat je voor Tangrowth wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Hoog gras in boomschaduw (Tree-shaded Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Hoog gras in boomschaduw (Tree-shaded Tall Grass): Grote boom, willekeurig (Large Tree (any)) ×1; Hoog gras (Tall Grass) ×4",
    "specialties": [
      "Hakken (Chop)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Scizor",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Tree-shaded  tall grass. Controleer daarna tijd en weer voordat je voor Scyther wacht."
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
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Hoog gras in boomschaduw (Tree-shaded Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Hoog gras in boomschaduw (Tree-shaded Tall Grass): Grote boom, willekeurig (Large Tree (any)) ×1; Hoog gras (Tall Grass) ×4; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Hakken (Chop)"
    ],
    "evolvesFrom": "Scyther",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Tree-shaded  tall grass. Controleer daarna tijd en weer voordat je voor Scizor wacht."
  },
  {
    "number": 44,
    "name": "Pinsir",
    "type": [
      "Bug"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Hoog gras in boomschaduw (Tree-shaded Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Hoog gras in boomschaduw (Tree-shaded Tall Grass): Grote boom, willekeurig (Large Tree (any)) ×1; Hoog gras (Tall Grass) ×4",
    "specialties": [
      "Hakken (Chop)",
      "Bouwen (Build)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Tree-shaded  tall grass. Controleer daarna tijd en weer voordat je voor Pinsir wacht."
  },
  {
    "number": 45,
    "name": "Magikarp",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Visplek aan de oceaan (Ocean Fishing Spot)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Visplek aan de oceaan (Ocean Fishing Spot): Hengel (Fishing Rod) ×1; Zitplaats, willekeurig (Seat (any)) ×1; Oceaanwater (Ocean Water) ×1",
    "specialties": [
      "Niet van toepassing (N/A)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Gyarados",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Ocean fishing spot. Controleer daarna tijd en weer voordat je voor Magikarp wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Verlichte waterval (Illuminated Waterfall)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Verlichte waterval (Illuminated Waterfall): Stapstenen (Stepping Stones) ×3; Fakkel (Torch) ×2; Water (Water) ×3; Waterval (Waterfall) ×1",
    "specialties": [
      "Water geven (Water)"
    ],
    "evolvesFrom": "Magikarp",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Illuminated waterfall. Controleer daarna tijd en weer voordat je voor Gyarados wacht."
  },
  {
    "number": 47,
    "name": "Ditto",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Droomeiland (Dream Island)",
    "area": "Tijd (Time): Niet van toepassing (N/A) | Weer (Weather): Niet van toepassing (N/A)",
    "habitat": "Geen normaal leefgebied (N/A)",
    "obtainMethod": "Ditto is de speler zelf; er is geen normaal leefgebied nodig.",
    "requirements": "Geen habitatmaterialen nodig (No habitat materials required).",
    "specialties": [
      "Transformeren (Transform)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin je zoektocht naar Ditto in Dream Island en controleer eerst of er een speciale ontgrendelvoorwaarde geldt."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Mooi bloemenbed (Pretty Flower Bed) / Verhoogd hoog gras (Elevated Tall Grass) / Zacht verlicht bed (Gently Lit Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Mooi bloemenbed (Pretty Flower Bed): Wilde bloemen (Wildflowers) ×4 OF Verhoogd hoog gras (Elevated Tall Grass): Hoog gras (Tall Grass) ×4; Hoge locatie (High-up Location) ×1 OF Zacht verlicht bed (Gently Lit Bed): Bed, willekeurig (Bed (any)) ×1; Tafel, willekeurig (Table (any)) ×1; Smalle kaars (Slender Candle) ×1",
    "specialties": [
      "Ruilen (Trade)",
      "Vliegen (Fly)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Noctowl",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Elevated tall grass. Controleer daarna tijd en weer voordat je voor Hoothoot wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Zacht verlicht bed (Gently Lit Bed) / Verhoogd hoog gras (Elevated Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Zacht verlicht bed (Gently Lit Bed): Bed, willekeurig (Bed (any)) ×1; Tafel, willekeurig (Table (any)) ×1; Smalle kaars (Slender Candle) ×1 OF Verhoogd hoog gras (Elevated Tall Grass): Hoog gras (Tall Grass) ×4; Hoge locatie (High-up Location) ×1",
    "specialties": [
      "Ruilen (Trade)",
      "Vliegen (Fly)"
    ],
    "evolvesFrom": "Hoothoot",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Elevated tall grass. Controleer daarna tijd en weer voordat je voor Noctowl wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Hoog gras in boomschaduw (Tree-shaded Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Hoog gras in boomschaduw (Tree-shaded Tall Grass): Grote boom, willekeurig (Large Tree (any)) ×1; Hoog gras (Tall Grass) ×4",
    "specialties": [
      "Hakken (Chop)",
      "Bouwen (Build)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Tree-shaded  tall grass. Controleer daarna tijd en weer voordat je voor Heracross wacht."
  },
  {
    "number": 51,
    "name": "Volbeat",
    "type": [
      "Bug"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bevochtigd bloemenbed (Hydrated Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bevochtigd bloemenbed (Hydrated Flower Bed): Wilde bloemen (Wildflowers) ×4; Water (Water) ×2",
    "specialties": [
      "Licht geven (Volbeat)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Hydrated flower bed. Controleer daarna tijd en weer voordat je voor Volbeat wacht."
  },
  {
    "number": 52,
    "name": "Illumise",
    "type": [
      "Bug"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bevochtigd bloemenbed (Hydrated Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bevochtigd bloemenbed (Hydrated Flower Bed): Wilde bloemen (Wildflowers) ×4; Water (Water) ×2",
    "specialties": [
      "Enthousiasmeren (Hype)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Hydrated flower bed. Controleer daarna tijd en weer voordat je voor Illumise wacht."
  },
  {
    "number": 53,
    "name": "Gulpin",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Verleidelijke eethoek (Tantalizing Dining Set)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Verleidelijke eethoek (Tantalizing Dining Set): Zitplaats, willekeurig (Seat (any)) ×1; Tafel, willekeurig (Table (any)) ×1; Eten op bord (Plated Food) ×1",
    "specialties": [
      "Opslaan (Storage)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Swalot",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Tantalizing dining set. Controleer daarna tijd en weer voordat je voor Gulpin wacht."
  },
  {
    "number": 54,
    "name": "Swalot",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Verrassing aan de eettafel (Dinner Table Surprise)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Verrassing aan de eettafel (Dinner Table Surprise): Brede zitplaats (Seat (wide)) ×2; Grote tafel (Table (large)) ×1; Feestschaal (Party Platter) ×4",
    "specialties": [
      "Opslaan (Storage)"
    ],
    "evolvesFrom": "Gulpin",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Dinner table surprise. Controleer daarna tijd en weer voordat je voor Swalot wacht."
  },
  {
    "number": 55,
    "name": "Cacnea",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Zonnig (Sunny)",
    "habitat": "Zonnige plek (Sunny Day Site)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Zonnige plek (Sunny Day Site): Castform Weather Charm (sun) (Castform Weather Charm (sun)) ×2; Eten op bord (Plated Food) ×1",
    "specialties": [
      "Groeien (Grow)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Cacturne",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Sunny overdag site. Controleer daarna tijd en weer voordat je voor Cacnea wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bloemenbed in boomschaduw (Tree-shaded Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bloemenbed in boomschaduw (Tree-shaded Flower Bed): Bessenboom, willekeurig (Berry Tree (any)) ×1; Wilde bloemen (Wildflowers) ×4",
    "specialties": [
      "Groeien (Grow)",
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "Cacnea",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Tree-shaded flower bed. Controleer daarna tijd en weer voordat je voor Cacturne wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Mooi bloemenbed (Pretty Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Mooi bloemenbed (Pretty Flower Bed): Wilde bloemen (Wildflowers) ×4",
    "specialties": [
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Vespiquen",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Pretty flower bed. Controleer daarna tijd en weer voordat je voor Combee wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bloemenveld (Field of Flowers)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bloemenveld (Field of Flowers): Wilde bloemen (Wildflowers) ×8",
    "specialties": [
      "Honing verzamelen (Gather Honey)",
      "Zoeken (Search)"
    ],
    "evolvesFrom": "Combee",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Field of Flowers. Controleer daarna tijd en weer voordat je voor Vespiquen wacht."
  },
  {
    "number": 59,
    "name": "Shellos",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Wegwijzer (Road Sign)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Wegwijzer (Road Sign): Pijl-bord (Arrow Sign) ×1; Houten pad (Wooden Path) ×3",
    "specialties": [
      "Water geven (Water)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Gastrodon",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Road Sign. Controleer daarna tijd en weer voordat je voor Shellos wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Visplek aan de oceaan (Ocean Fishing Spot)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Visplek aan de oceaan (Ocean Fishing Spot): Hengel (Fishing Rod) ×1; Zitplaats, willekeurig (Seat (any)) ×1; Oceaanwater (Ocean Water) ×1",
    "specialties": [
      "Water geven (Water)",
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Shellos",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Ocean fishing spot. Controleer daarna tijd en weer voordat je voor Gastrodon wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Meeliften op warme luchtstromen (Riding Warm Updrafts) / Knuffelcentrum (Plush Central) / Bed with a Plush (Bed with a Plush)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Meeliften op warme luchtstromen (Riding Warm Updrafts): Kampvuur (Campfire) ×3 OF Knuffelcentrum (Plush Central): Arcanine-pop (Arcanine Doll) ×1; Pikachu-pop (Pikachu Doll) ×1; Dragonite-pop (Dragonite Doll) ×1; Eevee-pop (Eevee Doll) ×1 OF Bed with a Plush (Bed with a Plush): Bed, willekeurig (Bed (any)) ×1; Pop, willekeurig (Doll (any)) ×1",
    "specialties": [
      "Droomeiland (Dream Island)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Drifblim",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Riding warm updrafts. Controleer daarna tijd en weer voordat je voor Drifloon wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Knuffelcentrum (Plush Central)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Knuffelcentrum (Plush Central): Arcanine-pop (Arcanine Doll) ×1; Pikachu-pop (Pikachu Doll) ×1; Dragonite-pop (Dragonite Doll) ×1; Eevee-pop (Eevee Doll) ×1",
    "specialties": [
      "Vliegen (Fly)",
      "Verzamelen (Gather)"
    ],
    "evolvesFrom": "Drifloon",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Plush central. Controleer daarna tijd en weer voordat je voor Drifblim wacht."
  },
  {
    "number": 63,
    "name": "Drilbur",
    "type": [
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Vers groenteveld (Fresh Veggie Field)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Vers groenteveld (Fresh Veggie Field): Groenteveld, willekeurig (Vegetable field (any)) ×8",
    "specialties": [
      "Zoeken (Search)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Excadrill",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Fresh Veggie Field. Controleer daarna tijd en weer voordat je voor Drilbur wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Vers groenteveld (Fresh Veggie Field)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Vers groenteveld (Fresh Veggie Field): Groenteveld, willekeurig (Vegetable field (any)) ×8",
    "specialties": [
      "Zoeken (Search)",
      "Hakken (Chop)"
    ],
    "evolvesFrom": "Drilbur",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Fresh Veggie Field. Controleer daarna tijd en weer voordat je voor Excadrill wacht."
  },
  {
    "number": 65,
    "name": "Timburr",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Hoog gras in rotsschaduw (Boulder-shaded Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Hoog gras in rotsschaduw (Boulder-shaded Tall Grass): Hoog gras (Tall Grass) ×4; Grote rots (Large Boulder) ×1",
    "specialties": [
      "Bouwen (Build)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Gurdurr",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Boulder-shaded Tall Grass. Controleer daarna tijd en weer voordat je voor Timburr wacht."
  },
  {
    "number": 66,
    "name": "Gurdurr",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Grote bagagekar (Large Luggage Carrier) / Hoog gras in rotsschaduw (Boulder-shaded Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Grote bagagekar (Large Luggage Carrier): Kar (Cart) ×1; Houten krat (Wooden Crate) ×2 OF Hoog gras in rotsschaduw (Boulder-shaded Tall Grass): Hoog gras (Tall Grass) ×4; Grote rots (Large Boulder) ×1",
    "specialties": [
      "Bouwen (Build)"
    ],
    "evolvesFrom": "Timburr",
    "evolvesInto": "Conkeldurr",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Boulder-shaded Tall Grass. Controleer daarna tijd en weer voordat je voor Gurdurr wacht."
  },
  {
    "number": 67,
    "name": "Conkeldurr",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Generator op de bouwplaats (Construction Site Generator)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Generator op de bouwplaats (Construction Site Generator): Oven (Furnace) ×1; IJzeren steiger (Iron Scaffold) ×2; IJzeren buizen (Iron Pipes) ×1",
    "specialties": [
      "Bouwen (Build)",
      "Verpletteren (Crush)"
    ],
    "evolvesFrom": "Gurdurr",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Construction-site generator. Controleer daarna tijd en weer voordat je voor Conkeldurr wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Griezelig grafoffer (Creepy Grave Offering) / Grafoffer (Grave Offering)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Griezelig grafoffer (Creepy Grave Offering): Griezelkaars (Eerie Candle) ×2; Grafsteen (Gravestone) ×1; Eten op bord (Plated Food) ×1 OF Grafoffer (Grave Offering): Smalle kaars (Slender Candle) ×2; Grafsteen (Gravestone) ×1; Eten op bord (Plated Food) ×1",
    "specialties": [
      "Branden (Burn)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Lampent",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Grave offering. Controleer daarna tijd en weer voordat je voor Litwick wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Griezelig grafoffer (Creepy Grave Offering) / Grafoffer (Grave Offering)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Griezelig grafoffer (Creepy Grave Offering): Griezelkaars (Eerie Candle) ×2; Grafsteen (Gravestone) ×1; Eten op bord (Plated Food) ×1 OF Grafoffer (Grave Offering): Smalle kaars (Slender Candle) ×2; Grafsteen (Gravestone) ×1; Eten op bord (Plated Food) ×1",
    "specialties": [
      "Branden (Burn)"
    ],
    "evolvesFrom": "Litwick",
    "evolvesInto": "Chandelure",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Grave offering. Controleer daarna tijd en weer voordat je voor Lampent wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Griezelig grafoffer (Creepy Grave Offering)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Griezelig grafoffer (Creepy Grave Offering): Griezelkaars (Eerie Candle) ×2; Grafsteen (Gravestone) ×1; Eten op bord (Plated Food) ×1",
    "specialties": [
      "Branden (Burn)"
    ],
    "evolvesFrom": "Lampent",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Creepy grave offering. Controleer daarna tijd en weer voordat je voor Chandelure wacht."
  },
  {
    "number": 71,
    "name": "Axew",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Werkplek van de houthakker (Lumberjack's Workplace) / Gezellige houtwerkplek (Cozy Log Handicrafts)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Werkplek van de houthakker (Lumberjack's Workplace): Houten stoel (Log Chair) ×1; Kar (Cart) ×1; Boomstronk, willekeurig (Tree Stump (any)) ×1; Houten tafel (Log Table) ×1 OF Gezellige houtwerkplek (Cozy Log Handicrafts): Houten stoel (Log Chair) ×1; Houten tafel (Log Table) ×1; Houten bed (Log Bed) ×1",
    "specialties": [
      "Hakken (Chop)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Fraxure",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Lumberjack's workplace. Controleer daarna tijd en weer voordat je voor Axew wacht."
  },
  {
    "number": 72,
    "name": "Fraxure",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Werkplek van de houthakker (Lumberjack's Workplace) / Gezellige houtwerkplek (Cozy Log Handicrafts)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Werkplek van de houthakker (Lumberjack's Workplace): Houten stoel (Log Chair) ×1; Kar (Cart) ×1; Boomstronk, willekeurig (Tree Stump (any)) ×1; Houten tafel (Log Table) ×1 OF Gezellige houtwerkplek (Cozy Log Handicrafts): Houten stoel (Log Chair) ×1; Houten tafel (Log Table) ×1; Houten bed (Log Bed) ×1",
    "specialties": [
      "Hakken (Chop)"
    ],
    "evolvesFrom": "Axew",
    "evolvesInto": "Haxorus",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Lumberjack's workplace. Controleer daarna tijd en weer voordat je voor Fraxure wacht."
  },
  {
    "number": 73,
    "name": "Haxorus",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Niet gespecificeerd (Not specified) | Weer (Weather): Niet gespecificeerd (Not specified)",
    "habitat": "Werkplek van de houthakker (Lumberjack's Workplace) / Gezellige houtwerkplek (Cozy Log Handicrafts)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Werkplek van de houthakker (Lumberjack's Workplace): Houten stoel (Log Chair) ×1; Kar (Cart) ×1; Boomstronk, willekeurig (Tree Stump (any)) ×1; Houten tafel (Log Table) ×1 OF Gezellige houtwerkplek (Cozy Log Handicrafts): Houten stoel (Log Chair) ×1; Houten tafel (Log Table) ×1; Houten bed (Log Bed) ×1",
    "specialties": [
      "Hakken (Chop)",
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "Fraxure",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Lumberjack's workplace. Controleer daarna tijd en weer voordat je voor Haxorus wacht."
  },
  {
    "number": 74,
    "name": "Goomy",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Regen (Rain)",
    "habitat": "Regendansplek (Rain Dance Site) / Bloemenbed in boomschaduw (Tree-shaded Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Regendansplek (Rain Dance Site): Castform-weeramulet (regen) (Castform Weather Charm (rain)) ×2; Eten op bord (Plated Food) ×1 OF Bloemenbed in boomschaduw (Tree-shaded Flower Bed): Bessenboom, willekeurig (Berry Tree (any)) ×1; Wilde bloemen (Wildflowers) ×4",
    "specialties": [
      "Water geven (Water)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Sliggoo",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Tree-shaded flower bed. Controleer daarna tijd en weer voordat je voor Goomy wacht."
  },
  {
    "number": 75,
    "name": "Sliggoo",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Regen (Rain)",
    "habitat": "Bevochtigd hoog gras (Hydrated Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bevochtigd hoog gras (Hydrated Tall Grass): Hoog gras (Tall Grass) ×4; Water (Water) ×2",
    "specialties": [
      "Water geven (Water)"
    ],
    "evolvesFrom": "Goomy",
    "evolvesInto": "Goodra",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Hydrated tall grass. Controleer daarna tijd en weer voordat je voor Sliggoo wacht."
  },
  {
    "number": 76,
    "name": "Goodra",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Regen (Rain)",
    "habitat": "Bessenplek (Very-berry Space)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bessenplek (Very-berry Space): Bessenstoel (Berry Chair) ×1; Bessenbed (Berry Bed) ×1; Bessentafel (Berry Table) ×1; Bessentafellamp (Berry Table Lamp) ×1",
    "specialties": [
      "Water geven (Water)"
    ],
    "evolvesFrom": "Sliggoo",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Very-berry space. Controleer daarna tijd en weer voordat je voor Goodra wacht."
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
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bevochtigd hoog gras (Hydrated Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bevochtigd hoog gras (Hydrated Tall Grass): Hoog gras (Tall Grass) ×4; Water (Water) ×2; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Vliegen (Fly)",
      "Water geven (Water)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Hydrated tall grass. Controleer daarna tijd en weer voordat je voor Cramorant wacht."
  },
  {
    "number": 78,
    "name": "Pichu",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Picknickplek (Picnic Set)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Picknickplek (Picnic Set): Zitplaats, willekeurig (Seat (any)) ×2; Tafel, willekeurig (Table (any)) ×1; Picknickmand (Picnic Basket) ×1",
    "specialties": [
      "Energie opwekken (Generate)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Pikachu",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Picnic Set. Controleer daarna tijd en weer voordat je voor Pichu wacht."
  },
  {
    "number": 79,
    "name": "Pikachu",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Picknickplek (Picnic Set)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Picknickplek (Picnic Set): Zitplaats, willekeurig (Seat (any)) ×2; Tafel, willekeurig (Table (any)) ×1; Picknickmand (Picnic Basket) ×1; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Energie opwekken (Generate)"
    ],
    "evolvesFrom": "Pichu",
    "evolvesInto": "Raichu",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Picnic Set. Controleer daarna tijd en weer voordat je voor Pikachu wacht."
  },
  {
    "number": 80,
    "name": "Raichu",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Natuurmarkt (Nature's Market)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Natuurmarkt (Nature's Market): Grote boom, willekeurig (Large Tree (any)) ×1; Grote rots (Large Boulder) ×1; Tafel, willekeurig (Table (any)) ×2; Kassa (Cash Register) ×1",
    "specialties": [
      "Energie opwekken (Generate)",
      "Enthousiasmeren (Hype)"
    ],
    "evolvesFrom": "Pikachu",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Nature's market. Controleer daarna tijd en weer voordat je voor Raichu wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Geel hoog gras in boomschaduw (Tree-Shaded Yellow Tall Grass) / Parkbank (Park Bench)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Geel hoog gras in boomschaduw (Tree-Shaded Yellow Tall Grass): Grote boom, willekeurig (Large Tree (any)) ×1; Geel hoog gras (Yellow Tall Grass) ×4 OF Parkbank (Park Bench): Brede zitplaats (Seat (wide)) ×1; Afvalbak (Garbage Bin) ×1",
    "specialties": [
      "Zoeken (Search)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Golbat",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Tree-shaded Yellow tall grass. Controleer daarna tijd en weer voordat je voor Zubat wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Geel hoog gras in boomschaduw (Tree-Shaded Yellow Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Geel hoog gras in boomschaduw (Tree-Shaded Yellow Tall Grass): Grote boom, willekeurig (Large Tree (any)) ×1; Geel hoog gras (Yellow Tall Grass) ×4",
    "specialties": [
      "Zoeken (Search)"
    ],
    "evolvesFrom": "Zubat",
    "evolvesInto": "Crobat",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Tree-shaded Yellow tall grass. Controleer daarna tijd en weer voordat je voor Golbat wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Afvalstortplek (Trash Disposal Site) / Verhoogd geel hoog gras (Elevated Yellow Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Afvalstortplek (Trash Disposal Site): Nutsmast (Utility Pole) ×1; Vuilniszakken (Garbage Bags) ×1 OF Verhoogd geel hoog gras (Elevated Yellow Tall Grass): Geel hoog gras (Yellow Tall Grass) ×4; Hoge locatie (High-up Location) ×1",
    "specialties": [
      "Zoeken (Search)",
      "Hakken (Chop)"
    ],
    "evolvesFrom": "Golbat",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Elevated yellow tall grass. Controleer daarna tijd en weer voordat je voor Crobat wacht."
  },
  {
    "number": 84,
    "name": "Meowth",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Werken achter de kassa (Working the Register) / Rustplek (Resting Spot)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Werken achter de kassa (Working the Register): Tafel, willekeurig (Table (any)) ×2; Kassa (Cash Register) ×1 OF Rustplek (Resting Spot): Kartonnen dozen (Cardboard Boxes) ×1; Strobed (Straw Bed) ×1",
    "specialties": [
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Persian",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Resting spot. Controleer daarna tijd en weer voordat je voor Meowth wacht."
  },
  {
    "number": 85,
    "name": "Persian",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Hoofdkwartier van de boevenorganisatie (Evil Organization HQ)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Hoofdkwartier van de boevenorganisatie (Evil Organization HQ): Potplant, willekeurig (Potted Plant (any)) ×2; Team Rocket-wanddecoratie (Team Rocket Wall Hanging) ×1; Luxe bank (Luxury Sofa) ×1",
    "specialties": [
      "Ruilen (Trade)",
      "Zoeken (Search)"
    ],
    "evolvesFrom": "Meowth",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Evil organization HQ. Controleer daarna tijd en weer voordat je voor Persian wacht."
  },
  {
    "number": 86,
    "name": "Psyduck",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Warmwaterbrondouche (Hot-spring Shower)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Warmwaterbrondouche (Hot-spring Shower): Douche (Shower) ×1; Zitplaats, willekeurig (Seat (any)) ×1; Warmwaterbronwater (Hot-spring Water) ×2",
    "specialties": [
      "Zoeken (Search)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Golduck",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Hot-spring shower. Controleer daarna tijd en weer voordat je voor Psyduck wacht."
  },
  {
    "number": 87,
    "name": "Golduck",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Warmwaterbrondouche (Hot-spring Shower)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Warmwaterbrondouche (Hot-spring Shower): Douche (Shower) ×1; Zitplaats, willekeurig (Seat (any)) ×1; Warmwaterbronwater (Hot-spring Water) ×2",
    "specialties": [
      "Zoeken (Search)"
    ],
    "evolvesFrom": "Psyduck",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Hot-spring shower. Controleer daarna tijd en weer voordat je voor Golduck wacht."
  },
  {
    "number": 88,
    "name": "Growlithe",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Maaltijdbereiding in het resort (Resort Meal Prep) / Eeuwige rommel (Perpetual Mess)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Maaltijdbereiding in het resort (Resort Meal Prep): Grote palmboom (Large Palm Tree) ×1; Zitplaats, willekeurig (Seat (any)) ×1; Eten op bord (Plated Food) ×1; Kampvuur (Campfire) ×1 OF Eeuwige rommel (Perpetual Mess): Kartonnen dozen (Cardboard Boxes) ×1; Speelgoed, willekeurig (Toy (any)) ×1",
    "specialties": [
      "Branden (Burn)",
      "Zoeken (Search)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Arcanine",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Perpetual mess. Controleer daarna tijd en weer voordat je voor Growlithe wacht."
  },
  {
    "number": 89,
    "name": "Arcanine",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Visplek bij magma (Magma Fishing Spot) / Minimuseum (Mini Museum)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Visplek bij magma (Magma Fishing Spot): Hengel (Fishing Rod) ×1; Zitplaats, willekeurig (Seat (any)) ×1; Lava (Lava) ×1 OF Minimuseum (Mini Museum): Paal, willekeurig (Post (any)) ×3; Sokkel / tentoonstellingsstandaard (Pedestal / Exhibition Stand) ×1; Groot verloren relikwie (Lost Relic (large)) ×1",
    "specialties": [
      "Branden (Burn)",
      "Zoeken (Search)"
    ],
    "evolvesFrom": "Growlithe",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Mini museum. Controleer daarna tijd en weer voordat je voor Arcanine wacht."
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
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Alles ingepakt (All Packed Up)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Alles ingepakt (All Packed Up): Kar (Cart) ×1; Kartonnen dozen (Cardboard Boxes) ×2",
    "specialties": [
      "Hakken (Chop)",
      "Bouwen (Build)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "controleer eerst de habitat- en locatievoorwaarden voor Farfetch'd voordat je materialen uitgeeft."
  },
  {
    "number": 91,
    "name": "Grimer",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Visplek in het moeras (Marsh Fishing Spot)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Visplek in het moeras (Marsh Fishing Spot): Hengel (Fishing Rod) ×1; Seat (Seat) ×1; Modderig water (Muddy Water) ×1",
    "specialties": [
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Muk",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Marsh fishing spot. Controleer daarna tijd en weer voordat je voor Grimer wacht."
  },
  {
    "number": 92,
    "name": "Muk",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Visplek in het moeras (Marsh Fishing Spot)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Visplek in het moeras (Marsh Fishing Spot): Hengel (Fishing Rod) ×1; Seat (Seat) ×1; Modderig water (Muddy Water) ×1",
    "specialties": [
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "Grimer",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Marsh fishing spot. Controleer daarna tijd en weer voordat je voor Muk wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Spookachtige studeerkamer (Spooky Study)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Spookachtige studeerkamer (Spooky Study): Boekenkast (Bookcase) ×1; Chique bank (Chic Sofa) ×1; Eenvoudige tafel (Plain Table) ×1; Smalle kaars (Slender Candle) ×1",
    "specialties": [
      "Verzamelen (Gather)",
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Haunter",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Spooky study. Controleer daarna tijd en weer voordat je voor Gastly wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Verrassing in de winkel (Surprise in Store) / Spookachtige studeerkamer (Spooky Study)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Verrassing in de winkel (Surprise in Store): Ballonnen (Balloons) ×2; Boo-in-the-Box (Boo-in-the-Box) ×1 OF Spookachtige studeerkamer (Spooky Study): Boekenkast (Bookcase) ×1; Chique bank (Chic Sofa) ×1; Eenvoudige tafel (Plain Table) ×1; Smalle kaars (Slender Candle) ×1",
    "specialties": [
      "Verzamelen (Gather)",
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Gastly",
    "evolvesInto": "Gengar",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Surprise in store. Controleer daarna tijd en weer voordat je voor Haunter wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Verrassing in de winkel (Surprise in Store)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Verrassing in de winkel (Surprise in Store): Ballonnen (Balloons) ×2; Boo-in-the-Box (Boo-in-the-Box) ×1",
    "specialties": [
      "Verzamelen (Gather)",
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Haunter",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Surprise in store. Controleer daarna tijd en weer voordat je voor Gengar wacht."
  },
  {
    "number": 96,
    "name": "Voltorb",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Piraat spelen (Playing Pirate) / Parkbank (Park Bench)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Piraat spelen (Playing Pirate): Vat (Barrel) ×1; Kanon (Cannon) ×2; Scheepsroer (Ship's Wheel) ×1 OF Parkbank (Park Bench): Brede zitplaats (Seat (wide)) ×1; Afvalbak (Garbage Bin) ×1",
    "specialties": [
      "Energie opwekken (Generate)",
      "Exploderen (Explode)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Electrode",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Park bench. Controleer daarna tijd en weer voordat je voor Voltorb wacht."
  },
  {
    "number": 97,
    "name": "Electrode",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Piraat spelen (Playing Pirate) / Parkbank (Park Bench)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Piraat spelen (Playing Pirate): Vat (Barrel) ×1; Kanon (Cannon) ×2; Scheepsroer (Ship's Wheel) ×1 OF Parkbank (Park Bench): Brede zitplaats (Seat (wide)) ×1; Afvalbak (Garbage Bin) ×1",
    "specialties": [
      "Energie opwekken (Generate)",
      "Exploderen (Explode)"
    ],
    "evolvesFrom": "Voltorb",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Park bench. Controleer daarna tijd en weer voordat je voor Electrode wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Strand in de schaduw (Shaded Beach) / Tropische sfeer (Tropical Vibes)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Strand in de schaduw (Shaded Beach): Grote palmboom (Large Palm Tree) ×1; Strandstoel (Beach Chair) ×1 OF Tropische sfeer (Tropical Vibes): Grote palmboom (Large Palm Tree) ×1; Kustbloemen (Seashore Flowers) ×4",
    "specialties": [
      "Groeien (Grow)",
      "Teleporteren (Teleport)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Exeggutor",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Tropical vibes. Controleer daarna tijd en weer voordat je voor Exeggcute wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Strand in de schaduw (Shaded Beach) / Tropische sfeer (Tropical Vibes)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Strand in de schaduw (Shaded Beach): Grote palmboom (Large Palm Tree) ×1; Strandstoel (Beach Chair) ×1 OF Tropische sfeer (Tropical Vibes): Grote palmboom (Large Palm Tree) ×1; Kustbloemen (Seashore Flowers) ×4",
    "specialties": [
      "Groeien (Grow)",
      "Teleporteren (Teleport)"
    ],
    "evolvesFrom": "Exeggcute",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Tropical vibes. Controleer daarna tijd en weer voordat je voor Exeggutor wacht."
  },
  {
    "number": 100,
    "name": "Happiny",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Werken achter de kassa (Working the Register) / Slaapzone met wekker (Alarm Clock Sleep Zone)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Werken achter de kassa (Working the Register): Tafel, willekeurig (Table (any)) ×2; Kassa (Cash Register) ×1 OF Slaapzone met wekker (Alarm Clock Sleep Zone): Bed, willekeurig (Bed (any)) ×1; Tafel, willekeurig (Table (any)) ×1; Wekker (Alarm Clock) ×1",
    "specialties": [
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Chansey",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Alarm clock sleep zone. Controleer daarna tijd en weer voordat je voor Happiny wacht."
  },
  {
    "number": 101,
    "name": "Chansey",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Volledig herstel (Full Recovery)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Volledig herstel (Full Recovery): Bed, willekeurig (Bed (any)) ×1; Eenvoudige kist (Plain Chest) ×1; EHBO-set (First Aid Kit) ×1",
    "specialties": [
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Happiny",
    "evolvesInto": "Blissey",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Full recovery. Controleer daarna tijd en weer voordat je voor Chansey wacht."
  },
  {
    "number": 102,
    "name": "Blissey",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Overdosis schattigheid (Cuteness Overload)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Overdosis schattigheid (Cuteness Overload): Schattige bank (Cute Sofa) ×1; Schattig bed (Cute Bed) ×1; Schattige tafel (Cute Table) ×1; Schattige lamp (Cute Lamp) ×1; Schattige ladekast (Cute Dresser) ×1",
    "specialties": [
      "Ruilen (Trade)",
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "Chansey",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Cuteness overload. Controleer daarna tijd en weer voordat je voor Blissey wacht."
  },
  {
    "number": 103,
    "name": "Elekid",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Automatenplek (Vending Machine Set)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Automatenplek (Vending Machine Set): Afvalbak, willekeurig (Waste Bin (any)) ×1; Automaat (Vending Machine) ×1",
    "specialties": [
      "Energie opwekken (Generate)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Electabuzz",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Vending machine set. Controleer daarna tijd en weer voordat je voor Elekid wacht."
  },
  {
    "number": 104,
    "name": "Electabuzz",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Verlicht podium (Light-Up Stage) / Afvalbakcentrale (Trash Can Central)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Verlicht podium (Light-Up Stage): Spotlight (Spotlight) ×2; Klein podium (Small Stage) ×1 OF Afvalbakcentrale (Trash Can Central): Afvalbak (Garbage Bin) ×4",
    "specialties": [
      "Energie opwekken (Generate)"
    ],
    "evolvesFrom": "Elekid",
    "evolvesInto": "Electivire",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Trash can central. Controleer daarna tijd en weer voordat je voor Electabuzz wacht."
  },
  {
    "number": 105,
    "name": "Electivire",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Verlicht podium (Light-Up Stage) / Automatenplek (Vending Machine Set)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Verlicht podium (Light-Up Stage): Spotlight (Spotlight) ×2; Klein podium (Small Stage) ×1 OF Automatenplek (Vending Machine Set): Afvalbak, willekeurig (Waste Bin (any)) ×1; Automaat (Vending Machine) ×1",
    "specialties": [
      "Energie opwekken (Generate)",
      "Verpletteren (Crush)"
    ],
    "evolvesFrom": "Electabuzz",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Light-up stage. Controleer daarna tijd en weer voordat je voor Electivire wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Tropische kust (Tropical Seaside)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Tropische kust (Tropical Seaside): Grote palmboom (Large Palm Tree) ×1; Haag, willekeurig (Hedge (any)) ×4; Oceaanwater (Ocean Water) ×2",
    "specialties": [
      "Water geven (Water)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Tropical seaside. Controleer daarna tijd en weer voordat je voor Lapras wacht."
  },
  {
    "number": 107,
    "name": "Munchlax",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Slapende Snorlax in boomschaduw (Tree-shaded Snoozing Snorlax) / Bed met knuffel (Bed With a Plush)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Slapende Snorlax in boomschaduw (Tree-shaded Snoozing Snorlax): Grote boom, willekeurig (Large Tree (any)) ×1; Dutbed (Naptime Bed) ×1; alleen Palette Town (Palette Town Only) OF Bed met knuffel (Bed With a Plush): Bed, willekeurig (Bed (any)) ×1; Pop, willekeurig (Doll (any)) ×1; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Bulldozeren (Bulldoze)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Snorlax",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Bed with a plush. Controleer daarna tijd en weer voordat je voor Munchlax wacht."
  },
  {
    "number": 108,
    "name": "Snorlax",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Ouderwetse antiekhoek (Good Old-fashioned Antiques) / Slapende Snorlax in boomschaduw (Tree-shaded Snoozing Snorlax)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Ouderwetse antiekhoek (Good Old-fashioned Antiques): Antieke kast (Antique Closet) ×1; Antiek bed (Antique Bed) ×1; Antieke ladekast (Antique Dresser) ×1; Antieke stoel (Antique Chair) ×1; alleen Palette Town (Palette Town Only) OF Slapende Snorlax in boomschaduw (Tree-shaded Snoozing Snorlax): Grote boom, willekeurig (Large Tree (any)) ×1; Dutbed (Naptime Bed) ×1; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Ruilen (Trade)",
      "Bulldozeren (Bulldoze)"
    ],
    "evolvesFrom": "Munchlax",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Gourmet's altar. Controleer daarna tijd en weer voordat je voor Snorlax wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Geel hoog gras (Yellow Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Geel hoog gras (Yellow Tall Grass): Geel hoog gras (Yellow Tall Grass) ×4",
    "specialties": [
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Ariados",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Yellow tall grass. Controleer daarna tijd en weer voordat je voor Spinarak wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Geel hoog gras (Yellow Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Geel hoog gras (Yellow Tall Grass): Geel hoog gras (Yellow Tall Grass) ×4",
    "specialties": [
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "Spinarak",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Yellow tall grass. Controleer daarna tijd en weer voordat je voor Ariados wacht."
  },
  {
    "number": 111,
    "name": "Mareep",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Breitafel (Knitting Table) / Overwoekerde automaat (Overgrowth Vending Machine)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Breitafel (Knitting Table): Zitplaats, willekeurig (Seat (any)) ×1; Tafel, willekeurig (Table (any)) ×1; Breispullen (Knitting Supplies) ×1 OF Overwoekerde automaat (Overgrowth Vending Machine): Geel hoog gras (Yellow Tall Grass) ×4; Automaat (Vending Machine) ×1",
    "specialties": [
      "Energie opwekken (Generate)",
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Flaaffy",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Overgrowth vending machine. Controleer daarna tijd en weer voordat je voor Mareep wacht."
  },
  {
    "number": 112,
    "name": "Flaaffy",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Nachtfestivalplek (Night Festival Venue) / Breitafel (Knitting Table)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Nachtfestivalplek (Night Festival Venue): Ballonnen (Balloons) ×2; Raichu-bord (Raichu Sign) ×1 OF Breitafel (Knitting Table): Zitplaats, willekeurig (Seat (any)) ×1; Tafel, willekeurig (Table (any)) ×1; Breispullen (Knitting Supplies) ×1",
    "specialties": [
      "Energie opwekken (Generate)",
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "Mareep",
    "evolvesInto": "Ampharos",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst nacht festival venue. Controleer daarna tijd en weer voordat je voor Flaaffy wacht."
  },
  {
    "number": 113,
    "name": "Ampharos",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Eenvoudig leven (Plain Life)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Eenvoudig leven (Plain Life): Eenvoudig bed (Plain Bed) ×1; Eenvoudige bank (Plain Sofa) ×1; Eenvoudige tafel (Plain Table) ×1; Eenvoudige lamp (Plain Lamp) ×1",
    "specialties": [
      "Energie opwekken (Generate)",
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Flaaffy",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Plain life. Controleer daarna tijd en weer voordat je voor Ampharos wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bevochtigd geel hoog gras (Hydrated Yellow Tall Grass) / Eeuwige rommel (Perpetual Mess)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bevochtigd geel hoog gras (Hydrated Yellow Tall Grass): Geel hoog gras (Yellow Tall Grass) ×4; Water (Water) ×2 OF Eeuwige rommel (Perpetual Mess): Kartonnen dozen (Cardboard Boxes) ×1; Speelgoed, willekeurig (Toy (any)) ×1",
    "specialties": [
      "Water geven (Water)",
      "Enthousiasmeren (Hype)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Marill",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Hydrated yellow tall grass. Controleer daarna tijd en weer voordat je voor Azurill wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Steiger (Dock) / Bevochtigd geel hoog gras (Hydrated Yellow Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Steiger (Dock): Loopplank (Walkway) ×4; Straatlantaarn, willekeurig (Streetlight (any)) ×1; Oceaanwater (Ocean Water) ×2 OF Bevochtigd geel hoog gras (Hydrated Yellow Tall Grass): Geel hoog gras (Yellow Tall Grass) ×4; Water (Water) ×2",
    "specialties": [
      "Water geven (Water)",
      "Enthousiasmeren (Hype)"
    ],
    "evolvesFrom": "Azurill",
    "evolvesInto": "Azumarill",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Hydrated yellow tall grass. Controleer daarna tijd en weer voordat je voor Marill wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Steiger (Dock)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Steiger (Dock): Loopplank (Walkway) ×4; Straatlantaarn, willekeurig (Streetlight (any)) ×1; Oceaanwater (Ocean Water) ×2",
    "specialties": [
      "Water geven (Water)",
      "Bouwen (Build)"
    ],
    "evolvesFrom": "Marill",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Dock. Controleer daarna tijd en weer voordat je voor Azumarill wacht."
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
    "location": "Somber strand (Bleak Beach)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Moerassig hoog gras (Marshy Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Moerassig hoog gras (Marshy Tall Grass): Geel hoog gras (Yellow Tall Grass) ×4; Modderig water (Muddy Water) ×2",
    "specialties": [
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Clodsire",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Marshy tall grass. Controleer daarna tijd en weer voordat je voor Paldean Wooper wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Moerassige visplek (Marshy Fishing Spot) / Moerassig hoog gras (Marshy Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Moerassige visplek (Marshy Fishing Spot): Hengel (Fishing Rod) ×1; Zitplaats, willekeurig (Seat (any)) ×1; Modderig water (Muddy Water) ×1 OF Moerassig hoog gras (Marshy Tall Grass): Geel hoog gras (Yellow Tall Grass) ×4; Modderig water (Muddy Water) ×2",
    "specialties": [
      "Opruimen (Litter)",
      "Bulldozeren (Bulldoze)"
    ],
    "evolvesFrom": "Paldean Wooper",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Marshy tall grass. Controleer daarna tijd en weer voordat je voor Clodsire wacht."
  },
  {
    "number": 119,
    "name": "Smeargle",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Klein atelier (Tiny Atelier)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Klein atelier (Tiny Atelier): Canvas (Canvas) ×1; Zitplaats, willekeurig (Seat (any)) ×1",
    "specialties": [
      "Schilderen (Paint)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Tiny Atelier. Controleer daarna tijd en weer voordat je voor Smeargle wacht."
  },
  {
    "number": 120,
    "name": "Torchic",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Vogelmaaltijd (Chirp-chirp Meal) / Maaltijdbereiding in het resort (Resort Meal Prep)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Vogelmaaltijd (Chirp-chirp Meal): Houten vogelhuisje (Wooden Birdhouse) ×1; Tafel, willekeurig (Table (any)) ×1; Eten op bord (Plated Food) ×1 OF Maaltijdbereiding in het resort (Resort Meal Prep): Grote palmboom (Large Palm Tree) ×1; Zitplaats, willekeurig (Seat (any)) ×1; Eten op bord (Plated Food) ×1; Kampvuur (Campfire) ×1",
    "specialties": [
      "Branden (Burn)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Combusken",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Chirp-chirp meal. Controleer daarna tijd en weer voordat je voor Torchic wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Ovenplek (Furnace Spot) / Maaltijdbereiding in het resort (Resort Meal Prep)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Ovenplek (Furnace Spot): Metalen vat (Metal Drum) ×1; Oven (Furnace) ×1 OF Maaltijdbereiding in het resort (Resort Meal Prep): Grote palmboom (Large Palm Tree) ×1; Zitplaats, willekeurig (Seat (any)) ×1; Eten op bord (Plated Food) ×1; Kampvuur (Campfire) ×1",
    "specialties": [
      "Branden (Burn)",
      "Bouwen (Build)"
    ],
    "evolvesFrom": "Torchic",
    "evolvesInto": "Blaziken",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Resort meal prep. Controleer daarna tijd en weer voordat je voor Combusken wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Ovenplek (Furnace Spot) / Vogelmaaltijd (Chirp-chirp Meal)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Ovenplek (Furnace Spot): Metalen vat (Metal Drum) ×1; Oven (Furnace) ×1 OF Vogelmaaltijd (Chirp-chirp Meal): Houten vogelhuisje (Wooden Birdhouse) ×1; Tafel, willekeurig (Table (any)) ×1; Eten op bord (Plated Food) ×1",
    "specialties": [
      "Branden (Burn)",
      "Bouwen (Build)"
    ],
    "evolvesFrom": "Combusken",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Chirp-chirp meal. Controleer daarna tijd en weer voordat je voor Blaziken wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Ochtend (Morning), overdag (Daytime), avond (Evening) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Verhoogd geel hoog gras (Elevated Yellow Tall Grass) / Winderig bloemenbed (Windy Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Verhoogd geel hoog gras (Elevated Yellow Tall Grass): Geel hoog gras (Yellow Tall Grass) ×4; Hoge locatie (High-up Location) ×1 OF Winderig bloemenbed (Windy Flower Bed): Windmolen (Windmill) ×1; Kustbloemen (Seashore Flowers) ×4",
    "specialties": [
      "Water geven (Water)",
      "Vliegen (Fly)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Pelipper",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Elevated yellow tall grass. Controleer daarna tijd en weer voordat je voor Wingull wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Ochtend (Morning), overdag (Daytime), avond (Evening) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Winderig bloemenbed (Windy Flower Bed) / Verhoogd geel hoog gras (Elevated Yellow Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Winderig bloemenbed (Windy Flower Bed): Windmolen (Windmill) ×1; Kustbloemen (Seashore Flowers) ×4 OF Verhoogd geel hoog gras (Elevated Yellow Tall Grass): Geel hoog gras (Yellow Tall Grass) ×4; Hoge locatie (High-up Location) ×1",
    "specialties": [
      "Water geven (Water)",
      "Vliegen (Fly)"
    ],
    "evolvesFrom": "Wingull",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Elevated yellow tall grass. Controleer daarna tijd en weer voordat je voor Pelipper wacht."
  },
  {
    "number": 125,
    "name": "Makuhita",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Geel hoog gras in boomschaduw (Tree-Shaded Yellow Tall Grass) / Alles ingepakt (All Packed Up)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Geel hoog gras in boomschaduw (Tree-Shaded Yellow Tall Grass): Grote boom, willekeurig (Large Tree (any)) ×1; Geel hoog gras (Yellow Tall Grass) ×4 OF Alles ingepakt (All Packed Up): Kar (Cart) ×1; Kartonnen dozen (Cardboard Boxes) ×2",
    "specialties": [
      "Bouwen (Build)",
      "Bulldozeren (Bulldoze)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Hariyama",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Tree-shaded Yellow tall grass. Controleer daarna tijd en weer voordat je voor Makuhita wacht."
  },
  {
    "number": 126,
    "name": "Hariyama",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Geel hoog gras in boomschaduw (Tree-Shaded Yellow Tall Grass) / Alles ingepakt (All Packed Up)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Geel hoog gras in boomschaduw (Tree-Shaded Yellow Tall Grass): Grote boom, willekeurig (Large Tree (any)) ×1; Geel hoog gras (Yellow Tall Grass) ×4 OF Alles ingepakt (All Packed Up): Kar (Cart) ×1; Kartonnen dozen (Cardboard Boxes) ×2",
    "specialties": [
      "Bouwen (Build)",
      "Bulldozeren (Bulldoze)"
    ],
    "evolvesFrom": "Makuhita",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Tree-shaded Yellow tall grass. Controleer daarna tijd en weer voordat je voor Hariyama wacht."
  },
  {
    "number": 127,
    "name": "Absol",
    "type": [
      "Dark"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Gastvrij resort (Welcoming Resort)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Gastvrij resort (Welcoming Resort): Resortbank (Resort Sofa) ×1; Resorttafel (Resort Table) ×1; Resorthangmat (Resort Hammock) ×1; Resortlamp (Resort Light) ×1",
    "specialties": [
      "Hakken (Chop)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Welcoming resort. Controleer daarna tijd en weer voordat je voor Absol wacht."
  },
  {
    "number": 128,
    "name": "Piplup",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bevochtigd geel hoog gras (Hydrated Yellow Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bevochtigd geel hoog gras (Hydrated Yellow Tall Grass): Geel hoog gras (Yellow Tall Grass) ×4; Water (Water) ×2",
    "specialties": [
      "Water geven (Water)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Prinplup",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Hydrated yellow tall grass. Controleer daarna tijd en weer voordat je voor Piplup wacht."
  },
  {
    "number": 129,
    "name": "Prinplup",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Watermolenplek (Waterwheel Spot) / Bevochtigd geel hoog gras (Hydrated Yellow Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Watermolenplek (Waterwheel Spot): Watermolen (Waterwheel) ×1; Water (Water) ×2; Waterval (Waterfall) ×1 OF Bevochtigd geel hoog gras (Hydrated Yellow Tall Grass): Geel hoog gras (Yellow Tall Grass) ×4; Water (Water) ×2",
    "specialties": [
      "Water geven (Water)",
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Piplup",
    "evolvesInto": "Empoleon",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Hydrated yellow tall grass. Controleer daarna tijd en weer voordat je voor Prinplup wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Regen (Rain)",
    "habitat": "Serveerkar aan tafel (Tableside Delivery Cart) / Watermolenplek (Waterwheel Spot)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Serveerkar aan tafel (Tableside Delivery Cart): Chique stoel (Chic Chair) ×2; Chique tafel (Chic Table) ×1; Kleine vaas (Small Vase) ×1; Duwwagen (Push Cart) ×1; Eten op bord (Plated Food) ×1 OF Watermolenplek (Waterwheel Spot): Watermolen (Waterwheel) ×1; Water (Water) ×2; Waterval (Waterfall) ×1",
    "specialties": [
      "Water geven (Water)",
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Prinplup",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Tableside delivery cart. Controleer daarna tijd en weer voordat je voor Empoleon wacht."
  },
  {
    "number": 131,
    "name": "Audino",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Werken achter de kassa (Working the Register)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Werken achter de kassa (Working the Register): Tafel, willekeurig (Table (any)) ×2; Kassa (Cash Register) ×1",
    "specialties": [
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Working the register. Controleer daarna tijd en weer voordat je voor Audino wacht."
  },
  {
    "number": 132,
    "name": "Trubbish",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Afvalverzamelplek (Trash Collection Site)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Afvalverzamelplek (Trash Collection Site): Afvalbak, willekeurig (Waste Bin (any)) ×1; Bord, willekeurig (Sign (any)) ×1; Vuilniszakken (Garbage Bags) ×1",
    "specialties": [
      "Recyclen (Recycle)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Garbodor",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Trash collection site. Controleer daarna tijd en weer voordat je voor Trubbish wacht."
  },
  {
    "number": 133,
    "name": "Garbodor",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Afvalverzamelplek (Trash Collection Site)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Afvalverzamelplek (Trash Collection Site): Afvalbak, willekeurig (Waste Bin (any)) ×1; Bord, willekeurig (Sign (any)) ×1; Vuilniszakken (Garbage Bags) ×1",
    "specialties": [
      "Recyclen (Recycle)",
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "Trubbish",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Trash collection site. Controleer daarna tijd en weer voordat je voor Garbodor wacht."
  },
  {
    "number": 134,
    "name": "Zorua",
    "type": [
      "Dark"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Luchtig bloemenbed (Breezy Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Luchtig bloemenbed (Breezy Flower Bed): Kustbloemen (Seashore Flowers) ×4",
    "specialties": [
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Zoroark",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Breezy flower bed. Controleer daarna tijd en weer voordat je voor Zorua wacht."
  },
  {
    "number": 135,
    "name": "Zoroark",
    "type": [
      "Dark"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Verrassing in de winkel (Surprise in Store) / Luchtig bloemenbed (Breezy Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Verrassing in de winkel (Surprise in Store): Ballonnen (Balloons) ×2; Boo-in-the-Box (Boo-in-the-Box) ×1 OF Luchtig bloemenbed (Breezy Flower Bed): Kustbloemen (Seashore Flowers) ×4",
    "specialties": [
      "Ruilen (Trade)",
      "Hakken (Chop)"
    ],
    "evolvesFrom": "Zorua",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Breezy flower bed. Controleer daarna tijd en weer voordat je voor Zoroark wacht."
  },
  {
    "number": 136,
    "name": "Minccino",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Kleedruimte (Changing Area) / Privé make-uptafel (Private Makeup Stand)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Kleedruimte (Changing Area): Kast, willekeurig (Closet (any)) ×1; Grote spiegel (Mirror (large)) ×1 OF Privé make-uptafel (Private Makeup Stand): Scheidingswand, willekeurig (Partition (any)) ×2; Kast, willekeurig (Closet (any)) ×1; Ladekast, willekeurig (Dresser (any)) ×1",
    "specialties": [
      "Verzamelen (Gather)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Cinccino",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Changing area. Controleer daarna tijd en weer voordat je voor Minccino wacht."
  },
  {
    "number": 137,
    "name": "Cinccino",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Privé make-uptafel (Private Makeup Stand)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Privé make-uptafel (Private Makeup Stand): Scheidingswand, willekeurig (Partition (any)) ×2; Kast, willekeurig (Closet (any)) ×1; Ladekast, willekeurig (Dresser (any)) ×1",
    "specialties": [
      "Verzamelen (Gather)",
      "Recyclen (Recycle)"
    ],
    "evolvesFrom": "Minccino",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Private makeup stand. Controleer daarna tijd en weer voordat je voor Cinccino wacht."
  },
  {
    "number": 138,
    "name": "Grubbin",
    "type": [
      "Bug"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Geel hoog gras (Yellow Tall Grass) / Pauzeplek bij automaat (Vending Machine Break Area)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Geel hoog gras (Yellow Tall Grass): Geel hoog gras (Yellow Tall Grass) ×4 OF Pauzeplek bij automaat (Vending Machine Break Area): Automaat (Vending Machine) ×1; Brede zitplaats (Seat (wide)) ×1",
    "specialties": [
      "Hakken (Chop)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Charjabug",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Yellow tall grass. Controleer daarna tijd en weer voordat je voor Grubbin wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Pauzeplek bij automaat (Vending Machine Break Area)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Pauzeplek bij automaat (Vending Machine Break Area): Automaat (Vending Machine) ×1; Brede zitplaats (Seat (wide)) ×1",
    "specialties": [
      "Energie opwekken (Generate)",
      "Hakken (Chop)"
    ],
    "evolvesFrom": "Grubbin",
    "evolvesInto": "Vikavolt",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Vending machine break area. Controleer daarna tijd en weer voordat je voor Charjabug wacht."
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
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bloemenbed in boomschaduw (Tree-shaded Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bloemenbed in boomschaduw (Tree-shaded Flower Bed): Bessenboom, willekeurig (Berry Tree (any)) ×1; Wilde bloemen (Wildflowers) ×4; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Energie opwekken (Generate)",
      "Hakken (Chop)"
    ],
    "evolvesFrom": "Charjabug",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Tree-shaded flower bed. Controleer daarna tijd en weer voordat je voor Vikavolt wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Pikachu-plek (Pikachu Space)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Pikachu-plek (Pikachu Space): Pikachu-bank (Pikachu Sofa) ×1; Pikachu-pop (Pikachu Doll) ×1",
    "specialties": [
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Pikachu space. Controleer daarna tijd en weer voordat je voor Mimikyu wacht."
  },
  {
    "number": 142,
    "name": "Pawmi",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Luchtig bloemenbed (Breezy Flower Bed) / Verleidelijk restaurant (Tantalizing Restaurant)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Luchtig bloemenbed (Breezy Flower Bed): Kustbloemen (Seashore Flowers) ×4 OF Verleidelijk restaurant (Tantalizing Restaurant): Zitplaats, willekeurig (Seat (any)) ×1; Menubord (Menu Board) ×1; Tafel, willekeurig (Table (any)) ×1; Eten op bord (Plated Food) ×1",
    "specialties": [
      "Energie opwekken (Generate)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Pawmo",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Breezy flower bed. Controleer daarna tijd en weer voordat je voor Pawmi wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Verleidelijk restaurant (Tantalizing Restaurant) / Caféplek (Cafe Space)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Verleidelijk restaurant (Tantalizing Restaurant): Zitplaats, willekeurig (Seat (any)) ×1; Menubord (Menu Board) ×1; Tafel, willekeurig (Table (any)) ×1; Eten op bord (Plated Food) ×1 OF Caféplek (Cafe Space): Zitplaats, willekeurig (Seat (any)) ×1; Potplant, willekeurig (Potted Plant (any)) ×1; Balie (Counter) ×2; Mok (Mug) ×1; Menubord (Menu Board) ×1",
    "specialties": [
      "Energie opwekken (Generate)",
      "Verpletteren (Crush)"
    ],
    "evolvesFrom": "Pawmi",
    "evolvesInto": "Pawmot",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Tantalizing restaurant. Controleer daarna tijd en weer voordat je voor Pawmo wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Caféplek (Cafe Space)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Caféplek (Cafe Space): Zitplaats, willekeurig (Seat (any)) ×1; Potplant, willekeurig (Potted Plant (any)) ×1; Balie (Counter) ×2; Mok (Mug) ×1; Menubord (Menu Board) ×1",
    "specialties": [
      "Energie opwekken (Generate)",
      "Verpletteren (Crush)"
    ],
    "evolvesFrom": "Pawmo",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Café space. Controleer daarna tijd en weer voordat je voor Pawmot wacht."
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
    "location": "Somber strand (Bleak Beach) / Verdorde woestenij (Withered Wastelands) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Strandset (Beach Set)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Strandset (Beach Set): Strandstoel (Beach Chair) ×1; Strandparasol (Beach Parasol) ×1; Bijzettafel (Side Table) ×1",
    "specialties": [
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Bleak Beach en maak eerst Beach Set. Controleer daarna tijd en weer voordat je voor Tatsugiri wacht."
  },
  {
    "number": 146,
    "name": "Ekans",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bevochtigd sierlijk bloemenbed (Hydrated Graceful Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bevochtigd sierlijk bloemenbed (Hydrated Graceful Flower Bed): Bergbloemen (Mountain Flowers) ×4; Water (Water) ×2",
    "specialties": [
      "Zoeken (Search)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Arbok",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Hydrated graceful flower bed. Controleer daarna tijd en weer voordat je voor Ekans wacht."
  },
  {
    "number": 147,
    "name": "Arbok",
    "type": [
      "Poison"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bevochtigd sierlijk bloemenbed (Hydrated Graceful Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bevochtigd sierlijk bloemenbed (Hydrated Graceful Flower Bed): Bergbloemen (Mountain Flowers) ×4; Water (Water) ×2",
    "specialties": [
      "Zoeken (Search)"
    ],
    "evolvesFrom": "Ekans",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Hydrated graceful flower bed. Controleer daarna tijd en weer voordat je voor Arbok wacht."
  },
  {
    "number": 148,
    "name": "Cleffa",
    "type": [
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Sierlijk bloemenbed (Graceful Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Sierlijk bloemenbed (Graceful Flower Bed): Bergbloemen (Mountain Flowers) ×4",
    "specialties": [
      "Enthousiasmeren (Hype)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Clefairy",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Graceful flower bed. Controleer daarna tijd en weer voordat je voor Cleffa wacht."
  },
  {
    "number": 149,
    "name": "Clefairy",
    "type": [
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bronzen monument (Bronze Landmark) / Sierlijk bloemenbed (Graceful Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bronzen monument (Bronze Landmark): Haag, willekeurig (Hedge (any)) ×4; Maanlichtdans-standbeeld (Moonlight Dance Statue) ×1; Sign (Sign) ×1 OF Sierlijk bloemenbed (Graceful Flower Bed): Bergbloemen (Mountain Flowers) ×4",
    "specialties": [
      "Enthousiasmeren (Hype)"
    ],
    "evolvesFrom": "Cleffa",
    "evolvesInto": "Clefable",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Graceful flower bed. Controleer daarna tijd en weer voordat je voor Clefairy wacht."
  },
  {
    "number": 150,
    "name": "Clefable",
    "type": [
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bronzen monument (Bronze Landmark) / Sierlijk bloemenbed (Graceful Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bronzen monument (Bronze Landmark): Haag, willekeurig (Hedge (any)) ×4; Maanlichtdans-standbeeld (Moonlight Dance Statue) ×1; Sign (Sign) ×1 OF Sierlijk bloemenbed (Graceful Flower Bed): Bergbloemen (Mountain Flowers) ×4",
    "specialties": [
      "Enthousiasmeren (Hype)",
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Clefairy",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Graceful flower bed. Controleer daarna tijd en weer voordat je voor Clefable wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Boomstronkpodium in bloementuin (Flower Garden Stump Stage)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Boomstronkpodium in bloementuin (Flower Garden Stump Stage): Bergbloemen (Mountain Flowers) ×4; Boomstronk, willekeurig (Tree Stump (any)) ×1; Paddenstoellamp (Mushroom Lamp) ×2",
    "specialties": [
      "Enthousiasmeren (Hype)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Jigglypuff",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Flower garden stump stage. Controleer daarna tijd en weer voordat je voor Igglybuff wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Recitalpodium (Recital Stage) / Boomstronkpodium in bloementuin (Flower Garden Stump Stage)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Recitalpodium (Recital Stage): Luidspreker (Speaker) ×2; Klein podium (Small Stage) ×1; Staande microfoon (Standing Mic) ×1 OF Boomstronkpodium in bloementuin (Flower Garden Stump Stage): Bergbloemen (Mountain Flowers) ×4; Boomstronk, willekeurig (Tree Stump (any)) ×1; Paddenstoellamp (Mushroom Lamp) ×2",
    "specialties": [
      "Enthousiasmeren (Hype)"
    ],
    "evolvesFrom": "Igglybuff",
    "evolvesInto": "Wigglytuff",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Flower garden stump stage. Controleer daarna tijd en weer voordat je voor Jigglypuff wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Recitalpodium (Recital Stage)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Recitalpodium (Recital Stage): Luidspreker (Speaker) ×2; Klein podium (Small Stage) ×1; Staande microfoon (Standing Mic) ×1",
    "specialties": [
      "Enthousiasmeren (Hype)",
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Jigglypuff",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Recital stage. Controleer daarna tijd en weer voordat je voor Wigglytuff wacht."
  },
  {
    "number": 154,
    "name": "Diglett",
    "type": [
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Snackplek bij containers (Container Snacking) / Rood hoog gras in boomschaduw (Tree-shaded Red Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Snackplek bij containers (Container Snacking): Vat (Barrel) ×1; Houten krat (Wooden Crate) ×1; Lantaarn (Lantern) ×1; Eten op bord (Plated Food) ×1 OF Rood hoog gras in boomschaduw (Tree-shaded Red Tall Grass): Grote boom, willekeurig (Large Tree (any)) ×1; Rood hoog gras (Red Tall Grass) ×4",
    "specialties": [
      "Enthousiasmeren (Hype)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Dugtrio",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Tree-shaded red tall grass. Controleer daarna tijd en weer voordat je voor Diglett wacht."
  },
  {
    "number": 155,
    "name": "Dugtrio",
    "type": [
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Huisfeest (House Party) / Rood hoog gras in boomschaduw (Tree-shaded Red Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Huisfeest (House Party): Eetbalie (Food Counter) ×1; Papieren feestbekers (Paper Party Cups) ×1; Eten op bord (Plated Food) ×1 OF Rood hoog gras in boomschaduw (Tree-shaded Red Tall Grass): Grote boom, willekeurig (Large Tree (any)) ×1; Rood hoog gras (Red Tall Grass) ×4",
    "specialties": [
      "Enthousiasmeren (Hype)",
      "Verpletteren (Crush)"
    ],
    "evolvesFrom": "Diglett",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Tree-shaded red tall grass. Controleer daarna tijd en weer voordat je voor Dugtrio wacht."
  },
  {
    "number": 156,
    "name": "Machop",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Hoog gras in rotsschaduw (Boulder-shaded Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Hoog gras in rotsschaduw (Boulder-shaded Tall Grass): Hoog gras (Tall Grass) ×4; Grote rots (Large Boulder) ×1; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Bouwen (Build)",
      "Verzamelen (Gather)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Machoke",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Boulder-shaded Tall Grass. Controleer daarna tijd en weer voordat je voor Machop wacht."
  },
  {
    "number": 157,
    "name": "Machoke",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Trainingsveld met gras (Grassy Training Field) / Boksen op het ritme (Box to the Rhythm)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Trainingsveld met gras (Grassy Training Field): Zandzakken (Sandbags) ×2; Rood hoog gras (Red Tall Grass) ×4 OF Boksen op het ritme (Box to the Rhythm): Bokszak (Punching Bag) ×1; Tafel, willekeurig (Table (any)) ×1; Cd-speler (CD Player) ×1",
    "specialties": [
      "Bouwen (Build)",
      "Verzamelen (Gather)"
    ],
    "evolvesFrom": "Machop",
    "evolvesInto": "Machamp",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Grassy training field. Controleer daarna tijd en weer voordat je voor Machoke wacht."
  },
  {
    "number": 158,
    "name": "Machamp",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Rinkelende ijzerconstructie (Clink-clang Iron Construction) / Trainingsveld met gras (Grassy Training Field)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Rinkelende ijzerconstructie (Clink-clang Iron Construction): IJzeren balk of kolom (Iron beam or column) ×3; Kruiwagen (Wheelbarrow) ×1; Zandzakken (Sandbags) ×1; Graafgereedschap (Excavation Tools) ×1 OF Trainingsveld met gras (Grassy Training Field): Zandzakken (Sandbags) ×2; Rood hoog gras (Red Tall Grass) ×4",
    "specialties": [
      "Bouwen (Build)",
      "Verzamelen (Gather)"
    ],
    "evolvesFrom": "Machoke",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Grassy training field. Controleer daarna tijd en weer voordat je voor Machamp wacht."
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
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Hoog gras (Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Hoog gras (Tall Grass): Hoog gras (Tall Grass) ×4; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Verpletteren (Crush)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Graveler",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Tall Grass. Controleer daarna tijd en weer voordat je voor Geodude wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bemoste rots (Mossy Boulder)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bemoste rots (Mossy Boulder): Mos (Moss) ×4; Bemoste rots (Mossy Boulder) ×1",
    "specialties": [
      "Verpletteren (Crush)"
    ],
    "evolvesFrom": "Geodude",
    "evolvesInto": "Golem",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Mossy boulder. Controleer daarna tijd en weer voordat je voor Graveler wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bemoste rots (Mossy Boulder)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bemoste rots (Mossy Boulder): Mos (Moss) ×4; Bemoste rots (Mossy Boulder) ×1",
    "specialties": [
      "Verpletteren (Crush)",
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Graveler",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Mossy boulder. Controleer daarna tijd en weer voordat je voor Golem wacht."
  },
  {
    "number": 162,
    "name": "Magby",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Mooi bloemenbed (Pretty Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Mooi bloemenbed (Pretty Flower Bed): Wilde bloemen (Wildflowers) ×4; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Branden (Burn)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Magmar",
    "evolutionMethod": "",
    "tip": "begin in Withered Wastelands en maak eerst Pretty flower bed. Controleer daarna tijd en weer voordat je voor Magby wacht."
  },
  {
    "number": 163,
    "name": "Magmar",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Graven en stoken (Digging and Burning)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Graven en stoken (Digging and Burning): Kruiwagen (Wheelbarrow) ×1; Smeltoven (Smelting Furnace) ×1; Graafgereedschap (Excavation Tools) ×1",
    "specialties": [
      "Branden (Burn)"
    ],
    "evolvesFrom": "Magby",
    "evolvesInto": "Magmortar",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Digging and burning. Controleer daarna tijd en weer voordat je voor Magmar wacht."
  },
  {
    "number": 164,
    "name": "Magmortar",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Minikeuken (Mini Kitchen)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Minikeuken (Mini Kitchen): Keukentafel (Kitchen Table) ×1; Kookfornuis (Cooking Stove) ×1; Koekenpan (Frying Pan) ×1; Moderne gootsteen (Modern Sink) ×1",
    "specialties": [
      "Branden (Burn)",
      "Verpletteren (Crush)"
    ],
    "evolvesFrom": "Magmar",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Mini kitchen. Controleer daarna tijd en weer voordat je voor Magmortar wacht."
  },
  {
    "number": 165,
    "name": "Bonsly",
    "type": [
      "Rock"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Rood hoog gras in boomschaduw (Tree-shaded Red Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Rood hoog gras in boomschaduw (Tree-shaded Red Tall Grass): Grote boom, willekeurig (Large Tree (any)) ×1; Rood hoog gras (Red Tall Grass) ×4",
    "specialties": [
      "Bulldozeren (Bulldoze)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Sudowoodo",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Tree-shaded red tall grass. Controleer daarna tijd en weer voordat je voor Bonsly wacht."
  },
  {
    "number": 166,
    "name": "Sudowoodo",
    "type": [
      "Rock"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Huisfeest (House Party) / Rood hoog gras in boomschaduw (Tree-shaded Red Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Huisfeest (House Party): Eetbalie (Food Counter) ×1; Papieren feestbekers (Paper Party Cups) ×1; Eten op bord (Plated Food) ×1 OF Rood hoog gras in boomschaduw (Tree-shaded Red Tall Grass): Grote boom, willekeurig (Large Tree (any)) ×1; Rood hoog gras (Red Tall Grass) ×4",
    "specialties": [
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Bonsly",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Tree-shaded red tall grass. Controleer daarna tijd en weer voordat je voor Sudowoodo wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Sierlijk bloemenbed in boomschaduw (Tree-shaded Graceful Flower Bed) / Verhoogd rood hoog gras (Elevated Red Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Sierlijk bloemenbed in boomschaduw (Tree-shaded Graceful Flower Bed): Bergbloemen (Mountain Flowers) ×4; Puntboom (Pointy Tree) ×1 OF Verhoogd rood hoog gras (Elevated Red Tall Grass): Rood hoog gras (Red Tall Grass) ×4; Hoge locatie (High-up Location) ×1",
    "specialties": [
      "Ruilen (Trade)",
      "Vliegen (Fly)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Honchkrow",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Elevated red tall grass. Controleer daarna tijd en weer voordat je voor Murkrow wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Verhoogd rood hoog gras (Elevated Red Tall Grass) / Vogelrecital (Chirping Recital)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Verhoogd rood hoog gras (Elevated Red Tall Grass): Rood hoog gras (Red Tall Grass) ×4; Hoge locatie (High-up Location) ×1 OF Vogelrecital (Chirping Recital): Zitstok (Perch) ×1; Staande microfoon (Standing Mic) ×1",
    "specialties": [
      "Ruilen (Trade)",
      "Vliegen (Fly)"
    ],
    "evolvesFrom": "Murkrow",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Chirping recital. Controleer daarna tijd en weer voordat je voor Honchkrow wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bemoste rustplek (Mossy Rest Spot)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bemoste rustplek (Mossy Rest Spot): Mos (Moss) ×4",
    "specialties": [
      "Verpletteren (Crush)",
      "Bulldozeren (Bulldoze)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Pupitar",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Mossy rest spot. Controleer daarna tijd en weer voordat je voor Larvitar wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Roze hoog gras in boomschaduw (Tree-shaded Pink Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Roze hoog gras in boomschaduw (Tree-shaded Pink Tall Grass): Grote boom, willekeurig (Large Tree (any)) ×1; Roze hoog gras (Pink Tall Grass) ×4",
    "specialties": [
      "Verpletteren (Crush)",
      "Bulldozeren (Bulldoze)"
    ],
    "evolvesFrom": "Larvitar",
    "evolvesInto": "Tyranitar",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Tree-shaded pink tall grass. Controleer daarna tijd en weer voordat je voor Pupitar wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Werken in de aarde (Toil in the Soil) / Bemoste rustplek (Mossy Rest Spot)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Werken in de aarde (Toil in the Soil): Groenteveld, willekeurig (Vegetable Field (any)) ×4; Kruiwagen (Wheelbarrow) ×1 OF Bemoste rustplek (Mossy Rest Spot): Mos (Moss) ×4",
    "specialties": [
      "Verpletteren (Crush)",
      "Bulldozeren (Bulldoze)"
    ],
    "evolvesFrom": "Pupitar",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Toil in the soil. Controleer daarna tijd en weer voordat je voor Tyranitar wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Visplek bij warmwaterbron (Hot-spring Fishing Spot) / Opbeurend kroos (Uplifting Duckweed) / Bevochtigd rood hoog gras (Hydrated Red Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Visplek bij warmwaterbron (Hot-spring Fishing Spot): Hengel (Fishing Rod) ×1; Zitplaats, willekeurig (Seat (any)) ×1; Warmwaterbronwater (Hot-spring Water) ×1 OF Opbeurend kroos (Uplifting Duckweed): Kroos (Duckweed) ×4; Water (Water) ×2 OF Bevochtigd rood hoog gras (Hydrated Red Tall Grass): Rood hoog gras (Red Tall Grass) ×4; Water (Water) ×2",
    "specialties": [
      "Water geven (Water)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Lombre",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Hydrated red tall grass. Controleer daarna tijd en weer voordat je voor Lotad wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Visplek bij warmwaterbron (Hot-spring Fishing Spot) / Bevochtigd rood hoog gras (Hydrated Red Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Visplek bij warmwaterbron (Hot-spring Fishing Spot): Hengel (Fishing Rod) ×1; Zitplaats, willekeurig (Seat (any)) ×1; Warmwaterbronwater (Hot-spring Water) ×1 OF Bevochtigd rood hoog gras (Hydrated Red Tall Grass): Rood hoog gras (Red Tall Grass) ×4; Water (Water) ×2",
    "specialties": [
      "Water geven (Water)"
    ],
    "evolvesFrom": "Lotad",
    "evolvesInto": "Ludicolo",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Hydrated red tall grass. Controleer daarna tijd en weer voordat je voor Lombre wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Opbeurend kroos (Uplifting Duckweed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Opbeurend kroos (Uplifting Duckweed): Kroos (Duckweed) ×4; Water (Water) ×2",
    "specialties": [
      "Water geven (Water)",
      "Enthousiasmeren (Hype)"
    ],
    "evolvesFrom": "Lombre",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Uplifting duckweed. Controleer daarna tijd en weer voordat je voor Ludicolo wacht."
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
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Werken achter de kassa (Working the Register)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Werken achter de kassa (Working the Register): Tafel, willekeurig (Table (any)) ×2; Kassa (Cash Register) ×1; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Ruilen (Trade)",
      "Bouwen (Build)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Working the register. Controleer daarna tijd en weer voordat je voor Mawile wacht."
  },
  {
    "number": 176,
    "name": "Torkoal",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bemoste warmwaterbron (Mossy Hot Spring)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bemoste warmwaterbron (Mossy Hot Spring): Mos (Moss) ×4; Warmwaterbronwater (Hot-spring Water) ×2",
    "specialties": [
      "Branden (Burn)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Mossy hot spring. Controleer daarna tijd en weer voordat je voor Torkoal wacht."
  },
  {
    "number": 177,
    "name": "Kricketot",
    "type": [
      "Bug"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Muziek en tijdschriften (Music and Magazines) / Rood hoog gras (Red Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Muziek en tijdschriften (Music and Magazines): Cd-speler (CD Player) ×1; Cd-rek (CD Rack) ×1; Tijdschriftenrek (Magazine Rack) ×1 OF Rood hoog gras (Red Tall Grass): Rood hoog gras (Red Tall Grass) ×4",
    "specialties": [
      "Enthousiasmeren (Hype)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Kricketune",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Red tall grass. Controleer daarna tijd en weer voordat je voor Kricketot wacht."
  },
  {
    "number": 178,
    "name": "Kricketune",
    "type": [
      "Bug"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Muziek en tijdschriften (Music and Magazines) / Rood hoog gras (Red Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Muziek en tijdschriften (Music and Magazines): Cd-speler (CD Player) ×1; Cd-rek (CD Rack) ×1; Tijdschriftenrek (Magazine Rack) ×1 OF Rood hoog gras (Red Tall Grass): Rood hoog gras (Red Tall Grass) ×4",
    "specialties": [
      "Enthousiasmeren (Hype)"
    ],
    "evolvesFrom": "Kricketot",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Music and magazines. Controleer daarna tijd en weer voordat je voor Kricketune wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Niet gespecificeerd (Not specified) | Weer (Weather): Niet gespecificeerd (Not specified)",
    "habitat": "Verhoogd rood hoog gras (Elevated Red Tall Grass) / Vogelrecital (Chirping Recital)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Verhoogd rood hoog gras (Elevated Red Tall Grass): Rood hoog gras (Red Tall Grass) ×4; Hoge locatie (High-up Location) ×1 OF Vogelrecital (Chirping Recital): Zitstok (Perch) ×1; Staande microfoon (Standing Mic) ×1",
    "specialties": [
      "Enthousiasmeren (Hype)",
      "Vliegen (Fly)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Elevated red tall grass. Controleer daarna tijd en weer voordat je voor Chatot wacht."
  },
  {
    "number": 180,
    "name": "Riolu",
    "type": [
      "Fighting"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Boksen op het ritme (Box to the Rhythm) / Rood hoog gras (Red Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Boksen op het ritme (Box to the Rhythm): Bokszak (Punching Bag) ×1; Tafel, willekeurig (Table (any)) ×1; Cd-speler (CD Player) ×1 OF Rood hoog gras (Red Tall Grass): Rood hoog gras (Red Tall Grass) ×4",
    "specialties": [
      "Bouwen (Build)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Lucario",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Red tall grass. Controleer daarna tijd en weer voordat je voor Riolu wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Boksen op het ritme (Box to the Rhythm)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Boksen op het ritme (Box to the Rhythm): Bokszak (Punching Bag) ×1; Tafel, willekeurig (Table (any)) ×1; Cd-speler (CD Player) ×1",
    "specialties": [
      "Bouwen (Build)"
    ],
    "evolvesFrom": "Riolu",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Box to the rhythm. Controleer daarna tijd en weer voordat je voor Lucario wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Muziek en tijdschriften (Music and Magazines)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Muziek en tijdschriften (Music and Magazines): Cd-speler (CD Player) ×1; Cd-rek (CD Rack) ×1; Tijdschriftenrek (Magazine Rack) ×1",
    "specialties": [
      "Muziek draaien (DJ)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Music and magazines. Controleer daarna tijd en weer voordat je voor Stereo Rotom wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Sierlijk bloemenbed in boomschaduw (Tree-shaded Graceful Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Sierlijk bloemenbed in boomschaduw (Tree-shaded Graceful Flower Bed): Bergbloemen (Mountain Flowers) ×4; Puntboom (Pointy Tree) ×1",
    "specialties": [
      "Branden (Burn)",
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Volcarona",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Tree-shaded graceful flower bed. Controleer daarna tijd en weer voordat je voor Larvesta wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Gloeiend hete lava (Piping-hot Lava) / Sierlijk bloemenbed in boomschaduw (Tree-shaded Graceful Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Gloeiend hete lava (Piping-hot Lava): Gesmolten rots (Molten Rock) ×1; Lava (Lava) ×2 OF Sierlijk bloemenbed in boomschaduw (Tree-shaded Graceful Flower Bed): Bergbloemen (Mountain Flowers) ×4; Puntboom (Pointy Tree) ×1",
    "specialties": [
      "Branden (Burn)",
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "Larvesta",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Tree-shaded graceful flower bed. Controleer daarna tijd en weer voordat je voor Volcarona wacht."
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
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Vers groenteveld (Fresh Veggie Field)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Vers groenteveld (Fresh Veggie Field): Groenteveld, willekeurig (Vegetable Field (any)) ×8; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Groeien (Grow)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Dartrix",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Fresh Veggie Field. Controleer daarna tijd en weer voordat je voor Rowlet wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Rotsachtig hoog gras in de schaduw van een puntboom (Pointy Tree-shaded Rocky Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Rotsachtig hoog gras in de schaduw van een puntboom (Pointy Tree-shaded Rocky Tall Grass): Puntboom (Pointy Tree) ×1; Rood hoog gras (Red Tall Grass) ×4; Grote rots (Large Boulder) ×1",
    "specialties": [
      "Groeien (Grow)",
      "Hakken (Chop)"
    ],
    "evolvesFrom": "Rowlet",
    "evolvesInto": "Decidueye",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Pointy tree-shaded rocky tall grass. Controleer daarna tijd en weer voordat je voor Dartrix wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Modern wonen (Modern Living) / Rotsachtig hoog gras in de schaduw van een puntboom (Pointy Tree-shaded Rocky Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Modern wonen (Modern Living): Industrieel bed (Industrial Bed) ×1; Industrieel bureau (Industrial Desk) ×1; Industriële stoel (Industrial Chair) ×1 OF Rotsachtig hoog gras in de schaduw van een puntboom (Pointy Tree-shaded Rocky Tall Grass): Puntboom (Pointy Tree) ×1; Rood hoog gras (Red Tall Grass) ×4; Grote rots (Large Boulder) ×1",
    "specialties": [
      "Groeien (Grow)",
      "Hakken (Chop)"
    ],
    "evolvesFrom": "Dartrix",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Pointy tree-shaded rocky tall grass. Controleer daarna tijd en weer voordat je voor Decidueye wacht."
  },
  {
    "number": 188,
    "name": "Scorbunny",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Rood hoog gras (Red Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Rood hoog gras (Red Tall Grass): Rood hoog gras (Red Tall Grass) ×4",
    "specialties": [
      "Branden (Burn)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Raboot",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Red tall grass. Controleer daarna tijd en weer voordat je voor Scorbunny wacht."
  },
  {
    "number": 189,
    "name": "Raboot",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Verfrissende kleedkamer (Refreshing Locker Room) / Openluchtbad (Open-air Bath)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Verfrissende kleedkamer (Refreshing Locker Room): Kantoorkluis (Office Locker) ×2; Potplant, willekeurig (Potted Plant (any)) ×1; Brede zitplaats (Seat (wide)) ×1; Boksspel (Punching Game) ×1 OF Openluchtbad (Open-air Bath): Warmwaterbronuitloop (Hot-spring Spout) ×1; Warmwaterbronwater (Hot-spring Water) ×2",
    "specialties": [
      "Branden (Burn)"
    ],
    "evolvesFrom": "Scorbunny",
    "evolvesInto": "Cinderace",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Open-air bath. Controleer daarna tijd en weer voordat je voor Raboot wacht."
  },
  {
    "number": 190,
    "name": "Cinderace",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Verfrissende kleedkamer (Refreshing Locker Room) / Rood hoog gras (Red Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Verfrissende kleedkamer (Refreshing Locker Room): Kantoorkluis (Office Locker) ×2; Potplant, willekeurig (Potted Plant (any)) ×1; Brede zitplaats (Seat (wide)) ×1; Boksspel (Punching Game) ×1 OF Rood hoog gras (Red Tall Grass): Rood hoog gras (Red Tall Grass) ×4",
    "specialties": [
      "Branden (Burn)",
      "Enthousiasmeren (Hype)"
    ],
    "evolvesFrom": "Raboot",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Red tall grass. Controleer daarna tijd en weer voordat je voor Cinderace wacht."
  },
  {
    "number": 191,
    "name": "Skwovet",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Hoog gras in boomschaduw (Tree-shaded Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Hoog gras in boomschaduw (Tree-shaded Tall Grass): Grote boom, willekeurig (Large Tree (any)) ×1; Hoog gras (Tall Grass) ×4; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Zoeken (Search)",
      "Enthousiasmeren (Hype)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Greedent",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Tree-shaded  tall grass. Controleer daarna tijd en weer voordat je voor Skwovet wacht."
  },
  {
    "number": 192,
    "name": "Greedent",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Keuken van de chef (Chef's Kitchen)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Keuken van de chef (Chef's Kitchen): Kookfornuis (Cooking Stove) ×1; Moderne gootsteen (Modern Sink) ×1; Eenvoudige tafel (Plain Table) ×1; Stijlvolle kookpot (Stylish Cooking Pot) ×1; Snijplank (Cutting Board) ×1; Eten op bord (Plated Food) ×1",
    "specialties": [
      "Feest organiseren (Party)"
    ],
    "evolvesFrom": "Skwovet",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Chef's kitchen. Controleer daarna tijd en weer voordat je voor Greedent wacht."
  },
  {
    "number": 193,
    "name": "Rolycoly",
    "type": [
      "Rock"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Spoorwegovergang (Railroad Crossing)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Spoorwegovergang (Railroad Crossing): Spoor (Railway Track) ×1; Overwegboom (Crossing Gate) ×1",
    "specialties": [
      "Branden (Burn)",
      "Verzamelen (Gather)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Carkol",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Railroad crossing. Controleer daarna tijd en weer voordat je voor Rolycoly wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Spoorwegovergang (Railroad Crossing)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Spoorwegovergang (Railroad Crossing): Spoor (Railway Track) ×1; Overwegboom (Crossing Gate) ×1",
    "specialties": [
      "Branden (Burn)",
      "Verzamelen (Gather)"
    ],
    "evolvesFrom": "Rolycoly",
    "evolvesInto": "Coalossal",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Railroad crossing. Controleer daarna tijd en weer voordat je voor Carkol wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Spoorwegovergang (Railroad Crossing) / Zwaar ijzer (Heavy Iron)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Spoorwegovergang (Railroad Crossing): Spoor (Railway Track) ×1; Overwegboom (Crossing Gate) ×1 OF Zwaar ijzer (Heavy Iron): IJzeren bed (Iron Bed) ×1; IJzeren tafel (Iron Table) ×1; IJzeren stoel (Iron Chair) ×1; Lantaarn (Lantern) ×1",
    "specialties": [
      "Branden (Burn)",
      "Verzamelen (Gather)"
    ],
    "evolvesFrom": "Carkol",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Railroad crossing. Controleer daarna tijd en weer voordat je voor Coalossal wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Lui door fotoalbums bladeren (Lazy Photo-album Scrolling)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Lui door fotoalbums bladeren (Lazy Photo-album Scrolling): Tablet (Tablet) ×1; Papieren feestbekers (Paper Party Cups) ×1",
    "specialties": [
      "Energie opwekken (Generate)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Toxtricity",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Lazy-photo album scrolling. Controleer daarna tijd en weer voordat je voor Toxel wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Amped / Low Key-rockpodium (Amped / Low Key Rock Stage)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Amped / Low Key-rockpodium (Amped / Low Key Rock Stage): Luidspreker (Speaker) ×2; Klein podium (Small Stage) ×1; Staande microfoon (Standing Mic) ×1; Cool Electric Guitar OR Cool Bass Guitar (Cool Electric Guitar OR Cool Bass Guitar) ×1",
    "specialties": [
      "Energie opwekken (Generate)",
      "Enthousiasmeren (Hype)"
    ],
    "evolvesFrom": "Toxel",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Amped rock stage. Controleer daarna tijd en weer voordat je voor Toxtricity wacht."
  },
  {
    "number": 198,
    "name": "Fidough",
    "type": [
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Ochtend (Morning), overdag (Daytime), avond (Evening) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Beste broodbakkerij (Best Bread Bakery) / Sierlijk bloemenbed (Graceful Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Beste broodbakkerij (Best Bread Bakery): Broodoven (Bread Oven) ×1; Balie (Counter) ×2; Eten op bord (Plated Food) ×1 OF Sierlijk bloemenbed (Graceful Flower Bed): Bergbloemen (Mountain Flowers) ×4",
    "specialties": [
      "Zoeken (Search)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Dachsbun",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Graceful flower bed. Controleer daarna tijd en weer voordat je voor Fidough wacht."
  },
  {
    "number": 199,
    "name": "Dachsbun",
    "type": [
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Ochtend (Morning), overdag (Daytime), avond (Evening) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Rotsachtig hoog gras in de schaduw van een puntboom (Pointy Tree-shaded Rocky Tall Grass) / Sierlijk bloemenbed (Graceful Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Rotsachtig hoog gras in de schaduw van een puntboom (Pointy Tree-shaded Rocky Tall Grass): Puntboom (Pointy Tree) ×1; Rood hoog gras (Red Tall Grass) ×4; Grote rots (Large Boulder) ×1 OF Sierlijk bloemenbed (Graceful Flower Bed): Bergbloemen (Mountain Flowers) ×4",
    "specialties": [
      "Zoeken (Search)",
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Fidough",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Graceful flower bed. Controleer daarna tijd en weer voordat je voor Dachsbun wacht."
  },
  {
    "number": 200,
    "name": "Charcadet",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Beste broodbakkerij (Best Bread Bakery)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Beste broodbakkerij (Best Bread Bakery): Broodoven (Bread Oven) ×1; Balie (Counter) ×2; Eten op bord (Plated Food) ×1",
    "specialties": [
      "Branden (Burn)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Armarouge / Ceruledge",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Piping-hot lava. Controleer daarna tijd en weer voordat je voor Charcadet wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Heiligdom van de gunstige ridder (Auspicious Knight's Shrine)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Heiligdom van de gunstige ridder (Auspicious Knight's Shrine): Sokkel / tentoonstellingsstandaard (Pedestal / Exhibition Stand) ×1; Gunstig pantser (Auspicious Armor) ×1; Stapstenen (Stepping Stones) ×2; Vuurplaats (Firepit) ×2",
    "specialties": [
      "Branden (Burn)"
    ],
    "evolvesFrom": "Charcadet",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Auspicious knight's shrine. Controleer daarna tijd en weer voordat je voor Armarouge wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Heiligdom van de kwaadaardige ridder (Malicious Knight's Shrine)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Heiligdom van de kwaadaardige ridder (Malicious Knight's Shrine): Sokkel / tentoonstellingsstandaard (Pedestal / Exhibition Stand) ×1; Kwaadaardig pantser (Malicious Armor) ×1; Stapstenen (Stepping Stones) ×2; Vuurplaats (Firepit) ×2",
    "specialties": [
      "Branden (Burn)"
    ],
    "evolvesFrom": "Charcadet",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Malicious knight's shrine. Controleer daarna tijd en weer voordat je voor Ceruledge wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Griezelige witte rotsen (Creepy White Rocks) / Snackplek bij containers (Container Snacking)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Griezelige witte rotsen (Creepy White Rocks): Stalagmieten (Stalagmites) ×1; Mos (Moss) ×4; Houten krat (Wooden Crate) ×1; Lantaarn (Lantern) ×1 OF Snackplek bij containers (Container Snacking): Vat (Barrel) ×1; Houten krat (Wooden Crate) ×1; Lantaarn (Lantern) ×1; Eten op bord (Plated Food) ×1",
    "specialties": [
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Glimmora",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Creepy white rocks. Controleer daarna tijd en weer voordat je voor Glimmet wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Snackplek bij containers (Container Snacking) / Griezelige witte rotsen (Creepy White Rocks)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Snackplek bij containers (Container Snacking): Vat (Barrel) ×1; Houten krat (Wooden Crate) ×1; Lantaarn (Lantern) ×1; Eten op bord (Plated Food) ×1 OF Griezelige witte rotsen (Creepy White Rocks): Stalagmieten (Stalagmites) ×1; Mos (Moss) ×4; Houten krat (Wooden Crate) ×1; Lantaarn (Lantern) ×1",
    "specialties": [
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "Glimmet",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Creepy white rocks. Controleer daarna tijd en weer voordat je voor Glimmora wacht."
  },
  {
    "number": 205,
    "name": "Gimmighoul",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Minimuseum (Mini Museum)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Minimuseum (Mini Museum): Paal, willekeurig (Post (any)) ×3; Sokkel / tentoonstellingsstandaard (Pedestal / Exhibition Stand) ×1; Groot verloren relikwie (Lost Relic (large)) ×1",
    "specialties": [
      "Verzamelen (Collect)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Gholdengo",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Mini museum. Controleer daarna tijd en weer voordat je voor Gimmighoul wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Absolute luxe (Absolute Luxury)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Absolute luxe (Absolute Luxury): Luxe bed (Luxury Bed) ×1; Luxe bank (Luxury Sofa) ×1; Luxe lamp (Luxury Lamp) ×1; Luxe tafel (Luxury Table) ×1",
    "specialties": [
      "Verzamelen (Collect)"
    ],
    "evolvesFrom": "Gimmighoul",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Absolute luxury. Controleer daarna tijd en weer voordat je voor Gholdengo wacht."
  },
  {
    "number": 207,
    "name": "Vulpix",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Zacht bloemenbed (Fluffy Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Zacht bloemenbed (Fluffy Flower Bed): Skyland-bloemen (Skyland Flowers) ×4",
    "specialties": [
      "Branden (Burn)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Ninetales",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Fluffy flower bed. Controleer daarna tijd en weer voordat je voor Vulpix wacht."
  },
  {
    "number": 208,
    "name": "Ninetales",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Negen vlammen (Nine Flames) / Zacht bloemenbed (Fluffy Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Negen vlammen (Nine Flames): Vuurplaats (Firepit) ×9 OF Zacht bloemenbed (Fluffy Flower Bed): Skyland-bloemen (Skyland Flowers) ×4",
    "specialties": [
      "Branden (Burn)"
    ],
    "evolvesFrom": "Vulpix",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Fluffy flower bed. Controleer daarna tijd en weer voordat je voor Ninetales wacht."
  },
  {
    "number": 209,
    "name": "Poliwag",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Brandschoon (Squeaky Clean)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Brandschoon (Squeaky Clean): Badkuip (Bathtub) ×1; Schoonmaakspullen (Cleaning Supplies) ×1",
    "specialties": [
      "Water geven (Water)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Poliwhirl",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Squeaky clean. Controleer daarna tijd en weer voordat je voor Poliwag wacht."
  },
  {
    "number": 210,
    "name": "Poliwhirl",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bevochtigd zacht bloemenbed (Hydrated Fluffy Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bevochtigd zacht bloemenbed (Hydrated Fluffy Flower Bed): Skyland-bloemen (Skyland Flowers) ×4; Water (Water) ×2",
    "specialties": [
      "Water geven (Water)"
    ],
    "evolvesFrom": "Poliwag",
    "evolvesInto": "Poliwrath / Politoed",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Hydrated fluffy flower bed. Controleer daarna tijd en weer voordat je voor Poliwhirl wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Dojotraining (Dojo Training) / Rioolputinspectie (Sewer-hole Inspection)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Dojotraining (Dojo Training): Hangrol (Hanging Scroll) ×2; Krachtrots (Strength Rock) ×2 OF Rioolputinspectie (Sewer-hole Inspection): IJzeren buizen (Iron Pipes) ×1; Riooldeksel (Sewer-hole Cover) ×1; Graafgereedschap (Excavation Tools) ×1; Verkeerskegel (Traffic Cone) ×1",
    "specialties": [
      "Water geven (Water)",
      "Bouwen (Build)"
    ],
    "evolvesFrom": "Poliwhirl",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Sewer hole inspection. Controleer daarna tijd en weer voordat je voor Poliwrath wacht."
  },
  {
    "number": 212,
    "name": "Politoed",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Harmonieuze warmwaterbron (Harmonious Hot Spring) / Boomstronkpodium in bloementuin (Flower Garden Stump Stage) / Bevochtigd sierlijk bloemenbed (Hydrated Graceful Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Harmonieuze warmwaterbron (Harmonious Hot Spring): Warmwaterbronplek (Hot-spring Spot) ×1; Waterbekken (Water basin) ×12; Warmwaterbronwater (Hot-spring Water) ×2 OF Boomstronkpodium in bloementuin (Flower Garden Stump Stage): Bergbloemen (Mountain Flowers) ×4; Boomstronk, willekeurig (Tree Stump (any)) ×1; Paddenstoellamp (Mushroom Lamp) ×2 OF Bevochtigd sierlijk bloemenbed (Hydrated Graceful Flower Bed): Bergbloemen (Mountain Flowers) ×4; Water (Water) ×2",
    "specialties": [
      "Water geven (Water)",
      "Enthousiasmeren (Hype)"
    ],
    "evolvesFrom": "Poliwhirl",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Hydrated graceful flower bed. Controleer daarna tijd en weer voordat je voor Politoed wacht."
  },
  {
    "number": 213,
    "name": "Abra",
    "type": [
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Tafel van de waarzegger (Fortune-teller's Table) / Opwellende psychische kracht (Surging Psychic Power)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Tafel van de waarzegger (Fortune-teller's Table): Zitplaats, willekeurig (Seat (any)) ×1; Tafel, willekeurig (Table (any)) ×1; Kristallen bol (Crystal Ball) ×1 OF Opwellende psychische kracht (Surging Psychic Power): Eenvoudig kussen (Simple Cushion) ×1; Kristallen bol (Crystal Ball) ×1",
    "specialties": [
      "Teleporteren (Teleport)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Kadabra",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Surging psychic power. Controleer daarna tijd en weer voordat je voor Abra wacht."
  },
  {
    "number": 214,
    "name": "Kadabra",
    "type": [
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Tafel van de waarzegger (Fortune-teller's Table)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Tafel van de waarzegger (Fortune-teller's Table): Zitplaats, willekeurig (Seat (any)) ×1; Tafel, willekeurig (Table (any)) ×1; Kristallen bol (Crystal Ball) ×1",
    "specialties": [
      "Teleporteren (Teleport)"
    ],
    "evolvesFrom": "Abra",
    "evolvesInto": "Alakazam",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Fortune-teller's table. Controleer daarna tijd en weer voordat je voor Kadabra wacht."
  },
  {
    "number": 215,
    "name": "Alakazam",
    "type": [
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Experimenteerruimte (Experiment Space) / Opwellende psychische kracht (Surging Psychic Power)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Experimenteerruimte (Experiment Space): Wetenschappelijk experiment (Science Experiment) ×1; Microscoop (Microscope) ×1; Papieren (Papers) ×1 OF Opwellende psychische kracht (Surging Psychic Power): Eenvoudig kussen (Simple Cushion) ×1; Kristallen bol (Crystal Ball) ×1",
    "specialties": [
      "Teleporteren (Teleport)",
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Kadabra",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Surging psychic power. Controleer daarna tijd en weer voordat je voor Alakazam wacht."
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
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Brandschone wasplek (Spotless Washing Station) / Openbaar leesmateriaal (Public Reading Material)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Brandschone wasplek (Spotless Washing Station): Handdoekenrek (Towel Rack) ×1; Wandspiegel (Wall Mirror) ×1; Wastafel (Sink) ×1 OF Openbaar leesmateriaal (Public Reading Material): Tijdschriftenrek (Magazine Rack) ×1; Krant (Newspaper) ×1",
    "specialties": [
      "Verzamelen (Gather)",
      "Bouwen (Build)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Mr. Mime",
    "evolutionMethod": "",
    "tip": "controleer eerst de habitat- en locatievoorwaarden voor Mime Jr. voordat je materialen uitgeeft."
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
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Brandschone wasplek (Spotless Washing Station)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Brandschone wasplek (Spotless Washing Station): Handdoekenrek (Towel Rack) ×1; Wandspiegel (Wall Mirror) ×1; Wastafel (Sink) ×1",
    "specialties": [
      "Verzamelen (Gather)",
      "Bouwen (Build)"
    ],
    "evolvesFrom": "Mime Jr.",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "controleer eerst de habitat- en locatievoorwaarden voor Mr. Mime voordat je materialen uitgeeft."
  },
  {
    "number": 218,
    "name": "Porygon",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bureau van de onderzoeker (Researcher's Desk)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bureau van de onderzoeker (Researcher's Desk): Tafel, willekeurig (Table (any)) ×2; Computer (Computer) ×1; Wetenschappelijk experiment (Science Experiment) ×1",
    "specialties": [
      "Recyclen (Recycle)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Porygon2",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Researcher's desk. Controleer daarna tijd en weer voordat je voor Porygon wacht."
  },
  {
    "number": 219,
    "name": "Porygon2",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Werkbureau (Work Desk)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Werkbureau (Work Desk): Kantoorbureau (Office Desk) ×1; Mok (Mug) ×1; Laptop (Laptop) ×1; Kantoorstoel (Office Chair) ×1",
    "specialties": [
      "Recyclen (Recycle)"
    ],
    "evolvesFrom": "Porygon",
    "evolvesInto": "Porygon-Z",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Work desk. Controleer daarna tijd en weer voordat je voor Porygon2 wacht."
  },
  {
    "number": 220,
    "name": "Porygon-Z",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Gevechtszone in de speelhoek (Game Corner Battle Zone)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Gevechtszone in de speelhoek (Game Corner Battle Zone): Arcadekast (Arcade Machine) ×2; Zitplaats, willekeurig (Seat (any)) ×2",
    "specialties": [
      "Zeldzaam maken (Rarify)"
    ],
    "evolvesFrom": "Porygon2",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Game Corner battle zone. Controleer daarna tijd en weer voordat je voor Porygon-Z wacht."
  },
  {
    "number": 221,
    "name": "Dratini",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bevochtigd zacht bloemenbed (Hydrated Fluffy Flower Bed) / Eenvoudige badkamer (Simple Bathroom)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bevochtigd zacht bloemenbed (Hydrated Fluffy Flower Bed): Skyland-bloemen (Skyland Flowers) ×4; Water (Water) ×2 OF Eenvoudige badkamer (Simple Bathroom): Douche (Shower) ×1; Badkuip (Bathtub) ×1",
    "specialties": [
      "Water geven (Water)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Dragonair",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Hydrated fluffy flower bed. Controleer daarna tijd en weer voordat je voor Dratini wacht."
  },
  {
    "number": 222,
    "name": "Dragonair",
    "type": [
      "Dragon"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Eenvoudige badkamer (Simple Bathroom) / Bevochtigd zacht bloemenbed (Hydrated Fluffy Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Eenvoudige badkamer (Simple Bathroom): Douche (Shower) ×1; Badkuip (Bathtub) ×1 OF Bevochtigd zacht bloemenbed (Hydrated Fluffy Flower Bed): Skyland-bloemen (Skyland Flowers) ×4; Water (Water) ×2",
    "specialties": [
      "Water geven (Water)"
    ],
    "evolvesFrom": "Dratini",
    "evolvesInto": "Dragonite",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Hydrated fluffy flower bed. Controleer daarna tijd en weer voordat je voor Dragonair wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bootje aan het water (Waterside Dinghy)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bootje aan het water (Waterside Dinghy): Kano (Canoe) ×1; Kroos (Duckweed) ×2; Water (Water) ×2; Hoge locatie (High-up Location) ×1",
    "specialties": [
      "Water geven (Water)",
      "Vliegen (Fly)"
    ],
    "evolvesFrom": "Dragonair",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Waterside dinghy. Controleer daarna tijd en weer voordat je voor Dragonite wacht."
  },
  {
    "number": 224,
    "name": "Cyndaquil",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Geheime basis in betonbuizen (Concrete Pipe Secret Base) / Dutplek bij de open haard (Fireplace Nap Spot)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Geheime basis in betonbuizen (Concrete Pipe Secret Base): Betonbuis (Concrete Pipe) ×2; Tall Grass (any) (Tall Grass (any)) ×4 OF Dutplek bij de open haard (Fireplace Nap Spot): Stenen open haard (Stone Fireplace) ×1; Brede zitplaats (Seat (wide)) ×1",
    "specialties": [
      "Branden (Burn)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Quilava",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Concrete pipe secret base. Controleer daarna tijd en weer voordat je voor Cyndaquil wacht."
  },
  {
    "number": 225,
    "name": "Quilava",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Dutplek bij de open haard (Fireplace Nap Spot) / Geheime basis in betonbuizen (Concrete Pipe Secret Base)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Dutplek bij de open haard (Fireplace Nap Spot): Stenen open haard (Stone Fireplace) ×1; Brede zitplaats (Seat (wide)) ×1 OF Geheime basis in betonbuizen (Concrete Pipe Secret Base): Betonbuis (Concrete Pipe) ×2; Tall Grass (any) (Tall Grass (any)) ×4",
    "specialties": [
      "Branden (Burn)"
    ],
    "evolvesFrom": "Cyndaquil",
    "evolvesInto": "Typhlosion",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Concrete pipe secret base. Controleer daarna tijd en weer voordat je voor Quilava wacht."
  },
  {
    "number": 226,
    "name": "Typhlosion",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Popstijl (Top Pop) / Dutplek bij de open haard (Fireplace Nap Spot)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Popstijl (Top Pop): Popart-bed (Pop Art Bed) ×1; Popart-bank (Pop Art Sofa) ×1; Popart-tafel (Pop Art Table) ×1 OF Dutplek bij de open haard (Fireplace Nap Spot): Stenen open haard (Stone Fireplace) ×1; Brede zitplaats (Seat (wide)) ×1",
    "specialties": [
      "Branden (Burn)",
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Quilava",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Fireplace nap spot. Controleer daarna tijd en weer voordat je voor Typhlosion wacht."
  },
  {
    "number": 227,
    "name": "Misdreavus",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Zacht bloemenbed (Fluffy Flower Bed) / Kantooropslag (Office Storeroom)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Zacht bloemenbed (Fluffy Flower Bed): Skyland-bloemen (Skyland Flowers) ×4 OF Kantooropslag (Office Storeroom): Kantoorplank (Office Shelf) ×1; Opstapje (Step Stool) ×1; Kartonnen dozen (Cardboard Boxes) ×1",
    "specialties": [
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Mismagius",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Fluffy flower bed. Controleer daarna tijd en weer voordat je voor Misdreavus wacht."
  },
  {
    "number": 228,
    "name": "Mismagius",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Thuisbioscoop (Home Theatre) / Kantooropslag (Office Storeroom) / Zacht bloemenbed (Fluffy Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Thuisbioscoop (Home Theatre): Televisie (Television) ×1; Standaard, willekeurig (Stand (any)) ×1; Luidsprekers (Speakers) ×2 OF Kantooropslag (Office Storeroom): Kantoorplank (Office Shelf) ×1; Opstapje (Step Stool) ×1; Kartonnen dozen (Cardboard Boxes) ×1 OF Zacht bloemenbed (Fluffy Flower Bed): Skyland-bloemen (Skyland Flowers) ×4",
    "specialties": [
      "Verzamelen (Gather)",
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Misdreavus",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Fluffy flower bed. Controleer daarna tijd en weer voordat je voor Mismagius wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Zacht bloemenbed in boomschaduw (Tree-shaded Fluffy Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Zacht bloemenbed in boomschaduw (Tree-shaded Fluffy Flower Bed): Grote boom, willekeurig (Large Tree (any)) ×1; Skyland-bloemen (Skyland Flowers) ×4",
    "specialties": [
      "Verzamelen (Gather)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Farigiraf",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Tree-shaded fluffy flower bed. Controleer daarna tijd en weer voordat je voor Girafarig wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Zacht bloemenbed in boomschaduw (Tree-shaded Fluffy Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Zacht bloemenbed in boomschaduw (Tree-shaded Fluffy Flower Bed): Grote boom, willekeurig (Large Tree (any)) ×1; Skyland-bloemen (Skyland Flowers) ×4",
    "specialties": [
      "Verzamelen (Gather)",
      "Zoeken (Search)"
    ],
    "evolvesFrom": "Girafarig",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Tree-shaded fluffy flower bed. Controleer daarna tijd en weer voordat je voor Farigiraf wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Studeerplek (Study Area)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Studeerplek (Study Area): Boekenkast (Bookcase) ×1; Zitplaats, willekeurig (Seat (any)) ×1; Tafel, willekeurig (Table (any)) ×1; Pennenhouder (Pencil Holder) ×1",
    "specialties": [
      "Teleporteren (Teleport)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Kirlia",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Study Area. Controleer daarna tijd en weer voordat je voor Ralts wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Hydraterende make-uptafel (Moisturizing Makeup Stand) / Studeerplek (Study Area)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Hydraterende make-uptafel (Moisturizing Makeup Stand): Ladekast, willekeurig (Dresser (any)) ×1; Zitplaats, willekeurig (Seat (any)) ×1; Luchtbevochtiger (Humidifier) ×1 OF Studeerplek (Study Area): Boekenkast (Bookcase) ×1; Zitplaats, willekeurig (Seat (any)) ×1; Tafel, willekeurig (Table (any)) ×1; Pennenhouder (Pencil Holder) ×1",
    "specialties": [
      "Teleporteren (Teleport)"
    ],
    "evolvesFrom": "Ralts",
    "evolvesInto": "Gardevoir / Gallade",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Study Area. Controleer daarna tijd en weer voordat je voor Kirlia wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Minibibliotheek (Mini Library) / Hydraterende make-uptafel (Moisturizing Makeup Stand)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Minibibliotheek (Mini Library): Boekenkast (Bookcase) ×2; Opstapje (Step Stool) ×1; Tafel, willekeurig (Table (any)) ×1; Verlichting, willekeurig (Lighting (any)) ×1 OF Hydraterende make-uptafel (Moisturizing Makeup Stand): Ladekast, willekeurig (Dresser (any)) ×1; Zitplaats, willekeurig (Seat (any)) ×1; Luchtbevochtiger (Humidifier) ×1",
    "specialties": [
      "Teleporteren (Teleport)",
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Kirlia",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Moisturizing makeup stand. Controleer daarna tijd en weer voordat je voor Gardevoir wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Dojotraining (Dojo Training)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Dojotraining (Dojo Training): Hangrol (Hanging Scroll) ×2; Krachtrots (Strength Rock) ×2",
    "specialties": [
      "Teleporteren (Teleport)",
      "Bouwen (Build)"
    ],
    "evolvesFrom": "Kirlia",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Dojo training. Controleer daarna tijd en weer voordat je voor Gallade wacht."
  },
  {
    "number": 235,
    "name": "Plusle",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Fotogeniek fotobord (Picturesque Photo Cutout Board)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Fotogeniek fotobord (Picturesque Photo Cutout Board): Fotobord (Photo Cutout Board) ×1; Spotlight (Spotlight) ×2; Hoge locatie (High-up Location) ×1",
    "specialties": [
      "Energie opwekken (Generate)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Picturesque photo cutout board. Controleer daarna tijd en weer voordat je voor Plusle wacht."
  },
  {
    "number": 236,
    "name": "Minun",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Fotogeniek fotobord (Picturesque Photo Cutout Board)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Fotogeniek fotobord (Picturesque Photo Cutout Board): Fotobord (Photo Cutout Board) ×1; Spotlight (Spotlight) ×2; Hoge locatie (High-up Location) ×1",
    "specialties": [
      "Energie opwekken (Generate)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Picturesque photo cutout board. Controleer daarna tijd en weer voordat je voor Minun wacht."
  },
  {
    "number": 237,
    "name": "Trapinch",
    "type": [
      "Ground"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Roze hoog gras (Pink Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Roze hoog gras (Pink Tall Grass): Roze hoog gras (Pink Tall Grass) ×4",
    "specialties": [
      "Bulldozeren (Bulldoze)",
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Vibrava",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Pink tall grass. Controleer daarna tijd en weer voordat je voor Trapinch wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Roze hoog gras (Pink Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Roze hoog gras (Pink Tall Grass): Roze hoog gras (Pink Tall Grass) ×4",
    "specialties": [
      "Bulldozeren (Bulldoze)",
      "Vliegen (Fly)"
    ],
    "evolvesFrom": "Trapinch",
    "evolvesInto": "Flygon",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Pink tall grass. Controleer daarna tijd en weer voordat je voor Vibrava wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Roze hoog gras (Pink Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Roze hoog gras (Pink Tall Grass): Roze hoog gras (Pink Tall Grass) ×4",
    "specialties": [
      "Bulldozeren (Bulldoze)",
      "Vliegen (Fly)"
    ],
    "evolvesFrom": "Vibrava",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Pink tall grass. Controleer daarna tijd en weer voordat je voor Flygon wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Roze hoog gras (Pink Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Roze hoog gras (Pink Tall Grass): Roze hoog gras (Pink Tall Grass) ×4",
    "specialties": [
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Altaria",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Pink tall grass. Controleer daarna tijd en weer voordat je voor Swablu wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Vogelliedtuin (Birdsong Garden)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Vogelliedtuin (Birdsong Garden): Stijlvolle haag (Stylish Hedge) ×1; Houten vogelhuisje (Wooden Birdhouse) ×1",
    "specialties": [
      "Opruimen (Litter)",
      "Vliegen (Fly)"
    ],
    "evolvesFrom": "Swablu",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Birdsong garden. Controleer daarna tijd en weer voordat je voor Altaria wacht."
  },
  {
    "number": 242,
    "name": "Duskull",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Roze hoog gras (Pink Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Roze hoog gras (Pink Tall Grass): Roze hoog gras (Pink Tall Grass) ×4",
    "specialties": [
      "Verzamelen (Gather)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Dusclops",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Pink tall grass. Controleer daarna tijd en weer voordat je voor Duskull wacht."
  },
  {
    "number": 243,
    "name": "Dusclops",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Tv bij de afvalplek (Trash Site TV)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Tv bij de afvalplek (Trash Site TV): Vuilniszakken (Garbage Bags) ×2; Televisie (Television) ×1",
    "specialties": [
      "Verzamelen (Gather)"
    ],
    "evolvesFrom": "Duskull",
    "evolvesInto": "Dusknoir",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Trash site TV. Controleer daarna tijd en weer voordat je voor Dusclops wacht."
  },
  {
    "number": 244,
    "name": "Dusknoir",
    "type": [
      "Ghost"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Tv bij de afvalplek (Trash Site TV)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Tv bij de afvalplek (Trash Site TV): Vuilniszakken (Garbage Bags) ×2; Televisie (Television) ×1",
    "specialties": [
      "Verzamelen (Gather)",
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Dusclops",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Trash site TV. Controleer daarna tijd en weer voordat je voor Dusknoir wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Fiets-rustplek (Cycling Rest Stop)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Fiets-rustplek (Cycling Rest Stop): Fiets (Bike) ×1; Automaat (Vending Machine) ×1",
    "specialties": [
      "Recyclen (Recycle)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Metang",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Cycling rest stop. Controleer daarna tijd en weer voordat je voor Beldum wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Assistentenprogramma van de professor (Professor's Apprentice Program)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Assistentenprogramma van de professor (Professor's Apprentice Program): Whiteboard (Whiteboard) ×1; Tafel, willekeurig (Table (any)) ×1; Verwarde kabels (Jumbled Cords) ×1; Laptop (Laptop) ×1",
    "specialties": [
      "Recyclen (Recycle)"
    ],
    "evolvesFrom": "Beldum",
    "evolvesInto": "Metagross",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Professor's apprentice program. Controleer daarna tijd en weer voordat je voor Metang wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Gamersparadijs (Gamer's Paradise)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Gamersparadijs (Gamer's Paradise): Gamingbed (Gaming Bed) ×1; Tafel, willekeurig (Table (any)) ×1; Gaming-pc (Gaming PC) ×1; Gamingkoelkast (Gaming Fridge) ×1; Gamingstoel (Gaming Chair) ×1",
    "specialties": [
      "Recyclen (Recycle)",
      "Verpletteren (Crush)"
    ],
    "evolvesFrom": "Metang",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Gamer's paradise. Controleer daarna tijd en weer voordat je voor Metagross wacht."
  },
  {
    "number": 248,
    "name": "Snivy",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Speelpark (Playland)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Speelpark (Playland): Glijbaan (Slide) ×1; Speelgoed, willekeurig (Toy (any)) ×1",
    "specialties": [
      "Groeien (Grow)",
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Servine",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Playland. Controleer daarna tijd en weer voordat je voor Snivy wacht."
  },
  {
    "number": 249,
    "name": "Servine",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Zacht bloemenbed in boomschaduw (Tree-shaded Fluffy Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Zacht bloemenbed in boomschaduw (Tree-shaded Fluffy Flower Bed): Grote boom, willekeurig (Large Tree (any)) ×1; Skyland-bloemen (Skyland Flowers) ×4",
    "specialties": [
      "Groeien (Grow)",
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "Snivy",
    "evolvesInto": "Serperior",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Tree-shaded fluffy flower bed. Controleer daarna tijd en weer voordat je voor Servine wacht."
  },
  {
    "number": 250,
    "name": "Serperior",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Openbaar leesmateriaal (Public Reading Material) / Zacht bloemenbed in boomschaduw (Tree-shaded Fluffy Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Openbaar leesmateriaal (Public Reading Material): Tijdschriftenrek (Magazine Rack) ×1; Krant (Newspaper) ×1 OF Zacht bloemenbed in boomschaduw (Tree-shaded Fluffy Flower Bed): Grote boom, willekeurig (Large Tree (any)) ×1; Skyland-bloemen (Skyland Flowers) ×4",
    "specialties": [
      "Groeien (Grow)",
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "Servine",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Tree-shaded fluffy flower bed. Controleer daarna tijd en weer voordat je voor Serperior wacht."
  },
  {
    "number": 251,
    "name": "Froakie",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bevochtigd roze hoog gras (Hydrated Pink Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bevochtigd roze hoog gras (Hydrated Pink Tall Grass): Roze hoog gras (Pink Tall Grass) ×4; Water (Water) ×2",
    "specialties": [
      "Water geven (Water)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Frogadier",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Hydrated pink tall grass. Controleer daarna tijd en weer voordat je voor Froakie wacht."
  },
  {
    "number": 252,
    "name": "Frogadier",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Grappenknop (Prank Button) / Bevochtigd roze hoog gras (Hydrated Pink Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Grappenknop (Prank Button): Vloerschakelaar (Floor Switch) ×1; Boo-in-the-Box (Boo-in-the-Box) ×1 OF Bevochtigd roze hoog gras (Hydrated Pink Tall Grass): Roze hoog gras (Pink Tall Grass) ×4; Water (Water) ×2",
    "specialties": [
      "Water geven (Water)"
    ],
    "evolvesFrom": "Froakie",
    "evolvesInto": "Greninja",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Hydrated pink tall grass. Controleer daarna tijd en weer voordat je voor Frogadier wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Grappenknop (Prank Button) / Bevochtigd roze hoog gras (Hydrated Pink Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Grappenknop (Prank Button): Vloerschakelaar (Floor Switch) ×1; Boo-in-the-Box (Boo-in-the-Box) ×1 OF Bevochtigd roze hoog gras (Hydrated Pink Tall Grass): Roze hoog gras (Pink Tall Grass) ×4; Water (Water) ×2",
    "specialties": [
      "Water geven (Water)",
      "Hakken (Chop)"
    ],
    "evolvesFrom": "Frogadier",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Hydrated pink tall grass. Controleer daarna tijd en weer voordat je voor Greninja wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Bandenpark (Tire Park)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Bandenpark (Tire Park): Glijbaan (Slide) ×1; Banden (Tires) ×1; Bandenspeelgoed (Tire Toy) ×2",
    "specialties": [
      "Zoeken (Search)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Tire Park. Controleer daarna tijd en weer voordat je voor Dedenne wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Ritmische woonkamer (Rhythmic Living Room)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Ritmische woonkamer (Rhythmic Living Room): Luidspreker (Speaker) ×2; Muziekmat, willekeurig (Music Mat (any)) ×4; Televisie (Television) ×1",
    "specialties": [
      "Zoeken (Search)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Noivern",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Rhythmic Living room. Controleer daarna tijd en weer voordat je voor Noibat wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Ritmische woonkamer (Rhythmic Living Room)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Ritmische woonkamer (Rhythmic Living Room): Luidspreker (Speaker) ×2; Muziekmat, willekeurig (Music Mat (any)) ×4; Televisie (Television) ×1",
    "specialties": [
      "Zoeken (Search)",
      "Vliegen (Fly)"
    ],
    "evolvesFrom": "Noibat",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Rhythmic Living room. Controleer daarna tijd en weer voordat je voor Noivern wacht."
  },
  {
    "number": 257,
    "name": "Rookidee",
    "type": [
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Zacht bloemenbed (Fluffy Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Zacht bloemenbed (Fluffy Flower Bed): Skyland-bloemen (Skyland Flowers) ×4",
    "specialties": [
      "Hakken (Chop)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Corvisquire",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Fluffy flower bed. Controleer daarna tijd en weer voordat je voor Rookidee wacht."
  },
  {
    "number": 258,
    "name": "Corvisquire",
    "type": [
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Verhoogd roze hoog gras (Elevated Pink Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Verhoogd roze hoog gras (Elevated Pink Tall Grass): Roze hoog gras (Pink Tall Grass) ×4; Hoge locatie (High-up Location) ×1",
    "specialties": [
      "Hakken (Chop)"
    ],
    "evolvesFrom": "Rookidee",
    "evolvesInto": "Corviknight",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Elevated pink tall grass. Controleer daarna tijd en weer voordat je voor Corvisquire wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Rioolputinspectie (Sewer-hole Inspection) / Verhoogd roze hoog gras (Elevated Pink Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Rioolputinspectie (Sewer-hole Inspection): IJzeren buizen (Iron Pipes) ×1; Riooldeksel (Sewer-hole Cover) ×1; Graafgereedschap (Excavation Tools) ×1; Verkeerskegel (Traffic Cone) ×1 OF Verhoogd roze hoog gras (Elevated Pink Tall Grass): Roze hoog gras (Pink Tall Grass) ×4; Hoge locatie (High-up Location) ×1",
    "specialties": [
      "Hakken (Chop)",
      "Vliegen (Fly)"
    ],
    "evolvesFrom": "Corvisquire",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Elevated pink tall grass. Controleer daarna tijd en weer voordat je voor Corviknight wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Roze hoog gras in boomschaduw (Tree-shaded Pink Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Roze hoog gras in boomschaduw (Tree-shaded Pink Tall Grass): Grote boom, willekeurig (Large Tree (any)) ×1; Roze hoog gras (Pink Tall Grass) ×4",
    "specialties": [
      "Verzamelen (Gather)",
      "Zoeken (Search)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Drakloak",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Tree-shaded pink tall grass. Controleer daarna tijd en weer voordat je voor Dreepy wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Kantooropslag (Office Storeroom) / Roze hoog gras in boomschaduw (Tree-shaded Pink Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Kantooropslag (Office Storeroom): Kantoorplank (Office Shelf) ×1; Opstapje (Step Stool) ×1; Kartonnen dozen (Cardboard Boxes) ×1 OF Roze hoog gras in boomschaduw (Tree-shaded Pink Tall Grass): Grote boom, willekeurig (Large Tree (any)) ×1; Roze hoog gras (Pink Tall Grass) ×4",
    "specialties": [
      "Verzamelen (Gather)",
      "Zoeken (Search)"
    ],
    "evolvesFrom": "Dreepy",
    "evolvesInto": "Dragapult",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Tree-shaded pink tall grass. Controleer daarna tijd en weer voordat je voor Drakloak wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Kantooropslag (Office Storeroom)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Kantooropslag (Office Storeroom): Kantoorplank (Office Shelf) ×1; Opstapje (Step Stool) ×1; Kartonnen dozen (Cardboard Boxes) ×1",
    "specialties": [
      "Verzamelen (Gather)",
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Drakloak",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Office storeroom. Controleer daarna tijd en weer voordat je voor Dragapult wacht."
  },
  {
    "number": 263,
    "name": "Sprigatito",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Roze hoog gras in boomschaduw (Tree-shaded Pink Tall Grass) / Verhoorbureau (Interrogation Desk)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Roze hoog gras in boomschaduw (Tree-shaded Pink Tall Grass): Grote boom, willekeurig (Large Tree (any)) ×1; Roze hoog gras (Pink Tall Grass) ×4 OF Verhoorbureau (Interrogation Desk): Arcanine-pop (Arcanine Doll) ×1; Klapstoel (Folding Chair) ×2; Industrieel bureau (Industrial Desk) ×1; Bureaulamp (Desk Light) ×1",
    "specialties": [
      "Groeien (Grow)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Floragato",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Tree-shaded pink tall grass. Controleer daarna tijd en weer voordat je voor Sprigatito wacht."
  },
  {
    "number": 264,
    "name": "Floragato",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Verhoorbureau (Interrogation Desk)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Verhoorbureau (Interrogation Desk): Arcanine-pop (Arcanine Doll) ×1; Klapstoel (Folding Chair) ×2; Industrieel bureau (Industrial Desk) ×1; Bureaulamp (Desk Light) ×1",
    "specialties": [
      "Groeien (Grow)"
    ],
    "evolvesFrom": "Sprigatito",
    "evolvesInto": "Meowscarada",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Interrogation desk. Controleer daarna tijd en weer voordat je voor Floragato wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Spannende verrassingsdoos (Heart-pounding Surprise Box)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Spannende verrassingsdoos (Heart-pounding Surprise Box): Boo-in-the-Box (Boo-in-the-Box) ×1; Spotlight (Spotlight) ×2; Grote trommel (Big Drum) ×1",
    "specialties": [
      "Groeien (Grow)",
      "Enthousiasmeren (Hype)"
    ],
    "evolvesFrom": "Floragato",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Heart-pounding surprise box. Controleer daarna tijd en weer voordat je voor Meowscarada wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Verhoogd roze hoog gras (Elevated Pink Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Verhoogd roze hoog gras (Elevated Pink Tall Grass): Roze hoog gras (Pink Tall Grass) ×4; Hoge locatie (High-up Location) ×1",
    "specialties": [
      "Energie opwekken (Generate)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Kilowattrel",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Elevated pink tall grass. Controleer daarna tijd en weer voordat je voor Wattrel wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Verhoogd roze hoog gras (Elevated Pink Tall Grass)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Verhoogd roze hoog gras (Elevated Pink Tall Grass): Roze hoog gras (Pink Tall Grass) ×4; Hoge locatie (High-up Location) ×1",
    "specialties": [
      "Energie opwekken (Generate)",
      "Vliegen (Fly)"
    ],
    "evolvesFrom": "Wattrel",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Elevated pink tall grass. Controleer daarna tijd en weer voordat je voor Kilowattrel wacht."
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
    "location": "Palette Town (Palette Town) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Grote bagagekar (Large Luggage Carrier) / Extra grote stortplaats (Oversized Dumping Ground)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Grote bagagekar (Large Luggage Carrier): Kar (Cart) ×1; Houten krat (Wooden Crate) ×2; alleen Palette Town (Palette Town Only) OF Extra grote stortplaats (Oversized Dumping Ground): IJzeren balk of kolom (Iron Beam or Column) ×3; Banden (Tires) ×1; Magnetron (Microwave Oven) ×1; Afvalbak, willekeurig (Waste Bin (any)) ×1; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Bouwen (Build)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Tinkatuff",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Large luggage carrier. Controleer daarna tijd en weer voordat je voor Tinkatink wacht."
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
    "location": "Palette Town (Palette Town) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Rioolputinspectie (Sewer-hole Inspection) / Grote bagagekar (Large Luggage Carrier)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Rioolputinspectie (Sewer-hole Inspection): IJzeren buizen (Iron Pipes) ×1; Riooldeksel (Sewer-hole Cover) ×1; Graafgereedschap (Excavation Tools) ×1; Verkeerskegel (Traffic Cone) ×1 OF Grote bagagekar (Large Luggage Carrier): Kar (Cart) ×1; Houten krat (Wooden Crate) ×2",
    "specialties": [
      "Bouwen (Build)"
    ],
    "evolvesFrom": "Tinkatink",
    "evolvesInto": "Tinkaton",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Large luggage carrier. Controleer daarna tijd en weer voordat je voor Tinkatuff wacht."
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
    "location": "Fonkelende hemellanden (Sparkling Skylands) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Nog onbekend (??) | Weer (Weather): Nog onbekend (??)",
    "habitat": "Extra grote stortplaats (Oversized Dumping Ground)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Extra grote stortplaats (Oversized Dumping Ground): IJzeren balk of kolom (Iron Beam or Column) ×3; Banden (Tires) ×1; Magnetron (Microwave Oven) ×1; Afvalbak, willekeurig (Waste Bin (any)) ×1",
    "specialties": [
      "Techniek bouwen (Engineer)"
    ],
    "evolvesFrom": "Tinkatuff",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Sparkling Skylands en maak eerst Oversized dumping ground. Controleer daarna tijd en weer voordat je voor Tinkaton wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Vleugelfossiel-display (Wing Fossil Display)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Vleugelfossiel-display (Wing Fossil Display): Sokkel / tentoonstellingsstandaard (Pedestal / Exhibition Stand) ×2; Wing Fossil (Head (Wing Fossil (Head) ×1; Body (Body) ×1; Right Wing (Right Wing) ×1; Left Wing (Left Wing) ×1; Tail) (Tail)) ×1",
    "specialties": [
      "Vliegen (Fly)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Wing Fossil Display. Controleer daarna tijd en weer voordat je voor Aerodactyl wacht."
  },
  {
    "number": 272,
    "name": "Cranidos",
    "type": [
      "Rock"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Schedelfossiel-display (Skull Fossil Display)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Schedelfossiel-display (Skull Fossil Display): Sokkel / tentoonstellingsstandaard (Pedestal / Exhibition Stand) ×1; Schedelfossiel (Skull Fossil) ×1",
    "specialties": [
      "Verpletteren (Crush)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Rampardos",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Skull Fossil display. Controleer daarna tijd en weer voordat je voor Cranidos wacht."
  },
  {
    "number": 273,
    "name": "Rampardos",
    "type": [
      "Rock"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Kopstootfossiel-display (Headbut Fossil Display)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Kopstootfossiel-display (Headbut Fossil Display): Sokkel / tentoonstellingsstandaard (Pedestal / Exhibition Stand) ×2; Headbut Fossil (Head (Headbut Fossil (Head) ×1; Body (Body) ×1; Tail) (Tail)) ×1",
    "specialties": [
      "Verpletteren (Crush)",
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "Cranidos",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Headbutt Fossil display. Controleer daarna tijd en weer voordat je voor Rampardos wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Pantserfossiel-display (Armor Fossil Display)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Pantserfossiel-display (Armor Fossil Display): Sokkel / tentoonstellingsstandaard (Pedestal / Exhibition Stand) ×1; Armor Fossil (Armor Fossil) ×1",
    "specialties": [
      "Verpletteren (Crush)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Bastiodon",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Armor Fossil display. Controleer daarna tijd en weer voordat je voor Shieldon wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Schildfossiel-display (Shield Fossil Display)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Schildfossiel-display (Shield Fossil Display): Sokkel / tentoonstellingsstandaard (Pedestal / Exhibition Stand) ×2; Shield Fossil (Head (Shield Fossil (Head) ×1; Body (Body) ×1; Tail) (Tail)) ×1",
    "specialties": [
      "Verpletteren (Crush)",
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "Shieldon",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Shield Fossil display. Controleer daarna tijd en weer voordat je voor Bastiodon wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Kaakfossiel-display (Jaw Fossil Display)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Kaakfossiel-display (Jaw Fossil Display): Sokkel / tentoonstellingsstandaard (Pedestal / Exhibition Stand) ×1; Kaakfossiel (Jaw Fossil) ×1",
    "specialties": [
      "Verpletteren (Crush)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Tyrantrum",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Jaw Fossil display. Controleer daarna tijd en weer voordat je voor Tyrunt wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Despotenfossiel-display (Despot Fossil Display)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Despotenfossiel-display (Despot Fossil Display): Sokkel / tentoonstellingsstandaard (Pedestal / Exhibition Stand) ×1; Despot Fossil (Head (Despot Fossil (Head) ×1; Body (Body) ×1; Legs (Legs) ×1; Tail) (Tail)) ×1",
    "specialties": [
      "Verpletteren (Crush)",
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "Tyrunt",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Despot fossil display. Controleer daarna tijd en weer voordat je voor Tyrantrum wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Zeilfossiel-display (Sail Fossil Display)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Zeilfossiel-display (Sail Fossil Display): Sokkel / tentoonstellingsstandaard (Pedestal / Exhibition Stand) ×1; Zeilfossiel (Sail Fossil) ×1",
    "specialties": [
      "Verpletteren (Crush)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Aurorus",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Sail Fossil display. Controleer daarna tijd en weer voordat je voor Amaura wacht."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Fonkelende hemellanden (Sparkling Skylands) / Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Toendrafossiel-display (Tundra Fossil Display)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Toendrafossiel-display (Tundra Fossil Display): Sokkel / tentoonstellingsstandaard (Pedestal / Exhibition Stand) ×2; Tundra Fossil (Head (Tundra Fossil (Head) ×1; Body (Body) ×1; Tail) (Tail)) ×1",
    "specialties": [
      "Verpletteren (Crush)",
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "Amaura",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Rocky Ridges en maak eerst Tundra fossil display. Controleer daarna tijd en weer voordat je voor Aurorus wacht."
  },
  {
    "number": 280,
    "name": "Eevee",
    "type": [
      "Normal"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town (Palette Town) / Verdorde woestenij (Withered Wastelands) / Somber strand (Bleak Beach) / Rotsachtige bergkammen (Rocky Ridges) / Fonkelende hemellanden (Sparkling Skylands)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Mooi bloemenbed (Pretty Flower Bed)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Mooi bloemenbed (Pretty Flower Bed): Wilde bloemen (Wildflowers) ×4; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Vaporeon / Jolteon / Flareon / Espeon / Umbreon / Leafeon / Glaceon / Sylveon",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Pretty flower bed. Controleer daarna tijd en weer voordat je voor Eevee wacht."
  },
  {
    "number": 281,
    "name": "Vaporeon",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Grenzeloos blauwe drank (Boundless Blue Beverage)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Grenzeloos blauwe drank (Boundless Blue Beverage): Zitplaats, willekeurig (Seat (any)) ×1; Tafel, willekeurig (Table (any)) ×1; Soda-float (Soda Float) ×1; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Water geven (Water)"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Boundless blue beverage. Controleer daarna tijd en weer voordat je voor Vaporeon wacht."
  },
  {
    "number": 282,
    "name": "Jolteon",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Elektriserende aardappels (Electrifying Potatoes)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Elektriserende aardappels (Electrifying Potatoes): Zitplaats, willekeurig (Seat (any)) ×1; Tafel, willekeurig (Table (any)) ×1; Gebakken aardappels (Fried Potatoes) ×1; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Energie opwekken (Generate)"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Electrifying potatoes. Controleer daarna tijd en weer voordat je voor Jolteon wacht."
  },
  {
    "number": 283,
    "name": "Flareon",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Brandend hete kruiden (Burning-hot Spice)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Brandend hete kruiden (Burning-hot Spice): Zitplaats, willekeurig (Seat (any)) ×1; Tafel, willekeurig (Table (any)) ×1; Pizza (Pizza) ×1; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Branden (Burn)"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Burning-hot spice. Controleer daarna tijd en weer voordat je voor Flareon wacht."
  },
  {
    "number": 284,
    "name": "Espeon",
    "type": [
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Ochtend (Morning), overdag (Daytime), avond (Evening) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Elegante lekkernijen overdag (Elegant Daytime Treats)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Elegante lekkernijen overdag (Elegant Daytime Treats): Zitplaats, willekeurig (Seat (any)) ×1; Tafel, willekeurig (Table (any)) ×1; Middagtheeset (Afternoon Tea Set) ×1; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Verzamelen (Gather)"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Elegant daytime treats. Controleer daarna tijd en weer voordat je voor Espeon wacht."
  },
  {
    "number": 285,
    "name": "Umbreon",
    "type": [
      "Dark"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Nacht (Nighttime) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Pure-chocoladekoekjes (Dark-chocolate Cookies)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Pure-chocoladekoekjes (Dark-chocolate Cookies): Zitplaats, willekeurig (Seat (any)) ×1; Tafel, willekeurig (Table (any)) ×1; Chocoladekoekjes (Chocolate Cookies) ×1; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Zoeken (Search)"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Dark-chocolate cookies. Controleer daarna tijd en weer voordat je voor Umbreon wacht."
  },
  {
    "number": 286,
    "name": "Leafeon",
    "type": [
      "Grass"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Sandwich met bladgroenten (Leafy Greens Sandwich)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Sandwich met bladgroenten (Leafy Greens Sandwich): Zitplaats, willekeurig (Seat (any)) ×1; Tafel, willekeurig (Table (any)) ×1; Sandwiches (Sandwiches) ×1; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Groeien (Grow)"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Leafy greens sandwich. Controleer daarna tijd en weer voordat je voor Leafeon wacht."
  },
  {
    "number": 287,
    "name": "Glaceon",
    "type": [
      "Ice"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Koud schaafijs (Chilly Shaved Ice)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Koud schaafijs (Chilly Shaved Ice): Zitplaats, willekeurig (Seat (any)) ×1; Tafel, willekeurig (Table (any)) ×1; Schaafijs (Shaved Ice) ×1; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Ruilen (Trade)"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Chilly shaved ice. Controleer daarna tijd en weer voordat je voor Glaceon wacht."
  },
  {
    "number": 288,
    "name": "Sylveon",
    "type": [
      "Fairy"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Lieve linttaart (Lovely Ribbon Cake)",
    "obtainMethod": "Bouw één van de hierboven vermelde leefgebieden (habitats) en voldoe aan de tijd- en weersvoorwaarden.",
    "requirements": "Lieve linttaart (Lovely Ribbon Cake): Zitplaats, willekeurig (Seat (any)) ×1; Tafel, willekeurig (Table (any)) ×1; Linttaart (Ribbon Cake) ×1; alleen Palette Town (Palette Town Only)",
    "specialties": [
      "Enthousiasmeren (Hype)"
    ],
    "evolvesFrom": "Eevee",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "begin in Palette Town en maak eerst Lovely ribbon cake. Controleer daarna tijd en weer voordat je voor Sylveon wacht."
  },
  {
    "number": 289,
    "name": "Kyogre",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands)",
    "area": "Tijd (Time): Niet van toepassing (N/A) | Weer (Weather): Niet van toepassing (N/A)",
    "habitat": "Geen normaal leefgebied (N/A)",
    "obtainMethod": "Volg de verhaallijn in de Verdorde woestenij (Withered Wastelands) om Kyogre te ontmoeten.",
    "requirements": "Geen normaal habitatrecept; volg de verhaallijn (story progression).",
    "specialties": [
      "Niet van toepassing (N/A)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "behandel Kyogre als een verhaalontmoeting, niet als een gewone habitat-spawn."
  },
  {
    "number": 290,
    "name": "Raikou",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Droomeiland (Dream Island)",
    "area": "Tijd (Time): Niet van toepassing (N/A) | Weer (Weather): Niet van toepassing (N/A)",
    "habitat": "Geen normaal leefgebied (N/A)",
    "obtainMethod": "Speciale verkrijgmethode (Special method): te vinden met de Pikachu-pop (found via Pikachu Doll).",
    "requirements": "Speciale methode (Special method): te vinden met de Pikachu-pop (found via Pikachu Doll)",
    "specialties": [
      "Energie opwekken (Generate)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "zorg dat je de Pikachu Doll bij je hebt voordat je specifiek voor Raikou naar Dream Island gaat."
  },
  {
    "number": 291,
    "name": "Entei",
    "type": [
      "Fire"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Droomeiland (Dream Island)",
    "area": "Tijd (Time): Niet van toepassing (N/A) | Weer (Weather): Niet van toepassing (N/A)",
    "habitat": "Geen normaal leefgebied (N/A)",
    "obtainMethod": "Speciale verkrijgmethode (Special method): found via Arcanine Doll.",
    "requirements": "Speciale methode (Special method): found via Arcanine Doll",
    "specialties": [
      "Branden (Burn)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "neem de Arcanine Doll mee als Entei je doel is; zonder die speciale methode is dit geen normale habitat-spawn."
  },
  {
    "number": 292,
    "name": "Suicune",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Droomeiland (Dream Island)",
    "area": "Tijd (Time): Niet van toepassing (N/A) | Weer (Weather): Niet van toepassing (N/A)",
    "habitat": "Geen normaal leefgebied (N/A)",
    "obtainMethod": "Speciale verkrijgmethode (Special method): te vinden met de Eevee-pop (found via Eevee Doll).",
    "requirements": "Speciale methode (Special method): te vinden met de Eevee-pop (found via Eevee Doll)",
    "specialties": [
      "Water geven (Water)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "ga pas gericht voor Suicune zodra je de Eevee Doll hebt."
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
    "location": "Rotsachtige bergkammen (Rocky Ridges)",
    "area": "Tijd (Time): Niet van toepassing (N/A) | Weer (Weather): Niet van toepassing (N/A)",
    "habitat": "Geen normaal leefgebied (N/A)",
    "obtainMethod": "Speciale verkrijgmethode (Special method): organiseer een feest bij Rocky Ridges (Throw Party at Rocky Ridges).",
    "requirements": "Speciale methode (Special method): organiseer een feest bij Rocky Ridges (Throw Party at Rocky Ridges)",
    "specialties": [
      "Branden (Burn)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "zoek Volcanion niet via gewone habitats; richt je op de speciale Party-voorwaarde in Rocky Ridges."
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
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Niet van toepassing (N/A) | Weer (Weather): Niet van toepassing (N/A)",
    "habitat": "Geen normaal leefgebied (N/A)",
    "obtainMethod": "Speciale verkrijgmethode (Special method): bouw de Bevroren kamers (must build Frozen Chambers).",
    "requirements": "Speciale methode (Special method): bouw de Bevroren kamers (must build Frozen Chambers)",
    "specialties": [
      "Vliegen (Fly)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "haal eerst de Freezing Chambers-kit; Articuno is geen normale habitat-spawn."
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
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Niet van toepassing (N/A) | Weer (Weather): Niet van toepassing (N/A)",
    "habitat": "Geen normaal leefgebied (N/A)",
    "obtainMethod": "Speciale verkrijgmethode (Special method): bouw de Verlaten elektriciteitscentrale (must build Abandoned Power Plant).",
    "requirements": "Speciale methode (Special method): bouw de Verlaten elektriciteitscentrale (must build Abandoned Power Plant)",
    "specialties": [
      "Vliegen (Fly)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "bouw eerst de Abandoned Power Plant voordat je tijd steekt in het zoeken naar Zapdos."
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
    "location": "Palette Town (Palette Town)",
    "area": "Tijd (Time): Niet van toepassing (N/A) | Weer (Weather): Niet van toepassing (N/A)",
    "habitat": "Geen normaal leefgebied (N/A)",
    "obtainMethod": "Speciale verkrijgmethode (Special method): bouw het Vlammenaltaar (must build Altar of Flame).",
    "requirements": "Speciale methode (Special method): bouw het Vlammenaltaar (must build Altar of Flame)",
    "specialties": [
      "Vliegen (Fly)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Moltres vraagt om de Altar of Flame; behandel hem dus niet als een gewone habitat-Pokémon."
  },
  {
    "number": 297,
    "name": "Ho-Oh",
    "type": [
      "Fire",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Speciale legendarische ontmoeting (Special legendary encounter)",
    "area": "Tijd (Time): Niet van toepassing (N/A) | Weer (Weather): Niet van toepassing (N/A)",
    "habitat": "Geen normaal leefgebied (N/A)",
    "obtainMethod": "Speciale verkrijgmethode (Special method): gebruik de Heldere bel (use Clear Bell).",
    "requirements": "Speciale methode (Special method): gebruik de Heldere bel (use Clear Bell)",
    "specialties": [
      "Niet van toepassing (N/A)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Gebruik de Heldere bel (Clear Bell) om Ho-Oh te ontmoeten."
  },
  {
    "number": 298,
    "name": "Lugia",
    "type": [
      "Psychic",
      "Flying"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Speciale legendarische ontmoeting (Special legendary encounter)",
    "area": "Tijd (Time): Niet van toepassing (N/A) | Weer (Weather): Niet van toepassing (N/A)",
    "habitat": "Geen normaal leefgebied (N/A)",
    "obtainMethod": "Speciale verkrijgmethode (Special method): gebruik de Getijdenbel (use Tidal Bell).",
    "requirements": "Speciale methode (Special method): gebruik de Getijdenbel (use Tidal Bell)",
    "specialties": [
      "Niet van toepassing (N/A)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "Gebruik de Getijdenbel (Tidal Bell) om Lugia te ontmoeten."
  },
  {
    "number": 299,
    "name": "Mewtwo",
    "type": [
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Droomeiland (Dream Island)",
    "area": "Tijd (Time): Niet van toepassing (N/A) | Weer (Weather): Niet van toepassing (N/A)",
    "habitat": "Geen normaal leefgebied (N/A)",
    "obtainMethod": "Speciale verkrijgmethode (Special method): found via Dragonite Doll.",
    "requirements": "Speciale methode (Special method): found via Dragonite Doll",
    "specialties": [
      "Teleporteren (Teleport)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "neem de Dragonite Doll mee als je specifiek voor Mewtwo naar Dream Island gaat."
  },
  {
    "number": 300,
    "name": "Mew",
    "type": [
      "Psychic"
    ],
    "game": "Pokémon Pokopia",
    "dlc": false,
    "location": "Verdorde woestenij (Withered Wastelands)",
    "area": "Tijd (Time): Niet van toepassing (N/A) | Weer (Weather): Niet van toepassing (N/A)",
    "habitat": "Geen normaal leefgebied (N/A)",
    "obtainMethod": "Speciale verkrijgmethode (Special method): voltooi de Mysterieuze-platenpuzzel (Mysterious Slate Puzzle).",
    "requirements": "Speciale methode (Special method): voltooi de Mysterieuze-platenpuzzel (Mysterious Slate Puzzle)",
    "specialties": [
      "Teleporteren (Teleport)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "",
    "tip": "zoek eerst alle Mysterious Slates. Mew is een puzzelbeloning en geen gewone habitat-spawn."
  }
];
