function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';
import flatpickr from 'flatpickr';
import l10n from 'flatpickr/dist/l10n/index';
import { settings } from 'carbon-components';
import DatePickerInput from '../DatePickerInput';
import carbonFlatpickrFixEventsPlugin from './plugins/fixEventsPlugin';
import carbonFlatpickrRangePlugin from './plugins/rangePlugin';
import { match, keys } from '../../internal/keyboard';
var prefix = settings.prefix; // Weekdays shorthand for english locale

l10n.en.weekdays.shorthand.forEach(function (day, index) {
  var currentDay = l10n.en.weekdays.shorthand;

  if (currentDay[index] === 'Thu' || currentDay[index] === 'Th') {
    currentDay[index] = 'Th';
  } else {
    currentDay[index] = currentDay[index].charAt(0);
  }
});
var forEach = Array.prototype.forEach;
/**
 * @param {number} monthNumber The month number.
 * @param {boolean} shorthand `true` to use shorthand month.
 * @param {Locale} locale The Flatpickr locale data.
 * @returns {string} The month string.
 */

var monthToStr = function monthToStr(monthNumber, shorthand, locale) {
  return locale.months[shorthand ? 'shorthand' : 'longhand'][monthNumber];
};
/**
 * @param {object} config Plugin configuration.
 * @param {boolean} [config.shorthand] `true` to use shorthand month.
 * @param {string} config.selectorFlatpickrMonthYearContainer The CSS selector for the container of month/year selection UI.
 * @param {string} config.selectorFlatpickrYearContainer The CSS selector for the container of year selection UI.
 * @param {string} config.selectorFlatpickrCurrentMonth The CSS selector for the text-based month selection UI.
 * @param {string} config.classFlatpickrCurrentMonth The CSS class for the text-based month selection UI.
 * @returns {Plugin} A Flatpickr plugin to use text instead of `<select>` for month picker.
 */


var carbonFlatpickrMonthSelectPlugin = function carbonFlatpickrMonthSelectPlugin(config) {
  return function (fp) {
    var setupElements = function setupElements() {
      var _fp$monthElements;

      if (!fp.monthElements) {
        return;
      }

      fp.monthElements.forEach(function (elem) {
        if (!elem.parentNode) return;
        elem.parentNode.removeChild(elem);
      });

      (_fp$monthElements = fp.monthElements).splice.apply(_fp$monthElements, [0, fp.monthElements.length].concat(_toConsumableArray(fp.monthElements.map(function () {
        // eslint-disable-next-line no-underscore-dangle
        var monthElement = fp._createElement('span', config.classFlatpickrCurrentMonth);

        monthElement.textContent = monthToStr(fp.currentMonth, config.shorthand === true, fp.l10n);
        fp.yearElements[0].closest(config.selectorFlatpickrMonthYearContainer).insertBefore(monthElement, fp.yearElements[0].closest(config.selectorFlatpickrYearContainer));
        return monthElement;
      }))));
    };

    var updateCurrentMonth = function updateCurrentMonth() {
      var monthStr = monthToStr(fp.currentMonth, config.shorthand === true, fp.l10n);
      fp.yearElements.forEach(function (elem) {
        var currentMonthContainer = elem.closest(config.selectorFlatpickrMonthYearContainer);
        Array.prototype.forEach.call(currentMonthContainer.querySelectorAll('.cur-month'), function (monthElement) {
          monthElement.textContent = monthStr;
        });
      });
    };

    var register = function register() {
      fp.loadedPlugins.push('carbonFlatpickrMonthSelectPlugin');
    };

    return {
      onMonthChange: updateCurrentMonth,
      onValueUpdate: updateCurrentMonth,
      onOpen: updateCurrentMonth,
      onReady: [setupElements, updateCurrentMonth, register]
    };
  };
};

var DatePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DatePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DatePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      if (e.target.value === '' && _this.cal && _this.cal.selectedDates.length > 0) {
        _this.cal.clear();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "addKeyboardEvents", function (cal) {
      if (_this.inputField) {
        _this.inputField.addEventListener('keydown', function (e) {
          if (match(e, keys.ArrowDown)) {
            (cal.selectedDateElem || cal.todayDateElem || cal.calendarContainer).focus();
          }
        });

        _this.inputField.addEventListener('change', _this.onChange);
      }

      if (_this.toInputField) {
        _this.toInputField.addEventListener('blur', function (evt) {
          if (!_this.cal.calendarContainer.contains(evt.relatedTarget)) {
            _this.cal.close();
          }
        });

        _this.toInputField.addEventListener('keydown', function (e) {
          if (match(e, keys.ArrowDown)) {
            (cal.selectedDateElem || cal.todayDateElem || cal.calendarContainer).focus();
          }
        });

        _this.toInputField.addEventListener('change', _this.onChange);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "openCalendar", function () {
      if (_this.cal) {
        _this.cal.open();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateClassNames", function (calendar) {
      var calendarContainer = calendar.calendarContainer;
      var daysContainer = calendar.days;

      if (calendarContainer && daysContainer) {
        // calendarContainer and daysContainer are undefined if flatpickr detects a mobile device
        calendarContainer.classList.add("".concat(prefix, "--date-picker__calendar"));
        calendarContainer.querySelector('.flatpickr-month').classList.add("".concat(prefix, "--date-picker__month"));
        calendarContainer.querySelector('.flatpickr-weekdays').classList.add("".concat(prefix, "--date-picker__weekdays"));
        calendarContainer.querySelector('.flatpickr-days').classList.add("".concat(prefix, "--date-picker__days"));
        forEach.call(calendarContainer.querySelectorAll('.flatpickr-weekday'), function (item) {
          var currentItem = item;
          currentItem.innerHTML = currentItem.innerHTML.replace(/\s+/g, '');
          currentItem.classList.add("".concat(prefix, "--date-picker__weekday"));
        });
        forEach.call(daysContainer.querySelectorAll('.flatpickr-day'), function (item) {
          item.classList.add("".concat(prefix, "--date-picker__day"));

          if (item.classList.contains('today') && calendar.selectedDates.length > 0) {
            item.classList.add('no-border');
          } else if (item.classList.contains('today') && calendar.selectedDates.length === 0) {
            item.classList.remove('no-border');
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "assignInputFieldRef", function (node) {
      _this.inputField = !node ? null : // Child is a regular DOM node, seen in tests
      node.nodeType === Node.ELEMENT_NODE ? node.querySelector(".".concat(prefix, "--date-picker__input")) : // Child is a React component
      node.input && node.input.nodeType === Node.ELEMENT_NODE ? node.input : null;
    });

    _defineProperty(_assertThisInitialized(_this), "assignToInputFieldRef", function (node) {
      _this.toInputField = !node ? null : // Child is a regular DOM node, seen in tests
      node.nodeType === Node.ELEMENT_NODE ? node.querySelector(".".concat(prefix, "--date-picker__input")) : // Child is a React component
      node.input && node.input.nodeType === Node.ELEMENT_NODE ? node.input : null;
    });

    _defineProperty(_assertThisInitialized(_this), "isLabelTextEmpty", function (children) {
      return children.every(function (child) {
        return !child.props.labelText;
      });
    });

    return _this;
  }

  _createClass(DatePicker, [{
    key: "UNSAFE_componentWillUpdate",
    value: function UNSAFE_componentWillUpdate(nextProps) {
      if (nextProps.value !== this.props.value) {
        if (this.cal) {
          this.cal.setDate(nextProps.value);
          this.updateClassNames(this.cal);
        } else {
          if (this.inputField) {
            this.inputField.value = nextProps.value;
          }
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          appendTo = _this$props.appendTo,
          datePickerType = _this$props.datePickerType,
          dateFormat = _this$props.dateFormat,
          locale = _this$props.locale,
          minDate = _this$props.minDate,
          maxDate = _this$props.maxDate,
          value = _this$props.value,
          onClose = _this$props.onClose;

      if (datePickerType === 'single' || datePickerType === 'range') {
        var onHook = function onHook(electedDates, dateStr, instance) {
          _this2.updateClassNames(instance);
        }; // inputField ref might not be set in enzyme tests


        if (this.inputField) {
          this.cal = new flatpickr(this.inputField, {
            disableMobile: true,
            defaultDate: value,
            appendTo: appendTo,
            mode: datePickerType,
            allowInput: true,
            dateFormat: dateFormat,
            locale: l10n[locale],
            minDate: minDate,
            maxDate: maxDate,
            plugins: [datePickerType === 'range' ? new carbonFlatpickrRangePlugin({
              input: this.toInputField
            }) : function () {}, carbonFlatpickrMonthSelectPlugin({
              selectorFlatpickrMonthYearContainer: '.flatpickr-current-month',
              selectorFlatpickrYearContainer: '.numInputWrapper',
              selectorFlatpickrCurrentMonth: '.cur-month',
              classFlatpickrCurrentMonth: 'cur-month'
            }), carbonFlatpickrFixEventsPlugin({
              inputFrom: this.inputField,
              inputTo: this.toInputField
            })],
            clickOpens: true,
            nextArrow: this.rightArrowHTML(),
            prevArrow: this.leftArrowHTML(),
            onChange: function onChange() {
              var onChange = _this2.props.onChange;

              if (onChange) {
                onChange.apply(void 0, arguments);
              }
            },
            onClose: onClose,
            onReady: onHook,
            onMonthChange: onHook,
            onYearChange: onHook,
            onOpen: onHook,
            onValueUpdate: onHook
          });
          this.addKeyboardEvents(this.cal);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.cal) {
        this.cal.destroy();
      }

      if (this.inputField) {
        this.inputField.removeEventListener('change', this.onChange);
      }

      if (this.toInputField) {
        this.toInputField.removeEventListener('change', this.onChange);
      }
    }
  }, {
    key: "rightArrowHTML",
    value: function rightArrowHTML() {
      return "\n      <svg width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\">\n        <polygon points=\"11,8 6,13 5.3,12.3 9.6,8 5.3,3.7 6,3 \"/>\n        <rect width=\"16\" height=\"16\" style=\"fill:none\" />\n      </svg>";
    }
  }, {
    key: "leftArrowHTML",
    value: function leftArrowHTML() {
      return "\n      <svg width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\">\n        <polygon points=\"5,8 10,3 10.7,3.7 6.4,8 10.7,12.3 10,13 \"/>\n        <rect width=\"16\" height=\"16\" style=\"fill:none\" />\n      </svg>";
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames,
          _this3 = this;

      var _this$props2 = this.props,
          appendTo = _this$props2.appendTo,
          children = _this$props2.children,
          className = _this$props2.className,
          short = _this$props2.short,
          light = _this$props2.light,
          datePickerType = _this$props2.datePickerType,
          minDate = _this$props2.minDate,
          maxDate = _this$props2.maxDate,
          dateFormat = _this$props2.dateFormat,
          onChange = _this$props2.onChange,
          locale = _this$props2.locale,
          value = _this$props2.value,
          other = _objectWithoutProperties(_this$props2, ["appendTo", "children", "className", "short", "light", "datePickerType", "minDate", "maxDate", "dateFormat", "onChange", "locale", "value"]);

      var datePickerClasses = classNames("".concat(prefix, "--date-picker"), className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--date-picker--short"), short), _defineProperty(_classNames, "".concat(prefix, "--date-picker--light"), light), _defineProperty(_classNames, "".concat(prefix, "--date-picker--simple"), datePickerType === 'simple'), _defineProperty(_classNames, "".concat(prefix, "--date-picker--single"), datePickerType === 'single'), _defineProperty(_classNames, "".concat(prefix, "--date-picker--range"), datePickerType === 'range'), _defineProperty(_classNames, "".concat(prefix, "--date-picker--nolabel"), datePickerType === 'range' && this.isLabelTextEmpty(children)), _classNames));
      var childArray = React.Children.toArray(children);
      var childrenWithProps = childArray.map(function (child, index) {
        if (index === 0 && child.type === DatePickerInput) {
          return React.cloneElement(child, {
            datePickerType: datePickerType,
            ref: _this3.assignInputFieldRef,
            openCalendar: _this3.openCalendar
          });
        }

        if (index === 1 && child.type === DatePickerInput) {
          return React.cloneElement(child, {
            datePickerType: datePickerType,
            ref: _this3.assignToInputFieldRef,
            openCalendar: _this3.openCalendar
          });
        }

        if (index === 0) {
          return React.cloneElement(child, {
            ref: _this3.assignInputFieldRef
          });
        }

        if (index === 1) {
          return React.cloneElement(child, {
            ref: _this3.assignToInputFieldRef
          });
        }
      });
      return React.createElement("div", {
        className: "".concat(prefix, "--form-item")
      }, React.createElement("div", _extends({
        className: datePickerClasses
      }, other), childrenWithProps));
    }
  }]);

  return DatePicker;
}(Component);

_defineProperty(DatePicker, "propTypes", {
  /**
   * The child nodes.
   */
  children: PropTypes.node,

  /**
   * The CSS class names.
   */
  className: PropTypes.string,

  /**
   * `true` to use the short version.
   */
  short: PropTypes.bool,

  /**
   * `true` to use the light version.
   */
  light: PropTypes.bool,

  /**
   * The type of the date picker:
   *
   * * `simple` - Without calendar dropdown.
   * * `single` - With calendar dropdown and single date.
   * * `range` - With calendar dropdown and a date range.
   */
  datePickerType: PropTypes.oneOf(['simple', 'single', 'range']),

  /**
   * The date format.
   */
  dateFormat: PropTypes.string,

  /**
   *  The language locale used to format the days of the week, months, and numbers.
   *
   * * `ar` - Arabic
   * * `at` - Austria
   * * `be` - Belarusian
   * * `bg` - Bulgarian
   * * `bn` - Bangla
   * * `cat` - Catalan
   * * `cs` - Czech
   * * `cy` - Welsh
   * * `da` - Danish
   * * `de` - German
   * * `en` - English
   * * `eo` - Esperanto
   * * `es` - Spanish
   * * `et` - Estonian
   * * `fa` - Persian
   * * `fi` - Finnish
   * * `fr` - French
   * * `gr` - Greek
   * * `he` - Hebrew
   * * `hi` - Hindi
   * * `hr` - Croatian
   * * `hu` - Hungarian
   * * `id` - Indonesian
   * * `it` - Italian
   * * `ja` - Japanese
   * * `ko` - Korean
   * * `lt` - Lithuanian
   * * `lv` - Latvian
   * * `mk` - Macedonian
   * * `mn` - Mongolian
   * * `ms` - Malaysian
   * * `my` - Burmese
   * * `nl` - Dutch
   * * `no` - Norwegian
   * * `pa` - Punjabi
   * * `pl` - Polish
   * * `pt` - Portuguese
   * * `ro` - Romanian
   * * `si` - Sinhala
   * * `sk` - Slovak
   * * `sl` - Slovenian
   * * `sq` - Albanian
   * * `sr` - Serbian
   * * `sv` - Swedish
   * * `th` - Thai
   * * `tr` - Turkish
   * * `uk` - Ukrainian
   * * `vn` - Vietnamese
   * * `zh` - Mandarin
   */
  locale: PropTypes.oneOf(['ar', 'at', 'be', 'bg', 'bn', 'cat', 'cs', 'cy', 'da', 'de', 'en', 'en', 'eo', 'es', 'et', 'fa', 'fi', 'fr', 'gr', 'he', 'hi', 'hr', 'hu', 'id', 'it', 'ja', 'ko', 'lt', 'lv', 'mk', 'mn', 'ms', 'my', 'nl', 'no', 'pa', 'pl', 'pt', 'ro', 'ru', 'si', 'sk', 'sl', 'sq', 'sr', 'sv', 'th', 'tr', 'uk', 'vn', 'zh']),

  /**
   * The value of the date value provided to flatpickr, could
   * be a date, a date number, a date string, an array of dates.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])), PropTypes.object, PropTypes.number]),

  /**
   * The DOM element the Flatpicker should be inserted into. `<body>` by default.
   */
  appendTo: PropTypes.object,

  /**
   * The `change` event handler.
   */
  onChange: PropTypes.func,

  /**
   * The `close` event handler.
   */
  onClose: PropTypes.func,

  /**
   * The minimum date that a user can start picking from.
   */
  minDate: PropTypes.string,

  /**
   * The maximum date that a user can pick to.
   */
  maxDate: PropTypes.string
});

_defineProperty(DatePicker, "defaultProps", {
  short: false,
  light: false,
  dateFormat: 'm/d/Y',
  locale: 'en'
});

export { DatePicker as default };