import React from 'react';
import { connect } from 'react-redux';
import PlanetInfoHome from '../planet/planetInfoHome';
import RouteButton from '../buttons/routeButton';
import GameMenu from '../menus/gameMenu';

export class NewGameTutorial extends React.Component {

  render() {

    return (
      <React.Fragment>
      <div><h1>Welcome to Green Lightning</h1></div>
      <div>
      <p>You just turned 18 and graduated from flight school. Congratulations!</p>
      <p>Thanks to your grandfather you inherited a hand-me-down spacecraft.
      You can use this spacecraft to travel to nearby planets.
      Buy resources that are in abundance on one planet,
       and sell them to another planet where they are scarce!</p>
       <p>The galaxy is filled with diverse planets, whose occupants
       have unique needs and struggles. </p>
       <p>Your grandfather gifted you 1000 Darics when he passed. You were a good boy and saved it.</p>
       <p>A new energy source has been discovered, Space Lightning, which provides humanity with an energy source like never seen before.</p>
       <p>Lightning is harvested on planets with giant metal rods and converted into energy by-products which are used to power everything from homes to spaceships.</p>
       <p>Lighting is found in 3 different forms: Yellow, Blue, and Green, with Yellow Lightning being the most dilluted and Green Lightning being the most pure.</p>
       <p>Yellow Lightning is found commonly on Terra, the planet of the human race, after their home was lost to time.</p>
       <p></p>
       <p>Your job is to help bring goods to people that need them, and make a buck while doing it!</p>
       </div>
       <div>
       <h2>How to Play</h2>
       <h3>
       <ol>
       <li>Check the Map for potential planets to fly to</li>
       <li>Visit the Merchant to buy or sell goods, and to refuel your ship</li>
       <li>Check the e-Board for contract work and news about the galaxy. Be careful who you work with...space is a dangerous place</li>
       <li>Hire a crew to help navigate through the unknowns of outer space, when you can afford it</li>
       </ol>
       </h3>
        </div>
        <center>
        <RouteButton
          title={'Ok, lets go'}
          routeTo={'/homescreen'}
        />
        </center>


      </React.Fragment>
    );
  }
}

export const mapStateToProps = state => {
  return {
    currentPlanetId: state.currentPlanetId,
    newGame: state.newGame,
  };
};

export default connect(mapStateToProps)(NewGameTutorial);
