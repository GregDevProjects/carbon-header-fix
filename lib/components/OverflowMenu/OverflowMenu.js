"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getMenuOffset = void 0;

var _invariant = _interopRequireDefault(require("invariant"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

var _ClickListener = _interopRequireDefault(require("../../internal/ClickListener"));

var _FloatingMenu = _interopRequireWildcard(require("../../internal/FloatingMenu"));

var _OptimizedResize = _interopRequireDefault(require("../../internal/OptimizedResize"));

var _iconsReact = require("@carbon/icons-react");

var _keyboard = require("../../internal/keyboard");

var _mergeRefs = _interopRequireDefault(require("../../tools/mergeRefs"));

var _triggerButtonPositio, _triggerButtonPositio2;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var on = function on(element) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  element.addEventListener.apply(element, args);
  return {
    release: function release() {
      element.removeEventListener.apply(element, args);
      return null;
    }
  };
};
/**
 * The CSS property names of the arrow keyed by the floating menu direction.
 * @type {Object<string, string>}
 */


var triggerButtonPositionProps = (_triggerButtonPositio = {}, _defineProperty(_triggerButtonPositio, _FloatingMenu.DIRECTION_TOP, 'bottom'), _defineProperty(_triggerButtonPositio, _FloatingMenu.DIRECTION_BOTTOM, 'top'), _triggerButtonPositio);
/**
 * Determines how the position of arrow should affect the floating menu position.
 * @type {Object<string, number>}
 */

var triggerButtonPositionFactors = (_triggerButtonPositio2 = {}, _defineProperty(_triggerButtonPositio2, _FloatingMenu.DIRECTION_TOP, -2), _defineProperty(_triggerButtonPositio2, _FloatingMenu.DIRECTION_BOTTOM, -1), _triggerButtonPositio2);
/**
 * @param {Element} menuBody The menu body with the menu arrow.
 * @param {string} direction The floating menu direction.
 * @returns {FloatingMenu~offset} The adjustment of the floating menu position, upon the position of the menu arrow.
 * @private
 */

var getMenuOffset = function getMenuOffset(menuBody, direction, trigger, flip) {
  var triggerButtonPositionProp = triggerButtonPositionProps[direction];
  var triggerButtonPositionFactor = triggerButtonPositionFactors[direction];

  if (process.env.NODE_ENV !== "production") {
    !(triggerButtonPositionProp && triggerButtonPositionFactor) ? process.env.NODE_ENV !== "production" ? (0, _invariant.default)(false, '[OverflowMenu] wrong floating menu direction: `%s`', direction) : invariant(false) : void 0;
  }

  var menuWidth = menuBody.offsetWidth,
      menuHeight = menuBody.offsetHeight;

  switch (triggerButtonPositionProp) {
    case 'top':
    case 'bottom':
      {
        // TODO: Ensure `trigger` is there for `<OverflowMenu open>`
        var triggerWidth = !trigger ? 0 : trigger.offsetWidth;
        return {
          left: (!flip ? 1 : -1) * (menuWidth / 2 - triggerWidth / 2),
          top: 0
        };
      }

    case 'left':
    case 'right':
      {
        // TODO: Ensure `trigger` is there for `<OverflowMenu open>`
        var triggerHeight = !trigger ? 0 : trigger.offsetHeight;
        return {
          left: 0,
          top: (!flip ? 1 : -1) * (menuHeight / 2 - triggerHeight / 2)
        };
      }

    default:
      break;
  }
};

exports.getMenuOffset = getMenuOffset;

var OverflowMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(OverflowMenu, _Component);

  function OverflowMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OverflowMenu);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OverflowMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {});

    _defineProperty(_assertThisInitialized(_this), "_hFocusIn", null);

    _defineProperty(_assertThisInitialized(_this), "_hBlurTimeout", void 0);

    _defineProperty(_assertThisInitialized(_this), "getPrimaryFocusableElement", function () {
      if (_this.menuEl) {
        var primaryFocusPropEl = _this.menuEl.querySelector('[data-floating-menu-primary-focus]');

        if (primaryFocusPropEl) {
          return primaryFocusPropEl;
        }
      }

      var firstItem = _this.overflowMenuItem0;

      if (firstItem && firstItem.overflowMenuItem && firstItem.overflowMenuItem.current) {
        return firstItem.overflowMenuItem.current;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getMenuPosition", function () {
      if (_this.menuEl) {
        var menuPosition = _this.menuEl.getBoundingClientRect();

        _this.setState({
          menuPosition: menuPosition
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (evt) {
      if (!_this._menuBody || !_this._menuBody.contains(evt.target)) {
        _this.setState({
          open: !_this.state.open
        });

        _this.props.onClick(evt);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (evt) {
      if ((0, _keyboard.matches)(evt, [_keyboard.keys.ArrowDown])) {
        _this.setState({
          open: !_this.state.open
        });

        _this.props.onClick(evt);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (evt) {
      if (!(0, _keyboard.matches)(evt, [_keyboard.keys.Enter, _keyboard.keys.Space])) {
        evt.preventDefault();
      } // only respond to key events when the menu is closed, so that menu items still respond to key events


      if (!_this.state.open) {
        if ((0, _keyboard.matches)(evt, [_keyboard.keys.Enter, _keyboard.keys.Space])) {
          _this.setState({
            open: true
          });
        }
      } // Close the overflow menu on escape


      if ((0, _keyboard.matches)(evt, [_keyboard.keys.Escape])) {
        _this.closeMenu(); // Stop the esc keypress from bubbling out and closing something it shouldn't


        evt.stopPropagation();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (evt) {
      if (!_this._menuBody || !_this._menuBody.contains(evt.target)) {
        _this.closeMenu();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeMenu", function () {
      var wasOpen = _this.state.open;

      _this.setState({
        open: false
      }, function () {
        if (wasOpen) {
          _this.focusMenuEl();
        }

        _this.props.onClose();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "bindMenuEl", function (menuEl) {
      _this.menuEl = menuEl;
    });

    _defineProperty(_assertThisInitialized(_this), "focusMenuEl", function () {
      if (_this.menuEl) {
        _this.menuEl.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOverflowMenuItemFocus", function (index) {
      var i = function () {
        switch (index) {
          case -1:
            return _react.default.Children.count(_this.props.children) - 1;

          case _react.default.Children.count(_this.props.children):
            return 0;

          default:
            return index;
        }
      }();

      var _ref = _this["overflowMenuItem".concat(i)] || _react.default.Children.toArray(_this.props.children)[i],
          overflowMenuItem = _ref.overflowMenuItem;

      if (overflowMenuItem && overflowMenuItem.current) {
        overflowMenuItem.current.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_bindMenuBody", function (menuBody) {
      if (!menuBody) {
        _this._menuBody = menuBody;
      }

      if (!menuBody && _this._hFocusIn) {
        _this._hFocusIn = _this._hFocusIn.release();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_handlePlace", function (menuBody) {
      if (menuBody) {
        _this._menuBody = menuBody;
        (menuBody.querySelector('[data-floating-menu-primary-focus]') || menuBody).focus();
        var hasFocusin = 'onfocusin' in window;
        var focusinEventName = hasFocusin ? 'focusin' : 'focus';
        _this._hFocusIn = on(menuBody.ownerDocument, focusinEventName, function (event) {
          var target = event.target;

          if (!menuBody.contains(target) && _this.menuEl && !target.matches(".".concat(prefix, "--overflow-menu,.").concat(prefix, "--overflow-menu-options"))) {
            _this.closeMenu();
          }
        }, !hasFocusin);

        _this.props.onOpen();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_getTarget", function () {
      return _this.menuEl && _this.menuEl.closest('[data-floating-menu-container]') || document.body;
    });

    return _this;
  }

  _createClass(OverflowMenu, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this2 = this;

      if (nextState.open && !this.state.open) {
        requestAnimationFrame(function () {
          _this2.getMenuPosition();
        });
        return false; // Let `.getMenuPosition()` cause render
      }

      return true;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      requestAnimationFrame(function () {
        _this3.getMenuPosition();
      });
      this.hResize = _OptimizedResize.default.add(function () {
        _this3.getMenuPosition();
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var onClose = this.props.onClose;

      if (!this.state.open) {
        onClose();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (typeof this._hBlurTimeout === 'number') {
        clearTimeout(this._hBlurTimeout);
        this._hBlurTimeout = undefined;
      }

      this.hResize.release();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames2,
          _this4 = this;

      var _this$props = this.props,
          id = _this$props.id,
          tabIndex = _this$props.tabIndex,
          ariaLabel = _this$props.ariaLabel,
          children = _this$props.children,
          iconDescription = _this$props.iconDescription,
          direction = _this$props.direction,
          flipped = _this$props.flipped,
          menuOffset = _this$props.menuOffset,
          menuOffsetFlip = _this$props.menuOffsetFlip,
          iconClass = _this$props.iconClass,
          onClick = _this$props.onClick,
          onOpen = _this$props.onOpen,
          IconElement = _this$props.renderIcon,
          ref = _this$props.innerRef,
          menuOptionsClass = _this$props.menuOptionsClass,
          other = _objectWithoutProperties(_this$props, ["id", "tabIndex", "ariaLabel", "children", "iconDescription", "direction", "flipped", "menuOffset", "menuOffsetFlip", "iconClass", "onClick", "onOpen", "renderIcon", "innerRef", "menuOptionsClass"]);

      var open = this.state.open;
      var overflowMenuClasses = (0, _classnames.default)(this.props.className, "".concat(prefix, "--overflow-menu"), _defineProperty({}, "".concat(prefix, "--overflow-menu--open"), open));
      var overflowMenuOptionsClasses = (0, _classnames.default)(menuOptionsClass, "".concat(prefix, "--overflow-menu-options"), (_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--overflow-menu--flip"), this.props.flipped), _defineProperty(_classNames2, "".concat(prefix, "--overflow-menu-options--open"), open), _classNames2));
      var overflowMenuIconClasses = (0, _classnames.default)("".concat(prefix, "--overflow-menu__icon"), iconClass);

      var childrenWithProps = _react.default.Children.toArray(children).map(function (child, index) {
        return _react.default.cloneElement(child, {
          closeMenu: _this4.closeMenu,
          handleOverflowMenuItemFocus: _this4.handleOverflowMenuItemFocus,
          ref: function ref(e) {
            _this4["overflowMenuItem".concat(index)] = e;
          },
          index: index
        });
      });

      var menuBody = _react.default.createElement("ul", {
        className: overflowMenuOptionsClasses,
        tabIndex: "-1",
        role: "menu",
        "aria-label": ariaLabel
      }, childrenWithProps);

      var wrappedMenuBody = _react.default.createElement(_FloatingMenu.default, {
        menuPosition: this.state.menuPosition,
        menuDirection: direction,
        menuOffset: flipped ? menuOffsetFlip : menuOffset,
        menuRef: this._bindMenuBody,
        menuEl: this.menuEl,
        flipped: this.props.flipped,
        target: this._getTarget,
        onPlace: this._handlePlace
      }, _react.default.cloneElement(menuBody, {
        'data-floating-menu-direction': direction
      }));

      var iconProps = {
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        className: overflowMenuIconClasses,
        'aria-label': iconDescription,
        focusable: 'false' // Prevent `<svg>` in trigger icon from getting focus for IE11

      };
      return _react.default.createElement(_ClickListener.default, {
        onClickOutside: this.handleClickOutside
      }, _react.default.createElement("div", _extends({}, other, {
        role: "button",
        "aria-haspopup": true,
        "aria-expanded": this.state.open,
        className: overflowMenuClasses,
        onKeyDown: this.handleKeyPress,
        onClick: this.handleClick,
        "aria-label": ariaLabel,
        id: id,
        tabIndex: tabIndex,
        ref: (0, _mergeRefs.default)(ref, this.bindMenuEl)
      }), _react.default.createElement(IconElement, iconProps, iconDescription && _react.default.createElement("title", null, iconDescription)), open && wrappedMenuBody));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, state) {
      var open = _ref2.open;
      var prevOpen = state.prevOpen;
      return prevOpen === open ? null : {
        open: open,
        prevOpen: open
      };
    }
  }]);

  return OverflowMenu;
}(_react.Component);

_defineProperty(OverflowMenu, "propTypes", {
  /**
   * `true` if the menu should be open.
   */
  open: _propTypes.default.bool,

  /**
   * The menu direction.
   */
  direction: _propTypes.default.oneOf([_FloatingMenu.DIRECTION_TOP, _FloatingMenu.DIRECTION_BOTTOM]),

  /**
   * `true` if the menu alignment should be flipped.
   */
  flipped: _propTypes.default.bool,

  /**
   * The child nodes.
   */
  children: _propTypes.default.node,

  /**
   * The CSS class names.
   */
  className: _propTypes.default.string,

  /**
   * The `tabindex` attribute.
   */
  tabIndex: _propTypes.default.number,

  /**
   * The element ID.
   */
  id: _propTypes.default.string,

  /**
   * The ARIA label.
   */
  ariaLabel: _propTypes.default.string,

  /**
   * The event handler for the `click` event.
   */
  onClick: _propTypes.default.func,

  /**
   * The event handler for the `focus` event.
   */
  onFocus: _propTypes.default.func,

  /**
   * The event handler for the `keydown` event.
   */
  onKeyDown: _propTypes.default.func,

  /**
   * The icon description.
   */
  iconDescription: _propTypes.default.string.isRequired,

  /**
   * The adjustment in position applied to the floating menu.
   */
  menuOffset: _propTypes.default.oneOfType([_propTypes.default.shape({
    top: _propTypes.default.number,
    left: _propTypes.default.number
  }), _propTypes.default.func]),

  /**
   * The adjustment in position applied to the floating menu.
   */
  menuOffsetFlip: _propTypes.default.oneOfType([_propTypes.default.shape({
    top: _propTypes.default.number,
    left: _propTypes.default.number
  }), _propTypes.default.func]),

  /**
   * The CSS class for the icon.
   */
  iconClass: _propTypes.default.string,

  /**
   * Function called to override icon rendering.
   */
  renderIcon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * Function called when menu is closed
   */
  onClose: _propTypes.default.func,

  /**
   * The class to apply to the menu options
   */
  menuOptionsClass: _propTypes.default.string,

  /**
   * Function called when menu is closed
   */
  onOpen: _propTypes.default.func
});

_defineProperty(OverflowMenu, "defaultProps", {
  ariaLabel: 'Menu',
  iconDescription: 'open and close list of options',
  open: false,
  direction: _FloatingMenu.DIRECTION_BOTTOM,
  flipped: false,
  renderIcon: _iconsReact.OverflowMenuVertical16,
  onClick: function onClick() {},
  onKeyDown: function onKeyDown() {},
  onClose: function onClose() {},
  onOpen: function onOpen() {},
  tabIndex: 0,
  menuOffset: getMenuOffset,
  menuOffsetFlip: getMenuOffset
});

var _default = function () {
  var forwardRef = function forwardRef(props, ref) {
    return _react.default.createElement(OverflowMenu, _extends({}, props, {
      innerRef: ref
    }));
  };

  forwardRef.displayName = 'OverflowMenu';
  return _react.default.forwardRef(forwardRef);
}();

exports.default = _default;