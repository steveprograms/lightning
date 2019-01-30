import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import BuyItemModal from '../modals/buyItemModal';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class BuyTable extends React.Component {

  handleBuy = () => {
    console.log('buying from buy Table');
  }

  onClick = () => {
    console.log('buy button click')
  }

  render() {
    const { classes, inventory, prices } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {inventory.map((item, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">{prices[item.name]}</TableCell>
                <TableCell
                  align="right"
                >
                  <BuyItemModal
                    itemName={item.name}
                    quantity={item.quantity}
                    handleBuy={this.handleBuy}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

BuyTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {

    inventory: state.merchants[state.currentPlanetId].inventory,
    prices: state.merchants[state.currentPlanetId].prices,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyItem: (itemName, quantity, price, planet) =>
    dispatch(buyItem(itemName, quantity, price, planet)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BuyTable));
