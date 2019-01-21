import React from 'react';
import { connect } from 'react-redux';
import MapScreenButton from './buttons/mapScreenButton';
import PlanetInfoHome from './planetInfoHome';
import SaveGameButton from './buttons/saveGameButton'
import LinkButton from './buttons/LinkButton';
let filePath = './assets/data/user-data.json';
import fs from 'fs';

class HomeScreen extends React.Component {

  onCLick = () => {
    let { state } = this.props;
    console.log('saving state: ', state);
    fs.writeFileSync(filePath, JSON.stringify(this.props.state));
  }

  render() {
    return (
      <div>
        <MapScreenButton
        />
        <div />
        -
        <LinkButton
        title={'Merchant'}
        routeTo={'/merchantscreen'}
        />
        <div />
        <SaveGameButton />
        <div />
        <LinkButton
        style={{float: 'right'}}
        title={'Menu'}
        routeTo={'/loadscreen'}
        onClick={this.onClick}
        >
        </LinkButton>
        <PlanetInfoHome
          currentPlanetId={this.props.currentPlanetId}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    currentPlanetId: state.currentPlanetId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
