import React from 'react';
let fs = require('fs');

const path = require('path');
const defaults = require('../../assets/data/defaultStats');
import { connect } from 'react-redux';
import { assignGameDefaults } from '../../actions/appActions';

import { filePath } from  '../../assets/constants';
import { audioPath } from '../../assets/constants';
import LoadView from './loadView';


class LoadScreen extends React.Component {

  startNewGame = () => {
    defaults.gameInitialized = true;
    fs.writeFileSync(filePath, JSON.stringify(defaults));
    this.props.assignGameDefaults();
  }

  loadSavedGame(){
    var audio = new Audio(audioPath);
    audio.loop = true;
    audio.play();
  }

  render() {
    let savedGameFound = this.props.gameInitialized;

    return (
      <LoadView
        savedGameFound={savedGameFound}
        startNewGame={this.startNewGame}
        loadSavedGame={this.loadSavedGame}
      />
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
