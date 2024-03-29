"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var _getDerivedStateFromProps = _interopRequireDefault(require("./state/getDerivedStateFromProps"));

var _sorting = require("./state/sorting");

var _denormalize = _interopRequireDefault(require("./tools/denormalize"));

var _events = require("../../tools/events");

var _filter = require("./tools/filter");

var _sorting2 = require("./tools/sorting");

var _instanceId = _interopRequireDefault(require("./tools/instanceId"));

var _defaultTranslations;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getInstanceId = (0, _instanceId.default)();
var translationKeys = {
  expandRow: 'carbon.table.row.expand',
  collapseRow: 'carbon.table.row.collapse',
  expandAll: 'carbon.table.all.expand',
  collapseAll: 'carbon.table.all.collapse',
  selectAll: 'carbon.table.all.select',
  unselectAll: 'carbon.table.all.unselect',
  selectRow: 'carbon.table.row.select',
  unselectRow: 'carbon.table.row.unselect'
};
var defaultTranslations = (_defaultTranslations = {}, _defineProperty(_defaultTranslations, translationKeys.expandAll, 'Expand all rows'), _defineProperty(_defaultTranslations, translationKeys.collapseAll, 'Collapse all rows'), _defineProperty(_defaultTranslations, translationKeys.expandRow, 'Expand current row'), _defineProperty(_defaultTranslations, translationKeys.collapseRow, 'Collapse current row'), _defineProperty(_defaultTranslations, translationKeys.selectAll, 'Select all rows'), _defineProperty(_defaultTranslations, translationKeys.unselectAll, 'Unselect all rows'), _defineProperty(_defaultTranslations, translationKeys.selectRow, 'Select row'), _defineProperty(_defaultTranslations, translationKeys.unselectRow, 'Unselect row'), _defaultTranslations);

var translateWithId = function translateWithId(id) {
  return defaultTranslations[id];
};
/**
 * Data Tables are used to represent a collection of resources, displaying a
 * subset of their fields in columns, or headers. We prioritize direct updates
 * to the state of what we're rendering, so internally we end up normalizing the
 * given data and then denormalizing it when rendering.
 *
 * As a result, each part of the DataTable is accessible through look-up by id,
 * and updating the state of the single entity will cascade updates to the
 * consumer.
 */


var DataTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DataTable, _React$Component);

  function DataTable(_props) {
    var _this;

    _classCallCheck(this, DataTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DataTable).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "getHeaderProps", function (_ref) {
      var header = _ref.header,
          onClick = _ref.onClick,
          _ref$isSortable = _ref.isSortable,
          isSortable = _ref$isSortable === void 0 ? _this.props.isSortable : _ref$isSortable,
          rest = _objectWithoutProperties(_ref, ["header", "onClick", "isSortable"]);

      var _this$state = _this.state,
          sortDirection = _this$state.sortDirection,
          sortHeaderKey = _this$state.sortHeaderKey;
      return _objectSpread({}, rest, {
        key: header.key,
        sortDirection: sortDirection,
        isSortable: isSortable,
        isSortHeader: sortHeaderKey === header.key,
        // Compose the event handlers so we don't overwrite a consumer's `onClick`
        // handler
        onClick: (0, _events.composeEventHandlers)([_this.handleSortBy(header.key), onClick ? _this.handleOnHeaderClick(onClick, {
          sortHeaderKey: header.key,
          sortDirection: sortDirection
        }) : null])
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getExpandHeaderProps", function () {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          onClick = _ref2.onClick,
          rest = _objectWithoutProperties(_ref2, ["onClick"]);

      var t = _this.props.translateWithId;
      var _this$state2 = _this.state,
          isExpandedAll = _this$state2.isExpandedAll,
          rowIds = _this$state2.rowIds,
          rowsById = _this$state2.rowsById;
      var isExpanded = isExpandedAll || rowIds.every(function (id) {
        return rowsById[id].isExpanded;
      });
      var translationKey = !isExpanded ? translationKeys.collapseAll : translationKeys.expandAll;
      return _objectSpread({}, rest, {
        ariaLabel: t(translationKey),
        isExpanded: isExpanded,
        // Compose the event handlers so we don't overwrite a consumer's `onClick`
        // handler
        onExpand: (0, _events.composeEventHandlers)([_this.handleOnExpandAll, onClick ? _this.handleOnExpandHeaderClick(onClick, {
          isExpanded: isExpanded
        }) : null])
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnHeaderClick", function (onClick, sortParams) {
      return function (e) {
        return onClick(e, sortParams);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnExpandHeaderClick", function (onClick, expandParams) {
      return function (e) {
        return onClick(e, expandParams);
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getRowProps", function (_ref3) {
      var row = _ref3.row,
          onClick = _ref3.onClick,
          rest = _objectWithoutProperties(_ref3, ["row", "onClick"]);

      var t = _this.props.translateWithId;
      var translationKey = row.isExpanded ? translationKeys.collapseRow : translationKeys.expandRow;
      return _objectSpread({}, rest, {
        key: row.id,
        // Compose the event handlers so we don't overwrite a consumer's `onClick`
        // handler
        onExpand: (0, _events.composeEventHandlers)([_this.handleOnExpandRow(row.id), onClick]),
        isExpanded: row.isExpanded,
        ariaLabel: t(translationKey),
        isSelected: row.isSelected,
        disabled: row.disabled
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getSelectionProps", function () {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          onClick = _ref4.onClick,
          row = _ref4.row,
          rest = _objectWithoutProperties(_ref4, ["onClick", "row"]);

      var t = _this.props.translateWithId; // If we're given a row, return the selection state values for that row

      if (row) {
        var _translationKey = row.isSelected ? translationKeys.unselectRow : translationKeys.selectRow;

        return _objectSpread({}, rest, {
          checked: row.isSelected,
          onSelect: (0, _events.composeEventHandlers)([_this.handleOnSelectRow(row.id), onClick]),
          id: "".concat(_this.getTablePrefix(), "__select-row-").concat(row.id),
          name: "select-row-".concat(row.id),
          ariaLabel: t(_translationKey),
          disabled: row.disabled,
          radio: _this.props.radio || null
        });
      } // Otherwise, we're working on `TableSelectAll` which handles toggling the
      // selection state of all rows.


      var rowCount = _this.state.rowIds.length;

      var selectedRowCount = _this.getSelectedRows().length;

      var checked = rowCount > 0 && selectedRowCount === rowCount;
      var indeterminate = rowCount > 0 && selectedRowCount > 0 && selectedRowCount !== rowCount;
      var translationKey = checked ? translationKeys.unselectAll : translationKeys.selectAll;
      return _objectSpread({}, rest, {
        ariaLabel: t(translationKey),
        checked: checked,
        id: "".concat(_this.getTablePrefix(), "__select-all"),
        indeterminate: indeterminate,
        name: 'select-all',
        onSelect: (0, _events.composeEventHandlers)([_this.handleSelectAll, onClick])
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getBatchActionProps", function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var shouldShowBatchActions = _this.state.shouldShowBatchActions;

      var totalSelected = _this.getSelectedRows().length;

      return _objectSpread({}, props, {
        shouldShowBatchActions: shouldShowBatchActions,
        totalSelected: totalSelected,
        onCancel: _this.handleOnCancel
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getTableProps", function () {
      var _this$props = _this.props,
          useZebraStyles = _this$props.useZebraStyles,
          size = _this$props.size,
          isSortable = _this$props.isSortable,
          useStaticWidth = _this$props.useStaticWidth,
          shouldShowBorder = _this$props.shouldShowBorder,
          stickyHeader = _this$props.stickyHeader;
      return {
        useZebraStyles: useZebraStyles,
        size: size,
        isSortable: isSortable,
        useStaticWidth: useStaticWidth,
        shouldShowBorder: shouldShowBorder,
        stickyHeader: stickyHeader
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getTableContainerProps", function () {
      var stickyHeader = _this.props.stickyHeader;
      return {
        stickyHeader: stickyHeader
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getSelectedRows", function () {
      return _this.state.rowIds.filter(function (id) {
        var row = _this.state.rowsById[id];
        return row.isSelected;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getFilteredRowIds", function () {
      var filteredRowIds = typeof _this.state.filterInputValue === 'string' ? _this.props.filterRows({
        rowIds: _this.state.rowIds,
        headers: _this.props.headers,
        cellsById: _this.state.cellsById,
        inputValue: _this.state.filterInputValue
      }) : _this.state.rowIds;

      if (filteredRowIds.length == 0) {
        return _this.state.rowIds;
      }

      return filteredRowIds;
    });

    _defineProperty(_assertThisInitialized(_this), "getTablePrefix", function () {
      return "data-table-".concat(_this.instanceId);
    });

    _defineProperty(_assertThisInitialized(_this), "setAllSelectedState", function (initialState, isSelected, filteredRowIds) {
      var rowIds = initialState.rowIds;
      return {
        rowsById: rowIds.reduce(function (acc, id) {
          return _objectSpread({}, acc, _defineProperty({}, id, _objectSpread({}, initialState.rowsById[id], {
            isSelected: !initialState.rowsById[id].disabled && filteredRowIds.includes(id) && isSelected
          })));
        }, {})
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnCancel", function () {
      _this.setState(function (state) {
        return _objectSpread({
          shouldShowBatchActions: false
        }, _this.setAllSelectedState(state, false, _this.getFilteredRowIds()));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelectAll", function () {
      _this.setState(function (state) {
        var filteredRowIds = _this.getFilteredRowIds();

        var rowsById = state.rowsById;
        var isSelected = !(Object.values(rowsById).filter(function (row) {
          return row.isSelected == true;
        }).length > 0);
        return _objectSpread({
          shouldShowBatchActions: isSelected
        }, _this.setAllSelectedState(state, isSelected, filteredRowIds));
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnSelectRow", function (rowId) {
      return function () {
        _this.setState(function (state) {
          var row = state.rowsById[rowId];

          if (_this.props.radio) {
            // deselect all radio buttons
            var rowsById = Object.entries(state.rowsById).reduce(function (p, c) {
              var _c = _slicedToArray(c, 2),
                  key = _c[0],
                  val = _c[1];

              val.isSelected = false;
              p[key] = val;
              return p;
            }, {});
            return {
              shouldShowBatchActions: false,
              rowsById: _objectSpread({}, rowsById, _defineProperty({}, rowId, _objectSpread({}, row, {
                isSelected: !row.isSelected
              })))
            };
          }

          var selectedRows = state.rowIds.filter(function (id) {
            return state.rowsById[id].isSelected;
          }).length; // Predict the length of the selected rows after this change occurs

          var selectedRowsCount = !row.isSelected ? selectedRows + 1 : selectedRows - 1;
          return {
            // Basic assumption here is that we want to show the batch action bar if
            // the row is being selected. If it's being unselected, then see if we
            // have a non-zero number of selected rows that batch actions could
            // still apply to
            shouldShowBatchActions: !row.isSelected || selectedRowsCount > 0,
            rowsById: _objectSpread({}, state.rowsById, _defineProperty({}, rowId, _objectSpread({}, row, {
              isSelected: !row.isSelected
            })))
          };
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnExpandRow", function (rowId) {
      return function () {
        _this.setState(function (state) {
          var row = state.rowsById[rowId];
          var isExpandedAll = state.isExpandedAll;
          return {
            isExpandedAll: row.isExpanded ? false : isExpandedAll,
            rowsById: _objectSpread({}, state.rowsById, _defineProperty({}, rowId, _objectSpread({}, row, {
              isExpanded: !row.isExpanded
            })))
          };
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnExpandAll", function () {
      _this.setState(function (state) {
        var rowIds = state.rowIds,
            isExpandedAll = state.isExpandedAll;
        return {
          isExpandedAll: !isExpandedAll,
          rowsById: rowIds.reduce(function (acc, id) {
            return _objectSpread({}, acc, _defineProperty({}, id, _objectSpread({}, state.rowsById[id], {
              isExpanded: !isExpandedAll
            })));
          }, {})
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSortBy", function (headerKey) {
      return function () {
        _this.setState(function (state) {
          return (0, _sorting.getNextSortState)(_this.props, state, {
            key: headerKey
          });
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnInputValueChange", function (event) {
      if (event.target) {
        _this.setState({
          filterInputValue: event.target.value
        });
      }
    });

    _this.state = _objectSpread({}, (0, _getDerivedStateFromProps.default)(_props, {}), {
      isExpandedAll: false // Start with collapsed state, treat `undefined` as neutral state

    });
    _this.instanceId = getInstanceId();
    return _this;
  }

  _createClass(DataTable, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var rowIds = this.props.rows.map(function (row) {
        return row.id;
      });
      var nextRowIds = nextProps.rows.map(function (row) {
        return row.id;
      });

      if (!(0, _lodash.default)(rowIds, nextRowIds)) {
        this.setState(function (state) {
          return (0, _getDerivedStateFromProps.default)(nextProps, state);
        });
        return;
      }

      var headers = this.props.headers.map(function (header) {
        return header.key;
      });
      var nextHeaders = nextProps.headers.map(function (header) {
        return header.key;
      });

      if (!(0, _lodash.default)(headers, nextHeaders)) {
        this.setState(function (state) {
          return (0, _getDerivedStateFromProps.default)(nextProps, state);
        });
        return;
      }

      if (!(0, _lodash.default)(this.props.rows, nextProps.rows)) {
        this.setState(function (state) {
          return (0, _getDerivedStateFromProps.default)(nextProps, state);
        });
        return;
      }
    }
    /**
     * Get the props associated with the given header. Mostly used for adding in
     * sorting behavior.
     *
     * @param {object} config
     * @param {string} config.header the header we want the props for
     * @param {Function} config.onClick a custom click handler for the header
     * @returns {object}
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          filterRows = _this$props2.filterRows,
          headers = _this$props2.headers,
          render = _this$props2.render;
      var _this$state3 = this.state,
          filterInputValue = _this$state3.filterInputValue,
          rowIds = _this$state3.rowIds,
          rowsById = _this$state3.rowsById,
          cellsById = _this$state3.cellsById;
      var filteredRowIds = typeof filterInputValue === 'string' ? filterRows({
        rowIds: rowIds,
        headers: headers,
        cellsById: cellsById,
        inputValue: filterInputValue
      }) : rowIds;
      var renderProps = {
        // Data derived from state
        rows: (0, _denormalize.default)(filteredRowIds, rowsById, cellsById),
        headers: this.props.headers,
        selectedRows: (0, _denormalize.default)(this.getSelectedRows(), rowsById, cellsById),
        // Prop accessors/getters
        getHeaderProps: this.getHeaderProps,
        getExpandHeaderProps: this.getExpandHeaderProps,
        getRowProps: this.getRowProps,
        getSelectionProps: this.getSelectionProps,
        getBatchActionProps: this.getBatchActionProps,
        getTableProps: this.getTableProps,
        getTableContainerProps: this.getTableContainerProps,
        // Custom event handlers
        onInputChange: this.handleOnInputValueChange,
        // Expose internal state change actions
        sortBy: function sortBy(headerKey) {
          return _this2.handleSortBy(headerKey)();
        },
        selectAll: this.handleSelectAll,
        selectRow: function selectRow(rowId) {
          return _this2.handleOnSelectRow(rowId)();
        },
        expandRow: function expandRow(rowId) {
          return _this2.handleOnExpandRow(rowId)();
        },
        expandAll: this.handleOnExpandAll,
        radio: this.props.radio
      };

      if (render !== undefined) {
        return render(renderProps);
      }

      if (children !== undefined) {
        return children(renderProps);
      }

      return null;
    }
  }]);

  return DataTable;
}(_react.default.Component);

exports.default = DataTable;

_defineProperty(DataTable, "propTypes", {
  /**
   * The `rows` prop is where you provide us with a list of all the rows that
   * you want to render in the table. The only hard requirement is that this
   * is an array of objects, and that each object has a unique `id` field
   * available on it.
   */
  rows: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    disabled: _propTypes.default.bool,
    isSelected: _propTypes.default.bool,
    isExpanded: _propTypes.default.bool
  })).isRequired,

  /**
   * The `headers` prop represents the order in which the headers should
   * appear in the table. We expect an array of objects to be passed in, where
   * `key` is the name of the key in a row object, and `header` is the name of
   * the header.
   */
  headers: _propTypes.default.arrayOf(_propTypes.default.shape({
    key: _propTypes.default.string.isRequired,
    header: _propTypes.default.node.isRequired
  })).isRequired,

  /**
   * Optional hook to manually control sorting of the rows.
   */
  sortRow: _propTypes.default.func,

  /**
   * Optional hook to manually control filtering of the rows from the
   * TableToolbarSearch component
   */
  filterRows: _propTypes.default.func,

  /**
   * Provide a string for the current locale
   */
  locale: _propTypes.default.string,

  /**
   * Optional method that takes in a message id and returns an
   * internationalized string. See `DataTable.translationKeys` for all
   * available message ids.
   */
  translateWithId: _propTypes.default.func,

  /**
   * Specify whether the control should be a radio button or inline checkbox
   */
  radio: _propTypes.default.bool,

  /**
   * Specify whether the header should be sticky.
   * Still experimental: may not work with every combination of table props
   */
  stickyHeader: _propTypes.default.bool
});

_defineProperty(DataTable, "defaultProps", {
  sortRow: _sorting2.defaultSortRow,
  filterRows: _filter.defaultFilterRows,
  locale: 'en',
  translateWithId: translateWithId
});

_defineProperty(DataTable, "translationKeys", Object.values(translationKeys));