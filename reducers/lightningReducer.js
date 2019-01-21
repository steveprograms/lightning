import {
  ADD_NANOBUCK,
  CHANGE_SELECTED_PLANET,
  SET_DESTINATION,
  SET_CURRENT_PLANET
} from "../assets/constants";

const initialState = {
  gameInitialized: false,
  nanobucks: 25,
  selectedPlanetId: 'terra',
  currentPlanetId: 'terra',
  destinationPlanet: null,
  username: 'Mr Bigglesworth',
  level: 1,
  xp: 1,
  shipModel: 'The Baby Destroyer',
  shipMake: 'Lazer Products Corporation',
};

function lightningReducer(state = initialState, action) {
  if (action.type === ADD_NANOBUCK) {
    return Object.assign({}, state, {
      nanobucks: (state.nanobucks + 1)
    });
  }

  if (action.type === CHANGE_SELECTED_PLANET) {
    return Object.assign({}, state, {
      selectedPlanetId: action.planetId
    });
  }

  if (action.type === SET_DESTINATION) {
    return Object.assign({}, state, {
      destinationPlanet: action.planetId
    });
  }

  if (action.type === SET_CURRENT_PLANET) {
    return Object.assign({}, state, {
      currentPlanetId: action.planetId
    });
  }
  return state;
};


export default lightningReducer;
