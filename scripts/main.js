import ReactDOM from 'react-dom';
import LightningApp from '../src/views/app/lightningApp';
import { HashRouter } from 'react-router-dom';
let fs = require('fs');
const defaults = require('../src/assets/data/defaultStats');
const filePath = './src/assets/data/user-data.json';
import { createStore } from 'redux';
import app from '../src/reducers/appReducer';
import { Provider } from 'react-redux';

const store = createStore(app);

window.onload = function(){
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <LightningApp />
      </HashRouter>
    </Provider>,
    document.getElementById('app')
  );
}
