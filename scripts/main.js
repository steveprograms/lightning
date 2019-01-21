import ReactDOM from 'react-dom';
import Main from '../views/main.jsx';
import { HashRouter } from 'react-router-dom';
let fs = require('fs');
const defaults = require('../assets/data/defaultStats');
const filePath = './assets/data/user-data.json';
import { createStore } from 'redux';
import lightningApp from '../reducers/lightningReducer';
import { Provider } from 'react-redux';

const store = createStore(lightningApp);

window.onload = function(){
  ReactDOM.render((
    <Provider store={store}>
      <HashRouter>
        <Main />
      </HashRouter>
    </Provider>
  ), document.getElementById('app'));
}
