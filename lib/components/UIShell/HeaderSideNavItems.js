"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _carbonComponents = require("carbon-components");

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = _carbonComponents.settings.prefix;

var HeaderSideNavItems = function HeaderSideNavItems(_ref) {
  var _cx;

  var customClassName = _ref.className,
      children = _ref.children,
      hasDivider = _ref.hasDivider;
  var className = (0, _classnames.default)((_cx = {}, _defineProperty(_cx, "".concat(prefix, "--side-nav__header-navigation"), true), _defineProperty(_cx, "".concat(prefix, "--side-nav__header-divider"), hasDivider), _defineProperty(_cx, "customClassName", customClassName), _cx));
  return _react.default.createElement("div", {
    className: className
  }, children);
};

HeaderSideNavItems.propTypes = {
  /**
   * Optionally provide a custom class name that is applied to the underlying
   * button
   */
  className: _propTypes.default.string,

  /**
   * Optionally specify if container will have a bottom divider to differentiate
   * between original sidenav items and header menu items. False by default.
   */
  hasDivider: _propTypes.default.bool
};
HeaderSideNavItems.defaultProps = {
  hasDivider: false
};
var _default = HeaderSideNavItems;
exports.default = _default;