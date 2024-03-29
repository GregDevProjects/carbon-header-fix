"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponents = require("carbon-components");

var _iconsReact = require("@carbon/icons-react");

var _focusTrapReact = _interopRequireDefault(require("focus-trap-react"));

var _toggleClass = _interopRequireDefault(require("../../tools/toggleClass"));

var _Button = _interopRequireDefault(require("../Button"));

var _AriaPropTypes = require("../../prop-types/AriaPropTypes");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var prefix = _carbonComponents.settings.prefix;

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "button", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "outerModal", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "innerModal", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_this), "elementOrParentIsFloatingMenu", function (target) {
      var _this$props$selectors = _this.props.selectorsFloatingMenus,
          selectorsFloatingMenus = _this$props$selectors === void 0 ? [".".concat(prefix, "--overflow-menu-options"), ".".concat(prefix, "--tooltip"), '.flatpickr-calendar'] : _this$props$selectors;

      if (target && typeof target.closest === 'function') {
        return selectorsFloatingMenus.some(function (selector) {
          return target.closest(selector);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (evt) {
      if (_this.props.open) {
        if (evt.which === 27) {
          _this.props.onRequestClose(evt);
        }

        if (evt.which === 13 && _this.props.shouldSubmitOnEnter) {
          _this.props.onRequestSubmit(evt);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMousedown", function (evt) {
      if (_this.innerModal.current && !_this.innerModal.current.contains(evt.target) && !_this.elementOrParentIsFloatingMenu(evt.target)) {
        _this.props.onRequestClose(evt);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "focusModal", function () {
      if (_this.outerModal.current) {
        _this.outerModal.current.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (evt) {
      // Keyboard trap
      if (_this.innerModal.current && _this.props.open && evt.relatedTarget && !_this.innerModal.current.contains(evt.relatedTarget) && !_this.elementOrParentIsFloatingMenu(evt.relatedTarget)) {
        _this.focusModal();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "initialFocus", function (focusContainerElement) {
      var containerElement = focusContainerElement || _this.innerModal.current;
      var primaryFocusElement = containerElement ? containerElement.querySelector(_this.props.selectorPrimaryFocus) : null;

      if (primaryFocusElement) {
        return primaryFocusElement;
      }

      return _this.button && _this.button.current;
    });

    _defineProperty(_assertThisInitialized(_this), "focusButton", function (focusContainerElement) {
      var target = _this.initialFocus(focusContainerElement);

      if (target) {
        target.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTransitionEnd", function (evt) {
      if (evt.target === evt.currentTarget && // Not to handle `onTransitionEnd` on child DOM nodes
      _this.outerModal.current && _this.outerModal.current.offsetWidth && _this.outerModal.current.offsetHeight && _this.beingOpen) {
        if (!_this.props.focusTrap) {
          _this.focusButton(evt.currentTarget);
        }

        _this.beingOpen = false;
      }
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.open && this.props.open) {
        this.beingOpen = true;
      } else if (prevProps.open && !this.props.open) {
        this.beingOpen = false;
      }

      (0, _toggleClass.default)(document.body, "".concat(prefix, "--body--with-modal-open"), this.props.open);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _toggleClass.default)(document.body, "".concat(prefix, "--body--with-modal-open"), false);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _toggleClass.default)(document.body, "".concat(prefix, "--body--with-modal-open"), this.props.open);

      if (!this.props.open) {
        return;
      }

      if (!this.props.focusTrap) {
        this.focusButton(this.innerModal.current);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          modalHeading = _this$props.modalHeading,
          modalLabel = _this$props.modalLabel,
          modalAriaLabel = _this$props.modalAriaLabel,
          passiveModal = _this$props.passiveModal,
          secondaryButtonText = _this$props.secondaryButtonText,
          primaryButtonText = _this$props.primaryButtonText,
          open = _this$props.open,
          onRequestClose = _this$props.onRequestClose,
          onRequestSubmit = _this$props.onRequestSubmit,
          onSecondarySubmit = _this$props.onSecondarySubmit,
          iconDescription = _this$props.iconDescription,
          primaryButtonDisabled = _this$props.primaryButtonDisabled,
          danger = _this$props.danger,
          selectorPrimaryFocus = _this$props.selectorPrimaryFocus,
          selectorsFloatingMenus = _this$props.selectorsFloatingMenus,
          shouldSubmitOnEnter = _this$props.shouldSubmitOnEnter,
          focusTrap = _this$props.focusTrap,
          other = _objectWithoutProperties(_this$props, ["modalHeading", "modalLabel", "modalAriaLabel", "passiveModal", "secondaryButtonText", "primaryButtonText", "open", "onRequestClose", "onRequestSubmit", "onSecondarySubmit", "iconDescription", "primaryButtonDisabled", "danger", "selectorPrimaryFocus", "selectorsFloatingMenus", "shouldSubmitOnEnter", "focusTrap"]);

      var onSecondaryButtonClick = onSecondarySubmit ? onSecondarySubmit : onRequestClose;
      var modalClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--modal"), true), _defineProperty(_classNames, "".concat(prefix, "--modal-tall"), !passiveModal), _defineProperty(_classNames, 'is-visible', open), _defineProperty(_classNames, "".concat(prefix, "--modal--danger"), this.props.danger), _defineProperty(_classNames, this.props.className, this.props.className), _classNames));

      var modalButton = _react.default.createElement("button", {
        className: "".concat(prefix, "--modal-close"),
        type: "button",
        onClick: onRequestClose,
        title: iconDescription,
        "aria-label": iconDescription,
        ref: this.button
      }, _react.default.createElement(_iconsReact.Close20, {
        "aria-label": iconDescription,
        className: "".concat(prefix, "--modal-close__icon")
      }));

      var getAriaLabelledBy = function () {
        var ariaLabelledBy = [];

        if (modalLabel) {
          ariaLabelledBy.push("".concat(prefix, "--modal-header__label"), "".concat(prefix, "--modal-header__heading"));
        }

        return ariaLabelledBy.length ? ariaLabelledBy.join(' ') : null;
      }();

      var modalBody = _react.default.createElement("div", {
        ref: this.innerModal,
        role: "dialog",
        className: "".concat(prefix, "--modal-container"),
        "aria-label": modalLabel ? null : this.props['aria-label'] || modalAriaLabel || modalHeading,
        "aria-labelledby": getAriaLabelledBy,
        "aria-modal": "true"
      }, _react.default.createElement("div", {
        className: "".concat(prefix, "--modal-header")
      }, passiveModal && modalButton, modalLabel && _react.default.createElement("h2", {
        className: "".concat(prefix, "--modal-header__label")
      }, modalLabel), _react.default.createElement("h3", {
        className: "".concat(prefix, "--modal-header__heading")
      }, modalHeading), !passiveModal && modalButton), _react.default.createElement("div", {
        className: "".concat(prefix, "--modal-content")
      }, this.props.children), !passiveModal && _react.default.createElement("div", {
        className: "".concat(prefix, "--modal-footer")
      }, _react.default.createElement(_Button.default, {
        kind: "secondary",
        onClick: onSecondaryButtonClick
      }, secondaryButtonText), _react.default.createElement(_Button.default, {
        kind: danger ? 'danger' : 'primary',
        disabled: primaryButtonDisabled,
        onClick: onRequestSubmit,
        inputref: this.button
      }, primaryButtonText)));

      var modal = _react.default.createElement("div", _extends({}, other, {
        onKeyDown: this.handleKeyDown,
        onMouseDown: this.handleMousedown,
        onBlur: this.handleBlur,
        className: modalClasses,
        role: "presentation",
        tabIndex: -1,
        onTransitionEnd: this.props.open ? this.handleTransitionEnd : undefined,
        ref: this.outerModal
      }), modalBody);

      return !focusTrap ? modal : // `<FocusTrap>` has `active: true` in its `defaultProps`
      _react.default.createElement(_focusTrapReact.default, {
        active: !!open,
        focusTrapOptions: {
          initialFocus: this.initialFocus
        }
      }, modal);
    }
  }]);

  return Modal;
}(_react.Component);

exports.default = Modal;

_defineProperty(Modal, "propTypes", _objectSpread({
  /**
   * Provide the contents of your Modal
   */
  children: _propTypes.default.node,

  /**
   * Specify an optional className to be applied to the modal root node
   */
  className: _propTypes.default.string,

  /**
   * Specify whether the modal should be button-less
   */
  passiveModal: _propTypes.default.bool,

  /**
   * Specify a handler for closing modal.
   * The handler should care of closing modal, e.g. changing `open` prop.
   */
  onRequestClose: _propTypes.default.func,

  /**
   * Specify the DOM element ID of the top-level node.
   */
  id: _propTypes.default.string,

  /**
   * Specify the content of the modal header title.
   */
  modalHeading: _propTypes.default.node,

  /**
   * Specify the content of the modal header label.
   */
  modalLabel: _propTypes.default.node,

  /**
   * Specify a label to be read by screen readers on the modal root node
   */
  modalAriaLabel: _propTypes.default.string,

  /**
   * Specify the text for the secondary button
   */
  secondaryButtonText: _propTypes.default.string,

  /**
   * Specify the text for the primary button
   */
  primaryButtonText: _propTypes.default.string,

  /**
   * Specify whether the Modal is currently open
   */
  open: _propTypes.default.bool,

  /**
   * Specify a handler for "submitting" modal.
   * The handler should care of closing modal, e.g. changing `open` prop, if necessary.
   */
  onRequestSubmit: _propTypes.default.func,

  /**
   * Specify a handler for keypresses.
   */
  onKeyDown: _propTypes.default.func,

  /**
   * Provide a description for "close" icon that can be read by screen readers
   */
  iconDescription: _propTypes.default.string,

  /**
   * Specify whether the Button should be disabled, or not
   */
  primaryButtonDisabled: _propTypes.default.bool,

  /**
   * Specify a handler for the secondary button.
   * Useful if separate handler from `onRequestClose` is desirable
   */
  onSecondarySubmit: _propTypes.default.func,

  /**
   * Specify whether the Modal is for dangerous actions
   */
  danger: _propTypes.default.bool,

  /**
   * Specify if Enter key should be used as "submit" action
   */
  shouldSubmitOnEnter: _propTypes.default.bool,

  /**
   * Specify CSS selectors that match DOM elements working as floating menus.
   * Focusing on those elements won't trigger "focus-wrap" behavior
   */
  selectorsFloatingMenus: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Specify a CSS selector that matches the DOM element that should
   * be focused when the Modal opens
   */
  selectorPrimaryFocus: _propTypes.default.string,

  /**
   * Specify whether the modal should use 3rd party `focus-trap-react` for the focus-wrap feature.
   * NOTE: by default this is true.
   */
  focusTrap: _propTypes.default.bool
}, _AriaPropTypes.AriaLabelPropType));

_defineProperty(Modal, "defaultProps", {
  onRequestClose: function onRequestClose() {},
  onRequestSubmit: function onRequestSubmit() {},
  primaryButtonDisabled: false,
  onKeyDown: function onKeyDown() {},
  passiveModal: false,
  iconDescription: 'close the modal',
  modalHeading: '',
  modalLabel: '',
  selectorPrimaryFocus: '[data-modal-primary-focus]',
  focusTrap: true
});