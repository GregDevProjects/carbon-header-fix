function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
import { settings } from 'carbon-components';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Link, { LinkPropTypes } from './Link';
import SideNavIcon from './SideNavIcon';
import SideNavItem from './SideNavItem';
import SideNavLinkText from './SideNavLinkText';
var prefix = settings.prefix;

var SideNavLink = function SideNavLink(_ref) {
  var _cx;

  var customClassName = _ref.className,
      children = _ref.children,
      IconElement = _ref.renderIcon,
      isActive = _ref.isActive,
      large = _ref.large,
      isSideNavExpanded = _ref.isSideNavExpanded,
      rest = _objectWithoutProperties(_ref, ["className", "children", "renderIcon", "isActive", "large", "isSideNavExpanded"]);

  var className = cx((_cx = {}, _defineProperty(_cx, "".concat(prefix, "--side-nav__link"), true), _defineProperty(_cx, "".concat(prefix, "--side-nav__link--current"), isActive), _defineProperty(_cx, customClassName, !!customClassName), _cx));
  return React.createElement(SideNavItem, {
    large: large
  }, React.createElement(Link, _extends({}, rest, {
    className: className
  }), IconElement && React.createElement(SideNavIcon, {
    small: true
  }, React.createElement(IconElement, null)), React.createElement(SideNavLinkText, null, children)));
};

SideNavLink.propTypes = _objectSpread({}, LinkPropTypes, {
  /**
   * Provide an optional class to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Provide an icon to render in the side navigation link. Should be a React class.
   */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * Specify the text content for the link
   */
  children: PropTypes.string.isRequired,

  /**
   * Property to indicate if the side nav container is open (or not). Use to
   * keep local state and styling in step with the SideNav expansion state.
   */
  isSideNavExpanded: PropTypes.bool,

  /**
   * Specify if this is a large variation of the SideNavLink
   */
  large: PropTypes.bool
});
SideNavLink.defaultProps = {
  element: 'a',
  large: false
};
export var createCustomSideNavLink = function createCustomSideNavLink(element) {
  return function (props) {
    return React.createElement(SideNavLink, _extends({
      element: element
    }, props));
  };
};
export default SideNavLink;