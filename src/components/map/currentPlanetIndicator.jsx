import React from 'react';


export default class CurrentPlanetIndicator extends React.Component {

  render() {
    let {
      fuelRadius,
      borderWidth,
      xCoord,
      yCoord,
      color,
      borderStyle,
      style,
      possibleDistance
    } = this.props;

    borderStyle = borderStyle || 'solid';
    color = color || 'green';
    possibleDistance = possibleDistance || 200;

    return (
      <div>
        <div
          style={{
            cursor: 'pointer',
            left: (xCoord - possibleDistance - borderWidth),
            top: (yCoord - possibleDistance - borderWidth),
            width: (possibleDistance + possibleDistance),
            height: (possibleDistance + possibleDistance),
            backgroundColor: 'rgba(255,255,255,0)',
            borderStyle: 'dashed',
            borderWidth: borderWidth,
            borderColor: color,
            borderRadius: '50%',
            position: 'absolute',
          }}
          >
        </div>
        <div
          style={{
            cursor: 'pointer',
            left: (xCoord - 15 - borderWidth),
            top: (yCoord - 15 - borderWidth),
            width: (15 + 15),
            height: (15 + 15),
            backgroundColor: 'rgba(255,255,255,0)',
            borderStyle: 'solid',
            borderWidth: borderWidth,
            borderColor: color,
            borderRadius: '50%',
            position: 'absolute',
          }}
          >
        </div>
      </div>

    )
  }
}
