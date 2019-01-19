import React from 'react';
import { save, read } from './helpers';
import Stats from './stats';
import Button from '@material-ui/core/Button';
import { Link, Switch, Route } from 'react-router-dom'
import MapContainer from '../views/mapContainer';
import PlanetContainer from '../views/planetContainer';
import HomeScreen from '../views/homeScreen';

export default class Main extends React.Component {
  render() {
    return (
      <div>
      <Switch>
        <Route path='/homescreen' component={HomeScreen}/>
        <Route path='/planet' component={PlanetContainer}/>
        <Route path='/map' component={MapContainer}/>
        <Route path='/' component={HomeScreen}/>
      </Switch>
      </div>
    )
  }
}
