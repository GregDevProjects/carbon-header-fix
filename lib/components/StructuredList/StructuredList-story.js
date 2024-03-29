"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _iconsReact = require("@carbon/icons-react");

var _StructuredList = require("../StructuredList");

var _StructuredList2 = _interopRequireDefault(require("../StructuredList/StructuredList.Skeleton"));

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var prefix = _carbonComponents.settings.prefix;
(0, _react2.storiesOf)('StructuredList', module).add('Simple', function () {
  return _react.default.createElement(_StructuredList.StructuredListWrapper, null, _react.default.createElement(_StructuredList.StructuredListHead, null, _react.default.createElement(_StructuredList.StructuredListRow, {
    head: true
  }, _react.default.createElement(_StructuredList.StructuredListCell, {
    head: true
  }, "ColumnA"), _react.default.createElement(_StructuredList.StructuredListCell, {
    head: true
  }, "ColumnB"), _react.default.createElement(_StructuredList.StructuredListCell, {
    head: true
  }, "ColumnC"))), _react.default.createElement(_StructuredList.StructuredListBody, null, _react.default.createElement(_StructuredList.StructuredListRow, null, _react.default.createElement(_StructuredList.StructuredListCell, {
    noWrap: true
  }, "Row 1"), _react.default.createElement(_StructuredList.StructuredListCell, null, "Row 1"), _react.default.createElement(_StructuredList.StructuredListCell, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum.")), _react.default.createElement(_StructuredList.StructuredListRow, null, _react.default.createElement(_StructuredList.StructuredListCell, {
    noWrap: true
  }, "Row 2"), _react.default.createElement(_StructuredList.StructuredListCell, null, "Row 2"), _react.default.createElement(_StructuredList.StructuredListCell, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum."))));
}, {
  info: {
    text: "\n            Structured Lists group content that is similar or related, such as terms or definitions.\n          "
  }
}).add('Selection', function () {
  var structuredListBodyRowGenerator = function structuredListBodyRowGenerator(numRows) {
    return Array.apply(null, Array(numRows)).map(function (n, i) {
      return _react.default.createElement(_StructuredList.StructuredListRow, {
        label: true,
        key: "row-".concat(i),
        htmlFor: "row-".concat(i)
      }, _react.default.createElement(_StructuredList.StructuredListCell, null, "Row ", i), _react.default.createElement(_StructuredList.StructuredListCell, null, "Row ", i), _react.default.createElement(_StructuredList.StructuredListCell, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dui magna, finibus id tortor sed, aliquet bibendum augue. Aenean posuere sem vel euismod dignissim. Nulla ut cursus dolor. Pellentesque vulputate nisl a porttitor interdum."), _react.default.createElement(_StructuredList.StructuredListInput, {
        id: "row-".concat(i),
        value: "row-".concat(i),
        title: "row-".concat(i),
        name: "row-0",
        defaultChecked: !i || null
      }), _react.default.createElement(_StructuredList.StructuredListCell, null, _react.default.createElement(_iconsReact.CheckmarkFilled16, {
        className: "".concat(prefix, "--structured-list-svg"),
        "aria-label": "select an option"
      }, _react.default.createElement("title", null, "select an option"))));
    });
  };

  return _react.default.createElement(_StructuredList.StructuredListWrapper, {
    selection: true,
    border: true
  }, _react.default.createElement(_StructuredList.StructuredListHead, null, _react.default.createElement(_StructuredList.StructuredListRow, {
    head: true
  }, _react.default.createElement(_StructuredList.StructuredListCell, {
    head: true
  }, "ColumnA"), _react.default.createElement(_StructuredList.StructuredListCell, {
    head: true
  }, "ColumnB"), _react.default.createElement(_StructuredList.StructuredListCell, {
    head: true
  }, "ColumnC"), _react.default.createElement(_StructuredList.StructuredListCell, {
    head: true
  }, ''))), _react.default.createElement(_StructuredList.StructuredListBody, null, structuredListBodyRowGenerator(4)));
}, {
  info: {
    text: "\n        Structured Lists with selection allow a row of list content to be selected.\n      "
  }
}).add('skeleton', function () {
  return _react.default.createElement("div", {
    style: {
      width: '800px'
    }
  }, _react.default.createElement(_StructuredList2.default, null), _react.default.createElement(_StructuredList2.default, {
    border: true
  }));
}, {
  info: {
    text: "\n            Placeholder skeleton state to use when content is loading.\n          "
  }
});