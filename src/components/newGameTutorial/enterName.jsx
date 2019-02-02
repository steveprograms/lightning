import React from 'react';
import { connect } from 'react-redux';
import RouteButton from '../buttons/routeButton';
import TextField from '@material-ui/core/TextField';


export class EnterName extends React.Component {
  state = {
    value: ''
  }

  onClick = () => {
    let username = this.state.value;
      console.log('username: ', username);
  }

  handleChange = (event) => {
    console.log('event: ', event.target.value)
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Enter your name, player</h1><br />
        <form>
        <h3>Name</h3>
          <TextField
            id="standard-bare"
            value={this.state.value}
            margin="normal"
            variant="filled"
            onChange={this.handleChange}
          />
        </form><br />
        <RouteButton
          title={'Next'}
          routeTo={'/NewGameTutorial'}
          onClick={this.onClick}
        />
      </React.Fragment>

    );
  }
}

export const mapStateToProps = state => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(EnterName);
