import React from 'react';
import LinkButton from './linkButton';

export default class HomeScreenButton extends React.Component {
  render() {
    return (
      <LinkButton
        title={'Home'}
        routeTo={'/homescreen'}
      />
    )
  }
}
