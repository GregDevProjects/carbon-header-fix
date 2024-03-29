"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

var _setupGetInstanceId = _interopRequireDefault(require("../../tools/setupGetInstanceId"));

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
var getInstanceId = (0, _setupGetInstanceId.default)();

var Loading =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Loading, _React$Component);

  function Loading(props) {
    var _this;

    _classCallCheck(this, Loading);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Loading).call(this, props));
    _this.instanceId = getInstanceId();
    return _this;
  }

  _createClass(Loading, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          active = _this$props.active,
          className = _this$props.className,
          withOverlay = _this$props.withOverlay,
          small = _this$props.small,
          description = _this$props.description,
          other = _objectWithoutProperties(_this$props, ["active", "className", "withOverlay", "small", "description"]);

      var loadingClasses = (0, _classnames.default)("".concat(prefix, "--loading"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--loading--small"), small), _defineProperty(_classNames, "".concat(prefix, "--loading--stop"), !active), _classNames));
      var overlayClasses = (0, _classnames.default)("".concat(prefix, "--loading-overlay"), _defineProperty({}, "".concat(prefix, "--loading-overlay--stop"), !active));
      var loadingId = "loading-id-".concat(this.instanceId);
      var spinnerRadius = small ? '26.8125' : '37.5';
      /**
       * Various screenreaders (JAWS, VoiceOver, NVDA...) interpret live regions differently
       * and change their interpretations over time. The aria on the div and the label
       * associated with the div are currently necessary for the loading state to be properly
       * read by all screenreaders. [0]
       *
       * JAWS does not read the loading state unless aria-atomic is set to true and the visually
       * hidden label is required for the loading state to be read in VoiceOver on iOS. Please
       * do not remove without testing on these platforms.
       *
       * [0] https://developer.paciellogroup.com/blog/2014/03/screen-reader-support-aria-live-regions/
       * */

      var loading = _react.default.createElement("div", _extends({}, other, {
        "aria-atomic": "true",
        "aria-labelledby": loadingId,
        "aria-live": active ? 'assertive' : 'off',
        className: loadingClasses
      }), _react.default.createElement("label", {
        id: loadingId,
        className: "".concat(prefix, "--visually-hidden")
      }, description), _react.default.createElement("svg", {
        className: "".concat(prefix, "--loading__svg"),
        viewBox: "-75 -75 150 150"
      }, _react.default.createElement("title", null, description), small ? _react.default.createElement("circle", {
        className: "".concat(prefix, "--loading__background"),
        cx: "0",
        cy: "0",
        r: spinnerRadius
      }) : null, _react.default.createElement("circle", {
        className: "".concat(prefix, "--loading__stroke"),
        cx: "0",
        cy: "0",
        r: spinnerRadius
      })));

      return withOverlay ? _react.default.createElement("div", {
        className: overlayClasses
      }, loading) : loading;
    }
  }]);

  return Loading;
}(_react.default.Component);

exports.default = Loading;

_defineProperty(Loading, "propTypes", {
  /**
   * Specify whether you want the loading indicator to be spinning or not
   */
  active: _propTypes.default.bool,

  /**
   * Provide an optional className to be applied to the containing node
   */
  className: _propTypes.default.string,

  /**
   * Specify whether you want the loader to be applied with an overlay
   */
  withOverlay: _propTypes.default.bool,

  /**
   * Specify whether you would like the small variant of <Loading>
   */
  small: _propTypes.default.bool,

  /**
   * Specify an description that would be used to best describe the loading state
   */
  description: _propTypes.default.string
});

_defineProperty(Loading, "defaultProps", {
  active: true,
  withOverlay: true,
  small: false,
  description: 'Active loading indicator'
});