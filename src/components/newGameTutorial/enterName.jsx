import React from 'react';
import { connect } from 'react-redux';
import RouteButton from '../buttons/routeButton';
import TextField from '@material-ui/core/TextField';


export class EnterName extends React.Component {

  getUsername = () => {
      //get text field value when "Next" button is clicked

      console.log('inside get username')
  }


  render() {



    return (
      <React.Fragment>
        <h1>Enter your name, player</h1><br />
        <form>
        <h3>Name</h3>
          <TextField
            id="standard-bare"
            defaultValue=""
            margin="normal"
            variant="filled"
          />
        </form><br />
        <RouteButton
          title={'Next'}
          routeTo={'/NewGameTutorial'}
          onClick={this.getUsername}
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
