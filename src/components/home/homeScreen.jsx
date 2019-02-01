import React from 'react';
import { connect } from 'react-redux';
import PlanetInfoHome from '../planet/planetInfoHome';
import RouteButton from '../buttons/routeButton';
import GameMenu from '../menus/gameMenu';

export class HomeScreen extends React.Component {


  save = () => {
    console.log('wowzerbowzer')
  }


  render() {
    return (
      <React.Fragment>
        <GameMenu />
        <RouteButton
          title={'Map'}
          routeTo={'/mapscreen'}
        />
        <RouteButton
          title={'Merchant'}
          routeTo={'/merchantscreen'}
        />
        <PlanetInfoHome
          currentPlanetId={this.props.currentPlanetId}
        />
      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => {
  return {
    currentPlanetId: state.currentPlanetId,
    //music: state.music,
  };
};

export default connect(mapStateToProps)(HomeScreen);
