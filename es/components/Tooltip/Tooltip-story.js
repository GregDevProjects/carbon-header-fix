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
import { settings } from 'carbon-components';
import { withKnobs, select, text, number } from '@storybook/addon-knobs';
import Tooltip from '../Tooltip';
import Button from '../Button';
import { OverflowMenuVertical16 } from '@carbon/icons-react';
var prefix = settings.prefix;
var directions = {
  'Bottom (bottom)': 'bottom',
  'Left (left)': 'left',
  'Top (top)': 'top',
  'Right (right)': 'right'
};
var props = {
  withIcon: function withIcon() {
    return {
      direction: select('Tooltip direction (direction)', directions, 'bottom'),
      triggerText: text('Trigger text (triggerText)', 'Tooltip label'),
      tabIndex: number('Tab index (tabIndex in <Tooltip>)', 0)
    };
  },
  withoutIcon: function withoutIcon() {
    return {
      showIcon: false,
      direction: select('Tooltip direction (direction)', directions, 'bottom'),
      triggerText: text('Trigger text (triggerText)', 'Tooltip label'),
      tabIndex: number('Tab index (tabIndex in <Tooltip>)', 0)
    };
  },
  customIcon: function customIcon() {
    return {
      showIcon: true,
      direction: select('Tooltip direction (direction)', directions, 'bottom'),
      triggerText: text('Trigger text (triggerText)', 'Tooltip label'),
      tabIndex: number('Tab index (tabIndex in <Tooltip>)', 0),
      renderIcon: React.forwardRef(function (props, ref) {
        return React.createElement("div", {
          style: {
            width: '10px',
            height: '10px',
            borderRadius: '5px',
            background: 'red'
          },
          ref: ref
        });
      })
    };
  },
  customIconOnly: function customIconOnly() {
    return {
      showIcon: true,
      direction: select('Tooltip direction (direction)', directions, 'bottom'),
      iconDescription: 'Helpful Information',
      tabIndex: number('Tab index (tabIndex in <Tooltip>)', 0),
      renderIcon: OverflowMenuVertical16
    };
  }
};
Tooltip.displayName = 'Tooltip';

function UncontrolledTooltipExample() {
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  return React.createElement(React.Fragment, null, React.createElement(Button, {
    style: {
      padding: '15px 20px',
      margin: '4px 20px'
    },
    onClick: function onClick() {
      return setValue(false);
    }
  }, "Hide"), React.createElement(Button, {
    style: {
      padding: '15px 20px',
      margin: '4px 20px'
    },
    onClick: function onClick() {
      return setValue(true);
    }
  }, "Show"), React.createElement("div", {
    style: {
      padding: '15px',
      margin: '4px 20px'
    }
  }, React.createElement(Tooltip, {
    triggerText: React.createElement("div", null, "My text wrapped with tooltip"),
    open: value,
    showIcon: false
  }, "Some text")));
}

storiesOf('Tooltip', module).addDecorator(withKnobs).add('default (bottom)', function () {
  return React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, React.createElement(Tooltip, props.withIcon(), React.createElement("p", null, "This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead."), React.createElement("div", {
    className: "".concat(prefix, "--tooltip__footer")
  }, React.createElement("a", {
    href: "/",
    className: "".concat(prefix, "--link")
  }, "Learn More"), React.createElement(Button, {
    size: "small"
  }, "Create"))));
}, {
  info: {
    text: "\n            Interactive tooltip should be used if there are actions a user can take in the tooltip (e.g. a link or a button).\n            For more regular use case, e.g. giving the user more text information about something, use definition tooltip or icon tooltip.\n            By default, the tooltip will render above the element. The example below shows the default scenario.\n          "
  }
}).add('no icon', function () {
  return React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, React.createElement(Tooltip, props.withoutIcon(), React.createElement("p", null, "This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead."), React.createElement("div", {
    className: "".concat(prefix, "--tooltip__footer")
  }, React.createElement("a", {
    href: "/",
    className: "".concat(prefix, "--link")
  }, "Learn More"), React.createElement(Button, {
    size: "small"
  }, "Create"))));
}, {
  info: {
    text: "\n            Interactive tooltip should be used if there are actions a user can take in the tooltip (e.g. a link or a button).\n            For more regular use case, e.g. giving the user more text information about something, use definition tooltip or icon tooltip.\n            By default, the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.\n          "
  }
}).add('custom icon', function () {
  return React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, React.createElement(Tooltip, props.customIcon(), React.createElement("p", null, "This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead."), React.createElement("div", {
    className: "".concat(prefix, "--tooltip__footer")
  }, React.createElement("a", {
    href: "/",
    className: "".concat(prefix, "--link")
  }, "Learn More"), React.createElement(Button, {
    size: "small"
  }, "Create"))));
}, {
  info: {
    text: "\n            Interactive tooltip should be used if there are actions a user can take in the tooltip (e.g. a link or a button).\n            For more regular use case, e.g. giving the user more text information about something, use definition tooltip or icon tooltip.\n            By default, the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.\n          "
  }
}).add('only custom icon', function () {
  return React.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, React.createElement(Tooltip, props.customIconOnly(), React.createElement("p", null, "This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead."), React.createElement("div", {
    className: "".concat(prefix, "--tooltip__footer")
  }, React.createElement("a", {
    href: "/",
    className: "".concat(prefix, "--link")
  }, "Learn More"), React.createElement(Button, {
    size: "small"
  }, "Create"))));
}, {
  info: {
    text: "\n            Interactive tooltip should be used if there are actions a user can take in the tooltip (e.g. a link or a button).\n            For more regular use case, e.g. giving the user more text information about something, use definition tooltip or icon tooltip.\n            By default, the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.\n          "
  }
}).add('uncontrolled tooltip', function () {
  return React.createElement(UncontrolledTooltipExample, null);
});