"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _iconsReact = require("@carbon/icons-react");

var _DataTable = _interopRequireWildcard(require("../../DataTable"));

var _shared = require("./shared");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var _default = function _default(props) {
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
        rows: _shared.initialRows,
        headers: _shared.headers,
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

        return _react.default.createElement(_DataTable.default, _extends({
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
            return _react.default.createElement(_DataTable.TableContainer, _extends({
              title: "DataTable",
              description: "Use the toolbar menu to add rows and headers"
            }, getTableContainerProps()), _react.default.createElement(_DataTable.TableToolbar, null, _react.default.createElement(_DataTable.TableBatchActions, getBatchActionProps(), _react.default.createElement(_DataTable.TableBatchAction, {
              renderIcon: _iconsReact.Delete16,
              iconDescription: "Delete the selected rows",
              onClick: (0, _shared.batchActionClick)(selectedRows)
            }, "Delete"), _react.default.createElement(_DataTable.TableBatchAction, {
              renderIcon: _iconsReact.Save16,
              iconDescription: "Save the selected rows",
              onClick: (0, _shared.batchActionClick)(selectedRows)
            }, "Save"), _react.default.createElement(_DataTable.TableBatchAction, {
              renderIcon: _iconsReact.Download16,
              iconDescription: "Download the selected rows",
              onClick: (0, _shared.batchActionClick)(selectedRows)
            }, "Download")), _react.default.createElement(_DataTable.TableToolbarContent, null, _react.default.createElement(_DataTable.TableToolbarSearch, {
              onChange: onInputChange
            }), _react.default.createElement(_DataTable.TableToolbarMenu, null, _react.default.createElement(_DataTable.TableToolbarAction, {
              primaryFocus: true,
              onClick: _this2.handleOnRowAdd
            }, "Add row"), _react.default.createElement(_DataTable.TableToolbarAction, {
              onClick: _this2.handleOnHeaderAdd
            }, "Add header")))), _react.default.createElement(_DataTable.Table, getTableProps(), _react.default.createElement(_DataTable.TableHead, null, _react.default.createElement(_DataTable.TableRow, null, _react.default.createElement(_DataTable.TableExpandHeader, null), _react.default.createElement(_DataTable.TableSelectAll, getSelectionProps()), headers.map(function (header) {
              return _react.default.createElement(_DataTable.TableHeader, getHeaderProps({
                header: header
              }), header.header);
            }))), _react.default.createElement(_DataTable.TableBody, null, rows.map(function (row) {
              return _react.default.createElement(_react.default.Fragment, {
                key: row.id
              }, _react.default.createElement(_DataTable.TableExpandRow, getRowProps({
                row: row
              }), _react.default.createElement(_DataTable.TableSelectRow, getSelectionProps({
                row: row
              })), row.cells.map(function (cell) {
                return _react.default.createElement(_DataTable.TableCell, {
                  key: cell.id
                }, cell.value);
              })), _react.default.createElement(_DataTable.TableExpandedRow, {
                colSpan: headers.length + 3
              }, _react.default.createElement("h1", null, "Expandable row content"), _react.default.createElement("p", null, "Description here")));
            }))));
          }
        }));
      }
    }]);

    return DynamicRows;
  }(_react.default.Component);

  return _react.default.createElement(DynamicRows, props);
};

exports.default = _default;