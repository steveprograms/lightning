import React from 'react';
import { Switch, Route } from 'react-router-dom'
import MapScreen from '../views/mapScreen';
import HomeScreen from '../views/homeScreen';
import TransitScreen from '../views/transitScreen';
import LoadScreen from '../views/loadScreen';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/loadscreen' component={LoadScreen}/>
          <Route path='/transitscreen' component={TransitScreen}/>
          <Route path='/homescreen' component={HomeScreen}/>
          <Route path='/mapscreen' component={MapScreen}/>
          <Route path='/' component={LoadScreen}/>
        </Switch>
      </div>
    );
  }
}
