import fs from 'fs';
import defaults from '../data/defaultStats';
import { parseDataFile } from '../components/helpers/helper';
import {
  ADD_NANOBUCK,
  CHANGE_SELECTED_PLANET,
  SET_DESTINATION,
  SET_CURRENT_PLANET,
  ASSIGN_GAME_DEFAULTS,
  REFILL_FUEL,
  TOGGLE_MUSIC
} from "../data/constants";

let data = parseDataFile();

const initialState = data.gameInitialized ? data : defaults;

function appReducer(state = initialState, action) {
  if (action.type === CHANGE_SELECTED_PLANET) {
    return Object.assign({}, state, {
      selectedPlanetId: action.planetId
    });
  }

  if (action.type === SET_DESTINATION) {
    return Object.assign({}, state, {
      destinationPlanet: action.planetId,
      fuel: (state.fuel - action.fuelToBeUsed),
    });
  }

  if (action.type === SET_CURRENT_PLANET) {
    return Object.assign({}, state, {
      currentPlanetId: action.planetId
    });
  }

  if (action.type === REFILL_FUEL) {
    return Object.assign({}, state, {
      fuel: (action.fuelNeeded + state.fuel),
      dollars: (state.dollars - action.cost),
    });
  }

  if (action.type === ASSIGN_GAME_DEFAULTS) {
    return Object.assign({}, state, defaults);
  }

  if (action.type === TOGGLE_MUSIC) {
    console.log('reducer')
    return Object.assign({}, state, {
      music: !state.music
    });
  }


  return state;
};

export default appReducer;
