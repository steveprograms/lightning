import {
  ADD_NANOBUCK,
  CHANGE_SELECTED_PLANET
} from "../assets/constants";

export function addNanoBuck() {
  return {
    type: ADD_NANOBUCK
  };
};

export function changeSelectedPlanet(planet) {
  return {
    type: CHANGE_SELECTED_PLANET,
    planet
  };
};
