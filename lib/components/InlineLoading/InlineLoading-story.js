"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _Button = _interopRequireDefault(require("../Button"));

var _InlineLoading = _interopRequireDefault(require("../InlineLoading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var props = function props() {
  return {
    status: (0, _addonKnobs.select)('Loading status (status)', ['inactive', 'active', 'finished', 'error'], 'active'),
    iconDescription: (0, _addonKnobs.text)('Icon description (iconDescription)', 'Active loading indicator'),
    description: (0, _addonKnobs.text)('Loading progress description (description)', 'Loading data...'),
    successDelay: (0, _addonKnobs.number)('The duration for successful state before `onSuccess` fires (successDelay)', 1500),
    onSuccess: (0, _addonActions.action)('onSuccess')
  };
};

(0, _react2.storiesOf)('InlineLoading', module).addDecorator(_addonKnobs.withKnobs).add('Inline loading', function () {
  return _react.default.createElement(_InlineLoading.default, props());
}, {
  info: {
    text: "\n            Inline Loading spinners are used when creating, updating, or deleting an item.\n            They help notify users that their change is underway, with different states for 'loading' and 'success'.\n          "
  }
}).add('UX example', function () {
  function MockSubmission(_ref) {
    var children = _ref.children;

    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        isSubmitting = _useState2[0],
        setIsSubmitting = _useState2[1];

    var _useState3 = (0, _react.useState)(false),
        _useState4 = _slicedToArray(_useState3, 2),
        success = _useState4[0],
        setSuccess = _useState4[1];

    var _useState5 = (0, _react.useState)('Submitting...'),
        _useState6 = _slicedToArray(_useState5, 2),
        description = _useState6[0],
        setDescription = _useState6[1];

    var _useState7 = (0, _react.useState)('off'),
        _useState8 = _slicedToArray(_useState7, 2),
        ariaLive = _useState8[0],
        setAriaLive = _useState8[1];

    var handleSubmit = function handleSubmit() {
      setIsSubmitting(true);
      setAriaLive('assertive'); // Instead of making a real request, we mock it with a timer

      setTimeout(function () {
        setIsSubmitting(false);
        setSuccess(true);
        setDescription('Submitted!'); // To make submittable again, we reset the state after a bit so the user gets completion feedback

        setTimeout(function () {
          setSuccess(false);
          setDescription('Submitting...');
          setAriaLive('off');
        }, 1500);
      }, 2000);
    };

    return children({
      handleSubmit: handleSubmit,
      isSubmitting: isSubmitting,
      success: success,
      description: description,
      ariaLive: ariaLive
    });
  }

  MockSubmission.displayName = 'InlineLoading';
  MockSubmission.__docgenInfo = _objectSpread({}, _InlineLoading.default.__docgenInfo, {
    props: _objectSpread({}, _InlineLoading.default.__docgenInfo.props)
  });
  return _react.default.createElement(MockSubmission, null, function (_ref2) {
    var handleSubmit = _ref2.handleSubmit,
        isSubmitting = _ref2.isSubmitting,
        success = _ref2.success,
        description = _ref2.description,
        ariaLive = _ref2.ariaLive;
    return _react.default.createElement("div", {
      style: {
        display: 'flex',
        width: '300px'
      }
    }, _react.default.createElement(_Button.default, {
      kind: "secondary",
      disabled: isSubmitting || success
    }, "Cancel"), isSubmitting || success ? _react.default.createElement(_InlineLoading.default, {
      style: {
        marginLeft: '1rem'
      },
      description: description,
      status: success ? 'finished' : 'active',
      "aria-live": ariaLive
    }) : _react.default.createElement(_Button.default, {
      onClick: handleSubmit
    }, "Submit"));
  });
}, {
  info: {
    text: "\n            This is a full example of how to levarage the <InlineLoading /> component to create a nice user experience when submitting a form.\n\n            For the full source code of this example, check out the 'story' panel below.\n          "
  }
});