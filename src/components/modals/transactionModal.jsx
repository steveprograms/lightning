import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/lab/Slider';
import { connect } from 'react-redux';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
  root: {
    width: 300,
  },
  slider: {
    padding: '22px 0px',
  },
});

class TransactionModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleTransaction = () => {
    this.props.handleTransaction();
    this.handleClose();
  }

  render() {
    const { classes, sliderValue } = this.props;

    return (
      <div>
        <Button
          onClick={this.handleOpen}
          variant={'outlined'}
        >
          +
        </Button>
        <Modal
          style={{position: 'absolute'}}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              How many?
            </Typography>
            <Slider
              classes={{ container: classes.slider }}
              value={sliderValue}
              min={1}
              max={this.props.quantity}
              step={1}
              onChange={this.props.handleChange}
            />
            {sliderValue}
            <Button
              onClick={this.handleClose}
              variant={'outlined'}
            >
              Cancel
            </Button>
            <Button
              onClick={this.handleTransaction}
              variant={'outlined'}
            >
              Ok
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

TransactionModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TransactionModal);
