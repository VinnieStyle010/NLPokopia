// NLPokopia - Event Pokédex #001 t/m #007
// Nederlands eerst; Engelse spelterm direct tussen haakjes.
// Exacte benodigdheden staan direct op iedere Pokémonkaart.
// event: true zorgt dat het Event-filter in app.js werkt.

const pokemonExtra = [
  {
    "number": 1,
    "name": "Hoppip",
    "type": [
      "Gras (Grass)",
      "Vliegend (Flying)"
    ],
    "game": "Pokémon Pokopia - Event Pokédex",
    "dlc": false,
    "event": true,
    "location": "Pokémon Center / Event Pokédex",
    "area": "Eventperiode (Event period): 10 maart t/m 25 maart 2026 | Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Geel bloementapijt (Yellow Carpet)",
    "obtainMethod": "Start het event Meer Sporen voor Hoppip (More Spores for Hoppip) en praat met Hoppip bij een herbouwd Pokémon Center. Daarna kun je Hoppip een thuis geven in het Gele bloementapijt (Yellow Carpet).",
    "requirements": "Geel bloementapijt (Yellow Carpet): Paardenbloemen (Dandy Flowers) ×4",
    "specialties": [
      "Groeien (Grow)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Skiploom",
    "tip": "Praat tijdens het event eerst met Hoppip bij het Pokémon Center. Voor een vaste woonplek is Geel bloementapijt (Yellow Carpet) de eenvoudigste keuze."
  },
  {
    "number": 2,
    "name": "Skiploom",
    "type": [
      "Gras (Grass)",
      "Vliegend (Flying)"
    ],
    "game": "Pokémon Pokopia - Event Pokédex",
    "dlc": false,
    "event": true,
    "location": "Eventhabitat",
    "area": "Eventperiode (Event period): 10 maart t/m 25 maart 2026 | Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Geel bloementapijt (Yellow Carpet) / Vrienden op excursie (Field-trip Friends)",
    "obtainMethod": "Bouw tijdens of na het event één van de geschikte eventhabitats. Vrienden op excursie (Field-trip Friends) geeft de beste gerichte kans op Skiploom.",
    "requirements": "Geel bloementapijt (Yellow Carpet): Paardenbloemen (Dandy Flowers) ×4 OF Vrienden op excursie (Field-trip Friends): Bloemenrugzak (Flower Backpack) ×1, Hoppip-waterfles (Hoppip Water Bottle) ×1, Lunchdoos (Lunch Box) ×1",
    "specialties": [
      "Groeien (Grow)"
    ],
    "evolvesFrom": "Hoppip",
    "evolvesInto": "Jumpluff",
    "tip": "Gebruik bij voorkeur Vrienden op excursie (Field-trip Friends); Skiploom verschijnt daar gemakkelijker dan bij alleen het Gele bloementapijt (Yellow Carpet)."
  },
  {
    "number": 3,
    "name": "Jumpluff",
    "type": [
      "Gras (Grass)",
      "Vliegend (Flying)"
    ],
    "game": "Pokémon Pokopia - Event Pokédex",
    "dlc": false,
    "event": true,
    "location": "Eventhabitat",
    "area": "Eventperiode (Event period): 10 maart t/m 25 maart 2026 | Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Geel bloementapijt (Yellow Carpet) / Paardenbloemen-lunch (Dandelion Lunchtime)",
    "obtainMethod": "Bouw tijdens of na het event één van de geschikte eventhabitats. Paardenbloemen-lunch (Dandelion Lunchtime) is de beste gerichte habitat voor Jumpluff.",
    "requirements": "Geel bloementapijt (Yellow Carpet): Paardenbloemen (Dandy Flowers) ×4 OF Paardenbloemen-lunch (Dandelion Lunchtime): Paardenbloemen (Dandy Flowers) ×1, Bloemenkussen (Flower Cushion) ×1, Lunchdoos (Lunch Box) ×1, Bloemig tafelservies (Flowery Table Setting) ×1",
    "specialties": [
      "Groeien (Grow)"
    ],
    "evolvesFrom": "Skiploom",
    "evolvesInto": "",
    "tip": "Bouw Paardenbloemen-lunch (Dandelion Lunchtime) als je specifiek Jumpluff wilt aantrekken. Het kan alsnog even duren voordat hij verschijnt."
  },
  {
    "number": 4,
    "name": "Sableye",
    "type": [
      "Duister (Dark)",
      "Geest (Ghost)"
    ],
    "game": "Pokémon Pokopia - Event Pokédex",
    "dlc": false,
    "event": true,
    "location": "Pokémon Center / Eventhabitat",
    "area": "Eventperiode (Event period): 29 april t/m 14 mei 2026 | Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Schatzoekersset (Treasure-hunting Set)",
    "obtainMethod": "Doe mee aan Sableye's edelstenenzoektocht (Sableye's Gem Hunt). Na het event kun je Sableye een thuis geven met de Schatzoekersset (Treasure-hunting Set).",
    "requirements": "Schatzoekersset (Treasure-hunting Set): Avonturenset (Adventure Kit) ×1, Kaart en kompas (Map and Compass) ×1, Schat (Treasure) ×1",
    "specialties": [
      "Enthousiasmeren (Hype)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "tip": "Verzamel tijdens het event eerst de eventvoorwerpen. Bouw daarna de Schatzoekersset (Treasure-hunting Set) zodat Sableye er na het event kan wonen."
  },
  {
    "number": 5,
    "name": "Jirachi",
    "type": [
      "Staal (Steel)",
      "Psychisch (Psychic)"
    ],
    "game": "Pokémon Pokopia - Event Pokédex",
    "dlc": false,
    "event": true,
    "location": "Pokémon Center / Eventhabitat",
    "area": "Eventperiode (Event period): 23 juni t/m 8 juli 2026 | Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Omringd door sterren (Surrounded by Stars)",
    "obtainMethod": "Doe mee aan Doe een wens met Jirachi (Wish Upon a Jirachi). Bouw daarna Omringd door sterren (Surrounded by Stars); Jirachi kan daar na afloop van het event verschijnen.",
    "requirements": "Omringd door sterren (Surrounded by Stars): Sterrenkast (Star Closet) ×1, Wolkentafel (Cloud Table) ×1, Sterrenhemelbed (Starry-sky Bed) ×1, Jirachi-lamp (Jirachi Lamp) ×1. Sluit de Jirachi-lamp aan op elektriciteit.",
    "specialties": [
      "Opruimen (Litter)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "tip": "Zorg dat de Jirachi-lamp (Jirachi Lamp) echt stroom krijgt; zonder elektriciteit is het leefgebied niet compleet."
  },
  {
    "number": 6,
    "name": "Feebas",
    "type": [
      "Water (Water)"
    ],
    "game": "Pokémon Pokopia - Event Pokédex",
    "dlc": false,
    "event": true,
    "location": "Pokémon Center / Eventhabitat",
    "area": "Eventperiode (Event period): 13 t/m 28 augustus 2026 | Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Spannend strand (Exciting Beach)",
    "obtainMethod": "Start Schubben zoeken voor Feebas (Fetching Scales for Feebas) bij een herbouwd Pokémon Center. Daarna kun je Feebas aantrekken met Spannend strand (Exciting Beach).",
    "requirements": "Spannend strand (Exciting Beach): Grote zwemband (Big Swim Ring) ×1, Zandbed (Sand Bed) ×1",
    "specialties": [
      "Water geven (Water)"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Milotic",
    "tip": "Begin tijdens het event bij het Pokémon Center. Voor een vaste habitat heb je maar twee onderdelen nodig voor Spannend strand (Exciting Beach), dus deze is snel te bouwen."
  },
  {
    "number": 7,
    "name": "Milotic",
    "type": [
      "Water (Water)"
    ],
    "game": "Pokémon Pokopia - Event Pokédex",
    "dlc": false,
    "event": true,
    "location": "Eventhabitat",
    "area": "Eventperiode (Event period): 13 t/m 28 augustus 2026 | Tijd (Time): Hele dag (All day) | Weer (Weather): Alle weersomstandigheden (All weather)",
    "habitat": "Maritieme vrijetijdsactiviteiten (Marine Leisure Activities)",
    "obtainMethod": "Verzamel tijdens Schubben zoeken voor Feebas (Fetching Scales for Feebas) de eventvoorwerpen en bouw daarna Maritieme vrijetijdsactiviteiten (Marine Leisure Activities) om Milotic aan te trekken.",
    "requirements": "Maritieme vrijetijdsactiviteiten (Marine Leisure Activities): Beachvolleybalset (Beach Volleyball Set) ×1, Koelbox (Cooler) ×1, Zwemband (Swim Ring) ×1",
    "specialties": [
      "Water geven (Water)",
      "Enthousiasmeren (Hype)"
    ],
    "evolvesFrom": "Feebas",
    "evolvesInto": "",
    "tip": "Bewaar de drie benodigde eventvoorwerpen voor Maritieme vrijetijdsactiviteiten (Marine Leisure Activities). Daarmee kun je Milotic gericht aantrekken."
  }
];
