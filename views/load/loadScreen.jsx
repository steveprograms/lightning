import React from 'react';
import RouteButton from '../buttons/routeButton';
let fs = require('fs')
const path = require('path');
const defaults = require('../../assets/data/defaultStats');
import { connect } from 'react-redux';
import { assignGameDefaults } from '../../actions/appActions';

const opts = {
  configName: 'user-data',
  defaults: defaults,
};

let dataPath = './assets/data/user-data.json';

class LoadScreen extends React.Component {

  startNewGame = () => {
    opts.defaults.gameInitialized = true;
    fs.writeFileSync(dataPath, JSON.stringify(opts.defaults));
    this.props.assignGameDefaults();
  }

  loadSavedGame(){
    var audio = new Audio('./assets/audio/earth.wav');
    audio.loop = true;
    audio.play();
  }

  render() {
    let savedGameFound = this.props.gameInitialized;
    return savedGameFound ? (
      <div>
        Green Lightning!
        <div />
        The galaxy's most action filled text based game
        <RouteButton
          title={'New'}
          routeTo={'/homescreen'}
          addOnClick={this.startNewGame}
        >
        </RouteButton>
        <RouteButton
          title={'Load'}
          routeTo={'/homescreen'}
          addOnClick={this.loadSavedGame}
        >
        </RouteButton>
      </div>
    ) : (
      <div>
        Green Lightning!
        <div />
        The galaxy's most action filled text based game
        <RouteButton
          title={'New'}
          routeTo={'/homescreen'}
          addOnClick={this.startNewGame}
        >
        New
        </RouteButton>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gameInitialized: state.gameInitialized,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    assignGameDefaults: () =>
    dispatch(assignGameDefaults()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadScreen);
