function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { ChevronDownGlyph } from '@carbon/icons-react';
import Tabs from '../Tabs';
import Tab from '../Tab';
import TabsSkeleton from '../Tabs/Tabs.Skeleton';
import { shallow, mount } from 'enzyme';
import { settings } from 'carbon-components';
var prefix = settings.prefix;
describe('Tabs', function () {
  describe('renders as expected', function () {
    describe('navigation (<div>)', function () {
      var wrapper = shallow(React.createElement(Tabs, {
        className: "extra-class"
      }, React.createElement(Tab, {
        label: "firstTab"
      }, "content1"), React.createElement(Tab, {
        label: "lastTab"
      }, "content2")));
      it('renders [role="navigation"] props on wrapping <div> by default', function () {
        expect(wrapper.find(".".concat(prefix, "--tabs")).props().role).toEqual('navigation');
      });
      it('renders [role="tablist"] props on <ul> by default', function () {
        expect(wrapper.find('ul').props().role).toEqual('tablist');
      });
      it('renders extra classes on wrapping <div> via className prop', function () {
        expect(wrapper.find(".".concat(prefix, "--tabs")).hasClass('extra-class')).toBe(true);
      });
      it('renders expected classes on wrapping <div> by default', function () {
        expect(wrapper.find('div').first().hasClass("".concat(prefix, "--tabs"))).toBe(true);
      });
    });
    describe('Trigger (<div>)', function () {
      var wrapper = shallow(React.createElement(Tabs, {
        className: "extra-class"
      }, React.createElement(Tab, {
        label: "firstTab"
      }, "content1"), React.createElement(Tab, {
        label: "lastTab"
      }, "content2")));
      var trigger = wrapper.find("div.".concat(prefix, "--tabs-trigger"));
      var tablist = wrapper.find('ul');
      it('renders default className for trigger', function () {
        expect(trigger.hasClass("".concat(prefix, "--tabs-trigger"))).toBe(true);
      });
      it('renders hidden className by default', function () {
        expect(tablist.hasClass("".concat(prefix, "--tabs__nav--hidden"))).toBe(true);
      });
      it('renders default className for triggerText', function () {
        expect(trigger.find('a').hasClass("".concat(prefix, "--tabs-trigger-text"))).toBe(true);
      });
      it('renders <Icon>', function () {
        expect(trigger.find(ChevronDownGlyph).length).toBe(1);
      });
    });
    describe('Children (<Tab>)', function () {
      var wrapper = shallow(React.createElement(Tabs, null, React.createElement(Tab, {
        label: "firstTab"
      }, "content1"), React.createElement(Tab, {
        label: "lastTab"
      }, "content2")));
      var firstTab = wrapper.find('[label="firstTab"]');
      var lastTab = wrapper.find('[label="lastTab"]');
      it('renders children as expected', function () {
        expect(wrapper.props().children.length).toEqual(2);
      });
      it('renders index prop', function () {
        expect(firstTab.props().index).toEqual(0);
        expect(lastTab.props().index).toEqual(1);
      });
      it('renders selected prop (where firstTab is selected by default)', function () {
        expect(firstTab.props().selected).toEqual(true);
        expect(lastTab.props().selected).toEqual(false);
      });
    });
  });
  describe('Children (<TabContent>)', function () {
    var wrapper = shallow(React.createElement(Tabs, null, React.createElement(Tab, {
      label: "firstTab"
    }, "content1"), React.createElement(Tab, {
      label: "lastTab"
    }, "content2")));
    it('renders content children as expected', function () {
      expect(wrapper.find('TabContent').length).toEqual(2);
    });
    it('allows for custom classNames on <TabContent>', function () {
      var customTabContentClassWrapper = shallow(React.createElement(Tabs, {
        tabContentClassName: "tab-content"
      }, React.createElement(Tab, {
        label: "firstTab"
      }, "content1"), React.createElement(Tab, {
        label: "lastTab"
      }, "content2")));
      expect(customTabContentClassWrapper.find('.tab-content').length).toEqual(2);
    });
    it('renders hidden props with boolean value', function () {
      var hiddenProp = wrapper.find('TabContent').first().props().hidden;
      expect(_typeof(hiddenProp)).toBe('boolean');
    });
    it('renders selected props with boolean value', function () {
      var selectedProp = wrapper.find('TabContent').first().props().hidden;
      expect(_typeof(selectedProp)).toBe('boolean');
    });
  });
  describe('events', function () {
    describe('click', function () {
      var wrapper = mount(React.createElement(Tabs, null, React.createElement(Tab, {
        label: "firstTab",
        className: "firstTab"
      }, "content1"), React.createElement(Tab, {
        label: "lastTab",
        className: "lastTab"
      }, "content2")));
      describe('state: dropdownHidden', function () {
        it('toggles dropdownHidden state after trigger is clicked', function () {
          var trigger = wrapper.find(".".concat(prefix, "--tabs-trigger"));
          trigger.simulate('click');
          expect(wrapper.state().dropdownHidden).toEqual(false);
          trigger.simulate('click');
          expect(wrapper.state().dropdownHidden).toEqual(true);
        });
        it('toggles hidden state after trigger-text is clicked', function () {
          var triggerText = wrapper.find(".".concat(prefix, "--tabs-trigger-text"));
          triggerText.simulate('click');
          expect(wrapper.state().dropdownHidden).toEqual(false);
          triggerText.simulate('click');
          expect(wrapper.state().dropdownHidden).toEqual(true);
        });
      });
    });
    describe('keydown', function () {
      var wrapper = mount(React.createElement(Tabs, {
        selected: 0
      }, React.createElement(Tab, {
        label: "firstTab",
        className: "firstTab"
      }, "content"), React.createElement(Tab, {
        label: "lastTab",
        className: "lastTab"
      }, "content")));
      var firstTab = wrapper.find('.firstTab').last();
      var lastTab = wrapper.find('.lastTab').last();
      var leftKey = 37;
      var rightKey = 39;
      var spaceKey = 32;
      var enterKey = 13;
      describe('state: selected', function () {
        it('updates selected state when pressing arrow keys', function () {
          firstTab.simulate('keydown', {
            which: rightKey
          });
          expect(wrapper.state().selected).toEqual(1);
          lastTab.simulate('keydown', {
            which: leftKey
          });
          expect(wrapper.state().selected).toEqual(0);
        });
        it('loops focus and selected state from lastTab to firstTab', function () {
          lastTab.simulate('keydown', {
            which: rightKey
          });
          expect(wrapper.state().selected).toEqual(0);
        });
        it('loops focus and selected state from firstTab to lastTab', function () {
          firstTab.simulate('keydown', {
            which: leftKey
          });
          expect(wrapper.state().selected).toEqual(1);
        });
        it('updates selected state when pressing space or enter key', function () {
          firstTab.simulate('keydown', {
            which: spaceKey
          });
          expect(wrapper.state().selected).toEqual(0);
          lastTab.simulate('keydown', {
            which: enterKey
          });
          expect(wrapper.state().selected).toEqual(1);
        });
      });
    });
  });
  describe('default state', function () {
    var wrapper = mount(React.createElement(Tabs, null, React.createElement(Tab, {
      label: "firstTab",
      className: "firstTab"
    }, "content"), React.createElement(Tab, {
      label: "lastTab",
      className: "lastTab"
    }, "content")));
    describe('dropdownHidden', function () {
      it('should be true', function () {
        expect(wrapper.state().dropdownHidden).toEqual(true);
      });
    });
    describe('selected', function () {
      it('should be 0', function () {
        expect(wrapper.state().selected).toEqual(0);
      });
    });
  });
  describe('Allow initial state to draw from props', function () {
    var wrapper = mount(React.createElement(Tabs, {
      selected: 1
    }, React.createElement(Tab, {
      label: "firstTab",
      className: "firstTab"
    }, "content"), React.createElement(Tab, {
      label: "lastTab",
      className: "lastTab"
    }, "content")));
    var children = wrapper.find(Tab);
    it('Should apply the selected property on the selected tab', function () {
      expect(children.first().props().selected).toEqual(false);
      expect(children.last().props().selected).toEqual(true);
    });
  });
});
describe('props update', function () {
  var wrapper = mount(React.createElement(Tabs, {
    selected: 0
  }, React.createElement(Tab, {
    label: "firstTab",
    className: "firstTab"
  }, "content"), React.createElement(Tab, {
    label: "lastTab",
    className: "lastTab"
  }, "content")));
  it('updates selected state when selected prop changes', function () {
    wrapper.setProps({
      selected: 1
    });
    expect(wrapper.state().selected).toEqual(1);
    wrapper.setProps({
      selected: 0
    });
    expect(wrapper.state().selected).toEqual(0);
  });
  it('avoids updating state upon setting props, unless there the value actually changes', function () {
    wrapper.setProps({
      selected: 1
    });
    wrapper.setState({
      selected: 2
    });
    wrapper.setProps({
      selected: 1
    });
    expect(wrapper.state().selected).toEqual(2);
  });
});
describe('selection change', function () {
  var wrapper = mount(React.createElement(Tabs, {
    selected: 0,
    onSelectionChange: jest.fn()
  }, React.createElement(Tab, {
    label: "firstTab"
  }, "content"), React.createElement(Tab, {
    label: "lastTab",
    className: "secondTab"
  }, "content")));
  it('updates selected state when selected prop changes', function () {
    wrapper.find('.secondTab').last().simulate('click');
    expect(wrapper.props().onSelectionChange).toHaveBeenCalledWith(1);
  });
});
describe('TabsSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = shallow(React.createElement(TabsSkeleton, null));
    it('Has the expected classes', function () {
      expect(wrapper.hasClass("".concat(prefix, "--skeleton"))).toEqual(true);
      expect(wrapper.hasClass("".concat(prefix, "--tabs"))).toEqual(true);
    });
  });
});