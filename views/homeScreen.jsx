import React from 'react';
import { read } from './helpers';
import Stats from './stats';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addNanoBuck } from '../actions/lightningActions';
import MapScreenButton from './buttons/mapScreenButton';
import PlanetInfoHome from './planetInfoHome';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.data = read();

  }

  render() {
    let { nanobucks } = this.props;
    return (
      <div>
        <MapScreenButton />
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
        <PlanetInfoHome
          currentPlanetId={this.props.currentPlanetId}
        />
      </div>

    )
  }
}

const mapStateToProps = state => {
  return {
    nanobucks: state.nanobucks,
    currentPlanetId: state.currentPlanetId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNanoBuck: () =>
    dispatch(addNanoBuck()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
