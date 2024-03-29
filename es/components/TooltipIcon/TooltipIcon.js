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
import setupGetInstanceId from '../../tools/setupGetInstanceId';
var prefix = settings.prefix;
var getInstanceId = setupGetInstanceId();

var TooltipIcon = function TooltipIcon(_ref) {
  var _cx;

  var id = _ref.id,
      className = _ref.className,
      children = _ref.children,
      direction = _ref.direction,
      align = _ref.align,
      tooltipText = _ref.tooltipText,
      rest = _objectWithoutProperties(_ref, ["id", "className", "children", "direction", "align", "tooltipText"]);

  var tooltipId = id || "icon-tooltip-".concat(getInstanceId());
  var tooltipTriggerClasses = cx("".concat(prefix, "--tooltip__trigger"), "".concat(prefix, "--tooltip--a11y"), className, (_cx = {}, _defineProperty(_cx, "".concat(prefix, "--tooltip--").concat(direction), direction), _defineProperty(_cx, "".concat(prefix, "--tooltip--align-").concat(align), align), _cx));
  return React.createElement("button", _extends({}, rest, {
    className: tooltipTriggerClasses,
    "aria-describedby": tooltipId
  }), React.createElement("span", {
    className: "".concat(prefix, "--assistive-text"),
    id: tooltipId
  }, tooltipText), children);
};

TooltipIcon.propTypes = {
  /**
   * Specify an icon as children that will be used as the tooltip trigger. This
   * can be an icon from our Icon component, or a custom SVG element.
   */
  children: PropTypes.node.isRequired,

  /**
   * Specify the direction of the tooltip. Can be either top or bottom.
   */
  direction: PropTypes.oneOf(['top', 'bottom']),

  /**
   * Specify the alignment (to the trigger button) of the tooltip.
   * Can be one of: start, center, or end.
   */
  align: PropTypes.oneOf(['start', 'center', 'end']),

  /**
   * Optionally specify a custom id for the tooltip. If one is not provided, we
   * generate a unique id for you.
   */
  id: PropTypes.string,

  /**
   * Provide the ARIA label for the tooltip.
   * TODO: rename this prop (will be a breaking change)
   */
  tooltipText: PropTypes.string.isRequired
};
TooltipIcon.defaultProps = {
  direction: 'bottom',
  align: 'center'
};
export default TooltipIcon;