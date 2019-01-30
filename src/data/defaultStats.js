var defaults = {
  gameInitialized: false,
  dollars: 1000,
  selectedPlanetId: 'terra',
  currentPlanetId: 'terra',
  destinationPlanet: null,
  username: 'Captain Beefheart',
  level: 1,
  xp: 1,
  shipModel: 'The Baby Destroyer',
  shipMake: 'Lazer Products Corporation',
  shipHoldLimit: 10,
  inventory: [
    { name: 'water', quantity: 8 },
    { name: 'gold', quantity: 3 },
    { name: 'antibiotics', quantity: 12 },
  ],
  crew: [],
  fuelCapacity: 20,
  fuel: 20,
  daysPassed: 0,
  merchants: {
    terra: {
      inventory: [
        { name: 'narcotics', quantity: 40 },
        { name: 'furs', quantity: 6 },
        { name: 'seeds', quantity: 21 },
      ],
      prices: {
        narcotics: 100,
        furs: 2,
        seeds: 12,
      },
    }
  }
};

module.exports = defaults;
