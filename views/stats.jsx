import React from 'react';

// Again, Typography is a component from Material UI
// You can look at Material UI online for these components
// to get an idea of what props they takes
// and what they do
import Typography from '@material-ui/core/Typography';


// below you can see we are using the
// Typography component from Material UI

// after the word "Level", between the braces {}, (where it says this.props.value)
// any javascript written here will be executed.
// So, since in our main.jsx file we had a Stats components
// with a props of `value`, that gets passed down, and becomes the Stats
// component's `this.props.value`.  In that way,
// we can send information down the tree of components
// So if in main.jsx, value={3} within the Stats component instance
// within our component here, `this.props.value` will also equal 3
export default class Stats extends React.Component {
  render() {
    return (
      <Typography
      >
        Level: {this.props.value}
      </Typography>
    )
  }
}
