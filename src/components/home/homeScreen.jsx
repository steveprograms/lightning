import React from 'react';
import { connect } from 'react-redux';
import PlanetInfoHome from '../planet/planetInfoHome';
import RouteButton from '../buttons/routeButton';
import GameMenu from '../menus/gameMenu';
import { planet_audio_paths } from '../../data/constants'

export class HomeScreen extends React.Component {


  save = () => {
    console.log('wowzerbowzer')
  }


  render() {

    console.log(planet_audio_paths)

    if(this.props.music == true){

        var planet_audio_path = planet_audio_paths[this.props.currentPlanetId];
        var audio = new Audio(planet_audio_path);
        audio.loop = true;
        audio.play();
        console.log(audio)


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
    music: state.settings.music,
  };
};

export default connect(mapStateToProps)(HomeScreen);
