"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _TextInput2 = _interopRequireDefault(require("../TextInput/TextInput.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var types = {
  None: '',
  'Text (text)': 'text',
  'For email (email)': 'email',
  'For password (password)': 'password'
};

function ControlledPasswordInputApp(props) {
  var _useState = (0, _react.useState)('password'),
      _useState2 = _slicedToArray(_useState, 2),
      type = _useState2[0],
      setType = _useState2[1];

  var togglePasswordVisibility = function togglePasswordVisibility() {
    setType(type === 'password' ? 'text' : 'password');
  };

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_TextInput.default.ControlledPasswordInput, _extends({
    type: type,
    togglePasswordVisibility: togglePasswordVisibility
  }, props)), _react.default.createElement("button", {
    onClick: function onClick() {
      return setType('text');
    }
  }, "Show password"), _react.default.createElement("button", {
    onClick: function onClick() {
      return setType('password');
    }
  }, "Hide password"));
}

var props = {
  TextInputProps: function TextInputProps() {
    return {
      className: 'some-class',
      id: 'test2',
      defaultValue: (0, _addonKnobs.text)('Default value (defaultValue)', 'This is not a default value'),
      labelText: (0, _addonKnobs.text)('Label text (labelText)', 'Text Input label'),
      placeholder: (0, _addonKnobs.text)('Placeholder text (placeholder)', 'Placeholder text'),
      light: (0, _addonKnobs.boolean)('Light variant (light)', false),
      disabled: (0, _addonKnobs.boolean)('Disabled (disabled)', false),
      hideLabel: (0, _addonKnobs.boolean)('No label (hideLabel)', false),
      invalid: (0, _addonKnobs.boolean)('Show form validation UI (invalid)', false),
      invalidText: (0, _addonKnobs.text)('Form validation UI content (invalidText)', 'A valid value is required'),
      helperText: (0, _addonKnobs.text)('Helper text (helperText)', 'Optional helper text.'),
      onClick: (0, _addonActions.action)('onClick'),
      onChange: (0, _addonActions.action)('onChange')
    };
  },
  PasswordInputProps: function PasswordInputProps() {
    return {
      tooltipPosition: (0, _addonKnobs.select)('Tooltip position (tooltipPosition)', ['top', 'right', 'bottom', 'left'], 'bottom'),
      tooltipAlignment: (0, _addonKnobs.select)('Tooltip alignment (tooltipAlignment)', ['start', 'center', 'end'], 'center')
    };
  }
};
_TextInput.default.displayName = 'TextInput';
(0, _react2.storiesOf)('TextInput', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  return _react.default.createElement(_TextInput.default, _extends({
    type: (0, _addonKnobs.select)('Form control type (type)', types, 'text')
  }, props.TextInputProps()));
}, {
  info: {
    text: "\n            Text fields enable the user to interact with and input data. A single line\n            field is used when the input anticipated by the user is a single line of\n            text as opposed to a paragraph.\n            The default type is 'text' and its value can be either 'string' or 'number'.\n          "
  }
}).add('Toggle password visibility', function () {
  return _react.default.createElement(_TextInput.default.PasswordInput, _extends({}, props.TextInputProps(), props.PasswordInputProps()));
}, {
  info: {
    text: "\n          Text field with password visibility toggle.\n        "
  }
}).add('Fully controlled toggle password visibility', function () {
  ControlledPasswordInputApp.__docgenInfo = _objectSpread({}, _TextInput.default.PasswordInput.__docgenInfo, {
    props: _objectSpread({}, _TextInput.default.PasswordInput.__docgenInfo.props)
  });
  return _react.default.createElement(ControlledPasswordInputApp, _extends({}, props.TextInputProps(), props.PasswordInputProps()));
}, {
  info: {
    text: "\n        Fully controlled text field with password visibility toggle.\n      "
  }
}).add('skeleton', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_TextInput2.default, null), _react.default.createElement("br", null), _react.default.createElement(_TextInput2.default, {
    hideLabel: true
  }));
}, {
  info: {
    text: "\n            Placeholder skeleton state to use when content is loading.\n            "
  }
});