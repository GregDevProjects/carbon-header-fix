"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _carbonComponents = require("carbon-components");

var _addonKnobs = require("@storybook/addon-knobs");

var _Tooltip = _interopRequireDefault(require("../Tooltip"));

var _Button = _interopRequireDefault(require("../Button"));

var _iconsReact = require("@carbon/icons-react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var prefix = _carbonComponents.settings.prefix;
var directions = {
  'Bottom (bottom)': 'bottom',
  'Left (left)': 'left',
  'Top (top)': 'top',
  'Right (right)': 'right'
};
var props = {
  withIcon: function withIcon() {
    return {
      direction: (0, _addonKnobs.select)('Tooltip direction (direction)', directions, 'bottom'),
      triggerText: (0, _addonKnobs.text)('Trigger text (triggerText)', 'Tooltip label'),
      tabIndex: (0, _addonKnobs.number)('Tab index (tabIndex in <Tooltip>)', 0)
    };
  },
  withoutIcon: function withoutIcon() {
    return {
      showIcon: false,
      direction: (0, _addonKnobs.select)('Tooltip direction (direction)', directions, 'bottom'),
      triggerText: (0, _addonKnobs.text)('Trigger text (triggerText)', 'Tooltip label'),
      tabIndex: (0, _addonKnobs.number)('Tab index (tabIndex in <Tooltip>)', 0)
    };
  },
  customIcon: function customIcon() {
    return {
      showIcon: true,
      direction: (0, _addonKnobs.select)('Tooltip direction (direction)', directions, 'bottom'),
      triggerText: (0, _addonKnobs.text)('Trigger text (triggerText)', 'Tooltip label'),
      tabIndex: (0, _addonKnobs.number)('Tab index (tabIndex in <Tooltip>)', 0),
      renderIcon: _react.default.forwardRef(function (props, ref) {
        return _react.default.createElement("div", {
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
      direction: (0, _addonKnobs.select)('Tooltip direction (direction)', directions, 'bottom'),
      iconDescription: 'Helpful Information',
      tabIndex: (0, _addonKnobs.number)('Tab index (tabIndex in <Tooltip>)', 0),
      renderIcon: _iconsReact.OverflowMenuVertical16
    };
  }
};
_Tooltip.default.displayName = 'Tooltip';

function UncontrolledTooltipExample() {
  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Button.default, {
    style: {
      padding: '15px 20px',
      margin: '4px 20px'
    },
    onClick: function onClick() {
      return setValue(false);
    }
  }, "Hide"), _react.default.createElement(_Button.default, {
    style: {
      padding: '15px 20px',
      margin: '4px 20px'
    },
    onClick: function onClick() {
      return setValue(true);
    }
  }, "Show"), _react.default.createElement("div", {
    style: {
      padding: '15px',
      margin: '4px 20px'
    }
  }, _react.default.createElement(_Tooltip.default, {
    triggerText: _react.default.createElement("div", null, "My text wrapped with tooltip"),
    open: value,
    showIcon: false
  }, "Some text")));
}

(0, _react2.storiesOf)('Tooltip', module).addDecorator(_addonKnobs.withKnobs).add('default (bottom)', function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Tooltip.default, props.withIcon(), _react.default.createElement("p", null, "This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead."), _react.default.createElement("div", {
    className: "".concat(prefix, "--tooltip__footer")
  }, _react.default.createElement("a", {
    href: "/",
    className: "".concat(prefix, "--link")
  }, "Learn More"), _react.default.createElement(_Button.default, {
    size: "small"
  }, "Create"))));
}, {
  info: {
    text: "\n            Interactive tooltip should be used if there are actions a user can take in the tooltip (e.g. a link or a button).\n            For more regular use case, e.g. giving the user more text information about something, use definition tooltip or icon tooltip.\n            By default, the tooltip will render above the element. The example below shows the default scenario.\n          "
  }
}).add('no icon', function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Tooltip.default, props.withoutIcon(), _react.default.createElement("p", null, "This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead."), _react.default.createElement("div", {
    className: "".concat(prefix, "--tooltip__footer")
  }, _react.default.createElement("a", {
    href: "/",
    className: "".concat(prefix, "--link")
  }, "Learn More"), _react.default.createElement(_Button.default, {
    size: "small"
  }, "Create"))));
}, {
  info: {
    text: "\n            Interactive tooltip should be used if there are actions a user can take in the tooltip (e.g. a link or a button).\n            For more regular use case, e.g. giving the user more text information about something, use definition tooltip or icon tooltip.\n            By default, the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.\n          "
  }
}).add('custom icon', function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Tooltip.default, props.customIcon(), _react.default.createElement("p", null, "This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead."), _react.default.createElement("div", {
    className: "".concat(prefix, "--tooltip__footer")
  }, _react.default.createElement("a", {
    href: "/",
    className: "".concat(prefix, "--link")
  }, "Learn More"), _react.default.createElement(_Button.default, {
    size: "small"
  }, "Create"))));
}, {
  info: {
    text: "\n            Interactive tooltip should be used if there are actions a user can take in the tooltip (e.g. a link or a button).\n            For more regular use case, e.g. giving the user more text information about something, use definition tooltip or icon tooltip.\n            By default, the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.\n          "
  }
}).add('only custom icon', function () {
  return _react.default.createElement("div", {
    style: {
      marginTop: '2rem'
    }
  }, _react.default.createElement(_Tooltip.default, props.customIconOnly(), _react.default.createElement("p", null, "This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more room is needed please use a modal instead."), _react.default.createElement("div", {
    className: "".concat(prefix, "--tooltip__footer")
  }, _react.default.createElement("a", {
    href: "/",
    className: "".concat(prefix, "--link")
  }, "Learn More"), _react.default.createElement(_Button.default, {
    size: "small"
  }, "Create"))));
}, {
  info: {
    text: "\n            Interactive tooltip should be used if there are actions a user can take in the tooltip (e.g. a link or a button).\n            For more regular use case, e.g. giving the user more text information about something, use definition tooltip or icon tooltip.\n            By default, the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.\n          "
  }
}).add('uncontrolled tooltip', function () {
  return _react.default.createElement(UncontrolledTooltipExample, null);
});