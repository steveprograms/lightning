import React from 'react';
import RouteButton from './routeButton';
import { connect } from 'react-redux';
import { setDestination } from '../../actions/appActions';

class TransitScreenButton extends React.Component {

  onClick = () => {
    this.props.setDestination(this.props.transitDestination);
  }

  render() {

    let { transitDestination } = this.props;
    return (
      <RouteButton
        title={'Launch'}
        routeTo={'/transitscreen'}
        transitDestination={transitDestination}
        addOnClick={this.onClick}
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
    setDestination: (planetId) =>
    dispatch(setDestination(planetId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransitScreenButton);
