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
import { Filter16 } from '@carbon/icons-react';
import Toolbar, { ToolbarItem, ToolbarTitle, ToolbarOption, ToolbarDivider } from '../Toolbar';
import OverflowMenu from '../OverflowMenu';
import OverflowMenuItem from '../OverflowMenuItem';
import Checkbox from '../Checkbox';
import RadioButton from '../RadioButton';
var toolbarProps = {
  className: 'some-class'
};
var inputProps = {
  className: 'some-class',
  onChange: action('onChange')
};
storiesOf('[Deprecated] Toolbar', module).add('Default', function () {
  return React.createElement(Toolbar, _extends({}, toolbarProps, {
    className: "some-class"
  }), React.createElement(ToolbarItem, {
    type: "search",
    placeHolderText: "Search"
  }), React.createElement(ToolbarItem, null, React.createElement(OverflowMenu, {
    renderIcon: Filter16
  }, React.createElement(ToolbarTitle, {
    title: "FILTER BY"
  }), React.createElement(ToolbarOption, null, React.createElement(Checkbox, _extends({}, inputProps, {
    id: "opt-1",
    labelText: "Filter option 1"
  }))), React.createElement(ToolbarOption, null, React.createElement(Checkbox, _extends({}, inputProps, {
    id: "opt-2",
    labelText: "Filter option 2"
  }))), React.createElement(ToolbarOption, null, React.createElement(Checkbox, _extends({}, inputProps, {
    id: "opt-3",
    labelText: "Filter option 3"
  }))))), React.createElement(ToolbarItem, null, React.createElement(OverflowMenu, null, React.createElement(OverflowMenuItem, {
    itemText: "Refresh table"
  }), React.createElement(ToolbarDivider, null), React.createElement(ToolbarTitle, {
    title: "ROW HEIGHT"
  }), React.createElement(ToolbarOption, null, React.createElement(RadioButton, _extends({}, inputProps, {
    value: "short",
    id: "radio-1",
    name: "toolbar-radio",
    labelText: "Short"
  }))), React.createElement(ToolbarOption, null, React.createElement(RadioButton, _extends({}, inputProps, {
    value: "tall",
    id: "radio-2",
    name: "toolbar-radio",
    labelText: "Tall"
  }))))));
}, {
  info: {
    text: "\n          Toolbar stuff\n        "
  }
});