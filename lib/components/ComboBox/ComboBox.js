"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _downshift = _interopRequireDefault(require("downshift"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _carbonComponents = require("carbon-components");

var _iconsReact = require("@carbon/icons-react");

var _ListBox = _interopRequireWildcard(require("../ListBox"));

var _keyboard = require("../../internal/keyboard");

var _setupGetInstanceId = _interopRequireDefault(require("../../tools/setupGetInstanceId"));

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

var defaultItemToString = function defaultItemToString(item) {
  if (typeof item === 'string') {
    return item;
  }

  return item && item.label;
};

var defaultShouldFilterItem = function defaultShouldFilterItem() {
  return true;
};

var getInputValue = function getInputValue(props, state) {
  if (props.initialSelectedItem) {
    return props.itemToString(props.initialSelectedItem);
  }

  return state.inputValue || '';
};

var findHighlightedIndex = function findHighlightedIndex(_ref, inputValue) {
  var items = _ref.items,
      itemToString = _ref.itemToString;

  if (!inputValue) {
    return -1;
  }

  var searchValue = inputValue.toLowerCase();

  for (var i = 0; i < items.length; i++) {
    var item = itemToString(items[i]).toLowerCase();

    if (item.indexOf(searchValue) !== -1) {
      return i;
    }
  }

  return -1;
};

var getInstanceId = (0, _setupGetInstanceId.default)();

var ComboBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ComboBox, _React$Component);

  function ComboBox(props) {
    var _this;

    _classCallCheck(this, ComboBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ComboBox).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "filterItems", function (items, itemToString, inputValue) {
      return items.filter(function (item) {
        return _this.props.shouldFilterItem({
          item: item,
          itemToString: itemToString,
          inputValue: inputValue
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnChange", function (selectedItem) {
      if (_this.props.onChange) {
        _this.props.onChange({
          selectedItem: selectedItem
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnStateChange", function (newState, _ref2) {
      var setHighlightedIndex = _ref2.setHighlightedIndex;

      if (Object.prototype.hasOwnProperty.call(newState, 'inputValue')) {
        var inputValue = newState.inputValue;
        var onInputChange = _this.props.onInputChange;
        setHighlightedIndex(findHighlightedIndex(_this.props, inputValue));

        _this.setState(function () {
          return {
            // Default to empty string if we have a false-y `inputValue`
            inputValue: inputValue || ''
          };
        }, function () {
          if (onInputChange) {
            onInputChange(inputValue);
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onToggleClick", function (isOpen) {
      return function (event) {
        if (event.target === _this.textInput.current && isOpen) {
          event.preventDownshiftDefault = true;
          event.persist();
        }
      };
    });

    _this.textInput = _react.default.createRef();
    _this.comboBoxInstanceId = getInstanceId();
    _this.state = {
      inputValue: getInputValue(props, {})
    };
    return _this;
  }

  _createClass(ComboBox, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState(function (state) {
        return {
          inputValue: getInputValue(nextProps, state)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          containerClassName = _this$props.className,
          disabled = _this$props.disabled,
          id = _this$props.id,
          items = _this$props.items,
          itemToString = _this$props.itemToString,
          itemToElement = _this$props.itemToElement,
          titleText = _this$props.titleText,
          helperText = _this$props.helperText,
          placeholder = _this$props.placeholder,
          initialSelectedItem = _this$props.initialSelectedItem,
          ariaLabel = _this$props.ariaLabel,
          translateWithId = _this$props.translateWithId,
          invalid = _this$props.invalid,
          invalidText = _this$props.invalidText,
          light = _this$props.light,
          type = _this$props.type,
          shouldFilterItem = _this$props.shouldFilterItem,
          onChange = _this$props.onChange,
          onInputChange = _this$props.onInputChange,
          downshiftProps = _this$props.downshiftProps,
          rest = _objectWithoutProperties(_this$props, ["className", "disabled", "id", "items", "itemToString", "itemToElement", "titleText", "helperText", "placeholder", "initialSelectedItem", "ariaLabel", "translateWithId", "invalid", "invalidText", "light", "type", "shouldFilterItem", "onChange", "onInputChange", "downshiftProps"]);

      var className = (0, _classnames.default)("".concat(prefix, "--combo-box"), containerClassName);
      var titleClasses = (0, _classnames.default)("".concat(prefix, "--label"), _defineProperty({}, "".concat(prefix, "--label--disabled"), disabled));
      var title = titleText ? _react.default.createElement("label", {
        htmlFor: id,
        className: titleClasses
      }, titleText) : null;
      var helperClasses = (0, _classnames.default)("".concat(prefix, "--form__helper-text"), _defineProperty({}, "".concat(prefix, "--form__helper-text--disabled"), disabled));
      var helper = helperText ? _react.default.createElement("div", {
        className: helperClasses
      }, helperText) : null;
      var wrapperClasses = (0, _classnames.default)("".concat(prefix, "--list-box__wrapper"));
      var comboBoxA11yId = "combobox-a11y-".concat(this.comboBoxInstanceId);
      var inputClasses = (0, _classnames.default)("".concat(prefix, "--text-input"), _defineProperty({}, "".concat(prefix, "--text-input--empty"), !this.state.inputValue)); // needs to be Capitalized for react to render it correctly

      var ItemToElement = itemToElement;

      var input = _react.default.createElement(_downshift.default, _extends({}, downshiftProps, {
        onChange: this.handleOnChange,
        onStateChange: this.handleOnStateChange,
        inputValue: this.state.inputValue || '',
        itemToString: itemToString,
        defaultSelectedItem: initialSelectedItem
      }), function (_ref3) {
        var getButtonProps = _ref3.getButtonProps,
            getInputProps = _ref3.getInputProps,
            getItemProps = _ref3.getItemProps,
            getRootProps = _ref3.getRootProps,
            isOpen = _ref3.isOpen,
            inputValue = _ref3.inputValue,
            selectedItem = _ref3.selectedItem,
            highlightedIndex = _ref3.highlightedIndex,
            clearSelection = _ref3.clearSelection,
            toggleMenu = _ref3.toggleMenu;
        return _react.default.createElement(_ListBox.default, _extends({
          className: className,
          disabled: disabled,
          invalid: invalid,
          id: comboBoxA11yId,
          "aria-label": ariaLabel,
          invalidText: invalidText,
          isOpen: isOpen,
          light: light
        }, getRootProps({
          refKey: 'innerRef'
        })), _react.default.createElement(_ListBox.default.Field, _extends({
          id: id,
          disabled: disabled,
          translateWithId: translateWithId
        }, getButtonProps({
          disabled: disabled,
          onClick: _this2.onToggleClick(isOpen)
        })), _react.default.createElement("input", _extends({
          className: inputClasses,
          "aria-labelledby": comboBoxA11yId,
          tabIndex: "0",
          "aria-disabled": disabled,
          "aria-controls": isOpen ? "".concat(id, "__menu") : null,
          "aria-owns": isOpen ? "".concat(id, "__menu") : null,
          "aria-autocomplete": "list",
          ref: _this2.textInput
        }, rest, getInputProps({
          disabled: disabled,
          id: id,
          placeholder: placeholder,
          onKeyDown: function onKeyDown(event) {
            event.stopPropagation();

            if ((0, _keyboard.match)(event, _keyboard.keys.Enter)) {
              toggleMenu();
            }
          }
        }))), invalid && _react.default.createElement(_iconsReact.WarningFilled16, {
          className: "".concat(prefix, "--list-box__invalid-icon")
        }), inputValue && _react.default.createElement(_ListBox.default.Selection, {
          clearSelection: clearSelection,
          translateWithId: translateWithId,
          disabled: disabled
        }), _react.default.createElement(_ListBox.default.MenuIcon, {
          isOpen: isOpen,
          translateWithId: translateWithId
        })), isOpen && _react.default.createElement(_ListBox.default.Menu, {
          "aria-label": ariaLabel,
          id: id
        }, _this2.filterItems(items, itemToString, inputValue).map(function (item, index) {
          return _react.default.createElement(_ListBox.default.MenuItem, _extends({
            key: itemToString(item),
            isActive: selectedItem === item,
            isHighlighted: highlightedIndex === index || selectedItem && selectedItem.id === item.id || false
          }, getItemProps({
            item: item,
            index: index
          })), itemToElement ? _react.default.createElement(ItemToElement, _extends({
            key: itemToString(item)
          }, item)) : itemToString(item));
        })));
      });

      return _react.default.createElement("div", {
        className: wrapperClasses
      }, title, helper, input);
    }
  }]);

  return ComboBox;
}(_react.default.Component);

exports.default = ComboBox;

_defineProperty(ComboBox, "propTypes", {
  /**
   * 'aria-label' of the ListBox component.
   */
  ariaLabel: _propTypes.default.string,

  /**
   * An optional className to add to the container node
   */
  className: _propTypes.default.string,

  /**
   * Specify if the control should be disabled, or not
   */
  disabled: _propTypes.default.bool,

  /**
   * Specify a custom `id` for the input
   */
  id: _propTypes.default.string.isRequired,

  /**
   * Allow users to pass in an arbitrary item or a string (in case their items are an array of strings)
   * from their collection that are pre-selected
   */
  initialSelectedItem: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),

  /**
   * We try to stay as generic as possible here to allow individuals to pass
   * in a collection of whatever kind of data structure they prefer
   */
  items: _propTypes.default.array.isRequired,

  /**
   * Helper function passed to downshift that allows the library to render a
   * given item to a string label. By default, it extracts the `label` field
   * from a given item to serve as the item label in the list
   */
  itemToString: _propTypes.default.func,

  /**
   * Optional function to render items as custom components instead of strings.
   * Defaults to null and is overriden by a getter
   */
  itemToElement: _propTypes.default.func,

  /**
   * `onChange` is a utility for this controlled component to communicate to a
   * consuming component when a specific dropdown item is selected.
   * @param {{ selectedItem }}
   */
  onChange: _propTypes.default.func.isRequired,

  /**
   * Used to provide a placeholder text node before a user enters any input.
   * This is only present if the control has no items selected
   */
  placeholder: _propTypes.default.string.isRequired,

  /**
   * Specify your own filtering logic by passing in a `shouldFilterItem`
   * function that takes in the current input and an item and passes back
   * whether or not the item should be filtered.
   */
  shouldFilterItem: _propTypes.default.func,

  /**
   * Specify if the currently selected value is invalid.
   */
  invalid: _propTypes.default.bool,

  /**
   * Message which is displayed if the value is invalid.
   */
  invalidText: _propTypes.default.string,

  /**
   * Specify a custom translation function that takes in a message identifier
   * and returns the localized string for the message
   */
  translateWithId: _propTypes.default.func,

  /**
   * Currently supports either the default type, or an inline variant
   */
  type: _ListBox.PropTypes.ListBoxType,

  /**
   * Callback function to notify consumer when the text input changes.
   * This provides support to change available items based on the text.
   * @param {string} inputText
   */
  onInputChange: _propTypes.default.func,

  /**
   * should use "light theme" (white background)?
   */
  light: _propTypes.default.bool,

  /**
   * Additional props passed to Downshift
   */
  downshiftProps: _propTypes.default.shape(_downshift.default.propTypes)
});

_defineProperty(ComboBox, "defaultProps", {
  disabled: false,
  itemToString: defaultItemToString,
  itemToElement: null,
  shouldFilterItem: defaultShouldFilterItem,
  type: 'default',
  ariaLabel: 'Choose an item',
  light: false
});