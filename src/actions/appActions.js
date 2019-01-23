import {
  CHANGE_SELECTED_PLANET,
  SET_DESTINATION,
  SET_CURRENT_PLANET,
  ASSIGN_GAME_DEFAULTS
} from "../assets/constants";

export function changeSelectedPlanet(planetId) {
  return {
    type: CHANGE_SELECTED_PLANET,
    planetId
  };
};

export function setDestination(planetId) {
  return {
    type: SET_DESTINATION,
    planetId
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
