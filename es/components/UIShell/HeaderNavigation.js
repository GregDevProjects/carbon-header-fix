function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { settings } from 'carbon-components';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { AriaLabelPropType } from '../../prop-types/AriaPropTypes';
var prefix = settings.prefix;

var HeaderNavigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HeaderNavigation, _React$Component);

  function HeaderNavigation(props) {
    var _this;

    _classCallCheck(this, HeaderNavigation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HeaderNavigation).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleItemRef", function (index) {
      return function (node) {
        _this.items[index] = node;
      };
    });

    _defineProperty(_assertThisInitialized(_this), "_renderNavItem", function (child, index) {
      return React.cloneElement(child, {
        ref: _this.handleItemRef(index)
      });
    });

    _this.items = [];
    _this.state = {
      selectedIndex: 0
    };
    return _this;
  }
  /**
   * Handles individual menuitem refs. We assign them to a class instance
   * property so that we can properly manage focus of our children.
   */


  _createClass(HeaderNavigation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ariaLabel = _this$props['aria-label'],
          ariaLabelledBy = _this$props['aria-labelledby'],
          children = _this$props.children,
          customClassName = _this$props.className,
          rest = _objectWithoutProperties(_this$props, ["aria-label", "aria-labelledby", "children", "className"]);

      var className = cx("".concat(prefix, "--header__nav"), customClassName); // Assign both label strategies in this option, only one should be defined
      // so when we spread that should be the one that is applied to the node

      var accessibilityLabel = {
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledBy
      };
      return React.createElement("nav", _extends({}, rest, accessibilityLabel, {
        className: className
      }), React.createElement("ul", _extends({}, accessibilityLabel, {
        className: "".concat(prefix, "--header__menu-bar"),
        role: "menubar"
      }), React.Children.map(children, this._renderNavItem)));
    }
    /**
     * Render an individual menuitem, adding a `ref` for each child inside of
     * `this.items` to properly manage focus.
     */

  }]);

  return HeaderNavigation;
}(React.Component);

_defineProperty(HeaderNavigation, "propTypes", _objectSpread({}, AriaLabelPropType, {
  /**
   * Optionally provide a custom class to apply to the underlying <nav> node
   */
  className: PropTypes.string,

  /**
   * Provide valid children of HeaderNavigation, for example `HeaderMenuItem`
   * or `HeaderMenu`
   */
  children: PropTypes.node
}));

export { HeaderNavigation as default };