"use strict";

var _react = _interopRequireDefault(require("react"));

var _iconsReact = require("@carbon/icons-react");

var _Select = _interopRequireDefault(require("../Select"));

var _SelectItem = _interopRequireDefault(require("../SelectItem"));

var _Select2 = _interopRequireDefault(require("../Select/Select.Skeleton"));

var _enzyme = require("enzyme");

var _carbonComponents = require("carbon-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var prefix = _carbonComponents.settings.prefix;
describe('Select', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Select.default, {
      id: "testing",
      labelText: "Select",
      className: "extra-class",
      helperText: "Helper text"
    }, _react.default.createElement(_SelectItem.default, null), _react.default.createElement(_SelectItem.default, null)));
    var selectContainer = wrapper.find(".".concat(prefix, "--form-item > div"));
    var label = wrapper.find('label');

    var selectWrapper = function selectWrapper() {
      return wrapper.find(_Select.default);
    };

    var select = function select() {
      return wrapper.find('select');
    };

    var helper = wrapper.find(".".concat(prefix, "--form__helper-text"));
    describe('selectContainer', function () {
      it('renders a container', function () {
        expect(selectContainer.length).toEqual(1);
      });
      it('renders the down arrow icon', function () {
        expect(selectContainer.find(_iconsReact.ChevronDown16).length).toEqual(1);
      });
      it('has the expected classes', function () {
        expect(selectContainer.hasClass("".concat(prefix, "--select"))).toEqual(true);
      });
      it('applies extra classes specified via className', function () {
        expect(selectContainer.hasClass('extra-class')).toEqual(true);
      });
      it('has the expected default iconDescription', function () {
        expect(selectWrapper().props().iconDescription).toEqual('open list of options');
      });
      it('adds new iconDescription when passed via props', function () {
        wrapper.setProps({
          iconDescription: 'new description'
        });
        expect(wrapper.props().iconDescription).toEqual('new description');
      });
      it('should have iconDescription match Icon component description prop', function () {
        var description = wrapper.find(_iconsReact.ChevronDown16).props()['aria-label'];
        var matches = wrapper.props().iconDescription === description;
        expect(matches).toEqual(true);
      });
      it('should specify light select as expected', function () {
        expect(selectWrapper().props().light).toEqual(false);
        wrapper.setProps({
          light: true
        });
        expect(selectWrapper().props().light).toEqual(true);
      });
    });
    describe('select', function () {
      it('renders a select', function () {
        expect(selectWrapper().length).toEqual(1);
      });
      it('has the expected classes', function () {
        expect(select().hasClass("".concat(prefix, "--select-input"))).toEqual(true);
      });
      it('has the expected id', function () {
        expect(selectWrapper().props().id).toEqual('testing');
      });
      it('should set defaultValue as expected', function () {
        wrapper.setProps({
          defaultValue: 'select-1'
        });
        expect(select().props().defaultValue).toEqual('select-1');
      });
      it('should set disabled as expected', function () {
        expect(selectWrapper().props().disabled).toEqual(false);
        wrapper.setProps({
          disabled: true
        });
        expect(selectWrapper().props().disabled).toEqual(true);
      });
      it('renders children as expected', function () {
        expect(selectWrapper().props().children.length).toEqual(2);
      });
    });
    describe('label', function () {
      it('renders a label', function () {
        expect(label.length).toEqual(1);
      });
      it('has the expected classes', function () {
        expect(label.hasClass("".concat(prefix, "--label"))).toEqual(true);
      });
      it('has the expected htmlFor value', function () {
        expect(label.props().htmlFor).toEqual('testing');
      });
      it('renders children as expected', function () {
        expect(label.props().children).toEqual('Select');
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
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_Select.default, {
      id: "testing",
      labelText: "Select",
      className: "extra-class",
      inline: true
    }, _react.default.createElement(_SelectItem.default, null), _react.default.createElement(_SelectItem.default, null)));
    var selectContainer = wrapper.find(".".concat(prefix, "--form-item > div"));
    it('has the expected classes', function () {
      expect(selectContainer.hasClass("".concat(prefix, "--select--inline"))).toEqual(true);
    });
  });
});
describe('refs', function () {
  it('should accept refs', function () {
    var MyComponent =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(MyComponent, _React$Component);

      function MyComponent(props) {
        var _this;

        _classCallCheck(this, MyComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(MyComponent).call(this, props));
        _this.myRef = _react.default.createRef();
        _this.focus = _this.focus.bind(_assertThisInitialized(_this));
        return _this;
      }

      _createClass(MyComponent, [{
        key: "focus",
        value: function focus() {
          this.myRef.current.focus();
        }
      }, {
        key: "render",
        value: function render() {
          return _react.default.createElement(_Select.default, {
            id: "test",
            labelText: "testlabel",
            ref: this.myRef
          });
        }
      }]);

      return MyComponent;
    }(_react.default.Component);

    var wrapper = (0, _enzyme.mount)(_react.default.createElement(MyComponent, null));
    expect(document.activeElement.type).toBeUndefined();
    wrapper.instance().focus();
    expect(document.activeElement.type).toEqual('select-one');
  });
});
describe('SelectSkeleton', function () {
  describe('Renders as expected', function () {
    var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Select2.default, null));
    var select = wrapper.find(".".concat(prefix, "--select"));
    it('Has the expected classes', function () {
      expect(select.hasClass("".concat(prefix, "--skeleton"))).toEqual(true);
    });
  });
});