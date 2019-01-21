import React from 'react';
import LinkButton from './buttons/linkButton';

class TransitScreen extends React.component {
  render() {
    return (
      <div>
        YOU'RE IN SPACE IN TRANSIT
        <LinkButton
          title={'Land'}
          routeTo={'/homescreen'}
        />
      </div>
    );
  }
}
