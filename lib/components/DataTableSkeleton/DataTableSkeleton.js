"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;

var DataTableSkeleton = function DataTableSkeleton(_ref) {
  var _classNames;

  var rowCount = _ref.rowCount,
      columnCount = _ref.columnCount,
      zebra = _ref.zebra,
      compact = _ref.compact,
      headers = _ref.headers,
      other = _objectWithoutProperties(_ref, ["rowCount", "columnCount", "zebra", "compact", "headers"]);

  var dataTableSkeletonClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--skeleton"), true), _defineProperty(_classNames, "".concat(prefix, "--data-table"), true), _defineProperty(_classNames, "".concat(prefix, "--data-table--zebra"), zebra), _defineProperty(_classNames, "".concat(prefix, "--data-table--compact"), compact), _classNames));
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
    rows[_i] = _react.default.createElement("tr", {
      key: _i
    }, columnsArray.map(function (j) {
      return _react.default.createElement("td", {
        key: j
      });
    }));
  }

  return _react.default.createElement("table", _extends({
    className: dataTableSkeletonClasses
  }, other), _react.default.createElement("thead", null, _react.default.createElement("tr", null, columnsArray.map(function (i) {
    return _react.default.createElement("th", {
      key: i
    }, normalizedHeaders[i]);
  }))), _react.default.createElement("tbody", null, _react.default.createElement("tr", null, columnsArray.map(function (i) {
    return _react.default.createElement("td", {
      key: i
    }, _react.default.createElement("span", null));
  })), rows));
};

DataTableSkeleton.propTypes = {
  /**
   * Specify the number of rows that you want to render in the skeleton state
   */
  rowCount: _propTypes.default.number,

  /**
   * Specify the number of columns that you want to render in the skeleton state
   */
  columnCount: _propTypes.default.number,

  /**
   * Optionally specify whether you want the DataTable to be zebra striped
   */
  zebra: _propTypes.default.bool,

  /**
   * Optionally specify whether you want the Skeleton to be rendered as a
   * compact DataTable
   */
  compact: _propTypes.default.bool,

  /**
   * Optionally specify the displayed headers
   */
  headers: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.shape({
    key: _propTypes.default.string,
    header: _propTypes.default.node
  })])
};
DataTableSkeleton.defaultProps = {
  rowCount: 5,
  columnCount: 5,
  zebra: false,
  compact: false,
  headers: []
};
var _default = DataTableSkeleton;
exports.default = _default;