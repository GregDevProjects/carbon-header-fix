"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _ComboBox = _interopRequireDefault(require("../ComboBox"));

var _withState = _interopRequireDefault(require("../../tools/withState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var items = [{
  id: 'option-0',
  text: 'Option 1'
}, {
  id: 'option-1',
  text: 'Option 2'
}, {
  id: 'option-2',
  text: 'Option 3',
  selected: true
}, {
  id: 'option-3',
  text: 'Option 4'
}, {
  id: 'option-4',
  text: 'An example option that is really long to show what should be done to handle long text'
}];

var props = function props() {
  return {
    id: (0, _addonKnobs.text)('Combobox ID (id)', 'carbon-combobox-example'),
    placeholder: (0, _addonKnobs.text)('Placeholder text (placeholder)', 'Filter...'),
    titleText: (0, _addonKnobs.text)('Title (titleText)', 'Combobox title'),
    helperText: (0, _addonKnobs.text)('Helper text (helperText)', 'Optional helper text here'),
    light: (0, _addonKnobs.boolean)('Light (light)', false),
    disabled: (0, _addonKnobs.boolean)('Disabled (disabled)', false),
    invalid: (0, _addonKnobs.boolean)('Invalid (invalid)', false),
    invalidText: (0, _addonKnobs.text)('Invalid text (invalidText)', 'A valid value is required'),
    onChange: (0, _addonActions.action)('onChange')
  };
};

var itemToElement = function itemToElement(item) {
  var itemAsArray = item.text.split(' ');
  return _react.default.createElement("div", null, _react.default.createElement("span", null, itemAsArray[0]), _react.default.createElement("span", {
    style: {
      color: 'blue'
    }
  }, " ", itemAsArray[1]));
};

(0, _react2.storiesOf)('ComboBox', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_ComboBox.default, _extends({
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    }
  }, props())));
}, {
  info: {
    text: 'ComboBox'
  }
}).add('items as components', function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_ComboBox.default, _extends({
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    itemToElement: itemToElement
  }, props())));
}, {
  info: {
    text: 'ComboBox'
  }
}).add('custom text input handling', function () {
  return _react.default.createElement(_withState.default, {
    initialState: {
      inputText: ''
    }
  }, function (_ref) {
    var state = _ref.state,
        setState = _ref.setState;
    return _react.default.createElement("div", {
      style: {
        width: 300
      }
    }, _react.default.createElement(_ComboBox.default, _extends({
      items: items,
      itemToString: function itemToString(item) {
        return item ? "".concat(item.text, " queried with ").concat(state.inputText) : '';
      },
      shouldFilterItem: function shouldFilterItem() {
        return true;
      },
      onInputChange: function onInputChange(text) {
        return setState({
          inputText: text
        });
      }
    }, props())));
  });
}, {
  info: {
    text: "Sometimes you want to perform an async action to trigger a backend call on input change."
  }
});