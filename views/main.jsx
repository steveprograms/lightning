import React from 'react';
import { Switch, Route } from 'react-router-dom'
import MapScreen from '../views/mapScreen';
import HomeScreen from '../views/homeScreen';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/homescreen' component={HomeScreen}/>
          <Route path='/mapscreen' component={MapScreen}/>
          <Route path='/' component={HomeScreen}/>
        </Switch>
      </div>
    )
  }
}
