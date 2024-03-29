"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _DatePicker = _interopRequireDefault(require("../DatePicker"));

var _DatePickerInput = _interopRequireDefault(require("../DatePickerInput"));

var _DatePicker2 = _interopRequireDefault(require("../DatePicker/DatePicker.Skeleton"));

var _withState = _interopRequireDefault(require("../../tools/withState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// Datepickers last argument contains an instance of flatpickr
// and will cause action logger to enter an infinite loop. Just don't log that argument
var datePickerOnChangeActions = (0, _addonActions.decorateAction)([function (args) {
  return args.slice(0, args.length - 2);
}]);
var patterns = {
  'Short (d{1,2}/d{4})': 'd{1,2}/d{4}',
  'Regular (d{1,2}/d{1,2}/d{4})': 'd{1,2}/d{1,2}/d{4}'
};
var props = {
  datePicker: function datePicker() {
    return {
      id: 'date-picker',
      light: (0, _addonKnobs.boolean)('Light variant (light in <DatePicker>)', false),
      onChange: datePickerOnChangeActions('onPickerChange'),
      onClose: (0, _addonActions.action)('onClose')
    };
  },
  datePickerInput: function datePickerInput() {
    return {
      id: 'date-picker-input-id',
      className: 'some-class',
      labelText: (0, _addonKnobs.text)('Label text (labelText in <DatePickerInput>)', 'Date Picker label'),
      pattern: (0, _addonKnobs.select)('The date format (pattern in <DatePickerInput>)', patterns, 'd{1,2}/d{4}'),
      placeholder: (0, _addonKnobs.text)('Placeholder text (placeholder in <DatePickerInput>)', 'mm/dd/yyyy'),
      disabled: (0, _addonKnobs.boolean)('Disabled (disabled in <DatePickerInput>)', false),
      invalid: (0, _addonKnobs.boolean)('Show form validation UI (invalid in <DatePickerInput>)', false),
      invalidText: (0, _addonKnobs.text)('Form validation UI content (invalidText in <DatePickerInput>)', 'A valid value is required'),
      iconDescription: (0, _addonKnobs.text)('Icon description (iconDescription in <DatePickerInput>)', 'Icon description'),
      onClick: (0, _addonActions.action)('onClick'),
      onChange: (0, _addonActions.action)('onInputChange')
    };
  }
};
(0, _react2.storiesOf)('DatePicker', module).addDecorator(_addonKnobs.withKnobs).add('simple', function () {
  return _react.default.createElement(_DatePicker.default, _extends({}, props.datePicker(), {
    short: (0, _addonKnobs.boolean)('Use shorter width (short in <DatePicker>)', false),
    datePickerType: "simple"
  }), _react.default.createElement(_DatePickerInput.default, props.datePickerInput()));
}, {
  info: {
    text: 'A simple Date Picker consists of an input field and no calendar.'
  }
}).add('single with calendar', function () {
  return _react.default.createElement(_DatePicker.default, _extends({}, props.datePicker(), {
    datePickerType: "single",
    dateFormat: (0, _addonKnobs.text)('The date format (dateFormat in <DatePicker>)', 'm/d/Y')
  }), _react.default.createElement(_DatePickerInput.default, props.datePickerInput()));
}, {
  info: {
    text: "\n            A single Date Picker consists of an input field and a calendar.\n          "
  }
}).add('range with calendar', function () {
  var datePickerInputProps = props.datePickerInput();
  return _react.default.createElement(_DatePicker.default, _extends({}, props.datePicker(), {
    datePickerType: "range",
    dateFormat: (0, _addonKnobs.text)('The date format (dateFormat in <DatePicker>)', 'm/d/Y')
  }), _react.default.createElement(_DatePickerInput.default, _extends({}, datePickerInputProps, {
    id: "date-picker-input-id-start"
  })), _react.default.createElement(_DatePickerInput.default, _extends({}, datePickerInputProps, {
    id: "date-picker-input-id-end"
  })));
}, {
  info: {
    text: "\n            A range Date Picker consists of two input fields and a calendar.\n          "
  }
}).add('range with calendar and min/max dates', function () {
  var datePickerInputProps = props.datePickerInput();
  return _react.default.createElement(_DatePicker.default, _extends({}, props.datePicker(), {
    minDate: "1/10/2020",
    maxDate: "1/20/2020",
    datePickerType: "range",
    dateFormat: "m/d/Y"
  }), _react.default.createElement(_DatePickerInput.default, _extends({}, datePickerInputProps, {
    id: "date-picker-input-id"
  })), _react.default.createElement(_DatePickerInput.default, _extends({}, datePickerInputProps, {
    id: "date-picker-input-id-2"
  })));
}, {
  info: {
    text: "\n            A range Date Picker consists of two input fields and a calendar, and optionally, the minDate and maxDate fields.\n          "
  }
}).add('fully controlled', function () {
  return _react.default.createElement(_withState.default, {
    initialState: {
      date: ''
    }
  }, function (_ref) {
    var state = _ref.state,
        setState = _ref.setState;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_DatePicker.default, {
      datePickerType: "single",
      dateFormat: "m/d/Y",
      value: state.date,
      onChange: function onChange(eventOrDates) {
        var value = eventOrDates.target ? eventOrDates.target.value : eventOrDates[0];
        setState({
          date: value
        });
      }
    }, _react.default.createElement(_DatePickerInput.default, _extends({}, props.datePickerInput(), {
      id: "date-picker-input-id"
    }))), _react.default.createElement("button", {
      onClick: function onClick() {
        return setState({
          date: '01/01/2011'
        });
      }
    }, "Click me to set to 01/01/2011"));
  });
}, {
  info: {
    text: "\n            If your application needs to control the value of the date picker and\n            be notified of any changes.\n          "
  }
}).add('skeleton', function () {
  return _react.default.createElement(_DatePicker2.default, {
    range: true
  });
}, {
  info: {
    text: "\n            Placeholder skeleton state to use when content is loading.\n            "
  }
});