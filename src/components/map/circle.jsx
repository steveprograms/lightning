import React from 'react';


export default class Circle extends React.Component {

  render() {
    let { radius, borderWidth, xCoord, yCoord, borderColor } = this.props;

    return (
      <div
        style={{
          cursor: 'pointer',
          left: (xCoord - radius - borderWidth),
          top: (yCoord - radius - borderWidth),
          width: (radius + radius),
          height: (radius + radius),
          backgroundColor: 'rgba(255,255,255,0)',
          borderStyle: 'solid',
          borderWidth: borderWidth,
          borderColor: borderColor,
          borderRadius: '50%',
          position: 'absolute'
        }}
        >
      </div>
    )
  }
}
