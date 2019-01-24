import React from 'react';
import RouteButton from '../buttons/routeButton';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

let theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#00e676',
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
};

export default class StartButton extends React.Component {

  render() {
    let { title, routeTo, onClick } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <RouteButton
          title={title}
          routeTo={'/homescreen'}
          onClick={onClick}
          variant='contained'
          color='primary'
          style={styles.initializeButton}
        >
        </RouteButton>
      </MuiThemeProvider>
    );
  }
}
