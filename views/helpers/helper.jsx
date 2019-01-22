let fs = require('fs');
let dataPath = '../assets/data/user-data.json';

export function save(data) {
  fs.writeFileSync('../assets/data/user-data.json', JSON.stringify(data));
}

export function read() {
  return JSON.parse(fs.readFileSync('../assets/data/user-data.json'));
}

export function planet_music(planet){

  //To Do:
  // * turn existing sound off first

  var audio = new Audio(`../assets/audio/${planet}.wav`);
  audio.loop = true;
  // audio.play();
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
    return JSON.parse(fs.readFileSync(dataPath));
  } catch(error) {
    fs.writeFileSync(dataPath, JSON.stringify(defaults));
    return defaults;
  }
}
