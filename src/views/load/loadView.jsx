import React from 'react';
import LoadTitle from './loadTitle';
import StartButton from '../buttons/startButton';

let styles = {
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    bottom: '0',
    position: 'absolute',
    marginBottom: '70px',
  },
}

export default class LoadView extends React.Component {

  render() {
    let { savedGameFound, startNewGame, loadSavedGame } = this.props;

    return savedGameFound ? (
      <React.Fragment>
        <LoadTitle />
        <div
          style={styles.buttonWrapper}
        >
          <StartButton
            title={'New'}
            onClick={startNewGame}
          />
          <StartButton
            title={'Load'}
            onClick={loadSavedGame}
          />
        </div>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <LoadTitle />
        <div
          style={styles.buttonWrapper}
        >
          <StartButton
            title={'New'}
            onClick={startNewGame}
          />
        </div>
      </React.Fragment>
    );
  }
}
