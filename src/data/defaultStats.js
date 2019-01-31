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
  },
  planetPrices: {
    terra: {
      narcotics: 100,
      furs: 2,
      seeds: 12,
      gold: 250,
      water: 5,
      antibiotics: 250,
    },
  },
};

module.exports = defaults;
