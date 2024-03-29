function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
import { View16, ViewOff16, WarningFilled16 } from '@carbon/icons-react';
import { textInputProps } from './util';
var prefix = settings.prefix;
export default function PasswordInput(_ref) {
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
      _ref$tooltipPosition = _ref.tooltipPosition,
      tooltipPosition = _ref$tooltipPosition === void 0 ? 'bottom' : _ref$tooltipPosition,
      _ref$tooltipAlignment = _ref.tooltipAlignment,
      tooltipAlignment = _ref$tooltipAlignment === void 0 ? 'center' : _ref$tooltipAlignment,
      other = _objectWithoutProperties(_ref, ["labelText", "className", "id", "placeholder", "onChange", "onClick", "hideLabel", "invalid", "invalidText", "helperText", "light", "tooltipPosition", "tooltipAlignment"]);

  var _useState = useState('password'),
      _useState2 = _slicedToArray(_useState, 2),
      inputType = _useState2[0],
      setInputType = _useState2[1];

  var togglePasswordVisibility = function togglePasswordVisibility() {
    return setInputType(inputType === 'password' ? 'text' : 'password');
  };

  var errorId = id + '-error-msg';
  var textInputClasses = classNames("".concat(prefix, "--text-input"), "".concat(prefix, "--password-input"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--text-input--light"), light), _defineProperty(_classNames, "".concat(prefix, "--text-input--invalid"), invalid), _classNames));

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
    type: inputType,
    className: textInputClasses
  }, other);

  var labelClasses = classNames("".concat(prefix, "--label"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--visually-hidden"), hideLabel), _defineProperty(_classNames2, "".concat(prefix, "--label--disabled"), other.disabled), _classNames2));
  var helperTextClasses = classNames("".concat(prefix, "--form__helper-text"), _defineProperty({}, "".concat(prefix, "--form__helper-text--disabled"), other.disabled));
  var label = labelText ? React.createElement("label", {
    htmlFor: id,
    className: labelClasses
  }, labelText) : null;
  var error = invalid ? React.createElement("div", {
    className: "".concat(prefix, "--form-requirement"),
    id: errorId
  }, invalidText) : null;
  var passwordIsVisible = inputType === 'text';
  var passwordVisibilityIcon = passwordIsVisible ? React.createElement(ViewOff16, {
    className: "".concat(prefix, "--icon-visibility-off")
  }) : React.createElement(View16, {
    className: "".concat(prefix, "--icon-visibility-on")
  });
  var passwordVisibilityToggleClasses = classNames("".concat(prefix, "--text-input--password__visibility__toggle"), "".concat(prefix, "--btn--icon-only"), "".concat(prefix, "--tooltip__trigger"), "".concat(prefix, "--tooltip--a11y"), (_classNames4 = {}, _defineProperty(_classNames4, "".concat(prefix, "--tooltip--").concat(tooltipPosition), tooltipPosition), _defineProperty(_classNames4, "".concat(prefix, "--tooltip--align-").concat(tooltipAlignment), tooltipAlignment), _classNames4));
  var input = React.createElement(React.Fragment, null, React.createElement("input", _extends({}, textInputProps({
    invalid: invalid,
    sharedTextInputProps: sharedTextInputProps,
    errorId: errorId
  }), {
    "data-toggle-password-visibility": inputType === 'password'
  })), React.createElement("button", {
    type: "button",
    className: passwordVisibilityToggleClasses,
    onClick: togglePasswordVisibility
  }, React.createElement("span", {
    className: "".concat(prefix, "--assistive-text")
  }, "".concat(passwordIsVisible ? 'Hide' : 'Show', " password")), passwordVisibilityIcon));
  var helper = helperText ? React.createElement("div", {
    className: helperTextClasses
  }, helperText) : null;
  return React.createElement("div", {
    className: "".concat(prefix, "--form-item ").concat(prefix, "--text-input-wrapper ").concat(prefix, "--password-input-wrapper")
  }, label, helper, React.createElement("div", {
    className: "".concat(prefix, "--text-input__field-wrapper"),
    "data-invalid": invalid || null
  }, invalid && React.createElement(WarningFilled16, {
    className: "".concat(prefix, "--text-input__invalid-icon")
  }), input), error);
}
PasswordInput.propTypes = {
  /**
   * Provide a custom className that is applied directly to the underlying
   * <input> node
   */
  className: PropTypes.string,

  /**
   * Optionally provide the default value of the <input>
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specify whether the control is disabled
   */
  disabled: PropTypes.bool,

  /**
   * Provide a unique identifier for the input field
   */
  id: PropTypes.string.isRequired,

  /**
   * Provide the text that will be read by a screen reader when visiting this
   * control
   */
  labelText: PropTypes.node.isRequired,

  /**
   * Optionally provide an `onChange` handler that is called whenever <input>
   * is updated
   */
  onChange: PropTypes.func,

  /**
   * Optionally provide an `onClick` handler that is called whenever the
   * <input> is clicked
   */
  onClick: PropTypes.func,

  /**
   * Specify the placeholder attribute for the <input>
   */
  placeholder: PropTypes.string,

  /**
   * Provide the current value of the <input>
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * Specify whether or not the underlying label is visually hidden
   */
  hideLabel: PropTypes.bool,

  /**
   * Specify whether the control is currently invalid
   */
  invalid: PropTypes.bool,

  /**
   * Provide the text that is displayed when the control is in an invalid state
   */
  invalidText: PropTypes.string,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes.node,

  /**
   * Specify light version or default version of this control
   */
  light: PropTypes.bool,

  /**
   * Specify the direction of the tooltip for icon-only buttons.
   * Can be either top, right, bottom, or left.
   */
  tooltipPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * Specify the alignment of the tooltip to the icon-only button.
   * Can be one of: start, center, or end.
   */
  tooltipAlignment: PropTypes.oneOf(['start', 'center', 'end'])
};
PasswordInput.defaultProps = {
  className: '${prefix}--text__input',
  disabled: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  invalid: false,
  invalidText: '',
  helperText: '',
  light: false
};