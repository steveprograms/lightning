import MapPlanet from './mapPlanet';
import React from 'react'

export default class MapContainer extends React.Component {
  render() {
    return (
      <div style={{top: '50px', width: '800px', height: '800px', backgroundColor: 'black', position: 'absolute'}}>
        <MapPlanet name= { 'terra' } />
        <MapPlanet name={ 'mercurion' } />
        <MapPlanet name={ 'orias' } />
        <MapPlanet name={ 'rust' } />
        <MapPlanet name={ 'k-787' } />
        <MapPlanet name={ 'sunspeared' } />
        <MapPlanet name={ 'chindi' } />
        <MapPlanet name={ 'omega' } />
        <MapPlanet name={ 'ark' } />
        <MapPlanet name={ 'aquaris' } />
      </div>
    )
  }
}
