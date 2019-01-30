import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import React from 'react';
import { saveGame } from '../../actions/appActions';
import fs from 'fs';
import { filePath } from import { filePath } from  './src/data/constants';

class SaveGameButton extends React.Component {

  onClick = () => {
    let { state } = this.props;
    console.log('saving state: ', state);
    fs.writeFileSync(filePath, JSON.stringify(this.props.state));
  }

  render() {
    return (
      <Button
        variant='contained'
        color='primary'
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
