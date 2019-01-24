import React from 'react';
import RouteButton from '../buttons/routeButton';
let fs = require('fs')
const path = require('path');
const defaults = require('../../assets/data/defaultStats');
import { connect } from 'react-redux';
import { assignGameDefaults } from '../../actions/appActions';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/blue';
import pink from '@material-ui/core/colors/pink';
import { filePath } from  '../../assets/constants';
import { audioPath } from '../../assets/constants';

// https://material-ui.com/customization/themes/
// https://material-ui.com/style/color/
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#00e676'
    },
  },
});

let styles = {
  initializeButton: {
    width: '400px',
    height: '300px',
    flex: 'flex-grow',
    flexBasis: '40%',
    fontSize: '3em',
    fontFamily: 'Courier',
  },
  screenOutterWrapper: {
    height: '50%',
    textAlign: 'center',
    marginTop: '100px',
  },
  screenInnerWrapper: {
    height: '50%',
    fontSize: '8em',
    textShadow: '2px 2px #00e676',
  },
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    bottom: '0',
    position: 'absolute',
    marginBottom: '70px',
  },
  descriptionWrapper: {
    height: '50%',
    fontSize: '3em',
  },
}

class LoadScreen extends React.Component {

  startNewGame = () => {
    defaults.gameInitialized = true;
    fs.writeFileSync(filePath, JSON.stringify(defaults));
    this.props.assignGameDefaults();
  }

  loadSavedGame(){
    var audio = new Audio(audioPath);
    audio.loop = true;
    audio.play();
  }

  render() {
    let savedGameFound = this.props.gameInitialized;
    return savedGameFound ? (
      <div>
        <div
          style={styles.screenOutterWrapper}
        >
        <div
          style={styles.screenInnerWrapper}
        >
          Green Lightning!
        </div>
        <div
          style={styles.descriptionWrapper}
        >
          The galaxy's most action filled text based game
        </div>
        </div>
        <div
        style={styles.buttonWrapper}
        >
          <MuiThemeProvider theme={theme}>
            <RouteButton
              title={'New'}
              routeTo={'/homescreen'}
              onClick={this.startNewGame}
              variant='contained'
              color='primary'
              style={styles.initializeButton}
            >
            </RouteButton>
            <RouteButton
              title={'Load'}
              routeTo={'/homescreen'}
              onClick={this.loadSavedGame}
              variant='contained'
              color='primary'
              style={styles.initializeButton}
            >
            </RouteButton>
          </MuiThemeProvider>
        </div>
      </div>
    ) : (
      <div>
        Green Lightning!
        <div />
        The galaxy's most action filled text based game
        <MuiThemeProvider theme={theme}>
          <RouteButton
            title={'New'}
            routeTo={'/homescreen'}
            onClick={this.startNewGame}
            variant='contained'
            color='primary'
            style={styles.initializeButton}
          >
          </RouteButton>
        </MuiThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    gameInitialized: state.gameInitialized,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    assignGameDefaults: () =>
    dispatch(assignGameDefaults()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadScreen);
