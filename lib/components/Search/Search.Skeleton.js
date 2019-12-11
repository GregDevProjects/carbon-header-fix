"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = _carbonComponents.settings.prefix;

var SearchSkeleton = function SearchSkeleton(_ref) {
  var _classNames;

  var small = _ref.small;
  var searchClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--skeleton"), true), _defineProperty(_classNames, "".concat(prefix, "--search--xl"), !small), _defineProperty(_classNames, "".concat(prefix, "--search--sm"), small), _classNames));
  return _react.default.createElement("div", {
    className: searchClasses
  }, _react.default.createElement("span", {
    className: "".concat(prefix, "--label")
  }), _react.default.createElement("div", {
    className: "".concat(prefix, "--search-input")
  }));
};

SearchSkeleton.propTypes = {
  /**
   * Specify whether the Search should be a small variant
   */
  small: _propTypes.default.bool
};
SearchSkeleton.defaultProps = {
  small: false
};
var _default = SearchSkeleton;
exports.default = _default;