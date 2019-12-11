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
import React from 'react';
import classNames from 'classnames';
import { settings } from 'carbon-components';
import setupGetInstanceId from '../../tools/setupGetInstanceId';
var prefix = settings.prefix;
var getInstanceId = setupGetInstanceId();

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

      var loadingClasses = classNames("".concat(prefix, "--loading"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--loading--small"), small), _defineProperty(_classNames, "".concat(prefix, "--loading--stop"), !active), _classNames));
      var overlayClasses = classNames("".concat(prefix, "--loading-overlay"), _defineProperty({}, "".concat(prefix, "--loading-overlay--stop"), !active));
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

      var loading = React.createElement("div", _extends({}, other, {
        "aria-atomic": "true",
        "aria-labelledby": loadingId,
        "aria-live": active ? 'assertive' : 'off',
        className: loadingClasses
      }), React.createElement("label", {
        id: loadingId,
        className: "".concat(prefix, "--visually-hidden")
      }, description), React.createElement("svg", {
        className: "".concat(prefix, "--loading__svg"),
        viewBox: "-75 -75 150 150"
      }, React.createElement("title", null, description), small ? React.createElement("circle", {
        className: "".concat(prefix, "--loading__background"),
        cx: "0",
        cy: "0",
        r: spinnerRadius
      }) : null, React.createElement("circle", {
        className: "".concat(prefix, "--loading__stroke"),
        cx: "0",
        cy: "0",
        r: spinnerRadius
      })));
      return withOverlay ? React.createElement("div", {
        className: overlayClasses
      }, loading) : loading;
    }
  }]);

  return Loading;
}(React.Component);

_defineProperty(Loading, "propTypes", {
  /**
   * Specify whether you want the loading indicator to be spinning or not
   */
  active: PropTypes.bool,

  /**
   * Provide an optional className to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Specify whether you want the loader to be applied with an overlay
   */
  withOverlay: PropTypes.bool,

  /**
   * Specify whether you would like the small variant of <Loading>
   */
  small: PropTypes.bool,

  /**
   * Specify an description that would be used to best describe the loading state
   */
  description: PropTypes.string
});

_defineProperty(Loading, "defaultProps", {
  active: true,
  withOverlay: true,
  small: false,
  description: 'Active loading indicator'
});

export { Loading as default };