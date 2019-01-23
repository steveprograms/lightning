import React from 'react';
import { connect } from 'react-redux';
import PlanetInfoHome from '../planet/planetInfoHome';
import SaveGameButton from '../buttons/saveGameButton'
import RouteButton from '../buttons/routeButton';
let filePath = './assets/data/user-data.json';
import fs from 'fs';
import GameMenu from '../menus/gameMenu';

export class HomeScreen extends React.Component {

  saveToFile = () => {
    fs.writeFileSync(filePath, JSON.stringify(this.props.state));
  };

  render() {
    return (
      <React.Fragment>
        <GameMenu
          saveToFile={this.saveToFile}
        />
        <RouteButton
          title={'Map'}
          routeTo={'/mapscreen'}
        />
        <RouteButton
          title={'Merchant'}
          routeTo={'/merchantscreen'}
        />
        <PlanetInfoHome
          currentPlanetId={this.props.state.currentPlanetId}
        />
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(HomeScreen);
