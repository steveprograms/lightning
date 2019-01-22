import React from 'react';
import MapContainer from './mapContainer';
import RouteButton from './buttons/routeButton';
import MapInfoPanel from './mapInfoPanel';
import { connect } from 'react-redux';

class MapScreen extends React.Component {
  render() {
    let { selectedPlanetId } = this.props;
    return (
      <div>
        <MapContainer/>
        <RouteButton
          title={'Home'}
          routeTo={'/homescreen'}
        />
        <MapInfoPanel
          selectedPlanetId={selectedPlanetId}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedPlanetId: state.selectedPlanetId,
  };
};

export default connect(mapStateToProps)(MapScreen);
