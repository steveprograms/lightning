import React from 'react';
import { connect } from 'react-redux';
import RouteButton from '../buttons/routeButton';
import Button from '@material-ui/core/Button';
import { refillFuel } from '../../actions/appActions';
import { creditsPerTonne } from '../../data/constants'
import TradeTableContainer from './tradeTableContainer';

class MerchantScreen extends React.Component {

  refillFuel = () => {
    let { fuelCapacity, fuel, credits, refillFuel } = this.props;
    let fuelNeeded = fuelCapacity - fuel;
    let cost = fuelNeeded * creditsPerTonne;

    if (cost < credits) {
      refillFuel(fuelNeeded, cost);
    } else {
      console.log('not enough money to refill fuel, need alert');
    }
  }

  render() {

    return (
      <div>
        <RouteButton
          title={'Home'}
          routeTo={'/homescreen'}
        />
        <div/>
        -
        <Button
          color={'secondary'}
          variant={'contained'}
          onClick={this.refillFuel}
        >
         Refill Fuel
        </Button>
        <div/>
        -
        <div>
          credits: {this.props.credits}
        </div>
        -
        <div>
          Fuel in tonnes: {this.props.fuel}
        </div>
        -
        <div>
          fuel capacity: {this.props.fuelCapacity}
        </div>
        <div>
          cost to refuel: {(this.props.fuelCapacity - this.props.fuel) * 20}
        </div>
        <TradeTableContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {

  return {
    fuelCapacity: state.fuelCapacity,
    fuel: state.fuel,
    credits: state.credits,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refillFuel: (fuelNeeded, cost) => dispatch(refillFuel(fuelNeeded, cost)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MerchantScreen);
