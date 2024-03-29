"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _DataTable = _interopRequireWildcard(require("../../DataTable"));

var _shared = require("./shared");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default(props) {
  return _react.default.createElement(_DataTable.default, _extends({
    rows: _shared.initialRows,
    headers: _shared.headers
  }, props, {
    render: function render(_ref) {
      var rows = _ref.rows,
          headers = _ref.headers,
          getHeaderProps = _ref.getHeaderProps,
          getRowProps = _ref.getRowProps,
          getSelectionProps = _ref.getSelectionProps,
          getTableProps = _ref.getTableProps,
          getTableContainerProps = _ref.getTableContainerProps;
      return _react.default.createElement(_DataTable.TableContainer, _extends({
        title: "DataTable",
        description: "With selection"
      }, getTableContainerProps()), _react.default.createElement(_DataTable.Table, getTableProps(), _react.default.createElement(_DataTable.TableHead, null, _react.default.createElement(_DataTable.TableRow, null, _react.default.createElement(_DataTable.TableSelectAll, getSelectionProps()), headers.map(function (header) {
        return _react.default.createElement(_DataTable.TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), _react.default.createElement(_DataTable.TableBody, null, rows.map(function (row) {
        return _react.default.createElement(_DataTable.TableRow, getRowProps({
          row: row
        }), _react.default.createElement(_DataTable.TableSelectRow, getSelectionProps({
          row: row
        })), row.cells.map(function (cell) {
          return _react.default.createElement(_DataTable.TableCell, {
            key: cell.id
          }, cell.value);
        }));
      }))));
    }
  }));
};

exports.default = _default;