var defaults = {
  gameInitialized: false,
  credits: 1000,
  selectedPlanetId: 'terra',
  currentPlanetId: 'terra',
  destinationPlanet: null,
  username: 'Captain Beefheart',
  level: 1,
  xp: 1,
  shipModel: 'The Baby Destroyer',
  shipMake: 'Lazer Products Corporation',
  shipHoldLimit: 10,
  playerInventory: {
    water: 8,
    gold: 3,
    antibiotics: 12,
    narcotics: 0,
    furs: 0,
    seeds: 0,
  },
  crew: [],
  fuelCapacity: 20,
  fuel: 20,
  daysPassed: 0,
  planetInventories: {
    terra: {
      narcotics: 40,
      furs: 6,
      seeds: 21,
      gold: 0,
      water: 0,
      antibiotics: 0,
    },
    mercurion: {
      narcotics: 4,
      furs: 2,
      seeds: 21,
      gold: 0,
      water: 6,
      antibiotics: 0,
    },
    orias: {
      narcotics: 4,
      furs: 6,
      seeds: 21,
      gold: 10,
      water: 100,
      antibiotics: 23,
    },
    rust: {
      narcotics: 20,
      furs: 6,
      seeds: 1,
      gold: 2,
      water: 0,
      antibiotics: 5,
    },
    k787: {
      narcotics: 40,
      furs: 6,
      seeds: 21,
      gold: 0,
      water: 0,
      antibiotics: 0,
    },
    sunspeared: {
      narcotics: 40,
      furs: 6,
      seeds: 21,
      gold: 0,
      water: 0,
      antibiotics: 0,
    },
    chindi: {
      narcotics: 40,
      furs: 6,
      seeds: 21,
      gold: 0,
      water: 0,
      antibiotics: 0,
    },
    omega: {
      narcotics: 40,
      furs: 6,
      seeds: 21,
      gold: 0,
      water: 0,
      antibiotics: 0,
    },
    ark: {
      narcotics: 40,
      furs: 6,
      seeds: 21,
      gold: 0,
      water: 0,
      antibiotics: 0,
    },
    aquaris: {
      narcotics: 40,
      furs: 6,
      seeds: 21,
      gold: 0,
      water: 0,
      antibiotics: 0,
    },
  },
  planetPrices: {
    terra: {
      narcotics: 100,
      furs: 2,
      seeds: 3,
      gold: 250,
      water: 6,
      antibiotics: 300,
    },
    mercurion: {
      narcotics: 100,
      furs: 2,
      seeds: 3,
      gold: 250,
      water: 6,
      antibiotics: 300,
    },
    orias: {
      narcotics: 300,
      furs: 6,
      seeds: 3,
      gold: 250,
      water: 6,
      antibiotics: 300,
    },
    rust: {
      narcotics: 600,
      furs: 2,
      seeds: 1,
      gold: 250,
      water: 6,
      antibiotics: 300,
    },
    k787: {
      narcotics: 50,
      furs: 2,
      seeds: 3,
      gold: 250,
      water: 6,
      antibiotics: 300,
    },
    sunspeared: {
      narcotics: 200,
      furs: 6,
      seeds: 3,
      gold: 250,
      water: 6,
      antibiotics: 300,
    },
    chindi: {
      narcotics: 100,
      furs: 10,
      seeds: 5,
      gold: 250,
      water: 6,
      antibiotics: 300,
    },
    omega: {
      narcotics: 100,
      furs: 2,
      seeds: 34,
      gold: 250,
      water: 6,
      antibiotics: 300,
    },
    ark: {
      narcotics: 100,
      furs: 6,
      seeds: 3,
      gold: 250,
      water: 6,
      antibiotics: 300,
    },
    aquaris: {
      narcotics: 100,
      furs: 2,
      seeds: 3,
      gold: 250,
      water: 6,
      antibiotics: 300,
    },
  },
};

module.exports = defaults;
