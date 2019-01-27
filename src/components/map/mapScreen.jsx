import React from 'react';
import RouteButton from '../buttons/routeButton';
import { connect } from 'react-redux';
import DataViewer from './dataViewer';

class MapScreen extends React.Component {
  render() {
    let { selectedPlanetId } = this.props;
    return (
      <div>
        <RouteButton
          title={'Home'}
          routeTo={'/homescreen'}
        />
        <DataViewer
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
