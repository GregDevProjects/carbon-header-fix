"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.translationIds = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

var _iconsReact = require("@carbon/icons-react");

var _mergeRefs = _interopRequireDefault(require("../../tools/mergeRefs"));

var _requiredIfValueExists = _interopRequireDefault(require("../../prop-types/requiredIfValueExists"));

var _FeatureFlags = require("../../internal/FeatureFlags");

var _defaultTranslations;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var prefix = _carbonComponents.settings.prefix;
var translationIds = {
  'increment.number': 'increment.number',
  'decrement.number': 'decrement.number'
};
exports.translationIds = translationIds;
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
          if (_FeatureFlags.useControlledStateWithValue) {
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
          if (_FeatureFlags.useControlledStateWithValue) {
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

    if (_FeatureFlags.useControlledStateWithValue && _this.isControlled) {
      // Skips the logic of setting initial state if this component is controlled
      return _possibleConstructorReturn(_this);
    }

    var _value = _FeatureFlags.useControlledStateWithValue ? props.defaultValue : props.value;

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

      var numberInputClasses = (0, _classnames.default)("".concat(prefix, "--number ").concat(prefix, "--number--helpertext"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--number--readonly"), readOnly), _defineProperty(_classNames, "".concat(prefix, "--number--light"), light), _defineProperty(_classNames, "".concat(prefix, "--number--nolabel"), hideLabel), _defineProperty(_classNames, "".concat(prefix, "--number--mobile"), isMobile), _classNames));
      var props = {
        disabled: disabled,
        id: id,
        max: max,
        min: min,
        step: step,
        onChange: this.handleChange,
        value: _FeatureFlags.useControlledStateWithValue && this.isControlled ? value : this.state.value,
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
        error = _react.default.createElement("div", {
          className: "".concat(prefix, "--form-requirement"),
          id: errorId
        }, invalidText);
      }

      var helper = helperText ? _react.default.createElement("div", {
        className: "".concat(prefix, "--form__helper-text")
      }, helperText) : null;
      var labelClasses = (0, _classnames.default)("".concat(prefix, "--label"), _defineProperty({}, "".concat(prefix, "--visually-hidden"), hideLabel));
      var labelText = label ? _react.default.createElement("label", {
        htmlFor: id,
        className: labelClasses
      }, label) : null;
      var _ref = [t('increment.number'), t('decrement.number')],
          incrementNumLabel = _ref[0],
          decrementNumLabel = _ref[1];
      return _react.default.createElement("div", {
        className: "".concat(prefix, "--form-item")
      }, _react.default.createElement("div", _extends({
        className: numberInputClasses
      }, inputWrapperProps), function () {
        if (isMobile) {
          return _react.default.createElement(_react.default.Fragment, null, labelText, helper, _react.default.createElement("div", {
            className: "".concat(prefix, "--number__input-wrapper")
          }, _react.default.createElement("button", _extends({
            className: "".concat(prefix, "--number__control-btn down-icon")
          }, buttonProps, {
            onClick: function onClick(evt) {
              return _this2.handleArrowClick(evt, 'down');
            },
            title: decrementNumLabel,
            "aria-label": decrementNumLabel || iconDescription,
            "aria-live": "polite",
            "aria-atomic": "true"
          }), _react.default.createElement(_iconsReact.CaretDownGlyph, {
            className: "down-icon"
          })), _react.default.createElement("input", _extends({
            type: "number",
            pattern: "[0-9]*"
          }, other, props, {
            ref: (0, _mergeRefs.default)(ref, _this2._handleInputRef)
          })), _react.default.createElement("button", _extends({
            className: "".concat(prefix, "--number__control-btn up-icon")
          }, buttonProps, {
            onClick: function onClick(evt) {
              return _this2.handleArrowClick(evt, 'up');
            },
            title: incrementNumLabel,
            "aria-label": incrementNumLabel || iconDescription,
            "aria-live": "polite",
            "aria-atomic": "true"
          }), _react.default.createElement(_iconsReact.CaretUpGlyph, {
            className: "up-icon"
          }))));
        }

        return _react.default.createElement(_react.default.Fragment, null, labelText, helper, _react.default.createElement("div", {
          className: "".concat(prefix, "--number__input-wrapper")
        }, _react.default.createElement("input", _extends({
          "data-invalid": invalid || null,
          "aria-invalid": invalid || null,
          "aria-describedby": errorId,
          type: "number",
          pattern: "[0-9]*"
        }, other, props, {
          ref: (0, _mergeRefs.default)(ref, _this2._handleInputRef)
        })), invalid && _react.default.createElement(_iconsReact.WarningFilled16, {
          className: "".concat(prefix, "--number__invalid"),
          role: "img"
        }), _react.default.createElement("div", {
          className: "".concat(prefix, "--number__controls")
        }, _react.default.createElement("button", _extends({
          className: "".concat(prefix, "--number__control-btn up-icon")
        }, buttonProps, {
          onClick: function onClick(evt) {
            return _this2.handleArrowClick(evt, 'up');
          },
          title: incrementNumLabel || iconDescription,
          "aria-label": incrementNumLabel || iconDescription,
          "aria-live": "polite",
          "aria-atomic": "true"
        }), _react.default.createElement(_iconsReact.CaretUpGlyph, {
          className: "up-icon"
        })), _react.default.createElement("button", _extends({
          className: "".concat(prefix, "--number__control-btn down-icon")
        }, buttonProps, {
          onClick: function onClick(evt) {
            return _this2.handleArrowClick(evt, 'down');
          },
          title: decrementNumLabel || iconDescription,
          "aria-label": decrementNumLabel || iconDescription,
          "aria-live": "polite",
          "aria-atomic": "true"
        }), _react.default.createElement(_iconsReact.CaretDownGlyph, {
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

      return _FeatureFlags.useControlledStateWithValue || prevValue === value ? null : {
        value: capMax(max, capMin(min, value)),
        prevValue: value
      };
    }
  }]);

  return NumberInput;
}(_react.Component);

_defineProperty(NumberInput, "propTypes", {
  /**
   * Specify an optional className to be applied to the wrapper node
   */
  className: _propTypes.default.string,

  /**
   * Specify if the control should be disabled, or not
   */
  disabled: _propTypes.default.bool,

  /**
   * Specify whether you want the underlying label to be visually hidden
   */
  hideLabel: _propTypes.default.bool,

  /**
   * Provide a description for up/down icons that can be read by screen readers
   */
  iconDescription: _propTypes.default.string.isRequired,

  /**
   * Specify a custom `id` for the input
   */
  id: _propTypes.default.string.isRequired,

  /**
   * Generic `label` that will be used as the textual representation of what
   * this field is for
   */
  label: _propTypes.default.node,

  /**
   * The maximum value.
   */
  max: _propTypes.default.number,

  /**
   * The minimum value.
   */
  min: _propTypes.default.number,

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
  onChange: !_FeatureFlags.useControlledStateWithValue ? _propTypes.default.func : (0, _requiredIfValueExists.default)(_propTypes.default.func),

  /**
   * Provide an optional function to be called when the up/down button is clicked
   */
  onClick: _propTypes.default.func,

  /**
   * Specify how much the valus should increase/decrease upon clicking on up/down button
   */
  step: _propTypes.default.number,

  /**
   * Optional starting value for uncontrolled state
   */
  defaultValue: _propTypes.default.number,

  /**
   * Specify the value of the input
   */
  value: _propTypes.default.number,

  /**
   * Specify if the component should be read-only
   */
  readOnly: _propTypes.default.bool,

  /**
   * Specify if the currently value is invalid.
   */
  invalid: _propTypes.default.bool,

  /**
   * Message which is displayed if the value is invalid.
   */
  invalidText: _propTypes.default.string,

  /**
   * Provide text that is used alongside the control label for additional help
   */
  helperText: _propTypes.default.node,

  /**
   * Provide a description that would be used to best describe the use case of the NumberInput component
   */
  ariaLabel: _propTypes.default.string,

  /**
   * `true` to use the light version.
   */
  light: _propTypes.default.bool,

  /**
   * `true` to allow empty string.
   */
  allowEmpty: _propTypes.default.bool,

  /**
   * Provide custom text for the component for each translation id
   */
  translateWithId: _propTypes.default.func.isRequired,

  /**
   * `true` to use the mobile variant.
   */
  isMobile: _propTypes.default.bool
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

var _default = function () {
  var forwardRef = function forwardRef(props, ref) {
    return _react.default.createElement(NumberInput, _extends({}, props, {
      innerRef: ref
    }));
  };

  forwardRef.displayName = 'NumberInput';
  return _react.default.forwardRef(forwardRef);
}();

exports.default = _default;