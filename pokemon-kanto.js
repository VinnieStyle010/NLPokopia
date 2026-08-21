// NLPokopia - Hoofd-Pokédex #001 t/m #300
// Definitieve strakke NL + EN versie voor kinderen én volwassenen.
// - Type: Nederlands (Engels)
// - Locatie, habitats en materialen: Nederlands (Engels)
// - Exacte benodigdheden direct op iedere Pokémonkaart
// - Persoonlijke tips in natuurlijk Nederlands met herkenbare Engelse speltermen
// - Geen verwijzing naar Habitat Dex
// - Geen evolutiemethode

const pokemonKanto = [
  {
    "number": 1,
    "name": "Bulbasaur",
    "type": [
      "Gras (Grass)",
      "Gif (Poison)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Bulbasaur wacht."
  },
  {
    "number": 2,
    "name": "Ivysaur",
    "type": [
      "Gras (Grass)",
      "Gif (Poison)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Bloemenveld (Field of Flowers). Controleer daarna tijd en weer voordat je voor Ivysaur wacht."
  },
  {
    "number": 3,
    "name": "Venusaur",
    "type": [
      "Gras (Grass)",
      "Gif (Poison)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Bloemenveld (Field of Flowers). Controleer daarna tijd en weer voordat je voor Venusaur wacht."
  },
  {
    "number": 4,
    "name": "Charmander",
    "type": [
      "Vuur (Fire)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Charmander wacht."
  },
  {
    "number": 5,
    "name": "Charmeleon",
    "type": [
      "Vuur (Fire)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Kampeerplek (Campsite). Controleer daarna tijd en weer voordat je voor Charmeleon wacht."
  },
  {
    "number": 6,
    "name": "Charizard",
    "type": [
      "Vuur (Fire)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Charizard wacht."
  },
  {
    "number": 7,
    "name": "Squirtle",
    "type": [
      "Water (Water)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Squirtle wacht."
  },
  {
    "number": 8,
    "name": "Wartortle",
    "type": [
      "Water (Water)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Bevochtigd hoog gras (Hydrated Hoog gras (Tall Grass)). Controleer daarna tijd en weer voordat je voor Wartortle wacht."
  },
  {
    "number": 9,
    "name": "Blastoise",
    "type": [
      "Water (Water)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Bevochtigd hoog gras (Hydrated Hoog gras (Tall Grass)). Controleer daarna tijd en weer voordat je voor Blastoise wacht."
  },
  {
    "number": 10,
    "name": "Pidgey",
    "type": [
      "Normaal (Normal)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Verhoogd hoog gras (Elevated Hoog gras (Tall Grass)). Controleer daarna tijd en weer voordat je voor Pidgey wacht."
  },
  {
    "number": 11,
    "name": "Pidgeotto",
    "type": [
      "Normaal (Normal)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Verhoogd hoog gras (Elevated Hoog gras (Tall Grass)). Controleer daarna tijd en weer voordat je voor Pidgeotto wacht."
  },
  {
    "number": 12,
    "name": "Pidgeot",
    "type": [
      "Normaal (Normal)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Luxe vogelmaaltijd (Luxury Chirp-chirp Meal). Controleer daarna tijd en weer voordat je voor Pidgeot wacht."
  },
  {
    "number": 13,
    "name": "Oddish",
    "type": [
      "Gras (Grass)",
      "Gif (Poison)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Oddish wacht."
  },
  {
    "number": 14,
    "name": "Gloom",
    "type": [
      "Gras (Grass)",
      "Gif (Poison)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Tropische sfeer (Tropical Vibes). Controleer daarna tijd en weer voordat je voor Gloom wacht."
  },
  {
    "number": 15,
    "name": "Vileplume",
    "type": [
      "Gras (Grass)",
      "Gif (Poison)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Chansey-rustplek (Chansey Resting Area). Controleer daarna tijd en weer voordat je voor Vileplume wacht."
  },
  {
    "number": 16,
    "name": "Bellossom",
    "type": [
      "Gras (Grass)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Chansey-rustplek (Chansey Resting Area). Controleer daarna tijd en weer voordat je voor Bellossom wacht."
  },
  {
    "number": 17,
    "name": "Paras",
    "type": [
      "Insect (Bug)",
      "Gras (Grass)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Verhoogd bloemenbed (Elevated Flower Bed). Controleer daarna tijd en weer voordat je voor Paras wacht."
  },
  {
    "number": 18,
    "name": "Parasect",
    "type": [
      "Insect (Bug)",
      "Gras (Grass)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Verhoogd bloemenbed (Elevated Flower Bed). Controleer daarna tijd en weer voordat je voor Parasect wacht."
  },
  {
    "number": 19,
    "name": "Venonat",
    "type": [
      "Insect (Bug)",
      "Gif (Poison)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Verlicht hoog gras (Illuminated Hoog gras (Tall Grass)). Controleer daarna tijd en weer voordat je voor Venonat wacht."
  },
  {
    "number": 20,
    "name": "Venomoth",
    "type": [
      "Insect (Bug)",
      "Gif (Poison)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Verlicht hoog gras (Illuminated Hoog gras (Tall Grass)). Controleer daarna tijd en weer voordat je voor Venomoth wacht."
  },
  {
    "number": 21,
    "name": "Bellsprout",
    "type": [
      "Gras (Grass)",
      "Gif (Poison)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Tree-shaded  Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Bellsprout wacht."
  },
  {
    "number": 22,
    "name": "Weepinbell",
    "type": [
      "Gras (Grass)",
      "Gif (Poison)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Bloementafel (Flowery Table). Controleer daarna tijd en weer voordat je voor Weepinbell wacht."
  },
  {
    "number": 23,
    "name": "Victreebel",
    "type": [
      "Gras (Grass)",
      "Gif (Poison)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Bloementafel (Flowery Table). Controleer daarna tijd en weer voordat je voor Victreebel wacht."
  },
  {
    "number": 24,
    "name": "Slowpoke",
    "type": [
      "Water (Water)",
      "Psychisch (Psychic)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Hoog gras aan zee (Seaside Hoog gras (Tall Grass)). Controleer daarna tijd en weer voordat je voor Slowpoke wacht."
  },
  {
    "number": 25,
    "name": "Slowbro",
    "type": [
      "Water (Water)",
      "Psychisch (Psychic)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Hoog gras aan zee (Seaside Hoog gras (Tall Grass)). Controleer daarna tijd en weer voordat je voor Slowbro wacht."
  },
  {
    "number": 26,
    "name": "Slowking",
    "type": [
      "Water (Water)",
      "Psychisch (Psychic)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Hoog gras aan zee (Seaside Hoog gras (Tall Grass)). Controleer daarna tijd en weer voordat je voor Slowking wacht."
  },
  {
    "number": 27,
    "name": "Magnemite",
    "type": [
      "Elektrisch (Electric)",
      "Staal (Steel)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Fabrieksopslag (Factory Storage). Controleer daarna tijd en weer voordat je voor Magnemite wacht."
  },
  {
    "number": 28,
    "name": "Magneton",
    "type": [
      "Elektrisch (Electric)",
      "Staal (Steel)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Afvalbakcentrale (Trash Can Central). Controleer daarna tijd en weer voordat je voor Magneton wacht."
  },
  {
    "number": 29,
    "name": "Magnezone",
    "type": [
      "Elektrisch (Electric)",
      "Staal (Steel)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Afvalbakcentrale (Trash Can Central). Controleer daarna tijd en weer voordat je voor Magnezone wacht."
  },
  {
    "number": 30,
    "name": "Onix",
    "type": [
      "Steen (Rock)",
      "Grond (Ground)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Glad hoog gras (Smooth Hoog gras (Tall Grass)). Controleer daarna tijd en weer voordat je voor Onix wacht."
  },
  {
    "number": 31,
    "name": "Steelix",
    "type": [
      "Staal (Steel)",
      "Grond (Ground)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Rinkelende ijzerconstructie (Clink-clang Iron Construction). Controleer daarna tijd en weer voordat je voor Steelix wacht."
  },
  {
    "number": 32,
    "name": "Cubone",
    "type": [
      "Grond (Ground)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Graf met bloemen (Grave with Flowers). Controleer daarna tijd en weer voordat je voor Cubone wacht."
  },
  {
    "number": 33,
    "name": "Marowak",
    "type": [
      "Grond (Ground)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Graf met bloemen (Grave with Flowers). Controleer daarna tijd en weer voordat je voor Marowak wacht."
  },
  {
    "number": 34,
    "name": "Tyrogue",
    "type": [
      "Vecht (Fighting)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Trainingswaterval (Training Waterfall). Controleer daarna tijd en weer voordat je voor Tyrogue wacht."
  },
  {
    "number": 35,
    "name": "Hitmonlee",
    "type": [
      "Vecht (Fighting)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Eerstehulpplek (Urgent Care). Controleer daarna tijd en weer voordat je voor Hitmonlee wacht."
  },
  {
    "number": 36,
    "name": "Hitmonchan",
    "type": [
      "Vecht (Fighting)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Rustplek na training (Exercise Resting Spot). Controleer daarna tijd en weer voordat je voor Hitmonchan wacht."
  },
  {
    "number": 37,
    "name": "Hitmontop",
    "type": [
      "Vecht (Fighting)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst EHBO bij de gym (Gym First Aid). Controleer daarna tijd en weer voordat je voor Hitmontop wacht."
  },
  {
    "number": 38,
    "name": "Koffing",
    "type": [
      "Gif (Poison)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Afvalverzamelplek (Trash Collection Site). Controleer daarna tijd en weer voordat je voor Koffing wacht."
  },
  {
    "number": 39,
    "name": "Weezing",
    "type": [
      "Gif (Poison)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Ouderwetse antiekhoek (Good Old-fashioned Antiques). Controleer daarna tijd en weer voordat je voor Weezing wacht."
  },
  {
    "number": 40,
    "name": "Tangela",
    "type": [
      "Gras (Grass)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Alleen maar Poké Balls (Alleen maar Poké Balls (Nothin' but Poké Balls)). Controleer daarna tijd en weer voordat je voor Tangela wacht."
  },
  {
    "number": 41,
    "name": "Tangrowth",
    "type": [
      "Gras (Grass)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Bankje met groen (Bench with Greenery). Controleer daarna tijd en weer voordat je voor Tangrowth wacht."
  },
  {
    "number": 42,
    "name": "Scyther",
    "type": [
      "Insect (Bug)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Tree-shaded  Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Scyther wacht."
  },
  {
    "number": 43,
    "name": "Scizor",
    "type": [
      "Insect (Bug)",
      "Staal (Steel)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Tree-shaded  Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Scizor wacht."
  },
  {
    "number": 44,
    "name": "Pinsir",
    "type": [
      "Insect (Bug)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Tree-shaded  Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Pinsir wacht."
  },
  {
    "number": 45,
    "name": "Magikarp",
    "type": [
      "Water (Water)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Ocean fishing spot. Controleer daarna tijd en weer voordat je voor Magikarp wacht."
  },
  {
    "number": 46,
    "name": "Gyarados",
    "type": [
      "Water (Water)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Illuminated waterfall. Controleer daarna tijd en weer voordat je voor Gyarados wacht."
  },
  {
    "number": 47,
    "name": "Ditto",
    "type": [
      "Normaal (Normal)"
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
    "tip": "Begin je zoektocht naar Ditto in Droomeiland (Dream Island) en controleer eerst of er een speciale ontgrendelvoorwaarde geldt."
  },
  {
    "number": 48,
    "name": "Hoothoot",
    "type": [
      "Normaal (Normal)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Verhoogd hoog gras (Elevated Hoog gras (Tall Grass)). Controleer daarna tijd en weer voordat je voor Hoothoot wacht."
  },
  {
    "number": 49,
    "name": "Noctowl",
    "type": [
      "Normaal (Normal)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Verhoogd hoog gras (Elevated Hoog gras (Tall Grass)). Controleer daarna tijd en weer voordat je voor Noctowl wacht."
  },
  {
    "number": 50,
    "name": "Heracross",
    "type": [
      "Insect (Bug)",
      "Vecht (Fighting)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Tree-shaded  Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Heracross wacht."
  },
  {
    "number": 51,
    "name": "Volbeat",
    "type": [
      "Insect (Bug)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Hydrated flower bed. Controleer daarna tijd en weer voordat je voor Volbeat wacht."
  },
  {
    "number": 52,
    "name": "Illumise",
    "type": [
      "Insect (Bug)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Hydrated flower bed. Controleer daarna tijd en weer voordat je voor Illumise wacht."
  },
  {
    "number": 53,
    "name": "Gulpin",
    "type": [
      "Gif (Poison)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Tantalizing dining set. Controleer daarna tijd en weer voordat je voor Gulpin wacht."
  },
  {
    "number": 54,
    "name": "Swalot",
    "type": [
      "Gif (Poison)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Dinner table surprise. Controleer daarna tijd en weer voordat je voor Swalot wacht."
  },
  {
    "number": 55,
    "name": "Cacnea",
    "type": [
      "Gras (Grass)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Sunny overdag site. Controleer daarna tijd en weer voordat je voor Cacnea wacht."
  },
  {
    "number": 56,
    "name": "Cacturne",
    "type": [
      "Gras (Grass)",
      "Duister (Dark)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Tree-shaded flower bed. Controleer daarna tijd en weer voordat je voor Cacturne wacht."
  },
  {
    "number": 57,
    "name": "Combee",
    "type": [
      "Insect (Bug)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Mooi bloemenbed (Pretty Flower Bed). Controleer daarna tijd en weer voordat je voor Combee wacht."
  },
  {
    "number": 58,
    "name": "Vespiquen",
    "type": [
      "Insect (Bug)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Bloemenveld (Field of Flowers). Controleer daarna tijd en weer voordat je voor Vespiquen wacht."
  },
  {
    "number": 59,
    "name": "Shellos",
    "type": [
      "Water (Water)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Wegwijzer (Road Sign). Controleer daarna tijd en weer voordat je voor Shellos wacht."
  },
  {
    "number": 60,
    "name": "Gastrodon",
    "type": [
      "Water (Water)",
      "Grond (Ground)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Ocean fishing spot. Controleer daarna tijd en weer voordat je voor Gastrodon wacht."
  },
  {
    "number": 61,
    "name": "Drifloon",
    "type": [
      "Geest (Ghost)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Riding warm updrafts. Controleer daarna tijd en weer voordat je voor Drifloon wacht."
  },
  {
    "number": 62,
    "name": "Drifblim",
    "type": [
      "Geest (Ghost)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Plush central. Controleer daarna tijd en weer voordat je voor Drifblim wacht."
  },
  {
    "number": 63,
    "name": "Drilbur",
    "type": [
      "Grond (Ground)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Vers groenteveld (Fresh Veggie Field). Controleer daarna tijd en weer voordat je voor Drilbur wacht."
  },
  {
    "number": 64,
    "name": "Excadrill",
    "type": [
      "Grond (Ground)",
      "Staal (Steel)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Vers groenteveld (Fresh Veggie Field). Controleer daarna tijd en weer voordat je voor Excadrill wacht."
  },
  {
    "number": 65,
    "name": "Timburr",
    "type": [
      "Vecht (Fighting)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Hoog gras in rotsschaduw (Boulder-shaded Hoog gras (Tall Grass)). Controleer daarna tijd en weer voordat je voor Timburr wacht."
  },
  {
    "number": 66,
    "name": "Gurdurr",
    "type": [
      "Vecht (Fighting)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Hoog gras in rotsschaduw (Boulder-shaded Hoog gras (Tall Grass)). Controleer daarna tijd en weer voordat je voor Gurdurr wacht."
  },
  {
    "number": 67,
    "name": "Conkeldurr",
    "type": [
      "Vecht (Fighting)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Construction-site generator. Controleer daarna tijd en weer voordat je voor Conkeldurr wacht."
  },
  {
    "number": 68,
    "name": "Litwick",
    "type": [
      "Geest (Ghost)",
      "Vuur (Fire)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Grave offering. Controleer daarna tijd en weer voordat je voor Litwick wacht."
  },
  {
    "number": 69,
    "name": "Lampent",
    "type": [
      "Geest (Ghost)",
      "Vuur (Fire)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Grave offering. Controleer daarna tijd en weer voordat je voor Lampent wacht."
  },
  {
    "number": 70,
    "name": "Chandelure",
    "type": [
      "Geest (Ghost)",
      "Vuur (Fire)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Creepy grave offering. Controleer daarna tijd en weer voordat je voor Chandelure wacht."
  },
  {
    "number": 71,
    "name": "Axew",
    "type": [
      "Draak (Dragon)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Lumberjack's workplace. Controleer daarna tijd en weer voordat je voor Axew wacht."
  },
  {
    "number": 72,
    "name": "Fraxure",
    "type": [
      "Draak (Dragon)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Lumberjack's workplace. Controleer daarna tijd en weer voordat je voor Fraxure wacht."
  },
  {
    "number": 73,
    "name": "Haxorus",
    "type": [
      "Draak (Dragon)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Lumberjack's workplace. Controleer daarna tijd en weer voordat je voor Haxorus wacht."
  },
  {
    "number": 74,
    "name": "Goomy",
    "type": [
      "Draak (Dragon)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Tree-shaded flower bed. Controleer daarna tijd en weer voordat je voor Goomy wacht."
  },
  {
    "number": 75,
    "name": "Sliggoo",
    "type": [
      "Draak (Dragon)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Bevochtigd hoog gras (Hydrated Hoog gras (Tall Grass)). Controleer daarna tijd en weer voordat je voor Sliggoo wacht."
  },
  {
    "number": 76,
    "name": "Goodra",
    "type": [
      "Draak (Dragon)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Very-berry space. Controleer daarna tijd en weer voordat je voor Goodra wacht."
  },
  {
    "number": 77,
    "name": "Cramorant",
    "type": [
      "Vliegend (Flying)",
      "Water (Water)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Bevochtigd hoog gras (Hydrated Hoog gras (Tall Grass)). Controleer daarna tijd en weer voordat je voor Cramorant wacht."
  },
  {
    "number": 78,
    "name": "Pichu",
    "type": [
      "Elektrisch (Electric)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Picknickplek (Picnic Set). Controleer daarna tijd en weer voordat je voor Pichu wacht."
  },
  {
    "number": 79,
    "name": "Pikachu",
    "type": [
      "Elektrisch (Electric)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Picknickplek (Picnic Set). Controleer daarna tijd en weer voordat je voor Pikachu wacht."
  },
  {
    "number": 80,
    "name": "Raichu",
    "type": [
      "Elektrisch (Electric)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Nature's market. Controleer daarna tijd en weer voordat je voor Raichu wacht."
  },
  {
    "number": 81,
    "name": "Zubat",
    "type": [
      "Gif (Poison)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Tree-shaded Yellow Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Zubat wacht."
  },
  {
    "number": 82,
    "name": "Golbat",
    "type": [
      "Gif (Poison)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Tree-shaded Yellow Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Golbat wacht."
  },
  {
    "number": 83,
    "name": "Crobat",
    "type": [
      "Gif (Poison)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Elevated yellow Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Crobat wacht."
  },
  {
    "number": 84,
    "name": "Meowth",
    "type": [
      "Normaal (Normal)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Resting spot. Controleer daarna tijd en weer voordat je voor Meowth wacht."
  },
  {
    "number": 85,
    "name": "Persian",
    "type": [
      "Normaal (Normal)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Evil organization HQ. Controleer daarna tijd en weer voordat je voor Persian wacht."
  },
  {
    "number": 86,
    "name": "Psyduck",
    "type": [
      "Water (Water)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Hot-spring shower. Controleer daarna tijd en weer voordat je voor Psyduck wacht."
  },
  {
    "number": 87,
    "name": "Golduck",
    "type": [
      "Water (Water)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Hot-spring shower. Controleer daarna tijd en weer voordat je voor Golduck wacht."
  },
  {
    "number": 88,
    "name": "Growlithe",
    "type": [
      "Vuur (Fire)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Perpetual mess. Controleer daarna tijd en weer voordat je voor Growlithe wacht."
  },
  {
    "number": 89,
    "name": "Arcanine",
    "type": [
      "Vuur (Fire)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Mini museum. Controleer daarna tijd en weer voordat je voor Arcanine wacht."
  },
  {
    "number": 90,
    "name": "Farfetch'd",
    "type": [
      "Normaal (Normal)",
      "Vliegend (Flying)"
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
    "tip": "Controleer eerst de habitat- en locatievoorwaarden voor Farfetch'd voordat je materialen uitgeeft."
  },
  {
    "number": 91,
    "name": "Grimer",
    "type": [
      "Gif (Poison)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Marsh fishing spot. Controleer daarna tijd en weer voordat je voor Grimer wacht."
  },
  {
    "number": 92,
    "name": "Muk",
    "type": [
      "Gif (Poison)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Marsh fishing spot. Controleer daarna tijd en weer voordat je voor Muk wacht."
  },
  {
    "number": 93,
    "name": "Gastly",
    "type": [
      "Geest (Ghost)",
      "Gif (Poison)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Spooky study. Controleer daarna tijd en weer voordat je voor Gastly wacht."
  },
  {
    "number": 94,
    "name": "Haunter",
    "type": [
      "Geest (Ghost)",
      "Gif (Poison)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Surprise in store. Controleer daarna tijd en weer voordat je voor Haunter wacht."
  },
  {
    "number": 95,
    "name": "Gengar",
    "type": [
      "Geest (Ghost)",
      "Gif (Poison)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Surprise in store. Controleer daarna tijd en weer voordat je voor Gengar wacht."
  },
  {
    "number": 96,
    "name": "Voltorb",
    "type": [
      "Elektrisch (Electric)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Park bench. Controleer daarna tijd en weer voordat je voor Voltorb wacht."
  },
  {
    "number": 97,
    "name": "Electrode",
    "type": [
      "Elektrisch (Electric)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Park bench. Controleer daarna tijd en weer voordat je voor Electrode wacht."
  },
  {
    "number": 98,
    "name": "Exeggcute",
    "type": [
      "Gras (Grass)",
      "Psychisch (Psychic)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Tropische sfeer (Tropical Vibes). Controleer daarna tijd en weer voordat je voor Exeggcute wacht."
  },
  {
    "number": 99,
    "name": "Exeggutor",
    "type": [
      "Gras (Grass)",
      "Psychisch (Psychic)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Tropische sfeer (Tropical Vibes). Controleer daarna tijd en weer voordat je voor Exeggutor wacht."
  },
  {
    "number": 100,
    "name": "Happiny",
    "type": [
      "Normaal (Normal)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Alarm clock sleep zone. Controleer daarna tijd en weer voordat je voor Happiny wacht."
  },
  {
    "number": 101,
    "name": "Chansey",
    "type": [
      "Normaal (Normal)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Full recovery. Controleer daarna tijd en weer voordat je voor Chansey wacht."
  },
  {
    "number": 102,
    "name": "Blissey",
    "type": [
      "Normaal (Normal)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Cuteness overload. Controleer daarna tijd en weer voordat je voor Blissey wacht."
  },
  {
    "number": 103,
    "name": "Elekid",
    "type": [
      "Elektrisch (Electric)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Vending machine set. Controleer daarna tijd en weer voordat je voor Elekid wacht."
  },
  {
    "number": 104,
    "name": "Electabuzz",
    "type": [
      "Elektrisch (Electric)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Afvalbakcentrale (Trash Can Central). Controleer daarna tijd en weer voordat je voor Electabuzz wacht."
  },
  {
    "number": 105,
    "name": "Electivire",
    "type": [
      "Elektrisch (Electric)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Light-up stage. Controleer daarna tijd en weer voordat je voor Electivire wacht."
  },
  {
    "number": 106,
    "name": "Lapras",
    "type": [
      "Water (Water)",
      "IJs (Ice)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Tropical seaside. Controleer daarna tijd en weer voordat je voor Lapras wacht."
  },
  {
    "number": 107,
    "name": "Munchlax",
    "type": [
      "Normaal (Normal)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Bed with a plush. Controleer daarna tijd en weer voordat je voor Munchlax wacht."
  },
  {
    "number": 108,
    "name": "Snorlax",
    "type": [
      "Normaal (Normal)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Gourmet's altar. Controleer daarna tijd en weer voordat je voor Snorlax wacht."
  },
  {
    "number": 109,
    "name": "Spinarak",
    "type": [
      "Insect (Bug)",
      "Gif (Poison)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Yellow Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Spinarak wacht."
  },
  {
    "number": 110,
    "name": "Ariados",
    "type": [
      "Insect (Bug)",
      "Gif (Poison)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Yellow Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Ariados wacht."
  },
  {
    "number": 111,
    "name": "Mareep",
    "type": [
      "Elektrisch (Electric)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Overgrowth vending machine. Controleer daarna tijd en weer voordat je voor Mareep wacht."
  },
  {
    "number": 112,
    "name": "Flaaffy",
    "type": [
      "Elektrisch (Electric)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst nacht festival venue. Controleer daarna tijd en weer voordat je voor Flaaffy wacht."
  },
  {
    "number": 113,
    "name": "Ampharos",
    "type": [
      "Elektrisch (Electric)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Plain life. Controleer daarna tijd en weer voordat je voor Ampharos wacht."
  },
  {
    "number": 114,
    "name": "Azurill",
    "type": [
      "Normaal (Normal)",
      "Fee (Fairy)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Hydrated yellow Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Azurill wacht."
  },
  {
    "number": 115,
    "name": "Marill",
    "type": [
      "Water (Water)",
      "Fee (Fairy)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Hydrated yellow Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Marill wacht."
  },
  {
    "number": 116,
    "name": "Azumarill",
    "type": [
      "Water (Water)",
      "Fee (Fairy)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Steiger (Dock). Controleer daarna tijd en weer voordat je voor Azumarill wacht."
  },
  {
    "number": 117,
    "name": "Paldean Wooper",
    "type": [
      "Gif (Poison)",
      "Grond (Ground)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Marshy Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Paldean Wooper wacht."
  },
  {
    "number": 118,
    "name": "Clodsire",
    "type": [
      "Gif (Poison)",
      "Grond (Ground)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Marshy Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Clodsire wacht."
  },
  {
    "number": 119,
    "name": "Smeargle",
    "type": [
      "Normaal (Normal)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Klein atelier (Tiny Atelier). Controleer daarna tijd en weer voordat je voor Smeargle wacht."
  },
  {
    "number": 120,
    "name": "Torchic",
    "type": [
      "Vuur (Fire)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Chirp-chirp meal. Controleer daarna tijd en weer voordat je voor Torchic wacht."
  },
  {
    "number": 121,
    "name": "Combusken",
    "type": [
      "Vuur (Fire)",
      "Vecht (Fighting)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Resort meal prep. Controleer daarna tijd en weer voordat je voor Combusken wacht."
  },
  {
    "number": 122,
    "name": "Blaziken",
    "type": [
      "Vuur (Fire)",
      "Vecht (Fighting)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Chirp-chirp meal. Controleer daarna tijd en weer voordat je voor Blaziken wacht."
  },
  {
    "number": 123,
    "name": "Wingull",
    "type": [
      "Water (Water)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Elevated yellow Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Wingull wacht."
  },
  {
    "number": 124,
    "name": "Pelipper",
    "type": [
      "Water (Water)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Elevated yellow Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Pelipper wacht."
  },
  {
    "number": 125,
    "name": "Makuhita",
    "type": [
      "Vecht (Fighting)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Tree-shaded Yellow Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Makuhita wacht."
  },
  {
    "number": 126,
    "name": "Hariyama",
    "type": [
      "Vecht (Fighting)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Tree-shaded Yellow Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Hariyama wacht."
  },
  {
    "number": 127,
    "name": "Absol",
    "type": [
      "Duister (Dark)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Welcoming resort. Controleer daarna tijd en weer voordat je voor Absol wacht."
  },
  {
    "number": 128,
    "name": "Piplup",
    "type": [
      "Water (Water)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Hydrated yellow Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Piplup wacht."
  },
  {
    "number": 129,
    "name": "Prinplup",
    "type": [
      "Water (Water)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Hydrated yellow Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Prinplup wacht."
  },
  {
    "number": 130,
    "name": "Empoleon",
    "type": [
      "Water (Water)",
      "Staal (Steel)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Tableside delivery cart. Controleer daarna tijd en weer voordat je voor Empoleon wacht."
  },
  {
    "number": 131,
    "name": "Audino",
    "type": [
      "Normaal (Normal)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Working the register. Controleer daarna tijd en weer voordat je voor Audino wacht."
  },
  {
    "number": 132,
    "name": "Trubbish",
    "type": [
      "Gif (Poison)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Afvalverzamelplek (Trash Collection Site). Controleer daarna tijd en weer voordat je voor Trubbish wacht."
  },
  {
    "number": 133,
    "name": "Garbodor",
    "type": [
      "Gif (Poison)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Afvalverzamelplek (Trash Collection Site). Controleer daarna tijd en weer voordat je voor Garbodor wacht."
  },
  {
    "number": 134,
    "name": "Zorua",
    "type": [
      "Duister (Dark)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Breezy flower bed. Controleer daarna tijd en weer voordat je voor Zorua wacht."
  },
  {
    "number": 135,
    "name": "Zoroark",
    "type": [
      "Duister (Dark)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Breezy flower bed. Controleer daarna tijd en weer voordat je voor Zoroark wacht."
  },
  {
    "number": 136,
    "name": "Minccino",
    "type": [
      "Normaal (Normal)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Changing area. Controleer daarna tijd en weer voordat je voor Minccino wacht."
  },
  {
    "number": 137,
    "name": "Cinccino",
    "type": [
      "Normaal (Normal)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Private makeup stand. Controleer daarna tijd en weer voordat je voor Cinccino wacht."
  },
  {
    "number": 138,
    "name": "Grubbin",
    "type": [
      "Insect (Bug)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Yellow Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Grubbin wacht."
  },
  {
    "number": 139,
    "name": "Charjabug",
    "type": [
      "Insect (Bug)",
      "Elektrisch (Electric)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Vending machine break area. Controleer daarna tijd en weer voordat je voor Charjabug wacht."
  },
  {
    "number": 140,
    "name": "Vikavolt",
    "type": [
      "Insect (Bug)",
      "Elektrisch (Electric)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Tree-shaded flower bed. Controleer daarna tijd en weer voordat je voor Vikavolt wacht."
  },
  {
    "number": 141,
    "name": "Mimikyu",
    "type": [
      "Geest (Ghost)",
      "Fee (Fairy)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Pikachu space. Controleer daarna tijd en weer voordat je voor Mimikyu wacht."
  },
  {
    "number": 142,
    "name": "Pawmi",
    "type": [
      "Elektrisch (Electric)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Breezy flower bed. Controleer daarna tijd en weer voordat je voor Pawmi wacht."
  },
  {
    "number": 143,
    "name": "Pawmo",
    "type": [
      "Elektrisch (Electric)",
      "Vecht (Fighting)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Tantalizing restaurant. Controleer daarna tijd en weer voordat je voor Pawmo wacht."
  },
  {
    "number": 144,
    "name": "Pawmot",
    "type": [
      "Elektrisch (Electric)",
      "Vecht (Fighting)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Café space. Controleer daarna tijd en weer voordat je voor Pawmot wacht."
  },
  {
    "number": 145,
    "name": "Tatsugiri",
    "type": [
      "Draak (Dragon)",
      "Water (Water)"
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
    "tip": "Begin in Somber strand (Bleak Beach) en maak eerst Strandset (Beach Set). Controleer daarna tijd en weer voordat je voor Tatsugiri wacht."
  },
  {
    "number": 146,
    "name": "Ekans",
    "type": [
      "Gif (Poison)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Hydrated Sierlijk bloemenbed (Graceful Flower Bed). Controleer daarna tijd en weer voordat je voor Ekans wacht."
  },
  {
    "number": 147,
    "name": "Arbok",
    "type": [
      "Gif (Poison)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Hydrated Sierlijk bloemenbed (Graceful Flower Bed). Controleer daarna tijd en weer voordat je voor Arbok wacht."
  },
  {
    "number": 148,
    "name": "Cleffa",
    "type": [
      "Fee (Fairy)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Sierlijk bloemenbed (Graceful Flower Bed). Controleer daarna tijd en weer voordat je voor Cleffa wacht."
  },
  {
    "number": 149,
    "name": "Clefairy",
    "type": [
      "Fee (Fairy)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Sierlijk bloemenbed (Graceful Flower Bed). Controleer daarna tijd en weer voordat je voor Clefairy wacht."
  },
  {
    "number": 150,
    "name": "Clefable",
    "type": [
      "Fee (Fairy)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Sierlijk bloemenbed (Graceful Flower Bed). Controleer daarna tijd en weer voordat je voor Clefable wacht."
  },
  {
    "number": 151,
    "name": "Igglybuff",
    "type": [
      "Normaal (Normal)",
      "Fee (Fairy)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Bloementuin (Flower Garden) stump stage. Controleer daarna tijd en weer voordat je voor Igglybuff wacht."
  },
  {
    "number": 152,
    "name": "Jigglypuff",
    "type": [
      "Normaal (Normal)",
      "Fee (Fairy)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Bloementuin (Flower Garden) stump stage. Controleer daarna tijd en weer voordat je voor Jigglypuff wacht."
  },
  {
    "number": 153,
    "name": "Wigglytuff",
    "type": [
      "Normaal (Normal)",
      "Fee (Fairy)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Recital stage. Controleer daarna tijd en weer voordat je voor Wigglytuff wacht."
  },
  {
    "number": 154,
    "name": "Diglett",
    "type": [
      "Grond (Ground)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Tree-shaded red Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Diglett wacht."
  },
  {
    "number": 155,
    "name": "Dugtrio",
    "type": [
      "Grond (Ground)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Tree-shaded red Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Dugtrio wacht."
  },
  {
    "number": 156,
    "name": "Machop",
    "type": [
      "Vecht (Fighting)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Hoog gras in rotsschaduw (Boulder-shaded Hoog gras (Tall Grass)). Controleer daarna tijd en weer voordat je voor Machop wacht."
  },
  {
    "number": 157,
    "name": "Machoke",
    "type": [
      "Vecht (Fighting)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Grassy training field. Controleer daarna tijd en weer voordat je voor Machoke wacht."
  },
  {
    "number": 158,
    "name": "Machamp",
    "type": [
      "Vecht (Fighting)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Grassy training field. Controleer daarna tijd en weer voordat je voor Machamp wacht."
  },
  {
    "number": 159,
    "name": "Geodude",
    "type": [
      "Steen (Rock)",
      "Grond (Ground)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Geodude wacht."
  },
  {
    "number": 160,
    "name": "Graveler",
    "type": [
      "Steen (Rock)",
      "Grond (Ground)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Mossy boulder. Controleer daarna tijd en weer voordat je voor Graveler wacht."
  },
  {
    "number": 161,
    "name": "Golem",
    "type": [
      "Steen (Rock)",
      "Grond (Ground)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Mossy boulder. Controleer daarna tijd en weer voordat je voor Golem wacht."
  },
  {
    "number": 162,
    "name": "Magby",
    "type": [
      "Vuur (Fire)"
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
    "tip": "Begin in Verdorde woestenij (Withered Wastelands) en maak eerst Mooi bloemenbed (Pretty Flower Bed). Controleer daarna tijd en weer voordat je voor Magby wacht."
  },
  {
    "number": 163,
    "name": "Magmar",
    "type": [
      "Vuur (Fire)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Digging and burning. Controleer daarna tijd en weer voordat je voor Magmar wacht."
  },
  {
    "number": 164,
    "name": "Magmortar",
    "type": [
      "Vuur (Fire)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Mini kitchen. Controleer daarna tijd en weer voordat je voor Magmortar wacht."
  },
  {
    "number": 165,
    "name": "Bonsly",
    "type": [
      "Steen (Rock)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Tree-shaded red Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Bonsly wacht."
  },
  {
    "number": 166,
    "name": "Sudowoodo",
    "type": [
      "Steen (Rock)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Tree-shaded red Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Sudowoodo wacht."
  },
  {
    "number": 167,
    "name": "Murkrow",
    "type": [
      "Duister (Dark)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Elevated red Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Murkrow wacht."
  },
  {
    "number": 168,
    "name": "Honchkrow",
    "type": [
      "Duister (Dark)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Chirping recital. Controleer daarna tijd en weer voordat je voor Honchkrow wacht."
  },
  {
    "number": 169,
    "name": "Larvitar",
    "type": [
      "Steen (Rock)",
      "Grond (Ground)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Mossy rest spot. Controleer daarna tijd en weer voordat je voor Larvitar wacht."
  },
  {
    "number": 170,
    "name": "Pupitar",
    "type": [
      "Steen (Rock)",
      "Grond (Ground)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Tree-shaded pink Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Pupitar wacht."
  },
  {
    "number": 171,
    "name": "Tyranitar",
    "type": [
      "Steen (Rock)",
      "Duister (Dark)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Toil in the soil. Controleer daarna tijd en weer voordat je voor Tyranitar wacht."
  },
  {
    "number": 172,
    "name": "Lotad",
    "type": [
      "Water (Water)",
      "Gras (Grass)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Hydrated red Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Lotad wacht."
  },
  {
    "number": 173,
    "name": "Lombre",
    "type": [
      "Water (Water)",
      "Gras (Grass)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Hydrated red Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Lombre wacht."
  },
  {
    "number": 174,
    "name": "Ludicolo",
    "type": [
      "Water (Water)",
      "Gras (Grass)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Uplifting duckweed. Controleer daarna tijd en weer voordat je voor Ludicolo wacht."
  },
  {
    "number": 175,
    "name": "Mawile",
    "type": [
      "Staal (Steel)",
      "Fee (Fairy)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Working the register. Controleer daarna tijd en weer voordat je voor Mawile wacht."
  },
  {
    "number": 176,
    "name": "Torkoal",
    "type": [
      "Vuur (Fire)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Mossy hot spring. Controleer daarna tijd en weer voordat je voor Torkoal wacht."
  },
  {
    "number": 177,
    "name": "Kricketot",
    "type": [
      "Insect (Bug)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Red Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Kricketot wacht."
  },
  {
    "number": 178,
    "name": "Kricketune",
    "type": [
      "Insect (Bug)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Music and magazines. Controleer daarna tijd en weer voordat je voor Kricketune wacht."
  },
  {
    "number": 179,
    "name": "Chatot",
    "type": [
      "Normaal (Normal)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Elevated red Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Chatot wacht."
  },
  {
    "number": 180,
    "name": "Riolu",
    "type": [
      "Vecht (Fighting)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Red Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Riolu wacht."
  },
  {
    "number": 181,
    "name": "Lucario",
    "type": [
      "Vecht (Fighting)",
      "Staal (Steel)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Box to the rhythm. Controleer daarna tijd en weer voordat je voor Lucario wacht."
  },
  {
    "number": 182,
    "name": "Stereo Rotom",
    "type": [
      "Elektrisch (Electric)",
      "Normaal (Normal)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Music and magazines. Controleer daarna tijd en weer voordat je voor Stereo Rotom wacht."
  },
  {
    "number": 183,
    "name": "Larvesta",
    "type": [
      "Insect (Bug)",
      "Vuur (Fire)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Tree-shaded Sierlijk bloemenbed (Graceful Flower Bed). Controleer daarna tijd en weer voordat je voor Larvesta wacht."
  },
  {
    "number": 184,
    "name": "Volcarona",
    "type": [
      "Insect (Bug)",
      "Vuur (Fire)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Tree-shaded Sierlijk bloemenbed (Graceful Flower Bed). Controleer daarna tijd en weer voordat je voor Volcarona wacht."
  },
  {
    "number": 185,
    "name": "Rowlet",
    "type": [
      "Gras (Grass)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Vers groenteveld (Fresh Veggie Field). Controleer daarna tijd en weer voordat je voor Rowlet wacht."
  },
  {
    "number": 186,
    "name": "Dartrix",
    "type": [
      "Gras (Grass)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Pointy tree-shaded rocky Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Dartrix wacht."
  },
  {
    "number": 187,
    "name": "Decidueye",
    "type": [
      "Gras (Grass)",
      "Geest (Ghost)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Pointy tree-shaded rocky Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Decidueye wacht."
  },
  {
    "number": 188,
    "name": "Scorbunny",
    "type": [
      "Vuur (Fire)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Red Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Scorbunny wacht."
  },
  {
    "number": 189,
    "name": "Raboot",
    "type": [
      "Vuur (Fire)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Open-air bath. Controleer daarna tijd en weer voordat je voor Raboot wacht."
  },
  {
    "number": 190,
    "name": "Cinderace",
    "type": [
      "Vuur (Fire)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Red Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Cinderace wacht."
  },
  {
    "number": 191,
    "name": "Skwovet",
    "type": [
      "Normaal (Normal)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Tree-shaded  Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Skwovet wacht."
  },
  {
    "number": 192,
    "name": "Greedent",
    "type": [
      "Normaal (Normal)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Chef's kitchen. Controleer daarna tijd en weer voordat je voor Greedent wacht."
  },
  {
    "number": 193,
    "name": "Rolycoly",
    "type": [
      "Steen (Rock)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Railroad crossing. Controleer daarna tijd en weer voordat je voor Rolycoly wacht."
  },
  {
    "number": 194,
    "name": "Carkol",
    "type": [
      "Steen (Rock)",
      "Vuur (Fire)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Railroad crossing. Controleer daarna tijd en weer voordat je voor Carkol wacht."
  },
  {
    "number": 195,
    "name": "Coalossal",
    "type": [
      "Steen (Rock)",
      "Vuur (Fire)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Railroad crossing. Controleer daarna tijd en weer voordat je voor Coalossal wacht."
  },
  {
    "number": 196,
    "name": "Toxel",
    "type": [
      "Elektrisch (Electric)",
      "Gif (Poison)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Lazy-photo album scrolling. Controleer daarna tijd en weer voordat je voor Toxel wacht."
  },
  {
    "number": 197,
    "name": "Toxtricity",
    "type": [
      "Elektrisch (Electric)",
      "Gif (Poison)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Amped rock stage. Controleer daarna tijd en weer voordat je voor Toxtricity wacht."
  },
  {
    "number": 198,
    "name": "Fidough",
    "type": [
      "Fee (Fairy)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Sierlijk bloemenbed (Graceful Flower Bed). Controleer daarna tijd en weer voordat je voor Fidough wacht."
  },
  {
    "number": 199,
    "name": "Dachsbun",
    "type": [
      "Fee (Fairy)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Sierlijk bloemenbed (Graceful Flower Bed). Controleer daarna tijd en weer voordat je voor Dachsbun wacht."
  },
  {
    "number": 200,
    "name": "Charcadet",
    "type": [
      "Vuur (Fire)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Piping-hot lava. Controleer daarna tijd en weer voordat je voor Charcadet wacht."
  },
  {
    "number": 201,
    "name": "Armarouge",
    "type": [
      "Vuur (Fire)",
      "Psychisch (Psychic)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Auspicious knight's shrine. Controleer daarna tijd en weer voordat je voor Armarouge wacht."
  },
  {
    "number": 202,
    "name": "Ceruledge",
    "type": [
      "Vuur (Fire)",
      "Geest (Ghost)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Malicious knight's shrine. Controleer daarna tijd en weer voordat je voor Ceruledge wacht."
  },
  {
    "number": 203,
    "name": "Glimmet",
    "type": [
      "Steen (Rock)",
      "Gif (Poison)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Creepy white rocks. Controleer daarna tijd en weer voordat je voor Glimmet wacht."
  },
  {
    "number": 204,
    "name": "Glimmora",
    "type": [
      "Steen (Rock)",
      "Gif (Poison)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Creepy white rocks. Controleer daarna tijd en weer voordat je voor Glimmora wacht."
  },
  {
    "number": 205,
    "name": "Gimmighoul",
    "type": [
      "Geest (Ghost)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Mini museum. Controleer daarna tijd en weer voordat je voor Gimmighoul wacht."
  },
  {
    "number": 206,
    "name": "Gholdengo",
    "type": [
      "Staal (Steel)",
      "Geest (Ghost)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Absolute luxury. Controleer daarna tijd en weer voordat je voor Gholdengo wacht."
  },
  {
    "number": 207,
    "name": "Vulpix",
    "type": [
      "Vuur (Fire)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Fluffy flower bed. Controleer daarna tijd en weer voordat je voor Vulpix wacht."
  },
  {
    "number": 208,
    "name": "Ninetales",
    "type": [
      "Vuur (Fire)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Fluffy flower bed. Controleer daarna tijd en weer voordat je voor Ninetales wacht."
  },
  {
    "number": 209,
    "name": "Poliwag",
    "type": [
      "Water (Water)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Squeaky clean. Controleer daarna tijd en weer voordat je voor Poliwag wacht."
  },
  {
    "number": 210,
    "name": "Poliwhirl",
    "type": [
      "Water (Water)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Hydrated fluffy flower bed. Controleer daarna tijd en weer voordat je voor Poliwhirl wacht."
  },
  {
    "number": 211,
    "name": "Poliwrath",
    "type": [
      "Water (Water)",
      "Vecht (Fighting)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Sewer hole inspection. Controleer daarna tijd en weer voordat je voor Poliwrath wacht."
  },
  {
    "number": 212,
    "name": "Politoed",
    "type": [
      "Water (Water)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Hydrated Sierlijk bloemenbed (Graceful Flower Bed). Controleer daarna tijd en weer voordat je voor Politoed wacht."
  },
  {
    "number": 213,
    "name": "Abra",
    "type": [
      "Psychisch (Psychic)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Surging psychic power. Controleer daarna tijd en weer voordat je voor Abra wacht."
  },
  {
    "number": 214,
    "name": "Kadabra",
    "type": [
      "Psychisch (Psychic)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Fortune-teller's table. Controleer daarna tijd en weer voordat je voor Kadabra wacht."
  },
  {
    "number": 215,
    "name": "Alakazam",
    "type": [
      "Psychisch (Psychic)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Surging psychic power. Controleer daarna tijd en weer voordat je voor Alakazam wacht."
  },
  {
    "number": 216,
    "name": "Mime Jr.",
    "type": [
      "Psychisch (Psychic)",
      "Fee (Fairy)"
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
    "tip": "Controleer eerst de habitat- en locatievoorwaarden voor Mime Jr. voordat je materialen uitgeeft."
  },
  {
    "number": 217,
    "name": "Mr. Mime",
    "type": [
      "Psychisch (Psychic)",
      "Fee (Fairy)"
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
    "tip": "Controleer eerst de habitat- en locatievoorwaarden voor Mr. Mime voordat je materialen uitgeeft."
  },
  {
    "number": 218,
    "name": "Porygon",
    "type": [
      "Normaal (Normal)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Researcher's desk. Controleer daarna tijd en weer voordat je voor Porygon wacht."
  },
  {
    "number": 219,
    "name": "Porygon2",
    "type": [
      "Normaal (Normal)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Work desk. Controleer daarna tijd en weer voordat je voor Porygon2 wacht."
  },
  {
    "number": 220,
    "name": "Porygon-Z",
    "type": [
      "Normaal (Normal)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Game Corner battle zone. Controleer daarna tijd en weer voordat je voor Porygon-Z wacht."
  },
  {
    "number": 221,
    "name": "Dratini",
    "type": [
      "Draak (Dragon)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Hydrated fluffy flower bed. Controleer daarna tijd en weer voordat je voor Dratini wacht."
  },
  {
    "number": 222,
    "name": "Dragonair",
    "type": [
      "Draak (Dragon)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Hydrated fluffy flower bed. Controleer daarna tijd en weer voordat je voor Dragonair wacht."
  },
  {
    "number": 223,
    "name": "Dragonite",
    "type": [
      "Draak (Dragon)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Waterside dinghy. Controleer daarna tijd en weer voordat je voor Dragonite wacht."
  },
  {
    "number": 224,
    "name": "Cyndaquil",
    "type": [
      "Vuur (Fire)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Concrete pipe secret base. Controleer daarna tijd en weer voordat je voor Cyndaquil wacht."
  },
  {
    "number": 225,
    "name": "Quilava",
    "type": [
      "Vuur (Fire)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Concrete pipe secret base. Controleer daarna tijd en weer voordat je voor Quilava wacht."
  },
  {
    "number": 226,
    "name": "Typhlosion",
    "type": [
      "Vuur (Fire)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Fireplace nap spot. Controleer daarna tijd en weer voordat je voor Typhlosion wacht."
  },
  {
    "number": 227,
    "name": "Misdreavus",
    "type": [
      "Geest (Ghost)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Fluffy flower bed. Controleer daarna tijd en weer voordat je voor Misdreavus wacht."
  },
  {
    "number": 228,
    "name": "Mismagius",
    "type": [
      "Geest (Ghost)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Fluffy flower bed. Controleer daarna tijd en weer voordat je voor Mismagius wacht."
  },
  {
    "number": 229,
    "name": "Girafarig",
    "type": [
      "Normaal (Normal)",
      "Psychisch (Psychic)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Tree-shaded fluffy flower bed. Controleer daarna tijd en weer voordat je voor Girafarig wacht."
  },
  {
    "number": 230,
    "name": "Farigiraf",
    "type": [
      "Normaal (Normal)",
      "Psychisch (Psychic)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Tree-shaded fluffy flower bed. Controleer daarna tijd en weer voordat je voor Farigiraf wacht."
  },
  {
    "number": 231,
    "name": "Ralts",
    "type": [
      "Psychisch (Psychic)",
      "Fee (Fairy)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Studeerplek (Study Area). Controleer daarna tijd en weer voordat je voor Ralts wacht."
  },
  {
    "number": 232,
    "name": "Kirlia",
    "type": [
      "Psychisch (Psychic)",
      "Fee (Fairy)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Studeerplek (Study Area). Controleer daarna tijd en weer voordat je voor Kirlia wacht."
  },
  {
    "number": 233,
    "name": "Gardevoir",
    "type": [
      "Psychisch (Psychic)",
      "Fee (Fairy)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Moisturizing makeup stand. Controleer daarna tijd en weer voordat je voor Gardevoir wacht."
  },
  {
    "number": 234,
    "name": "Gallade",
    "type": [
      "Psychisch (Psychic)",
      "Vecht (Fighting)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Dojo training. Controleer daarna tijd en weer voordat je voor Gallade wacht."
  },
  {
    "number": 235,
    "name": "Plusle",
    "type": [
      "Elektrisch (Electric)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Picturesque photo cutout board. Controleer daarna tijd en weer voordat je voor Plusle wacht."
  },
  {
    "number": 236,
    "name": "Minun",
    "type": [
      "Elektrisch (Electric)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Picturesque photo cutout board. Controleer daarna tijd en weer voordat je voor Minun wacht."
  },
  {
    "number": 237,
    "name": "Trapinch",
    "type": [
      "Grond (Ground)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Pink Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Trapinch wacht."
  },
  {
    "number": 238,
    "name": "Vibrava",
    "type": [
      "Grond (Ground)",
      "Draak (Dragon)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Pink Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Vibrava wacht."
  },
  {
    "number": 239,
    "name": "Flygon",
    "type": [
      "Grond (Ground)",
      "Draak (Dragon)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Pink Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Flygon wacht."
  },
  {
    "number": 240,
    "name": "Swablu",
    "type": [
      "Normaal (Normal)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Pink Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Swablu wacht."
  },
  {
    "number": 241,
    "name": "Altaria",
    "type": [
      "Draak (Dragon)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Birdsong garden. Controleer daarna tijd en weer voordat je voor Altaria wacht."
  },
  {
    "number": 242,
    "name": "Duskull",
    "type": [
      "Geest (Ghost)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Pink Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Duskull wacht."
  },
  {
    "number": 243,
    "name": "Dusclops",
    "type": [
      "Geest (Ghost)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Trash site TV. Controleer daarna tijd en weer voordat je voor Dusclops wacht."
  },
  {
    "number": 244,
    "name": "Dusknoir",
    "type": [
      "Geest (Ghost)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Trash site TV. Controleer daarna tijd en weer voordat je voor Dusknoir wacht."
  },
  {
    "number": 245,
    "name": "Beldum",
    "type": [
      "Staal (Steel)",
      "Psychisch (Psychic)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Cycling rest stop. Controleer daarna tijd en weer voordat je voor Beldum wacht."
  },
  {
    "number": 246,
    "name": "Metang",
    "type": [
      "Staal (Steel)",
      "Psychisch (Psychic)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Professor's apprentice program. Controleer daarna tijd en weer voordat je voor Metang wacht."
  },
  {
    "number": 247,
    "name": "Metagross",
    "type": [
      "Staal (Steel)",
      "Psychisch (Psychic)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Gamer's paradise. Controleer daarna tijd en weer voordat je voor Metagross wacht."
  },
  {
    "number": 248,
    "name": "Snivy",
    "type": [
      "Gras (Grass)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Speelpark (Playland). Controleer daarna tijd en weer voordat je voor Snivy wacht."
  },
  {
    "number": 249,
    "name": "Servine",
    "type": [
      "Gras (Grass)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Tree-shaded fluffy flower bed. Controleer daarna tijd en weer voordat je voor Servine wacht."
  },
  {
    "number": 250,
    "name": "Serperior",
    "type": [
      "Gras (Grass)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Tree-shaded fluffy flower bed. Controleer daarna tijd en weer voordat je voor Serperior wacht."
  },
  {
    "number": 251,
    "name": "Froakie",
    "type": [
      "Water (Water)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Hydrated pink Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Froakie wacht."
  },
  {
    "number": 252,
    "name": "Frogadier",
    "type": [
      "Water (Water)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Hydrated pink Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Frogadier wacht."
  },
  {
    "number": 253,
    "name": "Greninja",
    "type": [
      "Water (Water)",
      "Duister (Dark)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Hydrated pink Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Greninja wacht."
  },
  {
    "number": 254,
    "name": "Dedenne",
    "type": [
      "Elektrisch (Electric)",
      "Fee (Fairy)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Bandenpark (Tire Park). Controleer daarna tijd en weer voordat je voor Dedenne wacht."
  },
  {
    "number": 255,
    "name": "Noibat",
    "type": [
      "Vliegend (Flying)",
      "Draak (Dragon)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Rhythmic Living room. Controleer daarna tijd en weer voordat je voor Noibat wacht."
  },
  {
    "number": 256,
    "name": "Noivern",
    "type": [
      "Vliegend (Flying)",
      "Draak (Dragon)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Rhythmic Living room. Controleer daarna tijd en weer voordat je voor Noivern wacht."
  },
  {
    "number": 257,
    "name": "Rookidee",
    "type": [
      "Vliegend (Flying)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Fluffy flower bed. Controleer daarna tijd en weer voordat je voor Rookidee wacht."
  },
  {
    "number": 258,
    "name": "Corvisquire",
    "type": [
      "Vliegend (Flying)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Elevated pink Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Corvisquire wacht."
  },
  {
    "number": 259,
    "name": "Corviknight",
    "type": [
      "Vliegend (Flying)",
      "Staal (Steel)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Elevated pink Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Corviknight wacht."
  },
  {
    "number": 260,
    "name": "Dreepy",
    "type": [
      "Draak (Dragon)",
      "Geest (Ghost)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Tree-shaded pink Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Dreepy wacht."
  },
  {
    "number": 261,
    "name": "Drakloak",
    "type": [
      "Draak (Dragon)",
      "Geest (Ghost)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Tree-shaded pink Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Drakloak wacht."
  },
  {
    "number": 262,
    "name": "Dragapult",
    "type": [
      "Draak (Dragon)",
      "Geest (Ghost)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Office storeroom. Controleer daarna tijd en weer voordat je voor Dragapult wacht."
  },
  {
    "number": 263,
    "name": "Sprigatito",
    "type": [
      "Gras (Grass)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Tree-shaded pink Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Sprigatito wacht."
  },
  {
    "number": 264,
    "name": "Floragato",
    "type": [
      "Gras (Grass)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Interrogation desk. Controleer daarna tijd en weer voordat je voor Floragato wacht."
  },
  {
    "number": 265,
    "name": "Meowscarada",
    "type": [
      "Gras (Grass)",
      "Duister (Dark)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Heart-pounding surprise box. Controleer daarna tijd en weer voordat je voor Meowscarada wacht."
  },
  {
    "number": 266,
    "name": "Wattrel",
    "type": [
      "Elektrisch (Electric)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Elevated pink Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Wattrel wacht."
  },
  {
    "number": 267,
    "name": "Kilowattrel",
    "type": [
      "Elektrisch (Electric)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Elevated pink Hoog gras (Tall Grass). Controleer daarna tijd en weer voordat je voor Kilowattrel wacht."
  },
  {
    "number": 268,
    "name": "Tinkatink",
    "type": [
      "Fee (Fairy)",
      "Staal (Steel)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Large luggage carrier. Controleer daarna tijd en weer voordat je voor Tinkatink wacht."
  },
  {
    "number": 269,
    "name": "Tinkatuff",
    "type": [
      "Fee (Fairy)",
      "Staal (Steel)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Large luggage carrier. Controleer daarna tijd en weer voordat je voor Tinkatuff wacht."
  },
  {
    "number": 270,
    "name": "Tinkaton",
    "type": [
      "Fee (Fairy)",
      "Staal (Steel)"
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
    "tip": "Begin in Fonkelende hemellanden (Sparkling Skylands) en maak eerst Oversized dumping ground. Controleer daarna tijd en weer voordat je voor Tinkaton wacht."
  },
  {
    "number": 271,
    "name": "Aerodactyl",
    "type": [
      "Steen (Rock)",
      "Vliegend (Flying)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Vleugelfossiel-display (Wing Fossil Display). Controleer daarna tijd en weer voordat je voor Aerodactyl wacht."
  },
  {
    "number": 272,
    "name": "Cranidos",
    "type": [
      "Steen (Rock)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Skull Fossil display. Controleer daarna tijd en weer voordat je voor Cranidos wacht."
  },
  {
    "number": 273,
    "name": "Rampardos",
    "type": [
      "Steen (Rock)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Headbutt Fossil display. Controleer daarna tijd en weer voordat je voor Rampardos wacht."
  },
  {
    "number": 274,
    "name": "Shieldon",
    "type": [
      "Steen (Rock)",
      "Staal (Steel)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Armor Fossil display. Controleer daarna tijd en weer voordat je voor Shieldon wacht."
  },
  {
    "number": 275,
    "name": "Bastiodon",
    "type": [
      "Steen (Rock)",
      "Staal (Steel)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Shield Fossil display. Controleer daarna tijd en weer voordat je voor Bastiodon wacht."
  },
  {
    "number": 276,
    "name": "Tyrunt",
    "type": [
      "Steen (Rock)",
      "Draak (Dragon)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Jaw Fossil display. Controleer daarna tijd en weer voordat je voor Tyrunt wacht."
  },
  {
    "number": 277,
    "name": "Tyrantrum",
    "type": [
      "Steen (Rock)",
      "Draak (Dragon)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Despot fossil display. Controleer daarna tijd en weer voordat je voor Tyrantrum wacht."
  },
  {
    "number": 278,
    "name": "Amaura",
    "type": [
      "Steen (Rock)",
      "IJs (Ice)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Sail Fossil display. Controleer daarna tijd en weer voordat je voor Amaura wacht."
  },
  {
    "number": 279,
    "name": "Aurorus",
    "type": [
      "Steen (Rock)",
      "IJs (Ice)"
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
    "tip": "Begin in Rotsachtige bergkammen (Rocky Ridges) en maak eerst Tundra fossil display. Controleer daarna tijd en weer voordat je voor Aurorus wacht."
  },
  {
    "number": 280,
    "name": "Eevee",
    "type": [
      "Normaal (Normal)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Mooi bloemenbed (Pretty Flower Bed). Controleer daarna tijd en weer voordat je voor Eevee wacht."
  },
  {
    "number": 281,
    "name": "Vaporeon",
    "type": [
      "Water (Water)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Boundless blue beverage. Controleer daarna tijd en weer voordat je voor Vaporeon wacht."
  },
  {
    "number": 282,
    "name": "Jolteon",
    "type": [
      "Elektrisch (Electric)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Electrifying potatoes. Controleer daarna tijd en weer voordat je voor Jolteon wacht."
  },
  {
    "number": 283,
    "name": "Flareon",
    "type": [
      "Vuur (Fire)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Burning-hot spice. Controleer daarna tijd en weer voordat je voor Flareon wacht."
  },
  {
    "number": 284,
    "name": "Espeon",
    "type": [
      "Psychisch (Psychic)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Elegant daytime treats. Controleer daarna tijd en weer voordat je voor Espeon wacht."
  },
  {
    "number": 285,
    "name": "Umbreon",
    "type": [
      "Duister (Dark)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Dark-chocolate cookies. Controleer daarna tijd en weer voordat je voor Umbreon wacht."
  },
  {
    "number": 286,
    "name": "Leafeon",
    "type": [
      "Gras (Grass)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Leafy greens sandwich. Controleer daarna tijd en weer voordat je voor Leafeon wacht."
  },
  {
    "number": 287,
    "name": "Glaceon",
    "type": [
      "IJs (Ice)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Chilly shaved ice. Controleer daarna tijd en weer voordat je voor Glaceon wacht."
  },
  {
    "number": 288,
    "name": "Sylveon",
    "type": [
      "Fee (Fairy)"
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
    "tip": "Begin in Palette Town (Palette Town) en maak eerst Lovely ribbon cake. Controleer daarna tijd en weer voordat je voor Sylveon wacht."
  },
  {
    "number": 289,
    "name": "Kyogre",
    "type": [
      "Water (Water)"
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
    "tip": "Behandel Kyogre als een verhaalontmoeting, niet als een gewone habitat-spawn."
  },
  {
    "number": 290,
    "name": "Raikou",
    "type": [
      "Elektrisch (Electric)"
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
    "tip": "Zorg dat je de Pikachu Doll bij je hebt voordat je specifiek voor Raikou naar Droomeiland (Dream Island) gaat."
  },
  {
    "number": 291,
    "name": "Entei",
    "type": [
      "Vuur (Fire)"
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
    "tip": "Neem de Arcanine Doll mee als Entei je doel is; zonder die speciale methode is dit geen normale habitat-spawn."
  },
  {
    "number": 292,
    "name": "Suicune",
    "type": [
      "Water (Water)"
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
    "tip": "Ga pas gericht voor Suicune zodra je de Eevee Doll hebt."
  },
  {
    "number": 293,
    "name": "Volcanion",
    "type": [
      "Vuur (Fire)",
      "Water (Water)"
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
    "tip": "Zoek Volcanion niet via gewone habitats; richt je op de speciale Party-voorwaarde in Rotsachtige bergkammen (Rocky Ridges)."
  },
  {
    "number": 294,
    "name": "Articuno",
    "type": [
      "IJs (Ice)",
      "Vliegend (Flying)"
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
    "tip": "Haal eerst de Freezing Chambers-kit; Articuno is geen normale habitat-spawn."
  },
  {
    "number": 295,
    "name": "Zapdos",
    "type": [
      "Elektrisch (Electric)",
      "Vliegend (Flying)"
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
    "tip": "Bouw eerst de Abandoned Power Plant voordat je tijd steekt in het zoeken naar Zapdos."
  },
  {
    "number": 296,
    "name": "Moltres",
    "type": [
      "Vuur (Fire)",
      "Vliegend (Flying)"
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
    "tip": "Moltres vraagt om de Altar of Flame; behandel hem dus niet als een gewone habitat-Pokémon."
  },
  {
    "number": 297,
    "name": "Ho-Oh",
    "type": [
      "Vuur (Fire)",
      "Vliegend (Flying)"
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
    "tip": "Gebruik de Heldere bel (Clear Bell) om Ho-Oh te ontmoeten."
  },
  {
    "number": 298,
    "name": "Lugia",
    "type": [
      "Psychisch (Psychic)",
      "Vliegend (Flying)"
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
    "tip": "Gebruik de Getijdenbel (Tidal Bell) om Lugia te ontmoeten."
  },
  {
    "number": 299,
    "name": "Mewtwo",
    "type": [
      "Psychisch (Psychic)"
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
    "tip": "Neem de Dragonite Doll mee als je specifiek voor Mewtwo naar Droomeiland (Dream Island) gaat."
  },
  {
    "number": 300,
    "name": "Mew",
    "type": [
      "Psychisch (Psychic)"
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
    "tip": "Zoek eerst alle Mysterieuze platen (Mysterious Slates). Mew is een puzzelbeloning en geen gewone habitat-spawn."
  }
];
