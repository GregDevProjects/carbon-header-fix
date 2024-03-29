"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _storybookReadme = require("storybook-readme");

var _OverflowMenu = _interopRequireDefault(require("../OverflowMenu"));

var _OverflowMenuItem = _interopRequireDefault(require("../OverflowMenuItem"));

var _README = _interopRequireDefault(require("./README.md"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var directions = {
  'Bottom of the trigger button (bottom)': 'bottom',
  'Top of the trigger button (top)': 'top'
};
var props = {
  menu: function menu() {
    return {
      direction: (0, _addonKnobs.select)('Menu direction (direction)', directions, 'bottom'),
      ariaLabel: (0, _addonKnobs.text)('ARIA label (ariaLabel)', 'Menu'),
      iconDescription: (0, _addonKnobs.text)('Icon description (iconDescription)', ''),
      flipped: (0, _addonKnobs.boolean)('Flipped (flipped)', false),
      onClick: (0, _addonActions.action)('onClick'),
      onFocus: (0, _addonActions.action)('onFocus'),
      onKeyDown: (0, _addonActions.action)('onKeyDown'),
      onClose: (0, _addonActions.action)('onClose'),
      onOpen: (0, _addonActions.action)('onOpen')
    };
  },
  menuItem: function menuItem() {
    return {
      className: 'some-class',
      disabled: (0, _addonKnobs.boolean)('Disabled (disabled)', false),
      requireTitle: (0, _addonKnobs.boolean)('Use hover over text for menu item (requireTitle)', false),
      onClick: (0, _addonActions.action)('onClick')
    };
  }
};

var OverflowMenuExample = function OverflowMenuExample(_ref) {
  var overflowMenuProps = _ref.overflowMenuProps,
      overflowMenuItemProps = _ref.overflowMenuItemProps;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_OverflowMenu.default, overflowMenuProps, _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Option 1",
    primaryFocus: true
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Option 2 is an example of a really long string and how we recommend handling this",
    requireTitle: true
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Option 3"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Option 4"
  })), _react.default.createElement(_OverflowMenuItem.default, _extends({}, overflowMenuItemProps, {
    itemText: "Danger option",
    hasDivider: true,
    isDelete: true
  }))));
};

(0, _react2.storiesOf)('OverflowMenu', module).addDecorator(_addonKnobs.withKnobs).add('basic', (0, _storybookReadme.withReadme)(_README.default, function () {
  return _react.default.createElement(OverflowMenuExample, {
    overflowMenuProps: props.menu(),
    overflowMenuItemProps: props.menuItem()
  });
}), {
  info: {
    text: "\n            Overflow Menu is used when additional options are available to the user and there is a space constraint.\n            Create Overflow Menu Item components for each option on the menu.\n          "
  }
}).add('with links', (0, _storybookReadme.withReadme)(_README.default, function () {
  return _react.default.createElement(OverflowMenuExample, {
    overflowMenuProps: props.menu(),
    overflowMenuItemProps: _objectSpread({}, props.menuItem(), {
      href: 'https://www.ibm.com'
    })
  });
}), {
  info: {
    text: "\n            Overflow Menu is used when additional options are available to the user and there is a space constraint.\n            Create Overflow Menu Item components for each option on the menu.\n\n            When given `href` props, menu items render as <a> tags to facilitate usability.\n          "
  }
}).add('custom trigger', (0, _storybookReadme.withReadme)(_README.default, function () {
  return _react.default.createElement(OverflowMenuExample, {
    overflowMenuProps: _objectSpread({}, props.menu(), {
      ariaLabel: null,
      style: {
        width: 'auto'
      },
      renderIcon: function renderIcon() {
        return _react.default.createElement("div", {
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