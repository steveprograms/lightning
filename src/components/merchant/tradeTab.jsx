import React from 'react';
import TradeTable from './tradeTable';
import { connect } from 'react-redux';
import { buyItems, sellItems } from '../../actions/appActions';


class TradeTab extends React.Component {
  state = {
    sliderValue: 1,
  }

  handleChange = (event, sliderValue) => {
    this.setState({ sliderValue });
  };

  handleBuy = (itemName) => {
    let { credits, currentPlanetId, buyItems, planetPrices } = this.props;
    let { sliderValue } = this.state;
    let itemPrice = planetPrices[currentPlanetId][itemName];
    let buyPrice = sliderValue * itemPrice;

    // check that planet has enough iventory?

    if (buyPrice <= credits) {
      buyItems(currentPlanetId, itemName, buyPrice, sliderValue);
    }
    if (buyPrice > credits) {
      console.log('Problem: You do not have enough money')
    }
  }

  handleSell = (itemName) => {
    let { currentPlanetId, sellItems, planetPrices, playerInventory } = this.props;
    let { sliderValue } = this.state;
    let itemPrice = planetPrices[currentPlanetId][itemName];
    let sellPrice = sliderValue * itemPrice;

    if (sliderValue <= playerInventory[itemName]) {
      sellItems(currentPlanetId, itemName, sellPrice, sliderValue);
    }
    if (sliderValue > playerInventory[itemName]) {
      console.log('Problem: You dont have enough of this item to sell')
    }
  }

  render() {
    let {
      transactionType,
      currentPlanetId,
      planetInventories,
      planetPrices,
      playerInventory,
    } = this.props;

    if (transactionType == 'Buy') {
      return (
        <TradeTable
          transactionSymbol={'+'}
          transactionType={transactionType}
          currentPlanetId={currentPlanetId}
          inventory={planetInventories[currentPlanetId]}
          prices={planetPrices[currentPlanetId]}
          handleTransaction={this.handleBuy}
          sliderValue={this.state.sliderValue}
          handleChange={this.handleChange}
        />
      );
    }
    if (transactionType == 'Sell') {
      return (
        <TradeTable
          transactionSymbol={'-'}
          transactionType={transactionType}
          currentPlanetId={currentPlanetId}
          inventory={playerInventory}
          prices={planetPrices[currentPlanetId]}
          handleTransaction={this.handleSell}
          sliderValue={this.state.sliderValue}
          handleChange={this.handleChange}
        />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    currentPlanetId: state.currentPlanetId,
    planetInventories: state.planetInventories,
    planetPrices: state.planetPrices,
    credits: state.credits,
    playerInventory: state.playerInventory
  };
}

const mapDispatchToProps = dispatch => {
  return {
    buyItems: (currentPlanetId, itemName, buyPrice, buyQuantity) =>
    dispatch(buyItems(currentPlanetId, itemName, buyPrice, buyQuantity)),
    sellItems: (currentPlanetId, itemName, sellPrice, sellQuantity) =>
    dispatch(sellItems(currentPlanetId, itemName, sellPrice, sellQuantity)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TradeTab);
