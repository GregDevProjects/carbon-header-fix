"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _Tag = _interopRequireWildcard(require("../Tag"));

var _Tag2 = _interopRequireDefault(require("../Tag/Tag.Skeleton"));

var _preview = require("@storybook/addon-actions/dist/preview");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = {
  regular: function regular() {
    return {
      type: (0, _addonKnobs.select)('Tag type (type)', _Tag.types.reduce(function (acc, type) {
        return _objectSpread({}, acc, _defineProperty({}, "".concat(type, " (").concat(type, ")"), type));
      }, {}), 'red'),
      disabled: (0, _addonKnobs.boolean)('Disabled (disabled)', false),
      title: 'Clear Selection'
    };
  },
  filter: function filter() {
    return _objectSpread({}, this.regular(), {
      onClick: (0, _preview.action)('onClick')
    });
  }
};
(0, _react2.storiesOf)('Tag', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  return _react.default.createElement(_Tag.default, _extends({
    className: "some-class"
  }, props.regular()), (0, _addonKnobs.text)('Content (children)', 'This is not a tag'));
}, {
  info: {
    text: "\n            Tags are used for items that need to be labeled, categorized, or organized using keywords that describe them.\n            The example below shows how the Tag component can be used. Each type has a default message describing the type,\n            but a custom message can also be applied.\n          "
  }
}).add('Filter', function () {
  return _react.default.createElement(_Tag.default, _extends({
    className: "some-class"
  }, props.filter(), {
    filter: true
  }), (0, _addonKnobs.text)('Content (children)', 'This is not a tag'));
}, {
  info: {
    text: "\n            Tags are used for items that need to be labeled, categorized, or organized using keywords that describe them.\n            The example below shows how the Tag component can be used. Each type has a default message describing the type,\n            but a custom message can also be applied.\n          "
  }
}).add('skeleton', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_Tag2.default, null));
}, {
  info: {
    text: "\n          Placeholder skeleton state to use when content is loading.\n          "
  }
});