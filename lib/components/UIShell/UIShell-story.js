"use strict";

var _iconsReact = require("@carbon/icons-react");

var _react = require("@storybook/react");

var _addonActions = require("@storybook/addon-actions");

var _react2 = _interopRequireDefault(require("react"));

var _storybookReadme = require("storybook-readme");

var _README = _interopRequireDefault(require("./README.md"));

var _HeaderContainer = _interopRequireDefault(require("./HeaderContainer"));

var _UIShell = require("../UIShell");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fade16 = function Fade16() {
  return _react2.default.createElement("svg", {
    width: "16",
    height: "16",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    "aria-hidden": "true"
  }, _react2.default.createElement("path", {
    d: "M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z"
  }));
};

var StoryContent = function StoryContent() {
  var content = _react2.default.createElement("div", {
    className: "bx--grid"
  }, _react2.default.createElement("div", {
    className: "bx--row"
  }, _react2.default.createElement("div", {
    className: "bx--offset-lg-3 bx--col-lg-13"
  }, _react2.default.createElement("h2", {
    style: {
      fontWeight: '800',
      margin: '30px 0',
      fontSize: '20px'
    }
  }, "Purpose and function"), _react2.default.createElement("p", {
    style: {
      lineHeight: '20px'
    }
  }, "The shell is perhaps the most crucial piece of any UI built with Carbon. It contains the shared navigation framework for the entire design system and ties the products in IBM\u2019s portfolio together in a cohesive and elegant way. The shell is the home of the topmost navigation, where users can quickly and dependably gain their bearings and move between pages.", _react2.default.createElement("br", null), _react2.default.createElement("br", null), "The shell was designed with maximum flexibility built in, to serve the needs of a broad range of products and users. Adopting the shell ensures compliance with IBM design standards, simplifies development efforts, and provides great user experiences. All IBM products built with Carbon are required to use the shell\u2019s header.", _react2.default.createElement("br", null), _react2.default.createElement("br", null), "To better understand the purpose and function of the UI shell, consider the \u201Cshell\u201D of MacOS, which contains the Apple menu, top-level navigation, and universal, OS-level controls at the top of the screen, as well as a universal dock along the bottom or side of the screen. The Carbon UI shell is roughly analogous in function to these parts of the Mac UI. For example, the app switcher portion of the shell can be compared to the dock in MacOS."), _react2.default.createElement("h2", {
    style: {
      fontWeight: '800',
      margin: '30px 0',
      fontSize: '20px'
    }
  }, "Header responsive behavior"), _react2.default.createElement("p", {
    style: {
      lineHeight: '20px'
    }
  }, "As a header scales down to fit smaller screen sizes, headers with persistent side nav menus should have the side nav collapse into \u201Chamburger\u201D menu. See the example to better understand responsive behavior of the header."), _react2.default.createElement("h2", {
    style: {
      fontWeight: '800',
      margin: '30px 0',
      fontSize: '20px'
    }
  }, "Secondary navigation"), _react2.default.createElement("p", {
    style: {
      lineHeight: '20px'
    }
  }, "The side-nav contains secondary navigation and fits below the header. It can be configured to be either fixed-width or flexible, with only one level of nested items allowed. Both links and category lists can be used in the side-nav and may be mixed together. There are several configurations of the side-nav, but only one configuration should be used per product section. If tabs are needed on a page when using a side-nav, then the tabs are secondary in hierarchy to the side-nav."))));

  return _react2.default.createElement(_UIShell.Content, {
    id: "main-content",
    style: {
      margin: '0',
      height: '100%',
      width: '100%'
    }
  }, content);
}; // Ideally, we'd have a <UIShell> component that could help make using these
// components much simpler. In the interim, we're going to create presentational
// components and try and piece them together to figure out what are standard
// usage patterns for each to see what kind of component API we should expose


(0, _react.storiesOf)('UI Shell', module).add('Header Base', (0, _storybookReadme.withReadme)(_README.default, function () {
  return _react2.default.createElement(_UIShell.Header, {
    "aria-label": "IBM Platform Name"
  }, _react2.default.createElement(_UIShell.HeaderName, {
    href: "#",
    prefix: "IBM"
  }, "[Platform]"));
})).add('Header Base w/ Navigation', (0, _storybookReadme.withReadme)(_README.default, function () {
  return _react2.default.createElement(_HeaderContainer.default, {
    render: function render(_ref) {
      var isSideNavExpanded = _ref.isSideNavExpanded,
          onClickSideNavExpand = _ref.onClickSideNavExpand;
      return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(_UIShell.Header, {
        "aria-label": "IBM Platform Name"
      }, _react2.default.createElement(_UIShell.SkipToContent, null), _react2.default.createElement(_UIShell.HeaderMenuButton, {
        "aria-label": "Open menu",
        onClick: onClickSideNavExpand,
        isActive: isSideNavExpanded
      }), _react2.default.createElement(_UIShell.HeaderName, {
        href: "#",
        prefix: "IBM"
      }, "[Platform]"), _react2.default.createElement(_UIShell.HeaderNavigation, {
        "aria-label": "IBM [Platform]"
      }, _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Link 1"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Link 2"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Link 3"), _react2.default.createElement(_UIShell.HeaderMenu, {
        "aria-label": "Link 4",
        menuLinkName: "Link 4"
      }, _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Sub-link 1"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Sub-link 2"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Sub-link 3"))), _react2.default.createElement(_UIShell.SideNav, {
        "aria-label": "Side navigation",
        expanded: isSideNavExpanded,
        isPersistent: false
      }, _react2.default.createElement(_UIShell.SideNavItems, null, _react2.default.createElement(_UIShell.HeaderSideNavItems, null, _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Link 1"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Link 2"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Link 3"), _react2.default.createElement(_UIShell.HeaderMenu, {
        "aria-label": "Link 4",
        menuLinkName: "Link 4"
      }, _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Sub-link 1"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Sub-link 2"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Sub-link 3")))))));
    }
  });
})).add('Header Base w/ Actions', (0, _storybookReadme.withReadme)(_README.default, function () {
  return _react2.default.createElement(_UIShell.Header, {
    "aria-label": "IBM Platform Name"
  }, _react2.default.createElement(_UIShell.HeaderName, {
    href: "#",
    prefix: "IBM"
  }, "[Platform]"), _react2.default.createElement(_UIShell.HeaderGlobalBar, null, _react2.default.createElement(_UIShell.HeaderGlobalAction, {
    "aria-label": "Search",
    onClick: (0, _addonActions.action)('search click')
  }, _react2.default.createElement(_iconsReact.Search20, null)), _react2.default.createElement(_UIShell.HeaderGlobalAction, {
    "aria-label": "Notifications",
    onClick: (0, _addonActions.action)('notification click')
  }, _react2.default.createElement(_iconsReact.Notification20, null)), _react2.default.createElement(_UIShell.HeaderGlobalAction, {
    "aria-label": "App Switcher",
    onClick: (0, _addonActions.action)('app-switcher click')
  }, _react2.default.createElement(_iconsReact.AppSwitcher20, null))));
})).add('Header Base w/ Navigation and Actions', (0, _storybookReadme.withReadme)(_README.default, function () {
  return _react2.default.createElement(_HeaderContainer.default, {
    render: function render(_ref2) {
      var isSideNavExpanded = _ref2.isSideNavExpanded,
          onClickSideNavExpand = _ref2.onClickSideNavExpand;
      return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(_UIShell.Header, {
        "aria-label": "IBM Platform Name"
      }, _react2.default.createElement(_UIShell.SkipToContent, null), _react2.default.createElement(_UIShell.HeaderMenuButton, {
        "aria-label": "Open menu",
        onClick: onClickSideNavExpand,
        isActive: isSideNavExpanded
      }), _react2.default.createElement(_UIShell.HeaderName, {
        href: "#",
        prefix: "IBM"
      }, "[Platform]"), _react2.default.createElement(_UIShell.HeaderNavigation, {
        "aria-label": "IBM [Platform]"
      }, _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Link 1"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Link 2"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Link 3"), _react2.default.createElement(_UIShell.HeaderMenu, {
        "aria-label": "Link 4",
        menuLinkName: "Link 4"
      }, _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Sub-link 1"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Sub-link 2"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Sub-link 3"))), _react2.default.createElement(_UIShell.HeaderGlobalBar, null, _react2.default.createElement(_UIShell.HeaderGlobalAction, {
        "aria-label": "Search",
        onClick: (0, _addonActions.action)('search click')
      }, _react2.default.createElement(_iconsReact.Search20, null)), _react2.default.createElement(_UIShell.HeaderGlobalAction, {
        "aria-label": "Notifications",
        onClick: (0, _addonActions.action)('notification click')
      }, _react2.default.createElement(_iconsReact.Notification20, null)), _react2.default.createElement(_UIShell.HeaderGlobalAction, {
        "aria-label": "App Switcher",
        onClick: (0, _addonActions.action)('app-switcher click')
      }, _react2.default.createElement(_iconsReact.AppSwitcher20, null))), _react2.default.createElement(_UIShell.SideNav, {
        "aria-label": "Side navigation",
        expanded: isSideNavExpanded,
        isPersistent: false
      }, _react2.default.createElement(_UIShell.SideNavItems, null, _react2.default.createElement(_UIShell.HeaderSideNavItems, null, _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Link 1"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Link 2"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Link 3"), _react2.default.createElement(_UIShell.HeaderMenu, {
        "aria-label": "Link 4",
        menuLinkName: "Link 4"
      }, _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Sub-link 1"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Sub-link 2"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Sub-link 3")))))));
    }
  });
})).add('Header Base w/ Navigation, Actions and SideNav', (0, _storybookReadme.withReadme)(_README.default, function () {
  return _react2.default.createElement(_HeaderContainer.default, {
    render: function render(_ref3) {
      var isSideNavExpanded = _ref3.isSideNavExpanded,
          onClickSideNavExpand = _ref3.onClickSideNavExpand;
      return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(_UIShell.Header, {
        "aria-label": "IBM Platform Name"
      }, _react2.default.createElement(_UIShell.SkipToContent, null), _react2.default.createElement(_UIShell.HeaderMenuButton, {
        "aria-label": "Open menu",
        onClick: onClickSideNavExpand,
        isActive: isSideNavExpanded
      }), _react2.default.createElement(_UIShell.HeaderName, {
        href: "#",
        prefix: "IBM"
      }, "[Platform]"), _react2.default.createElement(_UIShell.HeaderNavigation, {
        "aria-label": "IBM [Platform]"
      }, _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Link 1"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Link 2"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Link 3"), _react2.default.createElement(_UIShell.HeaderMenu, {
        "aria-label": "Link 4",
        menuLinkName: "Link 4"
      }, _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#one"
      }, "Sub-link 1"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#two"
      }, "Sub-link 2"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#three"
      }, "Sub-link 3"))), _react2.default.createElement(_UIShell.HeaderGlobalBar, null, _react2.default.createElement(_UIShell.HeaderGlobalAction, {
        "aria-label": "Search",
        onClick: (0, _addonActions.action)('search click')
      }, _react2.default.createElement(_iconsReact.Search20, null)), _react2.default.createElement(_UIShell.HeaderGlobalAction, {
        "aria-label": "Notifications",
        onClick: (0, _addonActions.action)('notification click')
      }, _react2.default.createElement(_iconsReact.Notification20, null)), _react2.default.createElement(_UIShell.HeaderGlobalAction, {
        "aria-label": "App Switcher",
        onClick: (0, _addonActions.action)('app-switcher click')
      }, _react2.default.createElement(_iconsReact.AppSwitcher20, null))), _react2.default.createElement(_UIShell.SideNav, {
        "aria-label": "Side navigation",
        expanded: isSideNavExpanded
      }, _react2.default.createElement(_UIShell.SideNavItems, null, _react2.default.createElement(_UIShell.HeaderSideNavItems, {
        hasDivider: true
      }, _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Link 1"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Link 2"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Link 3"), _react2.default.createElement(_UIShell.HeaderMenu, {
        "aria-label": "Link 4",
        menuLinkName: "Link 4"
      }, _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Sub-link 1"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Sub-link 2"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Sub-link 3"))), _react2.default.createElement(_UIShell.SideNavMenu, {
        renderIcon: Fade16,
        title: "Category title"
      }, _react2.default.createElement(_UIShell.SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link")), _react2.default.createElement(_UIShell.SideNavMenu, {
        renderIcon: Fade16,
        title: "Category title"
      }, _react2.default.createElement(_UIShell.SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link")), _react2.default.createElement(_UIShell.SideNavMenu, {
        renderIcon: Fade16,
        title: "Category title",
        isActive: true
      }, _react2.default.createElement(_UIShell.SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
        "aria-current": "page",
        href: "javascript:void(0)"
      }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link")), _react2.default.createElement(_UIShell.SideNavLink, {
        renderIcon: Fade16,
        href: "javascript:void(0)"
      }, "Link"), _react2.default.createElement(_UIShell.SideNavLink, {
        renderIcon: Fade16,
        href: "javascript:void(0)"
      }, "Link")))), _react2.default.createElement(StoryContent, null));
    }
  });
})).add('Header Base w/ SideNav', (0, _storybookReadme.withReadme)(_README.default, function () {
  return _react2.default.createElement(_HeaderContainer.default, {
    render: function render(_ref4) {
      var isSideNavExpanded = _ref4.isSideNavExpanded,
          onClickSideNavExpand = _ref4.onClickSideNavExpand;
      return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(_UIShell.Header, {
        "aria-label": "IBM Platform Name"
      }, _react2.default.createElement(_UIShell.SkipToContent, null), _react2.default.createElement(_UIShell.HeaderMenuButton, {
        "aria-label": "Open menu",
        onClick: onClickSideNavExpand,
        isActive: isSideNavExpanded
      }), _react2.default.createElement(_UIShell.HeaderName, {
        href: "#",
        prefix: "IBM"
      }, "[Platform]"), _react2.default.createElement(_UIShell.SideNav, {
        "aria-label": "Side navigation",
        expanded: isSideNavExpanded
      }, _react2.default.createElement(_UIShell.SideNavItems, null, _react2.default.createElement(_UIShell.SideNavMenu, {
        renderIcon: Fade16,
        title: "Category title"
      }, _react2.default.createElement(_UIShell.SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link")), _react2.default.createElement(_UIShell.SideNavMenu, {
        renderIcon: Fade16,
        title: "Category title",
        isActive: true
      }, _react2.default.createElement(_UIShell.SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
        "aria-current": "page",
        href: "javascript:void(0)"
      }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link")), _react2.default.createElement(_UIShell.SideNavMenu, {
        renderIcon: Fade16,
        title: "Category title"
      }, _react2.default.createElement(_UIShell.SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link")), _react2.default.createElement(_UIShell.SideNavLink, {
        renderIcon: Fade16,
        href: "javascript:void(0)"
      }, "Link"), _react2.default.createElement(_UIShell.SideNavLink, {
        renderIcon: Fade16,
        href: "javascript:void(0)"
      }, "Link")))), _react2.default.createElement(StoryContent, null));
    }
  });
})).add('Header Base w/ Actions and Right Panel', (0, _storybookReadme.withReadme)(_README.default, function () {
  return _react2.default.createElement(_UIShell.Header, {
    "aria-label": "IBM Platform Name"
  }, _react2.default.createElement(_UIShell.HeaderName, {
    href: "#",
    prefix: "IBM"
  }, "[Platform]"), _react2.default.createElement(_UIShell.HeaderGlobalBar, null, _react2.default.createElement(_UIShell.HeaderGlobalAction, {
    "aria-label": "Search",
    onClick: (0, _addonActions.action)('search click')
  }, _react2.default.createElement(_iconsReact.Search20, null)), _react2.default.createElement(_UIShell.HeaderGlobalAction, {
    "aria-label": "Notifications",
    isActive: true,
    onClick: (0, _addonActions.action)('notification click')
  }, _react2.default.createElement(_iconsReact.Notification20, null)), _react2.default.createElement(_UIShell.HeaderGlobalAction, {
    "aria-label": "App Switcher",
    onClick: (0, _addonActions.action)('app-switcher click')
  }, _react2.default.createElement(_iconsReact.AppSwitcher20, null))), _react2.default.createElement(_UIShell.HeaderPanel, {
    "aria-label": "Header Panel",
    expanded: true
  }));
})).add('Header Base w/ Actions and Switcher', (0, _storybookReadme.withReadme)(_README.default, function () {
  return _react2.default.createElement(_UIShell.Header, {
    "aria-label": "IBM Platform Name"
  }, _react2.default.createElement(_UIShell.HeaderName, {
    href: "#",
    prefix: "IBM"
  }, "[Platform]"), _react2.default.createElement(_UIShell.HeaderGlobalBar, null, _react2.default.createElement(_UIShell.HeaderGlobalAction, {
    "aria-label": "Search",
    onClick: (0, _addonActions.action)('search click')
  }, _react2.default.createElement(_iconsReact.Search20, null)), _react2.default.createElement(_UIShell.HeaderGlobalAction, {
    "aria-label": "Notifications",
    onClick: (0, _addonActions.action)('notification click')
  }, _react2.default.createElement(_iconsReact.Notification20, null)), _react2.default.createElement(_UIShell.HeaderGlobalAction, {
    "aria-label": "App Switcher",
    isActive: true,
    onClick: (0, _addonActions.action)('app-switcher click')
  }, _react2.default.createElement(_iconsReact.AppSwitcher20, null))), _react2.default.createElement(_UIShell.HeaderPanel, {
    "aria-label": "Header Panel",
    expanded: true
  }, _react2.default.createElement(_UIShell.Switcher, {
    role: "menu",
    "aria-label": "Switcher Container"
  }, _react2.default.createElement(_UIShell.SwitcherItem, {
    isSelected: true,
    "aria-label": "Link 1",
    href: "#"
  }, "Link 1"), _react2.default.createElement(_UIShell.SwitcherDivider, null), _react2.default.createElement(_UIShell.SwitcherItem, {
    href: "#",
    "aria-label": "Link 2"
  }, "Link 2"), _react2.default.createElement(_UIShell.SwitcherItem, {
    href: "#",
    "aria-label": "Link 3"
  }, "Link 3"), _react2.default.createElement(_UIShell.SwitcherItem, {
    href: "#",
    "aria-label": "Link 4"
  }, "Link 4"), _react2.default.createElement(_UIShell.SwitcherItem, {
    href: "#",
    "aria-label": "Link 5"
  }, "Link 5"), _react2.default.createElement(_UIShell.SwitcherDivider, null), _react2.default.createElement(_UIShell.SwitcherItem, {
    href: "#",
    "aria-label": "Link 6"
  }, "Link 6"))));
})).add('Fixed SideNav', (0, _storybookReadme.withReadme)(_README.default, function () {
  return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(_UIShell.SideNav, {
    isFixedNav: true,
    expanded: true,
    isChildOfHeader: false,
    "aria-label": "Side navigation"
  }, _react2.default.createElement(_UIShell.SideNavItems, null, _react2.default.createElement(_UIShell.SideNavMenu, {
    title: "L0 menu"
  }, _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "L0 menu item"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "L0 menu item"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "L0 menu item")), _react2.default.createElement(_UIShell.SideNavMenu, {
    title: "L0 menu",
    isActive: true
  }, _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "L0 menu item"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    "aria-current": "page",
    href: "javascript:void(0)"
  }, "L0 menu item"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "L0 menu item")), _react2.default.createElement(_UIShell.SideNavMenu, {
    title: "L0 menu"
  }, _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "L0 menu item"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "L0 menu item"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "L0 menu item")), _react2.default.createElement(_UIShell.SideNavLink, {
    href: "javascript:void(0)"
  }, "L0 link"), _react2.default.createElement(_UIShell.SideNavLink, {
    href: "javascript:void(0)"
  }, "L0 link"))), _react2.default.createElement(StoryContent, null));
})).add('Fixed SideNav w/ Icons', (0, _storybookReadme.withReadme)(_README.default, function () {
  return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(_UIShell.SideNav, {
    isFixedNav: true,
    expanded: true,
    isChildOfHeader: false,
    "aria-label": "Side navigation"
  }, _react2.default.createElement(_UIShell.SideNavItems, null, _react2.default.createElement(_UIShell.SideNavMenu, {
    renderIcon: Fade16,
    title: "Category title"
  }, _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link")), _react2.default.createElement(_UIShell.SideNavMenu, {
    renderIcon: Fade16,
    title: "Category title",
    isActive: true
  }, _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    "aria-current": "page",
    href: "javascript:void(0)"
  }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link")), _react2.default.createElement(_UIShell.SideNavMenu, {
    renderIcon: Fade16,
    title: "Category title"
  }, _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link")), _react2.default.createElement(_UIShell.SideNavLink, {
    renderIcon: Fade16,
    href: "javascript:void(0)"
  }, "Link"), _react2.default.createElement(_UIShell.SideNavLink, {
    renderIcon: Fade16,
    href: "javascript:void(0)"
  }, "Link"))), _react2.default.createElement(StoryContent, null));
})).add('SideNav Rail', (0, _storybookReadme.withReadme)(_README.default, function () {
  return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(_UIShell.SideNav, {
    "aria-label": "Side navigation",
    isRail: true
  }, _react2.default.createElement(_UIShell.SideNavItems, null, _react2.default.createElement(_UIShell.SideNavMenu, {
    renderIcon: Fade16,
    title: "Category title"
  }, _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    "aria-current": "page",
    href: "javascript:void(0)"
  }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link")), _react2.default.createElement(_UIShell.SideNavMenu, {
    renderIcon: Fade16,
    title: "Category title"
  }, _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link")), _react2.default.createElement(_UIShell.SideNavMenu, {
    renderIcon: Fade16,
    title: "Category title"
  }, _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link")), _react2.default.createElement(_UIShell.SideNavLink, {
    renderIcon: Fade16,
    href: "javascript:void(0)"
  }, "Link"), _react2.default.createElement(_UIShell.SideNavLink, {
    renderIcon: Fade16,
    href: "javascript:void(0)"
  }, "Link"))), _react2.default.createElement(StoryContent, null));
})).add('SideNav Rail w/Header', (0, _storybookReadme.withReadme)(_README.default, function () {
  return _react2.default.createElement(_HeaderContainer.default, {
    render: function render(_ref5) {
      var isSideNavExpanded = _ref5.isSideNavExpanded,
          onClickSideNavExpand = _ref5.onClickSideNavExpand;
      return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(_UIShell.Header, {
        "aria-label": "IBM Platform Name"
      }, _react2.default.createElement(_UIShell.SkipToContent, null), _react2.default.createElement(_UIShell.HeaderMenuButton, {
        "aria-label": "Open menu",
        isCollapsible: true,
        onClick: onClickSideNavExpand,
        isActive: isSideNavExpanded
      }), _react2.default.createElement(_UIShell.HeaderName, {
        href: "#",
        prefix: "IBM"
      }, "[Platform]"), _react2.default.createElement(_UIShell.HeaderNavigation, {
        "aria-label": "IBM [Platform]"
      }, _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Link 1"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Link 2"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Link 3"), _react2.default.createElement(_UIShell.HeaderMenu, {
        "aria-label": "Link 4"
      }, _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Sub-link 1"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Sub-link 2"), _react2.default.createElement(_UIShell.HeaderMenuItem, {
        href: "#"
      }, "Sub-link 3"))), _react2.default.createElement(_UIShell.HeaderGlobalBar, null, _react2.default.createElement(_UIShell.HeaderGlobalAction, {
        "aria-label": "Search",
        onClick: (0, _addonActions.action)('search click')
      }, _react2.default.createElement(_iconsReact.Search20, null)), _react2.default.createElement(_UIShell.HeaderGlobalAction, {
        "aria-label": "Notifications",
        onClick: (0, _addonActions.action)('notification click')
      }, _react2.default.createElement(_iconsReact.Notification20, null)), _react2.default.createElement(_UIShell.HeaderGlobalAction, {
        "aria-label": "App Switcher",
        onClick: (0, _addonActions.action)('app-switcher click')
      }, _react2.default.createElement(_iconsReact.AppSwitcher20, null))), _react2.default.createElement(_UIShell.SideNav, {
        "aria-label": "Side navigation",
        isRail: true,
        expanded: isSideNavExpanded
      }, _react2.default.createElement(_UIShell.SideNavItems, null, _react2.default.createElement(_UIShell.SideNavMenu, {
        renderIcon: Fade16,
        title: "Category title"
      }, _react2.default.createElement(_UIShell.SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
        "aria-current": "page",
        href: "javascript:void(0)"
      }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link")), _react2.default.createElement(_UIShell.SideNavMenu, {
        renderIcon: Fade16,
        title: "Category title"
      }, _react2.default.createElement(_UIShell.SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
        "aria-current": "page",
        href: "javascript:void(0)"
      }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link")), _react2.default.createElement(_UIShell.SideNavMenu, {
        renderIcon: Fade16,
        title: "Category title"
      }, _react2.default.createElement(_UIShell.SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
        "aria-current": "page",
        href: "javascript:void(0)"
      }, "Link"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link")), _react2.default.createElement(_UIShell.SideNavLink, {
        renderIcon: Fade16,
        href: "javascript:void(0)"
      }, "Link"), _react2.default.createElement(_UIShell.SideNavLink, {
        renderIcon: Fade16,
        href: "javascript:void(0)"
      }, "Link")))), _react2.default.createElement(StoryContent, null));
    }
  });
})).add('SideNav w/ large side nav items', (0, _storybookReadme.withReadme)(_README.default, function () {
  return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(_UIShell.SideNav, {
    expanded: true,
    isChildOfHeader: false,
    "aria-label": "Side navigation"
  }, _react2.default.createElement(_UIShell.SideNavItems, null, _react2.default.createElement(_UIShell.SideNavMenu, {
    title: "Large menu",
    large: true
  }, _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Menu 1"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Menu 2"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Menu 3")), _react2.default.createElement(_UIShell.SideNavLink, {
    href: "javascript:void(0)",
    large: true
  }, "Large link"), _react2.default.createElement(_UIShell.SideNavMenu, {
    renderIcon: Fade16,
    title: "Large menu w/icon",
    large: true
  }, _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Menu 1"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Menu 2"), _react2.default.createElement(_UIShell.SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Menu 3")), _react2.default.createElement(_UIShell.SideNavLink, {
    renderIcon: Fade16,
    href: "javascript:void(0)",
    large: true
  }, "Large link w/icon"))), _react2.default.createElement(StoryContent, null));
}));