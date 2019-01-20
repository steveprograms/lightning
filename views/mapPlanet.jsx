import React from 'react';
import Typography from '@material-ui/core/Typography';
import planets from '../assets/data/planets'

export default class MapPlanet extends React.Component {
  render() {

    let { name, xCoord, yCoord, color, diameter } = this.props;

    xCoord = xCoord + 'px';
    yCoord = yCoord + 'px';
    diameter = (diameter || '15') + 'px';
    name = name.toLowerCase();
    let planet = planets[name];

    return (
      <div
        style={{left: xCoord, top: yCoord, width: '15px', height: '15px', backgroundColor: color, borderRadius: '50%', position: 'absolute'}}/>
    )
  }
}
