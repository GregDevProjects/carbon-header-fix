function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { ChevronDownGlyph } from '@carbon/icons-react';
import { settings } from 'carbon-components';
var prefix = settings.prefix;

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tabs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      dropdownHidden: true
    });

    _defineProperty(_assertThisInitialized(_this), "getTabAt", function (index, useFresh) {
      return !useFresh && _this["tab".concat(index)] || React.Children.toArray(_this.props.children)[index];
    });

    _defineProperty(_assertThisInitialized(_this), "setTabAt", function (index, tabRef) {
      _this["tab".concat(index)] = tabRef;
    });

    _defineProperty(_assertThisInitialized(_this), "handleTabClick", function (onSelectionChange) {
      return function (index, evt) {
        evt.preventDefault();

        _this.selectTabAt(index, onSelectionChange);

        _this.setState({
          dropdownHidden: true
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleTabKeyDown", function (onSelectionChange) {
      return function (index, evt) {
        var key = evt.key || evt.which;

        if (key === 'Enter' || key === 13 || key === ' ' || key === 32) {
          _this.selectTabAt(index, onSelectionChange);

          _this.setState({
            dropdownHidden: true
          });
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleTabAnchorFocus", function (onSelectionChange) {
      return function (index) {
        var tabCount = React.Children.count(_this.props.children) - 1;
        var tabIndex = index;

        if (index < 0) {
          tabIndex = tabCount;
        } else if (index > tabCount) {
          tabIndex = 0;
        }

        var tab = _this.getTabAt(tabIndex);

        if (tab) {
          _this.selectTabAt(tabIndex, onSelectionChange);

          if (tab.tabAnchor) {
            tab.tabAnchor.focus();
          }
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleDropdownClick", function () {
      _this.setState({
        dropdownHidden: !_this.state.dropdownHidden
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectTabAt", function (index, onSelectionChange) {
      if (_this.state.selected !== index) {
        _this.setState({
          selected: index
        });

        if (typeof onSelectionChange === 'function') {
          onSelectionChange(index);
        }
      }
    });

    return _this;
  }

  _createClass(Tabs, [{
    key: "getTabs",
    value: function getTabs() {
      return React.Children.map(this.props.children, function (tab) {
        return tab;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          ariaLabel = _this$props.ariaLabel,
          iconDescription = _this$props.iconDescription,
          className = _this$props.className,
          triggerHref = _this$props.triggerHref,
          role = _this$props.role,
          onSelectionChange = _this$props.onSelectionChange,
          tabContentClassName = _this$props.tabContentClassName,
          other = _objectWithoutProperties(_this$props, ["ariaLabel", "iconDescription", "className", "triggerHref", "role", "onSelectionChange", "tabContentClassName"]);
      /**
       * The tab panel acts like a tab panel when the screen is wider, but acts
       * like a select list when the screen is narrow.  In the wide case we want
       * to allow the user to use the tab key to set the focus in the tab panel
       * and then use the left and right arrow keys to navigate the tabs.  In the
       * narrow case we want to use the tab key to select different options in
       * the list.
       *
       * We set the tab index based on the different states so the browser will treat
       * the whole tab panel as a single focus component when it looks like a tab
       * panel and separate components when it looks like a select list.
       */


      var tabsWithProps = this.getTabs().map(function (tab, index) {
        var tabPanelIndex = index === _this2.state.selected ? 0 : -1;
        var tabIndex = !_this2.state.dropdownHidden ? 0 : tabPanelIndex;
        var newTab = React.cloneElement(tab, {
          index: index,
          selected: index === _this2.state.selected,
          handleTabClick: _this2.handleTabClick(onSelectionChange),
          handleTabAnchorFocus: _this2.handleTabAnchorFocus(onSelectionChange),
          tabIndex: tabIndex,
          ref: function ref(e) {
            _this2.setTabAt(index, e);
          },
          handleTabKeyDown: _this2.handleTabKeyDown(onSelectionChange)
        });
        return newTab;
      });
      var tabContentWithProps = React.Children.map(tabsWithProps, function (tab) {
        var _tab$props = tab.props,
            children = _tab$props.children,
            selected = _tab$props.selected,
            TabContent = _tab$props.renderContent;
        return React.createElement(TabContent, {
          className: tabContentClassName,
          "aria-hidden": !selected,
          hidden: !selected,
          selected: selected
        }, children);
      });
      var classes = {
        tabs: classNames("".concat(prefix, "--tabs"), className),
        tablist: classNames("".concat(prefix, "--tabs__nav"), _defineProperty({}, "".concat(prefix, "--tabs__nav--hidden"), this.state.dropdownHidden))
      };
      var selectedTab = this.getTabAt(this.state.selected, true);
      var selectedLabel = selectedTab ? selectedTab.props.label : '';
      return React.createElement(React.Fragment, null, React.createElement("div", _extends({}, other, {
        className: classes.tabs,
        role: role
      }), React.createElement("div", {
        role: "listbox",
        "aria-label": ariaLabel,
        tabIndex: 0,
        className: "".concat(prefix, "--tabs-trigger"),
        onClick: this.handleDropdownClick,
        onKeyPress: this.handleDropdownClick
      }, React.createElement("a", {
        tabIndex: -1,
        className: "".concat(prefix, "--tabs-trigger-text"),
        href: triggerHref,
        onClick: this.handleDropdownClick
      }, selectedLabel), React.createElement(ChevronDownGlyph, {
        "aria-hidden": "true"
      }, iconDescription && React.createElement("title", null, iconDescription))), React.createElement("ul", {
        role: "tablist",
        className: classes.tablist
      }, tabsWithProps)), tabContentWithProps);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var selected = _ref.selected;
      var prevSelected = state.prevSelected;
      return prevSelected === selected ? null : {
        selected: selected,
        prevSelected: selected
      };
    }
  }]);

  return Tabs;
}(React.Component);

_defineProperty(Tabs, "propTypes", {
  /**
   * Specify the text to be read by screen-readers when visiting the <Tabs>
   * component
   */
  ariaLabel: PropTypes.string,

  /**
   * Pass in a collection of <Tab> children to be rendered depending on the
   * currently selected tab
   */
  children: PropTypes.node,

  /**
   * Provide a className that is applied to the root <nav> component for the
   * <Tabs>
   */
  className: PropTypes.string,

  /**
   * Specify whether the Tab content is hidden
  hidden: PropTypes.bool,
   /**
   * By default, this value is "navigation". You can also provide an alternate
   * role if it makes sense from the accessibility-side
   */
  role: PropTypes.string.isRequired,

  /**
   * Optionally provide an `onClick` handler that is invoked when a <Tab> is
   * clicked
   */
  onClick: PropTypes.func,

  /**
   * Optionally provide an `onKeyDown` handler that is invoked when keyed
   * navigation is triggered
   */
  onKeyDown: PropTypes.func,

  /**
   * Provide an optional handler that is called whenever the selection
   * changes. This method is called with the index of the tab that was
   * selected
   */
  onSelectionChange: PropTypes.func,

  /**
   * Provide a string that represents the `href` for the triggered <Tab>
   */
  triggerHref: PropTypes.string.isRequired,

  /**
   * Optionally provide an index for the currently selected <Tab>
   */
  selected: PropTypes.number,

  /**
   * Provide a description that is read out when a user visits the caret icon
   * for the dropdown menu of items
   */
  iconDescription: PropTypes.string.isRequired,

  /**
   * Provide a className that is applied to the <TabContent> components
   */
  tabContentClassName: PropTypes.string
});

_defineProperty(Tabs, "defaultProps", {
  iconDescription: 'show menu options',
  role: 'navigation',
  triggerHref: '#',
  selected: 0,
  ariaLabel: 'listbox'
});

export { Tabs as default };