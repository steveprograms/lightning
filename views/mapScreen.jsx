import React from 'react';
import MapContainer from './mapContainer';
import HomeScreenButton from './buttons/homeScreenButton';
import MapInfoPanel from './mapInfoPanel';
import { connect } from 'react-redux';

class MapScreen extends React.Component {
  render() {
    let { focusedPlanetName } = this.props;
    return (
      <div>
        <MapContainer/>
        <HomeScreenButton />
        <MapInfoPanel
          focusedPlanetName={focusedPlanetName}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    focusedPlanetName: state.focusedPlanetName,
  }
}

export default connect(mapStateToProps)(MapScreen);
