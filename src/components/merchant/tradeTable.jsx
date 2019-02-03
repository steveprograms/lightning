import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TransactionModal from '../modals/transactionModal';


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

class TradeTable extends React.Component {

  render() {
    const {
      classes,
      planetPrices,
      currentPlanetId,
      credits,
      inventory,
      prices,
      handleTransaction,
    } = this.props;
    let inventoryKeys = Object.keys(inventory);
    let filteredInventory = inventoryKeys.filter(itemName => inventory[itemName]);
    console.log('inventory: ',filteredInventory)
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
            {filteredInventory.map((itemName, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {itemName}
                </TableCell>
                <TableCell align="right">{inventory[itemName]}</TableCell>
                <TableCell align="right">{prices[itemName]}</TableCell>
                <TableCell
                  align="right"
                >
                  <TransactionModal
                    transactionSymbol={this.props.transactionSymbol}
                    transactionType={this.props.transactionType}
                    quantity={inventory[itemName]}
                    handleTransaction={() => handleTransaction(itemName)}
                    sliderValue={this.props.sliderValue}
                    handleChange={this.props.handleChange}
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

TradeTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TradeTable);
