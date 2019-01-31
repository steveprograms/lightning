import React from 'react';
import RouteButton from '../buttons/routeButton';
import { connect } from 'react-redux';
import DataViewer from './dataViewer';import GameMenu from '../menus/gameMenu';

class MapScreen extends React.Component {
  render() {
    let { selectedPlanetId, currentPlanetId } = this.props;
    return (
      <div>
        <GameMenu />
        <RouteButton
          title={'Home'}
          routeTo={'/homescreen'}
        />
        <DataViewer
          selectedPlanetId={selectedPlanetId}
          currentPlanetId={currentPlanetId}
          fuel={this.props.fuel}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPlanetId: state.currentPlanetId,
    selectedPlanetId: state.selectedPlanetId,
    fuel: state.fuel,
  };
};

export default connect(mapStateToProps)(MapScreen);
