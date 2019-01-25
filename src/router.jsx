import React from 'react';
import { Switch, Route } from 'react-router-dom'
import MapScreen from './components/map/mapScreen';
import HomeScreen from './components/home/homeScreen';
import TransitScreen from './components/transit/transitScreen';
import LoadScreen from './components/load/loadScreen';
import MerchantScreen from './components/merchant/merchantScreen';

export default class Router extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/merchantscreen' component={MerchantScreen}/>
        <Route path='/loadscreen' component={LoadScreen}/>
        <Route path='/transitscreen' component={TransitScreen}/>
        <Route path='/homescreen' component={HomeScreen}/>
        <Route path='/mapscreen' component={MapScreen}/>
        <Route path='/' component={LoadScreen}/>
      </Switch>
    );
  }
}
