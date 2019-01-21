import {
  ADD_NANOBUCK,
  CHANGE_SELECTED_PLANET,
  SET_DESTINATION,
  SET_CURRENT_PLANET
} from "../assets/constants";

export function addNanoBuck() {
  return {
    type: ADD_NANOBUCK
  };
};

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
