/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { settings } from 'carbon-components';
var prefix = settings.prefix;
var item = React.createElement("div", {
  className: "".concat(prefix, "--breadcrumb-item")
}, React.createElement("span", {
  className: "".concat(prefix, "--link")
}, "\xA0"));

function BreadcrumbSkeleton() {
  return React.createElement("div", {
    className: "".concat(prefix, "--breadcrumb ").concat(prefix, "--skeleton")
  }, item, item, item);
}

export default BreadcrumbSkeleton;