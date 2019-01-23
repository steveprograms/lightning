import React from 'react';
import { shallow, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

describe('<GameMenu />', () => {
  let props
  , GameMenu
  , wrapper
  , iconButton
  , initialState
  , mapStateToProps
  , instance
  , menu
  , state
  , menuItem;

  beforeEach(() => {
    props = {

    };

    GameMenu = require('./gameMenu').GameMenu;
    wrapper = mount(<GameMenu {...props} />);
    instance = wrapper.instance()
  });

  describe('render', () => {
    it('renders <GameMenu>', () => {
      expect(wrapper.length).toEqual(1);
    });

    it('renders IconButton with correct props', () => {
      iconButton = wrapper.find('IconButton');
      expect(iconButton.length).toEqual(1);
      expect(iconButton.props().onClick).toEqual(instance.handleClick);
    });

    it('renders Menu with correct props', () => {
      menu = wrapper.find('Menu');
      expect(menu.length).toEqual(1);
      expect(menu.props().onClose).toEqual(instance.handleClose);
    });

    describe('when anchorEl is false', () => {

    });

    describe('when anchorEl is true', () => {

    });

    it('renders first MenuItem with correct props', () => {
      console.log(wrapper.find('Menu').html());
      menuItem = wrapper.find('MenuItem').first();
      expect(menuItem.length).toEqual(1);
      expect(menuItem.props().onClick).toEqual(instance.handleSave);
    });

    it('renders last MenuItem with correct props', () => {
      menuItem = wrapper.find('MenuItem').last();
      expect(menuItem.length).toEqual(1);
      expect(menuItem.props().onClose).toEqual(instance.handleSaveAndExit);
    });
  });
});
