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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isForwardRef } from 'react-is';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
import { Information16 as Information } from '@carbon/icons-react';
import { settings } from 'carbon-components';
import FloatingMenu, { DIRECTION_LEFT, DIRECTION_TOP, DIRECTION_RIGHT, DIRECTION_BOTTOM } from '../../internal/FloatingMenu';
import ClickListener from '../../internal/ClickListener';
import mergeRefs from '../../tools/mergeRefs';
import { keys, matches as keyDownMatch } from '../../internal/keyboard';
import isRequiredOneOf from '../../prop-types/isRequiredOneOf';
import requiredIfValueExists from '../../prop-types/requiredIfValueExists';
import { useControlledStateWithValue } from '../../internal/FeatureFlags';
var prefix = settings.prefix;
/**
 * @param {Element} menuBody The menu body with the menu arrow.
 * @param {string} menuDirection Where the floating menu menu should be placed relative to the trigger button.
 * @returns {FloatingMenu~offset} The adjustment of the floating menu position, upon the position of the menu arrow.
 * @private
 */

var getMenuOffset = function getMenuOffset(menuBody, menuDirection) {
  var _DIRECTION_LEFT$DIREC, _DIRECTION_LEFT$DIREC2;

  var arrowStyle = menuBody.ownerDocument.defaultView.getComputedStyle(menuBody, ':before');
  var arrowPositionProp = (_DIRECTION_LEFT$DIREC = {}, _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_LEFT, 'right'), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_TOP, 'bottom'), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_RIGHT, 'left'), _defineProperty(_DIRECTION_LEFT$DIREC, DIRECTION_BOTTOM, 'top'), _DIRECTION_LEFT$DIREC)[menuDirection];
  var menuPositionAdjustmentProp = (_DIRECTION_LEFT$DIREC2 = {}, _defineProperty(_DIRECTION_LEFT$DIREC2, DIRECTION_LEFT, 'left'), _defineProperty(_DIRECTION_LEFT$DIREC2, DIRECTION_TOP, 'top'), _defineProperty(_DIRECTION_LEFT$DIREC2, DIRECTION_RIGHT, 'left'), _defineProperty(_DIRECTION_LEFT$DIREC2, DIRECTION_BOTTOM, 'top'), _DIRECTION_LEFT$DIREC2)[menuDirection];
  var values = [arrowPositionProp, 'border-bottom-width'].reduce(function (o, name) {
    return _objectSpread({}, o, _defineProperty({}, name, Number((/^([\d-]+)px$/.exec(arrowStyle.getPropertyValue(name)) || [])[1])));
  }, {});
  values[arrowPositionProp] = values[arrowPositionProp] || -6; // IE, etc.

  if (Object.keys(values).every(function (name) {
    return !isNaN(values[name]);
  })) {
    var arrowPosition = values[arrowPositionProp],
        borderBottomWidth = values['border-bottom-width'];
    return _defineProperty({
      left: 0,
      top: 0
    }, menuPositionAdjustmentProp, Math.sqrt(Math.pow(borderBottomWidth, 2) * 2) - arrowPosition);
  }
};

var Tooltip =
/*#__PURE__*/
function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip(props) {
    var _this;

    _classCallCheck(this, Tooltip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "_tooltipEl", null);

    _defineProperty(_assertThisInitialized(_this), "_handleUserInputOpenClose", function (event, _ref2) {
      var open = _ref2.open;

      _this.setState({
        open: open
      }, function () {
        if (_this.props.onChange) {
          _this.props.onChange(event, {
            open: open
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getTriggerPosition", function () {
      if (_this.triggerEl) {
        var triggerPosition = _this.triggerEl.getBoundingClientRect();

        _this.setState({
          triggerPosition: triggerPosition
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_handleFocus", function (state, evt) {
      var relatedTarget = evt.relatedTarget;

      if (state === 'over') {
        _this.getTriggerPosition();

        _this._handleUserInputOpenClose(evt, {
          open: true
        });
      } else {
        // Note: SVGElement in IE11 does not have `.contains()`
        var shouldPreventClose = relatedTarget && (_this.triggerEl && _this.triggerEl.contains && _this.triggerEl.contains(relatedTarget) || _this._tooltipEl && _this._tooltipEl.contains(relatedTarget));

        if (!shouldPreventClose) {
          _this._handleUserInputOpenClose(evt, {
            open: false
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_debouncedHandleFocus", null);

    _defineProperty(_assertThisInitialized(_this), "_getTarget", function () {
      return _this.triggerEl && _this.triggerEl.closest('[data-floating-menu-container]') || document.body;
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouse", function (evt) {
      evt.persist();
      var state = {
        focus: 'over',
        blur: 'out',
        click: 'click'
      }[evt.type];
      var hadContextMenu = _this._hasContextMenu;
      _this._hasContextMenu = evt.type === 'contextmenu';

      if (state === 'click') {
        evt.stopPropagation();
        evt.preventDefault();
        var shouldOpen = _this.isControlled ? !_this.props.open : !_this.state.open;

        if (shouldOpen) {
          _this.getTriggerPosition();
        }

        _this._handleUserInputOpenClose(evt, {
          open: shouldOpen
        });
      } else if (state && (state !== 'out' || !hadContextMenu) && _this._debouncedHandleFocus) {
        _this._debouncedHandleFocus(state, evt);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (evt) {
      var shouldPreventClose = evt && evt.target && _this._tooltipEl && _this._tooltipEl.contains(evt.target);

      if (!shouldPreventClose) {
        _this._handleUserInputOpenClose(evt, {
          open: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (event) {
      if (keyDownMatch(event, [keys.Escape])) {
        event.stopPropagation();

        _this._handleUserInputOpenClose(event, {
          open: false
        });
      }

      if (keyDownMatch(event, [keys.Enter, keys.Space])) {
        event.stopPropagation();
        event.preventDefault();
        var shouldOpen = _this.isControlled ? !_this.props.open : !_this.state.open;

        if (shouldOpen) {
          _this.getTriggerPosition();
        }

        _this._handleUserInputOpenClose(event, {
          open: shouldOpen
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEscKeyPress", function (event) {
      var _ref3 = _this.isControlled ? _this.props : _this.state,
          open = _ref3.open;

      if (open && keyDownMatch(event, [keys.Escape])) {
        return _this._handleUserInputOpenClose(event, {
          open: false
        });
      }
    });

    _this.isControlled = props.open !== undefined;

    if (useControlledStateWithValue && _this.isControlled) {
      // Skips the logic of setting initial state if this component is controlled
      return _possibleConstructorReturn(_this);
    }

    var _open = useControlledStateWithValue ? props.defaultOpen : props.open;

    _this.state = {
      open: _open
    };
    return _this;
  }

  _createClass(Tooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this._debouncedHandleFocus) {
        this._debouncedHandleFocus = debounce(this._handleFocus, 200);
      }

      requestAnimationFrame(function () {
        _this2.getTriggerPosition();
      });
      document.addEventListener('keydown', this.handleEscKeyPress, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._debouncedHandleFocus) {
        this._debouncedHandleFocus.cancel();

        this._debouncedHandleFocus = null;
      }

      document.removeEventListener('keydown', this.handleEscKeyPress, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          _this$props$triggerId = _this$props.triggerId,
          triggerId = _this$props$triggerId === void 0 ? this.triggerId = this.triggerId || "__carbon-tooltip-trigger_".concat(Math.random().toString(36).substr(2)) : _this$props$triggerId,
          _this$props$tooltipId = _this$props.tooltipId,
          tooltipId = _this$props$tooltipId === void 0 ? this.tooltipId = this.tooltipId || "__carbon-tooltip_".concat(Math.random().toString(36).substr(2)) : _this$props$tooltipId,
          children = _this$props.children,
          className = _this$props.className,
          triggerClassName = _this$props.triggerClassName,
          direction = _this$props.direction,
          triggerText = _this$props.triggerText,
          showIcon = _this$props.showIcon,
          iconName = _this$props.iconName,
          iconDescription = _this$props.iconDescription,
          IconCustomElement = _this$props.renderIcon,
          menuOffset = _this$props.menuOffset,
          _this$props$tabIndex = _this$props.tabIndex,
          tabIndex = _this$props$tabIndex === void 0 ? 0 : _this$props$tabIndex,
          ref = _this$props.innerRef,
          other = _objectWithoutProperties(_this$props, ["triggerId", "tooltipId", "children", "className", "triggerClassName", "direction", "triggerText", "showIcon", "iconName", "iconDescription", "renderIcon", "menuOffset", "tabIndex", "innerRef"]);

      var _ref4 = this.isControlled ? this.props : this.state,
          open = _ref4.open;

      var tooltipClasses = classNames("".concat(prefix, "--tooltip"), _defineProperty({}, "".concat(prefix, "--tooltip--shown"), open), className);
      var triggerClasses = classNames("".concat(prefix, "--tooltip__label"), triggerClassName);
      var refProp = mergeRefs(ref, function (node) {
        _this3.triggerEl = node;
      });
      var iconProperties = {
        name: iconName,
        role: null,
        description: null
      };

      var properties = _objectSpread({
        role: 'button',
        tabIndex: tabIndex,
        onClick: this.handleMouse,
        onKeyDown: this.handleKeyPress,
        onMouseOver: this.handleMouse,
        onMouseOut: this.handleMouse,
        onFocus: this.handleMouse,
        onBlur: this.handleMouse,
        'aria-haspopup': 'true',
        'aria-expanded': open,
        'aria-describedby': open ? tooltipId : null
      }, triggerText ? {
        'aria-labelledby': triggerId
      } : {
        'aria-label': iconDescription
      });

      return React.createElement(React.Fragment, null, React.createElement(ClickListener, {
        onClickOutside: this.handleClickOutside
      }, showIcon ? React.createElement("div", {
        id: triggerId,
        className: triggerClasses
      }, triggerText, React.createElement("div", _extends({
        className: "".concat(prefix, "--tooltip__trigger")
      }, properties), React.createElement(IconCustomElement, _extends({
        ref: refProp
      }, iconProperties)))) : React.createElement("div", _extends({
        id: triggerId,
        className: triggerClasses,
        ref: refProp
      }, properties), triggerText)), open && React.createElement(FloatingMenu, {
        target: this._getTarget,
        menuPosition: this.state.triggerPosition,
        menuDirection: direction,
        menuOffset: menuOffset,
        menuRef: function menuRef(node) {
          _this3._tooltipEl = node;
        }
      }, React.createElement("div", _extends({
        id: tooltipId,
        className: tooltipClasses
      }, other, {
        "data-floating-menu-direction": direction,
        onMouseOver: this.handleMouse,
        onMouseOut: this.handleMouse,
        onFocus: this.handleMouse,
        onBlur: this.handleMouse,
        onContextMenu: this.handleMouse,
        role: "tooltip"
      }), React.createElement("span", {
        className: "".concat(prefix, "--tooltip__caret")
      }), children)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref5, state) {
      var open = _ref5.open;

      /**
       * so that tooltip can be controlled programmatically through this `open` prop
       */
      var prevOpen = state.prevOpen;
      return prevOpen === open ? null : {
        open: open,
        prevOpen: open
      };
    }
  }]);

  return Tooltip;
}(Component);

_defineProperty(Tooltip, "propTypes", _objectSpread({
  /**
   * The ID of the trigger button.
   */
  triggerId: PropTypes.string,

  /**
   * The ID of the tooltip content.
   */
  tooltipId: PropTypes.string,

  /**
   * Optional starting value for uncontrolled state
   */
  defaultOpen: PropTypes.bool,

  /**
   * Open/closed state.
   */
  open: PropTypes.bool,

  /**
   * Contents to put into the tooltip.
   */
  children: PropTypes.node,

  /**
   * The CSS class names of the tooltip.
   */
  className: PropTypes.string,

  /**
   * The CSS class names of the trigger UI.
   */
  triggerClassName: PropTypes.string,

  /**
   * Where to put the tooltip, relative to the trigger UI.
   */
  direction: PropTypes.oneOf(['bottom', 'top', 'left', 'right']),

  /**
   * The adjustment of the tooltip position.
   */
  menuOffset: PropTypes.oneOfType([PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.number
  }), PropTypes.func]),

  /**
   * The callback function to optionally render the icon element.
   * It should be a component with React.forwardRef().
   */
  renderIcon: function renderIcon(props, propName, componentName) {
    if (props[propName] == undefined) {
      return;
    }

    var RefForwardingComponent = props[propName];
    if (!isForwardRef(React.createElement(RefForwardingComponent, null))) return new Error("Invalid value of prop '".concat(propName, "' supplied to '").concat(componentName, "',\n                          it should be created/wrapped with React.forwardRef() to have a ref and access the proper\n                          DOM node of the element to calculate its position in the viewport."));
  },

  /**
   * `true` to show the default tooltip icon.
   */
  showIcon: PropTypes.bool,

  /**
   * The name of the default tooltip icon.
   */
  iconName: PropTypes.string
}, isRequiredOneOf({
  /**
   * The content to put into the trigger UI, except the (default) tooltip icon.
   */
  triggerText: PropTypes.node,

  /**
   * The description of the default tooltip icon, to be put in its SVG 'aria-label' and 'alt' .
   */
  iconDescription: PropTypes.string
}), {
  /**
   * Optional prop to specify the tabIndex of the Tooltip
   */
  tabIndex: PropTypes.number,

  /**
   * * the signature of the event handler will be:
   * * `onChange(event, { open })` where:
   *   * `event` is the (React) raw event
   *   * `open` is the new value
   */
  onChange: !useControlledStateWithValue ? PropTypes.func : requiredIfValueExists(PropTypes.func)
}));

_defineProperty(Tooltip, "defaultProps", {
  direction: DIRECTION_BOTTOM,
  renderIcon: Information,
  showIcon: true,
  triggerText: null,
  menuOffset: getMenuOffset
});

export default (function () {
  var forwardRef = function forwardRef(props, ref) {
    return React.createElement(Tooltip, _extends({}, props, {
      innerRef: ref
    }));
  };

  forwardRef.displayName = 'Tooltip';
  return React.forwardRef(forwardRef);
})();