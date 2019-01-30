import React from 'react';
import { connect } from 'react-redux';
import RouteButton from '../buttons/routeButton';

class MerchantScreen extends React.Component {

  render() {

    return (
      <div>
        <RouteButton
          title={'Home'}
          routeTo={'/homescreen'}
        />
        Merchant MANNNNNN
        <div>
          Nanobucks: {this.props.nanobucks}
        </div>
        <div>
          Inventory: {this.props.inventory}
        </div>
        <div>
          Ship Hold Limit: {this.props.shipHoldLimit}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {

  //generate merchant items

  return {
    inventory: state.inventory,
    nanobucks: state.dollars,
    shipHoldLimit: state.shipHoldLimit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MerchantScreen);
