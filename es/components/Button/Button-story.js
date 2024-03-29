function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import { settings } from 'carbon-components';
import { iconAddSolid, iconSearch } from 'carbon-icons';
import { Add16, Search16 } from '@carbon/icons-react';
import Button from '../Button';
import ButtonSkeleton from '../Button/Button.Skeleton';
var prefix = settings.prefix;
var icons = {
  None: 'None',
  'Add with filled circle (Add16 from `@carbon/icons-react`)': 'Add16',
  'Search (Search16 from `@carbon/icons-react`)': 'Search16'
};
var iconMap = {
  iconAddSolid: iconAddSolid,
  iconSearch: iconSearch,
  Add16: Add16,
  Search16: Search16
};
var kinds = {
  'Primary button (primary)': 'primary',
  'Secondary button (secondary)': 'secondary',
  'Danger button (danger)': 'danger',
  'Ghost button (ghost)': 'ghost'
};
var sizes = {
  Default: 'default',
  Field: 'field',
  Small: 'small'
};
var props = {
  regular: function regular() {
    var iconToUse = iconMap[select('Icon (icon)', icons, 'none')];
    return {
      className: 'some-class',
      kind: select('Button kind (kind)', kinds, 'primary'),
      disabled: boolean('Disabled (disabled)', false),
      size: select('Button size (size)', sizes, 'default'),
      renderIcon: !iconToUse || iconToUse.svgData ? undefined : iconToUse,
      iconDescription: text('Icon description (iconDescription)', 'Button icon'),
      onClick: action('onClick'),
      onFocus: action('onFocus'),
      small: boolean('Small (small) - Deprecated in favor of `size`', false)
    };
  },
  iconOnly: function iconOnly() {
    var iconToUse = iconMap[select('Icon (icon)', icons, 'Add16')];
    return {
      className: 'some-class',
      kind: select('Button kind (kind)', kinds, 'primary'),
      disabled: boolean('Disabled (disabled)', false),
      size: select('Button size (size)', sizes, 'default'),
      renderIcon: !iconToUse || iconToUse.svgData ? undefined : iconToUse,
      iconDescription: text('Icon description (iconDescription)', 'Button icon'),
      tooltipPosition: select('Tooltip position (tooltipPosition)', ['top', 'right', 'bottom', 'left'], 'bottom'),
      tooltipAlignment: select('Tooltip alignment (tooltipAlignment)', ['start', 'center', 'end'], 'center'),
      onClick: action('onClick'),
      onFocus: action('onFocus')
    };
  },
  set: function set() {
    var iconToUse = iconMap[select('Icon (icon)', icons, 'none')];
    return {
      className: 'some-class',
      disabled: boolean('Disabled (disabled)', false),
      small: boolean('Small (small)', false),
      size: select('Button size (size)', sizes, 'default'),
      renderIcon: !iconToUse || iconToUse.svgData ? undefined : iconToUse,
      iconDescription: text('Icon description (iconDescription)', 'Button icon'),
      onClick: action('onClick'),
      onFocus: action('onFocus')
    };
  }
};
Button.displayName = 'Button';

var CustomLink = function CustomLink(_ref) {
  var children = _ref.children,
      href = _ref.href,
      other = _objectWithoutProperties(_ref, ["children", "href"]);

  return React.createElement("a", _extends({
    href: href
  }, other), children);
};

storiesOf('Buttons', module).addDecorator(withKnobs).add('Default', function () {
  var regularProps = props.regular();
  return React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, React.createElement(Button, _extends({}, regularProps, {
    className: "some-class"
  }), "Button"), "\xA0", React.createElement(Button, _extends({}, regularProps, {
    href: "#",
    className: "some-class"
  }), "Link"), "\xA0", React.createElement(Button, _extends({}, regularProps, {
    as: "p",
    href: "#",
    className: "some-class"
  }), "Element"), "\xA0", React.createElement(Button, _extends({}, regularProps, {
    as: CustomLink,
    href: "#",
    className: "some-class"
  }), "Custom component"));
}, {
  info: {
    text: "\n          Buttons are used to initialize an action, either in the background or\n          foreground of an experience.\n\n          There are several kinds of buttons.\n\n          Primary buttons should be used for the principle call to action\n          on the page.\n\n          Secondary buttons should be used for secondary actions on each page.\n\n          Danger buttons should be used for a negative action (such as Delete) on the page.\n\n          Modify the behavior of the button by changing its event properties.\n\n          Field buttons may be use directly next to an input element, to visually align their heights.\n\n          Small buttons may be used when there is not enough space for a\n          regular sized button. This issue is most found in tables. Small button should have three words\n          or less.\n\n          When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are\n          always paired with text.\n        "
  }
}).add('Icon-only buttons', function () {
  return React.createElement(Button, _extends({}, props.iconOnly(), {
    hasIconOnly: true
  }));
}).add('Sets of Buttons', function () {
  var setProps = props.set();
  return React.createElement("div", {
    className: "".concat(prefix, "--btn-set")
  }, React.createElement(Button, _extends({
    kind: "secondary"
  }, setProps), "Secondary button"), React.createElement(Button, _extends({
    kind: "primary"
  }, setProps), "Primary button"));
}, {
  info: {
    text: "\n          When an action required by the user has more than one option, always use a a negative action button (secondary) paired with a positive action button (primary) in that order. Negative action buttons will be on the left. Positive action buttons should be on the right. When these two types buttons are paired in the correct order, they will automatically space themselves apart.\n        "
  }
}).add('skeleton', function () {
  return React.createElement("div", null, React.createElement(ButtonSkeleton, null), "\xA0", React.createElement(ButtonSkeleton, {
    href: "#"
  }), "\xA0", React.createElement(ButtonSkeleton, {
    size: "small"
  }));
}, {
  info: {
    text: "\n          Placeholder skeleton state to use when content is loading.\n        "
  }
});