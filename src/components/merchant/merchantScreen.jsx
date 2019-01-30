import React from 'react';
import { connect } from 'react-redux';
import RouteButton from '../buttons/routeButton';
import Button from '@material-ui/core/Button';
import { refillFuel } from '../../actions/appActions';

class MerchantScreen extends React.Component {

  refillFuel = () => {
    let fuelNeeded = this.props.fuelCapacity - this.props.fuel;
    this.props.refillFuel(fuelNeeded);
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
          Dollars: {this.props.dollars}
        </div>
        -
        <div>
          Fuel in tonnes: {this.props.fuel}
        </div>
        -
        <div>
          fuel capacity: {this.props.fuelCapacity}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fuelCapacity: state.fuelCapacity,
    fuel: state.fuel,
    dollars: state.dollars,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    refillFuel: (fuelNeeded) => dispatch(refillFuel(fuelNeeded)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MerchantScreen);
