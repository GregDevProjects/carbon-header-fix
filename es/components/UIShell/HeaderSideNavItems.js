function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { settings } from 'carbon-components';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
var prefix = settings.prefix;

var HeaderSideNavItems = function HeaderSideNavItems(_ref) {
  var _cx;

  var customClassName = _ref.className,
      children = _ref.children,
      hasDivider = _ref.hasDivider;
  var className = cx((_cx = {}, _defineProperty(_cx, "".concat(prefix, "--side-nav__header-navigation"), true), _defineProperty(_cx, "".concat(prefix, "--side-nav__header-divider"), hasDivider), _defineProperty(_cx, "customClassName", customClassName), _cx));
  return React.createElement("div", {
    className: className
  }, children);
};

HeaderSideNavItems.propTypes = {
  /**
   * Optionally provide a custom class name that is applied to the underlying
   * button
   */
  className: PropTypes.string,

  /**
   * Optionally specify if container will have a bottom divider to differentiate
   * between original sidenav items and header menu items. False by default.
   */
  hasDivider: PropTypes.bool
};
HeaderSideNavItems.defaultProps = {
  hasDivider: false
};
export default HeaderSideNavItems;