"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Tile = require("../Tile");

var _TileGroup = _interopRequireDefault(require("../TileGroup"));

var _RadioTile = _interopRequireDefault(require("../RadioTile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var radioValues = {
  None: '',
  standard: 'standard',
  'default-selected': 'default-selected',
  selected: 'selected'
};
var props = {
  selectable: function selectable() {
    return {
      selected: (0, _addonKnobs.boolean)('Selected (selected)', false),
      handleClick: (0, _addonActions.action)('handleClick'),
      handleKeyDown: (0, _addonActions.action)('handleKeyDown')
    };
  },
  group: function group() {
    return {
      name: (0, _addonKnobs.text)('Form item (name in <TileGroup>)', 'tile-group'),
      valueSelected: (0, _addonKnobs.select)('Value of the selected item (valueSelected in <TileGroup>)', radioValues, ''),
      onChange: (0, _addonActions.action)('onChange')
    };
  },
  radio: function radio() {
    return {
      name: (0, _addonKnobs.text)('Form item name (name in <RadioTile>)', 'tiles'),
      onChange: (0, _addonActions.action)('onChange')
    };
  },
  expandable: function expandable() {
    return {
      tabIndex: (0, _addonKnobs.number)('Tab index (tabIndex)', 0),
      expanded: (0, _addonKnobs.boolean)('Expanded (expanded)', false),
      tileMaxHeight: (0, _addonKnobs.number)('Max height (tileMaxHeight)', 0),
      tileCollapsedIconText: (0, _addonKnobs.text)('Collapsed icon text (tileCollapsedIconText)', 'Interact to Expand tile'),
      tileExpandedIconText: (0, _addonKnobs.text)('Collapsed icon text (tileExpandedIconText)', 'Interact to Collapse tile'),
      handleClick: (0, _addonActions.action)('handleClick')
    };
  }
};
(0, _react2.storiesOf)('Tile', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  return _react.default.createElement(_Tile.Tile, null, "Default tile");
}, {
  info: {
    text: "\n            Default tile without any interactions\n          "
  }
}).add('Clickable', function () {
  return _react.default.createElement(_Tile.ClickableTile, {
    href: (0, _addonKnobs.text)('Href for clickable UI (href)', 'javascript:void(0)')
  }, "Clickable Tile");
}, {
  info: {
    text: "\n            Clickable tile\n          "
  }
}).add('Multi-select', function () {
  var selectableProps = props.selectable();
  return _react.default.createElement("div", {
    role: "group",
    "aria-label": "selectable tiles"
  }, _react.default.createElement(_Tile.SelectableTile, _extends({
    id: "tile-1",
    name: "tiles"
  }, selectableProps), "Multi-select Tile"), _react.default.createElement(_Tile.SelectableTile, _extends({
    id: "tile-2",
    name: "tiles"
  }, selectableProps), "Multi-select Tile"), _react.default.createElement(_Tile.SelectableTile, _extends({
    id: "tile-3",
    name: "tiles"
  }, selectableProps), "Multi-select Tile"));
}, {
  info: {
    text: "\n            Selectable tile\n\n            Use this to select multiple tiles.\n          "
  }
}).add('Selectable', function () {
  var radioProps = props.radio();
  return _react.default.createElement(_TileGroup.default, _extends({
    defaultSelected: "default-selected",
    legend: "Selectable Tile Group"
  }, props.group()), _react.default.createElement(_RadioTile.default, _extends({
    value: "standard",
    id: "tile-1",
    labelText: "Selectable Tile"
  }, radioProps), "Selectable Tile"), _react.default.createElement(_RadioTile.default, _extends({
    value: "default-selected",
    labelText: "Default selected tile",
    id: "tile-2"
  }, radioProps), "Selectable Tile"), _react.default.createElement(_RadioTile.default, _extends({
    value: "selected",
    labelText: "Selectable Tile",
    id: "tile-3"
  }, radioProps), "Selectable Tile"));
}, {
  info: {
    text: "\n             The example below shows a Tile Group component with a default selected Tile.\n             Although you can set the checked prop on the Tile, when using the RadioTile component\n             as a child of the Tile Group, either set the defaultSelected or valueSelected which will\n             automatically set the selected prop on the corresponding RadioTile component.\n\n             Use defaultSelected when you want a tile to be selected initially, but don't need to set it\n             at a later time. If you do need to set it dynamically at a later time, then use the valueSelected property instead.\n\n             Use this to select one tile at a time.\n          "
  }
}).add('Expandable', function () {
  return _react.default.createElement(_Tile.ExpandableTile, props.expandable(), _react.default.createElement(_Tile.TileAboveTheFoldContent, null, _react.default.createElement("div", {
    style: {
      height: '200px'
    }
  }, "Above the fold content here")), _react.default.createElement(_Tile.TileBelowTheFoldContent, null, _react.default.createElement("div", {
    style: {
      height: '400px'
    }
  }, "Below the fold content here")));
}, {
  info: {
    text: "\n            Expandable tile\n          "
  }
});