import React from 'react';
import planets from '../../data/planets'
import { distanceBetweenPlanets } from '../helpers/helper';
import TransitScreenButton from '../buttons/transitScreenButton';
import { gmPerTonne } from '../../data/constants';

let styles = {
  mapInfoPanel: {
    backgroundColor: 'black',
    height: '800px',
    width: '240px',
    right: '20px',
    top: '50px',
    position: 'absolute',
    color: 'green',
  }
}


class MapInfoPanel extends React.Component {

  getLaunchButton = (maxDistance, planetDistance, selectedIsCurrent) => {
    if ((maxDistance >= planetDistance) && !selectedIsCurrent){
      return (
        <TransitScreenButton
          transitDestination={this.props.selectedPlanetId}
        />
      );
    }
  }

  getPlanetDistance = (selectedIsCurrent, planetDistance) => {
    if (!selectedIsCurrent) {
      return (
        <div>
          Distance to target planet: {planetDistance} gigameters
        </div>
      );
    }
  }

  render() {
    let selectedPlanet  = planets[this.props.selectedPlanetId];
    let currentPlanet = planets[this.props.currentPlanetId] || planets['terra'];
    let selectedIsCurrent = (selectedPlanet == currentPlanet);
    let planetDistance = distanceBetweenPlanets(selectedPlanet, currentPlanet);
    let fuel = this.props.fuel;
    let maxDistance = (fuel * gmPerTonne);

    return (
      <div
        style={styles.mapInfoPanel}
      >
        <div />
        Current Planet:
        <div />
        {currentPlanet.name}
        <div />
        ({currentPlanet.x_coord}, {currentPlanet.y_coord})
        <div />
        -
        <div />
        -
        <div />
        Selected Planet:
        <div />
        {selectedPlanet.name}
        <div />
        ({selectedPlanet.x_coord}, {selectedPlanet.y_coord})
        -
        <div />
        {selectedPlanet.description}
        <div />
        -
        <div />
        Max distance can travel on fuel: {maxDistance}
        <div />
        -
        <div />
        Fuel: {fuel} tonnes
        <div />
        -
        <div />
        {this.getPlanetDistance(selectedIsCurrent, planetDistance)}
        <div />
        -
        <div />
        {this.getLaunchButton(maxDistance, planetDistance, selectedIsCurrent)}
      </div>
    );
  }
}

export default MapInfoPanel;
