"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DIRECTION_BOTTOM = exports.DIRECTION_RIGHT = exports.DIRECTION_TOP = exports.DIRECTION_LEFT = void 0;

var _warning = _interopRequireDefault(require("warning"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _windowOrGlobal = _interopRequireDefault(require("window-or-global"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * The structure for the position of floating menu.
 * @typedef {Object} FloatingMenu~position
 * @property {number} left The left position.
 * @property {number} top The top position.
 * @property {number} right The right position.
 * @property {number} bottom The bottom position.
 */

/**
 * The structure for the size of floating menu.
 * @typedef {Object} FloatingMenu~size
 * @property {number} width The width.
 * @property {number} height The height.
 */

/**
 * The structure for the position offset of floating menu.
 * @typedef {Object} FloatingMenu~offset
 * @property {number} top The top position.
 * @property {number} left The left position.
 */
var DIRECTION_LEFT = 'left';
exports.DIRECTION_LEFT = DIRECTION_LEFT;
var DIRECTION_TOP = 'top';
exports.DIRECTION_TOP = DIRECTION_TOP;
var DIRECTION_RIGHT = 'right';
exports.DIRECTION_RIGHT = DIRECTION_RIGHT;
var DIRECTION_BOTTOM = 'bottom';
/**
 * @param {FloatingMenu~offset} [oldMenuOffset={}] The old value.
 * @param {FloatingMenu~offset} [menuOffset={}] The new value.
 * @returns `true` if the parent component wants to change in the adjustment of the floating menu position.
 * @private
 */

exports.DIRECTION_BOTTOM = DIRECTION_BOTTOM;

var hasChangeInOffset = function hasChangeInOffset() {
  var oldMenuOffset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var menuOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (_typeof(oldMenuOffset) !== _typeof(menuOffset)) {
    return true;
  } else if (Object(menuOffset) === menuOffset && typeof menuOffset !== 'function') {
    return oldMenuOffset.top !== menuOffset.top || oldMenuOffset.left !== menuOffset.left;
  }

  return oldMenuOffset !== menuOffset;
};
/**
 * @param {object} params The parameters.
 * @param {FloatingMenu~size} params.menuSize The size of the menu.
 * @param {FloatingMenu~position} params.refPosition The position of the triggering element.
 * @param {FloatingMenu~offset} [params.offset={ left: 0, top: 0 }] The position offset of the menu.
 * @param {string} [params.direction=bottom] The menu direction.
 * @param {number} [params.scrollX=0] The scroll position of the viewport.
 * @param {number} [params.scrollY=0] The scroll position of the viewport.
 * @returns {FloatingMenu~offset} The position of the menu, relative to the top-left corner of the viewport.
 * @private
 */


var getFloatingPosition = function getFloatingPosition(_ref) {
  var _DIRECTION_LEFT$DIREC;

  var menuSize = _ref.menuSize,
      refPosition = _ref.refPosition,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? {} : _ref$offset,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? DIRECTION_BOTTOM : _ref$direction,
      _ref$scrollX = _ref.scrollX,
      scrollX = _ref$scrollX === void 0 ? 0 : _ref$scrollX,
      _ref$scrollY = _ref.scrollY,
      scrollY = _ref$scrollY === void 0 ? 0 : _ref$scrollY;
  var _refPosition$left = refPosition.left,
      refLeft = _refPosition$left === void 0 ? 0 : _refPosition$left,
      _refPosition$top = refPosition.top,
      refTop = _refPosition$top === void 0 ? 0 : _refPosition$top,
      _refPosition$right = refPosition.right,
      refRight = _refPosition$right === void 0 ? 0 : _refPosition$right,
      _refPosition$bottom = refPosition.bottom,
      refBottom = _refPosition$bottom === void 0 ? 0 : _refPosition$bottom;
  var width = menuSize.width,
      height = menuSize.height;
  var _offset$top = offset.top,
      top = _offset$top === void 0 ? 0 : _offset$top,
      _offset$left = offset.left,
      left = _offset$left === void 0 ? 0 : _offset$left;
  var refCenterHorizontal = (refLeft + refRight) / 2;
  var refCenterVertical = (refTop + refBottom) / 2;
  return (_DIRECTION_LEFT$DIREC = {}, _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_LEFT, function () {
    return {
      left: refLeft - width + scrollX - left,
      top: refCenterVertical - height / 2 + scrollY + top
    };
  }), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_TOP, function () {
    return {
      left: refCenterHorizontal - width / 2 + scrollX + left,
      top: refTop - height + scrollY - top
    };
  }), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_RIGHT, function () {
    return {
      left: refRight + scrollX + left,
      top: refCenterVertical - height / 2 + scrollY + top
    };
  }), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_BOTTOM, function () {
    return {
      left: refCenterHorizontal - width / 2 + scrollX + left,
      top: refBottom + scrollY + top
    };
  }), _DIRECTION_LEFT$DIREC)[direction]();
};
/**
 * A menu that is detached from the triggering element.
 * Useful when the container of the triggering element cannot have `overflow:visible` style, etc.
 */


var FloatingMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FloatingMenu, _React$Component);

  function FloatingMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FloatingMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FloatingMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_placeInProgress", false);

    _defineProperty(_assertThisInitialized(_this), "state", {
      /**
       * The position of the menu, relative to the top-left corner of the viewport.
       * @type {FloatingMenu~offset}
       */
      floatingPosition: undefined
    });

    _defineProperty(_assertThisInitialized(_this), "_menuContainer", null);

    _defineProperty(_assertThisInitialized(_this), "_menuBody", null);

    _defineProperty(_assertThisInitialized(_this), "_updateMenuSize", function () {
      var prevProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var menuBody = _this._menuBody;
      process.env.NODE_ENV !== "production" ? (0, _warning.default)(menuBody, 'The DOM node for menu body for calculating its position is not available. Skipping...') : void 0;

      if (!menuBody) {
        return;
      }

      var _prevProps$menuPositi = prevProps.menuPosition,
          oldRefPosition = _prevProps$menuPositi === void 0 ? {} : _prevProps$menuPositi,
          _prevProps$menuOffset = prevProps.menuOffset,
          oldMenuOffset = _prevProps$menuOffset === void 0 ? {} : _prevProps$menuOffset,
          oldMenuDirection = prevProps.menuDirection;
      var _this$props = _this.props,
          _this$props$menuPosit = _this$props.menuPosition,
          refPosition = _this$props$menuPosit === void 0 ? {} : _this$props$menuPosit,
          _this$props$menuOffse = _this$props.menuOffset,
          menuOffset = _this$props$menuOffse === void 0 ? {} : _this$props$menuOffse,
          menuDirection = _this$props.menuDirection;

      if (oldRefPosition.top !== refPosition.top || oldRefPosition.right !== refPosition.right || oldRefPosition.bottom !== refPosition.bottom || oldRefPosition.left !== refPosition.left || hasChangeInOffset(oldMenuOffset, menuOffset) || oldMenuDirection !== menuDirection) {
        var menuSize = menuBody.getBoundingClientRect();
        var _this$props2 = _this.props,
            menuEl = _this$props2.menuEl,
            flipped = _this$props2.flipped;
        var offset = typeof menuOffset !== 'function' ? menuOffset : menuOffset(menuBody, menuDirection, menuEl, flipped); // Skips if either in the following condition:
        // a) Menu body has `display:none`
        // b) `menuOffset` as a callback returns `undefined` (The callback saw that it couldn't calculate the value)

        if (menuSize.width > 0 && menuSize.height > 0 || !offset) {
          _this.setState({
            floatingPosition: getFloatingPosition({
              menuSize: menuSize,
              refPosition: refPosition,
              direction: menuDirection,
              offset: offset,
              scrollX: _windowOrGlobal.default.pageXOffset,
              scrollY: _windowOrGlobal.default.pageYOffset
            })
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_menuRef", function (menuBody) {
      var menuRef = _this.props.menuRef;
      _this._placeInProgress = !!menuBody;
      menuRef && menuRef(_this._menuBody = menuBody);

      if (menuBody) {
        _this._updateMenuSize();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_getChildrenWithProps", function () {
      var _this$props3 = _this.props,
          styles = _this$props3.styles,
          children = _this$props3.children;
      var pos = _this.state.floatingPosition; // If no pos available, we need to hide the element (offscreen to the left)
      // This is done so we can measure the content before positioning it correctly.

      var positioningStyle = pos ? {
        left: "".concat(pos.left, "px"),
        top: "".concat(pos.top, "px"),
        right: 'auto'
      } : {
        visibility: 'hidden',
        top: '0px'
      };
      return _react.default.cloneElement(children, {
        ref: _this._menuRef,
        style: _objectSpread({}, styles, {}, positioningStyle, {
          position: 'absolute',
          margin: 0,
          opacity: 1
        })
      });
    });

    return _this;
  }

  _createClass(FloatingMenu, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this._updateMenuSize(prevProps);

      var onPlace = this.props.onPlace;

      if (this._placeInProgress && this.state.floatingPosition && typeof onPlace === 'function') {
        onPlace(this._menuBody);
        this._placeInProgress = false;
      }
    }
    /**
     * A callback for called when menu body is mounted or unmounted.
     * @param {Element} menuBody The menu body being mounted. `null` if the menu body is being unmounted.
     */

  }, {
    key: "render",
    value: function render() {
      if (typeof document !== 'undefined') {
        var target = this.props.target;
        return _reactDom.default.createPortal(this._getChildrenWithProps(), !target ? document.body : target());
      }

      return null;
    }
  }]);

  return FloatingMenu;
}(_react.default.Component);

_defineProperty(FloatingMenu, "propTypes", {
  /**
   * Contents to put into the floating menu.
   */
  children: _propTypes.default.object,

  /**
   * The query selector indicating where the floating menu body should be placed.
   */
  target: _propTypes.default.func,

  /**
   * The position in the viewport of the trigger button.
   */
  menuPosition: _propTypes.default.shape({
    top: _propTypes.default.number,
    right: _propTypes.default.number,
    bottom: _propTypes.default.number,
    left: _propTypes.default.number
  }),

  /**
   * Where to put the tooltip, relative to the trigger button.
   */
  menuDirection: _propTypes.default.oneOf([DIRECTION_LEFT, DIRECTION_TOP, DIRECTION_RIGHT, DIRECTION_BOTTOM]),

  /**
   * The adjustment of the floating menu position, considering the position of dropdown arrow, etc.
   */
  menuOffset: _propTypes.default.oneOfType([_propTypes.default.shape({
    top: _propTypes.default.number,
    left: _propTypes.default.number
  }), _propTypes.default.func]),

  /**
   * The additional styles to put to the floating menu.
   */
  styles: _propTypes.default.object,

  /**
   * The callback called when the menu body has been mounted to/will be unmounted from the DOM.
   */
  menuRef: _propTypes.default.func,

  /**
   * The callback called when the menu body has been mounted and positioned.
   */
  onPlace: _propTypes.default.func
});

_defineProperty(FloatingMenu, "defaultProps", {
  menuPosition: {},
  menuOffset: {},
  menuDirection: DIRECTION_BOTTOM
});

var _default = FloatingMenu;
exports.default = _default;