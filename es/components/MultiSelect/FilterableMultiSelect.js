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
import PropTypes from 'prop-types';
import React from 'react';
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
import { defaultFilterItems } from '../ComboBox/tools/filter';
var prefix = settings.prefix;

var FilterableMultiSelect =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FilterableMultiSelect, _React$Component);

  _createClass(FilterableMultiSelect, null, [{
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

  function FilterableMultiSelect(props) {
    var _this;

    _classCallCheck(this, FilterableMultiSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FilterableMultiSelect).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function (changes) {
      if (_this.props.onChange) {
        _this.props.onChange(changes);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnToggleMenu", function () {
      _this.setState(function (state) {
        return {
          isOpen: !state.isOpen
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnOuterClick", function () {
      _this.setState({
        isOpen: false,
        inputValue: ''
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
        case Downshift.stateChangeTypes.keyDownArrowUp:
        case Downshift.stateChangeTypes.itemMouseEnter:
          _this.setState({
            highlightedIndex: changes.highlightedIndex
          });

          break;

        case Downshift.stateChangeTypes.keyDownArrowDown:
          _this.setState({
            highlightedIndex: changes.highlightedIndex,
            isOpen: true
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
              // is the active element in thedocument, then keep the menu open
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

    _defineProperty(_assertThisInitialized(_this), "handleOnInputKeyDown", function (event) {
      event.stopPropagation();
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnInputValueChange", function (inputValue, _ref2) {
      var type = _ref2.type;
      if (type === Downshift.stateChangeTypes.changeInput) _this.setState(function () {
        if (Array.isArray(inputValue)) {
          return {
            inputValue: ''
          };
        }

        return {
          inputValue: inputValue || ''
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "clearInputValue", function (event) {
      event.stopPropagation();

      _this.setState({
        inputValue: ''
      });

      _this.inputNode && _this.inputNode.focus && _this.inputNode.focus();
    });

    _this.state = {
      highlightedIndex: null,
      isOpen: props.open,
      inputValue: '',
      topItems: []
    };
    return _this;
  }

  _createClass(FilterableMultiSelect, [{
    key: "render",
    value: function render() {
      var _cx,
          _this2 = this;

      var _this$state = this.state,
          highlightedIndex = _this$state.highlightedIndex,
          isOpen = _this$state.isOpen,
          inputValue = _this$state.inputValue;
      var _this$props = this.props,
          ariaLabel = _this$props.ariaLabel,
          containerClassName = _this$props.className,
          disabled = _this$props.disabled,
          filterItems = _this$props.filterItems,
          items = _this$props.items,
          itemToString = _this$props.itemToString,
          titleText = _this$props.titleText,
          helperText = _this$props.helperText,
          type = _this$props.type,
          initialSelectedItems = _this$props.initialSelectedItems,
          id = _this$props.id,
          locale = _this$props.locale,
          placeholder = _this$props.placeholder,
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
      var inputClasses = cx("".concat(prefix, "--text-input"), _defineProperty({}, "".concat(prefix, "--text-input--empty"), !this.state.inputValue));
      var input = React.createElement(Selection, {
        disabled: disabled,
        onChange: this.handleOnChange,
        initialSelectedItems: initialSelectedItems,
        render: function render(_ref3) {
          var selectedItems = _ref3.selectedItems,
              onItemChange = _ref3.onItemChange,
              clearSelection = _ref3.clearSelection;
          return React.createElement(Downshift, _extends({}, downshiftProps, {
            highlightedIndex: highlightedIndex,
            isOpen: isOpen,
            inputValue: inputValue,
            onInputValueChange: _this2.handleOnInputValueChange,
            onChange: onItemChange,
            itemToString: itemToString,
            onStateChange: _this2.handleOnStateChange,
            onOuterClick: _this2.handleOnOuterClick,
            selectedItem: selectedItems,
            render: function render(_ref4) {
              var _cx5;

              var getButtonProps = _ref4.getButtonProps,
                  getInputProps = _ref4.getInputProps,
                  getItemProps = _ref4.getItemProps,
                  getRootProps = _ref4.getRootProps,
                  isOpen = _ref4.isOpen,
                  inputValue = _ref4.inputValue,
                  selectedItem = _ref4.selectedItem;
              var className = cx("".concat(prefix, "--multi-select"), "".concat(prefix, "--combo-box"), "".concat(prefix, "--multi-select--filterable"), containerClassName, (_cx5 = {}, _defineProperty(_cx5, "".concat(prefix, "--multi-select--invalid"), invalid), _defineProperty(_cx5, "".concat(prefix, "--multi-select--open"), isOpen), _defineProperty(_cx5, "".concat(prefix, "--multi-select--inline"), inline), _defineProperty(_cx5, "".concat(prefix, "--multi-select--selected"), selectedItem.length > 0), _cx5));
              return React.createElement(ListBox, _extends({
                className: className,
                disabled: disabled,
                light: light,
                invalid: invalid,
                invalidText: invalidText,
                isOpen: isOpen
              }, getRootProps({
                refKey: 'innerRef'
              })), React.createElement(ListBox.Field, _extends({
                id: id,
                disabled: disabled,
                translateWithId: translateWithId
              }, getButtonProps({
                disabled: disabled
              })), selectedItem.length > 0 && React.createElement(ListBox.Selection, {
                clearSelection: clearSelection,
                selectionCount: selectedItem.length,
                translateWithId: translateWithId,
                disabled: disabled
              }), React.createElement("input", _extends({
                className: inputClasses,
                "aria-controls": "".concat(id, "__menu"),
                "aria-autocomplete": "list",
                ref: function ref(el) {
                  return _this2.inputNode = el;
                }
              }, getInputProps({
                disabled: disabled,
                id: id,
                placeholder: placeholder,
                onKeyDown: _this2.handleOnInputKeyDown
              }))), invalid && React.createElement(WarningFilled16, {
                className: "".concat(prefix, "--list-box__invalid-icon")
              }), inputValue && isOpen && React.createElement(ListBox.Selection, {
                clearSelection: _this2.clearInputValue,
                disabled: disabled
              }), React.createElement(ListBox.MenuIcon, {
                isOpen: isOpen,
                translateWithId: translateWithId
              })), isOpen && React.createElement(ListBox.Menu, {
                "aria-label": ariaLabel,
                id: id
              }, sortItems(filterItems(items, {
                itemToString: itemToString,
                inputValue: inputValue
              }), {
                selectedItems: {
                  top: selectedItems,
                  fixed: [],
                  'top-after-reopen': _this2.state.topItems
                }[_this2.props.selectionFeedback],
                itemToString: itemToString,
                compareItems: compareItems,
                locale: locale
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
                  id: itemProps.id,
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

  return FilterableMultiSelect;
}(React.Component);

_defineProperty(FilterableMultiSelect, "propTypes", _objectSpread({}, sortingPropTypes, {
  /**
   * 'aria-label' of the ListBox component.
   */
  ariaLabel: PropTypes.string,

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
   * Generic `placeholder` that will be used as the textual representation of
   * what this field is for
   */
  placeholder: PropTypes.string.isRequired,

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
   * Specify feedback (mode) of the selection.
   * `top`: selected item jumps to top
   * `fixed`: selected item stays at it's position
   * `top-after-reopen`: selected item jump to top after reopen dropdown
   */
  selectionFeedback: PropTypes.oneOf(['top', 'fixed', 'top-after-reopen']),

  /**
   * Callback function for translating ListBoxMenuIcon SVG title
   */
  translateWithId: PropTypes.func,

  /**
   * Additional props passed to Downshift
   */
  downshiftProps: PropTypes.shape(Downshift.propTypes)
}));

_defineProperty(FilterableMultiSelect, "defaultProps", {
  ariaLabel: 'Choose an item',
  compareItems: defaultCompareItems,
  disabled: false,
  filterItems: defaultFilterItems,
  initialSelectedItems: [],
  itemToString: defaultItemToString,
  locale: 'en',
  sortItems: defaultSortItems,
  light: false,
  open: false,
  selectionFeedback: 'top-after-reopen'
});

export { FilterableMultiSelect as default };