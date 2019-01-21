import React from 'react';
import LinkButton from './buttons/linkButton';
let fs = require('fs')
const path = require('path');
const defaults = require('../assets/data/defaultStats');
import { connect } from 'react-redux';
import { assignGameDefaults } from '../actions/lightningActions';

const userDataPath = '../assets/data';
const opts = {
  configName: 'user-data',
  defaults: defaults,
};

let dataPath = './assets/data/user-data.json';

let data;

class LoadScreen extends React.Component {

  parseDataFile() {
    try {
      return JSON.parse(fs.readFileSync(dataPath));
    } catch(error) {
      return opts.defaults;
    }
  }

  startNewGame = () => {
    data.gameInitialized = true;
    opts.defaults.gameInitialized = true;
    fs.writeFileSync(dataPath, JSON.stringify(opts.defaults));
    this.props.assignGameDefaults();
  }

  loadSavedGame(){
    // var audio = new Audio('./assets/audio/earth.wav');
    // audio.loop = true;
    // audio.play();
  }

  render() {
    data = this.parseDataFile();
    let savedGameFound = this.props.gameInitialized;
    return savedGameFound ? (
      <div>
        Green Lightning!
        <div />
        The galaxy's most action filled text based game
        <LinkButton
        title={'New'}
        routeTo={'/homescreen'}
        onClick={this.startNewGame}
        >
        </LinkButton>
        <LinkButton
        title={'Load'}
        routeTo={'/homescreen'}
        onClick={this.loadSavedGame}
        >
        </LinkButton>
      </div>
    ) : (
      <div>
        Green Lightning!
        <div />
        The galaxy's most action filled text based game
        <LinkButton
        title={'New'}
        routeTo={'/homescreen'}
        onClick={this.startNewGame}
        >
        New
        </LinkButton>
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
