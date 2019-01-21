import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import React from 'react';
import { saveGame } from '../../actions/lightningActions';
import fs from 'fs';

class SaveGameButton extends React.Component {

  onClick = () => {
    console.log('onClick')
    console.log('state: ', this.props.state)
    fs.writeFileSync('./assets/data/user-data.json', JSON.stringify(this.props.state));
  }

  render() {
    return (
      <Button
        style={{float: 'right'}}
        onClick={this.onClick}
      >
        Save
      </Button>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(SaveGameButton);
