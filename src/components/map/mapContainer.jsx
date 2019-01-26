import PlanetContainer from './planetContainer';
import React from 'react'

let styles = {
  wrapper: {
    top: '50px',
    width: '800px',
    height: '800px',
    backgroundColor: 'black',
    position: 'absolute',
  },
};

export default class MapContainer extends React.Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <PlanetContainer id={ 'terra' } />
        <PlanetContainer id={ 'mercurion' } />
        <PlanetContainer id={ 'orias' } />
        <PlanetContainer id={ 'rust' } />
        <PlanetContainer id={ 'k-787' } />
        <PlanetContainer id={ 'sunspeared' } />
        <PlanetContainer id={ 'chindi' } />
        <PlanetContainer id={ 'omega' } />
        <PlanetContainer id={ 'ark' } />
        <PlanetContainer id={ 'aquaris' } />
      </div>
    );
  }
}
