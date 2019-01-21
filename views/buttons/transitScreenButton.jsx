import React from 'react';
import LinkButton from './buttons/linkButton';

export default class TransitScreenButton extends React.Component {
  render() {
    return (
      <LinkButton
        title={'Launch'}
        routeTo={'/transitscreen'}
      />
    )
  }
}
