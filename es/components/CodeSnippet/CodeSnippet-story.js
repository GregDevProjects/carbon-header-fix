function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import CodeSnippet from '../CodeSnippet';
import CodeSnippetSkeleton from './CodeSnippet.Skeleton';
var props = {
  inline: function inline() {
    return {
      light: boolean('Light variant (light)', false),
      feedback: text('Feedback text (feedback)', 'Feedback Enabled 👍'),
      onClick: action('onClick'),
      copyLabel: text('ARIA label for the snippet/copy button (copyLabel)', 'copyable code snippet')
    };
  },
  single: function single() {
    return {
      feedback: text('Feedback text (feedback)', 'Feedback Enabled 👍'),
      copyButtonDescription: text('Copy icon description (copyButtonDescription)', 'copyable code snippet'),
      ariaLabel: text('ARIA label of the container (ariaLabel)', 'Container label'),
      onClick: action('onClick')
    };
  },
  multiline: function multiline() {
    return {
      feedback: text('Feedback text (feedback)', 'Feedback Enabled 👍'),
      showMoreText: text('Text for "show more" button (showMoreText)', 'Show more'),
      showLessText: text('Text for "show less" button (showLessText)', 'Show less'),
      onClick: action('onClick')
    };
  }
};
storiesOf('CodeSnippet', module).addDecorator(withKnobs).add('inline', function () {
  return React.createElement("div", null, React.createElement(CodeSnippet, _extends({
    type: "inline"
  }, props.inline()), 'node -v'));
}, {
  info: {
    text: "\n        Code snippets are small blocks of reusable code that can be inserted in a code file.\n  \n        The Inline style is for code used within a block of text.\n      "
  }
}).add('single line', function () {
  return React.createElement(CodeSnippet, _extends({
    type: "single"
  }, props.single()), 'node -v Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, veritatis voluptate id incidunt molestiae officia possimus, quasi itaque alias, architecto hic, dicta fugit? Debitis delectus quidem explicabo vitae fuga laboriosam!');
}, {
  info: {
    text: "\n          Code snippets are small blocks of reusable code that can be inserted in a code file.\n  \n          The Code style is for larger, multi-line code snippets.\n        "
  }
}).add('multi line', function () {
  var multilineProps = props.multiline();
  return React.createElement("div", {
    style: {
      width: '800px'
    }
  }, React.createElement(CodeSnippet, _extends({
    type: "multi"
  }, multilineProps), "@mixin grid-container {\n  width: 100%;\n  padding-right: padding(mobile);\n  padding-left: padding(mobile);\n\n  @include breakpoint(bp--xs--major) {\n    padding-right: padding(xs);\n    padding-left: padding(xs);\n  }\n}\n\n$z-indexes: (\n  modal : 9000,\n  overlay : 8000,\n  dropdown : 7000,\n  header : 6000,\n  footer : 5000,\n  hidden : - 1,\n  overflowHidden: - 1,\n  floating: 10000\n);"), React.createElement("br", null), React.createElement(CodeSnippet, _extends({
    type: "multi"
  }, multilineProps), "@mixin grid-container {\n  width: 100%;\n  padding-right: padding(mobile);\n  padding-left: padding(mobile);\n\n  @include breakpoint(bp--xs--major) {\n    padding-right: padding(xs);\n  }\n}"));
}, {
  info: {
    text: "\n          Code snippets are small blocks of reusable code that can be inserted in a code file.\n  \n          The Terminal style is for single-line .\n        "
  }
}).add('skeleton', function () {
  return React.createElement("div", {
    style: {
      width: '800px'
    }
  }, React.createElement(CodeSnippetSkeleton, {
    type: "single",
    style: {
      marginBottom: 8
    }
  }), React.createElement(CodeSnippetSkeleton, {
    type: "multi"
  }));
}, {
  info: {
    text: "\n          Placeholder skeleton state to use when content is loading.\n        "
  }
});