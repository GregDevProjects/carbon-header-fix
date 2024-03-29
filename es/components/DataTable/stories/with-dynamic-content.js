function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { Delete16 as Delete, Save16 as Save, Download16 as Download } from '@carbon/icons-react';
import DataTable, { Table, TableBatchAction, TableBatchActions, TableBody, TableCell, TableContainer, TableExpandHeader, TableExpandRow, TableExpandedRow, TableHead, TableHeader, TableRow, TableSelectAll, TableSelectRow, TableToolbar, TableToolbarAction, TableToolbarContent, TableToolbarSearch, TableToolbarMenu } from '../../DataTable';
import { batchActionClick, initialRows, headers } from './shared';
export default (function (props) {
  var insertInRandomPosition = function insertInRandomPosition(array, element) {
    var index = Math.floor(Math.random() * (array.length + 1));
    return [].concat(_toConsumableArray(array.slice(0, index)), [element], _toConsumableArray(array.slice(index)));
  };

  var DynamicRows =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(DynamicRows, _React$Component);

    function DynamicRows() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, DynamicRows);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DynamicRows)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        rows: initialRows,
        headers: headers,
        id: 0
      });

      _defineProperty(_assertThisInitialized(_this), "handleOnHeaderAdd", function () {
        var length = _this.state.headers.length;
        var header = {
          key: "header_".concat(length),
          header: "Header ".concat(length)
        };

        _this.setState(function (state) {
          var rows = state.rows.map(function (row) {
            return _objectSpread({}, row, _defineProperty({}, header.key, header.header));
          });
          return {
            rows: rows,
            headers: state.headers.concat(header)
          };
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleOnRowAdd", function () {
        _this.setState(function (state) {
          var _id = state.id,
              rows = state.rows;
          var id = _id + 1;
          var row = {
            id: '' + id,
            name: "New Row ".concat(id),
            protocol: 'HTTP',
            port: id * 100,
            rule: id % 2 === 0 ? 'Round robin' : 'DNS delegation',
            attached_groups: "Row ".concat(id, "'s VM Groups"),
            status: 'Starting'
          };
          state.headers.filter(function (header) {
            return row[header.key] === undefined;
          }).forEach(function (header) {
            row[header.key] = header.header;
          });
          return {
            id: id,
            rows: insertInRandomPosition(rows, row)
          };
        });
      });

      return _this;
    }

    _createClass(DynamicRows, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        return React.createElement(DataTable, _extends({
          rows: this.state.rows,
          headers: this.state.headers
        }, this.props, {
          render: function render(_ref) {
            var rows = _ref.rows,
                headers = _ref.headers,
                getHeaderProps = _ref.getHeaderProps,
                getSelectionProps = _ref.getSelectionProps,
                getBatchActionProps = _ref.getBatchActionProps,
                getRowProps = _ref.getRowProps,
                onInputChange = _ref.onInputChange,
                selectedRows = _ref.selectedRows,
                getTableProps = _ref.getTableProps,
                getTableContainerProps = _ref.getTableContainerProps;
            return React.createElement(TableContainer, _extends({
              title: "DataTable",
              description: "Use the toolbar menu to add rows and headers"
            }, getTableContainerProps()), React.createElement(TableToolbar, null, React.createElement(TableBatchActions, getBatchActionProps(), React.createElement(TableBatchAction, {
              renderIcon: Delete,
              iconDescription: "Delete the selected rows",
              onClick: batchActionClick(selectedRows)
            }, "Delete"), React.createElement(TableBatchAction, {
              renderIcon: Save,
              iconDescription: "Save the selected rows",
              onClick: batchActionClick(selectedRows)
            }, "Save"), React.createElement(TableBatchAction, {
              renderIcon: Download,
              iconDescription: "Download the selected rows",
              onClick: batchActionClick(selectedRows)
            }, "Download")), React.createElement(TableToolbarContent, null, React.createElement(TableToolbarSearch, {
              onChange: onInputChange
            }), React.createElement(TableToolbarMenu, null, React.createElement(TableToolbarAction, {
              primaryFocus: true,
              onClick: _this2.handleOnRowAdd
            }, "Add row"), React.createElement(TableToolbarAction, {
              onClick: _this2.handleOnHeaderAdd
            }, "Add header")))), React.createElement(Table, getTableProps(), React.createElement(TableHead, null, React.createElement(TableRow, null, React.createElement(TableExpandHeader, null), React.createElement(TableSelectAll, getSelectionProps()), headers.map(function (header) {
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
                colSpan: headers.length + 3
              }, React.createElement("h1", null, "Expandable row content"), React.createElement("p", null, "Description here")));
            }))));
          }
        }));
      }
    }]);

    return DynamicRows;
  }(React.Component);

  return React.createElement(DynamicRows, props);
});