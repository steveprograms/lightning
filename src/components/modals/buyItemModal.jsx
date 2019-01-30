import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/lab/Slider';
import { buyItem } from '../../actions/appActions';
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

class BuyItemModal extends React.Component {
  state = {
    open: false,
    value: 1,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleBuy = () => {
    console.log('buy')
    let { dollars, itemPrice, currentPlanetId } = this.props;
    let { value } = this.state;
    let totalPrice = value * itemPrice;

    buyItem();
    this.handleClose();
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

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
            <Typography variant="subtitle1" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Slider
              classes={{ container: classes.slider }}
              value={value}
              min={1}
              max={this.props.quantity}
              step={1}
              onChange={this.handleChange}
            />
            {this.state.value}
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

const mapStateToProps = state => {
  return {
    dollars: state.dollars,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyItem: () => dispatch(buyItem()),
  }
}

// We need an intermediary variable for handling the recursive nesting.
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BuyItemModal));
