"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Dropdown = _interopRequireDefault(require("../Dropdown"));

var _Dropdown2 = _interopRequireDefault(require("./Dropdown.Skeleton"));

var _withState = _interopRequireDefault(require("../../tools/withState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var items = [{
  id: 'option-1',
  text: 'Option 1'
}, {
  id: 'option-2',
  text: 'Option 2'
}, {
  id: 'option-3',
  text: 'Option 3'
}, {
  id: 'option-4',
  text: 'Option 4'
}];
var stringItems = ['Option 1', 'Option 2', 'Option 3'];
var types = {
  'Default (default)': 'default',
  'Inline (inline)': 'inline'
};

var props = function props() {
  return {
    id: (0, _addonKnobs.text)('Dropdown ID (id)', 'carbon-dropdown-example'),
    type: (0, _addonKnobs.select)('Dropdown type (type)', types, 'default'),
    label: (0, _addonKnobs.text)('Label (label)', 'Dropdown menu options'),
    ariaLabel: (0, _addonKnobs.text)('Aria Label (ariaLabel)', 'Dropdown'),
    disabled: (0, _addonKnobs.boolean)('Disabled (disabled)', false),
    light: (0, _addonKnobs.boolean)('Light variant (light)', false),
    titleText: (0, _addonKnobs.text)('Title (titleText)', 'This is not a dropdown title.'),
    helperText: (0, _addonKnobs.text)('Helper text (helperText)', 'This is not some helper text.'),
    invalid: (0, _addonKnobs.boolean)('Show form validation UI (invalid)', false),
    invalidText: (0, _addonKnobs.text)('Form validation UI content (invalidText)', 'A valid value is required')
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

(0, _react2.storiesOf)('Dropdown', module).addDecorator(_addonKnobs.withKnobs).add('default', function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_Dropdown.default, _extends({}, props(), {
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: (0, _addonActions.action)('onChange')
  })));
}, {
  info: {
    text: 'Dropdown'
  }
}).add('items as strings', function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_Dropdown.default, _extends({}, props(), {
    items: stringItems,
    onChange: (0, _addonActions.action)('onChange')
  })));
}, {
  info: {
    text: 'Rendering an array of strings as `items`'
  }
}).add('items as components', function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_Dropdown.default, _extends({}, props(), {
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    itemToElement: itemToElement,
    onChange: (0, _addonActions.action)('onChange')
  })));
}, {
  info: {
    text: "Rendering items as custom components"
  }
}).add('fully controlled', function () {
  return _react.default.createElement(_withState.default, {
    initialState: {
      selectedItem: items[0]
    }
  }, function (_ref) {
    var state = _ref.state,
        setState = _ref.setState;
    return _react.default.createElement("div", {
      style: {
        width: 300
      }
    }, _react.default.createElement(_Dropdown.default, _extends({}, props(), {
      items: items,
      itemToString: function itemToString(item) {
        return item ? item.text : '';
      },
      onChange: function onChange(_ref2) {
        var selectedItem = _ref2.selectedItem;
        return setTimeout(function () {
          return setState({
            selectedItem: selectedItem
          });
        }, 1000);
      },
      selectedItem: state.selectedItem
    })));
  });
}, {
  info: {
    text: "\n            Sometimes you want to control everything.\n          "
  }
}).add('skeleton', function () {
  return _react.default.createElement("div", {
    style: {
      width: 300
    }
  }, _react.default.createElement(_Dropdown2.default, null), "\xA0", _react.default.createElement(_Dropdown2.default, {
    inline: true
  }));
}, {
  info: {
    text: "\n            Placeholder skeleton state to use when content is loading.\n          "
  }
});