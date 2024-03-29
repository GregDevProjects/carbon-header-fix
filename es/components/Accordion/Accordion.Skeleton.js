/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React from 'react';
import { ChevronRight16 } from '@carbon/icons-react';
import { settings } from 'carbon-components';
import SkeletonText from '../SkeletonText';
import deprecate from '../../prop-types/deprecate';
var prefix = settings.prefix;

function AccordionSkeleton(props) {
  var numSkeletonItems = props.open ? props.count - 1 : props.count;
  return React.createElement("ul", {
    className: "".concat(prefix, "--accordion ").concat(prefix, "--skeleton")
  }, props.open && React.createElement("li", {
    className: "".concat(prefix, "--accordion__item ").concat(prefix, "--accordion__item--active")
  }, React.createElement("span", {
    className: "".concat(prefix, "--accordion__heading")
  }, React.createElement(ChevronRight16, {
    className: "".concat(prefix, "--accordion__arrow")
  }), React.createElement(SkeletonText, {
    className: "".concat(prefix, "--accordion__title")
  })), React.createElement("div", {
    className: "".concat(prefix, "--accordion__content")
  }, React.createElement(SkeletonText, {
    width: "90%"
  }), React.createElement(SkeletonText, {
    width: "80%"
  }), React.createElement(SkeletonText, {
    width: "95%"
  }))), Array.from({
    length: numSkeletonItems
  }).map(function (_, i) {
    return React.createElement(AccordionSkeletonItem, {
      key: i
    });
  }));
}

AccordionSkeleton.propTypes = {
  /**
   * `false` to not display the first item opened
   */
  open: PropTypes.bool,

  /**
   * Set number of items to render
   */
  count: PropTypes.number,

  /**
   * Set unique identifier to generate unique item keys
   */
  uid: deprecate(PropTypes.any)
};
AccordionSkeleton.defaultProps = {
  open: true,
  count: 4
};

function AccordionSkeletonItem() {
  return React.createElement("li", {
    className: "".concat(prefix, "--accordion__item")
  }, React.createElement("span", {
    className: "".concat(prefix, "--accordion__heading")
  }, React.createElement(ChevronRight16, {
    className: "".concat(prefix, "--accordion__arrow")
  }), React.createElement(SkeletonText, {
    className: "".concat(prefix, "--accordion__title")
  })));
}

export default AccordionSkeleton;