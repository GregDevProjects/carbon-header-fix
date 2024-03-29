"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InlineLoading;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _iconsReact = require("@carbon/icons-react");

var _carbonComponents = require("carbon-components");

var _deprecate = _interopRequireDefault(require("../../prop-types/deprecate"));

var _Loading = _interopRequireDefault(require("../Loading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

function InlineLoading(_ref) {
  var className = _ref.className,
      success = _ref.success,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? success ? 'finished' : 'active' : _ref$status,
      iconDescription = _ref.iconDescription,
      description = _ref.description,
      onSuccess = _ref.onSuccess,
      successDelay = _ref.successDelay,
      other = _objectWithoutProperties(_ref, ["className", "success", "status", "iconDescription", "description", "onSuccess", "successDelay"]);

  var loadingClasses = (0, _classnames.default)("".concat(prefix, "--inline-loading"), className);

  var getLoading = function getLoading() {
    if (status === 'error') {
      return _react.default.createElement(_iconsReact.Error20, {
        className: "".concat(prefix, "--inline-loading--error")
      });
    }

    if (status === 'finished') {
      setTimeout(function () {
        if (onSuccess) {
          onSuccess();
        }
      }, successDelay);
      return _react.default.createElement(_iconsReact.CheckmarkFilled16, {
        className: "".concat(prefix, "--inline-loading__checkmark-container")
      });
    }

    if (status === 'inactive' || status === 'active') {
      return _react.default.createElement(_Loading.default, {
        small: true,
        description: iconDescription,
        withOverlay: false,
        active: status === 'active'
      });
    }

    return undefined;
  };

  var loadingText = _react.default.createElement("div", {
    className: "".concat(prefix, "--inline-loading__text")
  }, description);

  var loading = getLoading();

  var loadingAnimation = loading && _react.default.createElement("div", {
    className: "".concat(prefix, "--inline-loading__animation")
  }, loading);

  return _react.default.createElement("div", _extends({
    className: loadingClasses
  }, other, {
    "aria-live": 'assertive' || other['aria-live']
  }), loadingAnimation, description && loadingText);
}

InlineLoading.propTypes = {
  /**
   * Specify a custom className to be applied to the container node
   */
  className: _propTypes.default.string,

  /**
   * Specify whether the load was successful
   */
  success: (0, _deprecate.default)(_propTypes.default.bool, "\nThe prop `success` for InlineLoading has been deprecated in favor of `status`. Please use `status=\"finished\"` instead."),

  /**
   * Specify the loading status
   */
  status: _propTypes.default.oneOf(['inactive', 'active', 'finished', 'error']),

  /**
   * Specify the description for the inline loading text
   */
  description: _propTypes.default.node,

  /**
   * Specify the description for the inline loading text
   */
  iconDescription: _propTypes.default.string,

  /**
   * Provide an optional handler to be inovked when <InlineLoading> is
   * successful
   */
  onSuccess: _propTypes.default.func,

  /**
   * Provide a delay for the `setTimeout` for success
   */
  successDelay: _propTypes.default.number
};
InlineLoading.defaultProps = {
  successDelay: 1500
};