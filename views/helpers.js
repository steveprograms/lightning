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
