import React from 'react';
import { shallow } from 'enzyme';
import { GameMenu } from '../menus/gameMenu';
import { RouteButton } from '../buttons/routeButton';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

describe('<HomeScreen />', () => {
  let props
  , HomeScreen
  , wrapper
  , routeButton
  , planetInfoHome
  , initialState
  , mapStateToProps;

  beforeEach(() => {
    props = {
      currentPlanetId: 'terra'
    };

    jest.setMock('../buttons/routeButton', RouteButton);
    jest.setMock('../menus/gameMenu', GameMenu);

    HomeScreen = require('./homeScreen').HomeScreen;
  });

  describe('render', () => {
    it('renders <HomeScreen>', () => {
      wrapper = shallow(<HomeScreen {...props} />);
      expect(wrapper.length).toEqual(1);
    });

    it('renders Map <RouteButton> with correct props', () => {
      wrapper = shallow(<HomeScreen {...props} />);
      routeButton = wrapper.find('RouteButton[title="Map"]');
      expect(routeButton.length).toEqual(1);
      expect(routeButton.props().title).toEqual('Map');
      expect(routeButton.props().routeTo).toEqual('/mapscreen');
    });

    it('renders Merchant <RouteButton> with correct props', () => {
      wrapper = shallow(<HomeScreen {...props} />);
      routeButton = wrapper.find('RouteButton[title="Merchant"]');
      expect(routeButton.length).toEqual(1);
      expect(routeButton.props().title).toEqual('Merchant');
      expect(routeButton.props().routeTo).toEqual('/merchantscreen');
    });

    it('renders <PlanetInfoHome> with correct props', () => {
      wrapper = shallow(<HomeScreen {...props} />);
      planetInfoHome = wrapper.find('PlanetInfoHome');
      expect(planetInfoHome.length).toEqual(1);
      expect(planetInfoHome.props().currentPlanetId).toEqual(props.currentPlanetId);
    });
  });

  describe('mapStateToProps', () => {
    it('maps correctly', () => {
      mapStateToProps = require('./homeScreen').mapStateToProps;
      initialState = {
        currentPlanetId: 'abba',
      };
      expect(mapStateToProps(initialState).currentPlanetId).toEqual('abba');
    });
  });
});
