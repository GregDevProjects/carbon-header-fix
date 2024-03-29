/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { CheckmarkFilled16 } from '@carbon/icons-react';
import { StructuredListWrapper, StructuredListHead, StructuredListBody, StructuredListRow, StructuredListInput, StructuredListCell } from '../StructuredList';
import StructuredListSkeleton from '../StructuredList/StructuredList.Skeleton';
import { settings } from 'carbon-components';
var prefix = settings.prefix;
storiesOf('StructuredList', module).add('Simple', function () {
  return React.createElement(StructuredListWrapper, null, React.createElement(StructuredListHead, null, React.createElement(StructuredListRow, {
    head: true
  }, React.createElement(StructuredListCell, {
    head: true
  }, "ColumnA"), React.createElement(StructuredListCell, {
    head: true
  }, "ColumnB"), React.createElement(StructuredListCell, {
    head: true
  }, "ColumnC"))), React.createElement(StructuredListBody, null, React.createElement(StructuredListRow, null, React.createElement(StructuredListCell, {
    noWrap: true
  }, "Row 1"), React.createElement(StructuredListCell, null, "Row 1"), React.createElement(StructuredListCell, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.")), React.createElement(StructuredListRow, null, React.createElement(StructuredListCell, {
    noWrap: true
  }, "Row 2"), React.createElement(StructuredListCell, null, "Row 2"), React.createElement(StructuredListCell, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum."))));
}, {
  info: {
    text: "\n            Structured Lists group content that is similar or related, such as terms or definitions.\n          "
  }
}).add('Selection', function () {
  var structuredListBodyRowGenerator = function structuredListBodyRowGenerator(numRows) {
    return Array.apply(null, Array(numRows)).map(function (n, i) {
      return React.createElement(StructuredListRow, {
        label: true,
        key: "row-".concat(i),
        htmlFor: "row-".concat(i)
      }, React.createElement(StructuredListCell, null, "Row ", i), React.createElement(StructuredListCell, null, "Row ", i), React.createElement(StructuredListCell, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum."), React.createElement(StructuredListInput, {
        id: "row-".concat(i),
        value: "row-".concat(i),
        title: "row-".concat(i),
        name: "row-0",
        defaultChecked: !i || null
      }), React.createElement(StructuredListCell, null, React.createElement(CheckmarkFilled16, {
        className: "".concat(prefix, "--structured-list-svg"),
        "aria-label": "select an option"
      }, React.createElement("title", null, "select an option"))));
    });
  };

  return React.createElement(StructuredListWrapper, {
    selection: true,
    border: true
  }, React.createElement(StructuredListHead, null, React.createElement(StructuredListRow, {
    head: true
  }, React.createElement(StructuredListCell, {
    head: true
  }, "ColumnA"), React.createElement(StructuredListCell, {
    head: true
  }, "ColumnB"), React.createElement(StructuredListCell, {
    head: true
  }, "ColumnC"), React.createElement(StructuredListCell, {
    head: true
  }, ''))), React.createElement(StructuredListBody, null, structuredListBodyRowGenerator(4)));
}, {
  info: {
    text: "\n        Structured Lists with selection allow a row of list content to be selected.\n      "
  }
}).add('skeleton', function () {
  return React.createElement("div", {
    style: {
      width: '800px'
    }
  }, React.createElement(StructuredListSkeleton, null), React.createElement(StructuredListSkeleton, {
    border: true
  }));
}, {
  info: {
    text: "\n            Placeholder skeleton state to use when content is loading.\n          "
  }
});