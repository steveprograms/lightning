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

    describe('when Menu is not clicked', () => {
      it('does not render MenuItems', () => {
        expect(wrapper.find('MenuItem').length).toEqual(0);
      });
    });

    describe('when Menu is clicked', () => {
      it('renders first MenuItem with correct props', () => {
        iconButton = wrapper.find('IconButton');
        iconButton.simulate('click');
        menuItem = wrapper.find('MenuItem').first();
        expect(menuItem.length).toEqual(1);
        expect(menuItem.props().onClick).toEqual(instance.handleSave);
        expect(menuItem.html()).toContain('Save');
      });

      it('renders last MenuItem with correct props', () => {
        iconButton = wrapper.find('IconButton');
        iconButton.simulate('click');
        menuItem = wrapper.find('MenuItem').last();
        expect(menuItem.length).toEqual(1);
        expect(menuItem.props().onClick).toEqual(instance.handleSaveAndExit);
        expect(menuItem.html()).toContain('Save and Exit');
      });
    });
  });

  describe('mapStateToProps', () => {
    it('maps correctly', () => {
      mapStateToProps = require('./gameMenu').mapStateToProps;
      initialState = {
        blue: {
          monster: 'ha ha'
        },
        monkey: 'banana',
      };
      expect(mapStateToProps(initialState)).toEqual({
        state: {
          ...initialState
        }
      });
    });
  });
});
