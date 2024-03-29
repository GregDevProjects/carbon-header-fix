"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Notification = require("../Notification");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var kinds = {
  'Error (error)': 'error',
  'Info (info)': 'info',
  'Success (success)': 'success',
  'Warning (warning)': 'warning'
};

var notificationProps = function notificationProps() {
  return {
    kind: (0, _addonKnobs.select)('The notification kind (kind)', kinds, 'info'),
    lowContrast: (0, _addonKnobs.boolean)('Use low contrast variant (lowContrast)', false),
    role: (0, _addonKnobs.text)('ARIA role (role)', 'alert'),
    title: (0, _addonKnobs.text)('Title (title)', 'Notification title'),
    subtitle: (0, _addonKnobs.text)('Subtitle (subtitle)', 'Subtitle text goes here.'),
    iconDescription: (0, _addonKnobs.text)('Icon description (iconDescription)', 'describes the close button'),
    hideCloseButton: (0, _addonKnobs.boolean)('Hide close button (hideCloseButton)', false),
    onCloseButtonClick: (0, _addonActions.action)('onCloseButtonClick')
  };
};

(0, _react2.storiesOf)('Notifications', module).addDecorator(_addonKnobs.withKnobs).add('Toast', function () {
  return _react.default.createElement(_Notification.ToastNotification, _extends({}, notificationProps(), {
    caption: (0, _addonKnobs.text)('Caption (caption)', 'Time stamp [00:00:00]'),
    style: {
      minWidth: '30rem',
      marginBottom: '.5rem'
    }
  }));
}).add('inline', function () {
  return _react.default.createElement(_Notification.InlineNotification, _extends({}, notificationProps(), {
    actions: _react.default.createElement(_Notification.NotificationActionButton, {
      onClick: (0, _addonActions.action)('NotificationActionButton onClick')
    }, (0, _addonKnobs.text)('Action (NotificationActionButton > children)', 'Action'))
  }));
});