function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import cx from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import isEqual from 'lodash.isequal';
import { settings } from 'carbon-components';
import { WarningFilled16 } from '@carbon/icons-react';
import ListBox from '../ListBox';
import Checkbox from '../Checkbox';
import Selection from '../../internal/Selection';
import { sortingPropTypes } from './MultiSelectPropTypes';
import { defaultItemToString } from './tools/itemToString';
import { defaultSortItems, defaultCompareItems } from './tools/sorting';
var prefix = settings.prefix;

var noop = function noop() {
  return undefined;
};

var MultiSelect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MultiSelect, _React$Component);

  _createClass(MultiSelect, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var open = _ref.open;

      /**
       * programmatically control this `open` prop
       */
      var prevOpen = state.prevOpen;
      return prevOpen === open ? null : {
        isOpen: open,
        prevOpen: open
      };
    }
  }]);

  function MultiSelect(props) {
    var _this;

    _classCallCheck(this, MultiSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MultiSelect).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function (changes) {
      if (_this.props.onChange) {
        _this.props.onChange(changes);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnOuterClick", function () {
      _this.setState({
        isOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnStateChange", function (changes, downshift) {
      if (changes.isOpen && !_this.state.isOpen) {
        _this.setState({
          topItems: downshift.selectedItem
        });
      }

      var type = changes.type;

      switch (type) {
        case Downshift.stateChangeTypes.keyDownArrowDown:
        case Downshift.stateChangeTypes.keyDownArrowUp:
        case Downshift.stateChangeTypes.itemMouseEnter:
          _this.setState({
            highlightedIndex: changes.highlightedIndex
          });

          break;

        case Downshift.stateChangeTypes.keyDownEscape:
        case Downshift.stateChangeTypes.mouseUp:
          _this.setState({
            isOpen: false
          });

          break;
        // Opt-in to some cases where we should be toggling the menu based on
        // a given key press or mouse handler
        // Reference: https://github.com/paypal/downshift/issues/206

        case Downshift.stateChangeTypes.clickButton:
        case Downshift.stateChangeTypes.keyDownSpaceButton:
          _this.setState(function () {
            var nextIsOpen = changes.isOpen || false;

            if (changes.isOpen === false) {
              // If Downshift is trying to close the menu, but we know the input
              // is the active element in the document, then keep the menu open
              if (_this.inputNode === document.activeElement) {
                nextIsOpen = true;
              }
            }

            return {
              isOpen: nextIsOpen
            };
          });

          break;
      }
    });

    _this.state = {
      highlightedIndex: null,
      isOpen: props.open,
      topItems: []
    };
    return _this;
  }

  _createClass(MultiSelect, [{
    key: "render",
    value: function render() {
      var _cx,
          _this2 = this;

      var _this$state = this.state,
          highlightedIndex = _this$state.highlightedIndex,
          isOpen = _this$state.isOpen;
      var _this$props = this.props,
          ariaLabel = _this$props.ariaLabel,
          containerClassName = _this$props.className,
          id = _this$props.id,
          items = _this$props.items,
          itemToString = _this$props.itemToString,
          titleText = _this$props.titleText,
          helperText = _this$props.helperText,
          label = _this$props.label,
          type = _this$props.type,
          disabled = _this$props.disabled,
          initialSelectedItems = _this$props.initialSelectedItems,
          sortItems = _this$props.sortItems,
          compareItems = _this$props.compareItems,
          light = _this$props.light,
          invalid = _this$props.invalid,
          invalidText = _this$props.invalidText,
          useTitleInItem = _this$props.useTitleInItem,
          translateWithId = _this$props.translateWithId,
          downshiftProps = _this$props.downshiftProps;
      var inline = type === 'inline';
      var wrapperClasses = cx("".concat(prefix, "--multi-select__wrapper"), "".concat(prefix, "--list-box__wrapper"), (_cx = {}, _defineProperty(_cx, "".concat(prefix, "--multi-select__wrapper--inline"), inline), _defineProperty(_cx, "".concat(prefix, "--list-box__wrapper--inline"), inline), _defineProperty(_cx, "".concat(prefix, "--multi-select__wrapper--inline--invalid"), inline && invalid), _defineProperty(_cx, "".concat(prefix, "--list-box__wrapper--inline--invalid"), inline && invalid), _cx));
      var titleClasses = cx("".concat(prefix, "--label"), _defineProperty({}, "".concat(prefix, "--label--disabled"), disabled));
      var title = titleText ? React.createElement("label", {
        htmlFor: id,
        className: titleClasses
      }, titleText) : null;
      var helperClasses = cx("".concat(prefix, "--form__helper-text"), _defineProperty({}, "".concat(prefix, "--form__helper-text--disabled"), disabled));
      var helper = helperText ? React.createElement("div", {
        className: helperClasses
      }, helperText) : null;
      var input = React.createElement(Selection, {
        disabled: disabled,
        onChange: this.handleOnChange,
        initialSelectedItems: initialSelectedItems,
        render: function render(_ref2) {
          var selectedItems = _ref2.selectedItems,
              onItemChange = _ref2.onItemChange,
              clearSelection = _ref2.clearSelection;
          return React.createElement(Downshift, _extends({}, downshiftProps, {
            highlightedIndex: highlightedIndex,
            isOpen: isOpen,
            itemToString: itemToString,
            onChange: onItemChange,
            onStateChange: _this2.handleOnStateChange,
            onOuterClick: _this2.handleOnOuterClick,
            selectedItem: selectedItems,
            render: function render(_ref3) {
              var _cx4;

              var getRootProps = _ref3.getRootProps,
                  selectedItem = _ref3.selectedItem,
                  isOpen = _ref3.isOpen,
                  itemToString = _ref3.itemToString,
                  highlightedIndex = _ref3.highlightedIndex,
                  getItemProps = _ref3.getItemProps,
                  getButtonProps = _ref3.getButtonProps;
              var className = cx("".concat(prefix, "--multi-select"), containerClassName, (_cx4 = {}, _defineProperty(_cx4, "".concat(prefix, "--multi-select--invalid"), invalid), _defineProperty(_cx4, "".concat(prefix, "--multi-select--inline"), inline), _defineProperty(_cx4, "".concat(prefix, "--multi-select--selected"), selectedItem.length > 0), _cx4));
              return React.createElement(ListBox, _extends({
                id: id,
                type: type,
                className: className,
                disabled: disabled,
                light: light,
                invalid: invalid,
                invalidText: invalidText,
                isOpen: isOpen
              }, getRootProps({
                refKey: 'innerRef'
              })), invalid && React.createElement(WarningFilled16, {
                className: "".concat(prefix, "--list-box__invalid-icon")
              }), React.createElement(ListBox.Field, _extends({
                id: id,
                tabIndex: "0",
                disabled: disabled,
                "aria-disabled": disabled,
                translateWithId: translateWithId
              }, getButtonProps({
                disabled: disabled
              })), selectedItem.length > 0 && React.createElement(ListBox.Selection, {
                clearSelection: !disabled ? clearSelection : noop,
                selectionCount: selectedItem.length,
                translateWithId: translateWithId,
                disabled: disabled
              }), React.createElement("span", {
                className: "".concat(prefix, "--list-box__label")
              }, label), React.createElement(ListBox.MenuIcon, {
                isOpen: isOpen,
                translateWithId: translateWithId
              })), isOpen && React.createElement(ListBox.Menu, {
                "aria-label": ariaLabel,
                id: id
              }, sortItems(items, {
                selectedItems: {
                  top: selectedItems,
                  fixed: [],
                  'top-after-reopen': _this2.state.topItems
                }[_this2.props.selectionFeedback],
                itemToString: itemToString,
                compareItems: compareItems,
                locale: 'en'
              }).map(function (item, index) {
                var itemProps = getItemProps({
                  item: item
                });
                var itemText = itemToString(item);
                var isChecked = selectedItem.filter(function (selected) {
                  return isEqual(selected, item);
                }).length > 0;
                return React.createElement(ListBox.MenuItem, _extends({
                  key: itemProps.id,
                  isActive: isChecked,
                  isHighlighted: highlightedIndex === index
                }, itemProps), React.createElement(Checkbox, {
                  id: "".concat(itemProps.id, "__checkbox"),
                  title: useTitleInItem ? itemText : null,
                  name: itemText,
                  checked: isChecked,
                  disabled: disabled,
                  readOnly: true,
                  tabIndex: "-1",
                  labelText: itemText
                }));
              })));
            }
          }));
        }
      });
      return React.createElement("div", {
        className: wrapperClasses
      }, title, !inline && helper, input);
    }
  }]);

  return MultiSelect;
}(React.Component);

_defineProperty(MultiSelect, "propTypes", _objectSpread({}, sortingPropTypes, {
  /**
   * Disable the control
   */
  disabled: PropTypes.bool,

  /**
   * Specify a custom `id`
   */
  id: PropTypes.string.isRequired,

  /**
   * We try to stay as generic as possible here to allow individuals to pass
   * in a collection of whatever kind of data structure they prefer
   */
  items: PropTypes.array.isRequired,

  /**
   * Allow users to pass in arbitrary items from their collection that are
   * pre-selected
   */
  initialSelectedItems: PropTypes.array,

  /**
   * Helper function passed to downshift that allows the library to render a
   * given item to a string label. By default, it extracts the `label` field
   * from a given item to serve as the item label in the list.
   */
  itemToString: PropTypes.func,

  /**
   * Generic `label` that will be used as the textual representation of what
   * this field is for
   */
  label: PropTypes.node.isRequired,

  /**
   * Specify the locale of the control. Used for the default `compareItems`
   * used for sorting the list of items in the control.
   */
  locale: PropTypes.string,

  /**
   * `onChange` is a utility for this controlled component to communicate to a
   * consuming component what kind of internal state changes are occuring.
   */
  onChange: PropTypes.func,

  /**
   * Specify 'inline' to create an inline multi-select.
   */
  type: PropTypes.oneOf(['default', 'inline']),

  /**
   * Specify title to show title on hover
   */
  useTitleInItem: PropTypes.bool,

  /**
   * `true` to use the light version.
   */
  light: PropTypes.bool,

  /**
   * Is the current selection invalid?
   */
  invalid: PropTypes.bool,

  /**
   * If invalid, what is the error?
   */
  invalidText: PropTypes.string,

  /**
   * Initialize the component with an open(`true`)/closed(`false`) menu.
   */
  open: PropTypes.bool,

  /**
   * Callback function for translating ListBoxMenuIcon SVG title
   */
  translateWithId: PropTypes.func,

  /**
   * Specify feedback (mode) of the selection.
   * `top`: selected item jumps to top
   * `fixed`: selected item stays at it's position
   * `top-after-reopen`: selected item jump to top after reopen dropdown
   */
  selectionFeedback: PropTypes.oneOf(['top', 'fixed', 'top-after-reopen']),

  /**
   * Additional props passed to Downshift
   */
  downshiftProps: PropTypes.shape(Downshift.propTypes)
}));

_defineProperty(MultiSelect, "defaultProps", {
  compareItems: defaultCompareItems,
  disabled: false,
  locale: 'en',
  itemToString: defaultItemToString,
  initialSelectedItems: [],
  sortItems: defaultSortItems,
  type: 'default',
  light: false,
  title: false,
  open: false,
  selectionFeedback: 'top-after-reopen'
});

export { MultiSelect as default };