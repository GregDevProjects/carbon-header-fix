"use strict";

var _react = _interopRequireDefault(require("react"));

var _iconsReact = require("@carbon/icons-react");

var _Search = _interopRequireDefault(require("../Search"));

var _Search2 = _interopRequireDefault(require("../Search/Search.Skeleton"));

var _enzyme = require("enzyme");

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var prefix = _carbonComponents.settings.prefix;
describe('Search', function () {
  describe('renders as expected', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Search.default, {
      id: "test",
      className: "extra-class",
      label: "Search Field",
      labelText: "testlabel"
    }));
    var label = wrapper.find('label');
    var textInput = wrapper.find('input');
    var container = wrapper.find(".".concat(prefix, "--search"));
    describe('container', function () {
      it('should add extra classes that are passed via className', function () {
        expect(container.hasClass('extra-class')).toEqual(true);
      });
    });
    describe('input', function () {
      it('renders as expected', function () {
        expect(textInput.length).toBe(1);
      });
      it('has the expected classes', function () {
        expect(textInput.hasClass("".concat(prefix, "--search-input"))).toEqual(true);
      });
      it('should set type as expected', function () {
        expect(textInput.props().type).toEqual('text');
        wrapper.setProps({
          type: 'email'
        });
        expect(wrapper.find('input').props().type).toEqual('email');
      });
      it('should set value as expected', function () {
        expect(textInput.props().defaultValue).toEqual(undefined);
        wrapper.setProps({
          defaultValue: 'test'
        });
        expect(wrapper.find('input').props().defaultValue).toEqual('test');
        expect(wrapper.find('input').props().value).toEqual(undefined);
      });
      it('should set placeholder as expected', function () {
        expect(textInput.props().placeholder).toEqual('');
        wrapper.setProps({
          placeHolderText: 'Enter text'
        });
        expect(wrapper.find('input').props().placeholder).toEqual('Enter text');
      });
    });
    describe('label', function () {
      it('renders a label', function () {
        expect(label.length).toBe(1);
      });
      it('has the expected classes', function () {
        expect(label.hasClass("".concat(prefix, "--label"))).toEqual(true);
      });
      it('should set label as expected', function () {
        expect(wrapper.props().label).toEqual('Search Field');
        wrapper.setProps({
          label: 'Email Input'
        });
        expect(wrapper.props().label).toEqual('Email Input');
      });
    });
    describe('Large Search', function () {
      describe('buttons', function () {
        var btns = wrapper.find('button');
        it('should be one button', function () {
          expect(btns.length).toBe(1);
        });
        it('should have type="button"', function () {
          var type1 = btns.first().instance().getAttribute('type');
          var type2 = btns.last().instance().getAttribute('type');
          expect(type1).toEqual('button');
          expect(type2).toEqual('button');
        });
      });
      describe('icons', function () {
        it('renders "search" icon', function () {
          var icons = wrapper.find(_iconsReact.Search16);
          expect(icons.length).toBe(1);
        });
        it('renders two Icons', function () {
          wrapper.setProps({
            small: false
          });
          var iconTypes = [_iconsReact.Search16, _iconsReact.Close20];
          var icons = wrapper.findWhere(function (n) {
            return iconTypes.includes(n.type());
          });
          expect(icons.length).toEqual(2);
        });
      });
    });
    describe('Small Search', function () {
      var small = (0, _enzyme.mount)(_react.default.createElement(_Search.default, {
        id: "test",
        small: true,
        className: "extra-class",
        label: "Search Field",
        labelText: "testlabel"
      }));
      var smallContainer = small.find(".".concat(prefix, "--search"));
      it('renders correct search icon', function () {
        var icons = small.find(_iconsReact.Search16);
        expect(icons.length).toBe(1);
      });
      it('should have the expected small class', function () {
        expect(smallContainer.hasClass("".concat(prefix, "--search--sm"))).toEqual(true);
      });
      it('should only have 1 button (clear)', function () {
        var btn = small.find('button');
        expect(btn.length).toEqual(1);
      });
      it('renders two Icons', function () {
        var iconTypes = [_iconsReact.Search16, _iconsReact.Close20];
        var icons = wrapper.findWhere(function (n) {
          return iconTypes.includes(n.type());
        });
        expect(icons.length).toEqual(2);
      });
    });
  });
  describe('events', function () {
    describe('enabled textinput', function () {
      var onClick = jest.fn();
      var onChange = jest.fn();
      var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Search.default, {
        id: "test",
        labelText: "testlabel",
        onClick: onClick,
        onChange: onChange
      }));
      var input = wrapper.find('input');
      var eventObject = {
        target: {
          defaultValue: 'test'
        }
      };
      it('should invoke onClick when input is clicked', function () {
        input.simulate('click');
        expect(onClick).toBeCalled();
      });
      it('should invoke onChange when input value is changed', function () {
        input.simulate('change', eventObject);
        expect(onChange).toBeCalledWith(eventObject);
      });
    });
  });
});
describe('SearchSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Search2.default, null));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass("".concat(prefix, "--skeleton"))).toEqual(true);
      expect(wrapper.hasClass("".concat(prefix, "--search--xl"))).toEqual(true);
    });
  });
});
describe('SearchSkeleton Small', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Search2.default, {
      small: true
    }));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass("".concat(prefix, "--skeleton"))).toEqual(true);
      expect(wrapper.hasClass("".concat(prefix, "--search--sm"))).toEqual(true);
    });
  });
});
describe('Detecting change in value from props', function () {
  it('changes the hasContent state upon change in props', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Search.default, {
      id: "test",
      className: "extra-class",
      label: "Search Field",
      labelText: "testlabel",
      value: "foo"
    }));
    expect(wrapper.state().hasContent).toBeTruthy();
    wrapper.setProps({
      value: ''
    });
    expect(wrapper.state().hasContent).toBeFalsy();
  });
  it('avoids change the hasContent state upon setting props, unless the value actually changes', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Search.default, {
      id: "test",
      className: "extra-class",
      label: "Search Field",
      labelText: "testlabel",
      value: "foo"
    }));
    expect(wrapper.state().hasContent).toBeTruthy();
    wrapper.setState({
      hasContent: false
    });
    wrapper.setProps({
      value: 'foo'
    });
    expect(wrapper.state().hasContent).toBeFalsy();
  });
});