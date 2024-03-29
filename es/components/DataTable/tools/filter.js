/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { getCellId } from './cells';
/**
 * Default implemention of how we filter rows internally. The idea behind this
 * implementation is to use the given list of row ids and headers to get the
 * individual cell values for a row. Then, we go through each cell value and see
 * if any of them includes the given inputValue.
 *
 * @param {object} config
 * @param {Array<string>} config.rowIds array of all the row ids in the table
 * @param {Array<object>} config.headers
 * @param {object} config.cellsById object containing a map of cell id to cell
 * @param {string} config.inputValue the current input value in the Table Search
 * @returns {Array<string>} rowIds
 */

export var defaultFilterRows = function defaultFilterRows(_ref) {
  var rowIds = _ref.rowIds,
      headers = _ref.headers,
      cellsById = _ref.cellsById,
      inputValue = _ref.inputValue;
  return rowIds.filter(function (rowId) {
    return headers.some(function (_ref2) {
      var key = _ref2.key;
      var id = getCellId(rowId, key);
      if (typeof cellsById[id].value === 'boolean') return false;
      return ('' + cellsById[id].value).toLowerCase().includes(inputValue.toLowerCase());
    });
  });
};