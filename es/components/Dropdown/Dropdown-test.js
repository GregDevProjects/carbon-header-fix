function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { assertMenuOpen, assertMenuClosed, findMenuItemNode, openMenu, generateItems, generateGenericItem } from '../ListBox/test-helpers';
import Dropdown from '../Dropdown';
import DropdownSkeleton from '../Dropdown/Dropdown.Skeleton';
import { settings } from 'carbon-components';
var prefix = settings.prefix;
describe('Dropdown', function () {
  var mockProps;
  beforeEach(function () {
    mockProps = {
      id: 'test-dropdown',
      items: generateItems(5, generateGenericItem),
      onChange: jest.fn(),
      label: 'input',
      placeholder: 'Filter...',
      type: 'default'
    };
  });
  it('should render', function () {
    var wrapper = mount(React.createElement(Dropdown, mockProps));
    expect(wrapper).toMatchSnapshot();
  });
  it('should initially render with the menu not open', function () {
    var wrapper = mount(React.createElement(Dropdown, mockProps));
    assertMenuClosed(wrapper);
  });
  it('should let the user open the menu by clicking on the control', function () {
    var wrapper = mount(React.createElement(Dropdown, mockProps));
    openMenu(wrapper);
    assertMenuOpen(wrapper, mockProps);
  });
  it('should render with strings as items', function () {
    var wrapper = mount(React.createElement(Dropdown, _extends({}, mockProps, {
      items: ['zar', 'doz']
    })));
    openMenu(wrapper);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render custom item components', function () {
    var wrapper = mount(React.createElement(Dropdown, mockProps));
    wrapper.setProps({
      itemToElement: function itemToElement(item) {
        return React.createElement("div", {
          className: "mock-item"
        }, item.label);
      }
    });
    openMenu(wrapper);
    expect(wrapper).toMatchSnapshot();
  });
  describe('title', function () {
    var wrapper;
    var renderedLabel;
    beforeEach(function () {
      wrapper = mount(React.createElement(Dropdown, _extends({
        titleText: "Email Input"
      }, mockProps)));
      renderedLabel = wrapper.find('label');
    });
    it('renders a title', function () {
      expect(renderedLabel.length).toBe(1);
    });
    it('has the expected classes', function () {
      expect(renderedLabel.hasClass("".concat(prefix, "--label"))).toEqual(true);
    });
    it('should set title as expected', function () {
      expect(renderedLabel.text()).toEqual('Email Input');
    });
  });
  describe('helper', function () {
    it('renders a helper', function () {
      var wrapper = mount(React.createElement(Dropdown, _extends({
        helperText: "Email Input"
      }, mockProps)));
      var renderedHelper = wrapper.find(".".concat(prefix, "--form__helper-text"));
      expect(renderedHelper.length).toEqual(1);
    });
    it('renders children as expected', function () {
      var wrapper = mount(React.createElement(Dropdown, _extends({
        helperText: React.createElement("span", null, "This helper text has ", React.createElement("a", {
          href: "/"
        }, "a link"), ".")
      }, mockProps)));
      var renderedHelper = wrapper.find(".".concat(prefix, "--form__helper-text"));
      expect(renderedHelper.props().children).toEqual(React.createElement("span", null, "This helper text has ", React.createElement("a", {
        href: "/"
      }, "a link"), "."));
    });
    it('should set helper text as expected', function () {
      var wrapper = mount(React.createElement(Dropdown, mockProps));
      wrapper.setProps({
        helperText: 'Helper text'
      });
      var renderedHelper = wrapper.find(".".concat(prefix, "--form__helper-text"));
      expect(renderedHelper.text()).toEqual('Helper text');
    });
  });
  it('should specify light version as expected', function () {
    var wrapper = mount(React.createElement(Dropdown, mockProps));
    expect(wrapper.props().light).toEqual(false);
    wrapper.setProps({
      light: true
    });
    expect(wrapper.props().light).toEqual(true);
  });
  it('should let the user select an option by clicking on the option node', function () {
    var wrapper = mount(React.createElement(Dropdown, mockProps));
    openMenu(wrapper);
    findMenuItemNode(wrapper, 0).simulate('click');
    expect(mockProps.onChange).toHaveBeenCalledTimes(1);
    expect(mockProps.onChange).toHaveBeenCalledWith({
      selectedItem: mockProps.items[0]
    });
    assertMenuClosed(wrapper);
    mockProps.onChange.mockClear();
    openMenu(wrapper);
    findMenuItemNode(wrapper, 1).simulate('click');
    expect(mockProps.onChange).toHaveBeenCalledTimes(1);
    expect(mockProps.onChange).toHaveBeenCalledWith({
      selectedItem: mockProps.items[1]
    });
  });
  describe('should display initially selected item found in `initialSelectedItem`', function () {
    it('using an object type for the `initialSelectedItem` prop', function () {
      var wrapper = mount(React.createElement(Dropdown, _extends({}, mockProps, {
        initialSelectedItem: mockProps.items[0]
      })));
      expect(wrapper.find("span.".concat(prefix, "--list-box__label")).text()).toEqual(mockProps.items[0].label);
    });
    it('using a string type for the `initialSelectedItem` prop', function () {
      // Replace the 'items' property in mockProps with a list of strings
      mockProps = _objectSpread({}, mockProps, {
        items: ['1', '2', '3']
      });
      var wrapper = mount(React.createElement(Dropdown, _extends({}, mockProps, {
        initialSelectedItem: mockProps.items[1]
      })));
      expect(wrapper.find("span.".concat(prefix, "--list-box__label")).text()).toEqual(mockProps.items[1]);
    });
  });
});
describe('DropdownSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(DropdownSkeleton, {
      inline: true
    }));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass("".concat(prefix, "--skeleton"))).toEqual(true);
      expect(wrapper.hasClass("".concat(prefix, "--dropdown-v2"))).toEqual(true);
      expect(wrapper.hasClass("".concat(prefix, "--list-box--inline"))).toEqual(true);
    });
  });
});