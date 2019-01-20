import React from 'react';
import LinkButton from '../views/linkButton';
import MapPlanet from './mapPlanet'

export default class MapContainer extends React.Component {
  render() {
    return (
      <div style={{width: '800px', height: '800px', backgroundColor: 'black', position: 'absolute'}}>
        <MapPlanet
          name={'Terra'}
          xCoord={'400'}
          yCoord={'690'}
          color={'white'}
        />
        <MapPlanet
          name={'Mercurion'}
          xCoord={'300'}
          yCoord={'500'}
          color={'red'}
        />
        <MapPlanet
          name={'Orias'}
          xCoord={'575'}
          yCoord={'320'}
          color={'yellow'}
        />
        <MapPlanet
          name={'Rust'}
          xCoord={'590'}
          yCoord={'665'}
          color={'orange'}
        />
        <MapPlanet
          name={'K-787'}
          xCoord={'390'}
          yCoord={'430'}
          color={'blue'}
        />
        <MapPlanet
          name={'Sunspeared'}
          xCoord={'600'}
          yCoord={'150'}
          color={'green'}
        />
        <MapPlanet
          name={'Chindi'}
          xCoord={'100'}
          yCoord={'600'}
          color={'gray'}
        />
        <MapPlanet
          name={'Ark'}
          xCoord={'200'}
          yCoord={'450'}
          color={'white'}
        />
        <MapPlanet
          name={'Aquaris'}
          xCoord={'250'}
          yCoord={'225'}
          color={'brown'}
        />
        <LinkButton
          title={'Home'}
          routeTo={'/homescreen'}
        />
      </div>
    )
  }
}
