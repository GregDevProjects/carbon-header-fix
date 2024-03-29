/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Loading from '../Loading';
import { mount } from 'enzyme';
import { settings } from 'carbon-components';
var prefix = settings.prefix;
describe('Loading', function () {
  describe('Renders as expected', function () {
    var wrapper = mount(React.createElement(Loading, {
      className: "extra-class"
    }));
    var overlay = wrapper.find(".".concat(prefix, "--loading-overlay"));
    var loader = wrapper.find(".".concat(prefix, "--loading"));
    var svg = loader.find('svg');
    it('should render with an overlay', function () {
      expect(overlay.length).toEqual(1);
    });
    it('should render with a loader', function () {
      expect(loader.length).toEqual(1);
    });
    it('shoud render an svg', function () {
      expect(svg.length).toEqual(1);
    });
    it('overlay has the expected class', function () {
      expect(overlay.hasClass("".concat(prefix, "--loading-overlay"))).toEqual(true);
    });
    it('loader has the expected classes', function () {
      expect(loader.hasClass("".concat(prefix, "--loading"))).toEqual(true);
    });
    it('svg has the correct class', function () {
      expect(svg.hasClass("".concat(prefix, "--loading__svg"))).toEqual(true);
    });
    it('should add extra classes that are passed via className', function () {
      expect(loader.hasClass('extra-class')).toEqual(true);
    });
  });
  describe('Sets props and state as expected', function () {
    var wrapper = mount(React.createElement(Loading, {
      className: "extra-class"
    }));
    it("should remove and add ".concat(prefix, "--loading--stop class"), function () {
      wrapper.setProps({
        active: false
      });
      expect(wrapper.find(".".concat(prefix, "--loading")).hasClass("".concat(prefix, "--loading--stop"))).toEqual(true);
      wrapper.setProps({
        active: true
      });
      expect(wrapper.find(".".concat(prefix, "--loading")).hasClass("".concat(prefix, "--loading--stop"))).toEqual(false);
    });
    it('should not render overlay when withOverlay is set to false', function () {
      wrapper.setProps({
        withOverlay: false
      });
      var overlay = wrapper.find(".".concat(prefix, "--loading-overlay"));
      expect(overlay.length).toEqual(0);
    });
    it('should be an assertive live region when active', function () {
      var wrapper = mount(React.createElement(Loading, {
        active: false
      }));

      var getLiveRegion = function getLiveRegion() {
        return wrapper.find('[aria-live]');
      };

      expect(getLiveRegion().prop('aria-atomic')).toBe('true');
      expect(getLiveRegion().prop('aria-live')).toBe('off');
      expect(getLiveRegion().prop('aria-labelledby')).toBeDefined();
      wrapper.setProps({
        active: true
      });
      expect(getLiveRegion().prop('aria-live')).toBe('assertive');
      wrapper.setProps({
        active: false
      });
      expect(getLiveRegion().prop('aria-live')).toBe('off');
    });
    it('should have an associated label for the live region', function () {
      var wrapper = mount(React.createElement(Loading, null));
      var node = wrapper.find('[aria-live][aria-labelledby]');
      var id = node.prop('aria-labelledby');
      expect(wrapper.find("#".concat(id))).toBeDefined();
    });
  });
});