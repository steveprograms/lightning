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
    console.log('x: ', xCoord)
    let yCoord = planet.y_coord;
    let color = planet.color;
    let isCurrentPlanet = (this.props.currentPlanetId == id) ? true : false;
    let isSelectedPlanet = (this.props.selectedPlanetId == id) ? true : false;
    let currentPlanetIndicatorColor = isCurrentPlanet ? 'green' : 'rgba(255,255,255,0)';
    let selectedPlanetIndicatorColor = isSelectedPlanet ? 'red' : 'rgba(255,255,255,0)';

    return (
      <div
        style={{
          position: 'absolute',
          margin: '20px',
        }}
      >
        <div
          className={'map-planet'}
          style={{
            cursor: 'pointer',
            left: (xCoord - 7.5),
            top: (yCoord - 7.5),
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
        <div
          style={{
            cursor: 'pointer',
            left: (xCoord - 30),
            top: (yCoord - 30),
            width: '60px',
            height: '60px',
            backgroundColor: 'rgba(255,255,255,0)',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: 'red',
            borderRadius: '50%',
            position: 'absolute'
          }}
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
