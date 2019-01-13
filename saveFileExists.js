let $ = require('jquery')
let fs = require('fs')

var StartNewGame_button = $('<input type="button" value="Start New Game" id="new_game_button"/>')
var ResumeGame_button = $('<input type="button" value="Resume Existing Game" id="existing_game_button"/>')

if(fs.existsSync('gamesave1.json')){
  //Return buttons for Start new game and load saved game
  $("#start_game_buttons").append(StartNewGame_button)
  $("#start_game_buttons").append(ResumeGame_button)

  $("#new_game_button").click(function(){
    //Create new file, load game screen
    new_game()
  })

  $("#existing_game_button").click(function(){
    //load existing save file and load next browser window
    existing_game()
  })

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
  
  fs.copyFile('gamesave.json', 'gamesave1.json', (err) => {
    if (err) throw err;
    console.log('new game file was copied to destination.txt');
  });
  //alert('new game clicked!')
  //create new save file and load next window

}

function existing_game(){
  alert('load existing game clicked!')
  //load save file and load next window

}
