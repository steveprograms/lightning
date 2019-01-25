import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import planets from '../../data/planets'
import { changeSelectedPlanet } from '../../actions/appActions';
import { connect } from 'react-redux';

class MapPlanet extends React.Component {

  onClick = () => {
    this.props.changeSelectedPlanet(this.props.id);
  }

  render() {
    let { id } = this.props;
    let planet = planets[id];
    let xCoord = planet.x_coord;
    let yCoord = planet.y_coord;
    let color = planet.color;
    let isCurrentPlanet = (this.props.currentPlanetId == id) ? true : false;
    let isSelectedPlanet = (this.props.selectedPlanetId == id) ? true : false;
    let currentPlanetIndicatorColor = isCurrentPlanet ? 'green' : 'rgba(255,255,255,0)';
    let selectedPlanetIndicatorColor = isSelectedPlanet ? 'red' : 'rgba(255,255,255,0)';

    return (
      <div
        style={{
          position: 'relative',
          margin: '20px',
        }}
      >
        <div
          className={'map-planet'}
          style={{
            left: xCoord,
            top: yCoord,
            width: '15px',
            height: '15px',
            backgroundColor: color,
            borderRadius: '50%',
            position: 'absolute'
          }}
          onMouseEnter={this.mouseEnter}
          onMouseLeave={this.mouseLeave}
          onClick={this.onClick}
        >
        </div>
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
        <div style={{
          position: 'absolute',
          backgroundColor: currentPlanetIndicatorColor,
          width: '20px',
          height: '5px',
          left: xCoord,
          top: yCoord,
          marginTop: '5px',
          marginLeft: '-25px'
        }}>
        </div>
        <div style={{
          position: 'absolute',
          backgroundColor: selectedPlanetIndicatorColor,
          width: '20px',
          height: '5px',
          left: xCoord,
          top: yCoord,
          marginTop: '5px',
          marginLeft: '20px'
        }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(MapPlanet);
