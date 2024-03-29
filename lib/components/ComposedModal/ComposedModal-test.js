"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Button = _interopRequireDefault(require("../Button"));

var _ComposedModal = _interopRequireWildcard(require("../ComposedModal"));

var _carbonComponents = require("carbon-components");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var prefix = _carbonComponents.settings.prefix;
describe('<ModalHeader />', function () {
  describe('Renders as expected', function () {
    var titleWrapper = (0, _enzyme.shallow)(_react.default.createElement(_ComposedModal.ModalHeader, {
      title: "Something"
    }));
    var labelWrapper = (0, _enzyme.shallow)(_react.default.createElement(_ComposedModal.ModalHeader, {
      label: "Something"
    }));
    it('does not render title if no title', function () {
      expect(labelWrapper.find(".".concat(prefix, "--modal-header__heading")).exists()).toBe(false);
    });
    it('does not render label if no label', function () {
      expect(titleWrapper.find(".".concat(prefix, "--modal-header__label")).exists()).toBe(false);
    });
    it('renders title if title text', function () {
      expect(titleWrapper.find(".".concat(prefix, "--modal-header__heading")).exists()).toBe(true);
    });
    it('renders label if label text', function () {
      expect(labelWrapper.find(".".concat(prefix, "--modal-header__label")).exists()).toBe(true);
    });
  });
});
describe('<ModalBody />', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_ComposedModal.ModalBody, {
      className: "extra-class"
    }, _react.default.createElement("p", null, "Test")));
    it('renders children as expected', function () {
      expect(wrapper.find('p').length).toBe(1);
    });
    it('renders wrapper as expected', function () {
      expect(wrapper.length).toBe(1);
    });
    it('has the expected classes', function () {
      expect(wrapper.hasClass("".concat(prefix, "--modal-content"))).toEqual(true);
    });
    it('renders extra classes passed in via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
  });
});
describe('<ModalFooter />', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_ComposedModal.ModalFooter, {
      className: "extra-class"
    }, _react.default.createElement("p", null, "Test")));
    it('renders children as expected', function () {
      expect(wrapper.find('p').length).toBe(1);
    });
    it('renders wrapper as expected', function () {
      expect(wrapper.length).toBe(1);
    });
    it('has the expected classes', function () {
      expect(wrapper.hasClass("".concat(prefix, "--modal-footer"))).toEqual(true);
    });
    it('renders extra classes passed in via className', function () {
      expect(wrapper.hasClass('extra-class')).toEqual(true);
    });
  });
  describe('Should render buttons only if appropriate prop passed in in', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_ComposedModal.ModalFooter, {
      className: "extra-class"
    }, _react.default.createElement("p", null, "Test")));
    var primaryWrapper = (0, _enzyme.shallow)(_react.default.createElement(_ComposedModal.ModalFooter, {
      primaryButtonText: "test"
    }));
    var secondaryWrapper = (0, _enzyme.shallow)(_react.default.createElement(_ComposedModal.ModalFooter, {
      secondaryButtonText: "test"
    }));
    it('does not render primary button if no primary text', function () {
      expect(wrapper.find(".".concat(prefix, "--btn--primary")).exists()).toBe(false);
    });
    it('does not render secondary button if no secondary text', function () {
      expect(wrapper.find(".".concat(prefix, "--btn--secondary")).exists()).toBe(false);
    });
    it('renders primary button if primary text', function () {
      var buttonComponent = primaryWrapper.find(_Button.default);
      expect(buttonComponent.exists()).toBe(true);
      expect(buttonComponent.props().kind).toBe('primary');
    });
    it('renders primary button if secondary text', function () {
      var buttonComponent = secondaryWrapper.find(_Button.default);
      expect(buttonComponent.exists()).toBe(true);
      expect(buttonComponent.props().kind).toBe('secondary');
    });
  });
  describe('Should render the appropriate buttons when `danger` prop is true', function () {
    var primaryWrapper = (0, _enzyme.shallow)(_react.default.createElement(_ComposedModal.ModalFooter, {
      primaryButtonText: "test",
      danger: true
    }));
    var secondaryWrapper = (0, _enzyme.shallow)(_react.default.createElement(_ComposedModal.ModalFooter, {
      secondaryButtonText: "test",
      danger: true
    }));
    it('renders danger button if primary text && danger', function () {
      var buttonComponent = primaryWrapper.find(_Button.default);
      expect(buttonComponent.exists()).toBe(true);
      expect(buttonComponent.props().kind).toBe('danger');
    });
    it('renders secondary button if secondary text && danger', function () {
      var buttonComponent = secondaryWrapper.find(_Button.default);
      expect(buttonComponent.exists()).toBe(true);
      expect(buttonComponent.prop('kind')).toBe('secondary');
    });
  });
});
describe('<ComposedModal />', function () {
  it('renders', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_ComposedModal.default, {
      open: true
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('changes the open state upon change in props', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_ComposedModal.default, {
      open: true
    }));
    expect(wrapper.state().open).toEqual(true);
    wrapper.setProps({
      open: false
    });
    expect(wrapper.state().open).toEqual(false);
  });
  it('should change class of <body> upon open state', function () {
    (0, _enzyme.mount)(_react.default.createElement(_ComposedModal.default, {
      open: true
    }));
    expect(document.body.classList.contains('bx--body--with-modal-open')).toEqual(true);
    (0, _enzyme.mount)(_react.default.createElement(_ComposedModal.default, {
      open: false
    }));
    expect(document.body.classList.contains('bx--body--with-modal-open')).toEqual(false);
  });
  it('avoids change the open state upon setting props, unless there the value actually changes', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_ComposedModal.default, null));
    wrapper.setProps({
      open: true
    });
    wrapper.setState({
      open: false
    });
    wrapper.setProps({
      open: true
    });
    expect(wrapper.state().open).toEqual(false);
  });
  it('calls onClick upon user-initiated closing', function () {
    var onClose = jest.fn();
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_ComposedModal.default, {
      open: true,
      onClose: onClose
    }, _react.default.createElement(_ComposedModal.ModalHeader, null)));
    var button = wrapper.find(".".concat(prefix, "--modal-close")).first();
    button.simulate('click');
    expect(wrapper.state().open).toEqual(false);
    expect(onClose.mock.calls.length).toBe(1);
  });
  it('provides a way to prevent upon user-initiated closing', function () {
    var onClose = jest.fn(function () {
      return false;
    });
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_ComposedModal.default, {
      open: true,
      onClose: onClose
    }, _react.default.createElement(_ComposedModal.ModalHeader, null)));
    var button = wrapper.find(".".concat(prefix, "--modal-close")).first();
    button.simulate('click');
    expect(wrapper.state().open).toEqual(true);
  });
  it('should focus on the primary actionable button in ModalFooter by default', function () {
    (0, _enzyme.mount)(_react.default.createElement(_ComposedModal.default, {
      open: true
    }, _react.default.createElement(_ComposedModal.ModalFooter, {
      primaryButtonText: "Save"
    })));
    expect(document.activeElement.classList.contains("".concat(prefix, "--btn--primary"))).toEqual(true);
  });
  it('should focus on the element that matches selectorPrimaryFocus', function () {
    (0, _enzyme.mount)(_react.default.createElement(_ComposedModal.default, {
      open: true,
      selectorPrimaryFocus: ".".concat(prefix, "--modal-close")
    }, _react.default.createElement(_ComposedModal.ModalHeader, {
      label: "Optional Label",
      title: "Example"
    }), _react.default.createElement(_ComposedModal.ModalFooter, {
      primaryButtonText: "Save"
    })));
    expect(document.activeElement.classList.contains("".concat(prefix, "--modal-close"))).toEqual(true);
  });
});