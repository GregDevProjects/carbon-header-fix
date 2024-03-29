/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { Tile, ClickableTile, SelectableTile, ExpandableTile, TileAboveTheFoldContent, TileBelowTheFoldContent } from '../Tile';
import { shallow, mount } from 'enzyme';
import { settings } from 'carbon-components';
var prefix = settings.prefix;
describe('Tile', function () {
  describe('Renders default tile as expected', function () {
    var wrapper = shallow(React.createElement(Tile, {
      className: "extra-class"
    }, React.createElement("div", {
      className: "child"
    }, "Test")));
    it('renders children as expected', function () {
      expect(wrapper.find('.child').length).toBe(1);
    });
    it('has the expected classes', function () {
      expect(wrapper.hasClass("".concat(prefix, "--tile"))).toEqual(true);
    });
    it('renders extra classes passed in via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
  });
  describe('Renders clickable tile as expected', function () {
    var wrapper = shallow(React.createElement(ClickableTile, {
      className: "extra-class"
    }, React.createElement("div", {
      className: "child"
    }, "Test")));
    beforeEach(function () {
      wrapper.state().clicked = false;
    });
    it('renders children as expected', function () {
      expect(wrapper.find('.child').length).toBe(1);
    });
    it('has the expected classes', function () {
      expect(wrapper.hasClass("".concat(prefix, "--tile--clickable"))).toEqual(true);
    });
    it('renders extra classes passed in via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
    it('toggles the clickable class on click', function () {
      expect(wrapper.hasClass("".concat(prefix, "--tile--is-clicked"))).toEqual(false);
      wrapper.simulate('click', {
        persist: function persist() {}
      });
      expect(wrapper.hasClass("".concat(prefix, "--tile--is-clicked"))).toEqual(true);
    });
    it('toggles the clickable state on click', function () {
      expect(wrapper.state().clicked).toEqual(false);
      wrapper.simulate('click', {
        persist: function persist() {}
      });
      expect(wrapper.state().clicked).toEqual(true);
    });
    it('toggles the clicked state when using enter or space', function () {
      expect(wrapper.state().clicked).toEqual(false);
      wrapper.simulate('keydown', {
        which: 32,
        persist: function persist() {}
      });
      expect(wrapper.state().clicked).toEqual(true);
      wrapper.simulate('keydown', {
        which: 13,
        persist: function persist() {}
      });
      expect(wrapper.state().clicked).toEqual(false);
    });
    it('supports setting initial clicked state from props', function () {
      expect(shallow(React.createElement(ClickableTile, {
        clicked: true
      })).state().clicked).toEqual(true);
    });
    it('supports setting clicked state from props', function () {
      wrapper.setProps({
        clicked: true
      });
      wrapper.setState({
        clicked: true
      });
      wrapper.setProps({
        clicked: false
      });
      expect(wrapper.state().clicked).toEqual(false);
    });
    it('avoids changing clicked state upon setting props, unless actual value change is detected', function () {
      wrapper.setProps({
        clicked: true
      });
      wrapper.setState({
        clicked: false
      });
      wrapper.setProps({
        clicked: true
      });
      expect(wrapper.state().clicked).toEqual(false);
    });
  });
  describe('Renders selectable tile as expected', function () {
    var wrapper = mount(React.createElement(SelectableTile, {
      className: "extra-class"
    }, React.createElement("div", {
      className: "child"
    }, "Test")));
    var label;
    beforeEach(function () {
      wrapper.state().selected = false;
      label = wrapper.find('label');
    });
    it('renders children as expected', function () {
      expect(wrapper.find('.child').length).toBe(1);
    });
    it('has the expected classes', function () {
      expect(label.hasClass("".concat(prefix, "--tile--selectable"))).toEqual(true);
    });
    it('renders extra classes passed in via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
    it('toggles the selectable state on click', function () {
      expect(wrapper.state().selected).toEqual(false);
      label.simulate('click');
      expect(wrapper.state().selected).toEqual(true);
    });
    it('toggles the selectable state when using enter or space', function () {
      expect(wrapper.state().selected).toEqual(false);
      label.simulate('keydown', {
        which: 32
      });
      expect(wrapper.state().selected).toEqual(true);
      label.simulate('keydown', {
        which: 13
      });
      expect(wrapper.state().selected).toEqual(false);
    });
    it('the input should be checked when state is selected', function () {
      wrapper.setState({
        selected: true
      });
      expect(wrapper.find('input').props().checked).toEqual(true);
    });
    it('supports setting initial selected state from props', function () {
      expect(shallow(React.createElement(SelectableTile, {
        selected: true
      })).state().selected).toEqual(true);
    });
    it('supports setting selected state from props', function () {
      wrapper.setProps({
        selected: true
      });
      wrapper.setState({
        selected: true
      });
      wrapper.setProps({
        selected: false
      });
      expect(wrapper.state().selected).toEqual(false);
    });
    it('avoids changing selected state upon setting props, unless actual value change is detected', function () {
      wrapper.setProps({
        selected: true
      });
      wrapper.setState({
        selected: false
      });
      wrapper.setProps({
        selected: true
      });
      expect(wrapper.state().selected).toEqual(false);
    });
  });
  describe('Renders expandable tile as expected', function () {
    var wrapper = mount(React.createElement(ExpandableTile, {
      className: "extra-class"
    }, React.createElement(TileAboveTheFoldContent, {
      className: "child"
    }, React.createElement("div", {
      style: {
        height: '200px'
      }
    }, "Test")), React.createElement(TileBelowTheFoldContent, {
      className: "child"
    }, React.createElement("div", {
      style: {
        height: '500px'
      }
    }, "Test"), React.createElement("a", {
      id: "test-link",
      href: "/"
    }, "Test Link"))));
    beforeEach(function () {
      wrapper.state().expanded = false;
    });
    it('renders children as expected', function () {
      expect(wrapper.props().children.length).toBe(2);
    });
    it('has the expected classes', function () {
      expect(wrapper.children().hasClass("".concat(prefix, "--tile--expandable"))).toEqual(true);
    });
    it('renders extra classes passed in via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
    it('toggles the expandable class on click', function () {
      expect(wrapper.children().hasClass("".concat(prefix, "--tile--is-expanded"))).toEqual(false);
      wrapper.simulate('click');
      expect(wrapper.children().hasClass("".concat(prefix, "--tile--is-expanded"))).toEqual(true);
    });
    it('toggles the expandable state on click', function () {
      expect(wrapper.state().expanded).toEqual(false);
      wrapper.simulate('click');
      expect(wrapper.state().expanded).toEqual(true);
    });
    it('ignores allows click events to be ignored using onBeforeClick', function () {
      wrapper.setProps({
        onBeforeClick: function onBeforeClick(evt) {
          return evt.target.tagName.toLowerCase() !== 'a';
        } // ignore link clicks

      });
      expect(wrapper.state().expanded).toEqual(false);
      wrapper.simulate('click');
      expect(wrapper.state().expanded).toEqual(true);
      wrapper.find('#test-link').simulate('click');
      expect(wrapper.state().expanded).toEqual(true);
      wrapper.simulate('click');
      expect(wrapper.state().expanded).toEqual(false);
    });
    it('displays the default tooltip for the button depending on state', function () {
      var defaultExpandedIconText = 'Interact to collapse Tile';
      var defaultCollapsedIconText = 'Interact to expand Tile'; // Force the expanded tile to be collapsed.

      wrapper.setState({
        expanded: false
      });
      var collapsedDescription = wrapper.find('button').getElements()[0].props['aria-label'];
      expect(collapsedDescription).toEqual(defaultCollapsedIconText); // click on the item to expand it.

      wrapper.simulate('click'); // Validate the description change

      var expandedDescription = wrapper.find('button').getElements()[0].props['aria-label'];
      expect(expandedDescription).toEqual(defaultExpandedIconText);
    });
    it('displays the custom tooltips for the button depending on state', function () {
      var tileExpandedIconText = 'Click To Collapse';
      var tileCollapsedIconText = 'Click To Expand'; // Force the custom icon text

      wrapper.setProps({
        tileExpandedIconText: tileExpandedIconText,
        tileCollapsedIconText: tileCollapsedIconText
      }); // Force the expanded tile to be collapsed.

      wrapper.setState({
        expanded: false
      });
      var collapsedDescription = wrapper.find('button').getElements()[0].props['aria-label'];
      expect(collapsedDescription).toEqual(tileCollapsedIconText); // click on the item to expand it.

      wrapper.simulate('click'); // Validate the description change

      var expandedDescription = wrapper.find('button').getElements()[0].props['aria-label'];
      expect(expandedDescription).toEqual(tileExpandedIconText);
    });
    it('supports setting initial expanded state from props', function () {
      var _mount$state = mount(React.createElement(ExpandableTile, {
        expanded: true
      }, React.createElement(TileAboveTheFoldContent, {
        className: "child"
      }, React.createElement("div", {
        style: {
          height: '200px'
        }
      }, "Test")), React.createElement(TileBelowTheFoldContent, {
        className: "child"
      }, React.createElement("div", {
        style: {
          height: '500px'
        }
      }, "Test")))).state(),
          expanded = _mount$state.expanded;

      expect(expanded).toEqual(true);
    });
    it('supports setting expanded state from props', function () {
      wrapper.setProps({
        expanded: true
      });
      wrapper.setState({
        expanded: true
      });
      wrapper.setProps({
        expanded: false
      });
      expect(wrapper.state().expanded).toEqual(false);
    });
    it('avoids changing expanded state upon setting props, unless actual value change is detected', function () {
      wrapper.setProps({
        expanded: true
      });
      wrapper.setState({
        expanded: false
      });
      wrapper.setProps({
        expanded: true
      });
      expect(wrapper.state().expanded).toEqual(false);
    });
    it('supports setting max height from props', function () {
      wrapper.setProps({
        tileMaxHeight: 2
      });
      wrapper.setState({
        tileMaxHeight: 2
      });
      wrapper.setProps({
        tileMaxHeight: 1
      });
      expect(wrapper.state().tileMaxHeight).toEqual(1);
    });
    it('avoids changing max height upon setting props, unless actual value change is detected', function () {
      wrapper.setProps({
        tileMaxHeight: 2
      });
      wrapper.setState({
        tileMaxHeight: 1
      });
      wrapper.setProps({
        tileMaxHeight: 2
      });
      expect(wrapper.state().tileMaxHeight).toEqual(1);
    });
    it('supports setting padding from props', function () {
      wrapper.setProps({
        tilePadding: 2
      });
      wrapper.setState({
        tilePadding: 2
      });
      wrapper.setProps({
        tilePadding: 1
      });
      expect(wrapper.state().tilePadding).toEqual(1);
    });
    it('avoids changing padding upon setting props, unless actual value change is detected', function () {
      wrapper.setProps({
        tilePadding: 2
      });
      wrapper.setState({
        tilePadding: 1
      });
      wrapper.setProps({
        tilePadding: 2
      });
      expect(wrapper.state().tilePadding).toEqual(1);
    });
  });
});