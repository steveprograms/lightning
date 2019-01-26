import React from 'react';


export default class PlanetCircle extends React.Component {

  render() {
    let {
      radius,
      borderWidth,
      xCoord,
      yCoord,
      color,
      borderStyle
    } = this.props;

    borderStyle = borderStyle || 'solid';

    return (
      <div
        style={{
          cursor: 'pointer',
          left: (xCoord - radius - borderWidth),
          top: (yCoord - radius - borderWidth),
          width: (radius + radius),
          height: (radius + radius),
          backgroundColor: 'rgba(255,255,255,0)',
          borderStyle: borderStyle,
          borderWidth: borderWidth,
          borderColor: color,
          borderRadius: '50%',
          position: 'absolute'
        }}
        >
      </div>
    )
  }
}
