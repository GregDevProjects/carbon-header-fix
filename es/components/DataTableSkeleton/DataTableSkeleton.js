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
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { settings } from 'carbon-components';
var prefix = settings.prefix;

var DataTableSkeleton = function DataTableSkeleton(_ref) {
  var _classNames;

  var rowCount = _ref.rowCount,
      columnCount = _ref.columnCount,
      zebra = _ref.zebra,
      compact = _ref.compact,
      headers = _ref.headers,
      other = _objectWithoutProperties(_ref, ["rowCount", "columnCount", "zebra", "compact", "headers"]);

  var dataTableSkeletonClasses = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--skeleton"), true), _defineProperty(_classNames, "".concat(prefix, "--data-table"), true), _defineProperty(_classNames, "".concat(prefix, "--data-table--zebra"), zebra), _defineProperty(_classNames, "".concat(prefix, "--data-table--compact"), compact), _classNames));
  var normalizedHeaders;

  if (headers[0] === Object(headers[0]) && !Array.isArray(headers[0])) {
    normalizedHeaders = headers.map(function (current) {
      return current.header;
    });
  } else {
    normalizedHeaders = headers;
  }

  var rowRepeat = rowCount - 1;
  var rows = Array(rowRepeat);
  var columnsArray = Array.from({
    length: columnCount
  }, function (_, index) {
    return index;
  });

  for (var _i = 0; _i < rowRepeat; _i++) {
    rows[_i] = React.createElement("tr", {
      key: _i
    }, columnsArray.map(function (j) {
      return React.createElement("td", {
        key: j
      });
    }));
  }

  return React.createElement("table", _extends({
    className: dataTableSkeletonClasses
  }, other), React.createElement("thead", null, React.createElement("tr", null, columnsArray.map(function (i) {
    return React.createElement("th", {
      key: i
    }, normalizedHeaders[i]);
  }))), React.createElement("tbody", null, React.createElement("tr", null, columnsArray.map(function (i) {
    return React.createElement("td", {
      key: i
    }, React.createElement("span", null));
  })), rows));
};

DataTableSkeleton.propTypes = {
  /**
   * Specify the number of rows that you want to render in the skeleton state
   */
  rowCount: PropTypes.number,

  /**
   * Specify the number of columns that you want to render in the skeleton state
   */
  columnCount: PropTypes.number,

  /**
   * Optionally specify whether you want the DataTable to be zebra striped
   */
  zebra: PropTypes.bool,

  /**
   * Optionally specify whether you want the Skeleton to be rendered as a
   * compact DataTable
   */
  compact: PropTypes.bool,

  /**
   * Optionally specify the displayed headers
   */
  headers: PropTypes.oneOfType([PropTypes.array, PropTypes.shape({
    key: PropTypes.string,
    header: PropTypes.node
  })])
};
DataTableSkeleton.defaultProps = {
  rowCount: 5,
  columnCount: 5,
  zebra: false,
  compact: false,
  headers: []
};
export default DataTableSkeleton;