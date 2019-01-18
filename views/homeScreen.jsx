import React from 'react';
import { save, read } from './helpers';
import Stats from './stats';
import Button from '@material-ui/core/Button';
import { Link, Switch, Route } from 'react-router-dom'
import MapContainer from '../views/mapContainer';
import PlanetContainer from '../views/planetContainer';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.addLevel = this.addLevel.bind(this);
    this.changeScreen = this.changeScreen.bind(this);

    this.data = read();
    this.state = {};

    this.state.screen = 'stats'
    console.log("state: ", this.state)
  }

  addLevel() {
    this.data.character.stats.level += 1;
    save(this.data);
    this.forceUpdate();
  }

  changeScreen() {
    console.log(this.state)
    this.state.screen = 'map';
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <div>
          username: { this.data.username }
        </div>
        <div>
          credits: { this.data.credits }
        </div>
        <Stats
          value={ this.data.character.stats.level }
        />
        <div>
          xp: { this.data.character.stats.xp }
        </div>
        <div>
          spacecraft:
        </div>
        <Stats
          value={ this.data.character.stats.spacecraft.model }
        />
        <div>
          year: { this.data.character.stats.spacecraft.year }
        </div>
        <div>
          value: { this.data.character.stats.spacecraft.value }
        </div>
        <div>
          cargospace: { this.data.character.stats.spacecraft.cargo_space }
        </div>
        <div/>
        <Button
          onClick={this.addLevel}
        >
        Add Level
        </Button>
        <Button
          onClick={this.changeScreen}
        >
        Map
        </Button>
        <li><Link to='/planet'>Planet</Link></li>
        <div />
        <li><Link to='/map'>Map</Link></li>
      </div>
    )
  }
}
