/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import OverflowMenu from '../OverflowMenu';
import { OverflowMenuVertical16 } from '@carbon/icons-react';
import { mount } from 'enzyme';
import { settings } from 'carbon-components';
var prefix = settings.prefix;
describe('OverflowMenu', function () {
  describe('Renders as expected', function () {
    var rootWrapper = mount(React.createElement(OverflowMenu, {
      className: "extra-class"
    }, React.createElement("div", {
      className: "test-child"
    }), React.createElement("div", {
      className: "test-child"
    })));
    var menu = rootWrapper.find("div.".concat(prefix, "--overflow-menu"));
    var icon = menu.find(OverflowMenuVertical16);
    it('should render an Icon', function () {
      expect(icon.length).toBe(1);
      expect(icon.hasClass("".concat(prefix, "--overflow-menu__icon"))).toEqual(true);
    });
    it('has the expected classes', function () {
      expect(menu.hasClass("".concat(prefix, "--overflow-menu"))).toBe(true);
      expect(menu.hasClass("".concat(prefix, "--overflow-menu--open"))).not.toBe(true);
    });
    it('should not render a ul unless menu is open', function () {
      var list = menu.find('ul');
      expect(list.length).toEqual(0);
    });
    it('should add extra classes that are passed via className', function () {
      expect(menu.hasClass('extra-class')).toEqual(true);
    });
    it('should not render children unless the menu is open', function () {
      expect(menu.find('.test-child').length).toEqual(0);
    });
    it('should set tabIndex if one is passed via props', function () {
      rootWrapper.setProps({
        tabIndex: 2
      });
      expect(rootWrapper.find("div.".concat(prefix, "--overflow-menu")).props().tabIndex).toEqual(2);
    });
    it('should set ariaLabel if one is passed via props', function () {
      rootWrapper.setProps({
        ariaLabel: 'test label'
      });
      expect(rootWrapper.find("div.".concat(prefix, "--overflow-menu")).props()['aria-label']).toEqual('test label');
    });
    it('should set id if one is passed via props', function () {
      rootWrapper.setProps({
        id: 'uniqueId'
      });
      expect(rootWrapper.find("div.".concat(prefix, "--overflow-menu")).props().id).toEqual('uniqueId');
    });
    it('should apply a tabindex to the menu', function () {
      var defaultMenu = mount(React.createElement(OverflowMenu, null, React.createElement("div", null, "Child"))).childAt(0); // Enzyme doesn't seem to allow props() in a forwardRef-wrapped class component

      expect(defaultMenu.find('OverflowMenu').instance().props.tabIndex).toBe(0);
    });
  });
  describe('open and closed states', function () {
    it('open state should be false by default', function () {
      var rootWrapper = mount(React.createElement(OverflowMenu, null)); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(rootWrapper.find('OverflowMenu').instance().state.open).toEqual(false); // Enzyme doesn't seem to allow props() in a forwardRef-wrapped class component

      expect(rootWrapper.find('OverflowMenu').instance().props.open).toEqual(false);
    });
    it('should render a ul with the appropriate class', function () {
      var rootWrapper = mount(React.createElement(OverflowMenu, {
        menuOptionsClass: "extra-menu-class"
      }, React.createElement("div", {
        className: "test-child"
      }), React.createElement("div", {
        className: "test-child"
      }))); // Enzyme doesn't seem to allow setState() in a forwardRef-wrapped class component

      rootWrapper.find('OverflowMenu').instance().setState({
        open: true
      });
      rootWrapper.update();
      var list = rootWrapper.find('ul');
      expect(list.length).toEqual(1);
      expect(list.hasClass("".concat(prefix, "--overflow-menu-options"))).toEqual(true);
      expect(list.hasClass('extra-menu-class')).toEqual(true);
    });
    it('should render children as expected', function () {
      var rootWrapper = mount(React.createElement(OverflowMenu, null, React.createElement("div", {
        className: "test-child"
      }), React.createElement("div", {
        className: "test-child"
      }))); // Enzyme doesn't seem to allow setState() in a forwardRef-wrapped class component

      rootWrapper.find('OverflowMenu').instance().setState({
        open: true
      });
      rootWrapper.update();
      expect(rootWrapper.find('.test-child').length).toEqual(2);
    });
    it('should set expected class when state is open', function () {
      var rootWrapper = mount(React.createElement(OverflowMenu, null));
      var openClass = "".concat(prefix, "--overflow-menu-options--open");
      expect(rootWrapper.find('ul').length).toEqual(0); // Enzyme doesn't seem to allow setState() in a forwardRef-wrapped class component

      rootWrapper.find('OverflowMenu').instance().setState({
        open: true
      });
      rootWrapper.update();
      expect(rootWrapper.find('ul').hasClass(openClass)).not.toEqual(false);
    });
    it('should be in an open state after icon is clicked', function () {
      var rootWrapper = mount(React.createElement(OverflowMenu, null));
      var menu = rootWrapper.childAt(0);
      var icon = menu.find(OverflowMenuVertical16);
      icon.simulate('click'); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(rootWrapper.find('OverflowMenu').instance().state.open).toEqual(true);
    });
    it('should toggle state in response to Enter or Space when the menu is closed', function () {
      var enterKey = 13;
      var spaceKey = 32;
      var rootWrapper = mount(React.createElement(OverflowMenu, null));
      var menu = rootWrapper.childAt(0); // Enzyme doesn't seem to allow setState() in a forwardRef-wrapped class component

      rootWrapper.find('OverflowMenu').instance().setState({
        open: false
      });
      menu.simulate('keydown', {
        which: spaceKey
      }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(rootWrapper.find('OverflowMenu').instance().state.open).toEqual(true);
      menu.simulate('keydown', {
        which: enterKey
      }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(rootWrapper.find('OverflowMenu').instance().state.open).toEqual(true);
    });
    it('should NOT toggle state in response to Enter or Space when the menu is open', function () {
      var enterKey = 13;
      var spaceKey = 32;
      var rootWrapper = mount(React.createElement(OverflowMenu, null));
      var menu = rootWrapper.childAt(0); // Enzyme doesn't seem to allow setState() in a forwardRef-wrapped class component

      rootWrapper.find('OverflowMenu').instance().setState({
        open: true
      });
      menu.simulate('keydown', {
        which: spaceKey
      }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(rootWrapper.find('OverflowMenu').instance().state.open).toEqual(true);
      menu.simulate('keydown', {
        which: enterKey
      }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(rootWrapper.find('OverflowMenu').instance().state.open).toEqual(true);
    }); // Removed until a better solution appears
    //
    // it('should be hidden when it loses focus', () => {
    //   const rootWrapper = mount(
    //     <OverflowMenu className="extra-class">
    //       <div className="test-child"></div>
    //       <div className="test-child"></div>
    //     </OverflowMenu>
    //   );
    //   const menu = rootWrapper.childAt(0);
    //   rootWrapper.setState({ open: true });
    //   menu.simulate('blur');
    //   expect(rootWrapper.state().open).toEqual(false);
    // });

    it('should be in a closed state after handleOutsideClick() is invoked', function () {
      var rootWrapper = mount(React.createElement(OverflowMenu, null)); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(rootWrapper.find('OverflowMenu').instance().state.open).not.toEqual(true); // Enzyme doesn't seem to allow setState() in a forwardRef-wrapped class component

      rootWrapper.find('OverflowMenu').instance().setState({
        open: true
      });
      rootWrapper.find('ClickListener').props().onClickOutside({
        target: document.body
      }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(rootWrapper.find('OverflowMenu').instance().state.open).not.toEqual(true);
    });
    it('open state should be controlled by open props', function () {
      var rootWrapper = mount(React.createElement(OverflowMenu, null)); // Enzyme doesn't seem to allow setState() in a forwardRef-wrapped class component

      rootWrapper.find('OverflowMenu').instance().setState({
        open: true
      }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(rootWrapper.find('OverflowMenu').instance().state.open).toEqual(true);
    });
  });
  describe('customized icon', function () {
    it('renders', function () {
      var rootWrapper = mount(React.createElement(OverflowMenu, {
        className: "extra-class",
        renderIcon: function renderIcon() {
          return React.createElement("div", {
            className: "other"
          }, "Other");
        }
      }, React.createElement("div", {
        className: "test-child"
      }), React.createElement("div", {
        className: "test-child"
      }))); // renderIcon should be the only component where `${prefix}--overflow-menu__icon` class is applied,
      // meaning no actual DOM node should have that class

      var nodesWithIconClasses = rootWrapper.find(".".concat(prefix, "--overflow-menu__icon"));
      expect(nodesWithIconClasses.length).toBe(nodesWithIconClasses.filter('renderIcon').length);
      expect(rootWrapper.find('.other')).toHaveLength(1);
    });
  });
  describe('Getting derived state from props', function () {
    it('should change the open state upon change in props', function () {
      var wrapper = mount(React.createElement(OverflowMenu, {
        open: true
      })); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(wrapper.find('OverflowMenu').instance().state.open).toEqual(true);
      wrapper.setProps({
        open: false
      }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(wrapper.find('OverflowMenu').instance().state.open).toEqual(false);
    });
    it('should avoid change the open state upon setting props, unless there the value actually changes', function () {
      var wrapper = mount(React.createElement(OverflowMenu, null));
      wrapper.setProps({
        open: true
      }); // Enzyme doesn't seem to allow setState() in a forwardRef-wrapped class component

      wrapper.find('OverflowMenu').instance().setState({
        open: false
      });
      wrapper.update();
      wrapper.setProps({
        open: true
      }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

      expect(wrapper.find('OverflowMenu').instance().state.open).toEqual(false);
    });
  });
});