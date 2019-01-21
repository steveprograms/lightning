import React from 'react';
import LinkButton from './linkButton';
import { connect } from 'react-redux';
import { setDestination } from '../../actions/lightningActions';

class TransitScreenButton extends React.Component {

  onClick = () => {
    this.props.setDestination(this.props.transitDestination);
  }

  render() {

    let { transitDestination } = this.props;
    return (
      <LinkButton
        title={'Launch'}
        routeTo={'/transitscreen'}
        transitDestination={transitDestination}
        onClick={this.onClick}
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
