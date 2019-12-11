function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { settings } from 'carbon-components';
var prefix = settings.prefix;

var Breadcrumb = function Breadcrumb(_ref) {
  var _cx;

  var ariaLabel = _ref['aria-label'],
      children = _ref.children,
      customClassNameNav = _ref.className,
      noTrailingSlash = _ref.noTrailingSlash;
  var className = cx((_cx = {}, _defineProperty(_cx, "".concat(prefix, "--breadcrumb"), true), _defineProperty(_cx, "".concat(prefix, "--breadcrumb--no-trailing-slash"), noTrailingSlash), _cx));
  return React.createElement("nav", {
    className: customClassNameNav,
    "aria-label": ariaLabel ? ariaLabel : 'Breadcrumb'
  }, React.createElement("ol", {
    className: className
  }, children));
};

Breadcrumb.propTypes = {
  /**
   * Specify the label for the breadcrumb container
   */
  'aria-label': PropTypes.string,

  /**
   * Pass in the BreadcrumbItem's for your Breadcrumb
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Optional prop to omit the trailing slash for the breadcrumbs
   */
  noTrailingSlash: PropTypes.bool
};
export default Breadcrumb;