/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ChevronDown20 } from '@carbon/icons-react';
import { settings } from 'carbon-components';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
var prefix = settings.prefix;
var SideNavSwitcher = React.forwardRef(function SideNavSwitcher(props, ref) {
  var customClassName = props.className,
      labelText = props.labelText,
      onChange = props.onChange,
      options = props.options;
  var className = cx("".concat(prefix, "--side-nav__switcher"), customClassName); // Note for usage around `onBlur`: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md

  return React.createElement("div", {
    className: className
  }, React.createElement("label", {
    htmlFor: "side-nav-switcher",
    className: "".concat(prefix, "--assistive-text")
  }, labelText), React.createElement("select", {
    id: "carbon-side-nav-switcher",
    className: "".concat(prefix, "--side-nav__select"),
    defaultValue: "",
    onBlur: onChange,
    onChange: onChange,
    ref: ref
  }, React.createElement("option", {
    className: "".concat(prefix, "--side-nav__option"),
    disabled: true,
    hidden: true,
    value: ""
  }, labelText), options.map(function (option) {
    return React.createElement("option", {
      key: option,
      className: "".concat(prefix, "--side-nav__option"),
      value: option
    }, option);
  })), React.createElement("div", {
    className: "".concat(prefix, "--side-nav__switcher-chevron")
  }, React.createElement(ChevronDown20, null)));
});
SideNavSwitcher.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node
   */
  className: PropTypes.string,

  /**
   * Provide the label for the switcher. This will be the firt visible option
   * when someone views this control
   */
  labelText: PropTypes.string.isRequired,

  /**
   * Provide a callback function that is called whenever the switcher value is
   * updated
   */
  onChange: PropTypes.func,

  /**
   * Provide an array of options to be rendered in the switcher as an
   * `<option>`. The text value will be what is displayed to the user and is set
   * as the `value` prop for each `<option>`.
   */
  options: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default SideNavSwitcher;