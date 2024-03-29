"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _iconsReact = require("@carbon/icons-react");

var _carbonComponents = require("carbon-components");

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _keyboard = require("../../internal/keyboard");

var _AriaPropTypes = require("../../prop-types/AriaPropTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var defaultRenderMenuContent = function defaultRenderMenuContent() {
  return _react.default.createElement(_iconsReact.ChevronDownGlyph, {
    className: "".concat(prefix, "--header__menu-arrow")
  });
};
/**
 * `HeaderMenu` is used to render submenu's in the `Header`. Most often children
 * will be a `HeaderMenuItem`. It handles certain keyboard events to help
 * with managing focus. It also passes along refs to each child so that it can
 * help manage focus state of its children.
 */


var HeaderMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HeaderMenu, _React$Component);

  function HeaderMenu(props) {
    var _this;

    _classCallCheck(this, HeaderMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HeaderMenu).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleOnClick", function (e) {
      e.preventDefault();

      _this.setState(function (prevState) {
        return {
          expanded: !prevState.expanded
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnKeyDown", function (event) {
      // Handle enter or space key for toggling the expanded state of the menu.
      if ((0, _keyboard.matches)(event, [_keyboard.keys.Enter, _keyboard.keys.Space])) {
        event.stopPropagation();
        event.preventDefault();

        _this.setState(function (prevState) {
          return {
            expanded: !prevState.expanded
          };
        });

        return;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnBlur", function (event) {
      // Rough guess for a blur event that is triggered outside of our menu or
      // menubar context
      console.log(event)
      if (!event.relatedTarget) {
        _this.setState({
          expanded: false,
          selectedIndex: null
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMenuButtonRef", function (node) {
      if (_this.props.focusRef) {
        _this.props.focusRef(node);
      }

      _this.menuButtonRef = node;
    });

    _defineProperty(_assertThisInitialized(_this), "handleItemRef", function (index) {
      return function (node) {
        _this.items[index] = node;
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleMenuClose", function (event) {
      // Handle ESC keydown for closing the expanded menu.
      if ((0, _keyboard.matches)(event, [_keyboard.keys.Escape]) && _this.state.expanded) {
        event.stopPropagation();
        event.preventDefault();

        _this.setState(function () {
          return {
            expanded: false,
            selectedIndex: null
          };
        }); // Return focus to menu button when the user hits ESC.


        _this.menuButtonRef.focus();

        return;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_renderMenuItem", function (item, index) {
      return _react.default.cloneElement(item, {
        ref: _this.handleItemRef(index),
        role: 'none'
      });
    });

    _this.state = {
      // Used to manage the expansion state of the menu
      expanded: false,
      // Refers to the menuitem that is currently focused
      // Note: children should have `role="menuitem"` on node consuming ref
      selectedIndex: null
    };
    _this.items = [];
    return _this;
  }
  /**
   * Toggle the expanded state of the menu on click.
   */


  _createClass(HeaderMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ariaLabel = _this$props['aria-label'],
          ariaLabelledBy = _this$props['aria-labelledby'],
          customClassName = _this$props.className,
          children = _this$props.children,
          MenuContent = _this$props.renderMenuContent,
          menuLinkName = _this$props.menuLinkName;
      var accessibilityLabel = {
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledBy
      };
      var className = (0, _classnames.default)("".concat(prefix, "--header__submenu"), customClassName); // Notes on eslint comments and based on the examples in:
      // https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-1/menubar-1.html#
      // - The focus is handled by the <a> menuitem, onMouseOver is for mouse
      // users
      // - aria-haspopup can definitely have the value "menu"
      // - aria-expanded is on their example node with role="menuitem"
      // - href can be set to javascript:void(0), ideally this will be a button

      return _react.default.createElement("li", {
        // eslint-disable-line jsx-a11y/mouse-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
        className: className,
        onKeyDown: this.handleMenuClose,
        onClick: this.handleOnClick,
        onBlur: this.handleOnBlur
      }, _react.default.createElement("a", _extends({
        // eslint-disable-line jsx-a11y/role-supports-aria-props,jsx-a11y/anchor-is-valid
        "aria-haspopup": "menu" // eslint-disable-line jsx-a11y/aria-proptypes
        ,
        "aria-expanded": this.state.expanded,
        className: "".concat(prefix, "--header__menu-item ").concat(prefix, "--header__menu-title"),
        href: "#",
        onKeyDown: this.handleOnKeyDown,
        ref: this.handleMenuButtonRef,
        role: "menuitem",
        tabIndex: 0
      }, accessibilityLabel), menuLinkName, _react.default.createElement(MenuContent, null)), _react.default.createElement("ul", _extends({}, accessibilityLabel, {
        className: "".concat(prefix, "--header__menu"),
        role: "menu"
      }), _react.default.Children.map(children, this._renderMenuItem)));
    }
    /**
     * Render an individual menuitem, passing along `role: 'none'` because the
     * host node <li> doesn't apply when in a <ul> with `role="menu"` and so we
     * need to revert the semantics.
     *
     * We also capture the `ref` for each child inside of `this.items` to properly
     * manage focus. In addition to this focus management, all items receive a
     * `tabIndex: -1` so the user won't hit a large number of items in their tab
     * sequence when they might not want to go through all the items.
     */

  }]);

  return HeaderMenu;
}(_react.default.Component);

_defineProperty(HeaderMenu, "propTypes", _objectSpread({}, _AriaPropTypes.AriaLabelPropType, {
  /**
   * Provide a custom ref handler for the menu button
   */
  focusRef: _propTypes.default.func,

  /**
   * Optionally provide a tabIndex for the underlying menu button
   */
  tabIndex: _propTypes.default.number,

  /**
   * Provide a label for the link text
   */
  menuLinkName: _propTypes.default.string.isRequired,

  /**
   * Optional component to render instead of string
   */
  renderMenuContent: _propTypes.default.func
}));

_defineProperty(HeaderMenu, "defaultProps", {
  renderMenuContent: defaultRenderMenuContent
});

var _default = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(HeaderMenu, _extends({}, props, {
    focusRef: ref
  }));
});

exports.default = _default;