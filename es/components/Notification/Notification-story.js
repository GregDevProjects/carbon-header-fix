function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { ToastNotification, InlineNotification, NotificationActionButton } from '../Notification';
var kinds = {
  'Error (error)': 'error',
  'Info (info)': 'info',
  'Success (success)': 'success',
  'Warning (warning)': 'warning'
};

var notificationProps = function notificationProps() {
  return {
    kind: select('The notification kind (kind)', kinds, 'info'),
    lowContrast: boolean('Use low contrast variant (lowContrast)', false),
    role: text('ARIA role (role)', 'alert'),
    title: text('Title (title)', 'Notification title'),
    subtitle: text('Subtitle (subtitle)', 'Subtitle text goes here.'),
    iconDescription: text('Icon description (iconDescription)', 'describes the close button'),
    hideCloseButton: boolean('Hide close button (hideCloseButton)', false),
    onCloseButtonClick: action('onCloseButtonClick')
  };
};

storiesOf('Notifications', module).addDecorator(withKnobs).add('Toast', function () {
  return React.createElement(ToastNotification, _extends({}, notificationProps(), {
    caption: text('Caption (caption)', 'Time stamp [00:00:00]'),
    style: {
      minWidth: '30rem',
      marginBottom: '.5rem'
    }
  }));
}).add('inline', function () {
  return React.createElement(InlineNotification, _extends({}, notificationProps(), {
    actions: React.createElement(NotificationActionButton, {
      onClick: action('NotificationActionButton onClick')
    }, text('Action (NotificationActionButton > children)', 'Action'))
  }));
});