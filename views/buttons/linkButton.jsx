import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default class LinkButton extends React.Component {
  render() {
    let {
      height,
      width,
      color,
      variant,
      routeTo,
      title,
      textColor,
      style,
    } = this.props;

    height = height || '35px';
    width = width || '50px';
    variant = variant || 'contained';
    color = color || 'default';
    routeTo = routeTo || '/';
    title = title || routeTo;
    textColor = textColor || 'black';
    style = Object.assign(
      {
        position: 'relative',
        height: height,
        width: width
      }, style
    );

    return (
      <div>
        <Button
          variant={variant}
          color={color}
          size="large"
          style={style}
          onClick={this.props.onClick}
        >
          <Link
            to={routeTo}
            style={{position: 'absolute', textDecoration: 'none', color: textColor}}
          >{title}
          </Link>
        </Button>
      </div>
    );
  }
}
