var _sortDirections;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { settings } from 'carbon-components';
import { ArrowUp20 as Arrow, ArrowsVertical20 as Arrows } from '@carbon/icons-react';
import { sortStates } from './state/sorting';
var prefix = settings.prefix;
var translationKeys = {
  iconDescription: 'carbon.table.header.icon.description'
};

var translateWithId = function translateWithId(key, _ref) {
  var sortDirection = _ref.sortDirection,
      isSortHeader = _ref.isSortHeader,
      sortStates = _ref.sortStates;

  if (key === translationKeys.iconDescription) {
    if (isSortHeader) {
      // When transitioning, we know that the sequence of states is as follows:
      // NONE -> ASC -> DESC -> NONE
      if (sortDirection === sortStates.NONE) {
        return 'Sort rows by this header in ascending order';
      }

      if (sortDirection === sortStates.ASC) {
        return 'Sort rows by this header in descending order';
      }

      return 'Unsort rows by this header';
    }

    return 'Sort rows by this header in ascending order';
  }

  return '';
};

var sortDirections = (_sortDirections = {}, _defineProperty(_sortDirections, sortStates.NONE, 'none'), _defineProperty(_sortDirections, sortStates.ASC, 'ascending'), _defineProperty(_sortDirections, sortStates.DESC, 'descending'), _sortDirections);

var TableHeader = function TableHeader(_ref2) {
  var _cx;

  var headerClassName = _ref2.className,
      children = _ref2.children,
      isSortable = _ref2.isSortable,
      isSortHeader = _ref2.isSortHeader,
      onClick = _ref2.onClick,
      scope = _ref2.scope,
      sortDirection = _ref2.sortDirection,
      t = _ref2.translateWithId,
      rest = _objectWithoutProperties(_ref2, ["className", "children", "isSortable", "isSortHeader", "onClick", "scope", "sortDirection", "translateWithId"]);

  if (!isSortable) {
    return React.createElement("th", _extends({}, rest, {
      className: headerClassName,
      scope: scope
    }), React.createElement("span", {
      className: "".concat(prefix, "--table-header-label")
    }, children));
  }

  var className = cx(headerClassName, (_cx = {}, _defineProperty(_cx, "".concat(prefix, "--table-sort"), true), _defineProperty(_cx, "".concat(prefix, "--table-sort--active"), isSortHeader && sortDirection !== sortStates.NONE), _defineProperty(_cx, "".concat(prefix, "--table-sort--ascending"), isSortHeader && sortDirection === sortStates.DESC), _cx));
  var ariaSort = !isSortHeader ? 'none' : sortDirections[sortDirection];
  return React.createElement("th", {
    scope: scope,
    className: headerClassName,
    "aria-sort": ariaSort
  }, React.createElement("button", _extends({
    className: className,
    onClick: onClick
  }, rest), React.createElement("span", {
    className: "".concat(prefix, "--table-header-label")
  }, children), React.createElement(Arrow, {
    className: "".concat(prefix, "--table-sort__icon"),
    "aria-label": t('carbon.table.header.icon.description', {
      header: children,
      sortDirection: sortDirection,
      isSortHeader: isSortHeader,
      sortStates: sortStates
    })
  }), React.createElement(Arrows, {
    className: "".concat(prefix, "--table-sort__icon-unsorted"),
    "aria-label": t('carbon.table.header.icon.description', {
      header: children,
      sortDirection: sortDirection,
      isSortHeader: isSortHeader,
      sortStates: sortStates
    })
  })));
};

TableHeader.propTypes = {
  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * Pass in children that will be embedded in the table header label
   */
  children: PropTypes.node,

  /**
   * Specify whether this header is one through which a user can sort the table
   */
  isSortable: PropTypes.bool,

  /**
   * Specify whether this header is the header by which a table is being sorted
   * by
   */
  isSortHeader: PropTypes.bool,

  /**
   * Hook that is invoked when the header is clicked
   */
  onClick: PropTypes.func,

  /**
   * Specify the scope of this table header. You can find more info about this
   * attribute at the following URL:
   * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-scope
   */
  scope: PropTypes.string.isRequired,

  /**
   * Specify which direction we are currently sorting by, should be one of DESC,
   * NONE, or ASC.
   */
  sortDirection: PropTypes.oneOf(Object.values(sortStates)),

  /**
   * Supply a method to translate internal strings with your i18n tool of
   * choice. Translation keys are avabile on the `translationKeys` field for
   * this component.
   */
  translateWithId: PropTypes.func
};
TableHeader.defaultProps = {
  isSortable: false,
  scope: 'col',
  translateWithId: translateWithId
};
TableHeader.translationKeys = Object.values(translationKeys);
export default TableHeader;