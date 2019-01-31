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
    const { classes, planetInventories, planetPrices, currentPlanetId } = this.props;
    let inventory = planetInventories[currentPlanetId];
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
            {Object.keys(inventory).map((item, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {item}
                </TableCell>
                <TableCell align="right">{inventory[item]}</TableCell>
                <TableCell align="right">{prices[item]}</TableCell>
                <TableCell
                  align="right"
                >
                  <BuyItemModal
                    itemName={item}
                    quantity={inventory[item]}
                    handleBuy={this.handleBuy}
                    itemPrice={prices[item]}
                    currentPlanetId={this.props.currentPlanetId}
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
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyItem: (itemName, quantity, price, planet) =>
    dispatch(buyItem(itemName, quantity, price, planet)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BuyTable));
