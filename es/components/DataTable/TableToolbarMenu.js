function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { settings } from 'carbon-components';
import OverflowMenu from '../OverflowMenu';
import { Settings16 } from '@carbon/icons-react';
var prefix = settings.prefix;

var TableToolbarMenu = function TableToolbarMenu(_ref) {
  var className = _ref.className,
      renderIcon = _ref.renderIcon,
      iconDescription = _ref.iconDescription,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["className", "renderIcon", "iconDescription", "children"]);

  var toolbarActionClasses = cx(className, "".concat(prefix, "--toolbar-action ").concat(prefix, "--overflow-menu"));
  return React.createElement(OverflowMenu, _extends({
    renderIcon: renderIcon,
    className: toolbarActionClasses,
    title: iconDescription,
    flipped: true
  }, rest), children);
};

TableToolbarMenu.defaultProps = {
  renderIcon: Settings16,
  iconDescription: 'Settings'
};
TableToolbarMenu.propTypes = {
  children: PropTypes.node.isRequired,

  /**
   * Provide an optional class name for the toolbar menu
   */
  className: PropTypes.string,

  /**
   * Optional prop to allow overriding the default menu icon
   */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * The description of the menu icon.
   */
  iconDescription: PropTypes.string.isRequired
};
export default TableToolbarMenu;