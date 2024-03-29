/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { settings } from 'carbon-components';
import SkeletonText from '../SkeletonText';
import ButtonSkeleton from '../Button/Button.Skeleton';
var prefix = settings.prefix;

function FileUploaderSkeleton() {
  return React.createElement("div", {
    className: "".concat(prefix, "--form-item")
  }, React.createElement(SkeletonText, {
    heading: true,
    width: "100px"
  }), React.createElement(SkeletonText, {
    width: "225px",
    className: "".concat(prefix, "--label-description")
  }), React.createElement(ButtonSkeleton, null));
}

export default FileUploaderSkeleton;