import {
  CHANGE_SELECTED_PLANET,
  SET_DESTINATION,
  SET_CURRENT_PLANET,
  ASSIGN_GAME_DEFAULTS,
  REFILL_FUEL,
  TOGGLE_MUSIC,
} from "../data/constants";

export function changeSelectedPlanet(planetId) {
  return {
    type: CHANGE_SELECTED_PLANET,
    planetId
  };
};

export function setDestination(planetId, fuelToBeUsed) {
  return {
    type: SET_DESTINATION,
    planetId,
    fuelToBeUsed,
  }
}

export function setCurrentPlanet(planetId) {
  return {
    type: SET_CURRENT_PLANET,
    planetId
  };
};

export function assignGameDefaults() {
  return {
    type: ASSIGN_GAME_DEFAULTS
  };
};

export function refillFuel(fuelNeeded, cost) {
  return {
    type: REFILL_FUEL,
    fuelNeeded,
    cost
  };
};

export function toggleMusic(){
  //console.log(toggle_value)
    return{
      type: TOGGLE_MUSIC
    }
/*  console.log(audioPath2[planet])
  //if toggle is True, we should stop music and set state.music to true
  if (toggle){
    //stop audio
  }else{
    //if audio not playing, play
    var audio = new Audio(audioPath2[planet]);
    audio.loop = true;
    audio.play();
*/
    //toggle state.music to true

};
