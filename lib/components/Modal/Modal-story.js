"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Modal = _interopRequireDefault(require("../Modal"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var prefix = _carbonComponents.settings.prefix;

var props = function props() {
  return {
    className: 'some-class',
    open: (0, _addonKnobs.boolean)('Open (open)', true),
    passiveModal: (0, _addonKnobs.boolean)('Without footer (passiveModal)', false),
    danger: (0, _addonKnobs.boolean)('Danger mode (danger)', false),
    shouldSubmitOnEnter: (0, _addonKnobs.boolean)('Enter key to submit (shouldSubmitOnEnter)', false),
    focusTrap: (0, _addonKnobs.boolean)('Trap focus (focusTrap)', false),
    modalHeading: (0, _addonKnobs.text)('Modal heading (modalHeading)', 'Modal heading'),
    modalLabel: (0, _addonKnobs.text)('Optional label (modalLabel)', 'Label'),
    modalAriaLabel: (0, _addonKnobs.text)('ARIA label, used only if modalLabel not provided (modalAriaLabel)', 'A label to be read by screen readers on the modal root node'),
    primaryButtonText: (0, _addonKnobs.text)('Primary button text (primaryButtonText)', 'Primary Button'),
    secondaryButtonText: (0, _addonKnobs.text)('Secondary button text (secondaryButtonText)', 'Secondary Button'),
    selectorPrimaryFocus: (0, _addonKnobs.text)('Primary focus element selector (selectorPrimaryFocus)', '[data-modal-primary-focus]'),
    iconDescription: (0, _addonKnobs.text)('Close icon description (iconDescription)', 'Close the modal'),
    onBlur: (0, _addonActions.action)('onBlur'),
    onClick: (0, _addonActions.action)('onClick'),
    onFocus: (0, _addonActions.action)('onFocus'),
    onRequestClose: (0, _addonActions.action)('onRequestClose'),
    onRequestSubmit: (0, _addonActions.action)('onRequestSubmit'),
    onSecondarySubmit: (0, _addonActions.action)('onSecondarySubmit')
  };
};

(0, _react2.storiesOf)('Modal', module).addDecorator(_addonKnobs.withKnobs).add('Default', function () {
  return _react.default.createElement(_Modal.default, props(), _react.default.createElement("p", {
    className: "".concat(prefix, "--modal-content__text")
  }, "Please see ModalWrapper for more examples and demo of the functionality."));
}, {
  info: {
    text: "\n            Modals communicate information via a secondary window and allow the user to maintain the context of a particular task.\n            Use the Modal Wrapper component to encapsulate your Modal within a button.\n          "
  }
}).add('Trap Focus', function () {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Modal.default, _extends({}, props(), {
    selectorPrimaryFocus: "#text-input-2"
  }), _react.default.createElement(_TextInput.default, {
    id: "text-input-1",
    labelText: "Text Input 1",
    placeholder: "Enter text...",
    style: {
      marginBottom: '1rem'
    }
  }), _react.default.createElement(_TextInput.default, {
    id: "text-input-2",
    labelText: "Text Input 2",
    placeholder: "Enter text..."
  })));
}, {
  info: {
    text: "\n            Specify a selector for the primary element to focus when opening a modal.\n          "
  }
});