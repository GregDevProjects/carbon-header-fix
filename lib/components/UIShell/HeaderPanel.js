"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _carbonComponents = require("carbon-components");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AriaPropTypes = require("../../prop-types/AriaPropTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var HeaderPanel = function HeaderPanel(_ref) {
  var _cx;

  var ariaLabel = _ref['aria-label'],
      ariaLabelledBy = _ref['aria-labelledby'],
      children = _ref.children,
      customClassName = _ref.className,
      expanded = _ref.expanded,
      other = _objectWithoutProperties(_ref, ["aria-label", "aria-labelledby", "children", "className", "expanded"]);

  var accessibilityLabel = {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy
  };
  var className = (0, _classnames.default)("".concat(prefix, "--header-panel"), (_cx = {}, _defineProperty(_cx, "".concat(prefix, "--header-panel--expanded"), expanded), _defineProperty(_cx, customClassName, !!customClassName), _cx));
  return _react.default.createElement("div", _extends({}, other, {
    className: className
  }, accessibilityLabel), children);
};

HeaderPanel.propTypes = _objectSpread({}, _AriaPropTypes.AriaLabelPropType, {
  /**
   * Optionally provide a custom class to apply to the underlying <li> node
   */
  className: _propTypes.default.string,

  /**
   * Specify whether the panel is expanded
   */
  expanded: _propTypes.default.bool
});
var _default = HeaderPanel;
exports.default = _default;