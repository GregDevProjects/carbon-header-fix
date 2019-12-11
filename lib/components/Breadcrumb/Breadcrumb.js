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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = _carbonComponents.settings.prefix;

var Breadcrumb = function Breadcrumb(_ref) {
  var _cx;

  var ariaLabel = _ref['aria-label'],
      children = _ref.children,
      customClassNameNav = _ref.className,
      noTrailingSlash = _ref.noTrailingSlash;
  var className = (0, _classnames.default)((_cx = {}, _defineProperty(_cx, "".concat(prefix, "--breadcrumb"), true), _defineProperty(_cx, "".concat(prefix, "--breadcrumb--no-trailing-slash"), noTrailingSlash), _cx));
  return _react.default.createElement("nav", {
    className: customClassNameNav,
    "aria-label": ariaLabel ? ariaLabel : 'Breadcrumb'
  }, _react.default.createElement("ol", {
    className: className
  }, children));
};

Breadcrumb.propTypes = {
  /**
   * Specify the label for the breadcrumb container
   */
  'aria-label': _propTypes.default.string,

  /**
   * Pass in the BreadcrumbItem's for your Breadcrumb
   */
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: _propTypes.default.string,

  /**
   * Optional prop to omit the trailing slash for the breadcrumbs
   */
  noTrailingSlash: _propTypes.default.bool
};
var _default = Breadcrumb;
exports.default = _default;