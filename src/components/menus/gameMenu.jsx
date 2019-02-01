import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { saveStateToFile } from '../helpers/helper';
import SimpleSnackbar, { openSnackbar } from '../snackbars/simpleSnackbar';
import Mousetrap from 'mousetrap';

export class GameMenu extends React.Component {
  componentDidMount() {
    Mousetrap.bind(['command+s'], this.handleSaveFromKeyBinding);
  }
  
  componentWillUnmount() {
    Mousetrap.unbind(['command+s'], this.handleSaveFromKeyBinding);
  }

  state = {
    anchorEl: null,
    snackbarIsOpen: false,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleSaveFromKeyBinding = () => {
    saveStateToFile(this.props.state);
    openSnackbar({ message: 'Game Saved' });
  }

  handleSave = () => {
    this.handleClose();
    saveStateToFile(this.props.state);
    openSnackbar({ message: 'Game Saved' });
  };

  handleSaveAndExit = () => {
    this.handleClose();
    saveStateToFile(this.props.state);
    this.props.history.push('/loadingscreen');
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <div id="game-menu-container">
        <SimpleSnackbar
          snackbarIsOpen={this.state.snackbarIsOpen}
        />
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

export default withRouter(connect(mapStateToProps)(GameMenu));
