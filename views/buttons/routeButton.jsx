import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withRouter} from 'react-router-dom';

class RouteButton extends React.Component {

  onClick = () => {
    if (this.props.addOnClick) {
      console.log(this.props.addOnClick)
      this.props.addOnClick();
    }
    this.props.history.push(this.props.routeTo);
  }

  render() {
    let { variant, color, style } = this.props;
    color = color || 'inherit';
    // colors: 'default', 'inherit', 'primary', 'secondary'
    variant = variant || 'outlined';
    // variants: 'text', 'outlined', 'contained', 'fab', 'extednedFab'
    style = style || {};

    return (
      <Button
        variant={variant}
        color={color}
        style={style}
        size="large"
        onClick={this.onClick}
      >
      {this.props.title}
      </Button>
    );
  }
}

export default withRouter(RouteButton);
