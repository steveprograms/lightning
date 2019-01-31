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
  BUY_ITEMS,
  SELL_ITEMS,
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
      credits: (state.credits - action.cost),
    };
  }

  if (action.type === BUY_ITEMS) {
    return {
      ...state,
      credits: (state.credits - action.buyPrice),
      playerInventory: {
        ...state.playerInventory,
        [action.itemName]: (state.playerInventory[action.itemName] + action.buyQuantity),
      },
      planetInventories: {
        ...state.planetInventories,
        [action.currentPlanetId]: {
          ...state.planetInventories[action.currentPlanetId],
          [action.itemName]: (state.planetInventories[action.currentPlanetId][action.itemName] - action.buyQuantity),
        },
      },
    };
  }

  if (action.type === SELL_ITEMS) {
    return {
      ...state,
      credits: (state.credits + action.sellPrice),
      playerInventory: {
        ...state.playerInventory,
        [action.itemName]: (state.playerInventory[action.itemName] - action.sellQuantity),
      },
      planetInventories: {
        ...state.planetInventories,
        [action.currentPlanetId]: {
          ...state.planetInventories[action.currentPlanetId],
          [action.itemName]: (state.planetInventories[action.currentPlanetId][action.itemName] + action.sellQuantity),
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
