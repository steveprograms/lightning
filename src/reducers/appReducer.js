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
  BUY_ITEMS
} from "../data/constants";

let data = parseDataFile();

const initialState = data.gameInitialized ? data : defaults;

function appReducer(state = initialState, action) {
  if (action.type === CHANGE_SELECTED_PLANET) {
    return {
      ...state,
      selectedPlanetId: action.planetId
    };
  }

  if (action.type === SET_DESTINATION) {
    return {
      ...state,
      destinationPlanet: action.planetId,
      fuel: (state.fuel - action.fuelToBeUsed),
    };
  }

  if (action.type === SET_CURRENT_PLANET) {
    return {
      ...state,
      currentPlanetId: action.planetId
    };
  }

  if (action.type === REFILL_FUEL) {
    return {
      ...state,
      fuel: (action.fuelNeeded + state.fuel),
      dollars: (state.dollars - action.cost),
    };
  }

  if (action.type === BUY_ITEMS) {
    return {
      ...state,
      dollars: (state.dollars - action.buyPrice),
      inventory: {
        ...state.inventory,
        [action.itemName]: {
          ...state.inventory[action.itemName],
          quantity: (state.inventory[action.itemName].quantity + action.buyQuantity),
        },
      },
      merchants: {
        ...state.merchants,
        [action.currentPlanetId]: {
          ...state.merchants[action.currentPlanetId],
          [action.itemName]: {
            ...state.merchants[action.currentPlanetId][action.itemName],
            quantity: (state.merchants[action.currentPlanetId][action.itemName].quantity - action.buyQuantity),
          },
        },
      },
    };
  }

  if (action.type === ASSIGN_GAME_DEFAULTS) {
    return Object.assign({}, state, defaults);
  }

  return state;
};

export default appReducer;
