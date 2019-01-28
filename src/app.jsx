import ReactDOM from 'react-dom';
import Router from './router';
import { HashRouter } from 'react-router-dom';
let fs = require('fs');
const defaults = require('../src/data/defaultStats');
const filePath = './src/data/user-data.json';
import { createStore, compose } from 'redux';
import app from '../src/reducers/appReducer';
import { Provider } from 'react-redux';

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const store = createStore(app, enhancers);

window.onload = function(){
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Router />
      </HashRouter>
    </Provider>,
    document.getElementById('app')
  );
}
