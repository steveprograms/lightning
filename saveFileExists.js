let $ = require('jquery')
let fs = require('fs')
let util = require('util')
const repl = require('repl')
const path = require('path');
const defaults = require('./assets/data/defaultStats');


const userDataPath = './assets/data';
const opts = {
  configName: 'user-data',
  defaults: defaults,
};

// path where user data will be written to
const dataPath = path.join(userDataPath, opts.configName + '.json');

const start = $('<input type="button" value="Start New Game" id="new_game_button"/>');
const resume = $('<input type="button" value="Resume Existing Game" id="existing_game_button"/>');
const home = $('<input type="button" value="Loading Screen" id="loading_screen_button"/>');
let data;

function parseDataFile() {
  try {
    return JSON.parse(fs.readFileSync(dataPath));
  } catch(error) {
    return opts.defaults;
  }
}

function get(key) {
  return data[key];
}

function set(key, val) {
  data[key] = val;
  fs.writeFileSync(dataPath, JSON.stringify(data));
}

function new_game(){
  opts.defaults.gameInitialized = true;
  fs.writeFileSync(dataPath, JSON.stringify(opts.defaults));
  existing_game();
}

function existing_game(){
  $("#container").remove();
  $('#app').css('display', 'block')

  var audio = new Audio('./assets/audio/earth.wav');
  audio.loop = true;
  audio.play();

}

// ********** RUNTIME CODE ************
// grabbing our json and loading it into memory as `data`
data = parseDataFile();

if(fs.existsSync(dataPath) && data.gameInitialized){
  $("#start_game_buttons").append(start)
  $("#start_game_buttons").append(resume)

  $("#new_game_button").click(function(){
    new_game();
  });

  $("#existing_game_button").click(function(){
    existing_game();
  });
}else{
  $("#start_game_buttons").append(start)

  $("#new_game_button").click(function(){
    new_game()
  });
}
// uncomment below to skip Main Menu screen
// existing_game()
