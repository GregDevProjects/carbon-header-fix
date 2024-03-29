function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../Button';
import DataTable, { Table, TableBody, TableCell, TableContainer, TableHead, TableHeader, TableRow, TableToolbar, TableToolbarAction, TableToolbarContent, TableToolbarSearch, TableToolbarMenu } from '..';
import { initialRows, headers } from './shared';
export default (function (props) {
  return React.createElement(DataTable, _extends({
    rows: initialRows,
    headers: headers
  }, props, {
    render: function render(_ref) {
      var rows = _ref.rows,
          headers = _ref.headers,
          getHeaderProps = _ref.getHeaderProps,
          getRowProps = _ref.getRowProps,
          getTableProps = _ref.getTableProps,
          onInputChange = _ref.onInputChange,
          getTableContainerProps = _ref.getTableContainerProps;
      return React.createElement(TableContainer, _extends({
        title: "DataTable",
        description: "With toolbar"
      }, getTableContainerProps()), React.createElement(TableToolbar, null, React.createElement(TableToolbarContent, null, React.createElement(TableToolbarSearch, {
        onChange: onInputChange
      }), React.createElement(TableToolbarMenu, null, React.createElement(TableToolbarAction, {
        onClick: action('Action 1 Click'),
        primaryFocus: true
      }, "Action 1"), React.createElement(TableToolbarAction, {
        onClick: action('Action 2 Click')
      }, "Action 2"), React.createElement(TableToolbarAction, {
        onClick: action('Action 3 Click')
      }, "Action 3")), React.createElement(Button, {
        onClick: action('ButtonCLick')
      }, "Primary Button"))), React.createElement(Table, getTableProps(), React.createElement(TableHead, null, React.createElement(TableRow, null, headers.map(function (header) {
        return React.createElement(TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), React.createElement(TableBody, null, rows.map(function (row) {
        return React.createElement(TableRow, getRowProps({
          row: row
        }), row.cells.map(function (cell) {
          return React.createElement(TableCell, {
            key: cell.id
          }, cell.value);
        }));
      }))));
    }
  }));
});