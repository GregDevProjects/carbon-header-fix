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

var step = _react.default.createElement("li", {
  className: "".concat(prefix, "--progress-step ").concat(prefix, "--progress-step--incomplete")
}, _react.default.createElement("div", {
  className: "".concat(prefix, "--progress-step-button ").concat(prefix, "--progress-step-button--unclickable")
}, _react.default.createElement("svg", null, _react.default.createElement("path", {
  d: "M 7, 7 m -7, 0 a 7,7 0 1,0 14,0 a 7,7 0 1,0 -14,0"
})), _react.default.createElement("p", {
  className: "".concat(prefix, "--progress-label")
}), _react.default.createElement("span", {
  className: "".concat(prefix, "--progress-line")
})));

function ProgressIndicatorSkeleton() {
  return _react.default.createElement("ul", {
    className: "".concat(prefix, "--progress ").concat(prefix, "--skeleton")
  }, step, step, step, step);
}

var _default = ProgressIndicatorSkeleton;
exports.default = _default;