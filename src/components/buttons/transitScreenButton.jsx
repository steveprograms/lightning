import React from 'react';
import RouteButton from './routeButton';
import { connect } from 'react-redux';
import { setDestination } from '../../actions/appActions';

class TransitScreenButton extends React.Component {

  onClick = () => {
    this.props.setDestination(this.props.transitDestination, this.props.fuelToBeUsed);
  }

  render() {

    let { transitDestination } = this.props;
    return (
      <RouteButton
        title={'Launch'}
        routeTo={'/transitscreen'}
        transitDestination={transitDestination}
        onClick={this.onClick}
        variant={'contained'}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDestination: (planetId, fuelToBeUsed) =>
    dispatch(setDestination(planetId, fuelToBeUsed)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransitScreenButton);
