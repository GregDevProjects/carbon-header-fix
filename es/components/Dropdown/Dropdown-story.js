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
import Dropdown from '../Dropdown';
import DropdownSkeleton from './Dropdown.Skeleton';
import WithState from '../../tools/withState';
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
    id: text('Dropdown ID (id)', 'carbon-dropdown-example'),
    type: select('Dropdown type (type)', types, 'default'),
    label: text('Label (label)', 'Dropdown menu options'),
    ariaLabel: text('Aria Label (ariaLabel)', 'Dropdown'),
    disabled: boolean('Disabled (disabled)', false),
    light: boolean('Light variant (light)', false),
    titleText: text('Title (titleText)', 'This is not a dropdown title.'),
    helperText: text('Helper text (helperText)', 'This is not some helper text.'),
    invalid: boolean('Show form validation UI (invalid)', false),
    invalidText: text('Form validation UI content (invalidText)', 'A valid value is required')
  };
};

var itemToElement = function itemToElement(item) {
  var itemAsArray = item.text.split(' ');
  return React.createElement("div", null, React.createElement("span", null, itemAsArray[0]), React.createElement("span", {
    style: {
      color: 'blue'
    }
  }, " ", itemAsArray[1]));
};

storiesOf('Dropdown', module).addDecorator(withKnobs).add('default', function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(Dropdown, _extends({}, props(), {
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    onChange: action('onChange')
  })));
}, {
  info: {
    text: 'Dropdown'
  }
}).add('items as strings', function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(Dropdown, _extends({}, props(), {
    items: stringItems,
    onChange: action('onChange')
  })));
}, {
  info: {
    text: 'Rendering an array of strings as `items`'
  }
}).add('items as components', function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(Dropdown, _extends({}, props(), {
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    itemToElement: itemToElement,
    onChange: action('onChange')
  })));
}, {
  info: {
    text: "Rendering items as custom components"
  }
}).add('fully controlled', function () {
  return React.createElement(WithState, {
    initialState: {
      selectedItem: items[0]
    }
  }, function (_ref) {
    var state = _ref.state,
        setState = _ref.setState;
    return React.createElement("div", {
      style: {
        width: 300
      }
    }, React.createElement(Dropdown, _extends({}, props(), {
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
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(DropdownSkeleton, null), "\xA0", React.createElement(DropdownSkeleton, {
    inline: true
  }));
}, {
  info: {
    text: "\n            Placeholder skeleton state to use when content is loading.\n          "
  }
});