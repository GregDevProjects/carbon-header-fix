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
import React from 'react';
import { ChevronRight16 } from '@carbon/icons-react';
import { settings } from 'carbon-components';
var prefix = settings.prefix;

var TableExpandHeader = function TableExpandHeader(_ref) {
  var ariaLabel = _ref.ariaLabel,
      headerClassName = _ref.className,
      enableExpando = _ref.enableExpando,
      isExpanded = _ref.isExpanded,
      onExpand = _ref.onExpand,
      expandIconDescription = _ref.expandIconDescription,
      rest = _objectWithoutProperties(_ref, ["ariaLabel", "className", "enableExpando", "isExpanded", "onExpand", "expandIconDescription"]);

  var className = cx("".concat(prefix, "--table-expand"), headerClassName);
  var previousValue = isExpanded ? 'collapsed' : undefined;
  return React.createElement("th", _extends({
    scope: "col",
    className: className,
    "data-previous-value": previousValue
  }, rest), !enableExpando ? null : React.createElement("button", {
    className: "".concat(prefix, "--table-expand__button"),
    onClick: onExpand,
    title: expandIconDescription,
    "aria-label": ariaLabel
  }, React.createElement(ChevronRight16, {
    className: "".concat(prefix, "--table-expand__svg"),
    "aria-label": expandIconDescription
  })));
};

export default TableExpandHeader;