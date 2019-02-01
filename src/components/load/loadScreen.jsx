import React from 'react';
import LoadScreenView from './loadScreenView';
import fs from 'fs';
import defaults from '../../data/defaultStats';
import { connect } from 'react-redux';
import { assignGameDefaults } from '../../actions/appActions';
import { filePath } from  '../../data/constants';
import { audioPath } from '../../data/constants';
import { playPlanetMusic } from '../helpers/helper';


class LoadScreen extends React.Component {

  startNewGame = () => {
    defaults.gameInitialized = true;
    fs.writeFileSync(filePath, JSON.stringify(defaults));
    this.props.assignGameDefaults();
  }

/*  loadSavedGame = () => {
    playPlanetMusic();
  }*/

  render() {
    let savedGameFound = this.props.gameInitialized;

    return (
      <LoadScreenView
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
