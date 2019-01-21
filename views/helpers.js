let fs = require('fs')

export function save(data) {
  fs.writeFileSync('./assets/data/user-data.json', JSON.stringify(data));
}

export function read() {
  return JSON.parse(fs.readFileSync('./assets/data/user-data.json'));
}

export function planet_music(planet){

  //To Do:
  // * turn existing sound off first
  // * figure out how to import into saveFileExists.js

  var audio = new Audio(`./assets/audio/${planet}.wav`);
  audio.loop = true;
  audio.play();
}

export function distanceBetweenPlanets(planet1, planet2) {
  let x_distance = Math.abs(planet1.x_coord - planet2.x_coord);
  let y_distance = Math.abs(planet1.y_coord - planet2.y_coord);
  return Math.round(Math.sqrt((x_distance * x_distance) + (y_distance * y_distance)));
}
