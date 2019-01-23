import React from 'react';
import { shallow } from 'enzyme';
import { HashRouter, Route, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux'


describe('<HomeScreen />', () => {
  let props
  , HomeScreen
  , wrapper;

  beforeEach(() => {
    props = {

    };

    HomeScreen = require('./homeScreen').HomeScreen;
  });

  describe('render', () => {
    it('renders <GameMenu>', () => {
      wrapper = shallow(
        <Provider>
          <MemoryRouter>
            <HomeScreen {...props} />
          </MemoryRouter>
        </Provider>
      );
      console.log('wrapper: ', wrapper.html());
      expect(wrapper.find('GameMenu').length).toEqual(1);
    });
  });
});
