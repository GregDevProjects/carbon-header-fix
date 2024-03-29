"use strict";

var _react = _interopRequireDefault(require("react"));

var _carbonIcons = require("carbon-icons");

var _iconsReact = require("@carbon/icons-react");

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _carbonComponents = require("carbon-components");

var _ModalWrapper = _interopRequireDefault(require("../ModalWrapper"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _Select = _interopRequireDefault(require("../Select"));

var _SelectItem = _interopRequireDefault(require("../SelectItem"));

var _RadioButtonGroup = _interopRequireDefault(require("../RadioButtonGroup"));

var _RadioButton = _interopRequireDefault(require("../RadioButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var prefix = _carbonComponents.settings.prefix;
var icons = {
  None: 'None',
  'Add with filled circle (AddFilled16 from `@carbon/icons`)': 'AddFilled16',
  'Search (Search16 from `@carbon/icons`)': 'Search16'
};
var iconMap = {
  iconAddSolid: _carbonIcons.iconAddSolid,
  iconSearch: _carbonIcons.iconSearch,
  AddFilled16: function AddFilled16(props) {
    return _react.default.createElement(_iconsReact.AddFilled16, _extends({
      className: "".concat(prefix, "--btn__icon")
    }, props));
  },
  Search16: function Search16(props) {
    return _react.default.createElement(_iconsReact.Search16, _extends({
      className: "".concat(prefix, "--btn__icon")
    }, props));
  }
};

var props = function props() {
  var iconToUse = iconMap[(0, _addonKnobs.select)('Icon (icon)', icons, 'none')];
  return {
    className: 'some-class',
    disabled: (0, _addonKnobs.boolean)('Disable the launcher button (disabled)', false),
    passiveModal: (0, _addonKnobs.boolean)('Without footer (passiveModal)', false),
    danger: (0, _addonKnobs.boolean)('Danger mode (danger)', false),
    buttonTriggerText: (0, _addonKnobs.text)('The text in the trigger button (buttonTriggerText)', 'Launch Modal'),
    renderTriggerButtonIcon: typeof iconToUse === 'function' && iconToUse,
    triggerButtonIcon: typeof iconToUse !== 'function' && iconToUse,
    modalLabel: (0, _addonKnobs.text)('The modal label (optional) (modalLabel)', 'Label'),
    modalHeading: (0, _addonKnobs.text)('The modal heading (modalHeading)', 'Modal'),
    selectorPrimaryFocus: (0, _addonKnobs.text)('Primary focus element selector (selectorPrimaryFocus)', '[data-modal-primary-focus]'),
    primaryButtonText: (0, _addonKnobs.text)('The text in the primary button (primaryButtonText)', 'Save'),
    secondaryButtonText: (0, _addonKnobs.text)('The text in the secondary button (secondaryButtonText)', 'Cancel'),
    shouldCloseAfterSubmit: (0, _addonKnobs.boolean)('Close after submit (shouldCloseAfterSubmit)', true),
    focusTrap: (0, _addonKnobs.boolean)('Trap focus (focusTrap)', false),
    onBlur: (0, _addonActions.action)('onBlur'),
    onClick: (0, _addonActions.action)('onClick'),
    onFocus: (0, _addonActions.action)('onFocus'),
    onMouseDown: (0, _addonActions.action)('onMouseDown'),
    onMouseEnter: (0, _addonActions.action)('onMouseEnter'),
    onMouseLeave: (0, _addonActions.action)('onMouseLeave'),
    onMouseUp: (0, _addonActions.action)('onMouseUp')
  };
};

(0, _react2.storiesOf)('ModalWrapper', module).addDecorator(_addonKnobs.withKnobs).add('transactional/passive modal', function () {
  return _react.default.createElement(_ModalWrapper.default, _extends({
    id: "transactional-passive-modal",
    handleSubmit: function handleSubmit() {
      (0, _addonActions.action)('onSubmit')();
      return true;
    }
  }, props()), _react.default.createElement("p", {
    className: "".concat(prefix, "--modal-content__text")
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus fermentum risus, sit amet fringilla nunc pellentesque quis. Duis quis odio ultrices, cursus lacus ac, posuere felis. Donec dignissim libero in augue mattis, a molestie metus vestibulum. Aliquam placerat felis ultrices lorem condimentum, nec ullamcorper felis porttitor. Nunc at maximus purus. Curabitur sodales eros sit amet dolor bibendum gravida. Sed efficitur, arcu imperdiet vestibulum ultrices, risus diam ullamcorper arcu, sit amet gravida metus ligula quis metus."), _react.default.createElement("p", {
    className: "".concat(prefix, "--modal-content__text")
  }, "Donec id sapien ex. Duis aliquam tortor nec mollis pulvinar. Fusce sit amet libero blandit, sollicitudin est in, tempor lectus. Donec convallis condimentum mi eu ultrices. Sed risus ipsum, fermentum ut fringilla sed, rutrum eget purus. Morbi molestie dui nisi, consectetur posuere ante viverra non. Integer cursus quis risus ut cursus. Aenean ut dictum nibh. Cras at leo interdum, ornare elit non, posuere enim. Mauris hendrerit nunc eget malesuada congue. Nam velit leo, convallis et lobortis ac, semper ut urna. Etiam nec neque urna. Donec sagittis eros urna, at aliquet erat consectetur ac. Proin faucibus sed erat tempus accumsan. Nam pretium malesuada commodo. Mauris mollis elementum neque, sed ornare urna vestibulum non. Curabitur elementum in ex in commodo. Donec laoreet consequat sapien. Sed eget tortor aliquam, facilisis est vitae, commodo magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a lobortis ex. Nulla mollis tincidunt sodales."));
}, {
  info: {
    text: "\n            Transactional modals are used to validate user decisions or to gain secondary confirmation from the user.\n            Passive modal notifications should only appear if there is an action the user needs to address immediately.\n            Passive modal notifications are persistent on screen.\n          "
  }
}).add('input modal', function () {
  return _react.default.createElement(_ModalWrapper.default, _extends({
    id: "input-modal",
    handleSubmit: function handleSubmit() {
      (0, _addonActions.action)('onSubmit')();
      return true;
    }
  }, props()), _react.default.createElement(_TextInput.default, {
    id: "test2",
    placeholder: "Hint text here",
    labelText: "Text Input:"
  }), _react.default.createElement("br", null), _react.default.createElement(_Select.default, {
    id: "select-1",
    labelText: "Select"
  }, _react.default.createElement(_SelectItem.default, {
    disabled: true,
    hidden: true,
    value: "placeholder-item",
    text: "Pick an option"
  }), _react.default.createElement(_SelectItem.default, {
    value: "option-1",
    text: "Option 1"
  }), _react.default.createElement(_SelectItem.default, {
    value: "option-2",
    text: "Option 2"
  }), _react.default.createElement(_SelectItem.default, {
    value: "option-3",
    text: "Option 3"
  })), _react.default.createElement("br", null), _react.default.createElement(_RadioButtonGroup.default, {
    name: "radio-button-group",
    defaultSelected: "default-selected"
  }, _react.default.createElement(_RadioButton.default, {
    value: "default-selected",
    id: "radio-1",
    labelText: "Radio Button label 1",
    className: "some-class"
  }), _react.default.createElement(_RadioButton.default, {
    value: "standard",
    labelText: "Radio Button label 2",
    id: "radio-2",
    className: "some-class"
  }), _react.default.createElement(_RadioButton.default, {
    value: "disabled",
    labelText: "Radio Button label 3",
    id: "radio-3",
    className: "some-class",
    disabled: true
  })));
}, {
  info: {
    text: "\n            Input modals are used to follow up with previous user input. These modals should include areas\n            for input that the user can interact with, such as forms, dropdowns, selectors, and links. The example\n            below shows a Modal Wrapper component with various input components.\n          "
  }
});