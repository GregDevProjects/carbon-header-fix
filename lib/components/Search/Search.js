"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _iconsReact = require("@carbon/icons-react");

var _carbonComponents = require("carbon-components");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Search =
/*#__PURE__*/
function (_Component) {
  _inherits(Search, _Component);

  function Search() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Search)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasContent: _this.props.value || _this.props.defaultValue || false,
      prevValue: _this.props.value
    });

    _defineProperty(_assertThisInitialized(_this), "clearInput", function (evt) {
      if (!_this.props.value) {
        _this.input.value = '';

        _this.props.onChange(evt);
      } else {
        var clearedEvt = Object.assign({}, evt.target, {
          target: {
            value: ''
          }
        });

        _this.props.onChange(clearedEvt);
      }

      _this.setState({
        hasContent: false
      }, function () {
        return _this.input.focus();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (evt) {
      _this.setState({
        hasContent: evt.target.value !== ''
      });

      _this.props.onChange(evt);
    });

    return _this;
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      var _classNames,
          _classNames2,
          _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          type = _this$props.type,
          _this$props$id = _this$props.id,
          id = _this$props$id === void 0 ? this._inputId = this._inputId || "search__input__id_".concat(Math.random().toString(36).substr(2)) : _this$props$id,
          placeHolderText = _this$props.placeHolderText,
          labelText = _this$props.labelText,
          closeButtonLabelText = _this$props.closeButtonLabelText,
          small = _this$props.small,
          light = _this$props.light,
          other = _objectWithoutProperties(_this$props, ["className", "type", "id", "placeHolderText", "labelText", "closeButtonLabelText", "small", "light"]);

      var hasContent = this.state.hasContent;
      var searchClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--search"), true), _defineProperty(_classNames, "".concat(prefix, "--search--xl"), !small), _defineProperty(_classNames, "".concat(prefix, "--search--sm"), small), _defineProperty(_classNames, "".concat(prefix, "--search--light"), light), _defineProperty(_classNames, className, className), _classNames));
      var clearClasses = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefix, "--search-close"), true), _defineProperty(_classNames2, "".concat(prefix, "--search-close--hidden"), !hasContent), _classNames2));
      var CloseIconX = !small ? _iconsReact.Close20 : _iconsReact.Close16;
      return _react.default.createElement("div", {
        className: searchClasses
      }, _react.default.createElement(_iconsReact.Search16, {
        className: "".concat(prefix, "--search-magnifier")
      }), _react.default.createElement("label", {
        htmlFor: id,
        className: "".concat(prefix, "--label")
      }, labelText), _react.default.createElement("input", _extends({}, other, {
        type: type,
        className: "".concat(prefix, "--search-input"),
        id: id,
        placeholder: placeHolderText,
        onChange: this.handleChange,
        ref: function ref(input) {
          _this2.input = input;
        }
      })), _react.default.createElement("button", {
        className: clearClasses,
        onClick: this.clearInput,
        type: "button",
        "aria-label": closeButtonLabelText
      }, _react.default.createElement(CloseIconX, null)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, state) {
      var value = _ref.value;
      var prevValue = state.prevValue;
      return prevValue === value ? null : {
        hasContent: !!value,
        prevValue: value
      };
    }
  }]);

  return Search;
}(_react.Component);

exports.default = Search;

_defineProperty(Search, "propTypes", {
  /**
   * Specify an optional className to be applied to the container node
   */
  className: _propTypes.default.string,

  /**
   * Optional prop to specify the type of the `<input>`
   */
  type: _propTypes.default.string,

  /**
   * Specify whether the Search should be a small variant
   */
  small: _propTypes.default.bool,

  /**
   * Provide an optional placeholder text for the Search.
   * Note: if the label and placeholder differ,
   * VoiceOver on Mac will read both
   */
  placeHolderText: _propTypes.default.string,

  /**
   * Provide an optional label text for the Search icon
   */
  labelText: _propTypes.default.node.isRequired,

  /**
   * Specify light version or default version of this control
   */
  light: _propTypes.default.bool,

  /**
   * Specify a custom `id` for the input
   */
  id: _propTypes.default.string,

  /**
   * Specify a label to be read by screen readers on the "close" button
   */
  closeButtonLabelText: _propTypes.default.string,

  /**
   * Specify the value of the <input>
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Optionally provide the default value of the <input>
   */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
});

_defineProperty(Search, "defaultProps", {
  type: 'text',
  small: false,
  placeHolderText: '',
  closeButtonLabelText: 'Clear search input',
  onChange: function onChange() {}
});