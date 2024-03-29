"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Modal = _interopRequireDefault(require("../Modal"));

var _Button = _interopRequireDefault(require("../Button"));

var _types = require("../../prop-types/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ModalWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ModalWrapper, _React$Component);

  function ModalWrapper() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ModalWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ModalWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "triggerButton", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleOpen", function () {
      _this.setState({
        isOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        isOpen: false
      }, function () {
        return _this.triggerButton.current.focus();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnRequestSubmit", function () {
      var _this$props = _this.props,
          handleSubmit = _this$props.handleSubmit,
          shouldCloseAfterSubmit = _this$props.shouldCloseAfterSubmit;

      if (handleSubmit()) {
        if (shouldCloseAfterSubmit) {
          _this.handleClose();
        }
      }
    });

    return _this;
  }

  _createClass(ModalWrapper, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          _onKeyDown = _this$props2.onKeyDown,
          buttonTriggerText = _this$props2.buttonTriggerText,
          buttonTriggerClassName = _this$props2.buttonTriggerClassName,
          renderTriggerButtonIcon = _this$props2.renderTriggerButtonIcon,
          triggerButtonIconDescription = _this$props2.triggerButtonIconDescription,
          triggerButtonKind = _this$props2.triggerButtonKind,
          disabled = _this$props2.disabled,
          handleSubmit = _this$props2.handleSubmit,
          shouldCloseAfterSubmit = _this$props2.shouldCloseAfterSubmit,
          selectorPrimaryFocus = _this$props2.selectorPrimaryFocus,
          other = _objectWithoutProperties(_this$props2, ["children", "onKeyDown", "buttonTriggerText", "buttonTriggerClassName", "renderTriggerButtonIcon", "triggerButtonIconDescription", "triggerButtonKind", "disabled", "handleSubmit", "shouldCloseAfterSubmit", "selectorPrimaryFocus"]);

      var props = _objectSpread({}, other, {
        selectorPrimaryFocus: selectorPrimaryFocus,
        open: this.state.isOpen,
        onRequestClose: this.handleClose,
        onRequestSubmit: this.handleOnRequestSubmit
      });

      return _react.default.createElement("div", {
        role: "presentation",
        onKeyDown: function onKeyDown(evt) {
          if (evt.which === 27) {
            _this2.handleClose();

            _onKeyDown(evt);
          }
        }
      }, _react.default.createElement(_Button.default, {
        className: buttonTriggerClassName,
        disabled: disabled,
        kind: triggerButtonKind,
        renderIcon: renderTriggerButtonIcon,
        iconDescription: triggerButtonIconDescription,
        onClick: this.handleOpen,
        ref: this.triggerButton
      }, buttonTriggerText), _react.default.createElement(_Modal.default, props, children));
    }
  }]);

  return ModalWrapper;
}(_react.default.Component);

exports.default = ModalWrapper;

_defineProperty(ModalWrapper, "propTypes", {
  status: _propTypes.default.string,
  handleOpen: _propTypes.default.func,
  children: _propTypes.default.node,
  id: _propTypes.default.string,
  buttonTriggerText: _propTypes.default.node,
  buttonTriggerClassName: _propTypes.default.string,
  modalLabel: _propTypes.default.string,
  modalHeading: _propTypes.default.string,
  modalText: _propTypes.default.string,
  passiveModal: _propTypes.default.bool,
  withHeader: _propTypes.default.bool,
  modalBeforeContent: _propTypes.default.bool,
  primaryButtonText: _propTypes.default.string,
  secondaryButtonText: _propTypes.default.string,
  handleSubmit: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  renderTriggerButtonIcon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
  triggerButtonIconDescription: _propTypes.default.string,
  triggerButtonKind: _types.ButtonTypes.buttonKind,
  shouldCloseAfterSubmit: _propTypes.default.bool
});

_defineProperty(ModalWrapper, "defaultProps", {
  primaryButtonText: 'Save',
  secondaryButtonText: 'Cancel',
  triggerButtonIconDescription: 'Provide icon description if icon is used',
  triggerButtonKind: 'primary',
  disabled: false,
  selectorPrimaryFocus: '[data-modal-primary-focus]',
  onKeyDown: function onKeyDown() {}
});