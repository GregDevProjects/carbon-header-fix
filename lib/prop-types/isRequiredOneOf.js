"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isRequiredOneOf;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * @param {object<string, Function>} propTypes The list of type checkers, keyed by prop names.
 * @returns {object<string, Function>}
 *   The new prop type checkers that checks if one of the given props exist,
 *   in addition to the original type checkings.
 */
function isRequiredOneOf(propTypes) {
  var names = Object.keys(propTypes);

  var checker = function checker(propType) {
    return function (props, propName, componentName) {
      if (process.env.NODE_ENV !== "production" && names.every(function (name) {
        return typeof props[name] === 'undefined';
      })) {
        return new Error("".concat(componentName, " requires one of the following props: ").concat(names.join(', ')));
      }

      for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        rest[_key - 3] = arguments[_key];
      }

      return propType.apply(void 0, [props, propName, componentName].concat(rest));
    };
  };

  return names.reduce(function (o, name) {
    return _objectSpread({}, o, _defineProperty({}, name, checker(propTypes[name])));
  }, {});
}