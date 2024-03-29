"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SideNavMenu = void 0;

var _iconsReact = require("@carbon/icons-react");

var _carbonComponents = require("carbon-components");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _SideNavIcon = _interopRequireDefault(require("./SideNavIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var prefix = _carbonComponents.settings.prefix;

var SideNavMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideNavMenu, _React$Component);

  function SideNavMenu(props) {
    var _this;

    _classCallCheck(this, SideNavMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideNavMenu).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleToggleExpand", function () {
      _this.setState(function (state) {
        return {
          isExpanded: !state.isExpanded
        };
      });
    });

    _this.state = {
      isExpanded: props.defaultExpanded || false,
      wasPreviouslyExpanded: props.defaultExpanded || false
    };
    return _this;
  }

  _createClass(SideNavMenu, [{
    key: "render",
    value: function render() {
      var _cx;

      var _this$props = this.props,
          buttonRef = _this$props.buttonRef,
          customClassName = _this$props.className,
          children = _this$props.children,
          IconElement = _this$props.renderIcon,
          isActive = _this$props.isActive,
          title = _this$props.title,
          large = _this$props.large;
      var isExpanded = this.state.isExpanded;
      var hasActiveChild;

      if (children) {
        // if we have children, either a single or multiple, find if it is active
        hasActiveChild = Array.isArray(children) ? children.some(function (child) {
          if (child.props && (child.props.isActive === true || child.props['aria-current'])) {
            return true;
          }

          return false;
        }) : children.props && (children.props.isActive === true || children.props['aria-current']);
      }

      var className = (0, _classnames.default)((_cx = {}, _defineProperty(_cx, "".concat(prefix, "--side-nav__item"), true), _defineProperty(_cx, "".concat(prefix, "--side-nav__item--active"), isActive || hasActiveChild && !isExpanded), _defineProperty(_cx, "".concat(prefix, "--side-nav__item--icon"), IconElement), _defineProperty(_cx, "".concat(prefix, "--side-nav__item--large"), large), _defineProperty(_cx, customClassName, !!customClassName), _cx));
      return _react.default.createElement("li", {
        className: className
      }, _react.default.createElement("button", {
        "aria-haspopup": "true",
        "aria-expanded": isExpanded,
        className: "".concat(prefix, "--side-nav__submenu"),
        onClick: this.handleToggleExpand,
        ref: buttonRef,
        type: "button"
      }, IconElement && _react.default.createElement(_SideNavIcon.default, null, _react.default.createElement(IconElement, null)), _react.default.createElement("span", {
        className: "".concat(prefix, "--side-nav__submenu-title")
      }, title), _react.default.createElement(_SideNavIcon.default, {
        className: "".concat(prefix, "--side-nav__submenu-chevron"),
        small: true
      }, _react.default.createElement(_iconsReact.ChevronDown20, null))), _react.default.createElement("ul", {
        className: "".concat(prefix, "--side-nav__menu"),
        role: "menu"
      }, children));
    }
  }]);

  return SideNavMenu;
}(_react.default.Component);

exports.SideNavMenu = SideNavMenu;

_defineProperty(SideNavMenu, "propTypes", {
  /**
   * Provide an optional class to be applied to the containing node
   */
  className: _propTypes.default.string,

  /**
   * Provide <SideNavMenuItem>'s inside of the `SideNavMenu`
   */
  children: _propTypes.default.node,

  /**
   * Pass in a custom icon to render next to the `SideNavMenu` title
   */
  renderIcon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * Specify whether the `SideNavMenu` is "active". `SideNavMenu` should be
   * considered active if one of its menu items are a link for the current
   * page.
   */
  isActive: _propTypes.default.bool,

  /**
   * Provide the text for the overall menu name
   */
  title: _propTypes.default.string.isRequired,

  /**
   * Specify whether the menu should default to expanded. By default, it will
   * be closed.
   */
  defaultExpanded: _propTypes.default.bool,

  /**
   * Property to indicate if the side nav container is open (or not). Use to
   * keep local state and styling in step with the SideNav expansion state.
   */
  isSideNavExpanded: _propTypes.default.bool,

  /**
   * Specify if this is a large variation of the SideNavMenu
   */
  large: _propTypes.default.bool
});

_defineProperty(SideNavMenu, "defaultProps", {
  defaultExpanded: false,
  isActive: false,
  large: false
});

_defineProperty(SideNavMenu, "getDerivedStateFromProps", function (props, state) {
  var derivedState = null;

  if (props.isSideNavExpanded === false && state.isExpanded === true) {
    derivedState = {
      isExpanded: props.isSideNavExpanded,
      wasPreviouslyExpanded: true
    };
  } else if (props.isSideNavExpanded === true && state.wasPreviouslyExpanded === true) {
    derivedState = {
      isExpanded: props.isSideNavExpanded,
      wasPreviouslyExpanded: false
    };
  }

  return derivedState;
});

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(SideNavMenu, _extends({}, props, {
    buttonRef: ref
  }));
});

exports.default = _default;