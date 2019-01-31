import {
  CHANGE_SELECTED_PLANET,
  SET_DESTINATION,
  SET_CURRENT_PLANET,
  ASSIGN_GAME_DEFAULTS,
  REFILL_FUEL,
  BUY_ITEMS,
} from "../data/constants";

export function changeSelectedPlanet(planetId) {
  return {
    type: CHANGE_SELECTED_PLANET,
    planetId
  };
};

export function setDestination(planetId, fuelToBeUsed) {
  return {
    type: SET_DESTINATION,
    planetId,
    fuelToBeUsed,
  }
}

export function setCurrentPlanet(planetId) {
  return {
    type: SET_CURRENT_PLANET,
    planetId
  };
};

export function assignGameDefaults() {
  return {
    type: ASSIGN_GAME_DEFAULTS
  };
};

export function refillFuel(fuelNeeded, cost) {
  return {
    type: REFILL_FUEL,
    fuelNeeded,
    cost
  };
};

export function buyItems(currentPlanetId, itemName, buyPrice, buyQuantity) {
  return {
    type: BUY_ITEMS,
    currentPlanetId,
    itemName,
    buyPrice,
    buyQuantity
  };
};
