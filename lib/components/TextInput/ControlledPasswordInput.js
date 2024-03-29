"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _carbonComponents = require("carbon-components");

var _iconsReact = require("@carbon/icons-react");

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var ControlledPasswordInput = _react.default.forwardRef(function ControlledPasswordInput(_ref, ref) {
  var _classNames, _classNames2, _classNames4;

  var labelText = _ref.labelText,
      className = _ref.className,
      id = _ref.id,
      placeholder = _ref.placeholder,
      _onChange = _ref.onChange,
      _onClick = _ref.onClick,
      hideLabel = _ref.hideLabel,
      invalid = _ref.invalid,
      invalidText = _ref.invalidText,
      helperText = _ref.helperText,
      light = _ref.light,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'password' : _ref$type,
      togglePasswordVisibility = _ref.togglePasswordVisibility,
      _ref$tooltipPosition = _ref.tooltipPosition,
      tooltipPosition = _ref$tooltipPosition === void 0 ? 'bottom' : _ref$tooltipPosition,
      _ref$tooltipAlignment = _ref.tooltipAlignment,
      tooltipAlignment = _ref$tooltipAlignment === void 0 ? 'center' : _ref$tooltipAlignment,
      other = _objectWithoutProperties(_ref, ["labelText", "className", "id", "placeholder", "onChange", "onClick", "hideLabel", "invalid", "invalidText", "helperText", "light", "type", "togglePasswordVisibility", "tooltipPosition", "tooltipAlignment"]);

  var errorId = id + '-error-msg';
  var textInputClasses = (0, _classnames.default)("".concat(prefix, "--text-input"), "".concat(prefix, "--password-input"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--text-input--light"), light), _defineProperty(_classNames, "".concat(prefix, "--text-input--invalid"), invalid), _classNames));

  var sharedTextInputProps = _objectSpread({
    id: id,
    onChange: function onChange(evt) {
      if (!other.disabled) {
        _onChange(evt);
      }
    },
    onClick: function onClick(evt) {
      if (!other.disabled) {
        _onClick(evt);
      }
    },
    placeholder: placeholder,
    type: type,
    ref: ref,
    className: textInputClasses
  }, other);

  var labelClasses = (0, _classnames.default)("".concat(prefix, "--label"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--visually-hidden"), hideLabel), _defineProperty(_classNames2, "".concat(prefix, "--label--disabled"), other.disabled), _classNames2));
  var helperTextClasses = (0, _classnames.default)("".concat(prefix, "--form__helper-text"), _defineProperty({}, "".concat(prefix, "--form__helper-text--disabled"), other.disabled));
  var label = labelText ? _react.default.createElement("label", {
    htmlFor: id,
    className: labelClasses
  }, labelText) : null;
  var error = invalid ? _react.default.createElement("div", {
    className: "".concat(prefix, "--form-requirement"),
    id: errorId
  }, invalidText) : null;
  var passwordIsVisible = type === 'text';
  var passwordVisibilityIcon = passwordIsVisible ? _react.default.createElement(_iconsReact.ViewOff16, {
    className: "".concat(prefix, "--icon-visibility-off")
  }) : _react.default.createElement(_iconsReact.View16, {
    className: "".concat(prefix, "--icon-visibility-on")
  });
  var passwordVisibilityToggleClasses = (0, _classnames.default)("".concat(prefix, "--text-input--password__visibility__toggle"), "".concat(prefix, "--btn--icon-only"), "".concat(prefix, "--tooltip__trigger"), "".concat(prefix, "--tooltip--a11y"), (_classNames4 = {}, _defineProperty(_classNames4, "".concat(prefix, "--tooltip--").concat(tooltipPosition), tooltipPosition), _defineProperty(_classNames4, "".concat(prefix, "--tooltip--align-").concat(tooltipAlignment), tooltipAlignment), _classNames4));

  var input = _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("input", _extends({}, (0, _util.textInputProps)({
    invalid: invalid,
    sharedTextInputProps: sharedTextInputProps,
    errorId: errorId
  }), {
    "data-toggle-password-visibility": type === 'password'
  })), _react.default.createElement("button", {
    type: "button",
    className: passwordVisibilityToggleClasses,
    onClick: togglePasswordVisibility
  }, _react.default.createElement("span", {
    className: "".concat(prefix, "--assistive-text")
  }, "".concat(passwordIsVisible ? 'Hide' : 'Show', " password")), passwordVisibilityIcon));

  var helper = helperText ? _react.default.createElement("div", {
    className: helperTextClasses
  }, helperText) : null;
  return _react.default.createElement("div", {
    className: "".concat(prefix, "--form-item ").concat(prefix, "--text-input-wrapper ").concat(prefix, "--password-input-wrapper")
  }, label, helper, _react.default.createElement("div", {
    className: "".concat(prefix, "--text-input__field-wrapper"),
    "data-invalid": invalid || null
  }, invalid && _react.default.createElement(_iconsReact.WarningFilled16, {
    className: "".concat(prefix, "--text-input__invalid-icon")
  }), input), error);
});

ControlledPasswordInput.propTypes = {
  /**
   * Provide a custom className that is applied directly to the underlying
   * <input> node
   */
  className: _propTypes.default.string,

  /**
   * Optionally provide the default value of the <input>
   */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Specify whether the control is disabled
   */
  disabled: _propTypes.default.bool,

  /**
   * Provide a unique identifier for the input field
   */
  id: _propTypes.default.string.isRequired,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: _propTypes.default.node.isRequired,

  /**
   * Optionally provide an `onChange` handler that is called whenever <input>
   * is updated
   */
  onChange: _propTypes.default.func,

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * <input> is clicked
   */
  onClick: _propTypes.default.func,

  /**
   * Specify the placeholder attribute for the <input>
   */
  placeholder: _propTypes.default.string,

  /**
   * Provide the current value of the <input>
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Specify whether or not the underlying label is visually hidden
   */
  hideLabel: _propTypes.default.bool,

  /**
   * Specify whether the control is currently invalid
   */
  invalid: _propTypes.default.bool,

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: _propTypes.default.string,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: _propTypes.default.node,

  /**
   * Specify light version or default version of this control
   */
  light: _propTypes.default.bool,

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
ControlledPasswordInput.defaultProps = {
  className: '${prefix}--text__input',
  disabled: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  invalid: false,
  invalidText: '',
  helperText: '',
  light: false
};
var _default = ControlledPasswordInput;
exports.default = _default;