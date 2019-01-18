import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link, Switch, Route } from 'react-router-dom'

export default class MapContainer extends React.Component {
  render() {
    return (
      <div style={{width: '800px', height: '800px', backgroundColor: 'black', position: 'absolute'}}>
        <div style={{left: '150px', top: '302px', width: '5px', height: '5px', backgroundColor: 'yellow', position: 'absolute'}}/>
        <div style={{left: '53px', top: '103px', width: '5px', height: '5px', backgroundColor: 'yellow', position: 'absolute'}}/>
        <div style={{left: '445px', top: '712px', width: '5px', height: '5px', backgroundColor: 'yellow', position: 'absolute'}}/>
        <div style={{left: '598px', top: '562px', width: '5px', height: '5px', backgroundColor: 'yellow', position: 'absolute'}}/>
        <div style={{left: '687px', top: '576px', width: '5px', height: '5px', backgroundColor: 'yellow', position: 'absolute'}}/>
        <div style={{left: '483px', top: '778px', width: '5px', height: '5px', backgroundColor: 'yellow', position: 'absolute'}}/>
        <div style={{left: '266px', top: '372px', width: '5px', height: '5px', backgroundColor: 'yellow', position: 'absolute'}}/>
        <div style={{left: '754px', top: '127px', width: '5px', height: '5px', backgroundColor: 'yellow', position: 'absolute'}}/>
        <div style={{left: '298px', top: '554px', width: '5px', height: '5px', backgroundColor: 'yellow', position: 'absolute'}}/>
        <div style={{left: '600px', top: '10px', width: '5px', height: '5px', backgroundColor: 'yellow', position: 'absolute'}}/>
        <div />
        <li><Link to='/homescreen'>Home</Link></li>
      </div>
    )
  }
}
