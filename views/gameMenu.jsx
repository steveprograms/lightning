import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import fs from 'fs';
let filePath = './assets/data/user-data.json';
import { Route , withRouter} from 'react-router-dom';

class GameMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleSave = () => {
    this.handleClose();
    let { state } = this.props;
    fs.writeFileSync(filePath, JSON.stringify(state));
  };

  handleSaveAndExit = () => {
    this.handleClose();
    let { state } = this.props;
    fs.writeFileSync(filePath, JSON.stringify(state));
    this.props.history.push('/loadingscreen')
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div id="game-menu-container">
        <IconButton
          aria-label="More"
          aria-owns={open ? 'game-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id='game-menu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleSave}>Save</MenuItem>
          <MenuItem onClick={this.handleSaveAndExit}>Save and Exit</MenuItem>
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state,
  };
};

export default withRouter(connect(mapStateToProps)(GameMenu));
