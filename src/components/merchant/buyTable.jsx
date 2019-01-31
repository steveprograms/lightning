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
import TransactionModal from '../modals/transactionModal';
import { buyItems } from '../../actions/appActions';


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
  state = {
    sliderValue: 1,
  }

  handleBuy = (itemName) => {
    let { credits, currentPlanetId, planetPrices, buyItems } = this.props;
    let { sliderValue } = this.state;
    let itemPrice = planetPrices[currentPlanetId][itemName];
    let buyPrice = sliderValue * itemPrice;

    if (buyPrice <= credits) {
      buyItems(currentPlanetId, itemName, buyPrice, sliderValue);
    }
    if (buyPrice > credits) {
      console.log('Problem: You do not have enough money')
    }
  }

  handleChange = (event, sliderValue) => {
    this.setState({ sliderValue });
  };

  render() {
    const {
      classes,
      planetInventories,
      planetPrices,
      currentPlanetId,
      credits
    } = this.props;
    let inventory = planetInventories[currentPlanetId];
    let inventoryKeys = Object.keys(inventory);
    let filteredInventory = inventoryKeys.filter(itemName => inventory[itemName]);
    let prices = planetPrices[currentPlanetId];

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
                    transactionSymbol={'+'}
                    transactionType={'Buy'}
                    quantity={inventory[itemName]}
                    handleTransaction={() => this.handleBuy(itemName)}
                    sliderValue={this.state.sliderValue}
                    handleChange={this.handleChange}
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
    currentPlanetId: state.currentPlanetId,
    planetInventories: state.planetInventories,
    planetPrices: state.planetPrices,
    credits: state.credits,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyItems: (currentPlanetId, itemName, buyPrice, buyQuantity) =>
    dispatch(buyItems(currentPlanetId, itemName, buyPrice, buyQuantity)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BuyTable));
