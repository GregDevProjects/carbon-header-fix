function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ChevronRight16 } from '@carbon/icons-react';
import { settings } from 'carbon-components';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { match, keys } from '../../internal/keyboard';
var prefix = settings.prefix;

var defaultRenderExpando = function defaultRenderExpando(props) {
  return React.createElement("button", props);
};

function AccordionItem(_ref) {
  var _cx;

  var children = _ref.children,
      customClassName = _ref.className,
      _ref$iconDescription = _ref.iconDescription,
      iconDescription = _ref$iconDescription === void 0 ? 'Expand/Collapse' : _ref$iconDescription,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? false : _ref$open,
      onHeadingClick = _ref.onHeadingClick,
      _ref$renderExpando = _ref.renderExpando,
      Expando = _ref$renderExpando === void 0 ? defaultRenderExpando : _ref$renderExpando,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'title' : _ref$title,
      rest = _objectWithoutProperties(_ref, ["children", "className", "iconDescription", "open", "onHeadingClick", "renderExpando", "title"]);

  var _useState = useState(open),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = useState(open),
      _useState4 = _slicedToArray(_useState3, 2),
      prevIsOpen = _useState4[0],
      setPrevIsOpen = _useState4[1];

  var _useState5 = useState(''),
      _useState6 = _slicedToArray(_useState5, 2),
      animation = _useState6[0],
      setAnimation = _useState6[1];

  var className = cx((_cx = {}, _defineProperty(_cx, "".concat(prefix, "--accordion__item"), true), _defineProperty(_cx, "".concat(prefix, "--accordion__item--active"), isOpen), _defineProperty(_cx, "".concat(prefix, "--accordion__item--").concat(animation), animation), _defineProperty(_cx, customClassName, !!customClassName), _cx));

  if (open !== prevIsOpen) {
    setIsOpen(open);
    setPrevIsOpen(open);
  } // When the AccordionItem heading is clicked, toggle the open state of the
  // panel


  function onClick(event) {
    var nextValue = !isOpen;
    setAnimation(isOpen ? 'collapsing' : 'expanding');
    setIsOpen(nextValue);

    if (onHeadingClick) {
      // TODO: normalize signature, potentially:
      // onHeadingClick :: (event: Event, state: { isOpen: Boolean }) => any
      onHeadingClick({
        isOpen: nextValue,
        event: event
      });
    }
  } // If the AccordionItem is open, and the user hits the ESC key, then close it


  function onKeyDown(event) {
    if (isOpen && match(event, keys.Escape)) {
      setIsOpen(false);
    }
  }

  function handleAnimationEnd(event) {
    if (rest.handleAnimationEnd) {
      rest.handleAnimationEnd(event);
    }

    setAnimation('');
  }

  return React.createElement("li", _extends({
    className: className
  }, rest, {
    onAnimationEnd: handleAnimationEnd
  }), React.createElement(Expando, {
    "aria-expanded": isOpen,
    className: "".concat(prefix, "--accordion__heading"),
    onClick: onClick,
    onKeyDown: onKeyDown,
    title: iconDescription,
    type: "button"
  }, React.createElement(ChevronRight16, {
    "aria-label": iconDescription,
    className: "".concat(prefix, "--accordion__arrow")
  }), React.createElement("div", {
    className: "".concat(prefix, "--accordion__title")
  }, title)), React.createElement("div", {
    className: "".concat(prefix, "--accordion__content")
  }, children));
}

AccordionItem.propTypes = {
  /**
   * Provide the contents of your AccordionItem
   */
  children: PropTypes.node,

  /**
   * Specify an optional className to be applied to the container node
   */
  className: PropTypes.string,

  /**
   * The accordion title.
   */
  title: PropTypes.node,

  /**
   * The callback function to render the expando button.
   * Can be a React component class.
   */
  renderExpando: PropTypes.func,

  /**
   * The description of the expando icon.
   */
  iconDescription: PropTypes.string,

  /**
   * `true` to open the expando.
   */
  open: PropTypes.bool,

  /**
   * The handler of the massaged `click` event.
   */
  onClick: PropTypes.func,

  /**
   * The handler of the massaged `click` event on the heading.
   */
  onHeadingClick: PropTypes.func
};
export default AccordionItem;