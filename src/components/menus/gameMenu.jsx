import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { saveStateToFile } from '../helpers/helper';
import { toggleMusic } from '../../actions/appActions'

export class GameMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleSave = () => {
    this.handleClose();
    saveStateToFile(this.props.state);
  };

  handleSaveAndExit = () => {
    this.handleClose();
    saveStateToFile(this.props.state);
    this.props.history.push('/loadingscreen');
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  toggleMusic = () => {
    console.log(this.props.state.music)
    toggleMusic(this.props.state.currentPlanetId);
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <div id="game-menu-container">
        <IconButton
          id="game-menu-icon"
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
          <MenuItem
            onClick={this.handleSave}
          >
            Save
          </MenuItem>
          <MenuItem
            onClick={this.handleSaveAndExit}
          >
            Save and Exit
          </MenuItem>
          <MenuItem onClick={this.toggleMusic}
          >
          Toggle Game Music
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

export const mapStateToProps = state => {
  return {
    state: state,
  };
};

const mapDispatchToProps = dispatch => {
  toggleMusic: () => dispatch(toggleMusic()),
};

export default withRouter(connect(mapStateToProps)(GameMenu));
