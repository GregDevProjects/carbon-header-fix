function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
import { withReadme } from 'storybook-readme';
import OverflowMenu from '../OverflowMenu';
import OverflowMenuItem from '../OverflowMenuItem';
import OverflowREADME from './README.md';
var directions = {
  'Bottom of the trigger button (bottom)': 'bottom',
  'Top of the trigger button (top)': 'top'
};
var props = {
  menu: function menu() {
    return {
      direction: select('Menu direction (direction)', directions, 'bottom'),
      ariaLabel: text('ARIA label (ariaLabel)', 'Menu'),
      iconDescription: text('Icon description (iconDescription)', ''),
      flipped: boolean('Flipped (flipped)', false),
      onClick: action('onClick'),
      onFocus: action('onFocus'),
      onKeyDown: action('onKeyDown'),
      onClose: action('onClose'),
      onOpen: action('onOpen')
    };
  },
  menuItem: function menuItem() {
    return {
      className: 'some-class',
      disabled: boolean('Disabled (disabled)', false),
      requireTitle: boolean('Use hover over text for menu item (requireTitle)', false),
      onClick: action('onClick')
    };
  }
};

var OverflowMenuExample = function OverflowMenuExample(_ref) {
  var overflowMenuProps = _ref.overflowMenuProps,
      overflowMenuItemProps = _ref.overflowMenuItemProps;
  return React.createElement(React.Fragment, null, React.createElement(OverflowMenu, overflowMenuProps, React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Option 1",
    primaryFocus: true
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Option 2 is an example of a really long string and how we recommend handling this",
    requireTitle: true
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Option 3"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Option 4"
  })), React.createElement(OverflowMenuItem, _extends({}, overflowMenuItemProps, {
    itemText: "Danger option",
    hasDivider: true,
    isDelete: true
  }))));
};

storiesOf('OverflowMenu', module).addDecorator(withKnobs).add('basic', withReadme(OverflowREADME, function () {
  return React.createElement(OverflowMenuExample, {
    overflowMenuProps: props.menu(),
    overflowMenuItemProps: props.menuItem()
  });
}), {
  info: {
    text: "\n            Overflow Menu is used when additional options are available to the user and there is a space constraint.\n            Create Overflow Menu Item components for each option on the menu.\n          "
  }
}).add('with links', withReadme(OverflowREADME, function () {
  return React.createElement(OverflowMenuExample, {
    overflowMenuProps: props.menu(),
    overflowMenuItemProps: _objectSpread({}, props.menuItem(), {
      href: 'https://www.ibm.com'
    })
  });
}), {
  info: {
    text: "\n            Overflow Menu is used when additional options are available to the user and there is a space constraint.\n            Create Overflow Menu Item components for each option on the menu.\n\n            When given `href` props, menu items render as <a> tags to facilitate usability.\n          "
  }
}).add('custom trigger', withReadme(OverflowREADME, function () {
  return React.createElement(OverflowMenuExample, {
    overflowMenuProps: _objectSpread({}, props.menu(), {
      ariaLabel: null,
      style: {
        width: 'auto'
      },
      renderIcon: function renderIcon() {
        return React.createElement("div", {
          style: {
            padding: '0 1rem'
          }
        }, "Menu");
      }
    }),
    overflowMenuItemProps: props.menuItem()
  });
}), {
  info: {
    text: "\n            Sometimes you just want to render something other than an icon\n          "
  }
});