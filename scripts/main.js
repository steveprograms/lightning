import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../views/main.jsx';
import { HashRouter } from 'react-router-dom';
let fs = require('fs');
const defaults = require('../assets/data/defaultStats');
const filePath = './assets/data/user-data.json';
import { createStore } from 'redux';
import lightningApp from '../reducers/lightningReducer';
import { Provider } from 'react-redux';

function checkGameFile() {
  if (fs.existsSync(dataPath)) {
  } else {
    fs.writeFileSync(filePath, JSON.stringify(defaults));
  }
}

const store = createStore(lightningApp)

window.onload = function(){
  checkGameFile();
  ReactDOM.render((
    <Provider store={store}>
      <HashRouter>
        <Main />
      </HashRouter>
    </Provider>
  ), document.getElementById('app'));
}
