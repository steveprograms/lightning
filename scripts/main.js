import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../views/main.jsx';
import { HashRouter } from 'react-router-dom';
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
  ReactDOM.render((
    <HashRouter>
      <Main />
    </HashRouter>
  ), document.getElementById('app'));
}
