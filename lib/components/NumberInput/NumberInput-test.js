"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _iconsReact = require("@carbon/icons-react");

var _NumberInput = _interopRequireDefault(require("../NumberInput"));

var _NumberInput2 = _interopRequireDefault(require("../NumberInput/NumberInput.Skeleton"));

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
var prefix = _carbonComponents.settings.prefix;
describe('NumberInput', function () {
  describe('should render as expected', function () {
    var wrapper;
    var label;
    var numberInput;
    var container;
    var formItem;
    var icons;
    var helper;
    beforeEach(function () {
      wrapper = (0, _enzyme.mount)(_react.default.createElement(_NumberInput.default, {
        min: 0,
        max: 100,
        id: "test",
        label: "Number Input",
        className: "extra-class",
        invalidText: "invalid text",
        helperText: "testHelper",
        translateWithId:
        /*
          Simulates a condition where up/down button's hover over text matches `iconDescription` in `v10`,
          which is, when the translation for up/down button are not there
        */
        function translateWithId() {
          return undefined;
        }
      }));
      var iconTypes = [_iconsReact.CaretDownGlyph, _iconsReact.CaretUpGlyph];
      label = wrapper.find('label');
      numberInput = wrapper.find('input');
      container = wrapper.find(".".concat(prefix, "--number"));
      formItem = wrapper.find(".".concat(prefix, "--form-item"));
      icons = wrapper.findWhere(function (n) {
        return iconTypes.includes(n.type());
      });
      helper = wrapper.find(".".concat(prefix, "--form__helper-text"));
    });
    describe('input', function () {
      it('renders a numberInput', function () {
        expect(numberInput.length).toEqual(1);
      });
      it('has the expected classes', function () {
        expect(container.hasClass("".concat(prefix, "--number ").concat(prefix, "--number--helpertext"))).toEqual(true);
      });
      it('has renders with form-item wrapper', function () {
        expect(formItem.hasClass("".concat(prefix, "--form-item"))).toEqual(true);
      });
      it('applies extra classes via className', function () {
        expect(container.hasClass('extra-class')).toEqual(true);
      });
      it('should set a min as expected', function () {
        expect(numberInput.prop('min')).toEqual(0);
        wrapper.setProps({
          min: 10
        });
        expect(wrapper.find('input').prop('min')).toEqual(10);
      });
      it('should set a max as expected', function () {
        expect(numberInput.prop('max')).toEqual(100);
        wrapper.setProps({
          max: 10
        });
        expect(wrapper.find('input').prop('max')).toEqual(10);
      });
      it('should set step as expected', function () {
        expect(numberInput.prop('step')).toEqual(1);
        wrapper.setProps({
          step: 10
        });
        expect(wrapper.find('input').prop('step')).toEqual(10);
      });
      it('should set disabled as expected', function () {
        expect(numberInput.prop('disabled')).toEqual(false);
        wrapper.setProps({
          disabled: true
        });
        expect(wrapper.find('input').prop('disabled')).toEqual(true);
      });
      it('should set invalid as expected', function () {
        expect(container.prop('data-invalid')).toEqual(undefined);
        wrapper.setProps({
          invalid: true
        });
        expect(wrapper.find(".".concat(prefix, "--number")).prop('data-invalid')).toEqual(true);
      });
      it('should set invalidText as expected', function () {
        expect(wrapper.find(".".concat(prefix, "--form-requirement")).length).toEqual(0);
        wrapper.setProps({
          invalid: true
        });
        var invalidText = wrapper.find(".".concat(prefix, "--form-requirement"));
        expect(invalidText.length).toEqual(1);
        expect(invalidText.text()).toEqual('invalid text');
      });
      it('should specify light number input as expected', function () {
        expect(wrapper.find('NumberInput').props().light).toEqual(false);
        wrapper.setProps({
          light: true
        });
        expect(wrapper.find('NumberInput').props().light).toEqual(true);
      });
      it('should hide label as expected', function () {
        expect(numberInput.prop('min')).toEqual(0);
        wrapper.setProps({
          hideLabel: true
        });
        expect(wrapper.find('label').hasClass("".concat(prefix, "--visually-hidden"))).toEqual(true);
        expect(wrapper.find(".".concat(prefix, "--number")).hasClass("".concat(prefix, "--number--nolabel"))).toEqual(true);
      });
      describe('initial rendering', function () {
        var getWrapper = function getWrapper(min, max, value) {
          return (0, _enzyme.mount)(_react.default.createElement(_NumberInput.default, {
            min: min,
            max: max,
            value: value,
            id: "test",
            label: "Number Input",
            className: "extra-class"
          }));
        };

        var getNumberInput = function getNumberInput(wrapper) {
          return wrapper.find('input');
        };

        it('should set value as expected when value > min', function () {
          var wrapper = getWrapper(-1, 100, 0);
          var numberInput = getNumberInput(wrapper);
          expect(numberInput.prop('value')).toEqual(0);
        });
        it('should set value as expected when min === 0 and value > min', function () {
          var wrapper = getWrapper(0, 100, 1);
          var numberInput = getNumberInput(wrapper);
          expect(numberInput.prop('value')).toEqual(1);
        });
        it('should set value to equal min when value < min', function () {
          var wrapper = getWrapper(5, 100, 0);
          var numberInput = wrapper.find('input');
          expect(numberInput.prop('value')).toEqual(5);
        });
        it('should set value when min is undefined', function () {
          var wrapper = getWrapper(undefined, 100, 5);
          var numberInput = wrapper.find('input');
          expect(numberInput.prop('value')).toEqual(5);
        });
        it('should set invalidText when value is empty string', function () {
          // Enzyme doesn't seem to allow setState() in a forwardRef-wrapped class component
          wrapper.find('NumberInput').instance().setState({
            value: ''
          });
          wrapper.update();
          var invalidText = wrapper.find(".".concat(prefix, "--form-requirement"));
          expect(invalidText.length).toEqual(1);
          expect(invalidText.text()).toEqual('invalid text');
        });
        it('allow empty string value', function () {
          // Enzyme doesn't seem to allow setState() in a forwardRef-wrapped class component
          wrapper.find('NumberInput').instance().setState({
            value: ''
          });
          wrapper.update();
          wrapper.setProps({
            allowEmpty: true
          });
          var invalidText = wrapper.find(".".concat(prefix, "--form-requirement"));
          expect(invalidText.length).toEqual(0);
        });
        it('should change the value upon change in props', function () {
          wrapper.setProps({
            value: 1
          }); // Enzyme doesn't seem to allow setState() in a forwardRef-wrapped class component

          wrapper.find('NumberInput').instance().setState({
            value: 1
          });
          wrapper.update();
          wrapper.setProps({
            value: 2
          }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

          expect(wrapper.find('NumberInput').instance().state.value).toEqual(2);
        });
        it('should cap the number given to value prop', function () {
          // Enzyme doesn't seem to allow setState() in a forwardRef-wrapped class component
          wrapper.find('NumberInput').instance().setState({
            value: 0
          });
          wrapper.update();
          wrapper.setProps({
            value: 5,
            min: 10,
            max: 20
          }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

          expect(wrapper.find('NumberInput').instance().state.value).toEqual(10);
          wrapper.setProps({
            value: 25,
            min: 10,
            max: 20
          }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

          expect(wrapper.find('NumberInput').instance().state.value).toEqual(20);
        });
        it('should avoid capping when non-number prop is given to value prop', function () {
          // Enzyme doesn't seem to allow setState() in a forwardRef-wrapped class component
          wrapper.find('NumberInput').instance().setState({
            value: 2
          });
          wrapper.update();
          wrapper.setProps({
            value: '',
            min: 1,
            max: 3
          }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

          expect(wrapper.find('NumberInput').instance().state.value).toEqual('');
        });
        it('should avoid change the value upon setting props, unless there the value actually changes', function () {
          wrapper.setProps({
            value: 1
          }); // Enzyme doesn't seem to allow setState() in a forwardRef-wrapped class component

          wrapper.find('NumberInput').instance().setState({
            value: 2
          });
          wrapper.update();
          wrapper.setProps({
            value: 1
          }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

          expect(wrapper.find('NumberInput').instance().state.value).toEqual(2);
        });
      });
    });
    describe('Icon', function () {
      it('renders two Icon components', function () {
        expect(icons.length).toEqual(2);
      });
      it('has the expected default iconDescription', function () {
        expect(wrapper.find('NumberInput').prop('iconDescription')).toEqual('choose a number');
      });
      it('should use correct icons', function () {
        expect(icons.at(0).type()).toBe(_iconsReact.CaretUpGlyph);
        expect(icons.at(1).type()).toBe(_iconsReact.CaretDownGlyph);
      });
      it('adds new iconDescription when passed via props', function () {
        wrapper.setProps({
          iconDescription: 'new description'
        });
        expect(wrapper.prop('iconDescription')).toEqual('new description');
      });
      it('should have iconDescription match Icon component description prop', function () {
        var iconUpText = wrapper.find('button.up-icon').prop('title');
        var iconDownText = wrapper.find('button.down-icon').prop('title');
        var iconDescription = wrapper.find('NumberInput').prop('iconDescription');
        var matches = iconDescription === iconUpText && iconDescription === iconDownText;
        expect(matches).toEqual(true);
      });
    });
    describe('label', function () {
      it('renders a label', function () {
        expect(label.length).toEqual(1);
      });
      it('has the expected classes', function () {
        expect(label.hasClass("".concat(prefix, "--label"))).toEqual(true);
      });
    });
    describe('helper', function () {
      it('renders a helper', function () {
        expect(helper.length).toEqual(1);
      });
      it('renders children as expected', function () {
        wrapper.setProps({
          helperText: _react.default.createElement("span", null, "This helper text has ", _react.default.createElement("a", {
            href: "#"
          }, "a link"), ".")
        });
        var renderedHelper = wrapper.find(".".concat(prefix, "--form__helper-text"));
        expect(renderedHelper.props().children).toEqual(_react.default.createElement("span", null, "This helper text has ", _react.default.createElement("a", {
          href: "#"
        }, "a link"), "."));
      });
      it('should set helper text as expected', function () {
        wrapper.setProps({
          helperText: 'Helper text'
        });
        expect(helper.text()).toEqual('Helper text');
      });
    });
  });
  describe('events', function () {
    describe('disabled numberInput', function () {
      var onClick = jest.fn();
      var onChange = jest.fn();
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(_NumberInput.default, {
        id: "test",
        onClick: onClick,
        onChange: onChange,
        disabled: true
      }));
      var input = wrapper.find('input');
      var upArrow = wrapper.find('button.up-icon');
      var downArrow = wrapper.find('button.down-icon');
      it('should be disabled when numberInput is disabled', function () {
        expect(upArrow.prop('disabled')).toEqual(true);
        expect(downArrow.prop('disabled')).toEqual(true);
      });
      it('should not invoke onClick when up arrow is clicked', function () {
        upArrow.simulate('click');
        expect(onClick).not.toBeCalled();
      });
      it('should not invoke onClick when down arrow is clicked', function () {
        downArrow.simulate('click');
        expect(onClick).not.toBeCalled();
      });
      it('should not invoke onChange when numberInput is changed', function () {
        input.simulate('change');
        expect(onChange).not.toBeCalled();
      });
    });
    describe('enabled numberInput', function () {
      var onClick;
      var onChange;
      var input;
      var upArrow;
      var downArrow;
      var wrapper;
      beforeEach(function () {
        onClick = jest.fn();
        onChange = jest.fn();
        wrapper = (0, _enzyme.mount)(_react.default.createElement(_NumberInput.default, {
          id: "test",
          onClick: onClick,
          onChange: onChange,
          min: 0,
          max: 100
        }));
        input = wrapper.find('input');
        upArrow = wrapper.find(_iconsReact.CaretUpGlyph).closest('button');
        downArrow = wrapper.find(_iconsReact.CaretDownGlyph).closest('button');
      });
      it('should invoke onClick when numberInput is clicked', function () {
        input.simulate('click');
        expect(onClick).toBeCalled();
      });
      it('should invoke onClick when up arrow is clicked', function () {
        upArrow.simulate('click');
        expect(onClick).toBeCalled();
        expect(onClick).toHaveBeenCalledWith(expect.anything(), 'up');
      });
      it('should only increase the value on up arrow click if value is less than max', function () {
        wrapper.setProps({
          value: 100
        });
        upArrow.simulate('click'); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

        expect(wrapper.find('NumberInput').instance().state.value).toEqual(100);
        expect(onClick).not.toBeCalled();
      });
      it('should only decrease the value on down arrow click if value is greater than min', function () {
        wrapper.setProps({
          value: 0
        });
        downArrow.simulate('click'); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

        expect(wrapper.find('NumberInput').instance().state.value).toEqual(0);
        expect(onClick).not.toBeCalled();
      });
      it('should increase by the value of step', function () {
        wrapper.setProps({
          step: 10,
          value: 0
        }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

        expect(wrapper.find('NumberInput').instance().state.value).toEqual(0);
        upArrow.simulate('click'); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

        expect(wrapper.find('NumberInput').instance().state.value).toEqual(10);
      });
      it('should decrease by the value of step', function () {
        wrapper.setProps({
          step: 10,
          value: 100
        }); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

        expect(wrapper.find('NumberInput').instance().state.value).toEqual(100);
        downArrow.simulate('click'); // Enzyme doesn't seem to allow state() in a forwardRef-wrapped class component

        expect(wrapper.find('NumberInput').instance().state.value).toEqual(90);
      });
      it('should not invoke onClick when down arrow is clicked and value is 0', function () {
        downArrow.simulate('click');
        expect(onClick).not.toBeCalled();
      });
      it('should invoke onClick when down arrow is clicked and value is above min', function () {
        wrapper.setProps({
          value: 1
        });
        downArrow.simulate('click');
        expect(onClick).toBeCalled();
        expect(onChange).toBeCalled();
        expect(onClick).toHaveBeenCalledWith(expect.anything(), 'down');
      });
      it('should invoke onChange when numberInput is changed', function () {
        input.simulate('change');
        expect(onChange).toBeCalled();
        expect(onChange).toHaveBeenCalledWith(expect.anything());
      });
    });
  });
});
describe('NumberInputSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_NumberInput2.default, null));
    var container = wrapper.find(".".concat(prefix, "--number"));
    var label = wrapper.find(".".concat(prefix, "--label"));
    it('has the expected classes', function () {
      expect(container.hasClass("".concat(prefix, "--skeleton"))).toEqual(true);
      expect(label.hasClass("".concat(prefix, "--skeleton"))).toEqual(true);
    });
  });
});