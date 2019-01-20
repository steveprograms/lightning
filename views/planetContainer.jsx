import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link, Switch, Route } from 'react-router-dom'

export default class MapContainer extends React.Component {



  render() {

    console.log('test');

    return (
      <div>
      <div>  This is the planet container wow isn't she a real fucking beauty </div>
      <li><Link to='/homescreen'>Home</Link></li>
      </div>
    )
  }
}
