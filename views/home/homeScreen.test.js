import React from 'react';
import { shallow } from 'enzyme';

describe('<HomeScreen />', () => {
  let props
  , HomeScreen
  , wrapper;

  beforeEach(() => {
    props = {

    };

    HomeScreen = require('./homeScreen').default;
  });

  describe('render', () => {
    it('renders <GameMenu>', () => {
      wrapper = shallow(<HomeScreen {...props} />);
      console.log('wrapper: ', wrapper.html());
      expect(wrapper.find('GameMenu').length).toEqual(1);
    });
  });
});
