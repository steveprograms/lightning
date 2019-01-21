import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import React from 'react';
import { saveGame } from '../../actions/appActions';
import fs from 'fs';
let filePath = './assets/data/user-data.json';

class SaveGameButton extends React.Component {

  onClick = () => {
    let { state } = this.props;
    console.log('state: ', state);
    fs.writeFileSync(filePath, JSON.stringify(this.props.state));
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
