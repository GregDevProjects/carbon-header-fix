"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

var _TabContent = _interopRequireDefault(require("../TabContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = _carbonComponents.settings.prefix;

var Tab =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tab, _React$Component);

  function Tab() {
    _classCallCheck(this, Tab);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tab).apply(this, arguments));
  }

  _createClass(Tab, [{
    key: "setTabFocus",
    value: function setTabFocus(evt) {
      var leftKey = 37;
      var rightKey = 39;

      if (evt.which === leftKey) {
        this.props.handleTabAnchorFocus(this.props.index - 1);
      } else if (evt.which === rightKey) {
        this.props.handleTabAnchorFocus(this.props.index + 1);
      } else {
        return;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _this = this,
          _anchorProps;

      var _this$props = this.props,
          className = _this$props.className,
          handleTabClick = _this$props.handleTabClick,
          handleTabAnchorFocus = _this$props.handleTabAnchorFocus,
          handleTabKeyDown = _this$props.handleTabKeyDown,
          disabled = _this$props.disabled,
          href = _this$props.href,
          index = _this$props.index,
          label = _this$props.label,
          selected = _this$props.selected,
          tabIndex = _this$props.tabIndex,
          _onClick = _this$props.onClick,
          _onKeyDown = _this$props.onKeyDown,
          renderAnchor = _this$props.renderAnchor,
          renderContent = _this$props.renderContent,
          other = _objectWithoutProperties(_this$props, ["className", "handleTabClick", "handleTabAnchorFocus", "handleTabKeyDown", "disabled", "href", "index", "label", "selected", "tabIndex", "onClick", "onKeyDown", "renderAnchor", "renderContent"]);

      var classes = (0, _classnames.default)(className, "".concat(prefix, "--tabs__nav-item"), (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--tabs__nav-item--disabled"), disabled), _defineProperty(_classNames, "".concat(prefix, "--tabs__nav-item--selected"), selected), _classNames));
      var anchorProps = (_anchorProps = {
        className: "".concat(prefix, "--tabs__nav-link"),
        href: href,
        role: 'tab',
        tabIndex: !disabled ? tabIndex : -1
      }, _defineProperty(_anchorProps, 'aria-selected', selected), _defineProperty(_anchorProps, "ref", function ref(e) {
        _this.tabAnchor = e;
      }), _anchorProps);
      return _react.default.createElement("li", _extends({}, other, {
        tabIndex: -1,
        className: classes,
        onClick: function onClick(evt) {
          if (disabled) {
            return;
          }

          handleTabClick(index, evt);

          _onClick(evt);
        },
        onKeyDown: function onKeyDown(evt) {
          if (disabled) {
            return;
          }

          _this.setTabFocus(evt);

          handleTabKeyDown(index, evt);

          _onKeyDown(evt);
        },
        role: "presentation",
        selected: selected
      }), renderAnchor ? renderAnchor(anchorProps) : _react.default.createElement("a", anchorProps, label));
    }
  }]);

  return Tab;
}(_react.default.Component);

exports.default = Tab;

_defineProperty(Tab, "propTypes", {
  /**
   * Specify an optional className to be added to your Tab
   */
  className: _propTypes.default.string,

  /**
   * A handler that is invoked when a user clicks on the control.
   * Reserved for usage in Tabs
   */
  handleTabClick: _propTypes.default.func,

  /**
   * A handler that is invoked when a user presses left/right key.
   * Reserved for usage in Tabs
   */
  handleTabAnchorFocus: _propTypes.default.func,

  /**
   * A handler that is invoked on the key down event for the control.
   * Reserved for usage in Tabs
   */
  handleTabKeyDown: _propTypes.default.func,

  /**
   * Whether your Tab is disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * Provide a string that represents the `href` of the Tab
   */
  href: _propTypes.default.string.isRequired,

  /**
   * The index of your Tab in your Tabs. Reserved for usage in Tabs
   */
  index: _propTypes.default.number,

  /**
   * Provide the contents of your Tab
   */
  label: _propTypes.default.node,

  /**
   * Provide an accessibility role for your Tab
   */
  role: _propTypes.default.string.isRequired,

  /**
   * Provide a handler that is invoked when a user clicks on the control
   */
  onClick: _propTypes.default.func.isRequired,

  /**
   * Provide a handler that is invoked on the key down event for the control
   */
  onKeyDown: _propTypes.default.func.isRequired,

  /**
   * Whether your Tab is selected.
   * Reserved for usage in Tabs
   */
  selected: _propTypes.default.bool.isRequired,

  /**
   * Specify the tab index of the <a> node
   */
  tabIndex: _propTypes.default.number.isRequired,

  /*
   * An optional parameter to allow overriding the anchor rendering.
   * Useful for using Tab along with react-router or other client
   * side router libraries.
   **/
  renderAnchor: _propTypes.default.func,

  /*
   * An optional parameter to allow overriding the content rendering.
   **/
  renderContent: _propTypes.default.func
});

_defineProperty(Tab, "defaultProps", {
  role: 'presentation',
  label: 'provide a label',
  tabIndex: 0,
  href: '#',
  selected: false,
  renderContent: _TabContent.default,
  onClick: function onClick() {},
  onKeyDown: function onKeyDown() {}
});