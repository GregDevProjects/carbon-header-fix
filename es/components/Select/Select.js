function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { settings } from 'carbon-components';
import { ChevronDown16, WarningFilled16 } from '@carbon/icons-react';
var prefix = settings.prefix;
var Select = React.forwardRef(function Select(_ref, ref) {
  var _classNames, _classNames2;

  var className = _ref.className,
      id = _ref.id,
      inline = _ref.inline,
      labelText = _ref.labelText,
      disabled = _ref.disabled,
      children = _ref.children,
      noLabel = _ref.noLabel,
      iconDescription = _ref.iconDescription,
      hideLabel = _ref.hideLabel,
      invalid = _ref.invalid,
      invalidText = _ref.invalidText,
      helperText = _ref.helperText,
      light = _ref.light,
      other = _objectWithoutProperties(_ref, ["className", "id", "inline", "labelText", "disabled", "children", "noLabel", "iconDescription", "hideLabel", "invalid", "invalidText", "helperText", "light"]);

  var selectClasses = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--select"), true), _defineProperty(_classNames, "".concat(prefix, "--select--inline"), inline), _defineProperty(_classNames, "".concat(prefix, "--select--light"), light), _defineProperty(_classNames, "".concat(prefix, "--select--invalid"), invalid), _defineProperty(_classNames, className, className), _classNames));
  var labelClasses = classNames("".concat(prefix, "--label"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--visually-hidden"), hideLabel), _defineProperty(_classNames2, "".concat(prefix, "--label--disabled"), disabled), _classNames2));
  var errorId = "".concat(id, "-error-msg");
  var error = invalid ? React.createElement("div", {
    className: "".concat(prefix, "--form-requirement"),
    id: errorId
  }, invalidText) : null;
  var helperTextClasses = classNames("".concat(prefix, "--form__helper-text"), _defineProperty({}, "".concat(prefix, "--form__helper-text--disabled"), disabled));
  var helper = helperText ? React.createElement("div", {
    className: helperTextClasses
  }, helperText) : null;
  var ariaProps = {};

  if (invalid) {
    ariaProps['aria-describedby'] = errorId;
  }

  var input = function () {
    return React.createElement(React.Fragment, null, React.createElement("select", _extends({}, other, ariaProps, {
      id: id,
      className: "".concat(prefix, "--select-input"),
      disabled: disabled || undefined,
      "data-invalid": invalid || undefined,
      "aria-invalid": invalid || undefined,
      ref: ref
    }), children), React.createElement(ChevronDown16, {
      className: "".concat(prefix, "--select__arrow"),
      "aria-label": iconDescription
    }, React.createElement("title", null, iconDescription)), invalid && React.createElement(WarningFilled16, {
      className: "".concat(prefix, "--select__invalid-icon")
    }));
  }();

  return React.createElement("div", {
    className: "".concat(prefix, "--form-item")
  }, React.createElement("div", {
    className: selectClasses
  }, !noLabel && React.createElement("label", {
    htmlFor: id,
    className: labelClasses
  }, labelText), !inline && helper, inline && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "".concat(prefix, "--select-input--inline__wrapper")
  }, React.createElement("div", {
    className: "".concat(prefix, "--select-input__wrapper"),
    "data-invalid": invalid || null
  }, input), error), helper), !inline && React.createElement("div", {
    className: "".concat(prefix, "--select-input__wrapper"),
    "data-invalid": invalid || null
  }, input), !inline && error));
});
Select.propTypes = {
  /**
   * Provide the contents of your Select
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the node containing the label and the select box
   */
  className: PropTypes.string,

  /**
   * Specify a custom `id` for the `<select>`
   */
  id: PropTypes.string.isRequired,

  /**
   * Specify whether you want the inline version of this control
   */
  inline: PropTypes.bool,

  /**
   * Provide label text to be read by screen readers when interacting with the
   * control
   */
  labelText: PropTypes.node,

  /**
   * Provide an optional `onChange` hook that is called each time the value of
   * the underlying <input> changes
   */
  onChange: PropTypes.func,

  /**
   * Specify whether the control is disabled
   */
  disabled: PropTypes.bool,

  /**
   * Optionally provide the default value of the `<select>`
   */
  defaultValue: PropTypes.any,

  /**
   * Provide a description for the twistie icon that can be read by screen readers
   */
  iconDescription: PropTypes.string.isRequired,

  /**
   * Specify whether the label should be hidden, or not
   */
  hideLabel: PropTypes.bool,

  /**
   * Specify if the currently value is invalid.
   */
  invalid: PropTypes.bool,

  /**
   * Message which is displayed if the value is invalid.
   */
  invalidText: PropTypes.string,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: PropTypes.node,

  /**
   * Specify whether you want the light version of this control
   */
  light: PropTypes.bool,

  /**
   * Reserved for use with <Pagination> component. Will not render a label for the
   * select since Pagination renders one for us.
   */
  noLabel: PropTypes.bool
};
Select.defaultProps = {
  disabled: false,
  labelText: 'Select',
  inline: false,
  iconDescription: 'open list of options',
  invalid: false,
  invalidText: '',
  helperText: '',
  light: false
};
export default Select;