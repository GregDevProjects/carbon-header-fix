function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CheckmarkFilled16, Error20 } from '@carbon/icons-react';
import { settings } from 'carbon-components';
import deprecate from '../../prop-types/deprecate';
import Loading from '../Loading';
var prefix = settings.prefix;
export default function InlineLoading(_ref) {
  var className = _ref.className,
      success = _ref.success,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? success ? 'finished' : 'active' : _ref$status,
      iconDescription = _ref.iconDescription,
      description = _ref.description,
      onSuccess = _ref.onSuccess,
      successDelay = _ref.successDelay,
      other = _objectWithoutProperties(_ref, ["className", "success", "status", "iconDescription", "description", "onSuccess", "successDelay"]);

  var loadingClasses = classNames("".concat(prefix, "--inline-loading"), className);

  var getLoading = function getLoading() {
    if (status === 'error') {
      return React.createElement(Error20, {
        className: "".concat(prefix, "--inline-loading--error")
      });
    }

    if (status === 'finished') {
      setTimeout(function () {
        if (onSuccess) {
          onSuccess();
        }
      }, successDelay);
      return React.createElement(CheckmarkFilled16, {
        className: "".concat(prefix, "--inline-loading__checkmark-container")
      });
    }

    if (status === 'inactive' || status === 'active') {
      return React.createElement(Loading, {
        small: true,
        description: iconDescription,
        withOverlay: false,
        active: status === 'active'
      });
    }

    return undefined;
  };

  var loadingText = React.createElement("div", {
    className: "".concat(prefix, "--inline-loading__text")
  }, description);
  var loading = getLoading();
  var loadingAnimation = loading && React.createElement("div", {
    className: "".concat(prefix, "--inline-loading__animation")
  }, loading);
  return React.createElement("div", _extends({
    className: loadingClasses
  }, other, {
    "aria-live": 'assertive' || other['aria-live']
  }), loadingAnimation, description && loadingText);
}
InlineLoading.propTypes = {
  /**
   * Specify a custom className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Specify whether the load was successful
   */
  success: deprecate(PropTypes.bool, "\nThe prop `success` for InlineLoading has been deprecated in favor of `status`. Please use `status=\"finished\"` instead."),

  /**
   * Specify the loading status
   */
  status: PropTypes.oneOf(['inactive', 'active', 'finished', 'error']),

  /**
   * Specify the description for the inline loading text
   */
  description: PropTypes.node,

  /**
   * Specify the description for the inline loading text
   */
  iconDescription: PropTypes.string,

  /**
   * Provide an optional handler to be inovked when <InlineLoading> is
   * successful
   */
  onSuccess: PropTypes.func,

  /**
   * Provide a delay for the `setTimeout` for success
   */
  successDelay: PropTypes.number
};
InlineLoading.defaultProps = {
  successDelay: 1500
};