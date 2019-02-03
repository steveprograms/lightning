import React from 'react';
import { connect } from 'react-redux';
import RouteButton from '../buttons/routeButton';
import TextField from '@material-ui/core/TextField';
import { setUsername } from '../../actions/appActions'


export class EnterName extends React.Component {
  state = {
    value: ''
  }

  onClick = () => {
    let username = this.props.value;
      console.log('username: ', username);
      this.props.setUsername(username);
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

const mapDispatchToProps = dispatch => {
  return{
    setUsername: (username) => dispatch(setUsername(username))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EnterName);
