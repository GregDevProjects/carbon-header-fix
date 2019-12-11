"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _carbonComponents = require("carbon-components");

var _SkeletonText = _interopRequireDefault(require("../SkeletonText"));

var _Button = _interopRequireDefault(require("../Button/Button.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var prefix = _carbonComponents.settings.prefix;

function FileUploaderSkeleton() {
  return _react.default.createElement("div", {
    className: "".concat(prefix, "--form-item")
  }, _react.default.createElement(_SkeletonText.default, {
    heading: true,
    width: "100px"
  }), _react.default.createElement(_SkeletonText.default, {
    width: "225px",
    className: "".concat(prefix, "--label-description")
  }), _react.default.createElement(_Button.default, null));
}

var _default = FileUploaderSkeleton;
exports.default = _default;