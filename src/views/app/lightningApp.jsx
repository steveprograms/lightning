import React from 'react';
import { Switch, Route } from 'react-router-dom'
import MapScreen from '../map/mapScreen';
import HomeScreen from '../home/homeScreen';
import TransitScreen from '../transit/transitScreen';
import LoadScreen from '../load/loadScreen';
import MerchantScreen from '../merchant/merchantScreen';

export default class LightningApp extends React.Component {
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
