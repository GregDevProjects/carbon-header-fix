"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _iconsReact = require("@carbon/icons-react");

var _carbonComponents = require("carbon-components");

var _ClickListener = _interopRequireDefault(require("../../internal/ClickListener"));

var _warning = _interopRequireDefault(require("warning"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
var didWarnAboutDeprecation = false;

var ToolbarSearch =
/*#__PURE__*/
function (_Component) {
  _inherits(ToolbarSearch, _Component);

  function ToolbarSearch(props) {
    var _this;

    _classCallCheck(this, ToolbarSearch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ToolbarSearch).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "state", {
      expanded: false
    });

    _defineProperty(_assertThisInitialized(_this), "expandSearch", function () {
      _this.setState({
        expanded: !_this.state.expanded
      });

      _this.input.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function () {
      _this.setState({
        expanded: false
      });
    });

    if (process.env.NODE_ENV !== "production") {
      process.env.NODE_ENV !== "production" ? (0, _warning.default)(didWarnAboutDeprecation, 'The ToolbarSearch component has been deprecated and will be removed in the next major release of `carbon-components-react`') : void 0;
      didWarnAboutDeprecation = true;
    }

    return _this;
  }

  _createClass(ToolbarSearch, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          type = _this$props.type,
          id = _this$props.id,
          placeHolderText = _this$props.placeHolderText,
          labelText = _this$props.labelText,
          role = _this$props.role,
          labelId = _this$props.labelId,
          other = _objectWithoutProperties(_this$props, ["className", "type", "id", "placeHolderText", "labelText", "role", "labelId"]);

      var searchClasses = (0, _classnames.default)((_classNames = {}, _defineProperty(_classNames, "".concat(prefix, "--search ").concat(prefix, "--search--sm ").concat(prefix, "--toolbar-search"), true), _defineProperty(_classNames, "".concat(prefix, "--toolbar-search--active"), this.state.expanded), _defineProperty(_classNames, className, className), _classNames));
      return _react.default.createElement(_ClickListener.default, {
        onClickOutside: this.handleClickOutside
      }, _react.default.createElement("div", {
        className: searchClasses,
        role: role
      }, _react.default.createElement("label", {
        htmlFor: id,
        className: "".concat(prefix, "--label"),
        id: labelId
      }, labelText), _react.default.createElement("input", _extends({}, other, {
        type: type,
        className: "".concat(prefix, "--search-input"),
        id: id,
        "aria-labelledby": labelId,
        placeholder: placeHolderText,
        ref: function ref(input) {
          _this2.input = input;
        }
      })), _react.default.createElement("button", {
        className: "".concat(prefix, "--toolbar-search__btn"),
        title: labelText,
        onClick: this.expandSearch
      }, _react.default.createElement(_iconsReact.Search16, {
        className: "".concat(prefix, "--search-magnifier"),
        "aria-label": labelText
      }))));
    }
  }]);

  return ToolbarSearch;
}(_react.Component);

exports.default = ToolbarSearch;

_defineProperty(ToolbarSearch, "propTypes", {
  /**
   * The child nodes.
   */
  children: _propTypes.default.node,

  /**
   * The CSS class names.
   */
  className: _propTypes.default.string,

  /**
   * The `type` of the `<input>`.
   */
  type: _propTypes.default.string,

  /**
   * `true` to use the small version of the UI.
   */
  small: _propTypes.default.bool,

  /**
   * The placeholder text of the `<input>`.
   */
  placeHolderText: _propTypes.default.string,

  /**
   * The text in the `<label>`.
   */
  labelText: _propTypes.default.node,

  /**
   * The ID of the `<input>`.
   */
  id: _propTypes.default.string
});

_defineProperty(ToolbarSearch, "defaultProps", {
  type: 'search',
  id: 'search__input',
  labelText: '',
  placeHolderText: '',
  role: 'search',
  labelId: 'search__label'
});