function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import TextInput from '../TextInput';
import TextInputSkeleton from '../TextInput/TextInput.Skeleton';
var types = {
  None: '',
  'Text (text)': 'text',
  'For email (email)': 'email',
  'For password (password)': 'password'
};

function ControlledPasswordInputApp(props) {
  var _useState = useState('password'),
      _useState2 = _slicedToArray(_useState, 2),
      type = _useState2[0],
      setType = _useState2[1];

  var togglePasswordVisibility = function togglePasswordVisibility() {
    setType(type === 'password' ? 'text' : 'password');
  };

  return React.createElement(React.Fragment, null, React.createElement(TextInput.ControlledPasswordInput, _extends({
    type: type,
    togglePasswordVisibility: togglePasswordVisibility
  }, props)), React.createElement("button", {
    onClick: function onClick() {
      return setType('text');
    }
  }, "Show password"), React.createElement("button", {
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
      defaultValue: text('Default value (defaultValue)', 'This is not a default value'),
      labelText: text('Label text (labelText)', 'Text Input label'),
      placeholder: text('Placeholder text (placeholder)', 'Placeholder text'),
      light: boolean('Light variant (light)', false),
      disabled: boolean('Disabled (disabled)', false),
      hideLabel: boolean('No label (hideLabel)', false),
      invalid: boolean('Show form validation UI (invalid)', false),
      invalidText: text('Form validation UI content (invalidText)', 'A valid value is required'),
      helperText: text('Helper text (helperText)', 'Optional helper text.'),
      onClick: action('onClick'),
      onChange: action('onChange')
    };
  },
  PasswordInputProps: function PasswordInputProps() {
    return {
      tooltipPosition: select('Tooltip position (tooltipPosition)', ['top', 'right', 'bottom', 'left'], 'bottom'),
      tooltipAlignment: select('Tooltip alignment (tooltipAlignment)', ['start', 'center', 'end'], 'center')
    };
  }
};
TextInput.displayName = 'TextInput';
storiesOf('TextInput', module).addDecorator(withKnobs).add('Default', function () {
  return React.createElement(TextInput, _extends({
    type: select('Form control type (type)', types, 'text')
  }, props.TextInputProps()));
}, {
  info: {
    text: "\n            Text fields enable the user to interact with and input data. A single line\n            field is used when the input anticipated by the user is a single line of\n            text as opposed to a paragraph.\n            The default type is 'text' and its value can be either 'string' or 'number'.\n          "
  }
}).add('Toggle password visibility', function () {
  return React.createElement(TextInput.PasswordInput, _extends({}, props.TextInputProps(), props.PasswordInputProps()));
}, {
  info: {
    text: "\n          Text field with password visibility toggle.\n        "
  }
}).add('Fully controlled toggle password visibility', function () {
  ControlledPasswordInputApp.__docgenInfo = _objectSpread({}, TextInput.PasswordInput.__docgenInfo, {
    props: _objectSpread({}, TextInput.PasswordInput.__docgenInfo.props)
  });
  return React.createElement(ControlledPasswordInputApp, _extends({}, props.TextInputProps(), props.PasswordInputProps()));
}, {
  info: {
    text: "\n        Fully controlled text field with password visibility toggle.\n      "
  }
}).add('skeleton', function () {
  return React.createElement("div", null, React.createElement(TextInputSkeleton, null), React.createElement("br", null), React.createElement(TextInputSkeleton, {
    hideLabel: true
  }));
}, {
  info: {
    text: "\n            Placeholder skeleton state to use when content is loading.\n            "
  }
});