import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../views/main.jsx';
let fs = require('fs');
const defaults = require('../assets/data/defaultStats');
const filePath = './assets/data/user-data.json';

function checkGameFile() {
  if (fs.existsSync(dataPath)) {
  } else {
    fs.writeFileSync(filePath, JSON.stringify(defaults));
  }
}

window.onload = function(){
  checkGameFile();
  ReactDOM.render(<Main />, document.getElementById('app'));
}
