import React from 'react';
import Typography from '@material-ui/core/Typography';

export default class MapPlanet extends React.Component {
  render() {
    { coordinates, color } = this.props;
    return (
      <div
        style={{left: '150px', top: '302px', width: '5px', height: '5px', backgroundColor: 'yellow', position: 'absolute'}}/>
    )
  }
}
