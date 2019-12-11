"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var prefix = _carbonComponents.settings.prefix;

var tab = _react.default.createElement("li", {
  className: "".concat(prefix, "--tabs__nav-item")
}, _react.default.createElement("div", {
  className: "".concat(prefix, "--tabs__nav-link")
}, "\xA0"));

function TabsSkeleton() {
  return _react.default.createElement("div", {
    className: "".concat(prefix, "--tabs ").concat(prefix, "--skeleton")
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--tabs-trigger")
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--tabs-trigger-text")
  }, "\xA0"), _react.default.createElement("svg", {
    width: "10",
    height: "5",
    viewBox: "0 0 10 5",
    fillRule: "evenodd"
  }, _react.default.createElement("path", {
    d: "M10 0L5 5 0 0z"
  }))), _react.default.createElement("ul", {
    className: "".concat(prefix, "--tabs__nav ").concat(prefix, "--tabs__nav--hidden")
  }, tab, tab, tab, tab));
}

var _default = TabsSkeleton;
exports.default = _default;