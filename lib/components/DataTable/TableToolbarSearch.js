"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _carbonComponents = require("carbon-components");

var _Search = _interopRequireDefault(require("../Search"));

var _instanceId = _interopRequireDefault(require("./tools/instanceId"));

var _deprecate = _interopRequireDefault(require("../../prop-types/deprecate"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;
var getInstanceId = (0, _instanceId.default)();
var translationKeys = {
  'carbon.table.toolbar.search.label': 'Filter table',
  'carbon.table.toolbar.search.placeholder': 'Filter table'
};

var translateWithId = function translateWithId(id) {
  return translationKeys[id];
};

var TableToolbarSearch = function TableToolbarSearch(_ref) {
  var _cx;

  var className = _ref.className,
      searchContainerClass = _ref.searchContainerClass,
      onChangeProp = _ref.onChange,
      t = _ref.translateWithId,
      placeHolderText = _ref.placeHolderText,
      labelText = _ref.labelText,
      expandedProp = _ref.expanded,
      defaultExpanded = _ref.defaultExpanded,
      onExpand = _ref.onExpand,
      persistent = _ref.persistent,
      persistant = _ref.persistant,
      id = _ref.id,
      rest = _objectWithoutProperties(_ref, ["className", "searchContainerClass", "onChange", "translateWithId", "placeHolderText", "labelText", "expanded", "defaultExpanded", "onExpand", "persistent", "persistant", "id"]);

  var _useRef = (0, _react.useRef)(expandedProp !== undefined),
      controlled = _useRef.current;

  var _useState = (0, _react.useState)(defaultExpanded),
      _useState2 = _slicedToArray(_useState, 2),
      expandedState = _useState2[0],
      setExpandedState = _useState2[1];

  var expanded = controlled ? expandedProp : expandedState;
  var searchRef = (0, _react.useRef)(null);

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var uniqueId = (0, _react.useMemo)(getInstanceId, []);
  (0, _react.useEffect)(function () {
    if (!controlled && expandedState && searchRef.current) {
      searchRef.current.querySelector('input').focus();
    }
  }, [controlled, expandedState]);
  var searchContainerClasses = (0, _classnames.default)((_cx = {}, _defineProperty(_cx, searchContainerClass, searchContainerClass), _defineProperty(_cx, "".concat(prefix, "--toolbar-action"), true), _defineProperty(_cx, "".concat(prefix, "--toolbar-search-container-active"), expanded), _defineProperty(_cx, "".concat(prefix, "--toolbar-search-container-expandable"), !persistent || !persistent && !persistant), _defineProperty(_cx, "".concat(prefix, "--toolbar-search-container-persistent"), persistent || persistant), _cx));

  var handleExpand = function handleExpand(event) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !expanded;

    if (!controlled && (!persistent || !persistent && !persistant)) {
      setExpandedState(value);
    }

    if (onExpand) {
      onExpand(event, value);
    }
  };

  var onChange = function onChange(e) {
    setValue(e.target.value);

    if (onChangeProp) {
      onChangeProp(e);
    }
  };

  return _react.default.createElement("div", {
    tabIndex: expandedState ? '-1' : '0',
    role: "searchbox",
    ref: searchRef,
    onClick: function onClick(event) {
      return handleExpand(event, true);
    },
    onFocus: function onFocus(event) {
      return handleExpand(event, true);
    },
    onBlur: function onBlur(event) {
      return !value && handleExpand(event, false);
    },
    className: searchContainerClasses
  }, _react.default.createElement(_Search.default, _extends({}, rest, {
    small: true,
    className: className,
    value: value,
    id: typeof id !== 'undefined' ? id : uniqueId.toString(),
    "aria-hidden": !expanded,
    labelText: labelText || t('carbon.table.toolbar.search.label'),
    placeHolderText: placeHolderText || t('carbon.table.toolbar.search.placeholder'),
    onChange: onChange
  })));
};

TableToolbarSearch.propTypes = {
  children: _propTypes.default.node,

  /**
   * Provide an optional class name for the search container
   */
  className: _propTypes.default.string,

  /**
   * Provide an optional id for the search container
   */
  id: _propTypes.default.string,

  /**
   * Provide an optional className for the overal container of the Search
   */
  searchContainerClasses: _propTypes.default.string,

  /**
   * Provide an optional hook that is called each time the input is updated
   */
  onChange: _propTypes.default.func,

  /**
   * Provide an optional placeholder text for the Search component
   */
  placeHolderText: _propTypes.default.string,

  /**
   * Provide an optional label text for the Search component icon
   */
  labelText: _propTypes.default.string,

  /**
   * Provide custom text for the component for each translation id
   */
  translateWithId: _propTypes.default.func.isRequired,

  /**
   * Whether the search should be allowed to expand
   */
  persistent: _propTypes.default.bool,
  persistant: (0, _deprecate.default)(_propTypes.default.bool, "\nThe prop `persistant` for TableToolbarSearch has been deprecated in favor of `persistent`. Please use `persistent` instead.")
};
TableToolbarSearch.defaultProps = {
  translateWithId: translateWithId,
  persistent: false
};
var _default = TableToolbarSearch;
exports.default = _default;