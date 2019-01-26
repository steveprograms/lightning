import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import planets from '../../data/planets'
import { changeSelectedPlanet } from '../../actions/appActions';
import { connect } from 'react-redux';
import PlanetCircle from './planetCircle'
import Planet from './planet'

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
    let currentPlanetIndicatorColor = isCurrentPlanet ? 'green' : 'rgba(255,255,255,0)';
    let selectedPlanetIndicatorColor = (isSelectedPlanet && !isCurrentPlanet) ? 'red' : 'rgba(255,255,255,0)';

    return (
      <div
        style={{
          position: 'absolute',
          margin: '20px',
        }}
      >
        <PlanetCircle
          radius={15}
          borderWidth={1}
          xCoord={xCoord}
          yCoord={yCoord}
          color={selectedPlanetIndicatorColor}
        />
        <PlanetCircle
          radius={50}
          borderWidth={1}
          xCoord={xCoord}
          yCoord={yCoord}
          borderStyle={'dashed'}
          color={currentPlanetIndicatorColor}
        />
        <Planet
          radius={8}
          xCoord={xCoord}
          yCoord={yCoord}
          color={planet.color}
          onClick={this.onClick}
        />
        <div style={{
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0)',
          color: 'white',
          marginTop: '15px',
          left: xCoord,
          top: yCoord,
        }}>
          {planet.name}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedPlanetId: state.selectedPlanetId,
    currentPlanetId: state.currentPlanetId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeSelectedPlanet: (id) =>
    dispatch(changeSelectedPlanet(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetContainer);
