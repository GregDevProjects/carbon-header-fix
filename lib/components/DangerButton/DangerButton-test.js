"use strict";

var _react = _interopRequireDefault(require("react"));

var _DangerButton = _interopRequireDefault(require("../DangerButton"));

var _enzyme = require("enzyme");

var _iconsReact = require("@carbon/icons-react");

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var prefix = _carbonComponents.settings.prefix;
describe('DangerButton', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_DangerButton.default, {
      small: true,
      className: "extra-class"
    }, _react.default.createElement("div", {
      className: "child"
    }, "Test"), _react.default.createElement("div", {
      className: "child"
    }, "Test")));
    it('Renders children as expected', function () {
      expect(wrapper.find('.child').length).toBe(2);
      expect(wrapper.find('svg').length).toBe(0);
    });
    it('Renders wrapper as expected', function () {
      expect(wrapper.length).toBe(1);
    });
    it('Has kind="danger"', function () {
      expect(wrapper.props().kind).toEqual('danger');
    });
    it('Has small property', function () {
      expect(wrapper.props().small).toEqual(true);
    });
    it('Should add extra classes that are passed via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
    describe('Renders icon buttons', function () {
      var iconButton = (0, _enzyme.mount)(_react.default.createElement(_DangerButton.default, {
        renderIcon: _iconsReact.Search16,
        iconDescription: "Search"
      }, "Search"));
      var icon = iconButton.find('svg');
      it('should have the appropriate icon', function () {
        expect(icon.hasClass("".concat(prefix, "--btn__icon"))).toBe(true);
      });
    });
  });
});