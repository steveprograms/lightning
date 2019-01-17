// whenever we use `React.anything` we need to import React
import React from 'react';

// these are helpers in the `helpers.js` file designed to make things more global
import { save, read } from './helpers';

// This is a component we created.  Look at the `stats.jsx` file to see this component
import Stats from './stats';

// This on the other hand, is a component, but not created by us.  We have access to Material UI's components
import Button from '@material-ui/core/Button';

// exporting this class allows us to use this `Main` component in other files
export default class Main extends React.Component {
  constructor(props) {
    super(props);

    //es6 is kinda fucky.  when we use methods in our class, we have to bind them to `this`
    this.addLevel = this.addLevel.bind(this);
    this.changeScreen = this.changeScreen.bind(this);

    // read() is from our helpers
    // and will take the user-data.json data and assign it
    // to our `this.data`
    this.data = read();
    this.state = {};
    // this.state.screen = 'stats';
    this.state.screen = 'stats'
    console.log("state: ", this.state)
  }

  addLevel() {
    // takes our `this.data` object, burrows to level, and adds a level
    this.data.character.stats.level += 1;

    // uses our helper's save to save the current `this.data` object
    // to our user-data.json file
    save(this.data);

    // this is a React thing and I'm not sure yet why we have to use interval
    // but it means that below, when the values change, it will cascade that
    // change to lower components so things actually update on Screen
    // in the html
    this.forceUpdate();
  }

  changeScreen() {
    console.log(this.state)
    this.state.screen = 'map';
    this.forceUpdate();
  }

  // now onto the render method.  This is what's actually returned
  // as html when the component is rendered

  // below we are adding in our Stats component that we created
  // it will use what we've put in `stats.jsx`
  // value is what's known as a prop.  if you go to the stats
  // component, you will notice we are using `this.props.value` there
  // whatever we assign to `value` here, becomes `this.props.value` within
  // our Stats component.  in this case we're assigning the level

  // below that again we use the Stats component again, and the value props
  // again, but this time we assign the spacecraft model to value
  // instead of the player's level.  Within the Stats components
  // whatever value equal, will be that component's `this.props.value`

  // near the end we are using the Button component from Material UI
  // the onClick prop means that whatever function we input
  // will be called when this component is clicked on
  // in the html
  render() {
    if (this.state.screen == 'stats'){
      return (

        <div>
          <div>
            username: { this.data.username }
          </div>
          <div>
            credits: { this.data.credits }
          </div>
          <Stats
            value={ this.data.character.stats.level }
          />
          <div>
            xp: { this.data.character.stats.xp }
          </div>
          <div>
            spacecraft:
          </div>
          <Stats
            value={ this.data.character.stats.spacecraft.model }
          />
          <div>
            year: { this.data.character.stats.spacecraft.year }
          </div>
          <div>
            value: { this.data.character.stats.spacecraft.value }
          </div>
          <div>
            cargospace: { this.data.character.stats.spacecraft.cargo_space }
          </div>
          <div/>
          <Button
            onClick={this.addLevel}
          >
          Add Level
          </Button>
          <Button
            onClick={this.changeScreen}
          >
          Map
          </Button>
        </div>
      );
    } else if (this.state.screen == 'map'){
      return(
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
        </div>
      )
    }
  }
}
