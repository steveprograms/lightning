import React from 'react';
import MapContainer from './mapContainer';
import MapInfoPanel from './mapInfoPanel';

let styles = {
  dataViewer: {
    position: 'relative',
    width: '1100px',
    height: '900px',
    border: '1px solid black',
    margin: '0 auto',
    backgroundColor: 'gray',
  }
}

export default class DataViewer extends React.Component {

  render() {
    return (
      <div style={styles.dataViewer}>
        <MapContainer/>
        <MapInfoPanel
          selectedPlanetId={this.props.selectedPlanetId}
        />
      </div>
    );
  }
}
