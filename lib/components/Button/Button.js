"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

var _types = require("../../prop-types/types");

var _deprecate = _interopRequireDefault(require("../../prop-types/deprecate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var Button = _react.default.forwardRef(function Button(_ref, ref) {
  var _classNames;

  var children = _ref.children,
      as = _ref.as,
      className = _ref.className,
      disabled = _ref.disabled,
      small = _ref.small,
      size = _ref.size,
      kind = _ref.kind,
      href = _ref.href,
      tabIndex = _ref.tabIndex,
      type = _ref.type,
      ButtonImageElement = _ref.renderIcon,
      iconDescription = _ref.iconDescription,
      hasIconOnly = _ref.hasIconOnly,
      tooltipPosition = _ref.tooltipPosition,
      tooltipAlignment = _ref.tooltipAlignment,
      other = _objectWithoutProperties(_ref, ["children", "as", "className", "disabled", "small", "size", "kind", "href", "tabIndex", "type", "renderIcon", "iconDescription", "hasIconOnly", "tooltipPosition", "tooltipAlignment"]);

  var buttonClasses = (0, _classnames.default)(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--btn"), true), _defineProperty(_classNames, "".concat(prefix, "--btn--field"), size === 'field'), _defineProperty(_classNames, "".concat(prefix, "--btn--sm"), size === 'small' || small), _defineProperty(_classNames, "".concat(prefix, "--btn--primary"), kind === 'primary'), _defineProperty(_classNames, "".concat(prefix, "--btn--danger"), kind === 'danger'), _defineProperty(_classNames, "".concat(prefix, "--btn--secondary"), kind === 'secondary'), _defineProperty(_classNames, "".concat(prefix, "--btn--ghost"), kind === 'ghost'), _defineProperty(_classNames, "".concat(prefix, "--btn--danger--primary"), kind === 'danger--primary'), _defineProperty(_classNames, "".concat(prefix, "--btn--tertiary"), kind === 'tertiary'), _defineProperty(_classNames, "".concat(prefix, "--btn--disabled"), disabled), _defineProperty(_classNames, "".concat(prefix, "--btn--icon-only"), hasIconOnly), _defineProperty(_classNames, "".concat(prefix, "--tooltip__trigger"), hasIconOnly), _defineProperty(_classNames, "".concat(prefix, "--tooltip--a11y"), hasIconOnly), _defineProperty(_classNames, "".concat(prefix, "--tooltip--").concat(tooltipPosition), hasIconOnly && tooltipPosition), _defineProperty(_classNames, "".concat(prefix, "--tooltip--align-").concat(tooltipAlignment), hasIconOnly && tooltipAlignment), _classNames));
  var commonProps = {
    tabIndex: tabIndex,
    className: buttonClasses,
    ref: ref
  };
  var buttonImage = !ButtonImageElement ? null : _react.default.createElement(ButtonImageElement, {
    "aria-label": iconDescription,
    className: "".concat(prefix, "--btn__icon"),
    "aria-hidden": "true"
  });
  var component = 'button';
  var otherProps = {
    disabled: disabled,
    type: type
  };
  var anchorProps = {
    role: 'button',
    href: href
  };
  var assistiveText = hasIconOnly ? _react.default.createElement("span", {
    className: "".concat(prefix, "--assistive-text")
  }, iconDescription) : null;

  if (as) {
    component = as;
    otherProps = _objectSpread({}, otherProps, {}, anchorProps);
  } else if (href && !disabled) {
    component = 'a';
    otherProps = anchorProps;
  }

  return _react.default.createElement(component, _objectSpread({}, other, {}, commonProps, {}, otherProps), assistiveText, children, buttonImage);
});

Button.propTypes = {
  /**
   * Specify the content of your Button
   */
  children: _propTypes.default.node,

  /**
   * Specify how the button itself should be rendered.
   * Make sure to apply all props to the root node and render children appropriately
   */
  as: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),

  /**
   * Specify an optional className to be added to your Button
   */
  className: _propTypes.default.string,

  /**
   * Specify whether the Button should be disabled, or not
   */
  disabled: _propTypes.default.bool,

  /**
   * Specify the size of the button, from a list of available sizes.
   * For `default` buttons, this prop can remain unspecified.
   */
  size: _propTypes.default.oneOf(['default', 'field', 'small']),

  /**
   * Deprecated in v10 in favor of `size`.
   * Specify whether the Button should be a small variant
   */
  small: (0, _deprecate.default)(_propTypes.default.bool, "\nThe prop `small` for Button has been deprecated in favor of `size`. Please use `size=\"small\"` instead."),

  /**
   * Specify the kind of Button you want to create
   */
  kind: _types.ButtonTypes.buttonKind.isRequired,

  /**
   * Optionally specify an href for your Button to become an <a> element
   */
  href: _propTypes.default.string,

  /**
   * Optional prop to specify the tabIndex of the Button
   */
  tabIndex: _propTypes.default.number,

  /**
   * Optional prop to specify the type of the Button
   */
  type: _propTypes.default.oneOf(['button', 'reset', 'submit']),

  /**
   * Optional prop to specify the role of the Button
   */
  role: _propTypes.default.string,

  /**
   * Optional prop to allow overriding the icon rendering.
   * Can be a React component class
   */
  renderIcon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * If specifying the `renderIcon` prop, provide a description for that icon that can
   * be read by screen readers
   */
  iconDescription: function iconDescription(props) {
    if (props.renderIcon && !props.children && !props.iconDescription) {
      return new Error('renderIcon property specified without also providing an iconDescription property.');
    }

    return undefined;
  },

  /**
   * Specify if the button is an icon-only button
   */
  hasIconOnly: _propTypes.default.bool,

  /**
   * Specify the direction of the tooltip for icon-only buttons.
   * Can be either top, right, bottom, or left.
   */
  tooltipPosition: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * Specify the alignment of the tooltip to the icon-only button.
   * Can be one of: start, center, or end.
   */
  tooltipAlignment: _propTypes.default.oneOf(['start', 'center', 'end'])
};
Button.defaultProps = {
  tabIndex: 0,
  type: 'button',
  disabled: false,
  kind: 'primary'
};
var _default = Button;
exports.default = _default;