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

function RadioButtonSkeleton() {
  return _react.default.createElement("div", {
    className: "".concat(prefix, "--radio-button-wrapper")
  }, _react.default.createElement("div", {
    className: "".concat(prefix, "--radio-button ").concat(prefix, "--skeleton")
  }), _react.default.createElement("span", {
    className: "".concat(prefix, "--radio-button__label ").concat(prefix, "--skeleton")
  }));
}

var _default = RadioButtonSkeleton;
exports.default = _default;