import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import RouteButton from '../buttons/routeButton';

let theme = createMuiTheme({
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

export default class LoadView extends React.Component {

  render() {
    let { savedGameFound, startNewGame, loadSavedGame } = this.props;

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
              onClick={startNewGame}
              variant='contained'
              color='primary'
              style={styles.initializeButton}
            >
            </RouteButton>
            <RouteButton
              title={'Load'}
              routeTo={'/homescreen'}
              onClick={loadSavedGame}
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
            onClick={loadSavedGame}
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
