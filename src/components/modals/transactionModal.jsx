import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/lab/Slider';

const styles = theme => ({
  root: {
    width: 300,
  },
  slider: {
    padding: '22px 0px',
  },
  modal: {
    textAlign: 'center',
  },
  modalInner: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',
    padding: 32,
    outline: 'none',
  },
  buttonLeft: {
    float: 'left',
    marginLeft: '20px',
    marginTop: '10px',
  },
  buttonRight: {
    float: 'right',
    marginRight: '20px',
    marginTop: '10px',
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
    const { open } = this.state;
    const {
      classes,
      sliderValue,
      transactionSymbol,
      transactionType,
      handleChange,
      quantity,
    } = this.props;

    return (
      <React.Fragment>
        <Button
          onClick={this.handleOpen}
          variant={'outlined'}
        >
          {transactionSymbol}
        </Button>
        <Modal
          classes={{root: classes.modal}}
          open={open}
          onClose={this.handleClose}
        >
          <div className={classes.modalInner}>
            <Typography variant="h6">
              {transactionType} How Many?
            </Typography>
            <Slider
              classes={{ container: classes.slider }}
              value={sliderValue}
              min={1}
              max={quantity}
              step={1}
              onChange={handleChange}
            />
            <Typography>
              {sliderValue}
            </Typography>
            <Button
              onClick={this.handleClose}
              variant={'outlined'}
              classes={{root: classes.buttonLeft}}
            >
              Cancel
            </Button>
            <Button
              onClick={this.handleTransaction}
              variant={'outlined'}
              classes={{root: classes.buttonRight}}
            >
              Ok
            </Button>
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

TransactionModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TransactionModal);
