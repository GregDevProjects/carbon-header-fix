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
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { settings } from 'carbon-components';
import { ListBoxType } from './ListBoxPropTypes';
var prefix = settings.prefix;

var handleOnKeyDown = function handleOnKeyDown(event) {
  if (event.keyCode === 27) {
    event.stopPropagation();
  }
};

var handleClick = function handleClick(event) {
  event.preventDefault();
  event.stopPropagation();
};
/**
 * `ListBox` is a generic container component that handles creating the
 * container class name in response to certain props.
 */


var ListBox = function ListBox(_ref) {
  var _cx;

  var children = _ref.children,
      containerClassName = _ref.className,
      disabled = _ref.disabled,
      innerRef = _ref.innerRef,
      type = _ref.type,
      invalid = _ref.invalid,
      invalidText = _ref.invalidText,
      light = _ref.light,
      isOpen = _ref.isOpen,
      rest = _objectWithoutProperties(_ref, ["children", "className", "disabled", "innerRef", "type", "invalid", "invalidText", "light", "isOpen"]);

  var className = cx((_cx = {}, _defineProperty(_cx, containerClassName, !!containerClassName), _defineProperty(_cx, "".concat(prefix, "--list-box"), true), _defineProperty(_cx, "".concat(prefix, "--list-box--inline"), type === 'inline'), _defineProperty(_cx, "".concat(prefix, "--list-box--disabled"), disabled), _defineProperty(_cx, "".concat(prefix, "--list-box--light"), light), _defineProperty(_cx, "".concat(prefix, "--list-box--expanded"), isOpen), _cx));
  return React.createElement(React.Fragment, null, React.createElement("div", _extends({}, rest, {
    role: "listbox",
    tabIndex: "-1",
    className: className,
    ref: innerRef,
    onKeyDown: handleOnKeyDown,
    onClick: handleClick,
    "data-invalid": invalid || undefined
  }), children), invalid ? React.createElement("div", {
    className: "".concat(prefix, "--form-requirement")
  }, invalidText) : null);
};

ListBox.propTypes = {
  /**
   * Provide the contents of your ListBox
   */
  children: PropTypes.node,

  /**
   * Specify a class name to be applied on the containing list box node
   */
  className: PropTypes.string,

  /**
   * `innerRef` hook used for libraries like Downshift that require a reference
   * on a container node when it is not a native element
   */
  innerRef: PropTypes.func.isRequired,

  /**
   * Specify whether the ListBox is currently disabled
   */
  disabled: PropTypes.bool.isRequired,

  /**
   * Specify the "type" of the ListBox. Currently supports either `default` or
   * `inline` as an option.
   */
  type: ListBoxType.isRequired
};
ListBox.defaultProps = {
  innerRef: function innerRef() {},
  disabled: false,
  type: 'default'
};
export default ListBox;