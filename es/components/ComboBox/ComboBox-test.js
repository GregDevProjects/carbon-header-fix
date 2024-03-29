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
import { mount } from 'enzyme';
import { findMenuNode, findMenuItemNode, openMenu, assertMenuOpen, generateItems, generateGenericItem } from '../ListBox/test-helpers';
import ComboBox from '../ComboBox';
import { settings } from 'carbon-components';
var prefix = settings.prefix;

var findInputNode = function findInputNode(wrapper) {
  return wrapper.find(".".concat(prefix, "--text-input"));
};

var downshiftActions = {
  setHighlightedIndex: jest.fn()
};

var clearInput = function clearInput(wrapper) {
  return wrapper.instance().handleOnStateChange({
    inputValue: ''
  }, downshiftActions);
};

describe('ComboBox', function () {
  var mockProps;
  beforeEach(function () {
    mockProps = {
      id: 'test-combobox',
      items: generateItems(5, generateGenericItem),
      onChange: jest.fn(),
      placeholder: 'Filter...',
      type: 'default'
    };
  });
  it('should display the placeholder text when no items are selected and the control is not focused', function () {
    var wrapper = mount(React.createElement(ComboBox, mockProps));
    expect(findInputNode(wrapper).prop('value')).toBe('');
    expect(findInputNode(wrapper).prop('placeholder')).toBe(mockProps.placeholder);
  });
  it('should display the menu of items when a user clicks on the input', function () {
    var wrapper = mount(React.createElement(ComboBox, mockProps));
    findInputNode(wrapper).simulate('click');
    assertMenuOpen(wrapper, mockProps);
  });
  it('should call `onChange` each time an item is selected', function () {
    var wrapper = mount(React.createElement(ComboBox, mockProps));
    expect(mockProps.onChange).not.toHaveBeenCalled();

    for (var i = 0; i < mockProps.items.length; i++) {
      clearInput(wrapper);
      openMenu(wrapper);
      findMenuItemNode(wrapper, i).simulate('click');
      expect(mockProps.onChange).toHaveBeenCalledTimes(i + 1);
      expect(mockProps.onChange).toHaveBeenCalledWith({
        selectedItem: mockProps.items[i]
      });
    }
  });
  it('capture filter text events', function () {
    var onInputChange = jest.fn();
    var wrapper = mount(React.createElement(ComboBox, _extends({}, mockProps, {
      onInputChange: onInputChange
    })));
    findInputNode(wrapper).simulate('change', {
      target: {
        value: 'something'
      }
    });
    expect(onInputChange).toHaveBeenCalledWith('something');
  });
  it('should render custom item components', function () {
    var wrapper = mount(React.createElement(ComboBox, mockProps));
    wrapper.setProps({
      itemToElement: function itemToElement(item) {
        return React.createElement("div", {
          className: "mock-item"
        }, item.text);
      }
    });
    openMenu(wrapper);
    expect(wrapper.find(".mock-item").length).toBe(mockProps.items.length);
  });
  describe('should display initially selected item found in `initialSelectedItem`', function () {
    it('using an object type for the `initialSelectedItem` prop', function () {
      var wrapper = mount(React.createElement(ComboBox, _extends({}, mockProps, {
        initialSelectedItem: mockProps.items[0]
      })));
      expect(findInputNode(wrapper).prop('value')).toEqual(mockProps.items[0].label);
    });
    it('using a string type for the `initialSelectedItem` prop', function () {
      // Replace the 'items' property in mockProps with a list of strings
      mockProps = _objectSpread({}, mockProps, {
        items: ['1', '2', '3']
      });
      var wrapper = mount(React.createElement(ComboBox, _extends({}, mockProps, {
        initialSelectedItem: mockProps.items[1]
      })));
      expect(findInputNode(wrapper).prop('value')).toEqual(mockProps.items[1]);
    });
  });
  describe('when disabled', function () {
    it('should not let the user edit the input node', function () {
      var wrapper = mount(React.createElement(ComboBox, _extends({}, mockProps, {
        disabled: true
      })));
      expect(findInputNode(wrapper).prop('disabled')).toBe(true);
      expect(findInputNode(wrapper).prop('value')).toBe('');
      findInputNode(wrapper).simulate('change', {
        target: {
          value: 'a'
        }
      });
      expect(findInputNode(wrapper).prop('value')).toBe('');
    });
    it('should not let the user expand the menu', function () {
      var wrapper = mount(React.createElement(ComboBox, _extends({}, mockProps, {
        disabled: true
      })));
      openMenu(wrapper);
      expect(findMenuNode(wrapper).length).toBe(0);
    });
  });
  describe('downshift quirks', function () {
    it('should not trigger the menu when typing a space in input', function () {
      var wrapper = mount(React.createElement(ComboBox, mockProps));
      openMenu(wrapper);
      findInputNode(wrapper).simulate('change', {
        target: {
          value: ' '
        }
      });
      expect(findMenuNode(wrapper).length).toBe(1);
    });
    it('should set `inputValue` to an empty string if a falsey-y value is given', function () {
      var wrapper = mount(React.createElement(ComboBox, mockProps));
      wrapper.instance().handleOnStateChange({
        inputValue: 'foo'
      }, downshiftActions);
      expect(wrapper.state('inputValue')).toBe('foo');
      wrapper.instance().handleOnStateChange({
        inputValue: null
      }, downshiftActions);
      expect(wrapper.state('inputValue')).toBe('');
    });
  });
});