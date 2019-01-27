import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import planets from '../../data/planets'
import { changeSelectedPlanet } from '../../actions/appActions';
import { connect } from 'react-redux';
import CurrentPlanetIndicator from './currentPlanetIndicator';
import TargetPlanetIndicator from './targetPlanetIndicator';
import Planet from './planet'
import { gmPerTon } from '../../data/constants';

class PlanetContainer extends React.Component {

  onClick = () => {
    this.props.changeSelectedPlanet(this.props.id);
  }

  render() {
    let { id } = this.props;
    let planet = planets[id];
    let xCoord = planet.x_coord;
    let yCoord = planet.y_coord;
    let isCurrentPlanet = (this.props.currentPlanetId == id) ? true : false;
    let isSelectedPlanet = (this.props.selectedPlanetId == id) ? true : false;
    let possibleDistance = (this.props.fuel * gmPerTon);

    return isCurrentPlanet ? (
      <React.Fragment>
        <CurrentPlanetIndicator
          possibleDistance={possibleDistance}
          borderWidth={1}
          xCoord={xCoord}
          yCoord={yCoord}
        />
        <Planet
          radius={8}
          name={planet.name}
          xCoord={xCoord}
          yCoord={yCoord}
          color={planet.color}
          onClick={this.onClick}
        />
      </React.Fragment>
    ) : isSelectedPlanet ? (
      <React.Fragment>
        <TargetPlanetIndicator
          borderWidth={1}
          xCoord={xCoord}
          yCoord={yCoord}
        />
        <Planet
          radius={8}
          name={planet.name}
          xCoord={xCoord}
          yCoord={yCoord}
          color={planet.color}
          onClick={this.onClick}
        />
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Planet
          radius={8}
          name={planet.name}
          xCoord={xCoord}
          yCoord={yCoord}
          color={planet.color}
          onClick={this.onClick}
        />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedPlanetId: state.selectedPlanetId,
    currentPlanetId: state.currentPlanetId,
    fuel: state.fuel,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSelectedPlanet: (id) =>
    dispatch(changeSelectedPlanet(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetContainer);
