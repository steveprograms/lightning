import React from 'react';
import { connect } from 'react-redux';
import LinkButton from './buttons/LinkButton';

class MerchantScreen extends React.Component {

  render() {
    return (
      <div>
        <LinkButton
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
  return {
    inventory: state.inventory,
    nanobucks: state.nanobucks,
    shipHoldLimit: state.shipHoldLimit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MerchantScreen);
