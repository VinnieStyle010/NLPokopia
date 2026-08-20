// NLPokopia - Bubbly Basin DLC Pokédex #001 t/m #050
// 50 Pokémon, eigen DLC-Pokédex.
// Gebaseerd op de actuele Bubbly Basin Pokédex & Habitat Dex.
// Geen 'Mijn tip:' in de tiptekst; het label op de website is al 'Persoonlijke tip'.

const pokemonDLC = [
  {
    "number": 1,
    "name": "Shellder",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Basin Tall Grass & Coral / Sandy Digging Spot",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Basin Tall Grass & Coral / Sandy Digging Spot.",
    "requirements": "Basin Tall Grass & Coral: Seabed Tall Grass x4, Small Coral x1, Tall Coral x1 ; Sandy Digging Spot: Sandpile x1, Sand Toys x1",
    "specialties": [
      "Scrub",
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Cloyster",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Basin Tall Grass & Coral. Dat is de simpelste gerichte habitat om Shellder naar Bubbly Basin te lokken."
  },
  {
    "number": 2,
    "name": "Cloyster",
    "type": [
      "Water",
      "Ice"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Swaying Flower Bed & Seaweed",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Swaying Flower Bed & Seaweed.",
    "requirements": "Swaying Flower Bed & Seaweed: Chimney Rocks x1, Seabed Flowers x4, Lush Seaweed x2",
    "specialties": [
      "Scrub",
      "Litter"
    ],
    "evolvesFrom": "Shellder",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Swaying Flower Bed & Seaweed. Dat is de simpelste gerichte habitat om Cloyster naar Bubbly Basin te lokken."
  },
  {
    "number": 3,
    "name": "Horsea",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Coral Congregation",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Coral Congregation.",
    "requirements": "Coral Congregation: Colorful Corals x1, Tall Coral x1, Small Coral x1",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Seadra",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Coral Congregation. Dat is de simpelste gerichte habitat om Horsea naar Bubbly Basin te lokken."
  },
  {
    "number": 4,
    "name": "Seadra",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Coral Congregation",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Coral Congregation.",
    "requirements": "Coral Congregation: Colorful Corals x1, Tall Coral x1, Small Coral x1",
    "specialties": [
      "Water",
      "Litter"
    ],
    "evolvesFrom": "Horsea",
    "evolvesInto": "Kingdra",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Coral Congregation. Dat is de simpelste gerichte habitat om Seadra naar Bubbly Basin te lokken."
  },
  {
    "number": 5,
    "name": "Kingdra",
    "type": [
      "Water",
      "Dragon"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Marine Makeup Stand / Coral Congregation",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Marine Makeup Stand / Coral Congregation.",
    "requirements": "Marine Makeup Stand: Marine Closet x1, Marine Dresser x1, Marine Chair x1 ; Coral Congregation: Colorful Corals x1, Tall Coral x1, Small Coral x1",
    "specialties": [
      "Water",
      "Litter"
    ],
    "evolvesFrom": "Seadra",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Marine Makeup Stand. Dat is de simpelste gerichte habitat om Kingdra naar Bubbly Basin te lokken."
  },
  {
    "number": 6,
    "name": "Staryu",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: Nighttime | Weer: All weather",
    "habitat": "Swaying Flower Bed",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Swaying Flower Bed.",
    "requirements": "Swaying Flower Bed: Seabed Flowers x4",
    "specialties": [
      "Teleport"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Starmie",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Swaying Flower Bed. Dat is de simpelste gerichte habitat om Staryu naar Bubbly Basin te lokken."
  },
  {
    "number": 7,
    "name": "Starmie",
    "type": [
      "Water",
      "Psychic"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Mermaid's Gym",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Mermaid's Gym.",
    "requirements": "Mermaid's Gym: Marine Sofa x1, Pedestal / Exhibition Stand x6, Decorative Great Ball x1, Decorative Heal Ball x1, Decorative Dive Ball x1, Decorative Net Ball x1, Decorative Lure Ball x1, Decorative Quick Ball x1",
    "specialties": [
      "Teleport",
      "Gather"
    ],
    "evolvesFrom": "Staryu",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Mermaid's Gym. Dat is de simpelste gerichte habitat om Starmie naar Bubbly Basin te lokken."
  },
  {
    "number": 8,
    "name": "Totodile",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Basin Tall Grass / Canoe Dock / Bubbly Bathtub",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Basin Tall Grass / Canoe Dock / Bubbly Bathtub.",
    "requirements": "Basin Tall Grass: Seabed Tall Grass x4 ; Canoe Dock: Canoe x1, Floating Logs x2, Water x2 ; Bubbly Bathtub: Bathtub x1, Bubble Machine (lit) x1",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Croconaw",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Basin Tall Grass. Dat is de simpelste gerichte habitat om Totodile naar Bubbly Basin te lokken."
  },
  {
    "number": 9,
    "name": "Croconaw",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Chimney Rocks Dig Site",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Chimney Rocks Dig Site.",
    "requirements": "Chimney Rocks Dig Site: Chimney Rocks x1, Wheelbarrow x1, Excavation Tools x1, Traffic Cone x1",
    "specialties": [
      "Chop",
      "Crush"
    ],
    "evolvesFrom": "Totodile",
    "evolvesInto": "Feraligatr",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Chimney Rocks Dig Site. Dat is de simpelste gerichte habitat om Croconaw naar Bubbly Basin te lokken."
  },
  {
    "number": 10,
    "name": "Feraligatr",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Biteable Punching Bag / Basin Tall Grass",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Biteable Punching Bag / Basin Tall Grass.",
    "requirements": "Biteable Punching Bag: Sandpile x1, Punching Bag x1, Table (any) x1, Gold Teeth x1 ; Basin Tall Grass: Seabed Tall Grass x4",
    "specialties": [
      "Chop",
      "Crush"
    ],
    "evolvesFrom": "Croconaw",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Biteable Punching Bag. Dat is de simpelste gerichte habitat om Feraligatr naar Bubbly Basin te lokken."
  },
  {
    "number": 11,
    "name": "Chinchou",
    "type": [
      "Water",
      "Electric"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Fluffy Relaxation",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Fluffy Relaxation.",
    "requirements": "Fluffy Relaxation: Cushion Bed x1, Lighting (any) x1, Doll (any) x1",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Lanturn",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Fluffy Relaxation. Dat is de simpelste gerichte habitat om Chinchou naar Bubbly Basin te lokken."
  },
  {
    "number": 12,
    "name": "Lanturn",
    "type": [
      "Water",
      "Electric"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Nostalgia Zone",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Nostalgia Zone.",
    "requirements": "Nostalgia Zone: Antique Chest x1, Music Box x1, Photo Frame x1, Sea Moss x2, Wooden Crate x1, Lantern (lit) x1",
    "specialties": [
      "Generate",
      "Water"
    ],
    "evolvesFrom": "Chinchou",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Nostalgia Zone. Dat is de simpelste gerichte habitat om Lanturn naar Bubbly Basin te lokken."
  },
  {
    "number": 13,
    "name": "Corsola",
    "type": [
      "Water",
      "Rock"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Basin Tall Grass & Coral / Coral Congregation",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Basin Tall Grass & Coral / Coral Congregation.",
    "requirements": "Basin Tall Grass & Coral: Seabed Tall Grass x4, Small Coral x1, Tall Coral x1 ; Coral Congregation: Colorful Corals x1, Tall Coral x1, Small Coral x1",
    "specialties": [
      "Grow"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Basin Tall Grass & Coral. Dat is de simpelste gerichte habitat om Corsola naar Bubbly Basin te lokken."
  },
  {
    "number": 14,
    "name": "Mudkip",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Basin Tall Grass / Fluffy Relaxation",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Basin Tall Grass / Fluffy Relaxation.",
    "requirements": "Basin Tall Grass: Seabed Tall Grass x4 ; Fluffy Relaxation: Cushion Bed x1, Lighting (any) x1, Doll (any) x1",
    "specialties": [
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Marshtomp",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Basin Tall Grass. Dat is de simpelste gerichte habitat om Mudkip naar Bubbly Basin te lokken."
  },
  {
    "number": 15,
    "name": "Marshtomp",
    "type": [
      "Water",
      "Ground"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Muddy Playtime / Creepy Chimney Rocks",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Muddy Playtime / Creepy Chimney Rocks.",
    "requirements": "Muddy Playtime: Windup Inkay x1, Towel Rack x1, Floating Logs x1, Muddy Water x2 ; Creepy Chimney Rocks: Chimney Rocks x1, Sea Moss x4, Barrel x1, Lantern (lit) x1",
    "specialties": [
      "Water",
      "Build"
    ],
    "evolvesFrom": "Mudkip",
    "evolvesInto": "Swampert",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Muddy Playtime. Dat is de simpelste gerichte habitat om Marshtomp naar Bubbly Basin te lokken."
  },
  {
    "number": 16,
    "name": "Swampert",
    "type": [
      "Water",
      "Ground"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Muddy Spa / Basin Tall Grass & Coral",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Muddy Spa / Basin Tall Grass & Coral.",
    "requirements": "Muddy Spa: Seat (wide) x1, Gyarados Fountain x1, Bathtime Set x1, Muddy Water x2 ; Basin Tall Grass & Coral: Seabed Tall Grass x4, Small Coral x1, Tall Coral x1",
    "specialties": [
      "Build",
      "Bulldoze"
    ],
    "evolvesFrom": "Marshtomp",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Muddy Spa. Dat is de simpelste gerichte habitat om Swampert naar Bubbly Basin te lokken."
  },
  {
    "number": 17,
    "name": "Carvanha",
    "type": [
      "Water",
      "Dark"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Seaweed & Netting",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Seaweed & Netting.",
    "requirements": "Seaweed & Netting: Netting x4, Lush Seaweed x2",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Sharpedo",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Seaweed & Netting. Dat is de simpelste gerichte habitat om Carvanha naar Bubbly Basin te lokken."
  },
  {
    "number": 18,
    "name": "Sharpedo",
    "type": [
      "Water",
      "Dark"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Chimney Rocks Dig Site",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Chimney Rocks Dig Site.",
    "requirements": "Chimney Rocks Dig Site: Chimney Rocks x1, Wheelbarrow x1, Excavation Tools x1, Traffic Cone x1",
    "specialties": [
      "Crush",
      "Scrub"
    ],
    "evolvesFrom": "Carvanha",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Chimney Rocks Dig Site. Dat is de simpelste gerichte habitat om Sharpedo naar Bubbly Basin te lokken."
  },
  {
    "number": 19,
    "name": "Barboach",
    "type": [
      "Water",
      "Ground"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Ocean Rest Spot / Sandy Speech / Muddy Playtime",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Ocean Rest Spot / Sandy Speech / Muddy Playtime.",
    "requirements": "Ocean Rest Spot: Small Coral x1, Seashell Seat x1, Lampion x1 ; Sandy Speech: Sandpile x1, Table (any) x1, Tabletop Mic x1 ; Muddy Playtime: Windup Inkay x1, Towel Rack x1, Floating Logs x1, Muddy Water x2",
    "specialties": [
      "Search"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Whiscash",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Ocean Rest Spot. Dat is de simpelste gerichte habitat om Barboach naar Bubbly Basin te lokken."
  },
  {
    "number": 20,
    "name": "Whiscash",
    "type": [
      "Water",
      "Ground"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Gorgeous Sleeping Area",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Gorgeous Sleeping Area.",
    "requirements": "Gorgeous Sleeping Area: Ornate Partition x1, Ornate Bed x1, Ornate Stand x1",
    "specialties": [
      "Search",
      "Bulldoze"
    ],
    "evolvesFrom": "Barboach",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Gorgeous Sleeping Area. Dat is de simpelste gerichte habitat om Whiscash naar Bubbly Basin te lokken."
  },
  {
    "number": 21,
    "name": "Corphish",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Sandy Basin Tall Grass / Sandy Digging Spot",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Sandy Basin Tall Grass / Sandy Digging Spot.",
    "requirements": "Sandy Basin Tall Grass: Sandpile x1, Seabed Tall Grass x4 ; Sandy Digging Spot: Sandpile x1, Sand Toys x1",
    "specialties": [
      "Build"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Crawdaunt",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Sandy Basin Tall Grass. Dat is de simpelste gerichte habitat om Corphish naar Bubbly Basin te lokken."
  },
  {
    "number": 22,
    "name": "Crawdaunt",
    "type": [
      "Water",
      "Dark"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Sandy Digging Spot",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Sandy Digging Spot.",
    "requirements": "Sandy Digging Spot: Sandpile x1, Sand Toys x1",
    "specialties": [
      "Build",
      "Crush"
    ],
    "evolvesFrom": "Corphish",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Sandy Digging Spot. Dat is de simpelste gerichte habitat om Crawdaunt naar Bubbly Basin te lokken."
  },
  {
    "number": 23,
    "name": "Luvdisc",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Treasure Chest & Sparkling Jewels / Swaying Flower Bed & Coral / Fluffy Relaxation",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Treasure Chest & Sparkling Jewels / Swaying Flower Bed & Coral / Fluffy Relaxation.",
    "requirements": "Treasure Chest & Sparkling Jewels: Big Treasure Chest x1, Sparkling Jewelry x1, Lantern (lit) x1 ; Swaying Flower Bed & Coral: Colorful Corals x1, Seabed Flowers x4 ; Fluffy Relaxation: Cushion Bed x1, Lighting (any) x1, Doll (any) x1",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Treasure Chest & Sparkling Jewels. Dat is de simpelste gerichte habitat om Luvdisc naar Bubbly Basin te lokken."
  },
  {
    "number": 24,
    "name": "Buizel",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Smoothie-Making Spot / Basin Tall Grass",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Smoothie-Making Spot / Basin Tall Grass.",
    "requirements": "Smoothie-Making Spot: Blender x1, Plated Food x1, Table (any) x1 ; Basin Tall Grass: Seabed Tall Grass x4",
    "specialties": [
      "Chop",
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Floatzel",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Smoothie-Making Spot. Dat is de simpelste gerichte habitat om Buizel naar Bubbly Basin te lokken."
  },
  {
    "number": 25,
    "name": "Floatzel",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Marine Shop",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Marine Shop.",
    "requirements": "Marine Shop: Cash Register (lit) x1, Table (any) x2, Water x1",
    "specialties": [
      "Trade",
      "Build"
    ],
    "evolvesFrom": "Buizel",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Marine Shop. Dat is de simpelste gerichte habitat om Floatzel naar Bubbly Basin te lokken."
  },
  {
    "number": 26,
    "name": "Finneon",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Marine Mossy Rest Spot / Swaying Flower Bed",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Marine Mossy Rest Spot / Swaying Flower Bed.",
    "requirements": "Marine Mossy Rest Spot: Sea Moss x4 ; Swaying Flower Bed: Seabed Flowers x4",
    "specialties": [
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Lumineon",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Marine Mossy Rest Spot. Dat is de simpelste gerichte habitat om Finneon naar Bubbly Basin te lokken."
  },
  {
    "number": 27,
    "name": "Lumineon",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Swaying Flower Bed & Seaweed / Marine Mossy Rest Spot",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Swaying Flower Bed & Seaweed / Marine Mossy Rest Spot.",
    "requirements": "Swaying Flower Bed & Seaweed: Chimney Rocks x1, Seabed Flowers x4, Lush Seaweed x2 ; Marine Mossy Rest Spot: Sea Moss x4",
    "specialties": [
      "Hype",
      "Water"
    ],
    "evolvesFrom": "Finneon",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Swaying Flower Bed & Seaweed. Dat is de simpelste gerichte habitat om Lumineon naar Bubbly Basin te lokken."
  },
  {
    "number": 28,
    "name": "Frillish",
    "type": [
      "Water",
      "Ghost"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Ocean Treasures / Playing Sailor",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Ocean Treasures / Playing Sailor.",
    "requirements": "Ocean Treasures: Marine Chest x1, Bottled Ship x1, Sparkling Jewelry x1 ; Playing Sailor: Big Treasure Chest x1, Ship's Wheel x1, Wooden Crate x1, Bottled Ship x1",
    "specialties": [
      "Search",
      "Burn"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Jellicent",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Ocean Treasures. Dat is de simpelste gerichte habitat om Frillish naar Bubbly Basin te lokken."
  },
  {
    "number": 29,
    "name": "Jellicent",
    "type": [
      "Water",
      "Ghost"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Maritime Teatime",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Maritime Teatime.",
    "requirements": "Maritime Teatime: Chic Table x1, Chic Chair x2, Push Cart x1, Tea Set (any) x1, Bottled Ship x1",
    "specialties": [
      "Search",
      "Burn"
    ],
    "evolvesFrom": "Frillish",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Maritime Teatime. Dat is de simpelste gerichte habitat om Jellicent naar Bubbly Basin te lokken."
  },
  {
    "number": 30,
    "name": "Alomomola",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Ocean Treasures",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Ocean Treasures.",
    "requirements": "Ocean Treasures: Marine Chest x1, Bottled Ship x1, Sparkling Jewelry x1",
    "specialties": [
      "Water",
      "Scrub"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Ocean Treasures. Dat is de simpelste gerichte habitat om Alomomola naar Bubbly Basin te lokken."
  },
  {
    "number": 31,
    "name": "Stunfisk",
    "type": [
      "Ground",
      "Electric"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Swaying Flower Bed / Seaweed & Netting",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Swaying Flower Bed / Seaweed & Netting.",
    "requirements": "Swaying Flower Bed: Seabed Flowers x4 ; Seaweed & Netting: Netting x4, Lush Seaweed x2",
    "specialties": [
      "Generate",
      "Bulldoze"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Swaying Flower Bed. Dat is de simpelste gerichte habitat om Stunfisk naar Bubbly Basin te lokken."
  },
  {
    "number": 32,
    "name": "Inkay",
    "type": [
      "Dark",
      "Psychic"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Muddy Playtime",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Muddy Playtime.",
    "requirements": "Muddy Playtime: Windup Inkay x1, Towel Rack x1, Floating Logs x1, Muddy Water x2",
    "specialties": [
      "Gather",
      "Teleport"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Malamar",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Muddy Playtime. Dat is de simpelste gerichte habitat om Inkay naar Bubbly Basin te lokken."
  },
  {
    "number": 33,
    "name": "Malamar",
    "type": [
      "Dark",
      "Psychic"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Topsy-Turvy",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Topsy-Turvy.",
    "requirements": "Topsy-Turvy: Lampion x3",
    "specialties": [
      "Gather",
      "Teleport"
    ],
    "evolvesFrom": "Inkay",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Topsy-Turvy. Dat is de simpelste gerichte habitat om Malamar naar Bubbly Basin te lokken."
  },
  {
    "number": 34,
    "name": "Popplio",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Bubbly Stage / Swaying Flower Bed",
    "obtainMethod": "Praat met Popplio wanneer je de Bubbly Basin DLC start; Popplio helpt je de Basin Pokédex te ontgrendelen. Daarna kan Popplio ook via de vermelde habitats verschijnen.",
    "requirements": "Expansion Pass + Dive + Bleak Beach Environment Level 5 om Bubbly Basin te starten.",
    "specialties": [
      "Hype",
      "Water"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Brionne",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Praat eerst met Popplio bij de start van de DLC. Daarna kun je met Bubbly Stage gericht extra Popplio aantrekken."
  },
  {
    "number": 35,
    "name": "Brionne",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Bubbly Stage",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Bubbly Stage.",
    "requirements": "Bubbly Stage: Small Stage (lit) x1, Bubble Machine (lit) x2",
    "specialties": [
      "Hype",
      "Trade"
    ],
    "evolvesFrom": "Popplio",
    "evolvesInto": "Primarina",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Bubbly Stage. Dat is de simpelste gerichte habitat om Brionne naar Bubbly Basin te lokken."
  },
  {
    "number": 36,
    "name": "Primarina",
    "type": [
      "Water",
      "Fairy"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Elegant Concert",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Elegant Concert.",
    "requirements": "Elegant Concert: Harp x1, Marine Chair x1, Shell Lamp (lit) x2",
    "specialties": [
      "Hype",
      "Scrub"
    ],
    "evolvesFrom": "Brionne",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Elegant Concert. Dat is de simpelste gerichte habitat om Primarina naar Bubbly Basin te lokken."
  },
  {
    "number": 37,
    "name": "Mareanie",
    "type": [
      "Poison",
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Swaying Flower Bed & Coral",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Swaying Flower Bed & Coral.",
    "requirements": "Swaying Flower Bed & Coral: Colorful Corals x1, Seabed Flowers x4",
    "specialties": [
      "Recycle"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Toxapex",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Swaying Flower Bed & Coral. Dat is de simpelste gerichte habitat om Mareanie naar Bubbly Basin te lokken."
  },
  {
    "number": 38,
    "name": "Toxapex",
    "type": [
      "Poison",
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Treasure Chest & Sparkling Jewels",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Treasure Chest & Sparkling Jewels.",
    "requirements": "Treasure Chest & Sparkling Jewels: Big Treasure Chest x1, Sparkling Jewelry x1, Lantern (lit) x1",
    "specialties": [
      "Recycle",
      "Build"
    ],
    "evolvesFrom": "Mareanie",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Treasure Chest & Sparkling Jewels. Dat is de simpelste gerichte habitat om Toxapex naar Bubbly Basin te lokken."
  },
  {
    "number": 39,
    "name": "Wimpod",
    "type": [
      "Bug",
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Discarded Treasure",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Discarded Treasure.",
    "requirements": "Discarded Treasure: Big Treasure Chest x1, Waste Bin (any) x1, Garbage Bags x1",
    "specialties": [
      "Recycle"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Golisopod",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Discarded Treasure. Dat is de simpelste gerichte habitat om Wimpod naar Bubbly Basin te lokken."
  },
  {
    "number": 40,
    "name": "Golisopod",
    "type": [
      "Bug",
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Discarded Treasure / Swaying Flower Bed & Coral",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Discarded Treasure / Swaying Flower Bed & Coral.",
    "requirements": "Discarded Treasure: Big Treasure Chest x1, Waste Bin (any) x1, Garbage Bags x1 ; Swaying Flower Bed & Coral: Colorful Corals x1, Seabed Flowers x4",
    "specialties": [
      "Recycle",
      "Chop"
    ],
    "evolvesFrom": "Wimpod",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Discarded Treasure. Dat is de simpelste gerichte habitat om Golisopod naar Bubbly Basin te lokken."
  },
  {
    "number": 41,
    "name": "Bruxish",
    "type": [
      "Water",
      "Psychic"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Molten Mossy Rest Spot",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Molten Mossy Rest Spot.",
    "requirements": "Molten Mossy Rest Spot: Molten Rock x1, Sea Moss x4",
    "specialties": [
      "Gather",
      "Teleport"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Molten Mossy Rest Spot. Dat is de simpelste gerichte habitat om Bruxish naar Bubbly Basin te lokken."
  },
  {
    "number": 42,
    "name": "Dhelmise",
    "type": [
      "Ghost",
      "Grass"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Playing Sailor",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Playing Sailor.",
    "requirements": "Playing Sailor: Big Treasure Chest x1, Ship's Wheel x1, Wooden Crate x1, Bottled Ship x1",
    "specialties": [
      "Grow",
      "Litter"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Playing Sailor. Dat is de simpelste gerichte habitat om Dhelmise naar Bubbly Basin te lokken."
  },
  {
    "number": 43,
    "name": "Chewtle",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: Morning, Daytime, Evening | Weer: Not specified",
    "habitat": "Smoothie-Making Spot",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Smoothie-Making Spot.",
    "requirements": "Smoothie-Making Spot: Blender x1, Plated Food x1, Table (any) x1",
    "specialties": [
      "Chop"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Drednaw",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Smoothie-Making Spot. Dat is de simpelste gerichte habitat om Chewtle naar Bubbly Basin te lokken."
  },
  {
    "number": 44,
    "name": "Drednaw",
    "type": [
      "Water",
      "Rock"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: Morning, Daytime, Evening | Weer: Not specified",
    "habitat": "Canoe Dock",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Canoe Dock.",
    "requirements": "Canoe Dock: Canoe x1, Floating Logs x2, Water x2",
    "specialties": [
      "Crush",
      "Bulldoze"
    ],
    "evolvesFrom": "Chewtle",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Canoe Dock. Dat is de simpelste gerichte habitat om Drednaw naar Bubbly Basin te lokken."
  },
  {
    "number": 45,
    "name": "Pincurchin",
    "type": [
      "Electric"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Creepy Chimney Rocks",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Creepy Chimney Rocks.",
    "requirements": "Creepy Chimney Rocks: Chimney Rocks x1, Sea Moss x4, Barrel x1, Lantern (lit) x1",
    "specialties": [
      "Generate"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Creepy Chimney Rocks. Dat is de simpelste gerichte habitat om Pincurchin naar Bubbly Basin te lokken."
  },
  {
    "number": 46,
    "name": "Wiglett",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Sandy Speech",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Sandy Speech.",
    "requirements": "Sandy Speech: Sandpile x1, Table (any) x1, Tabletop Mic x1",
    "specialties": [
      "Bulldoze"
    ],
    "evolvesFrom": "",
    "evolvesInto": "Wugtrio",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Sandy Speech. Dat is de simpelste gerichte habitat om Wiglett naar Bubbly Basin te lokken."
  },
  {
    "number": 47,
    "name": "Wugtrio",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: All day | Weer: All weather",
    "habitat": "Glowing Stage For Three",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Glowing Stage For Three.",
    "requirements": "Glowing Stage For Three: Standing Mic x3, Wireless Power-Transmitter Post (lit) x3",
    "specialties": [
      "Bulldoze",
      "Search"
    ],
    "evolvesFrom": "Wiglett",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Glowing Stage For Three. Dat is de simpelste gerichte habitat om Wugtrio naar Bubbly Basin te lokken."
  },
  {
    "number": 48,
    "name": "Veluza",
    "type": [
      "Water",
      "Psychic"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Tijd: Morning, Daytime, Evening | Weer: Not specified",
    "habitat": "Marine Mossy Rest Spot",
    "obtainMethod": "Bouw één van deze Bubbly Basin-habitats: Marine Mossy Rest Spot.",
    "requirements": "Marine Mossy Rest Spot: Sea Moss x4",
    "specialties": [
      "Gather",
      "Teleport"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Begin met Marine Mossy Rest Spot. Dat is de simpelste gerichte habitat om Veluza naar Bubbly Basin te lokken."
  },
  {
    "number": 49,
    "name": "Phione",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Dream Island",
    "area": "Speciale methode; normale tijd- en weersvoorwaarden zijn niet van toepassing.",
    "habitat": "Geen normaal habitat",
    "obtainMethod": "Vind Phione via de Starmie Doll op Dream Island.",
    "requirements": "Starmie Doll.",
    "specialties": [
      "Trade"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Ga pas gericht voor Phione zodra je de Starmie Doll hebt; dit is geen gewone habitat-spawn."
  },
  {
    "number": 50,
    "name": "Manaphy",
    "type": [
      "Water"
    ],
    "game": "Pokémon Pokopia - Bubbly Basin DLC",
    "dlc": true,
    "location": "Bubbly Basin",
    "area": "Speciale methode; normale tijd- en weersvoorwaarden zijn niet van toepassing.",
    "habitat": "Geen normaal habitat",
    "obtainMethod": "Speel de Bubbly Basin-verhaallijn verder en voltooi de opdracht rond het bouwen van de Ocean Temple / Beautiful Building voor Popplio.",
    "requirements": "Vorder voldoende in de Bubbly Basin-hoofdopdrachten.",
    "specialties": [
      "Trade",
      "Hype"
    ],
    "evolvesFrom": "",
    "evolvesInto": "",
    "evolutionMethod": "Niet apart bevestigd voor Pokopia.",
    "tip": "Richt je op de hoofdverhaallijn van Bubbly Basin. Manaphy wordt via progressie vrijgespeeld en niet via een normaal habitat."
  }
];
