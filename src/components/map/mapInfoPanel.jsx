import React from 'react';
import planets from '../../data/planets'
import { distanceBetweenPlanets } from '../helpers/helper';
import TransitScreenButton from '../buttons/transitScreenButton';

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
  render() {
    let selectedPlanet  = planets[this.props.selectedPlanetId];
    let currentPlanet = planets[this.props.currentPlanetId] || planets['terra'];
    let distance = distanceBetweenPlanets(selectedPlanet, currentPlanet);

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
        Distance: {distance} gigameters
        <div />
        <TransitScreenButton
          transitDestination={this.props.selectedPlanetId}
        />
      </div>
    );
  }
}

export default MapInfoPanel;
