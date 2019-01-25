import React from 'react';
import RouteButton from '../buttons/routeButton';
import { setCurrentPlanet } from '../../actions/appActions';
import { connect } from 'react-redux';

class TransitScreen extends React.Component {

  onClick = () => {
    this.props.setCurrentPlanet(this.props.destinationPlanet)
  }

  render() {
    return (
      <div>
        YOU'RE IN SPACE IN TRANSIT
        <RouteButton
          title={'Land'}
          routeTo={'/homescreen'}
          onClick={this.onClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    destinationPlanet: state.destinationPlanet,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentPlanet: (planetId) =>
    dispatch(setCurrentPlanet(planetId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransitScreen);
