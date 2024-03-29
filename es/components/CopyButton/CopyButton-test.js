/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import CopyButton from '../CopyButton';
import { Copy16 } from '@carbon/icons-react';
import { shallow, mount } from 'enzyme';
import { settings } from 'carbon-components';
var prefix = settings.prefix;
jest.useFakeTimers();
describe('CopyButton', function () {
  describe('Renders common props as expected', function () {
    var wrapper = shallow( // eslint-disable-next-line jsx-a11y/tabindex-no-positive
    React.createElement(CopyButton, {
      tabIndex: 2,
      className: "extra-class"
    }));
    it('Should set tabIndex if one is passed via props', function () {
      expect(wrapper.props().tabIndex).toEqual(2);
    });
    it('Should add extra classes via className', function () {
      expect(wrapper.hasClass('extra-class')).toBe(true);
    });
  });
  describe('Renders button props as expected', function () {
    var wrapper = shallow(React.createElement(CopyButton, null));
    it('Renders children as expected', function () {
      expect(wrapper.is('button')).toBe(true);
      expect(wrapper.hasClass("".concat(prefix, "--snippet-button"))).toBe(true);
      expect(wrapper.find(".".concat(prefix, "--btn--copy__feedback")).length).toBe(1);
      expect(wrapper.find(Copy16).length).toBe(1);
    });
    it('Should be able to disable the button', function () {
      wrapper.setProps({
        disabled: true
      });
      expect(wrapper.props().disabled).toBe(true);
      wrapper.setProps({
        disabled: false
      });
    });
    it('Should have a default feedback timeout', function () {
      var timeoutWrapper = mount(React.createElement(CopyButton, null));
      expect(timeoutWrapper.props().feedbackTimeout).toBe(2000);
    });
    it('Should be able to set the timeout for displaying feedback', function () {
      var timeoutWrapper = mount(React.createElement(CopyButton, {
        feedbackTimeout: 5000
      }));
      expect(timeoutWrapper.props().feedbackTimeout).toBe(5000);
    });
    it('Should be able to specify the feedback message', function () {
      var feedbackWrapper = mount(React.createElement(CopyButton, {
        feedback: "Copied!"
      }));
      expect(feedbackWrapper.find(".".concat(prefix, "--btn--copy__feedback")).props()['data-feedback']).toBe('Copied!');
    });
  });
  describe('Renders feedback as expected', function () {
    it('Should make the feedback visible', function () {
      var feedbackWrapper = mount(React.createElement(CopyButton, {
        feedback: "Copied!"
      }));

      var feedback = function feedback() {
        return feedbackWrapper.find(".".concat(prefix, "--btn--copy__feedback"));
      };

      expect(feedback().hasClass("".concat(prefix, "--btn--copy__feedback--displayed"))).toBe(false);
      feedbackWrapper.setState({
        showFeedback: true
      });
      expect(feedback().hasClass("".concat(prefix, "--btn--copy__feedback--displayed"))).toBe(true);
    });
    it('Should show feedback for a limited amount of time', function () {
      var feedbackWrapper = mount(React.createElement(CopyButton, {
        feedback: "Copied!",
        feedbackTimeout: 5000
      }));
      expect(feedbackWrapper.state().showFeedback).toBe(false);
      feedbackWrapper.simulate('click');
      expect(feedbackWrapper.state().showFeedback).toBe(true);
      expect(setTimeout.mock.calls.length).toBe(2);
      expect(setTimeout.mock.calls[1][1]).toBe(5000);
      jest.runAllTimers();
      expect(feedbackWrapper.state().showFeedback).toBe(false);
    });
  });
  describe('Triggers appropriate events', function () {
    it('should call the click handler', function () {
      var onClick = jest.fn();
      var clickWrapper = mount(React.createElement(CopyButton, {
        onClick: onClick
      }));
      clickWrapper.simulate('click');
      expect(onClick).toBeCalled();
    });
  });
});