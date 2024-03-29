function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Checkbox from '../../Checkbox';
import DataTable, { Table, TableBody, TableCell, TableContainer, TableHead, TableHeader, TableRow } from '../../DataTable'; // import { initialRows, headers } from './shared';

var initialRows = [{
  id: 'a',
  name: 'Load Balancer 3',
  protocol: 'HTTP',
  port: 3000,
  rule: 'Round robin',
  attached_groups: 'Kevins VM Groups',
  status: 'Disabled',
  enabled: true
}, {
  id: 'b',
  name: 'Load Balancer 1',
  protocol: 'HTTP',
  port: 443,
  rule: 'Round robin',
  attached_groups: 'Maureens VM Groups',
  status: 'Starting',
  enabled: true
}, {
  id: 'c',
  name: 'Load Balancer 2',
  protocol: 'HTTP',
  port: 80,
  rule: 'DNS delegation',
  attached_groups: 'Andrews VM Groups',
  status: 'Active',
  enabled: false
}];
export var headers = [{
  key: 'name',
  header: 'Name'
}, {
  key: 'protocol',
  header: 'Protocol'
}, {
  key: 'port',
  header: 'Port'
}, {
  key: 'rule',
  header: 'Rule'
}, {
  key: 'attached_groups',
  header: 'Attached Groups'
}, {
  key: 'status',
  header: 'Status'
}, {
  key: 'enabled',
  header: 'Enabled'
}];
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
          getTableContainerProps = _ref.getTableContainerProps;
      return React.createElement(TableContainer, _extends({
        title: "DataTable",
        description: "With boolean column"
      }, getTableContainerProps()), React.createElement(Table, getTableProps(), React.createElement(TableHead, null, React.createElement(TableRow, null, headers.map(function (header) {
        return React.createElement(TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), React.createElement(TableBody, null, rows.map(function (row) {
        return React.createElement(TableRow, getRowProps({
          row: row
        }), row.cells.map(function (cell) {
          if (cell.info.header === 'enabled') {
            return React.createElement(TableCell, {
              key: cell.id,
              id: cell.id,
              className: "la-".concat(cell.info.header)
            }, React.createElement(Checkbox, {
              id: 'check-' + cell.id,
              checked: cell.value,
              labelText: ""
            }));
          } else {
            return React.createElement(TableCell, {
              key: cell.id
            }, cell.value);
          }
        }));
      }))));
    }
  }));
});