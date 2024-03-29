function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
import Tag, { types as typesList } from '../Tag';
import TagSkeleton from '../Tag/Tag.Skeleton';
import { action } from '@storybook/addon-actions/dist/preview';
var props = {
  regular: function regular() {
    return {
      type: select('Tag type (type)', typesList.reduce(function (acc, type) {
        return _objectSpread({}, acc, _defineProperty({}, "".concat(type, " (").concat(type, ")"), type));
      }, {}), 'red'),
      disabled: boolean('Disabled (disabled)', false),
      title: 'Clear Selection'
    };
  },
  filter: function filter() {
    return _objectSpread({}, this.regular(), {
      onClick: action('onClick')
    });
  }
};
storiesOf('Tag', module).addDecorator(withKnobs).add('Default', function () {
  return React.createElement(Tag, _extends({
    className: "some-class"
  }, props.regular()), text('Content (children)', 'This is not a tag'));
}, {
  info: {
    text: "\n            Tags are used for items that need to be labeled, categorized, or organized using keywords that describe them.\n            The example below shows how the Tag component can be used. Each type has a default message describing the type,\n            but a custom message can also be applied.\n          "
  }
}).add('Filter', function () {
  return React.createElement(Tag, _extends({
    className: "some-class"
  }, props.filter(), {
    filter: true
  }), text('Content (children)', 'This is not a tag'));
}, {
  info: {
    text: "\n            Tags are used for items that need to be labeled, categorized, or organized using keywords that describe them.\n            The example below shows how the Tag component can be used. Each type has a default message describing the type,\n            but a custom message can also be applied.\n          "
  }
}).add('skeleton', function () {
  return React.createElement("div", null, React.createElement(TagSkeleton, null));
}, {
  info: {
    text: "\n          Placeholder skeleton state to use when content is loading.\n          "
  }
});