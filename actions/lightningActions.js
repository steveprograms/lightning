import {
  ADD_NANOBUCK,
  CHANGE_FOCUSED_PLANET
} from "../assets/constants";

export function addNanoBuck() {
  return {
    type: ADD_NANOBUCK
  };
};

export function changeFocusedPlanet(planet) {
  return {
    type: CHANGE_FOCUSED_PLANET,
    planet
  };
};
