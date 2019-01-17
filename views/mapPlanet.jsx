import React from 'react';

// Again, Typography is a component from Material UI
// You can look at Material UI online for these components
// to get an idea of what props they takes
// and what they do
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
