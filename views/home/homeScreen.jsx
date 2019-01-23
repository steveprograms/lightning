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
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => {
  return {
    currentPlanetId: state.currentPlanetId,
  };
};

export default connect(mapStateToProps)(HomeScreen);
