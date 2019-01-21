import {
  ADD_NANOBUCK,
  CHANGE_SELECTED_PLANET
} from "../assets/constants";

const initialState = {
  nanobucks: 25,
  selectedPlanetId: 'terra',
  currentPlanetId: 'terra',
};

function lightningReducer(state = initialState, action) {
  if (action.type === ADD_NANOBUCK) {
    return Object.assign({}, state, {
      nanobucks: (state.nanobucks + 1)
    });
  }

  if (action.type === CHANGE_SELECTED_PLANET) {
    return Object.assign({}, state, {
      selectedPlanetId: action.planet
    });
  }
  return state;
};


export default lightningReducer;
