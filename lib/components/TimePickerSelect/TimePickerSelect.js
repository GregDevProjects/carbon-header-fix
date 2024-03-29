"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _iconsReact = require("@carbon/icons-react");

var _carbonComponents = require("carbon-components");

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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = _carbonComponents.settings.prefix;

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

      var selectClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--select"), true), _defineProperty(_classNames, "".concat(prefix, "--time-picker__select"), true), _defineProperty(_classNames, className, className), _classNames));
      var labelClasses = (0, _classnames.default)("".concat(prefix, "--label"), _defineProperty({}, "".concat(prefix, "--visually-hidden"), hideLabel));
      var label = labelText ? _react.default.createElement("label", {
        htmlFor: id,
        className: labelClasses
      }, labelText) : null;
      return _react.default.createElement("div", {
        className: selectClasses
      }, label, _react.default.createElement("select", _extends({}, other, {
        id: id,
        className: "".concat(prefix, "--select-input"),
        disabled: disabled
      }), children), _react.default.createElement(_iconsReact.ChevronDownGlyph, {
        className: "".concat(prefix, "--select__arrow"),
        "aria-label": iconDescription
      }, iconDescription && _react.default.createElement("title", null, iconDescription)));
    }
  }]);

  return TimePickerSelect;
}(_react.Component);

exports.default = TimePickerSelect;

_defineProperty(TimePickerSelect, "propTypes", {
  /**
   * Provide the contents of your TimePickerSelect
   */
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be applied to the node containing the label and the select box
   */
  className: _propTypes.default.string,

  /**
   * Specify a custom `id` for the `<select>`
   */
  id: _propTypes.default.string.isRequired,

  /**
   * Specify whether you want the inline version of this control
   */
  inline: _propTypes.default.bool,

  /**
   * Specify whether the control is disabled
   */
  disabled: _propTypes.default.bool,

  /**
   * Optionally provide the default value of the `<select>`
   */
  defaultValue: _propTypes.default.any,

  /**
   * Provide a description for the twistie icon that can be read by screen readers
   */
  iconDescription: _propTypes.default.string.isRequired,

  /**
   * Specify whether the label should be hidden, or not
   */
  hideLabel: _propTypes.default.bool,

  /**
   * Provide label text to be read by screen readers when interacting with the
   * control
   */
  labelText: _propTypes.default.node.isRequired
});

_defineProperty(TimePickerSelect, "defaultProps", {
  disabled: false,
  inline: true,
  iconDescription: 'open list of options',
  hideLabel: true
});