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
    let { credits, currentPlanetId, buyItems } = this.props;
    let { sliderValue } = this.state;
    let itemPrice = this.props.planetPrices[currentPlanetId][itemName];
    console.log('itemPrices: ', itemPrice)
    let buyPrice = sliderValue * itemPrice;

    if (buyPrice <= credits) {
      buyItems(currentPlanetId, itemName, buyPrice, sliderValue);
    }
    if (buyPrice > credits) {
      console.log('Problem: You do not have enough money')
    }
  }

  handleSell = (itemName) => {
    let { credits, currentPlanetId, sellItems } = this.props;
    let { sliderValue } = this.state;
    let itemPrice = this.props.planetPrices[currentPlanetId][itemName];
    console.log('itemPrices: ', itemPrice)
    let sellPrice = sliderValue * itemPrice;

    if (sellPrice <= credits) {
      sellItems(currentPlanetId, itemName, sellPrice, sliderValue);
    }
    if (sellPrice > credits) {
      console.log('Problem: You do not have enough money')
    }
  }

  render() {
    let { transactionType, currentPlanetId, planetInventories, planetPrices } = this.props;
    if (transactionType == 'buy') {
      return (
        <TradeTable
          transactionSymbol={'+'}
          transactionType={'Buy'}
          currentPlanetId={currentPlanetId}
          inventory={planetInventories[currentPlanetId]}
          prices={planetPrices[currentPlanetId]}
          handleTransaction={this.handleBuy}
          sliderValue={this.state.sliderValue}
          handleChange={this.handleChange}
        />
      );
    }
    if (transactionType == 'sell') {
      return (
        <TradeTable
          transactionSymbol={'-'}
          transactionType={'Sell'}
          currentPlanetId={currentPlanetId}
          inventory={planetInventories[currentPlanetId]}
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
