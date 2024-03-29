function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useMemo, useRef, useState, useEffect } from 'react';
import { settings } from 'carbon-components';
import Search from '../Search';
import setupGetInstanceId from './tools/instanceId';
import deprecate from '../../prop-types/deprecate';
var prefix = settings.prefix;
var getInstanceId = setupGetInstanceId();
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

  var _useRef = useRef(expandedProp !== undefined),
      controlled = _useRef.current;

  var _useState = useState(defaultExpanded),
      _useState2 = _slicedToArray(_useState, 2),
      expandedState = _useState2[0],
      setExpandedState = _useState2[1];

  var expanded = controlled ? expandedProp : expandedState;
  var searchRef = useRef(null);

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var uniqueId = useMemo(getInstanceId, []);
  useEffect(function () {
    if (!controlled && expandedState && searchRef.current) {
      searchRef.current.querySelector('input').focus();
    }
  }, [controlled, expandedState]);
  var searchContainerClasses = cx((_cx = {}, _defineProperty(_cx, searchContainerClass, searchContainerClass), _defineProperty(_cx, "".concat(prefix, "--toolbar-action"), true), _defineProperty(_cx, "".concat(prefix, "--toolbar-search-container-active"), expanded), _defineProperty(_cx, "".concat(prefix, "--toolbar-search-container-expandable"), !persistent || !persistent && !persistant), _defineProperty(_cx, "".concat(prefix, "--toolbar-search-container-persistent"), persistent || persistant), _cx));

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

  return React.createElement("div", {
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
  }, React.createElement(Search, _extends({}, rest, {
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
  children: PropTypes.node,

  /**
   * Provide an optional class name for the search container
   */
  className: PropTypes.string,

  /**
   * Provide an optional id for the search container
   */
  id: PropTypes.string,

  /**
   * Provide an optional className for the overal container of the Search
   */
  searchContainerClasses: PropTypes.string,

  /**
   * Provide an optional hook that is called each time the input is updated
   */
  onChange: PropTypes.func,

  /**
   * Provide an optional placeholder text for the Search component
   */
  placeHolderText: PropTypes.string,

  /**
   * Provide an optional label text for the Search component icon
   */
  labelText: PropTypes.string,

  /**
   * Provide custom text for the component for each translation id
   */
  translateWithId: PropTypes.func.isRequired,

  /**
   * Whether the search should be allowed to expand
   */
  persistent: PropTypes.bool,
  persistant: deprecate(PropTypes.bool, "\nThe prop `persistant` for TableToolbarSearch has been deprecated in favor of `persistent`. Please use `persistent` instead.")
};
TableToolbarSearch.defaultProps = {
  translateWithId: translateWithId,
  persistent: false
};
export default TableToolbarSearch;