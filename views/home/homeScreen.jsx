import React from 'react';
import { connect } from 'react-redux';
import PlanetInfoHome from '../planet/planetInfoHome';
import SaveGameButton from '../buttons/saveGameButton'
import RouteButton from '../buttons/routeButton';
let filePath = './assets/data/user-data.json';
import fs from 'fs';
import GameMenu from '../menus/gameMenu';

export class HomeScreen extends React.Component {

  render() {
    return (
      <div>
        <GameMenu />
        <RouteButton
          title={'Map'}
          routeTo={'/mapscreen'}
        />
        <RouteButton
          title={'Merchant'}
          routeTo={'/merchantscreen'}
        />
        <PlanetInfoHome
          currentPlanetId={this.props.currentPlanetId}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPlanetId: state.currentPlanetId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
