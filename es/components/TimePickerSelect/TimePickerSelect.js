function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import { ChevronDownGlyph } from '@carbon/icons-react';
import { settings } from 'carbon-components';
var prefix = settings.prefix;

var TimePickerSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(TimePickerSelect, _Component);

  function TimePickerSelect() {
    _classCallCheck(this, TimePickerSelect);

    return _possibleConstructorReturn(this, _getPrototypeOf(TimePickerSelect).apply(this, arguments));
  }

  _createClass(TimePickerSelect, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          id = _this$props.id,
          disabled = _this$props.disabled,
          children = _this$props.children,
          iconDescription = _this$props.iconDescription,
          className = _this$props.className,
          hideLabel = _this$props.hideLabel,
          labelText = _this$props.labelText,
          inline = _this$props.inline,
          other = _objectWithoutProperties(_this$props, ["id", "disabled", "children", "iconDescription", "className", "hideLabel", "labelText", "inline"]);

      var selectClasses = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--select"), true), _defineProperty(_classNames, "".concat(prefix, "--time-picker__select"), true), _defineProperty(_classNames, className, className), _classNames));
      var labelClasses = classNames("".concat(prefix, "--label"), _defineProperty({}, "".concat(prefix, "--visually-hidden"), hideLabel));
      var label = labelText ? React.createElement("label", {
        htmlFor: id,
        className: labelClasses
      }, labelText) : null;
      return React.createElement("div", {
        className: selectClasses
      }, label, React.createElement("select", _extends({}, other, {
        id: id,
        className: "".concat(prefix, "--select-input"),
        disabled: disabled
      }), children), React.createElement(ChevronDownGlyph, {
        className: "".concat(prefix, "--select__arrow"),
        "aria-label": iconDescription
      }, iconDescription && React.createElement("title", null, iconDescription)));
    }
  }]);

  return TimePickerSelect;
}(Component);

_defineProperty(TimePickerSelect, "propTypes", {
  /**
   * Provide the contents of your TimePickerSelect
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
   * Provide label text to be read by screen readers when interacting with the
   * control
   */
  labelText: PropTypes.node.isRequired
});

_defineProperty(TimePickerSelect, "defaultProps", {
  disabled: false,
  inline: true,
  iconDescription: 'open list of options',
  hideLabel: true
});

export { TimePickerSelect as default };