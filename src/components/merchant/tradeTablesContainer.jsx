import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TradeTab from './tradetab';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class TradeTablesContainer extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Buy" />
            <Tab label="Sell" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><TradeTab transactionType={'buy'} /></TabContainer>}
        {value === 1 && <TabContainer><TradeTab transactionType={'sell'} /></TabContainer>}
      </div>
    );
  }
}

TradeTablesContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TradeTablesContainer);
