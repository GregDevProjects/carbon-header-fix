"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _iconsReact = require("@carbon/icons-react");

var _Toolbar = _interopRequireWildcard(require("../Toolbar"));

var _OverflowMenu = _interopRequireDefault(require("../OverflowMenu"));

var _OverflowMenuItem = _interopRequireDefault(require("../OverflowMenuItem"));

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

var _RadioButton = _interopRequireDefault(require("../RadioButton"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var toolbarProps = {
  className: 'some-class'
};
var inputProps = {
  className: 'some-class',
  onChange: (0, _addonActions.action)('onChange')
};
(0, _react2.storiesOf)('[Deprecated] Toolbar', module).add('Default', function () {
  return _react.default.createElement(_Toolbar.default, _extends({}, toolbarProps, {
    className: "some-class"
  }), _react.default.createElement(_Toolbar.ToolbarItem, {
    type: "search",
    placeHolderText: "Search"
  }), _react.default.createElement(_Toolbar.ToolbarItem, null, _react.default.createElement(_OverflowMenu.default, {
    renderIcon: _iconsReact.Filter16
  }, _react.default.createElement(_Toolbar.ToolbarTitle, {
    title: "FILTER BY"
  }), _react.default.createElement(_Toolbar.ToolbarOption, null, _react.default.createElement(_Checkbox.default, _extends({}, inputProps, {
    id: "opt-1",
    labelText: "Filter option 1"
  }))), _react.default.createElement(_Toolbar.ToolbarOption, null, _react.default.createElement(_Checkbox.default, _extends({}, inputProps, {
    id: "opt-2",
    labelText: "Filter option 2"
  }))), _react.default.createElement(_Toolbar.ToolbarOption, null, _react.default.createElement(_Checkbox.default, _extends({}, inputProps, {
    id: "opt-3",
    labelText: "Filter option 3"
  }))))), _react.default.createElement(_Toolbar.ToolbarItem, null, _react.default.createElement(_OverflowMenu.default, null, _react.default.createElement(_OverflowMenuItem.default, {
    itemText: "Refresh table"
  }), _react.default.createElement(_Toolbar.ToolbarDivider, null), _react.default.createElement(_Toolbar.ToolbarTitle, {
    title: "ROW HEIGHT"
  }), _react.default.createElement(_Toolbar.ToolbarOption, null, _react.default.createElement(_RadioButton.default, _extends({}, inputProps, {
    value: "short",
    id: "radio-1",
    name: "toolbar-radio",
    labelText: "Short"
  }))), _react.default.createElement(_Toolbar.ToolbarOption, null, _react.default.createElement(_RadioButton.default, _extends({}, inputProps, {
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