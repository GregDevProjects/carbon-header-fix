/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { settings } from 'carbon-components';
var prefix = settings.prefix;
var step = React.createElement("li", {
  className: "".concat(prefix, "--progress-step ").concat(prefix, "--progress-step--incomplete")
}, React.createElement("div", {
  className: "".concat(prefix, "--progress-step-button ").concat(prefix, "--progress-step-button--unclickable")
}, React.createElement("svg", null, React.createElement("path", {
  d: "M 7, 7 m -7, 0 a 7,7 0 1,0 14,0 a 7,7 0 1,0 -14,0"
})), React.createElement("p", {
  className: "".concat(prefix, "--progress-label")
}), React.createElement("span", {
  className: "".concat(prefix, "--progress-line")
})));

function ProgressIndicatorSkeleton() {
  return React.createElement("ul", {
    className: "".concat(prefix, "--progress ").concat(prefix, "--skeleton")
  }, step, step, step, step);
}

export default ProgressIndicatorSkeleton;