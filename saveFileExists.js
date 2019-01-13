let $ = require('jquery')
let fs = require('fs')
let util = require('util')
const repl = require('repl')
const path = require('path');
const electron = require('electron');

const userDataPath = (electron.app || electron.remote.app).getPath('userData');
var opts = {configName: 'user-data'};

this.path = path.join(userDataPath, opts.configName + '.json');

var StartNewGame_button = $('<input type="button" value="Start New Game" id="new_game_button"/>')
var ResumeGame_button = $('<input type="button" value="Resume Existing Game" id="existing_game_button"/>')
var ResumeGame_button = $('<input type="button" value="Loading Screen" id="loading_screen_button"/>')

console.log('User Data: ', JSON.parse(fs.readFileSync(this.path)));

if(fs.existsSync('gamesave.json')){
  //Return buttons for Start new game and load saved game
  $("#start_game_buttons").append(StartNewGame_button)
  $("#start_game_buttons").append(ResumeGame_button)
  // $("#start_game_buttons").append(LoadingScreen_button)

  $("#new_game_button").click(function(){
    //Create new file, load game screen
    new_game();
  });

  $("#existing_game_button").click(function(){
    //load existing save file and load next browser window
    existing_game();
  });

  $("#loading_screen").click(function(){
    //load existing save file and load next browser window
    loading_screen();
  });

}else{
  //Return button for Start new Game only
  $("#start_game_buttons").append(StartNewGame_button)

  $("#new_game_button").click(function(){
    //Create new file, load game screen (Page 2?)
    new_game()
    })
}

// make a separate function for loading next window?
function new_game(){
  //alert('new game clicked!')
  //create new save file and load next window
  this.data = parseDataFile(this.path, opts.defaults);
  set('username', 'Steve Jones');
  $('#user-info').html(this.data.username);
}

function get(key) {
  return this.data[key];
}

function set(key, val) {
  this.data[key] = val;
  fs.writeFileSync(this.path, JSON.stringify(this.data));
}

function parseDataFile(filePath, defaults) {
  try {
    return JSON.parse(fs.readFileSync(filePath));
  } catch(error) {
    return defaults;
  }
}

function existing_game(){
  // alert('load existing game clicked!')
  //load save file and load next window

}

function existing_game(){
  // alert('load existing game clicked!')
  //load save file and load next window

}
