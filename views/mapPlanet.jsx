import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import planets from '../assets/data/planets'
import { changeFocusedPlanet } from '../actions/lightningActions';
import { connect } from 'react-redux';

class MapPlanet extends React.Component {
  constructor(props) {
    super(props)

  }

  mouseEnter() {

  }

  mouseLeave() {

  }

  onClick = () => {
    this.props.changeFocusedPlanet(this.props.name);
  }

  render() {

    let { name, xCoord, yCoord, color, diameter } = this.props;

    xCoord = xCoord + 'px';
    yCoord = yCoord + 'px';
    diameter = (diameter || '15') + 'px';
    name = name.toLowerCase();
    let planet = planets[name];

    return (
      <div
        style={{left: xCoord, top: yCoord, width: '15px', height: '15px', backgroundColor: color, borderRadius: '50%', position: 'absolute'}}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
        onClick={this.onClick}
        value={name}
      >
        <div style={{position: 'absolute', backgroundColor: 'rgba(255,255,255,0)', color: 'white', marginTop: '15px'}}>
          {name}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    focusedPlanetName: state.focusedPlanetName,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeFocusedPlanet: (planet) =>
    dispatch(changeFocusedPlanet(planet)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapPlanet);
