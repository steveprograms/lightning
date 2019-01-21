import MapPlanet from './mapPlanet';
import React from 'react'

export default class MapContainer extends React.Component {
  render() {
    return (
      <div style={{top: '50px', width: '800px', height: '800px', backgroundColor: 'black', position: 'absolute'}}>
        <MapPlanet id={ 'terra' } />
        <MapPlanet id={ 'mercurion' } />
        <MapPlanet id={ 'orias' } />
        <MapPlanet id={ 'rust' } />
        <MapPlanet id={ 'k-787' } />
        <MapPlanet id={ 'sunspeared' } />
        <MapPlanet id={ 'chindi' } />
        <MapPlanet id={ 'omega' } />
        <MapPlanet id={ 'ark' } />
        <MapPlanet id={ 'aquaris' } />
      </div>
    )
  }
}
