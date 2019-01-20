import {
  ADD_NANOBUCK,
  CHANGE_FOCUSED_PLANET
} from "../assets/constants";

const initialState = {
  nanobucks: 25,
  focusedPlanetName: 'Terra',
};

function lightningReducer(state = initialState, action) {
  if (action.type === ADD_NANOBUCK) {
    return Object.assign({}, state, {
      nanobucks: (state.nanobucks + 1)
    });
  }

  if (action.type === CHANGE_FOCUSED_PLANET) {
    return Object.assign({}, state, {
      focusedPlanetName: action.planet
    });
  }
  return state;
};


export default lightningReducer;
