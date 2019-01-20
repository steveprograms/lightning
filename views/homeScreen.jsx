import React from 'react';
import { save, read } from './helpers';
import Stats from './stats';
import Button from '@material-ui/core/Button';
import { Link, Switch, Route } from 'react-router-dom'
import MapContainer from '../views/mapContainer';
import PlanetContainer from '../views/planetContainer';
import LinkButton from '../views/linkButton';
import { connect } from 'react-redux';
import { addNanoBuck } from '../actions/lightningActions';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.data = read();
  }

  addBuck() {

  }

  render() {
    let { nanobucks } = this.props;
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
        <div />
        <LinkButton
          title={'Map'}
          routeTo={'/map'}
        />
          Nanobucks: {nanobucks}
        <Button
          onClick={this.props.addNanoBuck}
        >
        Add NanoBucks
        </Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    nanobucks: state.nanobucks,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNanoBuck: () =>
    dispatch(addNanoBuck()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
