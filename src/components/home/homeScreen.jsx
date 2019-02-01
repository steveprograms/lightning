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

    if(this.props.newGame){

      //begin dialogs for game instruction

      //When game instruction dialog completes-
        //action to turn newGame = false
    }

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
        <RouteButton
          title={'Job Board'}
          routeTo={'/JobBoard'}
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
    newGame: state.newGame,
  };
};

export default connect(mapStateToProps)(HomeScreen);
