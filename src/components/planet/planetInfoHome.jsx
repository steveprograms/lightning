import React from 'react';
import planets from '../../data/planets'

export default class PlanetInfoHome extends React.Component {
  render() {
    let planet = planets[this.props.currentPlanetId];
    return (
      <div style={{
        position: 'absolute',
        bottom: '100px',
        fontSize: '2em'
      }}
      >
        Current Planet: {planet.name}
      </div>
    );
  }
}
