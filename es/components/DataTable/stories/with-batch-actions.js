function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { action } from '@storybook/addon-actions';
import { Delete16 as Delete, Save16 as Save, Download16 as Download } from '@carbon/icons-react';
import Button from '../../Button';
import DataTable, { Table, TableBatchAction, TableBatchActions, TableBody, TableCell, TableContainer, TableHead, TableHeader, TableRow, TableSelectAll, TableSelectRow, TableToolbar, TableToolbarAction, TableToolbarContent, TableToolbarSearch, TableToolbarMenu } from '../../DataTable';
import { batchActionClick, initialRows, headers } from './shared';
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
          getSelectionProps = _ref.getSelectionProps,
          getBatchActionProps = _ref.getBatchActionProps,
          onInputChange = _ref.onInputChange,
          selectedRows = _ref.selectedRows,
          getTableProps = _ref.getTableProps,
          getTableContainerProps = _ref.getTableContainerProps;
      return React.createElement(TableContainer, _extends({
        title: "DataTable",
        description: "With batch actions"
      }, getTableContainerProps()), React.createElement(TableToolbar, null, React.createElement(TableBatchActions, getBatchActionProps(), React.createElement(TableBatchAction, {
        renderIcon: Delete,
        onClick: batchActionClick(selectedRows)
      }, "Delete"), React.createElement(TableBatchAction, {
        renderIcon: Save,
        onClick: batchActionClick(selectedRows)
      }, "Save"), React.createElement(TableBatchAction, {
        renderIcon: Download,
        onClick: batchActionClick(selectedRows)
      }, "Download")), React.createElement(TableToolbarContent, null, React.createElement(TableToolbarSearch, {
        onChange: onInputChange
      }), React.createElement(TableToolbarMenu, null, React.createElement(TableToolbarAction, {
        primaryFocus: true,
        onClick: function onClick() {
          return alert('Alert 1');
        }
      }, "Action 1"), React.createElement(TableToolbarAction, {
        onClick: function onClick() {
          return alert('Alert 2');
        }
      }, "Action 2"), React.createElement(TableToolbarAction, {
        onClick: function onClick() {
          return alert('Alert 3');
        }
      }, "Action 3")), React.createElement(Button, {
        onClick: action('Add new row'),
        small: true,
        kind: "primary"
      }, "Add new"))), React.createElement(Table, getTableProps(), React.createElement(TableHead, null, React.createElement(TableRow, null, React.createElement(TableSelectAll, getSelectionProps()), headers.map(function (header) {
        return React.createElement(TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), React.createElement(TableBody, null, rows.map(function (row) {
        return React.createElement(TableRow, getRowProps({
          row: row
        }), React.createElement(TableSelectRow, getSelectionProps({
          row: row
        })), row.cells.map(function (cell) {
          return React.createElement(TableCell, {
            key: cell.id
          }, cell.value);
        }));
      }))));
    }
  }));
});