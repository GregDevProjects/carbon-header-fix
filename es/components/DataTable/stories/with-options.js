function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import DataTable, { Table, TableBody, TableCell, TableContainer, TableExpandedRow, TableExpandHeader, TableExpandRow, TableHead, TableHeader, TableRow, TableSelectAll, TableSelectRow } from '..';
import { headers, initialRows } from './shared';
export default (function (props) {
  return React.createElement(DataTable, _extends({
    rows: [_objectSpread({}, initialRows[0], {
      disabled: true
    }), _objectSpread({}, initialRows[1], {
      isSelected: true
    }), _objectSpread({}, initialRows[2], {
      isExpanded: true
    })],
    headers: headers
  }, props, {
    render: function render(_ref) {
      var rows = _ref.rows,
          headers = _ref.headers,
          getHeaderProps = _ref.getHeaderProps,
          getRowProps = _ref.getRowProps,
          getTableProps = _ref.getTableProps,
          getSelectionProps = _ref.getSelectionProps,
          getTableContainerProps = _ref.getTableContainerProps;
      return React.createElement(TableContainer, _extends({
        title: "DataTable",
        description: "With options"
      }, getTableContainerProps()), React.createElement(Table, getTableProps(), React.createElement(TableHead, null, React.createElement(TableRow, null, React.createElement(TableExpandHeader, null), React.createElement(TableSelectAll, getSelectionProps()), headers.map(function (header) {
        return React.createElement(TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), React.createElement(TableBody, null, rows.map(function (row) {
        return React.createElement(React.Fragment, {
          key: row.id
        }, React.createElement(TableExpandRow, getRowProps({
          row: row
        }), React.createElement(TableSelectRow, getSelectionProps({
          row: row
        })), row.cells.map(function (cell) {
          return React.createElement(TableCell, {
            key: cell.id
          }, cell.value);
        })), React.createElement(TableExpandedRow, {
          colSpan: headers.length + 2
        }, React.createElement("h1", null, "Expandable row content"), React.createElement("p", null, "Description here")));
      }))));
    }
  }));
});