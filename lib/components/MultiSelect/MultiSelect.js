"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _downshift = _interopRequireDefault(require("downshift"));

var _lodash = _interopRequireDefault(require("lodash.isequal"));

var _carbonComponents = require("carbon-components");

var _iconsReact = require("@carbon/icons-react");

var _ListBox = _interopRequireDefault(require("../ListBox"));

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

var _Selection = _interopRequireDefault(require("../../internal/Selection"));

var _MultiSelectPropTypes = require("./MultiSelectPropTypes");

var _itemToString = require("./tools/itemToString");

var _sorting = require("./tools/sorting");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var prefix = _carbonComponents.settings.prefix;

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
        case _downshift.default.stateChangeTypes.keyDownArrowDown:
        case _downshift.default.stateChangeTypes.keyDownArrowUp:
        case _downshift.default.stateChangeTypes.itemMouseEnter:
          _this.setState({
            highlightedIndex: changes.highlightedIndex
          });

          break;

        case _downshift.default.stateChangeTypes.keyDownEscape:
        case _downshift.default.stateChangeTypes.mouseUp:
          _this.setState({
            isOpen: false
          });

          break;
        // Opt-in to some cases where we should be toggling the menu based on
        // a given key press or mouse handler
        // Reference: https://github.com/paypal/downshift/issues/206

        case _downshift.default.stateChangeTypes.clickButton:
        case _downshift.default.stateChangeTypes.keyDownSpaceButton:
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
      var wrapperClasses = (0, _classnames.default)("".concat(prefix, "--multi-select__wrapper"), "".concat(prefix, "--list-box__wrapper"), (_cx = {}, _defineProperty(_cx, "".concat(prefix, "--multi-select__wrapper--inline"), inline), _defineProperty(_cx, "".concat(prefix, "--list-box__wrapper--inline"), inline), _defineProperty(_cx, "".concat(prefix, "--multi-select__wrapper--inline--invalid"), inline && invalid), _defineProperty(_cx, "".concat(prefix, "--list-box__wrapper--inline--invalid"), inline && invalid), _cx));
      var titleClasses = (0, _classnames.default)("".concat(prefix, "--label"), _defineProperty({}, "".concat(prefix, "--label--disabled"), disabled));
      var title = titleText ? _react.default.createElement("label", {
        htmlFor: id,
        className: titleClasses
      }, titleText) : null;
      var helperClasses = (0, _classnames.default)("".concat(prefix, "--form__helper-text"), _defineProperty({}, "".concat(prefix, "--form__helper-text--disabled"), disabled));
      var helper = helperText ? _react.default.createElement("div", {
        className: helperClasses
      }, helperText) : null;

      var input = _react.default.createElement(_Selection.default, {
        disabled: disabled,
        onChange: this.handleOnChange,
        initialSelectedItems: initialSelectedItems,
        render: function render(_ref2) {
          var selectedItems = _ref2.selectedItems,
              onItemChange = _ref2.onItemChange,
              clearSelection = _ref2.clearSelection;
          return _react.default.createElement(_downshift.default, _extends({}, downshiftProps, {
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
              var className = (0, _classnames.default)("".concat(prefix, "--multi-select"), containerClassName, (_cx4 = {}, _defineProperty(_cx4, "".concat(prefix, "--multi-select--invalid"), invalid), _defineProperty(_cx4, "".concat(prefix, "--multi-select--inline"), inline), _defineProperty(_cx4, "".concat(prefix, "--multi-select--selected"), selectedItem.length > 0), _cx4));
              return _react.default.createElement(_ListBox.default, _extends({
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
              })), invalid && _react.default.createElement(_iconsReact.WarningFilled16, {
                className: "".concat(prefix, "--list-box__invalid-icon")
              }), _react.default.createElement(_ListBox.default.Field, _extends({
                id: id,
                tabIndex: "0",
                disabled: disabled,
                "aria-disabled": disabled,
                translateWithId: translateWithId
              }, getButtonProps({
                disabled: disabled
              })), selectedItem.length > 0 && _react.default.createElement(_ListBox.default.Selection, {
                clearSelection: !disabled ? clearSelection : noop,
                selectionCount: selectedItem.length,
                translateWithId: translateWithId,
                disabled: disabled
              }), _react.default.createElement("span", {
                className: "".concat(prefix, "--list-box__label")
              }, label), _react.default.createElement(_ListBox.default.MenuIcon, {
                isOpen: isOpen,
                translateWithId: translateWithId
              })), isOpen && _react.default.createElement(_ListBox.default.Menu, {
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
                  return (0, _lodash.default)(selected, item);
                }).length > 0;
                return _react.default.createElement(_ListBox.default.MenuItem, _extends({
                  key: itemProps.id,
                  isActive: isChecked,
                  isHighlighted: highlightedIndex === index
                }, itemProps), _react.default.createElement(_Checkbox.default, {
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

      return _react.default.createElement("div", {
        className: wrapperClasses
      }, title, !inline && helper, input);
    }
  }]);

  return MultiSelect;
}(_react.default.Component);

exports.default = MultiSelect;

_defineProperty(MultiSelect, "propTypes", _objectSpread({}, _MultiSelectPropTypes.sortingPropTypes, {
  /**
   * Disable the control
   */
  disabled: _propTypes.default.bool,

  /**
   * Specify a custom `id`
   */
  id: _propTypes.default.string.isRequired,

  /**
   * We try to stay as generic as possible here to allow individuals to pass
   * in a collection of whatever kind of data structure they prefer
   */
  items: _propTypes.default.array.isRequired,

  /**
   * Allow users to pass in arbitrary items from their collection that are
   * pre-selected
   */
  initialSelectedItems: _propTypes.default.array,

  /**
   * Helper function passed to downshift that allows the library to render a
   * given item to a string label. By default, it extracts the `label` field
   * from a given item to serve as the item label in the list.
   */
  itemToString: _propTypes.default.func,

  /**
   * Generic `label` that will be used as the textual representation of what
   * this field is for
   */
  label: _propTypes.default.node.isRequired,

  /**
   * Specify the locale of the control. Used for the default `compareItems`
   * used for sorting the list of items in the control.
   */
  locale: _propTypes.default.string,

  /**
   * `onChange` is a utility for this controlled component to communicate to a
   * consuming component what kind of internal state changes are occuring.
   */
  onChange: _propTypes.default.func,

  /**
   * Specify 'inline' to create an inline multi-select.
   */
  type: _propTypes.default.oneOf(['default', 'inline']),

  /**
   * Specify title to show title on hover
   */
  useTitleInItem: _propTypes.default.bool,

  /**
   * `true` to use the light version.
   */
  light: _propTypes.default.bool,

  /**
   * Is the current selection invalid?
   */
  invalid: _propTypes.default.bool,

  /**
   * If invalid, what is the error?
   */
  invalidText: _propTypes.default.string,

  /**
   * Initialize the component with an open(`true`)/closed(`false`) menu.
   */
  open: _propTypes.default.bool,

  /**
   * Callback function for translating ListBoxMenuIcon SVG title
   */
  translateWithId: _propTypes.default.func,

  /**
   * Specify feedback (mode) of the selection.
   * `top`: selected item jumps to top
   * `fixed`: selected item stays at it's position
   * `top-after-reopen`: selected item jump to top after reopen dropdown
   */
  selectionFeedback: _propTypes.default.oneOf(['top', 'fixed', 'top-after-reopen']),

  /**
   * Additional props passed to Downshift
   */
  downshiftProps: _propTypes.default.shape(_downshift.default.propTypes)
}));

_defineProperty(MultiSelect, "defaultProps", {
  compareItems: _sorting.defaultCompareItems,
  disabled: false,
  locale: 'en',
  itemToString: _itemToString.defaultItemToString,
  initialSelectedItems: [],
  sortItems: _sorting.defaultSortItems,
  type: 'default',
  light: false,
  title: false,
  open: false,
  selectionFeedback: 'top-after-reopen'
});