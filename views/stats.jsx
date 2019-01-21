import React from 'react';
import Typography from '@material-ui/core/Typography';

export default class Stats extends React.Component {
  render() {
    return (
      <Typography
      >
        Level: {this.props.value}
      </Typography>
    );
  }
}
