import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withRouter} from 'react-router-dom';

export class RouteButton extends React.Component {

  onClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
    this.props.history.push(this.props.routeTo);
  }

  render() {
    let { variant, color, style, size } = this.props;
    color = color || 'inherit';
    // colors: 'default', 'inherit', 'primary', 'secondary'
    variant = variant || 'outlined';
    // variants: 'text', 'outlined', 'contained', 'fab', 'extednedFab'
    style = style || {};
    size = size || 'large';

    return (
      <Button
        variant={variant}
        color={color}
        style={style}
        size={size}
        onClick={this.onClick}
      >
        {this.props.title}
      </Button>
    );
  }
}

export default withRouter(RouteButton);
