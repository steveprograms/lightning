import React from 'react';

let styles = {
  screenOutterWrapper: {
    height: '50%',
    textAlign: 'center',
    marginTop: '100px',
  },
  screenInnerWrapper: {
    height: '50%',
    fontSize: '8em',
    textShadow: '2px 2px #00e676',
  },
  descriptionWrapper: {
    height: '50%',
    fontSize: '3em',
  },
};

export default class LoadTitle extends React.Component {
  render() {
    return (
      <div
        style={styles.screenOutterWrapper}
      >
        <div
          style={styles.screenInnerWrapper}
        >
          Green Lightning!
        </div>
        <div
          style={styles.descriptionWrapper}
        >
          The galaxy's most action filled text based game
        </div>
      </div>
    );
  }
}
