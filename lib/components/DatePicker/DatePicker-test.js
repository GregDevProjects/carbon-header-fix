"use strict";

var _react = _interopRequireDefault(require("react"));

var _DatePicker = _interopRequireDefault(require("../DatePicker"));

var _DatePicker2 = _interopRequireDefault(require("../DatePicker/DatePicker.Skeleton"));

var _enzyme = require("enzyme");

var _DatePickerInput = _interopRequireDefault(require("../DatePickerInput/DatePickerInput"));

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var prefix = _carbonComponents.settings.prefix;
describe('DatePicker', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_DatePicker.default, {
      onChange: function onChange() {},
      className: "extra-class"
    }, _react.default.createElement("div", {
      className: "test-child"
    }), _react.default.createElement("div", {
      className: "test-child"
    })));
    var datepicker = wrapper.childAt(0);
    it('has the expected classes', function () {
      expect(datepicker.children().hasClass("".concat(prefix, "--date-picker"))).toBe(true);
    });
    it('should add extra classes that are passed via className', function () {
      expect(datepicker.children().hasClass('extra-class')).toBe(true);
    });
    it('should add the date picker type as expected', function () {
      expect(wrapper.props().datePickerType).toEqual(undefined);
      wrapper.setProps({
        datePickerType: 'simple'
      });
      expect(wrapper.props().datePickerType).toEqual('simple');
    });
    it('should specify short date picker as expected', function () {
      expect(wrapper.props().short).toEqual(false);
      wrapper.setProps({
        short: true
      });
      expect(wrapper.props().short).toEqual(true);
    });
    it('should specify light date picker as expected', function () {
      expect(wrapper.props().light).toEqual(false);
      wrapper.setProps({
        light: true
      });
      expect(wrapper.props().light).toEqual(true);
    });
    it('should add the date format as expected', function () {
      expect(wrapper.props().dateFormat).toEqual('m/d/Y');
      wrapper.setProps({
        dateFormat: 'd/m/Y'
      });
      expect(wrapper.props().dateFormat).toEqual('d/m/Y');
    });
    it('has the value as expected', function () {
      expect(wrapper.props().value).toEqual(undefined);
      wrapper.setProps({
        value: '11/08/2017'
      });
      expect(wrapper.props().value).toEqual('11/08/2017');
    });
    it('should render the children as expected', function () {
      expect(wrapper.props().children.length).toEqual(2);
    });
  });
  describe('Simple date picker', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_DatePicker.default, {
      datePickerType: "simple",
      className: "extra-class"
    }, _react.default.createElement("div", {
      className: "test-child"
    })));
    var datepicker = wrapper.childAt(0);
    it('has the simple date picker class', function () {
      expect(datepicker.children().hasClass("".concat(prefix, "--date-picker--simple"))).toBe(true);
    });
    it('has the value as expected', function () {
      expect(wrapper.props().value).toEqual(undefined);
      wrapper.setProps({
        value: '11/08/2017'
      });
      expect(wrapper.props().value).toEqual('11/08/2017');
    });
    it('should not initalize a calendar', function () {
      expect(wrapper.cal).toEqual(undefined);
    });
  });
  describe('Single date picker', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_DatePicker.default, {
      onChange: function onChange() {},
      datePickerType: "single",
      className: "extra-class"
    }, _react.default.createElement("div", {
      className: "test-child"
    }, _react.default.createElement("input", {
      type: "text",
      className: "".concat(prefix, "--date-picker__input")
    }))));
    var datepicker = wrapper.childAt(0);
    var input = wrapper.find(".".concat(prefix, "--date-picker__input"));
    var icon = wrapper.find('svg');
    it('has the single date picker class', function () {
      expect(datepicker.children().hasClass("".concat(prefix, "--date-picker--single"))).toBe(true);
    });
    it('should initalize a calendar', function () {
      expect(wrapper.instance().cal).toBeDefined();
    });
    it('should update the classnames', function () {
      expect(wrapper.instance().cal.calendarContainer.classList.contains("".concat(prefix, "--date-picker__calendar"))).toBe(true);
    });
    it('has the value as expected', function () {
      expect(wrapper.props().value).toEqual(undefined);
      wrapper.setProps({
        value: '11/08/2017'
      });
      expect(wrapper.props().value).toEqual('11/08/2017');
    });
    it('should not render an icon', function () {
      expect(icon.length).toEqual(0);
    });
  });
  describe('Single date picker with initial value', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_DatePicker.default, {
      datePickerType: "single",
      dateFormat: "m/d/Y",
      value: '02/26/2017',
      appendTo: document.body.firstChild,
      onChange: function onChange() {}
    }, _react.default.createElement(_DatePickerInput.default, {
      key: "label",
      labelText: "Controlled Date",
      id: "date-picker-input-id"
    })));
    it('has the value as expected', function () {
      // MOUNT
      expect(wrapper.props().value).toEqual('02/26/2017'); // UPDATE

      wrapper.setProps({
        value: '02/17/2017'
      });
      expect(wrapper.props().value).toEqual('02/17/2017');
    });
    it('sends appendTo to Flatpickr', function () {
      expect(wrapper.instance().cal.config.appendTo).toBe(document.body.firstChild);
    });
  });
  describe('Range date picker', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_DatePicker.default, {
      onChange: function onChange() {},
      datePickerType: "range",
      className: "extra-class"
    }, _react.default.createElement("div", {
      className: "test-child"
    }, _react.default.createElement("input", {
      type: "text",
      className: "".concat(prefix, "--date-picker__input"),
      id: "input-from"
    })), _react.default.createElement("div", {
      className: "test-child"
    }, _react.default.createElement("input", {
      type: "text",
      className: "".concat(prefix, "--date-picker__input"),
      id: "input-to"
    }))));
    var datepicker = wrapper.childAt(0);
    it('has the range date picker class', function () {
      expect(datepicker.children().hasClass("".concat(prefix, "--date-picker--range"))).toBe(true);
    });
    it('should initalize a calendar', function () {
      expect(wrapper.instance().cal).toBeDefined();
    });
    it('should update the classnames', function () {
      expect(wrapper.instance().cal.calendarContainer.classList.contains("".concat(prefix, "--date-picker__calendar"))).toBe(true);
    });
    it('has the value as expected', function () {
      expect(wrapper.props().value).toEqual(undefined);
      wrapper.setProps({
        value: '11/08/2017'
      });
      expect(wrapper.props().value).toEqual('11/08/2017');
    });
  });
  describe('Date picker with locale', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_DatePicker.default, {
      onChange: function onChange() {},
      datePickerType: "range",
      className: "extra-class",
      locale: "es"
    }, _react.default.createElement("div", {
      className: "test-child"
    }, _react.default.createElement("input", {
      type: "text",
      className: "".concat(prefix, "--date-picker__input"),
      id: "input-from"
    })), _react.default.createElement("div", {
      className: "test-child"
    }, _react.default.createElement("input", {
      type: "text",
      className: "".concat(prefix, "--date-picker__input"),
      id: "input-to"
    }))));
    var wrapperNoLocale = (0, _enzyme.mount)(_react.default.createElement(_DatePicker.default, {
      onChange: function onChange() {},
      datePickerType: "range",
      className: "extra-class"
    }, _react.default.createElement("div", {
      className: "test-child"
    }, _react.default.createElement("input", {
      type: "text",
      className: "".concat(prefix, "--date-picker__input"),
      id: "input-from"
    })), _react.default.createElement("div", {
      className: "test-child"
    }, _react.default.createElement("input", {
      type: "text",
      className: "".concat(prefix, "--date-picker__input"),
      id: "input-to"
    }))));
    it('has the range date picker locale', function () {
      var datepicker = wrapper.find('DatePicker');
      expect(datepicker.props().locale).toBe('es');
    });
    it('has the range date picker without locale defined', function () {
      var datepicker = wrapperNoLocale.find('DatePicker');
      expect(datepicker.props().locale).toBe('en');
    });
  });
  describe('Date picker can be used with enzyme shallow', function () {
    beforeEach(function (done) {
      var spy = {};
      spy.console = jest.spyOn(console, 'error').mockImplementation(function (e) {
        done(e);
      });
      done();
    });
    it('date picker should not throw exception when mounted or unmounted', function () {
      var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_DatePicker.default, {
        onChange: function onChange() {},
        datePickerType: "range",
        className: "extra-class",
        locale: "es"
      }, _react.default.createElement("div", {
        className: "test-child"
      }, _react.default.createElement("input", {
        type: "text",
        className: "".concat(prefix, "--date-picker__input"),
        id: "input-from"
      })), _react.default.createElement("div", {
        className: "test-child"
      }, _react.default.createElement("input", {
        type: "text",
        className: "".concat(prefix, "--date-picker__input"),
        id: "input-to"
      }))));
      expect(wrapper.find('DatePicker')).toBeDefined();
      wrapper.unmount();
    });
  });
  describe('Date picker with minDate and maxDate', function () {
    console.error = jest.fn(); // eslint-disable-line no-console

    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_DatePicker.default, {
      onChange: function onChange() {},
      datePickerType: "range",
      className: "extra-class",
      minDate: "01/01/2018",
      maxDate: "01/30/2018"
    }, _react.default.createElement("div", {
      className: "test-child"
    }, _react.default.createElement("input", {
      type: "text",
      className: "".concat(prefix, "--date-picker__input"),
      id: "input-from"
    })), _react.default.createElement("div", {
      className: "test-child"
    }, _react.default.createElement("input", {
      type: "text",
      className: "".concat(prefix, "--date-picker__input"),
      id: "input-to"
    }))));
    it('has the range date picker with min and max dates', function () {
      var datepicker = wrapper.find('DatePicker');
      expect(datepicker.props().minDate).toBe('01/01/2018');
      expect(datepicker.props().maxDate).toBe('01/30/2018');
    });
    it('should not have "console.error" being created', function () {
      expect(console.error).not.toBeCalled(); // eslint-disable-line no-console
    });
  });
});
describe('DatePickerInput', function () {
  it('should call `openCalendar` on calendar icon click', function () {
    var mockOpenCalendar = jest.fn();
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_DatePickerInput.default, {
      labelText: "Date Picker label",
      id: "input-from",
      openCalendar: mockOpenCalendar
    }));
    wrapper.find('svg').simulate('click');
    expect(mockOpenCalendar).toHaveBeenCalled();
  });
});
describe('DatePickerSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_DatePicker2.default, {
      range: true
    }));
    it('Has the expected classes', function () {
      expect(wrapper.children().hasClass("".concat(prefix, "--skeleton"))).toEqual(true);
      expect(wrapper.children().hasClass("".concat(prefix, "--date-picker"))).toEqual(true);
      expect(wrapper.children().hasClass("".concat(prefix, "--date-picker--range"))).toEqual(true);
    });
  });
});