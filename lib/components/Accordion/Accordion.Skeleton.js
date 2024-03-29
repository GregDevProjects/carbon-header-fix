"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _iconsReact = require("@carbon/icons-react");

var _carbonComponents = require("carbon-components");

var _SkeletonText = _interopRequireDefault(require("../SkeletonText"));

var _deprecate = _interopRequireDefault(require("../../prop-types/deprecate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var prefix = _carbonComponents.settings.prefix;

function AccordionSkeleton(props) {
  var numSkeletonItems = props.open ? props.count - 1 : props.count;
  return _react.default.createElement("ul", {
    className: "".concat(prefix, "--accordion ").concat(prefix, "--skeleton")
  }, props.open && _react.default.createElement("li", {
    className: "".concat(prefix, "--accordion__item ").concat(prefix, "--accordion__item--active")
  }, _react.default.createElement("span", {
    className: "".concat(prefix, "--accordion__heading")
  }, _react.default.createElement(_iconsReact.ChevronRight16, {
    className: "".concat(prefix, "--accordion__arrow")
  }), _react.default.createElement(_SkeletonText.default, {
    className: "".concat(prefix, "--accordion__title")
  })), _react.default.createElement("div", {
    className: "".concat(prefix, "--accordion__content")
  }, _react.default.createElement(_SkeletonText.default, {
    width: "90%"
  }), _react.default.createElement(_SkeletonText.default, {
    width: "80%"
  }), _react.default.createElement(_SkeletonText.default, {
    width: "95%"
  }))), Array.from({
    length: numSkeletonItems
  }).map(function (_, i) {
    return _react.default.createElement(AccordionSkeletonItem, {
      key: i
    });
  }));
}

AccordionSkeleton.propTypes = {
  /**
   * `false` to not display the first item opened
   */
  open: _propTypes.default.bool,

  /**
   * Set number of items to render
   */
  count: _propTypes.default.number,

  /**
   * Set unique identifier to generate unique item keys
   */
  uid: (0, _deprecate.default)(_propTypes.default.any)
};
AccordionSkeleton.defaultProps = {
  open: true,
  count: 4
};

function AccordionSkeletonItem() {
  return _react.default.createElement("li", {
    className: "".concat(prefix, "--accordion__item")
  }, _react.default.createElement("span", {
    className: "".concat(prefix, "--accordion__heading")
  }, _react.default.createElement(_iconsReact.ChevronRight16, {
    className: "".concat(prefix, "--accordion__arrow")
  }), _react.default.createElement(_SkeletonText.default, {
    className: "".concat(prefix, "--accordion__title")
  })));
}

var _default = AccordionSkeleton;
exports.default = _default;