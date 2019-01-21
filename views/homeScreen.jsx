import React from 'react';
import { connect } from 'react-redux';
import MapScreenButton from './buttons/mapScreenButton';
import PlanetInfoHome from './planetInfoHome';
import SaveGameButton from './buttons/saveGameButton'
import LinkButton from './buttons/LinkButton';

class HomeScreen extends React.Component {
  render() {
    return (
      <div>
        <MapScreenButton
        />
        <div />
        -
        <div />
        <SaveGameButton />
        <div />
        <LinkButton
        title={'Main Menu'}
        routeTo={'/loadscreen'}
        onClick={this.startNewGame}
        >
        </LinkButton>
        <PlanetInfoHome
          currentPlanetId={this.props.currentPlanetId}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentPlanetId: state.currentPlanetId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
