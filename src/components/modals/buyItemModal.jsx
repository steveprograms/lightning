import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Slider from '../common/slider';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

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
});

class BuyItemModal extends React.Component {

  handleChange = (event, sliderValue) => {
    this.setState({ sliderValue });
  };

  state = {
    open: false,
    sliderValue: 1,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleBuy = () => {
    console.log('buy')
    this.handleClose();
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button
          onClick={this.handleOpen}
          variant={'outlined'}
        >
          +
        </Button>
        <Modal
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
              itemName={this.props.itemName}
              quantity={this.props.quantity}
              handleBuy={this.props.handleBuy}
              sliderValue={this.state.sliderValue}
              handleChange={this.handleChange}
            />
            {this.state.sliderValue}
            <Button
              onClick={this.handleClose}
              variant={'outlined'}
            >
              Cancel
            </Button>
            <Button
              onClick={this.handleBuy}
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

BuyItemModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
export default withStyles(styles)(BuyItemModal);
