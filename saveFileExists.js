let $ = require('jquery')
let fs = require('fs')

var StartNewGame_button = $('<input type="button" value="Start New Game"/>')
var ResumeGame_button = $('<input type="button" value="Resume Existing Game"/>')

if(fs.existsSync('lightning_save')){
  //Return buttons for Start new game and load saved game
  $("#start_game_buttons").append(StartNewGame_button)
  $("#start_game_buttons").append(ResumeGame_button)

  //alert('hells yes, saved game identified')
}else{
  //Return button for Start new Game only
  $("#start_game_buttons").append(StartNewGame_button)
//  alert('no saved game found, start new game')
}
