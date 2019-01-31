import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Slider from '@material-ui/lab/Slider';
import { connect } from 'react-redux';


const styles = theme => ({
  root: {
    width: 300,
  },
  slider: {
    padding: '22px 0px',
  },
  modal: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  }
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
          style={{textAlign: 'center'}}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={classes.modal}>
            <Typography variant="h6" id="modal-title">
              {this.props.transactionType} How Many?
            </Typography>
            <Slider
              classes={{ container: classes.slider }}
              value={sliderValue}
              min={1}
              max={this.props.quantity}
              step={1}
              onChange={this.props.handleChange}
            />
            <div>
              {sliderValue}
            </div>
            <div style={{marginTop: '10px'}}>
              <Button
                onClick={this.handleClose}
                variant={'outlined'}
                style={{float: 'left', marginLeft: '20px'}}
              >
                Cancel
              </Button>
              <Button
                onClick={this.handleTransaction}
                variant={'outlined'}
                style={{float: 'right', marginRight: '20px'}}
              >
                Ok
              </Button>
            </div>
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
