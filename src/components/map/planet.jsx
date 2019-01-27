import React from 'react';


export default class Planet extends React.Component {

  onClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    let {
      radius,
      xCoord,
      yCoord,
      color,
      fill,
    } = this.props;

    return (
      <div
        style={{
          cursor: 'pointer',
          left: (xCoord - radius),
          top: (yCoord - radius),
          width: (radius + radius),
          height: (radius + radius),
          backgroundColor: color,
          borderRadius: '50%',
          position: 'absolute'
        }}
        onClick={this.onClick}
        >
        <div style={{
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0)',
          color: 'white',
          marginTop: '15px',
          left: '5px',
          top: '5px',
        }}>
          {this.props.name}
        </div>
      </div>
    )
  }
}
