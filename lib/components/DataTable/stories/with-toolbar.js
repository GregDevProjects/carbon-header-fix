"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonActions = require("@storybook/addon-actions");

var _Button = _interopRequireDefault(require("../../Button"));

var _ = _interopRequireWildcard(require(".."));

var _shared = require("./shared");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default(props) {
  return _react.default.createElement(_.default, _extends({
    rows: _shared.initialRows,
    headers: _shared.headers
  }, props, {
    render: function render(_ref) {
      var rows = _ref.rows,
          headers = _ref.headers,
          getHeaderProps = _ref.getHeaderProps,
          getRowProps = _ref.getRowProps,
          getTableProps = _ref.getTableProps,
          onInputChange = _ref.onInputChange,
          getTableContainerProps = _ref.getTableContainerProps;
      return _react.default.createElement(_.TableContainer, _extends({
        title: "DataTable",
        description: "With toolbar"
      }, getTableContainerProps()), _react.default.createElement(_.TableToolbar, null, _react.default.createElement(_.TableToolbarContent, null, _react.default.createElement(_.TableToolbarSearch, {
        onChange: onInputChange
      }), _react.default.createElement(_.TableToolbarMenu, null, _react.default.createElement(_.TableToolbarAction, {
        onClick: (0, _addonActions.action)('Action 1 Click'),
        primaryFocus: true
      }, "Action 1"), _react.default.createElement(_.TableToolbarAction, {
        onClick: (0, _addonActions.action)('Action 2 Click')
      }, "Action 2"), _react.default.createElement(_.TableToolbarAction, {
        onClick: (0, _addonActions.action)('Action 3 Click')
      }, "Action 3")), _react.default.createElement(_Button.default, {
        onClick: (0, _addonActions.action)('ButtonCLick')
      }, "Primary Button"))), _react.default.createElement(_.Table, getTableProps(), _react.default.createElement(_.TableHead, null, _react.default.createElement(_.TableRow, null, headers.map(function (header) {
        return _react.default.createElement(_.TableHeader, getHeaderProps({
          header: header
        }), header.header);
      }))), _react.default.createElement(_.TableBody, null, rows.map(function (row) {
        return _react.default.createElement(_.TableRow, getRowProps({
          row: row
        }), row.cells.map(function (cell) {
          return _react.default.createElement(_.TableCell, {
            key: cell.id
          }, cell.value);
        }));
      }))));
    }
  }));
};

exports.default = _default;