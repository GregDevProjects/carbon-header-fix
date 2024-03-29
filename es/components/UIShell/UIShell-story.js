/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Search20, Notification20, AppSwitcher20 } from '@carbon/icons-react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import { withReadme } from 'storybook-readme';
import readme from './README.md';
import HeaderContainer from './HeaderContainer';
import { Content, Header, HeaderMenuButton, HeaderName, HeaderNavigation, HeaderMenu, HeaderMenuItem, HeaderGlobalBar, HeaderGlobalAction, HeaderPanel, HeaderSideNavItems, SkipToContent, SideNav, // Temporarily comment these out until they are needed again
// SideNavHeader,
// SideNavDetails,
// SideNavSwitcher,
SideNavItems, SideNavLink, SideNavMenu, SideNavMenuItem, Switcher, SwitcherItem, SwitcherDivider } from '../UIShell';

var Fade16 = function Fade16() {
  return React.createElement("svg", {
    width: "16",
    height: "16",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    "aria-hidden": "true"
  }, React.createElement("path", {
    d: "M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12 12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86 23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14 14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59 10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59 10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z"
  }));
};

var StoryContent = function StoryContent() {
  var content = React.createElement("div", {
    className: "bx--grid"
  }, React.createElement("div", {
    className: "bx--row"
  }, React.createElement("div", {
    className: "bx--offset-lg-3 bx--col-lg-13"
  }, React.createElement("h2", {
    style: {
      fontWeight: '800',
      margin: '30px 0',
      fontSize: '20px'
    }
  }, "Purpose and function"), React.createElement("p", {
    style: {
      lineHeight: '20px'
    }
  }, "The shell is perhaps the most crucial piece of any UI built with Carbon. It contains the shared navigation framework for the entire design system and ties the products in IBM\u2019s portfolio together in a cohesive and elegant way. The shell is the home of the topmost navigation, where users can quickly and dependably gain their bearings and move between pages.", React.createElement("br", null), React.createElement("br", null), "The shell was designed with maximum flexibility built in, to serve the needs of a broad range of products and users. Adopting the shell ensures compliance with IBM design standards, simplifies development efforts, and provides great user experiences. All IBM products built with Carbon are required to use the shell\u2019s header.", React.createElement("br", null), React.createElement("br", null), "To better understand the purpose and function of the UI shell, consider the \u201Cshell\u201D of MacOS, which contains the Apple menu, top-level navigation, and universal, OS-level controls at the top of the screen, as well as a universal dock along the bottom or side of the screen. The Carbon UI shell is roughly analogous in function to these parts of the Mac UI. For example, the app switcher portion of the shell can be compared to the dock in MacOS."), React.createElement("h2", {
    style: {
      fontWeight: '800',
      margin: '30px 0',
      fontSize: '20px'
    }
  }, "Header responsive behavior"), React.createElement("p", {
    style: {
      lineHeight: '20px'
    }
  }, "As a header scales down to fit smaller screen sizes, headers with persistent side nav menus should have the side nav collapse into \u201Chamburger\u201D menu. See the example to better understand responsive behavior of the header."), React.createElement("h2", {
    style: {
      fontWeight: '800',
      margin: '30px 0',
      fontSize: '20px'
    }
  }, "Secondary navigation"), React.createElement("p", {
    style: {
      lineHeight: '20px'
    }
  }, "The side-nav contains secondary navigation and fits below the header. It can be configured to be either fixed-width or flexible, with only one level of nested items allowed. Both links and category lists can be used in the side-nav and may be mixed together. There are several configurations of the side-nav, but only one configuration should be used per product section. If tabs are needed on a page when using a side-nav, then the tabs are secondary in hierarchy to the side-nav."))));
  return React.createElement(Content, {
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


storiesOf('UI Shell', module).add('Header Base', withReadme(readme, function () {
  return React.createElement(Header, {
    "aria-label": "IBM Platform Name"
  }, React.createElement(HeaderName, {
    href: "#",
    prefix: "IBM"
  }, "[Platform]"));
})).add('Header Base w/ Navigation', withReadme(readme, function () {
  return React.createElement(HeaderContainer, {
    render: function render(_ref) {
      var isSideNavExpanded = _ref.isSideNavExpanded,
          onClickSideNavExpand = _ref.onClickSideNavExpand;
      return React.createElement(React.Fragment, null, React.createElement(Header, {
        "aria-label": "IBM Platform Name"
      }, React.createElement(SkipToContent, null), React.createElement(HeaderMenuButton, {
        "aria-label": "Open menu",
        onClick: onClickSideNavExpand,
        isActive: isSideNavExpanded
      }), React.createElement(HeaderName, {
        href: "#",
        prefix: "IBM"
      }, "[Platform]"), React.createElement(HeaderNavigation, {
        "aria-label": "IBM [Platform]"
      }, React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Link 1"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Link 2"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Link 3"), React.createElement(HeaderMenu, {
        "aria-label": "Link 4",
        menuLinkName: "Link 4"
      }, React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Sub-link 1"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Sub-link 2"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Sub-link 3"))), React.createElement(SideNav, {
        "aria-label": "Side navigation",
        expanded: isSideNavExpanded,
        isPersistent: false
      }, React.createElement(SideNavItems, null, React.createElement(HeaderSideNavItems, null, React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Link 1"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Link 2"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Link 3"), React.createElement(HeaderMenu, {
        "aria-label": "Link 4",
        menuLinkName: "Link 4"
      }, React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Sub-link 1"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Sub-link 2"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Sub-link 3")))))));
    }
  });
})).add('Header Base w/ Actions', withReadme(readme, function () {
  return React.createElement(Header, {
    "aria-label": "IBM Platform Name"
  }, React.createElement(HeaderName, {
    href: "#",
    prefix: "IBM"
  }, "[Platform]"), React.createElement(HeaderGlobalBar, null, React.createElement(HeaderGlobalAction, {
    "aria-label": "Search",
    onClick: action('search click')
  }, React.createElement(Search20, null)), React.createElement(HeaderGlobalAction, {
    "aria-label": "Notifications",
    onClick: action('notification click')
  }, React.createElement(Notification20, null)), React.createElement(HeaderGlobalAction, {
    "aria-label": "App Switcher",
    onClick: action('app-switcher click')
  }, React.createElement(AppSwitcher20, null))));
})).add('Header Base w/ Navigation and Actions', withReadme(readme, function () {
  return React.createElement(HeaderContainer, {
    render: function render(_ref2) {
      var isSideNavExpanded = _ref2.isSideNavExpanded,
          onClickSideNavExpand = _ref2.onClickSideNavExpand;
      return React.createElement(React.Fragment, null, React.createElement(Header, {
        "aria-label": "IBM Platform Name"
      }, React.createElement(SkipToContent, null), React.createElement(HeaderMenuButton, {
        "aria-label": "Open menu",
        onClick: onClickSideNavExpand,
        isActive: isSideNavExpanded
      }), React.createElement(HeaderName, {
        href: "#",
        prefix: "IBM"
      }, "[Platform]"), React.createElement(HeaderNavigation, {
        "aria-label": "IBM [Platform]"
      }, React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Link 1"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Link 2"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Link 3"), React.createElement(HeaderMenu, {
        "aria-label": "Link 4",
        menuLinkName: "Link 4"
      }, React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Sub-link 1"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Sub-link 2"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Sub-link 3"))), React.createElement(HeaderGlobalBar, null, React.createElement(HeaderGlobalAction, {
        "aria-label": "Search",
        onClick: action('search click')
      }, React.createElement(Search20, null)), React.createElement(HeaderGlobalAction, {
        "aria-label": "Notifications",
        onClick: action('notification click')
      }, React.createElement(Notification20, null)), React.createElement(HeaderGlobalAction, {
        "aria-label": "App Switcher",
        onClick: action('app-switcher click')
      }, React.createElement(AppSwitcher20, null))), React.createElement(SideNav, {
        "aria-label": "Side navigation",
        expanded: isSideNavExpanded,
        isPersistent: false
      }, React.createElement(SideNavItems, null, React.createElement(HeaderSideNavItems, null, React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Link 1"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Link 2"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Link 3"), React.createElement(HeaderMenu, {
        "aria-label": "Link 4",
        menuLinkName: "Link 4"
      }, React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Sub-link 1"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Sub-link 2"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Sub-link 3")))))));
    }
  });
})).add('Header Base w/ Navigation, Actions and SideNav', withReadme(readme, function () {
  return React.createElement(HeaderContainer, {
    render: function render(_ref3) {
      var isSideNavExpanded = _ref3.isSideNavExpanded,
          onClickSideNavExpand = _ref3.onClickSideNavExpand;
      return React.createElement(React.Fragment, null, React.createElement(Header, {
        "aria-label": "IBM Platform Name"
      }, React.createElement(SkipToContent, null), React.createElement(HeaderMenuButton, {
        "aria-label": "Open menu",
        onClick: onClickSideNavExpand,
        isActive: isSideNavExpanded
      }), React.createElement(HeaderName, {
        href: "#",
        prefix: "IBM"
      }, "[Platform]"), React.createElement(HeaderNavigation, {
        "aria-label": "IBM [Platform]"
      }, React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Link 1"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Link 2"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Link 3"), React.createElement(HeaderMenu, {
        "aria-label": "Link 4",
        menuLinkName: "Link 4"
      }, React.createElement(HeaderMenuItem, {
        href: "#one"
      }, "Sub-link 1"), React.createElement(HeaderMenuItem, {
        href: "#two"
      }, "Sub-link 2"), React.createElement(HeaderMenuItem, {
        href: "#three"
      }, "Sub-link 3"))), React.createElement(HeaderGlobalBar, null, React.createElement(HeaderGlobalAction, {
        "aria-label": "Search",
        onClick: action('search click')
      }, React.createElement(Search20, null)), React.createElement(HeaderGlobalAction, {
        "aria-label": "Notifications",
        onClick: action('notification click')
      }, React.createElement(Notification20, null)), React.createElement(HeaderGlobalAction, {
        "aria-label": "App Switcher",
        onClick: action('app-switcher click')
      }, React.createElement(AppSwitcher20, null))), React.createElement(SideNav, {
        "aria-label": "Side navigation",
        expanded: isSideNavExpanded
      }, React.createElement(SideNavItems, null, React.createElement(HeaderSideNavItems, {
        hasDivider: true
      }, React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Link 1"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Link 2"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Link 3"), React.createElement(HeaderMenu, {
        "aria-label": "Link 4",
        menuLinkName: "Link 4"
      }, React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Sub-link 1"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Sub-link 2"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Sub-link 3"))), React.createElement(SideNavMenu, {
        renderIcon: Fade16,
        title: "Category title"
      }, React.createElement(SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), React.createElement(SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), React.createElement(SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link")), React.createElement(SideNavMenu, {
        renderIcon: Fade16,
        title: "Category title"
      }, React.createElement(SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), React.createElement(SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), React.createElement(SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link")), React.createElement(SideNavMenu, {
        renderIcon: Fade16,
        title: "Category title",
        isActive: true
      }, React.createElement(SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), React.createElement(SideNavMenuItem, {
        "aria-current": "page",
        href: "javascript:void(0)"
      }, "Link"), React.createElement(SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link")), React.createElement(SideNavLink, {
        renderIcon: Fade16,
        href: "javascript:void(0)"
      }, "Link"), React.createElement(SideNavLink, {
        renderIcon: Fade16,
        href: "javascript:void(0)"
      }, "Link")))), React.createElement(StoryContent, null));
    }
  });
})).add('Header Base w/ SideNav', withReadme(readme, function () {
  return React.createElement(HeaderContainer, {
    render: function render(_ref4) {
      var isSideNavExpanded = _ref4.isSideNavExpanded,
          onClickSideNavExpand = _ref4.onClickSideNavExpand;
      return React.createElement(React.Fragment, null, React.createElement(Header, {
        "aria-label": "IBM Platform Name"
      }, React.createElement(SkipToContent, null), React.createElement(HeaderMenuButton, {
        "aria-label": "Open menu",
        onClick: onClickSideNavExpand,
        isActive: isSideNavExpanded
      }), React.createElement(HeaderName, {
        href: "#",
        prefix: "IBM"
      }, "[Platform]"), React.createElement(SideNav, {
        "aria-label": "Side navigation",
        expanded: isSideNavExpanded
      }, React.createElement(SideNavItems, null, React.createElement(SideNavMenu, {
        renderIcon: Fade16,
        title: "Category title"
      }, React.createElement(SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), React.createElement(SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), React.createElement(SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link")), React.createElement(SideNavMenu, {
        renderIcon: Fade16,
        title: "Category title",
        isActive: true
      }, React.createElement(SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), React.createElement(SideNavMenuItem, {
        "aria-current": "page",
        href: "javascript:void(0)"
      }, "Link"), React.createElement(SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link")), React.createElement(SideNavMenu, {
        renderIcon: Fade16,
        title: "Category title"
      }, React.createElement(SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), React.createElement(SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), React.createElement(SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link")), React.createElement(SideNavLink, {
        renderIcon: Fade16,
        href: "javascript:void(0)"
      }, "Link"), React.createElement(SideNavLink, {
        renderIcon: Fade16,
        href: "javascript:void(0)"
      }, "Link")))), React.createElement(StoryContent, null));
    }
  });
})).add('Header Base w/ Actions and Right Panel', withReadme(readme, function () {
  return React.createElement(Header, {
    "aria-label": "IBM Platform Name"
  }, React.createElement(HeaderName, {
    href: "#",
    prefix: "IBM"
  }, "[Platform]"), React.createElement(HeaderGlobalBar, null, React.createElement(HeaderGlobalAction, {
    "aria-label": "Search",
    onClick: action('search click')
  }, React.createElement(Search20, null)), React.createElement(HeaderGlobalAction, {
    "aria-label": "Notifications",
    isActive: true,
    onClick: action('notification click')
  }, React.createElement(Notification20, null)), React.createElement(HeaderGlobalAction, {
    "aria-label": "App Switcher",
    onClick: action('app-switcher click')
  }, React.createElement(AppSwitcher20, null))), React.createElement(HeaderPanel, {
    "aria-label": "Header Panel",
    expanded: true
  }));
})).add('Header Base w/ Actions and Switcher', withReadme(readme, function () {
  return React.createElement(Header, {
    "aria-label": "IBM Platform Name"
  }, React.createElement(HeaderName, {
    href: "#",
    prefix: "IBM"
  }, "[Platform]"), React.createElement(HeaderGlobalBar, null, React.createElement(HeaderGlobalAction, {
    "aria-label": "Search",
    onClick: action('search click')
  }, React.createElement(Search20, null)), React.createElement(HeaderGlobalAction, {
    "aria-label": "Notifications",
    onClick: action('notification click')
  }, React.createElement(Notification20, null)), React.createElement(HeaderGlobalAction, {
    "aria-label": "App Switcher",
    isActive: true,
    onClick: action('app-switcher click')
  }, React.createElement(AppSwitcher20, null))), React.createElement(HeaderPanel, {
    "aria-label": "Header Panel",
    expanded: true
  }, React.createElement(Switcher, {
    role: "menu",
    "aria-label": "Switcher Container"
  }, React.createElement(SwitcherItem, {
    isSelected: true,
    "aria-label": "Link 1",
    href: "#"
  }, "Link 1"), React.createElement(SwitcherDivider, null), React.createElement(SwitcherItem, {
    href: "#",
    "aria-label": "Link 2"
  }, "Link 2"), React.createElement(SwitcherItem, {
    href: "#",
    "aria-label": "Link 3"
  }, "Link 3"), React.createElement(SwitcherItem, {
    href: "#",
    "aria-label": "Link 4"
  }, "Link 4"), React.createElement(SwitcherItem, {
    href: "#",
    "aria-label": "Link 5"
  }, "Link 5"), React.createElement(SwitcherDivider, null), React.createElement(SwitcherItem, {
    href: "#",
    "aria-label": "Link 6"
  }, "Link 6"))));
})).add('Fixed SideNav', withReadme(readme, function () {
  return React.createElement(React.Fragment, null, React.createElement(SideNav, {
    isFixedNav: true,
    expanded: true,
    isChildOfHeader: false,
    "aria-label": "Side navigation"
  }, React.createElement(SideNavItems, null, React.createElement(SideNavMenu, {
    title: "L0 menu"
  }, React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "L0 menu item"), React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "L0 menu item"), React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "L0 menu item")), React.createElement(SideNavMenu, {
    title: "L0 menu",
    isActive: true
  }, React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "L0 menu item"), React.createElement(SideNavMenuItem, {
    "aria-current": "page",
    href: "javascript:void(0)"
  }, "L0 menu item"), React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "L0 menu item")), React.createElement(SideNavMenu, {
    title: "L0 menu"
  }, React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "L0 menu item"), React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "L0 menu item"), React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "L0 menu item")), React.createElement(SideNavLink, {
    href: "javascript:void(0)"
  }, "L0 link"), React.createElement(SideNavLink, {
    href: "javascript:void(0)"
  }, "L0 link"))), React.createElement(StoryContent, null));
})).add('Fixed SideNav w/ Icons', withReadme(readme, function () {
  return React.createElement(React.Fragment, null, React.createElement(SideNav, {
    isFixedNav: true,
    expanded: true,
    isChildOfHeader: false,
    "aria-label": "Side navigation"
  }, React.createElement(SideNavItems, null, React.createElement(SideNavMenu, {
    renderIcon: Fade16,
    title: "Category title"
  }, React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link"), React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link"), React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link")), React.createElement(SideNavMenu, {
    renderIcon: Fade16,
    title: "Category title",
    isActive: true
  }, React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link"), React.createElement(SideNavMenuItem, {
    "aria-current": "page",
    href: "javascript:void(0)"
  }, "Link"), React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link")), React.createElement(SideNavMenu, {
    renderIcon: Fade16,
    title: "Category title"
  }, React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link"), React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link"), React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link")), React.createElement(SideNavLink, {
    renderIcon: Fade16,
    href: "javascript:void(0)"
  }, "Link"), React.createElement(SideNavLink, {
    renderIcon: Fade16,
    href: "javascript:void(0)"
  }, "Link"))), React.createElement(StoryContent, null));
})).add('SideNav Rail', withReadme(readme, function () {
  return React.createElement(React.Fragment, null, React.createElement(SideNav, {
    "aria-label": "Side navigation",
    isRail: true
  }, React.createElement(SideNavItems, null, React.createElement(SideNavMenu, {
    renderIcon: Fade16,
    title: "Category title"
  }, React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link"), React.createElement(SideNavMenuItem, {
    "aria-current": "page",
    href: "javascript:void(0)"
  }, "Link"), React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link")), React.createElement(SideNavMenu, {
    renderIcon: Fade16,
    title: "Category title"
  }, React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link"), React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link"), React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link")), React.createElement(SideNavMenu, {
    renderIcon: Fade16,
    title: "Category title"
  }, React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link"), React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link"), React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Link")), React.createElement(SideNavLink, {
    renderIcon: Fade16,
    href: "javascript:void(0)"
  }, "Link"), React.createElement(SideNavLink, {
    renderIcon: Fade16,
    href: "javascript:void(0)"
  }, "Link"))), React.createElement(StoryContent, null));
})).add('SideNav Rail w/Header', withReadme(readme, function () {
  return React.createElement(HeaderContainer, {
    render: function render(_ref5) {
      var isSideNavExpanded = _ref5.isSideNavExpanded,
          onClickSideNavExpand = _ref5.onClickSideNavExpand;
      return React.createElement(React.Fragment, null, React.createElement(Header, {
        "aria-label": "IBM Platform Name"
      }, React.createElement(SkipToContent, null), React.createElement(HeaderMenuButton, {
        "aria-label": "Open menu",
        isCollapsible: true,
        onClick: onClickSideNavExpand,
        isActive: isSideNavExpanded
      }), React.createElement(HeaderName, {
        href: "#",
        prefix: "IBM"
      }, "[Platform]"), React.createElement(HeaderNavigation, {
        "aria-label": "IBM [Platform]"
      }, React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Link 1"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Link 2"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Link 3"), React.createElement(HeaderMenu, {
        "aria-label": "Link 4"
      }, React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Sub-link 1"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Sub-link 2"), React.createElement(HeaderMenuItem, {
        href: "#"
      }, "Sub-link 3"))), React.createElement(HeaderGlobalBar, null, React.createElement(HeaderGlobalAction, {
        "aria-label": "Search",
        onClick: action('search click')
      }, React.createElement(Search20, null)), React.createElement(HeaderGlobalAction, {
        "aria-label": "Notifications",
        onClick: action('notification click')
      }, React.createElement(Notification20, null)), React.createElement(HeaderGlobalAction, {
        "aria-label": "App Switcher",
        onClick: action('app-switcher click')
      }, React.createElement(AppSwitcher20, null))), React.createElement(SideNav, {
        "aria-label": "Side navigation",
        isRail: true,
        expanded: isSideNavExpanded
      }, React.createElement(SideNavItems, null, React.createElement(SideNavMenu, {
        renderIcon: Fade16,
        title: "Category title"
      }, React.createElement(SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), React.createElement(SideNavMenuItem, {
        "aria-current": "page",
        href: "javascript:void(0)"
      }, "Link"), React.createElement(SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link")), React.createElement(SideNavMenu, {
        renderIcon: Fade16,
        title: "Category title"
      }, React.createElement(SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), React.createElement(SideNavMenuItem, {
        "aria-current": "page",
        href: "javascript:void(0)"
      }, "Link"), React.createElement(SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link")), React.createElement(SideNavMenu, {
        renderIcon: Fade16,
        title: "Category title"
      }, React.createElement(SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link"), React.createElement(SideNavMenuItem, {
        "aria-current": "page",
        href: "javascript:void(0)"
      }, "Link"), React.createElement(SideNavMenuItem, {
        href: "javascript:void(0)"
      }, "Link")), React.createElement(SideNavLink, {
        renderIcon: Fade16,
        href: "javascript:void(0)"
      }, "Link"), React.createElement(SideNavLink, {
        renderIcon: Fade16,
        href: "javascript:void(0)"
      }, "Link")))), React.createElement(StoryContent, null));
    }
  });
})).add('SideNav w/ large side nav items', withReadme(readme, function () {
  return React.createElement(React.Fragment, null, React.createElement(SideNav, {
    expanded: true,
    isChildOfHeader: false,
    "aria-label": "Side navigation"
  }, React.createElement(SideNavItems, null, React.createElement(SideNavMenu, {
    title: "Large menu",
    large: true
  }, React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Menu 1"), React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Menu 2"), React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Menu 3")), React.createElement(SideNavLink, {
    href: "javascript:void(0)",
    large: true
  }, "Large link"), React.createElement(SideNavMenu, {
    renderIcon: Fade16,
    title: "Large menu w/icon",
    large: true
  }, React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Menu 1"), React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Menu 2"), React.createElement(SideNavMenuItem, {
    href: "javascript:void(0)"
  }, "Menu 3")), React.createElement(SideNavLink, {
    renderIcon: Fade16,
    href: "javascript:void(0)",
    large: true
  }, "Large link w/icon"))), React.createElement(StoryContent, null));
}));