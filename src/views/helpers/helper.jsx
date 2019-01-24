import defaults from '../../assets/data/defaultStats';
let fs = require('fs');
import { filePath } from  '../../assets/constants';
import { audioPath } from  '../../assets/constants';

export function saveStateToFile(state) {
  fs.writeFileSync(filePath, JSON.stringify(state));
};

export function playPlanetMusic(planet){
  //To Do:
  // * turn existing sound off first
  var audio = new Audio(audioPath);
  audio.loop = true;
  audio.play();
}

export function distanceBetweenPlanets(planet1, planet2) {
  let xDistance = Math.abs(planet1.x_coord - planet2.x_coord);
  let yDistance = Math.abs(planet1.y_coord - planet2.y_coord);
  let xSquared = Math.pow(xDistance, 2);
  let ySquared = Math.pow(yDistance, 2);
  let totalDistance = Math.sqrt(xSquared + ySquared);
  return Math.round(totalDistance);
}

export function parseDataFile() {
  try {
    return JSON.parse(fs.readFileSync(filePath));
  } catch(error) {
    fs.writeFileSync(filePath, JSON.stringify(defaults));
    return defaults;
  }
}
