/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { settings } from 'carbon-components';
var prefix = settings.prefix;

function RadioButtonSkeleton() {
  return React.createElement("div", {
    className: "".concat(prefix, "--radio-button-wrapper")
  }, React.createElement("div", {
    className: "".concat(prefix, "--radio-button ").concat(prefix, "--skeleton")
  }), React.createElement("span", {
    className: "".concat(prefix, "--radio-button__label ").concat(prefix, "--skeleton")
  }));
}

export default RadioButtonSkeleton;