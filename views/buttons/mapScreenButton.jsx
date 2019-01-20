import React from 'react';
import LinkButton from './linkButton';

export default class MapScreenButton extends React.Component {
  render() {
    return (
      <LinkButton
        title={'Map'}
        routeTo={'/mapscreen'}
      />
    )
  }
}
