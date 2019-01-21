import React from 'react';
import LinkButton from './buttons/linkButton';
import { setCurrentPlanet } from '../actions/lightningActions';
import { connect } from 'react-redux';

class TransitScreen extends React.Component {

  onClick = () => {
    this.props.setCurrentPlanet(this.props.destinationPlanet)
  }

  render() {
    return (
      <div>
        YOU'RE IN SPACE IN TRANSIT
        <LinkButton
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
