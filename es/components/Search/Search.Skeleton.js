function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { settings } from 'carbon-components';
var prefix = settings.prefix;

var SearchSkeleton = function SearchSkeleton(_ref) {
  var _classNames;

  var small = _ref.small;
  var searchClasses = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--skeleton"), true), _defineProperty(_classNames, "".concat(prefix, "--search--xl"), !small), _defineProperty(_classNames, "".concat(prefix, "--search--sm"), small), _classNames));
  return React.createElement("div", {
    className: searchClasses
  }, React.createElement("span", {
    className: "".concat(prefix, "--label")
  }), React.createElement("div", {
    className: "".concat(prefix, "--search-input")
  }));
};

SearchSkeleton.propTypes = {
  /**
   * Specify whether the Search should be a small variant
   */
  small: PropTypes.bool
};
SearchSkeleton.defaultProps = {
  small: false
};
export default SearchSkeleton;