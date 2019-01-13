let $ = require('jquery')
let fs = require('fs')
let util = require('util')
const repl = require('repl')
const path = require('path');
// const electron = require('electron');

// const userDataPath = (electron.app || electron.remote.app).getPath('userData');
const userDataPath = 'userData';
var opts = {
  configName: 'user-data',
  defaults: {}
};

// path where user data will be written to
this.path = path.join(userDataPath, opts.configName + '.json');

// returns the user data file, or if none exists, returns the defaults we specify
function parseDataFile() {
  try {
    return JSON.parse(fs.readFileSync(this.path));
  } catch(error) {
    return opts.defaults;
  }
}

function get(key) {
  return this.data[key];
}

function set(key, val) {
  this.data[key] = val;
  fs.writeFileSync(this.path, JSON.stringify(this.data));
}

this.data = parseDataFile();
console.log('User Data: ', this.data);

function new_game(){
  console.log('new_game click')
  fs.writeFileSync('userData/user-data.json', opts.defaults);

  // sets some random default data for new users
  set('username', 'Steve Jones');
  set('credits', 200)

  $('#user-info').html(this.data.username);
}

function existing_game(){
  // alert('load existing game clicked!')
  //load save file and load next window
}

function existing_game(){
  // alert('load existing game clicked!')
  //load save file and load next window
}

var StartNewGame_button = $('<input type="button" value="Start New Game" id="new_game_button"/>')
var ResumeGame_button = $('<input type="button" value="Resume Existing Game" id="existing_game_button"/>')
var LoadingScreen_button = $('<input type="button" value="Loading Screen" id="loading_screen_button"/>')


// ********** RUNTIME CODE ************
if(fs.existsSync(this.path)){
  console.log('Found an existing game')
  //Return buttons for Start new game and load saved game
  $("#start_game_buttons").append(StartNewGame_button)
  $("#start_game_buttons").append(ResumeGame_button)
  // $("#start_game_buttons").append(LoadingScreen_button)

  $("#new_game_button").click(function(){
    //load existing save file and load next browser window
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
  console.log('No existing game found')
  //Return button for Start new Game only
  $("#start_game_buttons").append(StartNewGame_button)

  $("#new_game_button").click(function(){
    //Create new file, load game screen (Page 2?)
    new_game()
  });
}
