import React from 'react';
import planets from '../assets/data/planets'
import { connect } from 'react-redux';
import { distanceBetweenPlanets } from './helpers';

class MapInfoPanel extends React.Component {
  render() {
    let selectedPlanet  = planets[this.props.selectedPlanetId];
    let currentPlanet = planets[this.props.currentPlanetId] || planets['terra'];
    let distance = distanceBetweenPlanets(selectedPlanet, currentPlanet);

    return (
      <div
        style={{backgroundColor: 'white', height: '800px', width: '200px', left: '820px', top: '50px', position: 'absolute'}}
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
        Distance: {distance} spacemiles
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentPlanetId: state.currentPlanetId,
  };
};

export default connect(mapStateToProps)(MapInfoPanel);
