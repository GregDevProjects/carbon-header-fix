var _defaultTranslations;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

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
import { settings } from 'carbon-components';
import { WarningFilled16, CaretDownGlyph, CaretUpGlyph } from '@carbon/icons-react';
import mergeRefs from '../../tools/mergeRefs';
import requiredIfValueExists from '../../prop-types/requiredIfValueExists';
import { useControlledStateWithValue } from '../../internal/FeatureFlags';
var prefix = settings.prefix;
export var translationIds = {
  'increment.number': 'increment.number',
  'decrement.number': 'decrement.number'
};
var defaultTranslations = (_defaultTranslations = {}, _defineProperty(_defaultTranslations, translationIds['increment.number'], 'Increment number'), _defineProperty(_defaultTranslations, translationIds['decrement.number'], 'Decrement number'), _defaultTranslations);

var capMin = function capMin(min, value) {
  return isNaN(min) || !min && min !== 0 || isNaN(value) || !value && value !== 0 ? value : Math.max(min, value);
};

var capMax = function capMax(max, value) {
  return isNaN(max) || !max && max !== 0 || isNaN(value) || !value && value !== 0 ? value : Math.min(max, value);
};

var NumberInput =
/*#__PURE__*/
function (_Component) {
  _inherits(NumberInput, _Component);

  function NumberInput(props) {
    var _this;

    _classCallCheck(this, NumberInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumberInput).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "_inputRef", null);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (evt) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange;

      if (!disabled) {
        evt.persist();
        evt.imaginaryTarget = _this._inputRef;
        var value = evt.target.value;

        _this.setState({
          value: value
        }, function () {
          if (useControlledStateWithValue) {
            onChange(evt, {
              value: value
            });
          } else if (onChange) {
            onChange(evt);
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleArrowClick", function (evt, direction) {
      var value = typeof _this.state.value === 'string' ? Number(_this.state.value) : _this.state.value;
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          min = _this$props2.min,
          max = _this$props2.max,
          step = _this$props2.step,
          onChange = _this$props2.onChange,
          onClick = _this$props2.onClick;
      var conditional = direction === 'down' ? min !== undefined && value > min || min === undefined : max !== undefined && value < max || max === undefined;

      if (!disabled && conditional) {
        value = direction === 'down' ? value - step : value + step;
        evt.persist();
        evt.imaginaryTarget = _this._inputRef;

        _this.setState({
          value: value
        }, function () {
          if (useControlledStateWithValue) {
            onClick && onClick(evt, {
              value: value,
              direction: direction
            });
            onChange && onChange(evt, {
              value: value,
              direction: direction
            });
          } else {
            onClick && onClick(evt, direction);
            onChange && onChange(evt, direction);
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_handleInputRef", function (ref) {
      _this._inputRef = ref;
    });

    _this.isControlled = props.value !== undefined;

    if (useControlledStateWithValue && _this.isControlled) {
      // Skips the logic of setting initial state if this component is controlled
      return _possibleConstructorReturn(_this);
    }

    var _value = useControlledStateWithValue ? props.defaultValue : props.value;

    _value = _value === undefined ? 0 : _value;

    if (props.min || props.min === 0) {
      _value = Math.max(props.min, _value);
    }

    _this.state = {
      value: _value
    };
    return _this;
  }

  _createClass(NumberInput, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props3 = this.props,
          className = _this$props3.className,
          disabled = _this$props3.disabled,
          iconDescription = _this$props3.iconDescription,
          id = _this$props3.id,
          hideLabel = _this$props3.hideLabel,
          label = _this$props3.label,
          max = _this$props3.max,
          min = _this$props3.min,
          step = _this$props3.step,
          value = _this$props3.value,
          readOnly = _this$props3.readOnly,
          invalid = _this$props3.invalid,
          invalidText = _this$props3.invalidText,
          helperText = _this$props3.helperText,
          ariaLabel = _this$props3.ariaLabel,
          light = _this$props3.light,
          allowEmpty = _this$props3.allowEmpty,
          ref = _this$props3.innerRef,
          t = _this$props3.translateWithId,
          isMobile = _this$props3.isMobile,
          other = _objectWithoutProperties(_this$props3, ["className", "disabled", "iconDescription", "id", "hideLabel", "label", "max", "min", "step", "value", "readOnly", "invalid", "invalidText", "helperText", "ariaLabel", "light", "allowEmpty", "innerRef", "translateWithId", "isMobile"]);

      var numberInputClasses = classNames("".concat(prefix, "--number ").concat(prefix, "--number--helpertext"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--number--readonly"), readOnly), _defineProperty(_classNames, "".concat(prefix, "--number--light"), light), _defineProperty(_classNames, "".concat(prefix, "--number--nolabel"), hideLabel), _defineProperty(_classNames, "".concat(prefix, "--number--mobile"), isMobile), _classNames));
      var props = {
        disabled: disabled,
        id: id,
        max: max,
        min: min,
        step: step,
        onChange: this.handleChange,
        value: useControlledStateWithValue && this.isControlled ? value : this.state.value,
        readOnly: readOnly,
        'aria-label': ariaLabel
      };
      var buttonProps = {
        disabled: disabled,
        type: 'button'
      };
      var inputWrapperProps = {};
      var errorId = null;
      var error = null;

      if (invalid || !allowEmpty && this.state.value === '') {
        inputWrapperProps['data-invalid'] = true;
        errorId = "".concat(id, "-error-id");
        error = React.createElement("div", {
          className: "".concat(prefix, "--form-requirement"),
          id: errorId
        }, invalidText);
      }

      var helper = helperText ? React.createElement("div", {
        className: "".concat(prefix, "--form__helper-text")
      }, helperText) : null;
      var labelClasses = classNames("".concat(prefix, "--label"), _defineProperty({}, "".concat(prefix, "--visually-hidden"), hideLabel));
      var labelText = label ? React.createElement("label", {
        htmlFor: id,
        className: labelClasses
      }, label) : null;
      var _ref = [t('increment.number'), t('decrement.number')],
          incrementNumLabel = _ref[0],
          decrementNumLabel = _ref[1];
      return React.createElement("div", {
        className: "".concat(prefix, "--form-item")
      }, React.createElement("div", _extends({
        className: numberInputClasses
      }, inputWrapperProps), function () {
        if (isMobile) {
          return React.createElement(React.Fragment, null, labelText, helper, React.createElement("div", {
            className: "".concat(prefix, "--number__input-wrapper")
          }, React.createElement("button", _extends({
            className: "".concat(prefix, "--number__control-btn down-icon")
          }, buttonProps, {
            onClick: function onClick(evt) {
              return _this2.handleArrowClick(evt, 'down');
            },
            title: decrementNumLabel,
            "aria-label": decrementNumLabel || iconDescription,
            "aria-live": "polite",
            "aria-atomic": "true"
          }), React.createElement(CaretDownGlyph, {
            className: "down-icon"
          })), React.createElement("input", _extends({
            type: "number",
            pattern: "[0-9]*"
          }, other, props, {
            ref: mergeRefs(ref, _this2._handleInputRef)
          })), React.createElement("button", _extends({
            className: "".concat(prefix, "--number__control-btn up-icon")
          }, buttonProps, {
            onClick: function onClick(evt) {
              return _this2.handleArrowClick(evt, 'up');
            },
            title: incrementNumLabel,
            "aria-label": incrementNumLabel || iconDescription,
            "aria-live": "polite",
            "aria-atomic": "true"
          }), React.createElement(CaretUpGlyph, {
            className: "up-icon"
          }))));
        }

        return React.createElement(React.Fragment, null, labelText, helper, React.createElement("div", {
          className: "".concat(prefix, "--number__input-wrapper")
        }, React.createElement("input", _extends({
          "data-invalid": invalid || null,
          "aria-invalid": invalid || null,
          "aria-describedby": errorId,
          type: "number",
          pattern: "[0-9]*"
        }, other, props, {
          ref: mergeRefs(ref, _this2._handleInputRef)
        })), invalid && React.createElement(WarningFilled16, {
          className: "".concat(prefix, "--number__invalid"),
          role: "img"
        }), React.createElement("div", {
          className: "".concat(prefix, "--number__controls")
        }, React.createElement("button", _extends({
          className: "".concat(prefix, "--number__control-btn up-icon")
        }, buttonProps, {
          onClick: function onClick(evt) {
            return _this2.handleArrowClick(evt, 'up');
          },
          title: incrementNumLabel || iconDescription,
          "aria-label": incrementNumLabel || iconDescription,
          "aria-live": "polite",
          "aria-atomic": "true"
        }), React.createElement(CaretUpGlyph, {
          className: "up-icon"
        })), React.createElement("button", _extends({
          className: "".concat(prefix, "--number__control-btn down-icon")
        }, buttonProps, {
          onClick: function onClick(evt) {
            return _this2.handleArrowClick(evt, 'down');
          },
          title: decrementNumLabel || iconDescription,
          "aria-label": decrementNumLabel || iconDescription,
          "aria-live": "polite",
          "aria-atomic": "true"
        }), React.createElement(CaretDownGlyph, {
          className: "down-icon"
        })))));
      }(), error));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, state) {
      var min = _ref2.min,
          max = _ref2.max,
          _ref2$value = _ref2.value,
          value = _ref2$value === void 0 ? 0 : _ref2$value;
      var prevValue = state.prevValue; // If `useControlledStateWithValue` feature flag is on, do nothing here.
      // Otherwise, do prop -> state sync with "value capping".

      return useControlledStateWithValue || prevValue === value ? null : {
        value: capMax(max, capMin(min, value)),
        prevValue: value
      };
    }
  }]);

  return NumberInput;
}(Component);

_defineProperty(NumberInput, "propTypes", {
  /**
   * Specify an optional className to be applied to the wrapper node
   */
  className: PropTypes.string,

  /**
   * Specify if the control should be disabled, or not
   */
  disabled: PropTypes.bool,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: PropTypes.bool,

  /**
   * Provide a description for up/down icons that can be read by screen readers
   */
  iconDescription: PropTypes.string.isRequired,

  /**
   * Specify a custom `id` for the input
   */
  id: PropTypes.string.isRequired,

  /**
   * Generic `label` that will be used as the textual representation of what
   * this field is for
   */
  label: PropTypes.node,

  /**
   * The maximum value.
   */
  max: PropTypes.number,

  /**
   * The minimum value.
   */
  min: PropTypes.number,

  /**
   * The new value is available in 'imaginaryTarget.value'
   * i.e. to get the value: evt.imaginaryTarget.value
   *
   * * _With_ `useControlledStateWithValue` feature flag, the signature of the event handler will be altered to provide additional context in the second parameter: `onChange(event, { value, direction })` where:
   *   * `event` is the (React) raw event
   *   * `value` is the new value
   *   * `direction` tells you the button you hit is up button or down button
   * * _Without_ this feature flag the event handler has `onChange(event, direction)` signature.
   */
  onChange: !useControlledStateWithValue ? PropTypes.func : requiredIfValueExists(PropTypes.func),

  /**
   * Provide an optional function to be called when the up/down button is clicked
   */
  onClick: PropTypes.func,

  /**
   * Specify how much the valus should increase/decrease upon clicking on up/down button
   */
  step: PropTypes.number,

  /**
   * Optional starting value for uncontrolled state
   */
  defaultValue: PropTypes.number,

  /**
   * Specify the value of the input
   */
  value: PropTypes.number,

  /**
   * Specify if the component should be read-only
   */
  readOnly: PropTypes.bool,

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
   * Provide a description that would be used to best describe the use case of the NumberInput component
   */
  ariaLabel: PropTypes.string,

  /**
   * `true` to use the light version.
   */
  light: PropTypes.bool,

  /**
   * `true` to allow empty string.
   */
  allowEmpty: PropTypes.bool,

  /**
   * Provide custom text for the component for each translation id
   */
  translateWithId: PropTypes.func.isRequired,

  /**
   * `true` to use the mobile variant.
   */
  isMobile: PropTypes.bool
});

_defineProperty(NumberInput, "defaultProps", {
  disabled: false,
  hideLabel: false,
  iconDescription: 'choose a number',
  label: ' ',
  step: 1,
  invalid: false,
  invalidText: 'Provide invalidText',
  ariaLabel: 'Numeric input field with increment and decrement buttons',
  helperText: '',
  light: false,
  allowEmpty: false,
  translateWithId: function translateWithId(id) {
    return defaultTranslations[id];
  }
});

export default (function () {
  var forwardRef = function forwardRef(props, ref) {
    return React.createElement(NumberInput, _extends({}, props, {
      innerRef: ref
    }));
  };

  forwardRef.displayName = 'NumberInput';
  return React.forwardRef(forwardRef);
})();