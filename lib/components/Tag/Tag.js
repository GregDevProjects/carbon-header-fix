"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.types = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

var _iconsReact = require("@carbon/icons-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;
var TYPES = {
  red: 'Red',
  magenta: 'Magenta',
  purple: 'Purple',
  blue: 'Blue',
  cyan: 'Cyan',
  teal: 'Teal',
  green: 'Green',
  gray: 'Gray',
  'cool-gray': 'Cool-Gray',
  'warm-gray': 'Warm-Gray'
};

var Tag = function Tag(_ref) {
  var _classNames;

  var children = _ref.children,
      className = _ref.className,
      type = _ref.type,
      filter = _ref.filter,
      disabled = _ref.disabled,
      other = _objectWithoutProperties(_ref, ["children", "className", "type", "filter", "disabled"]);

  var tagClass = "".concat(prefix, "--tag--").concat(type);
  var tagClasses = (0, _classnames.default)("".concat(prefix, "--tag"), tagClass, className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--tag--disabled"), disabled), _defineProperty(_classNames, "".concat(prefix, "--tag--filter"), filter), _classNames));
  return filter ? _react.default.createElement("span", _extends({
    className: tagClasses,
    title: "Clear filter",
    tabIndex: "0" // eslint-disable-line jsx-a11y/no-noninteractive-tabindex

  }, other), children !== null && children !== undefined ? children : TYPES[type], _react.default.createElement(_iconsReact.Close16, {
    "aria-label": "Clear filter"
  })) : _react.default.createElement("span", _extends({
    className: tagClasses
  }, other), children !== null && children !== undefined ? children : TYPES[type]);
};

Tag.propTypes = {
  /**
   * Provide content to be rendered inside of a <Tag>
   */
  children: _propTypes.default.node,

  /**
   * Provide a custom className that is applied to the containing <span>
   */
  className: _propTypes.default.string,

  /**
   * Specify the type of the <Tag>
   */
  type: _propTypes.default.oneOf(Object.keys(TYPES)).isRequired,

  /**
   * Specify if the <Tag> is disabled
   */
  disabled: _propTypes.default.bool,

  /**
   * Determine if <Tag> is a filter/chip
   */
  filter: _propTypes.default.bool
};
var types = Object.keys(TYPES);
exports.types = types;
var _default = Tag;
exports.default = _default;