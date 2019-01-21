import fs from 'fs';
let dataPath = './assets/data/user-data.json';

import defaults from '../assets/data/defaultStats';
const userDataPath = '../assets/data';
const opts = {
  configName: 'user-data',
  defaults: defaults,
};

let data = parseDataFile();

function parseDataFile() {
  try {
    return JSON.parse(fs.readFileSync(dataPath));
  } catch(error) {
    fs.writeFileSync(dataPath, JSON.stringify(opts.defaults));
    return opts.defaults;
  }
}

import {
  ADD_NANOBUCK,
  CHANGE_SELECTED_PLANET,
  SET_DESTINATION,
  SET_CURRENT_PLANET,
  ASSIGN_GAME_DEFAULTS
} from "../assets/constants";

const initialState = data.gameInitialized ?
data : {
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

  if (action.type === ASSIGN_GAME_DEFAULTS) {
    console.log('reducer me: ', defaults)
    return Object.assign({}, state, defaults);
  }

  return state;
};


export default lightningReducer;
