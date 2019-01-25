import React from 'react';
import { mount } from 'enzyme';

describe('GameMenu', () => {
  let props
  , GameMenu
  , wrapper
  , iconButton
  , initialState
  , mapStateToProps
  , instance
  , menu
  , firstMenuItem
  , secondMenuItem
  , helpers;

  beforeEach(() => {
    jest.resetModules();
    props = {
      history: [],
    };

    helpers = {
      saveStateToFile: jest.fn(() => {
      }),
    };

    jest.setMock('../../../src/components/helpers/helper', helpers);

    GameMenu = require('../../../src/components/menus/gameMenu').GameMenu;
    wrapper = mount(<GameMenu {...props} />);
    instance = wrapper.instance();
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
      it('renders MenuItems with correct props', () => {
        iconButton = wrapper.find('#game-menu-icon').hostNodes();
        iconButton.simulate('click');
        firstMenuItem = wrapper.find('MenuItem').first();
        secondMenuItem = wrapper.find('MenuItem').last();
        expect(firstMenuItem.length).toEqual(1);
        expect(firstMenuItem.props().onClick).toEqual(instance.handleSave);
        expect(firstMenuItem.html()).toContain('Save');
        expect(secondMenuItem.length).toEqual(1);
        expect(secondMenuItem.props().onClick).toEqual(instance.handleSaveAndExit);
        expect(secondMenuItem.html()).toContain('Save and Exit');
      });
    });
  });

  describe('initial class state', () => {
    it('sets anchorEl to null', () => {
      expect(instance.state.anchorEl).toEqual(null);
    });
  });

  describe('handleClick', () => {
    it('sets states anchorEl to event Current Target', () => {
      instance.setState = jest.fn();
      wrapper.update();
      instance.handleClick({ currentTarget: 'a monster mash' });
      expect(instance.setState).toBeCalledWith({ anchorEl: 'a monster mash' });
    });
  });

  describe('handleSave', () => {
    it('saves state to file', () => {
      instance.handleClose = jest.fn();
      wrapper.update();
      instance.handleSave();
      expect(helpers.saveStateToFile).toBeCalled();
      expect(instance.handleClose).toBeCalled();
    });
  });

  describe('handleSaveAndExit', () => {
    it('saves state to file', () => {
      expect(instance.props.history).toEqual([]);
      instance.handleClose = jest.fn();
      wrapper.update();
      instance.handleSaveAndExit();
      expect(helpers.saveStateToFile).toBeCalled();
      expect(instance.handleClose).toBeCalled();
      expect(instance.props.history).toEqual(['/loadingscreen']);
    });
  });

  describe('handleClose', () => {
    it('sets states anchorEl to event Current Target', () => {
      instance.setState = jest.fn();
      wrapper.update();
      instance.handleClose();
      expect(instance.setState).toBeCalledWith({ anchorEl: null });
    });
  });

  describe('mapStateToProps', () => {
    it('maps correctly', () => {
      mapStateToProps = require('../../../src/components/menus/gameMenu').mapStateToProps;
      initialState = {
        blue: {
          monster: 'ha ha',
        },
        monkey: jest.fn(),
      };
      expect(mapStateToProps(initialState)).toEqual({
        state: {...initialState}
      });
    });
  });
});
