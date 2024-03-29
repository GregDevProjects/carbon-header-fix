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
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import ComboBox from '../ComboBox';
import WithState from '../../tools/withState';
var items = [{
  id: 'option-0',
  text: 'Option 1'
}, {
  id: 'option-1',
  text: 'Option 2'
}, {
  id: 'option-2',
  text: 'Option 3',
  selected: true
}, {
  id: 'option-3',
  text: 'Option 4'
}, {
  id: 'option-4',
  text: 'An example option that is really long to show what should be done to handle long text'
}];

var props = function props() {
  return {
    id: text('Combobox ID (id)', 'carbon-combobox-example'),
    placeholder: text('Placeholder text (placeholder)', 'Filter...'),
    titleText: text('Title (titleText)', 'Combobox title'),
    helperText: text('Helper text (helperText)', 'Optional helper text here'),
    light: boolean('Light (light)', false),
    disabled: boolean('Disabled (disabled)', false),
    invalid: boolean('Invalid (invalid)', false),
    invalidText: text('Invalid text (invalidText)', 'A valid value is required'),
    onChange: action('onChange')
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

storiesOf('ComboBox', module).addDecorator(withKnobs).add('Default', function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(ComboBox, _extends({
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    }
  }, props())));
}, {
  info: {
    text: 'ComboBox'
  }
}).add('items as components', function () {
  return React.createElement("div", {
    style: {
      width: 300
    }
  }, React.createElement(ComboBox, _extends({
    items: items,
    itemToString: function itemToString(item) {
      return item ? item.text : '';
    },
    itemToElement: itemToElement
  }, props())));
}, {
  info: {
    text: 'ComboBox'
  }
}).add('custom text input handling', function () {
  return React.createElement(WithState, {
    initialState: {
      inputText: ''
    }
  }, function (_ref) {
    var state = _ref.state,
        setState = _ref.setState;
    return React.createElement("div", {
      style: {
        width: 300
      }
    }, React.createElement(ComboBox, _extends({
      items: items,
      itemToString: function itemToString(item) {
        return item ? "".concat(item.text, " queried with ").concat(state.inputText) : '';
      },
      shouldFilterItem: function shouldFilterItem() {
        return true;
      },
      onInputChange: function onInputChange(text) {
        return setState({
          inputText: text
        });
      }
    }, props())));
  });
}, {
  info: {
    text: "Sometimes you want to perform an async action to trigger a backend call on input change."
  }
});