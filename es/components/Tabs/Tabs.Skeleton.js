/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { settings } from 'carbon-components';
var prefix = settings.prefix;
var tab = React.createElement("li", {
  className: "".concat(prefix, "--tabs__nav-item")
}, React.createElement("div", {
  className: "".concat(prefix, "--tabs__nav-link")
}, "\xA0"));

function TabsSkeleton() {
  return React.createElement("div", {
    className: "".concat(prefix, "--tabs ").concat(prefix, "--skeleton")
  }, React.createElement("div", {
    className: "".concat(prefix, "--tabs-trigger")
  }, React.createElement("div", {
    className: "".concat(prefix, "--tabs-trigger-text")
  }, "\xA0"), React.createElement("svg", {
    width: "10",
    height: "5",
    viewBox: "0 0 10 5",
    fillRule: "evenodd"
  }, React.createElement("path", {
    d: "M10 0L5 5 0 0z"
  }))), React.createElement("ul", {
    className: "".concat(prefix, "--tabs__nav ").concat(prefix, "--tabs__nav--hidden")
  }, tab, tab, tab, tab));
}

export default TabsSkeleton;