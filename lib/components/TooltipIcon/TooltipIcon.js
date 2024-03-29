"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _carbonComponents = require("carbon-components");

var _setupGetInstanceId = _interopRequireDefault(require("../../tools/setupGetInstanceId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var prefix = _carbonComponents.settings.prefix;
var getInstanceId = (0, _setupGetInstanceId.default)();

var TooltipIcon = function TooltipIcon(_ref) {
  var _cx;

  var id = _ref.id,
      className = _ref.className,
      children = _ref.children,
      direction = _ref.direction,
      align = _ref.align,
      tooltipText = _ref.tooltipText,
      rest = _objectWithoutProperties(_ref, ["id", "className", "children", "direction", "align", "tooltipText"]);

  var tooltipId = id || "icon-tooltip-".concat(getInstanceId());
  var tooltipTriggerClasses = (0, _classnames.default)("".concat(prefix, "--tooltip__trigger"), "".concat(prefix, "--tooltip--a11y"), className, (_cx = {}, _defineProperty(_cx, "".concat(prefix, "--tooltip--").concat(direction), direction), _defineProperty(_cx, "".concat(prefix, "--tooltip--align-").concat(align), align), _cx));
  return _react.default.createElement("button", _extends({}, rest, {
    className: tooltipTriggerClasses,
    "aria-describedby": tooltipId
  }), _react.default.createElement("span", {
    className: "".concat(prefix, "--assistive-text"),
    id: tooltipId
  }, tooltipText), children);
};

TooltipIcon.propTypes = {
  /**
   * Specify an icon as children that will be used as the tooltip trigger. This
   * can be an icon from our Icon component, or a custom SVG element.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Specify the direction of the tooltip. Can be either top or bottom.
   */
  direction: _propTypes.default.oneOf(['top', 'bottom']),

  /**
   * Specify the alignment (to the trigger button) of the tooltip.
   * Can be one of: start, center, or end.
   */
  align: _propTypes.default.oneOf(['start', 'center', 'end']),

  /**
   * Optionally specify a custom id for the tooltip. If one is not provided, we
   * generate a unique id for you.
   */
  id: _propTypes.default.string,

  /**
   * Provide the ARIA label for the tooltip.
   * TODO: rename this prop (will be a breaking change)
   */
  tooltipText: _propTypes.default.string.isRequired
};
TooltipIcon.defaultProps = {
  direction: 'bottom',
  align: 'center'
};
var _default = TooltipIcon;
exports.default = _default;