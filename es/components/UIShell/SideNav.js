function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { useState, useRef } from 'react';
import { settings } from 'carbon-components';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { AriaLabelPropType } from '../../prop-types/AriaPropTypes'; // TO-DO: comment back in when footer is added for rails
// import SideNavFooter from './SideNavFooter';

var prefix = settings.prefix;
var SideNav = React.forwardRef(function SideNav(props, ref) {
  var _cx, _cx2;

  var expandedProp = props.expanded,
      defaultExpanded = props.defaultExpanded,
      isChildOfHeader = props.isChildOfHeader,
      ariaLabel = props['aria-label'],
      ariaLabelledBy = props['aria-labelledby'],
      children = props.children,
      onToggle = props.onToggle,
      customClassName = props.className,
      isFixedNav = props.isFixedNav,
      isRail = props.isRail,
      isPersistent = props.isPersistent,
      addFocusListeners = props.addFocusListeners,
      addMouseListeners = props.addMouseListeners;

  var _useRef = useRef(expandedProp !== undefined),
      controlled = _useRef.current;

  var _useState = useState(defaultExpanded),
      _useState2 = _slicedToArray(_useState, 2),
      expandedState = _useState2[0],
      setExpandedState = _useState2[1];

  var _useState3 = useState(defaultExpanded),
      _useState4 = _slicedToArray(_useState3, 2),
      expandedViaHoverState = _useState4[0],
      setExpandedViaHoverState = _useState4[1];

  var expanded = controlled ? expandedProp : expandedState;

  var handleToggle = function handleToggle(event) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !expanded;

    if (!controlled) {
      setExpandedState(value);
    }

    if (onToggle) {
      onToggle(event, value);
    }

    if (controlled || isRail) {
      setExpandedViaHoverState(value);
    }
  };

  var accessibilityLabel = {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy
  }; // TO-DO: comment back in when footer is added for rails
  // const assistiveText = expanded
  //   ? t('carbon.sidenav.state.open')
  //   : t('carbon.sidenav.state.closed');

  var className = cx((_cx = {}, _defineProperty(_cx, "".concat(prefix, "--side-nav"), true), _defineProperty(_cx, "".concat(prefix, "--side-nav--expanded"), expanded || expandedViaHoverState), _defineProperty(_cx, "".concat(prefix, "--side-nav--collapsed"), !expanded && isFixedNav), _defineProperty(_cx, "".concat(prefix, "--side-nav--rail"), isRail), _defineProperty(_cx, customClassName, !!customClassName), _defineProperty(_cx, "".concat(prefix, "--side-nav--ux"), isChildOfHeader), _defineProperty(_cx, "".concat(prefix, "--side-nav--hidden"), !isPersistent), _cx));
  var overlayClassName = cx((_cx2 = {}, _defineProperty(_cx2, "".concat(prefix, "--side-nav__overlay"), true), _defineProperty(_cx2, "".concat(prefix, "--side-nav__overlay-active"), expanded), _cx2));
  var childrenToRender = children; // if a rail, pass the expansion state as a prop, so children can update themselves to match

  if (isRail) {
    childrenToRender = React.Children.map(children, function (child) {
      // if we are controlled, check for if we have hovered over or the expanded state, else just use the expanded state (uncontrolled)
      var currentExpansionState = controlled ? expandedViaHoverState || expanded : expanded;
      return React.cloneElement(child, {
        isSideNavExpanded: currentExpansionState
      });
    });
  }

  var eventHandlers = {};

  if (addFocusListeners) {
    eventHandlers.onFocus = function (event) {
      return handleToggle(event, true);
    };

    eventHandlers.onBlur = function (event) {
      return handleToggle(event, false);
    };
  }

  if (addMouseListeners) {
    eventHandlers.onMouseEnter = function () {
      return handleToggle(true, true);
    };

    eventHandlers.onMouseLeave = function () {
      return handleToggle(false, false);
    };
  }

  return React.createElement(React.Fragment, null, isFixedNav ? null : React.createElement("div", {
    className: overlayClassName
  }), React.createElement("nav", _extends({
    ref: ref,
    className: "".concat(prefix, "--side-nav__navigation ").concat(className)
  }, accessibilityLabel, eventHandlers), childrenToRender));
});
SideNav.defaultProps = {
  translateById: function translateById(id) {
    var translations = {
      'carbon.sidenav.state.open': 'Close',
      'carbon.sidenav.state.closed': 'Open'
    };
    return translations[id];
  },
  defaultExpanded: false,
  isChildOfHeader: true,
  isFixedNav: false,
  isPersistent: true,
  addFocusListeners: true,
  addMouseListeners: true
};
SideNav.propTypes = _objectSpread({
  /**
   * If `true`, the SideNav will be expanded, otherwise it will be collapsed.
   * Using this prop causes SideNav to become a controled component.
   */
  expanded: PropTypes.bool,

  /**
   * If `true`, the SideNav will be open on initial render.
   */
  defaultExpanded: PropTypes.bool,

  /**
   * An optional listener that is called when an event that would cause
   * toggling the SideNav occurs.
   *
   * @param {object} event
   * @param {boolean} value
   */
  onToggle: PropTypes.func
}, AriaLabelPropType, {
  /**
   * Optionally provide a custom class to apply to the underlying <li> node
   */
  className: PropTypes.string,

  /**
   * Provide a custom function for translating all message ids within this
   * component. This function will take in two arguments: the mesasge Id and the
   * state of the component. From this, you should return a string representing
   * the label you want displayed or read by screen readers.
   */
  translateById: PropTypes.func,

  /**
   * Optionally provide a custom class to apply to the underlying <li> node
   */
  isChildOfHeader: PropTypes.bool,

  /**
   * Optional prop to display the side nav rail.
   */
  isRail: PropTypes.bool,

  /**
   * Specify if sideNav is standalone
   */
  isFixedNav: PropTypes.bool,

  /**
   * Specify if the sideNav will be persistent above the lg breakpoint
   */
  isPersistent: PropTypes.bool,

  /**
   * Specify whether focus and blur listeners are added. They are by default.
   */
  addFocusListeners: PropTypes.bool,

  /**
   * Specify whether mouse entry/exit listeners are added. They are by default.
   */
  addMouseListeners: PropTypes.bool
});
export default SideNav;