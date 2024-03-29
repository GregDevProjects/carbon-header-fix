"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _CodeSnippet = _interopRequireDefault(require("../CodeSnippet"));

var _CodeSnippet2 = _interopRequireDefault(require("./CodeSnippet.Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  inline: function inline() {
    return {
      light: (0, _addonKnobs.boolean)('Light variant (light)', false),
      feedback: (0, _addonKnobs.text)('Feedback text (feedback)', 'Feedback Enabled 👍'),
      onClick: (0, _addonActions.action)('onClick'),
      copyLabel: (0, _addonKnobs.text)('ARIA label for the snippet/copy button (copyLabel)', 'copyable code snippet')
    };
  },
  single: function single() {
    return {
      feedback: (0, _addonKnobs.text)('Feedback text (feedback)', 'Feedback Enabled 👍'),
      copyButtonDescription: (0, _addonKnobs.text)('Copy icon description (copyButtonDescription)', 'copyable code snippet'),
      ariaLabel: (0, _addonKnobs.text)('ARIA label of the container (ariaLabel)', 'Container label'),
      onClick: (0, _addonActions.action)('onClick')
    };
  },
  multiline: function multiline() {
    return {
      feedback: (0, _addonKnobs.text)('Feedback text (feedback)', 'Feedback Enabled 👍'),
      showMoreText: (0, _addonKnobs.text)('Text for "show more" button (showMoreText)', 'Show more'),
      showLessText: (0, _addonKnobs.text)('Text for "show less" button (showLessText)', 'Show less'),
      onClick: (0, _addonActions.action)('onClick')
    };
  }
};
(0, _react2.storiesOf)('CodeSnippet', module).addDecorator(_addonKnobs.withKnobs).add('inline', function () {
  return _react.default.createElement("div", null, _react.default.createElement(_CodeSnippet.default, _extends({
    type: "inline"
  }, props.inline()), 'node -v'));
}, {
  info: {
    text: "\n        Code snippets are small blocks of reusable code that can be inserted in a code file.\n  \n        The Inline style is for code used within a block of text.\n      "
  }
}).add('single line', function () {
  return _react.default.createElement(_CodeSnippet.default, _extends({
    type: "single"
  }, props.single()), 'node -v Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, veritatis voluptate id incidunt molestiae officia possimus, quasi itaque alias, architecto hic, dicta fugit? Debitis delectus quidem explicabo vitae fuga laboriosam!');
}, {
  info: {
    text: "\n          Code snippets are small blocks of reusable code that can be inserted in a code file.\n  \n          The Code style is for larger, multi-line code snippets.\n        "
  }
}).add('multi line', function () {
  var multilineProps = props.multiline();
  return _react.default.createElement("div", {
    style: {
      width: '800px'
    }
  }, _react.default.createElement(_CodeSnippet.default, _extends({
    type: "multi"
  }, multilineProps), "@mixin grid-container {\n  width: 100%;\n  padding-right: padding(mobile);\n  padding-left: padding(mobile);\n\n  @include breakpoint(bp--xs--major) {\n    padding-right: padding(xs);\n    padding-left: padding(xs);\n  }\n}\n\n$z-indexes: (\n  modal : 9000,\n  overlay : 8000,\n  dropdown : 7000,\n  header : 6000,\n  footer : 5000,\n  hidden : - 1,\n  overflowHidden: - 1,\n  floating: 10000\n);"), _react.default.createElement("br", null), _react.default.createElement(_CodeSnippet.default, _extends({
    type: "multi"
  }, multilineProps), "@mixin grid-container {\n  width: 100%;\n  padding-right: padding(mobile);\n  padding-left: padding(mobile);\n\n  @include breakpoint(bp--xs--major) {\n    padding-right: padding(xs);\n  }\n}"));
}, {
  info: {
    text: "\n          Code snippets are small blocks of reusable code that can be inserted in a code file.\n  \n          The Terminal style is for single-line .\n        "
  }
}).add('skeleton', function () {
  return _react.default.createElement("div", {
    style: {
      width: '800px'
    }
  }, _react.default.createElement(_CodeSnippet2.default, {
    type: "single",
    style: {
      marginBottom: 8
    }
  }), _react.default.createElement(_CodeSnippet2.default, {
    type: "multi"
  }));
}, {
  info: {
    text: "\n          Placeholder skeleton state to use when content is loading.\n        "
  }
});