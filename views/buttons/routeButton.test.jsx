import React from 'react';
import { mount } from 'enzyme';

describe('RouteButton', () => {
  let props
  , RouteButton
  , wrapper
  , instance
  , button;

  beforeEach(() => {
    jest.resetModules();

    props = {
      onClick: jest.fn(),
      history: [],
      variant: 'text',
      color: 'default',
      style: {width: '2px'},
      title: 'Hallo',
      size: 'medium',
      routeTo: '/loadingscreen',
    };

    RouteButton = require('../buttons/routeButton').RouteButton;
    wrapper = mount(<RouteButton {...props} />);
    instance = wrapper.instance();
  });

  describe('render', () => {
    it('renders <RouteButton>', () => {
      expect(wrapper.length).toEqual(1);
    });

    it('renders Button with correct props and title', () => {
      button = wrapper.find('Button');
      expect(button.length).toEqual(1);
      expect(button.props().variant).toEqual(props.variant);
      expect(button.props().color).toEqual(props.color);
      expect(button.props().style).toEqual(props.style);
      expect(button.props().size).toEqual(props.size);
      expect(button.props().onClick).toEqual(instance.onClick);
      expect(button.text()).toEqual('Hallo');
    });

    describe('when no props are given', () => {
      it('renders Button with defaults', () => {
        props = {};
        wrapper = mount(<RouteButton {...props} />);
        instance = wrapper.instance();
        button = wrapper.find('Button');
        expect(button.length).toEqual(1);
        expect(button.props().variant).toEqual('outlined');
        expect(button.props().color).toEqual('inherit');
        expect(button.props().style).toEqual({});
        expect(button.props().size).toEqual('large');
        expect(button.props().onClick).toEqual(instance.onClick);
      });
    });
  });

  describe('onClick', () => {
    it('routes correctly', () => {
      expect(instance.props.history).toEqual([]);
      instance.onClick();
      expect(instance.props.history).toEqual(['/loadingscreen']);
    });

    describe('when props has an onClick', () => {
      it('fires onClick', () => {
        instance.onClick();
        expect(instance.props.onClick).toBeCalled();
      });
    });
  });
});
