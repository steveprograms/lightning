import React from 'react';
import LinkButton from '../views/linkButton';
import MapContainer from './mapContainer';

export default class MapScreen extends React.Component {
  render() {
    return (
      <div>
        <MapContainer/>
        <LinkButton
          title={'Home'}
          routeTo={'/homescreen'}
        />
      </div>
    )
  }
}
