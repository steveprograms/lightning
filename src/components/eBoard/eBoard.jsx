import React from 'react';
import { connect } from 'react-redux';
import PlanetInfoHome from '../planet/planetInfoHome';
import RouteButton from '../buttons/routeButton';


export class eBoard extends React.Component{

  render(){
    return(
      <React.Fragment>
      <div><h1><center>Electronic Message Board</center></h1></div>
      <RouteButton
        title={'Home'}
        routeTo={'/homescreen'}
      />
      </React.Fragment>
    )
  }
}

export const mapStateToProps = state => {
  return {
    currentPlanetId: state.currentPlanetId,
  };
};

export default connect(mapStateToProps)(eBoard)
