import React from 'react';
import { connect } from 'react-redux';
import PlanetInfoHome from '../planet/planetInfoHome';
import RouteButton from '../buttons/routeButton';


export class JobBoard extends React.Component{

  render(){
    return(
      <React.Fragment>
      hello world
      </React.Fragment>
    )
  }
}

export const mapStateToProps = state => {
  return {
    currentPlanetId: state.currentPlanetId,
  };
};

export default connect(mapStateToProps)(JobBoard)
