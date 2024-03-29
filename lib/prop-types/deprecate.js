"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deprecate;

var _warning = _interopRequireDefault(require("warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var didWarnAboutDeprecation = {};

function deprecate(propType, message) {
  function checker(props, propName, componentName) {
    if (props[propName] === undefined) {
      return;
    }

    if (!didWarnAboutDeprecation[componentName] || !didWarnAboutDeprecation[componentName][propName]) {
      didWarnAboutDeprecation[componentName] = _objectSpread({}, didWarnAboutDeprecation[componentName], _defineProperty({}, propName, true));
      process.env.NODE_ENV !== "production" ? (0, _warning.default)(false, message || "The prop `".concat(propName, "` has been deprecated for the ") + "".concat(componentName, " component. It will be removed in the next major ") + "release") : void 0;
    }

    for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
      rest[_key - 3] = arguments[_key];
    }

    return propType.apply(void 0, [props, propName, componentName].concat(rest));
  }

  return checker;
}