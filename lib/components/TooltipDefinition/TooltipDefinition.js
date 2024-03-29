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

var TooltipDefinition = function TooltipDefinition(_ref) {
  var _cx;

  var id = _ref.id,
      className = _ref.className,
      triggerClassName = _ref.triggerClassName,
      children = _ref.children,
      direction = _ref.direction,
      align = _ref.align,
      tooltipText = _ref.tooltipText,
      rest = _objectWithoutProperties(_ref, ["id", "className", "triggerClassName", "children", "direction", "align", "tooltipText"]);

  var tooltipId = id || "definition-tooltip-".concat(getInstanceId());
  var tooltipClassName = (0, _classnames.default)("".concat(prefix, "--tooltip--definition"), "".concat(prefix, "--tooltip--a11y"), className);
  var tooltipTriggerClasses = (0, _classnames.default)("".concat(prefix, "--tooltip__trigger"), "".concat(prefix, "--tooltip--a11y"), "".concat(prefix, "--tooltip__trigger--definition"), triggerClassName, (_cx = {}, _defineProperty(_cx, "".concat(prefix, "--tooltip--").concat(direction), direction), _defineProperty(_cx, "".concat(prefix, "--tooltip--align-").concat(align), align), _cx));
  return _react.default.createElement("div", _extends({}, rest, {
    className: tooltipClassName
  }), _react.default.createElement("button", {
    className: tooltipTriggerClasses,
    "aria-describedby": tooltipId
  }, children), _react.default.createElement("div", {
    className: "".concat(prefix, "--assistive-text"),
    id: tooltipId,
    role: "tooltip"
  }, tooltipText));
};

TooltipDefinition.propTypes = {
  /**
   * Specify the tooltip trigger text that is rendered to the UI for the user to
   * interact with in order to display the tooltip.
   */
  children: _propTypes.default.string.isRequired,

  /**
   * The CSS class name of the trigger element
   */
  triggerClassName: _propTypes.default.string,

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
   * Provide the text that will be displayed in the tooltip when it is rendered.
   * TODO: rename this prop (will be a breaking change)
   */
  tooltipText: _propTypes.default.node.isRequired
};
TooltipDefinition.defaultProps = {
  direction: 'bottom',
  align: 'start'
};
var _default = TooltipDefinition;
exports.default = _default;