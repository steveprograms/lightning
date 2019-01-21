import React from 'react';
import planets from '../assets/data/planets'

export default class MapInfoPanel extends React.Component {
  render() {
    let planetName  = this.props.focusedPlanetName.toLowerCase();
    let planet = planets[planetName];
    return (
      <div
        style={{backgroundColor: 'white', height: '800px', width: '200px', left: '820px', top: '50px', position: 'absolute'}}
      >
        {this.props.focusedPlanetName}
        <div />
        -
        <div />
        {planet.description}
        <div />
        -
        <div />
      </div>
    )
  }
}
