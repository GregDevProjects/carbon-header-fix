"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.headers = void 0;

var _react = _interopRequireDefault(require("react"));

var _Checkbox = _interopRequireDefault(require("../../Checkbox"));

var _DataTable = _interopRequireWildcard(require("../../DataTable"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// import { initialRows, headers } from './shared';
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
var headers = [{
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
exports.headers = headers;

var _default = function _default(props) {
  return _react.default.createElement(_DataTable.default, _extends({
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
      return _react.default.createElement(_DataTable.TableContainer, _extends({
        title: "DataTable",
        description: "With boolean column"
      }, getTableContainerProps()), _react.default.createElement(_DataTable.Table, getTableProps(), _react.default.createElement(_DataTable.TableHead, null, _react.default.createElement(_DataTable.TableRow, null, headers.map(function (header) {
        return _react.default.createElement(_DataTable.TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), _react.default.createElement(_DataTable.TableBody, null, rows.map(function (row) {
        return _react.default.createElement(_DataTable.TableRow, getRowProps({
          row: row
        }), row.cells.map(function (cell) {
          if (cell.info.header === 'enabled') {
            return _react.default.createElement(_DataTable.TableCell, {
              key: cell.id,
              id: cell.id,
              className: "la-".concat(cell.info.header)
            }, _react.default.createElement(_Checkbox.default, {
              id: 'check-' + cell.id,
              checked: cell.value,
              labelText: ""
            }));
          } else {
            return _react.default.createElement(_DataTable.TableCell, {
              key: cell.id
            }, cell.value);
          }
        }));
      }))));
    }
  }));
};

exports.default = _default;