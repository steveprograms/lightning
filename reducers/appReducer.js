import fs from 'fs';
import defaults from '../assets/data/defaultStats';
import { parseDataFile } from '../views/helpers';
import {
  ADD_NANOBUCK,
  CHANGE_SELECTED_PLANET,
  SET_DESTINATION,
  SET_CURRENT_PLANET,
  ASSIGN_GAME_DEFAULTS
} from "../assets/constants";

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
      destinationPlanet: action.planetId
    });
  }

  if (action.type === SET_CURRENT_PLANET) {
    return Object.assign({}, state, {
      currentPlanetId: action.planetId
    });
  }

  if (action.type === ASSIGN_GAME_DEFAULTS) {
    console.log('reducer me: ', defaults)
    return Object.assign({}, state, defaults);
  }

  return state;
};

export default appReducer;
